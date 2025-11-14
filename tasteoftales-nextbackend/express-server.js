// Load .env if present (optional). Wrapped in try/catch so server runs if dotenv is not installed.
try { require('dotenv').config(); } catch (e) { /* dotenv not installed; skip */ }
const express = require('express');
const cors = require('cors');
// optional logger (morgan). If not installed, we'll fall back to console logging.
let morgan;
try { morgan = require('morgan'); } catch (e) { morgan = null; }

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
if (morgan) app.use(morgan('dev')); else console.log('morgan not installed — using console logging');

const path = require('path');
const fs = require('fs');

// Serve frontend static files if a production build exists at ../dist
const frontendDist = path.join(__dirname, '..', 'dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  console.log('Serving frontend from', frontendDist);
}

// Simple root route so visiting http://localhost:3001/ shows a helpful message
// Root: if frontend build exists, serve index.html; otherwise show small info page with admin sync button
// Admin page HTML (served when no frontend build exists, and also exposed at /admin/console)
const adminPageHtml = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Admin Console — Taste of Tales</title>
        <style>
          :root{--bg:#f6f2ee;--card:#ffffff;--accent:#8D4F2F;--muted:#6b5848}
          html,body{height:100%;margin:0;background:var(--bg);font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial}
          /* Align to top and reduce padding so content sits higher on the page */
          .wrap{min-height:100%;display:flex;align-items:flex-start;justify-content:center;padding:1.25rem 2rem}
          /* No visual container: keep content centered but render directly on the page */
          .card{width:100%;max-width:820px;background:transparent;border-radius:0;box-shadow:none;padding:12px;border-left:none;margin-top:1.2rem}
          h1{margin:0 0 6px;font-family:inherit;color:var(--accent);font-size:1.9rem}
          .muted{color:var(--muted);margin:0 0 16px}
          .row{display:flex;gap:12px;align-items:center}
          label{display:block;font-size:0.95rem;color:#4b4036;margin-bottom:6px}
          input[type=text]{width:100%;padding:10px 12px;border:1px solid #ebe6e3;border-radius:8px;font-size:0.95rem}
          .controls{display:flex;gap:10px;margin-top:12px}
          button{background:var(--accent);color:#fff;border:0;padding:10px 14px;border-radius:10px;cursor:pointer;font-weight:600;position:relative;z-index:2}
          button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(141,79,47,0.12)}
          .status-box{background:#fff9f6;border-radius:8px;padding:12px;border:1px solid rgba(141,79,47,0.06);margin-bottom:14px}
          pre.output{white-space:pre-wrap;background:#111827;color:#e6eef8;padding:12px;border-radius:8px;margin-top:14px;font-size:0.95rem}
          a.small{color:var(--accent);text-decoration:underline}
          footer{margin-top:12px;color:var(--muted);font-size:0.9rem}
          @media (max-width:520px){.card{padding:18px}} 
        </style>
      </head>
      <body>
        <main class="wrap">
          <section class="card" role="main" aria-labelledby="admin-title">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
              <div>
                <h1 id="admin-title">Admin Console</h1>
                <div class="muted">Backend tools for Taste of Tales — quick sync and status</div>
              </div>
              <div style="text-align:right">
                <div style="font-size:0.85rem;color:var(--muted)">Server: <strong>http://localhost:${PORT}</strong></div>
              </div>
            </div>

            <div id="status" class="status-box" aria-live="polite">Loading status…</div>

            <form id="syncForm" onsubmit="return window.handleSyncSubmit && window.handleSyncSubmit(event)">
              <div style="margin-bottom:8px">
                  <label for="adminKey">Admin key (optional — used for authenticating this request)</label>
                  <input id="adminKey" name="adminKey" type="text" placeholder="Enter admin key (sent in header)" />
                </div>
                <div style="margin-bottom:8px">
                  <label for="providerKey">LoffeeLabs API key (optional)</label>
                  <input id="providerKey" name="providerKey" type="text" placeholder="Leave blank to use server LOFFEE_API_KEY" />
                </div>
              <div style="margin-bottom:6px">
                <label style="display:inline-flex;align-items:center;gap:8px"><input id="confirm" type="checkbox" checked /> Confirm action</label>
              </div>
              <div class="controls">
                <button id="syncBtn" type="submit">Run Sync</button>
                <button id="statusBtn" type="button" class="secondary" onclick="window.fetchStatus && window.fetchStatus()">Refresh Status</button>
              </div>
            </form>

            <pre id="output" class="output" style="display:none" aria-live="polite"></pre>

            <p style="margin-top:14px" class="muted">Useful endpoint: <a class="small" href="/api/products">/api/products</a> — GET products</p>
            <footer>Tip: this admin page is for development & debugging. For production, secure access appropriately.</footer>
          </section>
        </main>

        <script>
          // Expose fetchStatus so it can be invoked from inline onclicks (robust if addEventListener fails)
          window.fetchStatus = async function fetchStatus(){
            const el = document.getElementById('status');
            try{
              const res = await fetch('/admin/status');
              const data = await res.json();
              const last = data.lastSync ? new Date(data.lastSync).toLocaleString() : 'Never';
              el.innerHTML = '<strong>Admin key configured:</strong> ' + (data.adminKeyConfigured ? 'Yes' : 'No') + ' &nbsp;•&nbsp; <strong>Last sync:</strong> ' + last;
            }catch(err){
              el.innerHTML = '<span style="color:#b02a2a">Failed to load status</span>';
            }
          };

          // Expose a submit handler for the form so the Run Sync button works even if event listeners
          // can't be attached due to an environment that blocks addEventListener.
          window.handleSyncSubmit = async function handleSyncSubmit(e){
            if (e && e.preventDefault) e.preventDefault();
            const out = document.getElementById('output');
            out.style.display = 'none';
            const adminKeyVal = document.getElementById('adminKey').value.trim();
            const providerKeyVal = document.getElementById('providerKey').value.trim();
            const confirmed = document.getElementById('confirm').checked;
            if(!confirmed){
              alert('Please confirm the action by checking the box.');
              return false;
            }
            const body = providerKeyVal ? { apiKey: providerKeyVal } : {};
            const headers = { 'Content-Type': 'application/json' };
            if (adminKeyVal) headers['x-admin-key'] = adminKeyVal;
            try{
              const res = await fetch('/admin/sync-loffeelabs', { method: 'POST', headers, body: JSON.stringify(body) });
              const data = await res.json();
              out.style.display = 'block'; out.textContent = JSON.stringify(data, null, 2);
              await window.fetchStatus();
            }catch(err){
              out.style.display = 'block'; out.textContent = 'Sync failed: ' + err.message;
            }
            return false;
          };

          // initial load
          window.fetchStatus();
        </script>
      </body>
    </html>
`;

app.get('/', (req, res) => {
  if (fs.existsSync(path.join(frontendDist, 'index.html'))) {
    return res.sendFile(path.join(frontendDist, 'index.html'));
  }
  res.send(adminPageHtml);
});

// Expose admin UI even when a frontend build exists so developers can access sync tools at a stable URL
app.get('/admin/console', (req, res) => {
  return res.send(adminPageHtml);
});

// If frontend build exists, let the SPA handle client-side routes (avoid intercepting /api and /admin)
if (fs.existsSync(frontendDist)) {
  app.get(/^(?!\/api|\/admin).*/, (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

// DB helpers
const { run, all, get } = require('./db/sqlite');

// In-memory products array (demo) kept as fallback only
let products = [
  { id: 1, name: 'Coffee A', price: 100 },
  { id: 2, name: 'Coffee B', price: 120 },
];

// Track last sync timestamp for admin/status
let lastSync = null;

// Initialize SQLite database (table + seed). We export seedFromLoffeelabs so we can re-sync on demand.
let seedFromLoffeelabs = null;
try {
  const dbInit = require('./db/init');
  if (typeof dbInit === 'function') {
    // older default export
    dbInit().catch(err => console.error('DB init failed:', err));
  } else if (dbInit && typeof dbInit.initDB === 'function') {
    dbInit.initDB().catch(err => console.error('DB init failed:', err));
    seedFromLoffeelabs = dbInit.seedFromLoffeelabs;
  }
} catch (err) {
  console.warn('DB init skipped (module not available):', err.message);
}

// Optional periodic sync using node-cron
try {
  const cron = require('node-cron');
  if (seedFromLoffeelabs) {
    // every 6 hours
    cron.schedule('0 */6 * * *', async () => {
      try {
        console.log('Periodic sync: fetching beans from Loffeelabs...');
        // clear existing products then seed
        await run('DELETE FROM products');
        const apiKey = process.env.LOFFEE_API_KEY;
        const count = await seedFromLoffeelabs(apiKey);
        console.log(`Periodic sync completed — inserted ${count} items.`);
      } catch (err) {
        console.warn('Periodic sync failed:', err.message);
      }
    });
    console.log('Scheduled periodic Loffeelabs sync (every 6 hours).');
  }
} catch (err) {
  console.log('node-cron not installed; skipping periodic sync.');
}

// Simple validation middleware for product payloads
function validateProductPayload(req, res, next) {
  const { name, price } = req.body;
  if (req.method === 'POST') {
    if (!name || String(name).trim() === '') return res.status(400).json({ error: 'Name is required' });
  }
  if (typeof price !== 'undefined') {
    const num = Number(price);
    if (Number.isNaN(num)) return res.status(400).json({ error: 'Price must be a number' });
    // normalize
    req.body.price = num;
  }
  next();
}

// GET /api/products - returns all products from SQLite
app.get('/api/products', async (req, res) => {
  try {
    const rows = await all('SELECT id, name, price FROM products ORDER BY id');
    return res.json(rows);
  } catch (err) {
    console.error('GET /api/products error:', err);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// POST /api/products - create new product
app.post('/api/products', validateProductPayload, async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name) return res.status(400).json({ error: 'Missing name' });
    const result = await run('INSERT INTO products (name, price) VALUES (?, ?)', [name, price || null]);
    const inserted = await get('SELECT id, name, price FROM products WHERE id = ?', [result.lastID]);
    return res.status(201).json(inserted);
  } catch (err) {
    console.error('POST /api/products error:', err);
    return res.status(500).json({ error: 'Failed to create product' });
  }
});

// PUT /api/products/:id - update existing product
app.put('/api/products/:id', validateProductPayload, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, price } = req.body;
    const existing = await get('SELECT id FROM products WHERE id = ?', [id]);
    if (!existing) return res.status(404).json({ error: 'Not found' });
    await run('UPDATE products SET name = ?, price = ? WHERE id = ?', [name || null, price || null, id]);
    const updated = await get('SELECT id, name, price FROM products WHERE id = ?', [id]);
    return res.json(updated);
  } catch (err) {
    console.error('PUT /api/products/:id error:', err);
    return res.status(500).json({ error: 'Failed to update product' });
  }
});

// DELETE /api/products/:id - delete product
app.delete('/api/products/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const existing = await get('SELECT id FROM products WHERE id = ?', [id]);
    if (!existing) return res.status(404).json({ error: 'Not found' });
    await run('DELETE FROM products WHERE id = ?', [id]);
    return res.json({ success: true });
  } catch (err) {
    console.error('DELETE /api/products/:id error:', err);
    return res.status(500).json({ error: 'Failed to delete product' });
  }
});

// Admin endpoint to force a sync from Loffeelabs. Accepts optional { apiKey } in the body.
function requireAdmin(req, res, next) {
  // look for admin key in header x-admin-key, or body.adminKey / query.adminKey
  const provided = (req.get('x-admin-key') || (req.body && req.body.adminKey) || req.query.adminKey || '').trim();
  const expected = (process.env.ADMIN_KEY || '').trim();
  if (expected && provided && provided === expected) return next();
  // if no ADMIN_KEY is configured, allow only if server has LOFFEE_API_KEY and request provided nothing (server uses its key)
  if (!expected && process.env.LOFFEE_API_KEY && !provided) return next();
  return res.status(401).json({ error: 'Unauthorized' });
}

app.post('/admin/sync-loffeelabs', requireAdmin, async (req, res) => {
  if (!seedFromLoffeelabs) return res.status(501).json({ error: 'Seeding not available' });
  try {
    const apiKey = req.body && req.body.apiKey ? req.body.apiKey : process.env.LOFFEE_API_KEY;
    if (!apiKey) return res.status(400).json({ error: 'Missing API key' });
    // clear existing data, then seed
    await run('DELETE FROM products');
    const count = await seedFromLoffeelabs(apiKey);
    // record last sync time on success
    lastSync = new Date().toISOString();
    return res.json({ success: true, inserted: count });
  } catch (err) {
    console.error('Sync failed:', err);
    return res.status(500).json({ error: 'Sync failed', message: err.message });
  }
});

// Admin status endpoint - useful for the SPA to show whether ADMIN_KEY is configured and last sync
app.get('/admin/status', (req, res) => {
  const adminKeyConfigured = !!(process.env.ADMIN_KEY && String(process.env.ADMIN_KEY).trim());
  return res.json({ adminKeyConfigured, lastSync });
});

// Start server only if this file is run directly. Export `app` for tests.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Express server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;

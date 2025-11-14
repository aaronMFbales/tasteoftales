const { run, get } = require('./sqlite');

// Try to use global fetch if available, otherwise node-fetch
let fetcher;
try {
  fetcher = global.fetch || require('node-fetch');
} catch (e) {
  fetcher = null;
}

async function seedFromLoffeelabs(apiKey) {
  if (!fetcher) throw new Error('fetch is not available (install node-fetch)');
  const url = `https://www.loffeelabs.com/wp-json/beanbase/v1/beans?api_key=${apiKey}`;
  const resp = await fetcher(url);
  if (!resp.ok) {
    // try to include response body (truncated) to aid debugging (e.g., 403 details)
    let bodyText = '<no-body>';
    try {
      bodyText = await resp.text();
    } catch (e) {
      bodyText = `<unable to read body: ${e.message}>`;
    }
    const short = bodyText && bodyText.length > 400 ? bodyText.slice(0, 400) + '...' : bodyText;
    throw new Error(`Remote fetch failed: ${resp.status} ${resp.statusText} - ${short}`);
  }
  const payload = await resp.json();
  const items = payload && payload.data ? payload.data : payload;
  if (!Array.isArray(items)) throw new Error('Unexpected payload shape from Loffeelabs');

  let inserted = 0;
  for (const item of items) {
    // best-effort mapping
    const name = item.name || item.title || item.bean_name || item.product_title || 'Unnamed Bean';
    const priceRaw = item.price || item.meta?.price || item.fields?.price;
    const price = priceRaw != null ? Number(priceRaw) : null;
    await run('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
    inserted++;
  }
  return inserted;
}

async function initDB() {
  try {
    await run(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL
      );
    `);

    const row = await get('SELECT COUNT(*) as count FROM products');
    if (!row || row.count === 0) {
      const apiKey = process.env.LOFFEE_API_KEY;
      if (apiKey && fetcher) {
        try {
          console.log('Seeding products table from Loffeelabs...');
          const count = await seedFromLoffeelabs(apiKey);
          console.log(`Seeded products table with ${count} items from Loffeelabs.`);
          return;
        } catch (err) {
          console.warn('Failed to seed from Loffeelabs, falling back to demo data:', err.message);
        }
      }

      // fallback demo data
      await run('INSERT INTO products (name, price) VALUES (?, ?)', ['Coffee A', 100]);
      await run('INSERT INTO products (name, price) VALUES (?, ?)', ['Coffee B', 120]);
      console.log('Seeded products table with demo data.');
    }
  } catch (err) {
    console.error('Error initializing DB:', err);
    throw err;
  }
}

module.exports = {
  initDB,
  seedFromLoffeelabs,
};

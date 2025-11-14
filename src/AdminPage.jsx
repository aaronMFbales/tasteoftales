import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AdminPage() {
  const [adminKey, setAdminKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [serverStatus, setServerStatus] = useState(null);

  async function handleSync(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('http://localhost:3001/admin/sync-loffeelabs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
        body: JSON.stringify({ apiKey: adminKey }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ ok: false, message: data.error || data.message || `HTTP ${res.status}` });
      } else {
        setStatus({ ok: true, message: data.message || `Inserted ${data.inserted ?? 'unknown'} items` });
        // refresh server status after a successful sync
        fetchStatus().catch(() => {});
      }
    } catch (err) {
      setStatus({ ok: false, message: err.message || String(err) });
    } finally {
      setLoading(false);
    }
  }

  async function fetchStatus() {
    try {
      const res = await fetch('http://localhost:3001/admin/status');
      if (!res.ok) return setServerStatus({ error: `HTTP ${res.status}` });
      const data = await res.json();
      setServerStatus(data);
    } catch (err) {
      setServerStatus({ error: err.message });
    }
  }

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: '#ece0d1', position: 'relative' }}>
      <header
        style={{
          width: '100%',
          background: '#8D4F2F',
          color: '#fff',
          padding: '0.55rem 0 0.7rem 0',
          textAlign: 'center',
          fontSize: '2.3rem',
          fontWeight: 'bold',
          letterSpacing: '0.07em',
          fontFamily: 'Pacifico, cursive',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10002,
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 8px 32px 0 #a0521c88, 0 2px 0 #d6ad60',
          borderBottom: '6px solid #fff7ed',
          borderRadius: '0 0 2.5rem 2.5rem',
          filter: 'drop-shadow(0 8px 24px #d6ad6088)',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', marginLeft: '2rem', marginRight: '2rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" style={{ width: '2.2rem', height: '2.2rem' }}>
            <path d="M10.19 2.62a2.25 2.25 0 0 1 3.62 0l7.19 9.6c.97 1.3.06 3.13-1.62 3.13H19v5.25A2.25 2.25 0 0 1 16.75 23h-9.5A2.25 2.25 0 0 1 5 20.6V15.35H3.81c-1.68 0-2.59-1.83-1.62-3.13l7.19-9.6ZM12 4.13 4.81 13.73c-.13.18-.02.37.19.37H7v6.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-6.5h2c.21 0 .32-.19.19-.37L12 4.13Z" />
          </svg>
        </Link>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '3.5rem' }}>
            <Link to="/second" className="nav-link">Home</Link>
            <Link to="/coffee" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Coffee</Link>
            <Link to="/map" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Map</Link>
            <Link to="/products" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Products</Link>
            <Link to="/wheel" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Wheel</Link>
            <Link to="/about" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link>
            <Link to="/admin" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Admin</Link>
          </nav>
        </div>
      </header>
      <div style={{ height: '2.5rem', background: '#ece0d1' }} />

      <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#8D4F2F', fontFamily: 'Pacifico, cursive' }}>Admin</h2>
        <p style={{ color: '#967259' }}>Use the controls below to trigger a manual seed/sync from LoffeeLabs into your local DB. The server endpoint is <code>POST /admin/sync-loffeelabs</code>. If your server requires an admin key, enter it below.</p>

        <form onSubmit={handleSync} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3rem', marginRight: '0.6rem' }}>
            {serverStatus ? (
              serverStatus.error ? (
                <div style={{ color: '#c62828' }}>Status: {serverStatus.error}</div>
              ) : (
                <div style={{ color: '#967259' }}>
                  Server expects admin key: <strong>{serverStatus.adminKeyConfigured ? 'Yes' : 'No'}</strong>
                  {serverStatus.lastSync ? <span> — last sync: {new Date(serverStatus.lastSync).toLocaleString()}</span> : null}
                </div>
              )
            ) : (
              <div style={{ color: '#967259' }}>Loading server status…</div>
            )}
            <button type="button" onClick={fetchStatus} style={{ marginTop: '0.3rem', padding: '0.25rem 0.5rem', borderRadius: '0.4rem', border: '1px solid #d6ad60', background: '#fff' }}>Refresh status</button>
          </div>
          <input placeholder="Admin key (if required)" value={adminKey} onChange={e => setAdminKey(e.target.value)} style={{ padding: '0.6rem', borderRadius: '0.5rem', border: '1px solid #d6ad60', minWidth: '320px' }} />
          <button type="submit" disabled={loading} style={{ background: '#8D4F2F', color: '#fff', padding: '0.6rem 1rem', borderRadius: '0.5rem', border: 'none', fontWeight: 'bold' }}>{loading ? 'Syncing...' : 'Sync from LoffeeLabs'}</button>
        </form>

        <div style={{ marginTop: '1rem' }}>
          {status && (
            <div style={{ padding: '0.8rem', borderRadius: '0.6rem', background: status.ok ? '#e8f5e9' : '#ffebee', color: status.ok ? '#2e7d32' : '#c62828' }}>
              <strong>{status.ok ? 'Success' : 'Error'}:</strong> {status.message}
            </div>
          )}
        </div>

        <div style={{ marginTop: '2rem', color: '#967259', maxWidth: '850px' }}>
          <p><strong>Notes</strong></p>
          <ul>
            <li>The admin sync will clear and re-seed the local products table by default (current server behavior).</li>
            <li>If you want safer "upsert" syncing (preserve local edits), I can implement that server-side and add an option here.</li>
            <li>For production protect this route with a stronger auth mechanism; this UI sends the admin key in the request body and header for convenience.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default AdminPage;

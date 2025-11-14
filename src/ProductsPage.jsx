



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

function getUnique(products, key) {
  return Array.from(new Set(products.map(p => p[key]).filter(Boolean).flatMap(v => v.split(',').map(s => s.trim())))).sort();
}


function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [filter, setFilter] = useState({
    type: '',
    degree: '',
    roaster: '',
    origin: '',
    producer: '',
    process: '',
    variety: '',
    tasteProfile: '',
    tasting: '',
    available: '',
    search: '',
  });

  // Fade animation state for grid
  const [fade, setFade] = useState('in');

  // Pagination states
  const [page, setPage] = useState(1);
  const pageSize = 12;

  // Fetch products: try local API first, fall back to Loffeelabs public API if local fails
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      const localUrl = 'http://localhost:3001/api/products';
      const remoteUrl = 'https://www.loffeelabs.com/wp-json/beanbase/v1/beans?api_key=tasteoftales7844416169';

      // Try local API
      try {
        const res = await fetch(localUrl);
        if (res.ok) {
          const data = await res.json();
          // If local API returned an empty array, fall back to the remote public API
          if (Array.isArray(data) && data.length === 0) {
            console.warn('Local API returned empty array — falling back to remote API');
          } else {
            // Heuristic: local DB rows created via the simple local admin only contain id/name/price.
            // If the objects lack keys we expect from the Bean Base API (e.g. 'roast-name', 'roaster', 'origin'),
            // treat the result as "minimal local data" and fall back to the remote API so the Products page
            // has full bean data to display.
            const looksLikeBean = Array.isArray(data) && data.some(item => item && (item['roast-name'] || item.roaster || item.origin || item.tasting));
            if (!looksLikeBean) {
              console.warn('Local API returned minimal product objects — falling back to remote API');
            } else {
              setProducts(data || []);
              setLoading(false);
              return;
            }
          }
        } else {
          console.warn('Local API returned non-OK status', res.status);
        }
      } catch (err) {
        console.warn('Local API fetch failed:', err && err.message ? err.message : err);
      }

      // Fallback to remote public API
      try {
        const res2 = await fetch(remoteUrl);
        if (res2.ok) {
          const payload = await res2.json();
          setProducts(payload.data || payload || []);
          setError(null);
          return;
        } else {
          console.warn('Remote API returned non-OK status', res2.status);
          setError('Failed to load products from both local and remote APIs.');
        }
      } catch (err) {
        console.error('Remote API fetch failed:', err && err.message ? err.message : err);
        setError('Failed to load products from both local and remote APIs.');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Admin form state for local CRUD (name/price)
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPrice, setEditPrice] = useState('');

  async function handleAddProduct(e) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName, price: Number(newPrice) || null }),
      });
      if (!res.ok) throw new Error('Failed to create');
      const created = await res.json();
      setProducts(p => [created, ...p]);
      setNewName(''); setNewPrice('');
    } catch (err) {
      console.error('Add product error', err);
      alert('Failed to add product');
    }
  }

  function startEdit(product) {
    setEditId(product.id);
    setEditName(product.name || product['roast-name'] || '');
    setEditPrice(product.price || '');
  }

  async function saveEdit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/api/products/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editName, price: Number(editPrice) || null }),
      });
      if (!res.ok) throw new Error('Failed to update');
      const updated = await res.json();
      setProducts(p => p.map(it => it.id === updated.id ? updated : it));
      setEditId(null); setEditName(''); setEditPrice('');
    } catch (err) {
      console.error('Update error', err);
      alert('Failed to update product');
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this product?')) return;
    try {
      const res = await fetch(`http://localhost:3001/api/products/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      await res.json();
      setProducts(p => p.filter(x => x.id !== id));
    } catch (err) {
      console.error('Delete error', err);
      alert('Failed to delete product');
    }
  }

  // Get unique values for dropdowns
  const uniqueTypes = getUnique(products, 'type');
  const uniqueDegrees = getUnique(products, 'degree');
  const uniqueRoasters = getUnique(products, 'roaster');
  const uniqueOrigins = getUnique(products, 'origin');
  const uniqueProducers = getUnique(products, 'producer');
  const uniqueProcesses = getUnique(products, 'process');
  const uniqueVarieties = getUnique(products, 'variety');
  const uniqueTasting = getUnique(products, 'tasting');

  // Filtering logic
  const filteredProducts = products.filter(product => {
    if (filter.type && !(product.type || '').includes(filter.type)) return false;
    if (filter.degree && !(product.degree || '').includes(filter.degree)) return false;
    if (filter.roaster && !(product.roaster || '').includes(filter.roaster)) return false;
    if (filter.origin && !(product.origin || '').includes(filter.origin)) return false;
    if (filter.producer && !(product.producer || '').includes(filter.producer)) return false;
    if (filter.process && !(product.process || '').includes(filter.process)) return false;
    if (filter.variety && !(product.variety || '').includes(filter.variety)) return false;
    if (filter.tasteProfile && !(product['tasting-tag'] || '').toLowerCase().includes(filter.tasteProfile.toLowerCase())) return false;
    if (filter.tasting && !(product.tasting || '').toLowerCase().includes(filter.tasting.toLowerCase())) return false;
    if (filter.available && product.available !== filter.available) return false;
    if (filter.search) {
      const search = filter.search.toLowerCase();
      if (!(
        (product['roast-name'] || '').toLowerCase().includes(search) ||
        (product.roaster || '').toLowerCase().includes(search) ||
        (product.origin || '').toLowerCase().includes(search) ||
        (product.tasting || '').toLowerCase().includes(search)
      )) return false;
    }
    return true;
  });

  // Pagination logic
  const totalEntries = filteredProducts.length;
  const totalPages = Math.ceil(totalEntries / pageSize);
  const paginatedProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

  function handleFilterChange(e) {
    const { name, value } = e.target;
    setFade('out');
    setTimeout(() => {
      setFilter(f => ({ ...f, [name]: value }));
      setPage(1);
      setFade('in');
    }, 220);
  }

  function handleClearFilters() {
    setFade('out');
    setTimeout(() => {
      setFilter({
        type: '',
        degree: '',
        roaster: '',
        origin: '',
        producer: '',
        process: '',
        variety: '',
        tasteProfile: '',
        tasting: '',
        available: '',
        search: '',
      });
      setPage(1);
      setFade('in');
    }, 220);
  }

  function handlePageChange(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

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
          zIndex: 10002, // Increased z-index to ensure header is always on top
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
            {/* Admin link removed — admin UI is served by the backend HTML on port 3001 */}
          </nav>
        </div>
      </header>
  <div style={{ height: '2.5rem', background: '#ece0d1' }} />
  <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ color: '#967259', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1.2rem', textAlign: 'center', fontWeight: 500 }}>
          Discover curated specialty coffee beans from top roasters around the world. Explore, compare, and find your next favorite brew!
        </p>
        <h1 style={{
          textAlign: 'center',
          fontFamily: 'Pacifico, cursive',
          fontSize: '2.5rem',
          color: '#967259',
          marginTop: '0.5rem',
          marginBottom: '2rem',
          fontWeight: 'bold',
        }}>
        </h1>

        {/* Smart Filtering Menu */}
        <div style={{
          width: '100%',
          background: '#fff7ed',
          borderRadius: '1.2rem',
          boxShadow: '0 2px 16px #d6ad6088',
          padding: '2rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.2rem',
          justifyContent: 'center',
        }}>
          <select name="type" value={filter.type} onChange={handleFilterChange} style={{ minWidth: '180px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }}>
            <option value="">Filter Roast Type</option>
            {uniqueTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          <select name="degree" value={filter.degree} onChange={handleFilterChange} style={{ minWidth: '180px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }}>
            <option value="">Filter Roast Degree</option>
            {uniqueDegrees.map(degree => <option key={degree} value={degree}>{degree}</option>)}
          </select>
          <select name="roaster" value={filter.roaster} onChange={handleFilterChange} style={{ minWidth: '180px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }}>
            <option value="">Filter Roaster</option>
            {uniqueRoasters.map(roaster => <option key={roaster} value={roaster}>{roaster}</option>)}
          </select>
          <select name="origin" value={filter.origin} onChange={handleFilterChange} style={{ minWidth: '180px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }}>
            <option value="">Filter Origin</option>
            {uniqueOrigins.map(origin => <option key={origin} value={origin}>{origin}</option>)}
          </select>
          <select name="producer" value={filter.producer} onChange={handleFilterChange} style={{ minWidth: '180px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }}>
            <option value="">Filter Producer</option>
            {uniqueProducers.map(producer => <option key={producer} value={producer}>{producer}</option>)}
          </select>
          <select name="process" value={filter.process} onChange={handleFilterChange} style={{ minWidth: '180px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }}>
            <option value="">Filter Process</option>
            {uniqueProcesses.map(process => <option key={process} value={process}>{process}</option>)}
          </select>
          <select name="variety" value={filter.variety} onChange={handleFilterChange} style={{ minWidth: '180px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }}>
            <option value="">Filter Variety</option>
            {uniqueVarieties.map(variety => <option key={variety} value={variety}>{variety}</option>)}
          </select>
          <input name="tasteProfile" value={filter.tasteProfile} onChange={handleFilterChange} placeholder="Filter Taste Profile" style={{ minWidth: '180px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }} />
          <input name="tasting" value={filter.tasting} onChange={handleFilterChange} placeholder="Filter Tasting Notes" style={{ minWidth: '180px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }} />
          <select name="available" value={filter.available} onChange={handleFilterChange} style={{ minWidth: '140px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }}>
            <option value="">Availability</option>
            <option value="YES">Available</option>
            <option value="NO">Sold Out</option>
          </select>
          <input name="search" value={filter.search} onChange={handleFilterChange} placeholder="Search All" style={{ minWidth: '180px', padding: '0.5rem', borderRadius: '0.7rem', border: '1.5px solid #d6ad60', fontSize: '1rem' }} />
          <button type="button" onClick={handleClearFilters} style={{ background: '#d32f2f', color: '#fff', border: 'none', borderRadius: '0.7rem', padding: '0.5rem 1.2rem', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', marginLeft: '0.5rem' }}>Clear Filters</button>
        </div>

        {loading && <div style={{ color: '#967259', fontSize: '1.2rem', marginTop: '2rem' }}>Loading products...</div>}
        {error && <div style={{ color: 'red', fontSize: '1.2rem', marginTop: '2rem' }}>{error}</div>}
        {!loading && !error && (
          <>
            {/* Admin quick add / edit (local API) */}
            <div style={{ width: '100%', marginBottom: '1.5rem', background: '#fff8f0', padding: '1rem', borderRadius: '0.8rem', boxShadow: '0 2px 8px #d6ad6088' }}>
              <form onSubmit={handleAddProduct} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="New product name" style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #d6ad60' }} />
                <input value={newPrice} onChange={e => setNewPrice(e.target.value)} placeholder="Price" type="number" style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #d6ad60', width: '120px' }} />
                <button type="submit" style={{ background: '#8D4F2F', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', fontWeight: 'bold' }}>Add Product (Local)</button>
                {editId && (
                  <form onSubmit={saveEdit} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input value={editName} onChange={e => setEditName(e.target.value)} placeholder="Edit name" style={{ padding: '0.4rem', borderRadius: '0.4rem', border: '1px solid #ccc' }} />
                    <input value={editPrice} onChange={e => setEditPrice(e.target.value)} placeholder="Edit price" type="number" style={{ padding: '0.4rem', borderRadius: '0.4rem', border: '1px solid #ccc', width: '100px' }} />
                    <button type="submit" style={{ background: '#2e7d32', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '0.4rem', border: 'none' }}>Save</button>
                    <button type="button" onClick={() => { setEditId(null); setEditName(''); setEditPrice(''); }} style={{ background: '#9e9e9e', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '0.4rem', border: 'none' }}>Cancel</button>
                  </form>
                )}
              </form>
              <div style={{ textAlign: 'center', marginTop: '0.6rem', color: '#967259', fontSize: '0.95rem' }}>Admin quick actions use your local Express API at <code>http://localhost:3001</code></div>
            </div>
            <div className={`product-list strict-grid four-row fade-${fade}`}> 
              {paginatedProducts.length === 0 ? (
                <div style={{ color: '#967259', fontSize: '1.2rem', textAlign: 'center' }}>No products found.</div>
              ) : (
                paginatedProducts.map(product => (
                  <div className="product-card compact" key={product.id}>
                    <img className="product-img" src={product.image && product.image !== '#N/A' ? product.image : 'https://www.loffeelabs.com/wp-content/uploads/2025/03/coffee-placeholder.png'} alt={product['roast-name'] || product.name || 'Product'} />
                    <div className="product-title">{product['roast-name'] || product.name || 'Untitled'}</div>
                    <div className="product-roaster">{product.roaster || ''}</div>
                    <div className="product-origin">{product.origin || ''}</div>
                    <div className="product-details">
                      <span style={{ fontWeight: 'bold' }}>Roast:</span> {product.degree || 'N/A'}<br />
                      <span style={{ fontWeight: 'bold' }}>Type:</span> {product.type || 'N/A'}<br />
                      <span style={{ fontWeight: 'bold' }}>Process:</span> {product.process || 'N/A'}<br />
                      <span style={{ fontWeight: 'bold' }}>Variety:</span> {product.variety || 'N/A'}<br />
                      <span style={{ fontWeight: 'bold' }}>Weight:</span> {product.gram ? product.gram + 'g' : 'N/A'}
                    </div>
                    {product.tasting && (
                      <div className="product-tasting">Tasting: {product.tasting}</div>
                    )}
                    <div className="product-price">
                      ${product.price} <span style={{ fontWeight: 'normal', fontSize: '0.95rem' }}>/ {product['price-cup'] ? `$${product['price-cup']}/cup` : 'bag'}</span>
                      {/* PHP Conversion below USD price */}
                      <div style={{ fontSize: '0.98rem', color: '#d32f2f', marginTop: '0.2rem', fontWeight: 500 }}>
                        ₱{product.price ? (parseFloat(product.price) * 58).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}
                        <span style={{ fontWeight: 'normal', fontSize: '0.92rem', color: '#967259', marginLeft: '0.3rem' }}>(PHP)</span>
                      </div>
                    </div>
                    <div className={`product-availability${product.available === 'YES' ? '' : ' no'}`}>{product.available === 'YES' ? 'Available' : 'Sold Out'}</div>
                    {product.link && (
                      <a className="product-link" href={product.link} target="_blank" rel="noopener noreferrer">View Product</a>
                    )}
                  </div>
                ))
              )}
            </div>
            {/* Pagination Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2rem 0 1rem 0', gap: '1.2rem', flexWrap: 'wrap' }}>
              <span style={{ color: '#967259', fontSize: '1.1rem' }}>
                Showing {totalEntries === 0 ? 0 : (page - 1) * pageSize + 1} to {Math.min(page * pageSize, totalEntries)} of {totalEntries} entries
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} style={{ background: '#333', color: '#fff', border: 'none', borderRadius: '0.3rem', padding: '0.4rem 1rem', fontWeight: 'bold', cursor: page === 1 ? 'not-allowed' : 'pointer' }}>&larr; Prev</button>
                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2).map((p, idx, arr) => {
                  const brown = '#8D4F2F';
                  if (idx > 0 && p - arr[idx - 1] > 1) {
                    return [<span key={`dots-${p}`}>...</span>,
                      <button key={p} onClick={() => handlePageChange(p)} style={{ background: p === page ? brown : '#fff', color: p === page ? '#fff' : '#333', border: '1px solid #ccc', borderRadius: '0.3rem', padding: '0.4rem 1rem', fontWeight: 'bold', cursor: 'pointer' }}>{p}</button>
                    ];
                  }
                  return <button key={p} onClick={() => handlePageChange(p)} style={{ background: p === page ? brown : '#fff', color: p === page ? '#fff' : '#333', border: '1px solid #ccc', borderRadius: '0.3rem', padding: '0.4rem 1rem', fontWeight: 'bold', cursor: 'pointer' }}>{p}</button>;
                })}
                <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} style={{ background: '#333', color: '#fff', border: 'none', borderRadius: '0.3rem', padding: '0.4rem 1rem', fontWeight: 'bold', cursor: page === totalPages ? 'not-allowed' : 'pointer' }}>Next &rarr;</button>
              </div>
            </div>
            <div style={{ width: '100%', textAlign: 'center', margin: '2.5rem 0 0.5rem 0', color: '#967259', fontSize: '1.08rem', fontStyle: 'italic', fontWeight: 500 }}>
              The coffee data presented on this page is sourced through the Bean Base API, courtesy of
              <a href="https://www.loffeelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#8D4F2F', textDecoration: 'underline', marginLeft: '0.3rem' }}>LoffeeLabs</a>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default ProductsPage;

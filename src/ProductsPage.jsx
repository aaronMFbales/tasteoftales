



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

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://www.loffeelabs.com/wp-json/beanbase/v1/beans?api_key=tasteoftales7844416169');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data.data || []);
      } catch (err) {
        setError('Could not load products.');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

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

  function handleFilterChange(e) {
    const { name, value } = e.target;
    setFilter(f => ({ ...f, [name]: value }));
  }

  function handleClearFilters() {
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
          zIndex: 9999,
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
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginLeft: '-1vw' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '3.5rem' }}>
            <Link to="/second" className="nav-link">Home</Link>
            <Link to="/coffee" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Coffee</Link>
            <Link to="/map" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Map</Link>
            <Link to="/products" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Products</Link>
            <Link to="/wheel" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Wheel</Link>
            <Link to="/about" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link>
          </nav>
        </div>
      </header>
      <div style={{ height: '2.5rem', background: '#ece0d1' }} />
      <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          textAlign: 'center',
          fontFamily: 'Pacifico, cursive',
          fontSize: '2.5rem',
          color: '#967259',
          marginTop: '4rem',
          marginBottom: '2rem',
          fontWeight: 'bold',
        }}>
        </h1>
        <p style={{ color: '#967259', fontSize: '1.5rem', marginTop: '-4rem', textAlign: 'center' }}>
          Discover curated specialty coffee beans from top roasters around the world. Explore, compare, and find your next favorite brew!
        </p>

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
          <div className="product-list">
            {filteredProducts.length === 0 ? (
              <div style={{ color: '#967259', fontSize: '1.2rem', textAlign: 'center' }}>No products found.</div>
            ) : (
              filteredProducts.map(product => (
                <div className="product-card" key={product.id}>
                  <img className="product-img" src={product.image && product.image !== '#N/A' ? product.image : 'https://www.loffeelabs.com/wp-content/uploads/2025/03/coffee-placeholder.png'} alt={product['roast-name']} />
                  <div className="product-title">{product['roast-name']}</div>
                  <div className="product-roaster">{product.roaster}</div>
                  <div className="product-origin">{product.origin}</div>
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
                  <div className="product-price">${product.price} <span style={{ fontWeight: 'normal', fontSize: '0.95rem' }}>/ {product['price-cup'] ? `$${product['price-cup']}/cup` : 'bag'}</span></div>
                  <div className={`product-availability${product.available === 'YES' ? '' : ' no'}`}>{product.available === 'YES' ? 'Available' : 'Sold Out'}</div>
                  {product.link && (
                    <a className="product-link" href={product.link} target="_blank" rel="noopener noreferrer">View Product</a>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default ProductsPage;

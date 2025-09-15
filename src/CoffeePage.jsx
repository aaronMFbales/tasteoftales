import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeCarousel from './CoffeeCarousel';
import './CoffeeCarousel.css';

function CoffeePage() {
  return (
  <div style={{ minHeight: '100vh', width: '100vw', background: '#ece0d1', position: 'relative' }}>
      <header
        style={{
          width: '100%',
          background: '#967259',
          color: '#fff',
          padding: '0.75rem 0',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          letterSpacing: '0.05em',
          fontFamily: 'Pacifico, cursive',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', marginLeft: '2rem', marginRight: '2rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '2.2rem', height: '2.2rem', color: '#fff' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4-11v11a1 1 0 001 1h5a1 1 0 001-1V10" />
          </svg>
        </Link>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', marginLeft: '33.5vw' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link to="/second" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Pacifico, cursive', fontSize: '1.3rem' }}>Home</Link>
            <Link to="/coffee" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Pacifico, cursive', fontSize: '1.3rem' }}>Coffee</Link>
            <Link to="#" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Pacifico, cursive', fontSize: '1.3rem' }}>Blog</Link>
            <Link to="#" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Pacifico, cursive', fontSize: '1.3rem' }}>About Us</Link>
          </nav>
        </div>
      </header>
  <div style={{ height: '2.5rem', background: '#ece0d1' }} />
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: '1.2rem', marginTop: '0.5rem' }}>
    <CoffeeCarousel category="hot" />
    <CoffeeCarousel category="cold" />
  </div>
    </div>
  );
}

export default CoffeePage;
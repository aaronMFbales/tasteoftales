import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CoffeeCarousel from './CoffeeCarousel';
import coffeeData from './coffeeData';
import './CoffeeCarousel.css';

function CoffeePage() {
  const [animate, setAnimate] = useState(false);
  const [modal, setModal] = useState(null); // { category, index }
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);
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
      <div className={`carousel-entrance-row${animate ? ' animate' : ''}`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: '1.2rem', marginTop: '0.5rem' }}>
        <div className={`carousel-entrance${animate ? ' animate' : ''}`}>
          <CoffeeCarousel category="hot" onImageClick={idx => setModal({ category: 'hot', index: idx })} />
        </div>
        <div className={`carousel-entrance${animate ? ' animate' : ''}`}>
          <CoffeeCarousel category="cold" onImageClick={idx => setModal({ category: 'cold', index: idx })} />
        </div>
      </div>
      {modal && (
        <div className="carousel-modal-overlay coffee-modal-overlay" onClick={() => setModal(null)}>
          <div className="carousel-modal-content coffee-modal-content" onClick={e => e.stopPropagation()}>
            <img
              src={coffeeData[modal.category][modal.index].image}
              alt={coffeeData[modal.category][modal.index].name}
              className="carousel-modal-img coffee-modal-img-full"
              style={{ animation: 'modalZoomIn 0.3s' }}
            />
            <div className="carousel-modal-coffee-name coffee-modal-coffee-name-normal">{coffeeData[modal.category][modal.index].name}</div>
            <button className="carousel-modal-close coffee-modal-close" onClick={() => setModal(null)} aria-label="Close modal">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoffeePage;
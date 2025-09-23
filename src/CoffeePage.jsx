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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '2.2rem', height: '2.2rem', color: '#fff' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4-11v11a1 1 0 001 1h5a1 1 0 001-1V10" />
          </svg>
        </Link>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginLeft: '-1vw' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link to="/second" className="nav-link">Home</Link>
            <Link to="/coffee" className="nav-link">Coffee</Link>
            <Link to="/wheel" className="nav-link">Wheel</Link>
            <Link to="#" className="nav-link">About Us</Link>
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
      <div style={{
        width: '100%',
        textAlign: 'center',
        marginTop: '-0.7rem',
        marginBottom: '0',
        fontSize: '1.22rem',
        color: '#a0521c',
        fontWeight: 'bold',
        letterSpacing: '0.03em',
        borderRadius: '0.7rem',
        boxShadow: '0 2px 12px #96725922',
        background: '#ffe4c4',
        padding: '0.3rem 1.2rem',
        display: 'block',
        marginLeft: '0',
        marginRight: '0',
      }}>
        <span style={{ fontFamily: 'Pacifico, cursive', color: '#967259', fontSize: '1.25rem', marginRight: '0.4rem' }}>Tip:</span>
        <span style={{ fontFamily: 'inherit', color: '#a0521c' }}>Click any coffee image to reveal its ingredients!</span>
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
            {/* Ingredients below coffee name */}
            {coffeeData[modal.category][modal.index].ingredients && (
              <div style={{ marginTop: '0.7rem', fontSize: '1.1rem', color: '#967259', textAlign: 'center', fontWeight: '500', fontFamily: 'inherit' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.05rem', color: '#a0521c' }}>Ingredients:</span> {coffeeData[modal.category][modal.index].ingredients.join(', ')}
              </div>
            )}
            <button className="carousel-modal-close coffee-modal-close" onClick={() => setModal(null)} aria-label="Close modal">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoffeePage;
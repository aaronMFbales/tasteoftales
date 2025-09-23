import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div style={{ minHeight: '100vh', background: '#ece0d1', overflowX: 'hidden' }}>
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
          {/* Material Design Home Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" style={{ width: '2.2rem', height: '2.2rem' }}>
            <path d="M10.19 2.62a2.25 2.25 0 0 1 3.62 0l7.19 9.6c.97 1.3.06 3.13-1.62 3.13H19v5.25A2.25 2.25 0 0 1 16.75 23h-9.5A2.25 2.25 0 0 1 5 20.6V15.35H3.81c-1.68 0-2.59-1.83-1.62-3.13l7.19-9.6ZM12 4.13 4.81 13.73c-.13.18-.02.37.19.37H7v6.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-6.5h2c.21 0 .32-.19.19-.37L12 4.13Z" />
          </svg>
        </Link>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link to="/second" className="nav-link">Home</Link>
            <Link to="/coffee" className="nav-link">Coffee</Link>
            <Link to="/wheel" className="nav-link">Wheel</Link>
            <Link to="/about" className="nav-link">About Us</Link>
          </nav>
        </div>
      </header>
      <div style={{ height: '4.5rem' }} />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#7e5f3b', fontFamily: 'Pacifico, cursive', fontSize: '3rem', marginBottom: '2rem' }}>About Us</h1>
        <p style={{ color: '#634832', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
          Welcome to Taste of Tales! We are passionate about coffee, stories, and building a vibrant community. Our mission is to connect coffee lovers, farmers, and storytellers, celebrating the journey behind every cup. Join us as we share knowledge, experiences, and the spirit of coffee culture.
        </p>
      </main>
    </div>
  );
}

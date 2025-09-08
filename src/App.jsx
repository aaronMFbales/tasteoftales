
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [showBtn, setShowBtn] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  useEffect(() => {
    const btnTimer = setTimeout(() => setShowBtn(true), 4000); // match image animation duration
    const taglineTimer = setTimeout(() => setShowTagline(true), 3000);
    return () => {
      clearTimeout(btnTimer);
      clearTimeout(taglineTimer);
    };
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen"
      style={{ background: '#ece0d1', minHeight: '100vh', width: '100vw' }}
    >
      <div />
      <img src="/5.png" alt="Taste of Tales Logo" className="h-[50rem] w-auto hover-slow" />
      <div
        className="mt-8 mb-8 px-4 max-w-xl text-center tasteoftales-tagline"
        style={{
          fontFamily: 'Pacifico, cursive',
          color: '#7e5f3b',
          fontSize: '1.5rem',
          fontWeight: 400,
          cursor: 'pointer',
          opacity: showTagline ? 1 : 0,
          transition: 'opacity 0.7s',
          pointerEvents: showTagline ? 'auto' : 'none',
        }}
      >
        Welcome to Taste of Tales, where every sip unfolds a story. Discover coffee’s origins, brewing rituals, and the rich flavors that connect us all.
      </div>
  <div className="w-full flex justify-center mb-12" style={{ marginTop: '3.5rem' }}>
        <button
          className={`w-32 h-32 rounded-full bg-amber-700 text-xl font-bold transition-all duration-200 flex items-center justify-center sip-btn${showBtn ? ' visible' : ''}`}
          onClick={() => navigate('/second')}
          style={{ opacity: showBtn ? 1 : 0, pointerEvents: showBtn ? 'auto' : 'none', transition: 'opacity 0.7s', fontFamily: 'Pacifico, cursive' }}
        >
          Take a sip
        </button>
      </div>
    </div>
  );
}

export default App;

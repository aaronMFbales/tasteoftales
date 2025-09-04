
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowBtn(true), 7000); // match image animation duration
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ background: '#ece0d1', minHeight: '100vh', width: '100vw' }}
    >
  <img src="/5.png" alt="Taste of Tales Logo" className="h-[50rem] w-auto hover-slow" />
      <button
        className={`mt-12 w-32 h-32 rounded-full bg-amber-700 text-xl font-bold transition-all duration-200 flex items-center justify-center sip-btn${showBtn ? ' visible' : ''}`}
        onClick={() => navigate('/second')}
        style={{ opacity: showBtn ? 1 : 0, pointerEvents: showBtn ? 'auto' : 'none', transition: 'opacity 0.7s' }}
      >
        Take a sip
      </button>
    </div>
  );
}

export default App;

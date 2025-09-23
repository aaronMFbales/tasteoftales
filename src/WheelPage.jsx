
import React from "react";
import { Link } from 'react-router-dom';
import './WheelPage.css';
import D3FlavorWheel from "./D3FlavorWheel";


export default function WheelPage() {
  // Handler to exit fullscreen
  const handleExitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };
  // Ref for the wheel container

  const wheelContainerRef = React.useRef(null);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  // Handler for full screen
  const handleFullScreen = () => {
    const el = wheelContainerRef.current;
    if (el && el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el && el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el && el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  };

  React.useEffect(() => {
    const handleChange = () => {
      const fsElement = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      setIsFullscreen(!!fsElement);
    };
    document.addEventListener('fullscreenchange', handleChange);
    document.addEventListener('webkitfullscreenchange', handleChange);
    document.addEventListener('msfullscreenchange', handleChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleChange);
      document.removeEventListener('webkitfullscreenchange', handleChange);
      document.removeEventListener('msfullscreenchange', handleChange);
    };
  }, []);

  return (
  <div style={{ minHeight: '100vh', width: '100vw', background: '#f5e6d6', position: 'relative' }}>
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
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginLeft: '0vw' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link to="/second" className="nav-link">Home</Link>
            <Link to="/coffee" className="nav-link">Coffee</Link>
            <Link to="/wheel" className="nav-link">Wheel</Link>
            <Link to="#" className="nav-link">About Us</Link>
          </nav>
        </div>
      </header>
      <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{
          textAlign: 'center',
          fontFamily: 'sans-serif',
          fontSize: '3.2rem',
          color: '#967259',
          fontWeight: 'bold',
          fontStyle: 'italic',
          marginTop: '6rem',
          marginBottom: '2.2rem', // increased space below title
          letterSpacing: '0.04em',
          textShadow: '2px 2px 0 #ffd29eff, 4px 4px 8px #d6ad6088',
          transform: 'translateY(2px) scale(1.04)',
        }}>
          Coffee Taster's Flavor Wheel
        </h1>
        <button
          style={{
            marginBottom: '1.2rem',
            padding: '0.7rem 1.6rem',
            fontSize: '1.2rem',
            background: '#967259',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px #96725944',
            transition: 'background 0.2s',
            zIndex: 10000,
          }}
          onClick={handleFullScreen}
        >
          View in full screen
        </button>
        <div
          ref={wheelContainerRef}
          style={{
            width: isFullscreen ? '100vw' : '100vw',
            maxWidth: isFullscreen ? '100vw' : '950px',
            aspectRatio: '1/1',
            margin: isFullscreen ? '0 auto' : '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: isFullscreen ? '100vh' : 'auto',
            background: isFullscreen ? '#f5e6d6' : 'transparent',
            position: isFullscreen ? 'fixed' : 'static',
            top: isFullscreen ? 0 : 'auto',
            left: isFullscreen ? 0 : 'auto',
            zIndex: isFullscreen ? 9999 : 'auto',
          }}
        >
          {isFullscreen && (
            <button
              onClick={handleExitFullScreen}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'linear-gradient(180deg, #8D4F2F 0%, #A0521C 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                width: '4.5rem',
                height: '2.2rem',
                fontSize: '1.7rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                zIndex: 10001,
                boxShadow: '0 4px 16px #96725988, 0 2px 0 #6D4C41',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
                textShadow: '0 2px 4px #6D4C41',
                letterSpacing: '0.05em',
              }}
              aria-label="Exit full screen"
            >
              <span style={{fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginTop: '-2px'}}>X</span>
            </button>
          )}
          <D3FlavorWheel width={isFullscreen ? 900 : 950} height={isFullscreen ? 900 : 950} />
        </div>
        <p className="wheel-tip" style={{
          maxWidth: '900px',
          width: '90%',
          margin: '2rem auto 2.5rem auto',
          textAlign: 'center',
          fontSize: '1.18rem',
          lineHeight: '1.7',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: '0.7rem',
          padding: '1.2rem 2rem',
          boxShadow: '0 2px 12px #96725922',
        }}>
          Tip: Hover over any segment to see its flavor description. This flavor wheel is provided as a demo for educational and development purposes only.<br />
          The complete Coffee Taster’s Flavor Wheel is a copyrighted work of the Specialty Coffee Association. To access or use the official wheel in its entirety, you’ll need to obtain it directly from <a href="https://sca.coffee/research/coffee-tasters-flavor-wheel" target="_blank" rel="noopener noreferrer" style={{ color: '#967259', fontWeight: 'bold', textDecoration: 'underline' }}>SCA</a>.
        </p>
      </div>
    </div>
  );
}


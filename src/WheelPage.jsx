import React from "react";
import { Link } from 'react-router-dom';
import './WheelPage.css';
import './responsive.css';
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
          zIndex: 100000,
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
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginLeft: '0vw' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link to="/second" className="nav-link">Home</Link>
            <Link to="/coffee" className="nav-link">Coffee</Link>
            <Link to="/wheel" className="nav-link">Wheel</Link>
            <Link to="/about" className="nav-link">About Us</Link>
          </nav>
        </div>
      </header>
      <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
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
            marginBottom: '2rem',
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
            position: 'relative',
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


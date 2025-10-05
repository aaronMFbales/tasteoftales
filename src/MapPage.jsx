import React from 'react';
import { Link } from 'react-router-dom';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import './responsive.css';

function MapPage() {
  // Coffee origins state
  const [origin, setOrigin] = React.useState('Ethiopia');

  // Coffee origins info with continent
  const originsInfo = {
    Ethiopia: {
      title: "Ethiopia",
      desc: "Widely regarded as the birthplace of coffee, Ethiopia is famous for its heirloom varieties and ancient coffee traditions. Ethiopian coffees are celebrated for their floral, fruity, and wine-like profiles, grown in lush highlands by smallholder farmers.",
      continent: "Africa",
    },
    Colombia: {
      title: "Colombia",
      desc: "Colombia is one of the world’s most recognized coffee origins, known for its high-altitude farms and meticulous processing. Colombian coffee is prized for its balanced flavor, bright acidity, and caramel sweetness, produced by generations of dedicated growers.",
      continent: "South America",
    },
    Brazil: {
      title: "Brazil",
      desc: "As the largest coffee producer globally, Brazil’s vast plantations yield a wide range of beans. Brazilian coffee is known for its chocolatey, nutty notes and low acidity, forming the backbone of many espresso blends and commercial coffees.",
      continent: "South America",
    },
    Vietnam: {
      title: "Vietnam",
      desc: "Vietnam is the world’s leading producer of robusta coffee, with a unique coffee culture centered around strong, bold brews. Vietnamese coffee origins are rooted in small farms and traditional methods, often enjoyed with sweetened condensed milk.",
      continent: "Asia",
    },
    Philippines: {
      title: "Philippines",
      desc: "The Philippines has a rich coffee heritage, producing arabica, robusta, excelsa, and liberica (barako) beans. Philippine coffee origins are diverse, with distinct flavors from each region and a growing movement to revive local coffee traditions.",
      continent: "Asia",
    },
  };

  // Map center coordinates for each origin
  const mapCenters = {
    Ethiopia: [39.5, 9.1],
    Colombia: [-74.3, 4.6],
    Brazil: [-51.9, -14.2],
    Vietnam: [108.2, 14.1],
    Philippines: [121.8, 12.9],
  };

  // Zoom level for each origin (zoomed in for country focus)
  const mapZooms = {
  Ethiopia: 6,
  Colombia: 6,
  Brazil: 6,
  Vietnam: 6.5,
  Philippines: 7.2,
  };

  // ...existing code...

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
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
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
  <div style={{ height: '4.5rem', background: '#ece0d1' }} />
      <main
        className="fade-in-map"
        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}
      >
        <h1 style={{
          textAlign: 'center',
          fontFamily: 'Pacifico, cursive',
          fontSize: '5rem',
          color: '#7a5a35',
          marginTop: '1.5rem', // moved up by reducing top margin
          marginBottom: '2rem',
          fontWeight: 'bold',
        }}>
          Coffee Origins Map
        </h1>
        {/* Coffee Origins Section - no container */}
  {/* Removed 'Coffee Origins' heading as requested */}
        <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
          <strong style={{ fontSize: '2.1rem', color: '#7a5a35', fontWeight: 700, letterSpacing: '0.08em' }}>{originsInfo[origin].title.toUpperCase()}</strong>
          <div style={{ marginTop: '0.5rem', color: '#634832', fontSize: '1rem' }}>
            {originsInfo[origin].desc}
          </div>
          <div style={{ marginTop: '0.5rem', color: '#967259', fontSize: '0.98rem', fontWeight: 500 }}>
            <span>Continent: {originsInfo[origin].continent}</span>
          </div>
        </div>
        {/* Map container is now directly below the country description */}
        <div className="coffee-knowledge-map-visual" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '7rem 0 1.5rem 0' }}>
          <div style={{
            width: '160vw',
            maxWidth: '160vw',
            height: '80vh',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            background: '#fff',
            margin: '6rem -30vw 0 -30vw', // restored map top margin
            border: '4px solid #d6ad60',
            boxShadow: '0 8px 32px 0 #a0521c55, 0 2px 16px #a0521c22',
          }}>
            <ComposableMap projectionConfig={{ scale: 110 }} width={window.innerWidth * 1.6} height={window.innerHeight * 0.8} style={{ width: '100%', height: '100%' }}>
              <ZoomableGroup center={mapCenters[origin]} zoom={mapZooms[origin]}>
                <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                  {({ geographies }) =>
                    geographies.map(geo => {
                      const countryNames = {
                        Ethiopia: 'Ethiopia',
                        Colombia: 'Colombia',
                        Brazil: 'Brazil',
                        Vietnam: 'Vietnam',
                        Philippines: 'Philippines',
                      };
                      const isHighlighted = geo.properties.name === countryNames[origin];
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          style={{
                            default: {
                              fill: isHighlighted ? '#d6ad60' : '#ece0d1',
                              stroke: '#634832',
                              strokeWidth: 0.5,
                              outline: 'none',
                            },
                            hover: {
                              fill: isHighlighted ? '#b6862c' : '#d6ad60',
                              outline: 'none',
                            },
                            pressed: {
                              fill: '#b6862c',
                              outline: 'none',
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </div>
        {/* Buttons are now below the map container */}
  <div className="coffee-knowledge-origins-btns" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '13rem' }}>
          {Object.keys(originsInfo).map((key) => (
            <button
              key={key}
              onClick={() => setOrigin(key)}
              style={{
                padding: '0.7rem 2.1rem',
                borderRadius: '2rem',
                border: 'none',
                background: origin === key ? '#7e5f3b' : '#a0521c',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.15rem',
                margin: '0.4rem',
                cursor: 'pointer',
                boxShadow: '0 2px 8px #a0521c44',
                transition: 'all 0.2s',
                outline: origin === key ? '2px solid #967259' : 'none',
              }}
            >
              {key}
            </button>
          ))}
        </div>
  <div style={{ textAlign: 'center', marginTop: '2rem', color: '#7a5a35', fontSize: '1.15rem', fontWeight: 500 }}>
          Scroll down and up to zoom in and out inside the map
        </div>
      </main>
    </div>
  );
}

export default MapPage;
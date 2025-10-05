import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import BeanCard from './BeanCard';
import { BeakerIcon, FireIcon, GlobeAltIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/solid';
import CoffeeFactBox from './CoffeeFactBox';
import './responsive.css';

function Hero() {
  // Modal state for Beans & Flavors
  const [selectedBean, setSelectedBean] = useState(null);
  const [showBeanModal, setShowBeanModal] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  // Brewing guide state
  const [brewMethod, setBrewMethod] = useState('AeroPress');
  // Coffee origins state
  const [origin, setOrigin] = useState('Ethiopia');

  // Brewing guides data
  const brewingGuides = {
    AeroPress: (
      <>
        <div style={{ marginBottom: '0.7rem', fontWeight: 600, color: '#7e5f3b' }}>
          <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.15rem' }}>Requirements:</span>
          <ul style={{ margin: '0.3rem 0 0 1.2rem', color: '#634832', fontSize: '1rem', fontWeight: 400 }}>
            <li>AeroPress brewer</li>
            <li>AeroPress paper filter</li>
            <li>Fresh coffee beans (15g)</li>
            <li>Grinder (medium-fine)</li>
            <li>Kettle (for hot water)</li>
            <li>Scale (optional)</li>
            <li>Stirrer</li>
            <li>Mug</li>
          </ul>
        </div>
        <strong>AeroPress Guide:</strong>
        <ol>
          <li>Heat water to 85–90°C (185–194°F).</li>
          <li>Grind coffee medium-fine.</li>
          <li>Insert filter, rinse with hot water.</li>
          <li>Add 15g coffee, pour 220ml water.</li>
          <li>Stir, steep for 30 seconds.</li>
          <li>Press gently for 20 seconds.</li>
          <li>Enjoy your brew!</li>
        </ol>
      </>
    ),
    'Pour Over': (
      <>
        <div style={{ marginBottom: '0.7rem', fontWeight: 600, color: '#7e5f3b' }}>
          <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.15rem' }}>Requirements:</span>
          <ul style={{ margin: '0.3rem 0 0 1.2rem', color: '#634832', fontSize: '1rem', fontWeight: 400 }}>
            <li>Pour over dripper (e.g., V60, Chemex, Kalita)</li>
            <li>Paper filter</li>
            <li>Fresh coffee beans (16g)</li>
            <li>Grinder (medium)</li>
            <li>Kettle (preferably gooseneck)</li>
            <li>Scale</li>
            <li>Mug or carafe</li>
          </ul>
        </div>
        <strong>Pour Over Guide:</strong>
        <ol>
          <li>
            Heat water to 92–96°C (198–205°F). <br />
            <span style={{ color: '#b6862c', fontSize: '0.98rem' }}>
              <em>Note: Some beans may burn at higher temperatures (e.g., above 93°C). Adjust water temperature based on your coffee bean type for best flavor.</em>
            </span>
          </li>
          <li>Grind coffee medium.</li>
          <li>Place filter, rinse with hot water.</li>
          <li>Add 16g coffee, pour 320ml water in circles.</li>
          <li>Let bloom for 30 seconds, then continue pouring.</li>
          <li>Total brew time: 2.5–3 minutes.</li>
          <li>Enjoy your pour over!</li>
        </ol>
      </>
    ),
    Espresso: (
      <>
        <div style={{ marginBottom: '0.7rem', fontWeight: 600, color: '#7e5f3b' }}>
          <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.15rem' }}>Requirements:</span>
          <ul style={{ margin: '0.3rem 0 0 1.2rem', color: '#634832', fontSize: '1rem', fontWeight: 400 }}>
            <li>Espresso machine</li>
            <li>Portafilter</li>
            <li>Fresh coffee beans (18g)</li>
            <li>Grinder (fine)</li>
            <li>Tamper</li>
            <li>Scale</li>
            <li>Espresso cup</li>
          </ul>
        </div>
        <strong>Espresso Guide:</strong>
        <ol>
          <li>Heat machine, flush group head.</li>
          <li>Grind coffee fine.</li>
          <li>Add 18g coffee to portafilter, tamp evenly.</li>
          <li>Brew for 25–30 seconds for a double shot.</li>
          <li>Enjoy your espresso!</li>
        </ol>
      </>
    ),
    'French Press': (
      <>
        <div style={{ marginBottom: '0.7rem', fontWeight: 600, color: '#7e5f3b' }}>
          <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.15rem' }}>Requirements:</span>
          <ul style={{ margin: '0.3rem 0 0 1.2rem', color: '#634832', fontSize: '1rem', fontWeight: 400 }}>
            <li>French Press (plunger pot)</li>
            <li>Fresh coffee beans (18g)</li>
            <li>Grinder (coarse)</li>
            <li>Kettle (for hot water)</li>
            <li>Scale (optional)</li>
            <li>Spoon or stirrer</li>
            <li>Mug</li>
          </ul>
        </div>
        <strong>French Press Guide:</strong>
        <ol>
          <li>Heat water to 92–96°C (198–205°F).</li>
          <li>Grind coffee coarse.</li>
          <li>Add 18g coffee to French Press, pour 300ml hot water.</li>
          <li>Stir gently, place lid with plunger pulled up.</li>
          <li>Steep for 4 minutes.</li>
          <li>Slowly press the plunger down.</li>
          <li>Pour and enjoy!</li>
        </ol>
      </>
    ),
    'Cold Brew': (
      <>
        <div style={{ marginBottom: '0.7rem', fontWeight: 600, color: '#7e5f3b' }}>
          <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.15rem' }}>Requirements:</span>
          <ul style={{ margin: '0.3rem 0 0 1.2rem', color: '#634832', fontSize: '1rem', fontWeight: 400 }}>
            <li>Cold brew jar or pitcher</li>
            <li>Fresh coffee beans (20g)</li>
            <li>Grinder (coarse)</li>
            <li>Filter (cloth, paper, or mesh)</li>
            <li>Water (200ml, room temp or cold)</li>
            <li>Scale (optional)</li>
          </ul>
        </div>
        <strong>Cold Brew Guide:</strong>
        <ol>
          <li>Grind coffee coarse.</li>
          <li>Add 20g coffee to jar, pour 200ml cold/room-temp water.</li>
          <li>Stir gently to saturate all grounds.</li>
          <li>Cover and steep 12–24 hours in fridge.</li>
          <li>Strain/filter into a clean jar or bottle.</li>
          <li>Dilute with water or milk if desired.</li>
          <li>Serve over ice and enjoy!</li>
        </ol>
      </>
    ),
    'Moka Pot': (
      <>
        <div style={{ marginBottom: '0.7rem', fontWeight: 600, color: '#7e5f3b' }}>
          <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.15rem' }}>Requirements:</span>
          <ul style={{ margin: '0.3rem 0 0 1.2rem', color: '#634832', fontSize: '1rem', fontWeight: 400 }}>
            <li>Moka Pot</li>
            <li>Fresh coffee beans (16g)</li>
            <li>Grinder (fine-medium, slightly coarser than espresso)</li>
            <li>Kettle (optional, preheated water recommended)</li>
            <li>Scale (optional)</li>
            <li>Mug</li>
          </ul>
        </div>
        <strong>Moka Pot Guide:</strong>
        <ol>
          <li>Grind coffee fine-medium.</li>
          <li>Fill bottom chamber with hot water (up to safety valve).</li>
          <li>Add 16g coffee into filter basket, level (don’t tamp).</li>
          <li>Assemble Moka Pot tightly.</li>
          <li>Place on medium heat, lid open.</li>
          <li>Brew until coffee starts sputtering (~2–3 min).</li>
          <li>Remove from heat immediately, stir coffee in top chamber.</li>
          <li>Pour and enjoy!</li>
        </ol>
      </>
    ),
  };

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

    // Zoom level for each origin (zoomed out)
    const mapZooms = {
      Ethiopia: 2.2,
      Colombia: 2.2,
      Brazil: 1.8,
      Vietnam: 2.5,
      Philippines: 2.7,
    };

  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-no-repeat h-screen flex items-center">
      <div className="absolute inset-0 bg-black/60" /> {/* overlay */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h1 className="mt-0 mb-0 max-w-2xl mx-auto drop-shadow text-center" style={{ fontFamily: 'Pacifico, cursive', fontSize: '7rem', color: '#7e5f3b', fontWeight: 1000, marginBottom: 0 }}>
          Welcome to <span className="font-semibold text-amber-400">Taste of Tales</span>
        </h1>
        <p className="mt-0 mb-0 max-w-2xl mx-auto drop-shadow text-center" style={{ fontFamily: 'Pacifico, cursive', color: '#7e5f3b', marginBottom: 50, fontSize: '2rem', fontWeight: 200 }}>
          <span style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', fontStyle: 'italic', color: '#7e5f3b', fontWeight: 400 }}>
            where coffee meets stories and community.
          </span>
        </p>
        <p className="mt-0 text-lg md:text-xl max-w-2xl mx-auto drop-shadow text-center" style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', color: '#38220f' }}>
          Discover the spirit behind every brew and share the moments that matter.
        </p>
        <div className="flex justify-center mt-8">
          <div style={{ display: 'inline-block', border: '6px solid #634832', borderRadius: '1rem', padding: '1rem', background: '#e5d3bc', margin: 0, marginBottom: '4rem' }}>
            <video
              src="/Coffee_Video_Montage.mp4"
              controls
              autoPlay
              loop
              className="rounded-lg shadow-lg max-w-full hero-video"
            >
              Sorry, your browser does not support embedded videos.
            </video>
          </div>
        </div>
        <section className="every-cup-section flex flex-col items-center justify-center mt-10 mb-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg mb-6" style={{ color: '#7e5f3b' }}>
            <span className="every-cup-title-italic">Every Cup Tells a Story</span>
          </h1>
          <img src="/6.png" alt="Decorative" className="mx-auto" style={{ maxWidth: '1000px', width: '100%', height: 'auto', display: 'block' }} />
          <div className="every-cup-description text-center" style={{ color: '#755c47', fontSize: '1.5rem', fontWeight: 400, maxWidth: '1100px' }}>
            <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '2.5rem', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
              “Every Cup Tells a Story”
            </span>
            <br />
            Coffee has always been more than just a drink, it’s an experience that touches every part of our lives. Each cup carries with it a journey: the origins of the beans, the care of the farmers who nurtured them, the craft of the roasters and brewers, and finally, the moments we create while sharing it. A sip of coffee can be the comfort of a familiar morning ritual, the spark that fuels a heartfelt conversation, or the quiet pause that inspires reflection. In every flavor, aroma, and memory, there is a story waiting to be told, and coffee invites us to be part of that story.
          </div>
        </section>

        {/* Coffee Stories / Journal Highlights Section */}
        <section className="mt-20 mb-12 px-8 w-full flex flex-col items-center">
         <h2 className="font-bold text-center mb-6" style={{ color: '#7e5f3b', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '3rem' }}>
  <span className="stories-title-italic">Coffee Stories / Journal Highlights</span>
</h2>
          <div className="max-w-3xl w-full text-center" style={{ color: '#634832', fontSize: '1.25rem', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
            {/* Add your stories or highlights here */}
            <p>
              Explore inspiring stories from coffee lovers, farmers, and baristas. Dive into journal highlights that celebrate the journey, culture, and moments behind every cup.
            </p>
            {/* 3x3 Grid for images/blogs/stories */}
            <div className="mt-10 coffee-stories-grid">
              {/* 1st box */}
              <a href="https://coffeeforpeace.com/2025/07/28/celebrating-kape-partnering-for-justice-through-coffee/" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/kpc.webp" alt="Kape Partnering for Justice" />
                  <div className="coffee-story-title small">Kape Partnering for Justice</div>
                </div>
              </a>
              {/* 2nd box */}
              <a href="https://www.damngoodtravels.com/2023/12/a-coffee-story-connecting-over-cups.html" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/A Coffee Story.webp" alt="A Coffee Story" />
                  <div className="coffee-story-title small">A Coffee Story: Connecting Over Cups</div>
                </div>
              </a>
              {/* 3rd box */}
              <a href="https://kalsada.com/blog/tag/philippine+coffee" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/kalsadaphcoffee.webp" alt="Kalsada PH Coffee" />
                  <div className="coffee-story-title small">Kalsada PH Coffee</div>
                </div>
              </a>
              {/* 4th box */}
              <a href="https://oxfam.org.ph/davao-coffee-shop-helps-lift-farmers-out-of-poverty-2/" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/Oxfam Davao Coffee Shop.webp" alt="Oxfam Davao Coffee Shop" />
                  <div className="coffee-story-title small">Oxfam Davao Coffee Shop</div>
                </div>
              </a>
              {/* 5th box */}
              <a href="https://kapediaries.com/2024/03/31/lot-38-davaos-quirky-coffee-shop/" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/Lot 38 Davao Coffee Shop.webp" alt="Lot 38 Davao Coffee Shop" />
                  <div className="coffee-story-title small">Lot 38 Davao Coffee Shop</div>
                </div>
              </a>
              {/* 6th box */}
              <a href="https://kapediaries.com/2021/09/12/a-regular-trip-to-langub/" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/Langub.webp" alt="Langub Coffee Story" />
                  <div className="coffee-story-title small">Langub Coffee Story</div>
                </div>
              </a>
            </div>
              {/* Link for more coffee blog stories */}
              <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                <a
                  href="https://kapediaries.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline', color: '#7e5f3b', fontSize: '1.15rem', fontWeight: 500 }}
                >
                  Click here for more coffee blog stories!
                </a>
              </div>
          </div>
        </section>
        {/* Coffee Knowledge Hub Section */}
  <section className="coffee-knowledge-hub" style={{ marginTop: '1rem' }}>
   <h2 className="coffee-knowledge-hub-title" style={{ color: '#7e5f3b', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}>Coffee Knowledge Hub</h2>
          <div className="coffee-knowledge-hub-content" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {/* Brewing Methods */}
            <div className="coffee-knowledge-card" style={{ minWidth: '340px', flex: '1 1 340px', maxWidth: '500px' }}>
              <h3>Brewing Methods</h3>
              <div className="coffee-knowledge-brew-btns">
                <button
                  className={brewMethod === 'AeroPress' ? 'active' : ''}
                  onClick={() => setBrewMethod('AeroPress')}
                >
                  AeroPress
                </button>
                <button
                  className={brewMethod === 'Pour Over' ? 'active' : ''}
                  onClick={() => setBrewMethod('Pour Over')}
                >
                  Pour Over
                </button>
                <button
                  className={brewMethod === 'Espresso' ? 'active' : ''}
                  onClick={() => setBrewMethod('Espresso')}
                >
                  Espresso
                </button>
                <button
                  className={brewMethod === 'French Press' ? 'active' : ''}
                  onClick={() => setBrewMethod('French Press')}
                >
                  French Press
                </button>
                <button
                  className={brewMethod === 'Cold Brew' ? 'active' : ''}
                  onClick={() => setBrewMethod('Cold Brew')}
                >
                  Cold Brew
                </button>
                <button
                  className={brewMethod === 'Moka Pot' ? 'active' : ''}
                  onClick={() => setBrewMethod('Moka Pot')}
                >
                  Moka Pot
                </button>
              </div>
              <div className="coffee-knowledge-brew">
                {brewingGuides[brewMethod]}
              </div>
            </div>
            {/* Beans & Flavors - Table Layout */}
            <div className="coffee-knowledge-card beans-flavors-table-card" style={{ minWidth: '340px', flex: '1 1 340px', maxWidth: '500px' }}>
              <h3 className="beans-flavors-title">Beans & Flavors</h3>
              <table className="beans-flavors-table">
                <tbody>
                    {([
                      {
                        name: 'Ethiopian',
                        desc: 'Floral, citrus, berry notes',
                        details: 'Ethiopian beans are known for their complex floral aroma and bright acidity. They often have berry and citrus flavors, making them a favorite for pour-over and filter methods.',
                        icon: <SparklesIcon className="h-6 w-6" style={{ color: '#d6ad60' }} />,
                      },
                      {
                        name: 'Colombian',
                        desc: 'Nutty, chocolate, caramel',
                        details: 'Colombian beans are balanced and smooth, with notes of chocolate, caramel, and nuts. They are versatile and popular for espresso and drip coffee.',
                        icon: <StarIcon className="h-6 w-6" style={{ color: '#d6ad60' }} />,
                      },
                      {
                        name: 'Brazilian',
                        desc: 'Chocolate, nutty, low acidity',
                        details: 'Brazilian beans are mild, with low acidity and a nutty, chocolatey profile. They are often used in blends and for cold brew.',
                        icon: <BeakerIcon className="h-6 w-6" style={{ color: '#7e5f3b' }} />,
                      },
                      {
                        name: 'Vietnamese',
                        desc: 'Earthy, bold, spicy',
                        details: 'Vietnamese beans are bold and earthy, with spicy undertones. They are commonly used for strong, sweetened coffee drinks.',
    icon: <FireIcon className="h-6 w-6" style={{ color: '#7e5f3b' }} />,
  },
  {
    name: 'Philippine',
    desc: 'Fruity, nutty, sweet finish',
    details: 'Philippine beans offer a unique mix of fruity and nutty flavors, with a sweet finish. They are gaining recognition for their specialty profiles.',
    icon: <GlobeAltIcon className="h-6 w-6" style={{ color: '#7e5f3b' }} />,
  },
]).map((bean, idx) => (
  <tr key={bean.name} className="beans-flavors-row" onClick={() => { setSelectedBean(bean); setShowBeanModal(true); }} style={{ cursor: 'pointer' }}>
    <td className="beans-flavors-icon"><span>{bean.icon}</span></td>
    <td className="beans-flavors-country">{bean.name}</td>
    <td className="beans-flavors-notes">{bean.desc}</td>
  </tr>
))}
                </tbody>
              </table>
              {/* Modal for Bean Details */}
              {showBeanModal && selectedBean && (
                <div className="bean-modal-overlay" onClick={() => setShowBeanModal(false)}>
                  <div className="bean-modal-content" onClick={e => e.stopPropagation()}>
                    <button className="bean-modal-close" onClick={() => setShowBeanModal(false)}>&times;</button>
                    <div className="bean-modal-icon">{selectedBean.icon}</div>
                    <h2 className="bean-modal-title">{selectedBean.name}</h2>
                    <div className="bean-modal-info">
                      <div className="bean-modal-note">
                        <span className="bean-modal-note-label">Flavor Notes</span>
                        <span className="bean-modal-note-value">{selectedBean.desc}</span>
                      </div>
                      <div className="bean-modal-description">
                        <span className="bean-modal-description-label">Description</span>
                        <span className="bean-modal-description-value">{selectedBean.details}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div style={{ width: '100%', maxWidth: '600px', margin: '2rem auto 0 auto' }}>
                <CoffeeFactBox />
              </div>
            </div>
          </div>
        </section>
        {/* Removed Discover Stories and Join the Community buttons at the bottom */}
      </div>
    </section>
  );
}

export default function SecondPage() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);
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
          <nav style={{ display: 'flex', alignItems: 'center', gap: '3.5rem' }}>
            <Link to="/second" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
            <Link to="/coffee" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Coffee</Link>
            <Link to="/map" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Map</Link>
            <Link to="/products" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Products</Link>
            <Link to="/wheel" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Wheel</Link>
            <Link to="/about" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link>
          </nav>
        </div>
      </header>
  <div style={{ height: '4.5rem', background: '#ece0d1' }} />
      {/* Only animate the contents, not the background */}
  <div className={`secondpage-entrance${animate ? ' animate' : ''}`} style={{ transition: 'opacity 1.5s', opacity: animate ? 1 : 0, width: '100%' }}>
        <Hero />
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
        </div>
      </div>
    </div>
  );
}



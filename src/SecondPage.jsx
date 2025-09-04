

import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-no-repeat h-screen flex items-center">
      <div className="absolute inset-0 bg-black/60" /> {/* overlay */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
  <h1 className="mt-0 mb-0 max-w-2xl mx-auto drop-shadow text-center" style={{ fontFamily: 'Pacifico, cursive', fontSize: '4rem', color: '#38220f', fontWeight: 700, marginBottom: 0 }}>
    Welcome to <span className="font-semibold text-amber-400">Taste of Tales</span>
  </h1>
  <p className="mt-0 mb-0 max-w-2xl mx-auto drop-shadow text-center" style={{ fontFamily: 'Pacifico, cursive', color: '#38220f', marginBottom: 50, fontSize: '1.3rem', fontWeight: 200 }}>
    where coffee meets stories and community.
  </p>
        <p className="mt-0 text-lg md:text-xl max-w-2xl mx-auto drop-shadow text-center" style={{ fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', color: '#38220f' }}>
          Discover the spirit behind every brew and share the moments that matter.
        </p>
        <div className="flex justify-center mt-8">
           <div style={{ display: 'inline-block', border: '6px solid #634832', borderRadius: '1rem', padding: '0.5rem', background: '#e5d3bc', margin: 0 }}>
            <video
              src="/Filipina Coffee Farmers.mp4"
              controls
              className="rounded-lg shadow-lg max-w-full w-[15vw] md:w-[100px]"
            >
              Sorry, your browser does not support embedded videos.
            </video>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg mt-6" style={{ color: '#38220f' }}>
          Every Cup Tells a Story
        </h1>
        <div className="mt-4 image-text-row">
          <img src="/6.png" alt="Decorative" />
          <div className="image-description">
            <span>“Every Cup Tells a Story”</span>
            <br />
            reminds us that coffee is more than just a drink — it’s an experience. Each cup carries a journey of flavors, the hands that crafted it, and the moments we share while enjoying it. Whether it’s the comfort of a morning ritual, the spark of a meaningful conversation, or the inspiration from a quiet pause, every cup connects us to a story worth telling.
          </div>
        </div>

        {/* Coffee Stories / Journal Highlights Section */}
        <section className="mt-20 mb-12 px-8 w-full flex flex-col items-center">
          <h2 className="font-bold text-center mb-6" style={{ color: '#38220f', fontFamily: 'Pacifico, cursive', fontSize: '3rem' }}>
            Coffee Stories / Journal Highlights
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
                  <img src="/kpc.png" alt="Kape Partnering for Justice" />
                </div>
              </a>
              {/* 2nd box */}
              <a href="https://www.damngoodtravels.com/2023/12/a-coffee-story-connecting-over-cups.html" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/A Coffee Story.jpg" alt="A Coffee Story" />
                </div>
              </a>
              {/* 3rd box */}
              <a href="https://kalsada.com/blog/tag/philippine+coffee" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/kalsadaphcoffee.webp" alt="Kalsada PH Coffee" />
                </div>
              </a>
              {/* 4th box */}
              <a href="https://oxfam.org.ph/davao-coffee-shop-helps-lift-farmers-out-of-poverty-2/" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/oxfam.jpg" alt="Oxfam Davao Coffee Shop" />
                </div>
              </a>
              {/* 5th box */}
              <a href="https://kapediaries.com/2024/03/31/lot-38-davaos-quirky-coffee-shop/" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/lot38.webp" alt="Lot 38 Davao Coffee Shop" />
                </div>
              </a>
              {/* 6th box */}
              <a href="https://kapediaries.com/2021/09/12/a-regular-trip-to-langub/" target="_blank" rel="noopener noreferrer" className="coffee-story-box">
                <div className="coffee-story-img-frame">
                  <img src="/Langub.webp" alt="Langub Coffee Story" />
                </div>
              </a>
            </div>
          </div>
        </section>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#stories"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg shadow-lg transition"
          >
            Discover Stories
          </a>
          <a
            href="#community"
            className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg shadow-lg backdrop-blur transition"
          >
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
}

export default function SecondPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#ece0d1' }}>
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
        }}
      >
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Pacifico, cursive', fontSize: '1.3rem' }}>Home</Link>
          <Link to="#" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Pacifico, cursive', fontSize: '1.3rem' }}>Coffee</Link>
          <Link to="#" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Pacifico, cursive', fontSize: '1.3rem' }}>Blog</Link>
          <Link to="#" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Pacifico, cursive', fontSize: '1.3rem' }}>About Us</Link>
        </nav>
      </header>
      <Hero />
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
      </div>
    </div>
  );
}

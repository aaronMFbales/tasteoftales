import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './responsive.css';

export default function AboutUs() {
  const mainRef = useRef(null);
  const [fullscreenImg, setFullscreenImg] = useState(null); // { src, alt }
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgOrientation, setImgOrientation] = useState('landscape'); // 'portrait' or 'landscape'
  const [imgAspectRatio, setImgAspectRatio] = useState(1); // width / height

  useEffect(() => {
    const el = mainRef.current;
    if (el) {
      el.style.opacity = 0;
      el.style.transition = 'opacity 1.8s cubic-bezier(.4,0,.2,1)';
      setTimeout(() => {
        el.style.opacity = 1;
      }, 120);
    }
  }, []);

  // Close fullscreen on ESC
  useEffect(() => {
    if (!fullscreenImg) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsFlipped(false);
        setTimeout(() => setFullscreenImg(null), 350);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [fullscreenImg]);

  // Helper to open image fullscreen with flip
  const handleImgClick = (src, alt) => {
    setIsFlipped(false); // Reset flip before opening
    // Create an image to check aspect ratio
    const img = new window.Image();
    img.onload = function() {
      const aspect = img.naturalWidth / img.naturalHeight;
      setImgAspectRatio(aspect);
      if (img.naturalHeight > img.naturalWidth) {
        setImgOrientation('portrait');
      } else {
        setImgOrientation('landscape');
      }
      setFullscreenImg({ src, alt });
      setTimeout(() => setIsFlipped(true), 30); // Flip after modal is open
    };
    img.src = src;
  };

  // Helper to close fullscreen
  const handleClose = () => {
    setIsFlipped(false);
    setTimeout(() => setFullscreenImg(null), 350);
  };

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
          zIndex: 10002, // Increased z-index to ensure header is always on top
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
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginLeft: '0vw' }}>
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
  <div style={{ height: '1rem', background: '#ece0d1' }} />
      <style>{`
        .about-img-lift {
          transition: transform 0.32s cubic-bezier(.4,0,.2,1), box-shadow 0.32s cubic-bezier(.4,0,.2,1);
          cursor: pointer;
        }
        .about-img-lift:hover {
          transform: translateY(-12px) scale(1.035);
          box-shadow: 0 8px 32px #a0521c55, 0 2px 0 #d6ad60;
          z-index: 2;
        }
        .about-img-fullscreen-bg {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100vw; height: 100vh;
          background: transparent;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: none;
        }
        .about-img-flip-container {
          /* All sizing is now handled by inline style for fullscreen modal */
          perspective: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* .about-img-flip-container.portrait and .landscape removed */
        .about-img-flip {
          width: 100%;
          height: 100%;
          border-radius: 2.2rem;
          box-shadow: 0 8px 48px #a0521c99, 0 2px 0 #d6ad60;
          background: none;
          transform-style: preserve-3d;
          transition: transform 0.35s cubic-bezier(.4,0,.2,1);
          position: relative;
        }
        .about-img-flip.flipped {
          transform: rotateY(180deg) scale(1.04);
        }
        .about-img-flip-front, .about-img-flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 2.2rem;
          overflow: hidden;
          background: none;
        }
        .about-img-flip-front img, .about-img-flip-back img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: none;
          display: block;
        }
        .about-img-flip-back {
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
        }
        .about-img-close-btn {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          background: rgba(60,40,20,0.7);
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          font-size: 2rem;
          cursor: pointer;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .about-img-close-btn:hover {
          background: #a0521c;
        }
      `}</style>
  <div style={{ height: '1rem' }} />
  <main
    ref={mainRef}
    style={{
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
    }}
  >
  <h1 style={{ color: '#7e5f3b', fontFamily: 'Pacifico, cursive', fontSize: '5rem', marginBottom: '4rem', textAlign: 'center' }}>The Story behind everything</h1>
  <div style={{ color: '#634832', fontSize: '1.25rem', maxWidth: '1200px', width: '100%', margin: '0 auto', textAlign: 'center', lineHeight: '2', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '2.5rem' }}>
            <img src="/Coffee Expo Poster.webp" alt="Coffee Expo Poster" className="about-img-lift" style={{ width: '70%', maxWidth: '350px', borderRadius: '1.5rem', marginBottom: '2rem', boxShadow: '0 4px 24px #a0521c44' }} onClick={e => handleImgClick('/Coffee Expo Poster.webp', 'Coffee Expo Poster')} />
            <div style={{ fontSize: '4rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontStyle: 'italic', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}><b>The Stage Was Set</b></div>
           <div style={{ fontStyle: 'italic' }}>It began with a post.<br />On the official page of the Regional Coffee Expo appeared the words, “Ready, Set, Brew!”, a call that stirred excitement across the community.<br /><br />The announcement carried with it more than just information. It marked the arrival of something extraordinary: the Regional Coffee Expo 2025, set to unfold at the Davao Convention and Trade Center from August 28 - 30.<br /><br />At first, it felt like just another event in the city, one of many that come and go. Yet for those who lived and breathed coffee, it was something far greater. It was a celebration of flavors, cultures, and spirits.<br /><br />Looking back now, I realize that it was not only a stage for competitions or exhibits. It was the place where stories quietly took root, where cups carried more than liquid, and where my own heart would begin a journey it never expected.</div>
        </div>
    <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
              <img src="/DTI Partner.webp" alt="DTI Partner" className="about-img-lift" style={{ width: '70%', maxWidth: '350px', borderRadius: '1.5rem', boxShadow: '0 4px 24px #a0521c44' }} onClick={e => handleImgClick('/DTI Partner.webp', 'DTI Partner')} />
              <img src="/OJT DTI Expo.webp" alt="OJT DTI Expo" className="about-img-lift" style={{ width: '100%', maxWidth: '500px', minWidth: '350px', borderRadius: '1.5rem', boxShadow: '0 4px 24px #a0521c44', objectFit: 'cover' }} onClick={e => handleImgClick('/OJT DTI Expo.webp', 'OJT DTI Expo')} />
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontStyle: 'italic', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}><b>My Place in the Story</b></div>
          <div style={{ fontStyle: 'italic' }}>At that time, I was serving as an intern at DTI–DCFO. Fate placed me in the middle of it all because DTI happened to be one of the event partners. My task was to assist the media team, capturing moments, gathering photos and videos, and supporting the event’s coverage.<br /><br />It seemed like ordinary work at first. Yet as soon as I stepped into the convention hall, I felt something shift. The air carried the aroma of freshly roasted beans. The sound of grinders blended with conversations between farmers, roasters, and baristas. In that space, I was no longer only an intern fulfilling responsibilities. I became a witness to stories being told in every cup, stories that I never knew could move me.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <img src="/Expo Opening.webp" alt="Expo Opening" className="about-img-lift" style={{ width: '70%', maxWidth: '500px', borderRadius: '1.5rem', marginBottom: '2rem', boxShadow: '0 4px 24px #a0521c44' }} onClick={e => handleImgClick('/Expo Opening.webp', 'Expo Opening')} />
            <div style={{ fontSize: '2.7rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontStyle: 'italic', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}><b>Opening the Expo</b></div>
          <div style={{ fontStyle: 'italic' }}>When the doors opened on August 28, the atmosphere was alive. Rows of booths filled the hall, each carrying beans with origins from mountains and islands across the region. The farmers stood proudly, their faces etched with patience and devotion, each harvest carrying the essence of their land.<br /><br />Everywhere I turned, there was something new to discover. Basilan beans spoke of boldness, Sulu coffee carried resilience, and other roasts told of soil, sunlight, and weather. It felt as though Mindanao itself was speaking through every aroma and every sip.<br /><br />The expo was not only about coffee. It was about passion, about stories poured into cups, and about dreams shared openly with strangers who, for a brief moment, became companions.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.2rem',
              justifyItems: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
              width: '100%',
              maxWidth: '1200px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              {[1,2,3,4,5,6,7,8,9].map(num => (
                  <img
                    key={num}
                    src={`/Competition ${num}.webp`}
                    alt={`Competition ${num}`}
                    className="about-img-lift"
                    style={{ width: '95%', aspectRatio: '16/9', height: 'auto', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 2px 20px #a0521c44' }}
                    onClick={e => handleImgClick(`/Competition ${num}.webp`, `Competition ${num}`)}
                  />
              ))}
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontStyle: 'italic', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}><b>Competitions and Craft</b></div>
          <div style={{ fontStyle: 'italic' }}>The competitions were like living art.<br /><br />The First-Timer Latte Art Contest was filled with the bravery of beginners, hearts beating fast as they tried something new.<br />The Non-Professional Latte Art Contest was a showcase of creativity, where milk turned into swans, hearts, and leaves, each cup a canvas of imagination.<br />The Duo Barista Challenge was a performance of harmony, two hands moving in rhythm, proving that coffee, like life, is often best shared.<br /><br />Behind every design, every pull of espresso, every carefully measured pour, there was more than skill. There was love for the craft, persistence through trial and error, and the belief that something small could touch hearts.<br /><br />It was then I understood that coffee was not just for drinking. It was for telling stories too.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            {/* Images moved to specific story locations below */}
            <div style={{ fontSize: '3.5rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontStyle: 'italic', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}><b>A Personal Chapter</b></div>
          <div style={{ fontStyle: 'italic' }}>
            August 30, 2025 became more than a date. It became a memory I will never forget.<br /><br />
            I saw her first at the entrance of the convention hall. She was already there before me, her presence lighting up the space in a way no spotlight could. My heart swelled with gratitude when she introduced me to Sir Jan, her mentor, as well as the people she knew in the community. In that moment, the event felt less like work and more like being welcomed into a family.<br /><br />
          
            We roamed together through the expo, wandering between booths and sharing discoveries. I treated her to iced coffee, and though it was a simple gesture, it meant the world to me. Each sip was sweetened not only by the brew but by her company. I could not stop smiling during those moments. The conversations flowed easily, the laughter felt effortless, and the time seemed to move too quickly.<br /><br />
           
            <img src="/Personal Chapter 2.webp" alt="Personal Chapter 2" className="about-img-lift" style={{ width: '70%', maxWidth: '400px', aspectRatio: '16/9', height: 'auto', objectFit: 'cover', display: 'block', margin: '2rem auto', borderRadius: '1.5rem', boxShadow: '0 4px 24px #a0521c44' }} onClick={e => handleImgClick('/Personal Chapter 2.webp', 'Personal Chapter 2')} />
            Later, we stood together at the Public Cupping Session. Dozens of cups were arranged, steam rising softly like whispers in the air. We leaned closer, slurping, tasting, comparing notes. She spoke of citrus undertones, of chocolate lingering aftertaste, of subtle spice hidden in the brew. Her words carried more than knowledge; they carried wonder.<br /><br />
            Through her, coffee came alive. What was once only a drink to me transformed into an experience. Each cup became a story, each aroma a memory, each sip a connection.
          </div>
        </div>
    <div style={{ marginBottom: '2.5rem' }}>
  <img src="/Sir Jan.webp" alt="Sir Jan" className="about-img-lift" style={{ width: '55%', maxWidth: '320px', display: 'block', margin: '2rem auto', borderRadius: '1.5rem', boxShadow: '0 4px 24px #a0521c44' }} onClick={e => handleImgClick('/Sir Jan.webp', 'Sir Jan')} />
      <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontStyle: 'italic', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}><b>Coffee in Spirit — Sir Jan’s Story</b></div>
          <div style={{ fontStyle: 'italic' }}>That same day, we witnessed Sir Jan step onto the stage for the Coffee in Spirit competition. He carried with him not just ingredients but months of effort, trial, and inspiration. She told me of the struggles they went through, how they searched for balance, experimenting with flavors until realization struck: taste is never fixed, it is shaped by perception.<br /><br />
            {/* Ingredients images */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', margin: '2rem 0' }}>
              <img src="/Ingredient 1.webp" alt="Ingredient 1" className="about-img-lift" style={{ width: '32%', maxWidth: '220px', borderRadius: '1rem', boxShadow: '0 2px 12px #a0521c44', objectFit: 'cover' }} onClick={e => handleImgClick('/Ingredient 1.webp', 'Ingredient 1')} />
              <img src="/Ingredient 2.webp" alt="Ingredient 2" className="about-img-lift" style={{ width: '32%', maxWidth: '220px', borderRadius: '1rem', boxShadow: '0 2px 12px #a0521c44', objectFit: 'cover' }} onClick={e => handleImgClick('/Ingredient 2.webp', 'Ingredient 2')} />
              <img src="/Ingredient 3.webp" alt="Ingredient 3" className="about-img-lift" style={{ width: '32%', maxWidth: '220px', borderRadius: '1rem', boxShadow: '0 2px 12px #a0521c44', objectFit: 'cover' }} onClick={e => handleImgClick('/Ingredient 3.webp', 'Ingredient 3')} />
            </div>
            What made his drink remarkable was not only its fusion of whiskey, banana liqueur, Disaronno, crème de cacao, and espresso. It was how the vessel transformed it. In clay, the flavor softened. In glass, it grew sharper. In ceramic, it deepened. The drink became a reflection of life itself. The same story told in different voices, depending on who holds it.<br /><br />
            {/* Tilawi video above the naming sentence */}
            <video src="/Tilawi_Video.mp4" autoPlay loop muted style={{ width: '70%', maxWidth: '320px', display: 'block', margin: '2rem auto', borderRadius: '1.2rem', boxShadow: '0 2px 16px #a0521c44', background: '#000' }} />
            He called it “Tilawi.” A drink crafted with both science and soul, revealed in the quiet drama of dry ice mist curling around it like memory made visible.<br /><br />
            He explained that Tilawi was chosen to highlight locality. In the Philippines, whenever we create something in line with our own taste, whether a dish or a drink, it is often offered with the word “Tilawi,” meaning “go ahead, try it.” It is more than just a name, it is an invitation to experience and connect.<br /><br />
            To witness it was to realize that coffee, like love, can be more than taste. It can be art, philosophy, and spirit all at once.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontStyle: 'italic', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}><b>The Awarding</b></div>
          <img src="/Sir Jan Awarding.webp" alt="Sir Jan Awarding" className="about-img-lift" style={{ width: '90%', maxWidth: '700px', display: 'block', margin: '2rem auto 2.5rem auto', borderRadius: '1.5rem', boxShadow: '0 4px 24px #a0521c44' }} onClick={e => handleImgClick('/Sir Jan Awarding.webp', 'Sir Jan Awarding')} />
          <div style={{ fontStyle: 'italic' }}>
            When the awarding ceremony came, I was no longer there. I had already returned to my hometown, away from the bright lights of the convention hall.<br /><br />
            That afternoon, my phone lit up with a message from her. She told me with joy that Sir Jan had won the championship. It was her mentor who triumphed, and I was so happy for her. The energy we poured into supporting him was not wasted. I felt even more grateful knowing I had told her before the competition began that he would win, and he truly did.<br /><br />
            Though I wasn’t in the hall when the applause erupted, her pride and excitement reached me through her words, making me feel as if I was still there beside her.<br /><br />
            Sometimes, the moments you miss still find a way to reach your heart.
          </div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '4rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontStyle: 'italic', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}><b>Why Taste of Tales?</b></div>
  <div style={{ fontStyle: 'italic' }}>And so, Taste of Tales was born.<br /><br />Because coffee is not only beans or brews. It is stories, carried in every sip and shared in every gathering. It is the aroma that lingers long after a moment passes, the warmth that ties us to memories, the flavor that reminds us of people who leave a mark on our spirit.<br /><br />This website is a way to honor those stories. It is a way to remember the expo, the farmers, the baristas, the mentors, and most of all, her. The girl whose love for coffee awakened something within me. The girl whose presence turned an ordinary internship into a chapter of my life that I will carry forever.<br /><br />Taste of Tales is not only about drinks. It is about connection. It is about spirit. It is about the stories that live inside every cup, waiting for someone to taste, to tell, and to remember.<br /><br />And this, above all, is mine.<br /><br /><span style={{ color: '#7e5f3b', fontSize: '1.1rem' }}>Media source: <a href="https://www.facebook.com/DavaoRegionalCoffeeExpo" target="_blank" rel="noopener noreferrer" style={{ color: '#8D4F2F', textDecoration: 'underline', fontWeight: 500 }}>Regional Coffee Expo</a></span></div>
        </div>
      </div>
      {/* Fullscreen Flipping Image Overlay */}
      {fullscreenImg && (
        <div
          className="about-img-fullscreen-bg"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(40,30,20,0.55)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handleClose}
        >
          <div
            className={`about-img-flip${isFlipped ? ' flipped' : ''}`}
            style={{
              width: `min(96vw, ${imgAspectRatio >= 1 ? '90vw' : '60vw'})`,
              height: `min(96vh, ${imgAspectRatio >= 1 ? `calc(90vw / ${imgAspectRatio})` : '90vh'})`,
              maxWidth: imgAspectRatio >= 1 ? '1200px' : '600px',
              maxHeight: '95vh',
              aspectRatio: imgAspectRatio,
              borderRadius: '2.2rem',
              background: 'none',
              position: 'relative',
              perspective: '1200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'none',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="about-img-flip-front" style={{borderRadius: '2.2rem', overflow: 'hidden'}}>
              <img src={fullscreenImg.src} alt={fullscreenImg.alt} style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '2.2rem', background: 'none', display: 'block'}} />
            </div>
            <div className="about-img-flip-back" style={{borderRadius: '2.2rem', overflow: 'hidden'}}>
              <img src={fullscreenImg.src} alt={fullscreenImg.alt} style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '2.2rem', background: 'none', display: 'block'}} />
            </div>
          </div>
        </div>
      )}
      {/* Ending Signature */}
      <footer style={{ width: '100%', marginTop: '3rem', padding: '2.5rem 0 2rem 0', background: 'none', textAlign: 'center' }}>
        <div style={{ color: '#7e5f3b', fontFamily: 'Pacifico, cursive', fontSize: '2.7rem', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
          Aaron Bales
        </div>
        <div style={{ color: '#634832', fontSize: '1.15rem', fontStyle: 'italic', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
          Creator & Web Developer of Taste of Tales, and Lifelong Coffee Enthusiast.<br/>
          BSIT Major in Business Technology Management, 4th Year Student<br/>
          University of Southeastern Philippines
        </div>
        <div style={{ color: '#a67c52', fontSize: '1.05rem', marginTop: '1.5rem', fontFamily: 'Pacifico, cursive', opacity: 0.7 }}>
          Thank you for sharing a cup and a story with me.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.2rem' }}>
          <a href="https://www.facebook.com/aaronmfbales" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#a67c52"/>
              <path d="M15.36 8.5H13.5V7.38c0-.41.27-.51.46-.51h1.36V5.09L13.52 5c-2.01 0-2.47 1.5-2.47 2.46V8.5H9.5v2.09h1.55V19h2.45v-8.41h1.65l.21-2.09Z" fill="#fff"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/aaronmfbales/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#a67c52"/>
              <rect x="7" y="7" width="10" height="10" rx="3" fill="none" stroke="#fff" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="2.5" fill="none" stroke="#fff" strokeWidth="1.5"/>
              <circle cx="15.2" cy="8.8" r="0.8" fill="#fff"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@aaronmfbales" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#a67c52"/>
              <path d="M16.5 8.5c-.7 0-1.27-.57-1.27-1.27V6.5h-1.23v7.13a1.73 1.73 0 1 1-1.73-1.73h.09V10.6h-.09a3.13 3.13 0 1 0 3.13 3.13V9.77c.36.18.77.28 1.2.28h.2V8.5h-.3Z" fill="#fff"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/aaron-bales-42927437a/?originalSubdomain=ph" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#a67c52"/>
              <path d="M8.34 17H6.33V10h2.01v7Zm-1-8.01a1.16 1.16 0 1 1 0-2.32 1.16 1.16 0 0 1 0 2.32ZM18 17h-2.01v-3.36c0-.8-.02-1.83-1.12-1.83-1.12 0-1.29.87-1.29 1.77V17h-2.01V10h1.93v.96h.03c.27-.5.93-1.03 1.91-1.03 2.04 0 2.42 1.34 2.42 3.09V17Z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </footer>
      </main>
    </div>
  );
}

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
  <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
  <h1 style={{ color: '#7e5f3b', fontFamily: 'Pacifico, cursive', fontSize: '5rem', marginBottom: '4rem', textAlign: 'center' }}>The Story behind everything</h1>
  <div style={{ color: '#634832', fontSize: '1.25rem', maxWidth: '900px', width: '100%', margin: '0 auto', textAlign: 'center', lineHeight: '2', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontFamily: 'Pacifico, cursive' }}>The Stage Was Set</div>
          <div>It began with an invitation.<br />A simple poster, marked with bold words: “Ready, Set, Brew!”<br />The Regional Coffee Expo 2025 was to unfold at the Davao Convention and Trade Center from August 28 to 30.<br /><br />At first, it felt like just another event in the city, one of many that come and go. Yet for those who lived and breathed coffee, it was something far greater. It was a celebration of flavors, cultures, and spirits.<br /><br />Looking back now, I realize that it was not only a stage for competitions or exhibits. It was the place where stories quietly took root, where cups carried more than liquid, and where my own heart would begin a journey it never expected.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontFamily: 'Pacifico, cursive' }}>My Place in the Story</div>
          <div>At that time, I was serving as an intern at DTI–DCFO. Fate placed me in the middle of it all because DTI happened to be one of the event partners. My task was to assist the media team, capturing moments, gathering photos and videos, and supporting the event’s coverage.<br /><br />It seemed like ordinary work at first. Yet as soon as I stepped into the convention hall, I felt something shift. The air carried the aroma of freshly roasted beans. The sound of grinders blended with conversations between farmers, roasters, and baristas. In that space, I was no longer only an intern fulfilling responsibilities. I became a witness to stories being told in every cup, stories that I never knew could move me.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontFamily: 'Pacifico, cursive' }}>Opening the Expo</div>
          <div>When the doors opened on August 28, the atmosphere was alive. Rows of booths filled the hall, each carrying beans with origins from mountains and islands across the region. The farmers stood proudly, their faces etched with patience and devotion, each harvest carrying the essence of their land.<br /><br />Everywhere I turned, there was something new to discover. Basilan beans spoke of boldness, Sulu coffee carried resilience, and other roasts told of soil, sunlight, and weather. It felt as though Mindanao itself was speaking through every aroma and every sip.<br /><br />The expo was not only about coffee. It was about passion, about stories poured into cups, and about dreams shared openly with strangers who, for a brief moment, became companions.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontFamily: 'Pacifico, cursive' }}>Competitions and Craft</div>
          <div>The competitions were like living art.<br /><br />The First-Timer Latte Art Contest was filled with the bravery of beginners, hearts beating fast as they tried something new.<br />The Non-Professional Latte Art Contest was a showcase of creativity, where milk turned into swans, hearts, and leaves, each cup a canvas of imagination.<br />The Duo Barista Challenge was a performance of harmony, two hands moving in rhythm, proving that coffee, like life, is often best shared.<br /><br />I watched in awe. Behind every design, every pull of espresso, every carefully measured pour, there was more than skill. There was love for the craft, persistence through trial and error, and the belief that something small could touch hearts.<br /><br />It was then I understood that coffee was not just for drinking. It was for telling stories too.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontFamily: 'Pacifico, cursive' }}>A Personal Chapter</div>
          <div>August 30, 2025 became more than a date. It became a memory I will never forget.<br /><br />I saw her first at the entrance of the convention hall. She was already there before me, her presence lighting up the space in a way no spotlight could. My heart swelled with gratitude when she introduced me to Sir Jan, her mentor, as well as the people she knew in the community. In that moment, the event felt less like work and more like being welcomed into a family.<br /><br />We roamed together through the expo, wandering between booths and sharing discoveries. I treated her to iced coffee, and though it was a simple gesture, it meant the world to me. Each sip was sweetened not only by the brew but by her company. I could not stop smiling during those moments. The conversations flowed easily, the laughter felt effortless, and the time seemed to move too quickly.<br /><br />Later, we stood together at the Public Cupping Session. Dozens of cups were arranged, steam rising softly like whispers in the air. We leaned closer, slurping, tasting, comparing notes. She spoke of citrus undertones, of chocolate lingering aftertaste, of subtle spice hidden in the brew. Her words carried more than knowledge; they carried wonder.<br /><br />Through her, coffee came alive. What was once only a drink to me transformed into an experience. Each cup became a story, each aroma a memory, each sip a connection.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontFamily: 'Pacifico, cursive' }}>Coffee in Spirit — Sir Jan’s Story</div>
          <div>That same day, we witnessed Sir Jan step onto the stage for the Coffee in Spirit competition. He carried with him not just ingredients but months of effort, trial, and inspiration. She told me of the struggles they went through, how they searched for balance, experimenting with flavors until realization struck: taste is never fixed, it is shaped by perception.<br /><br />What made his drink remarkable was not only its fusion of whiskey, banana liqueur, Disaronno, crème de cacao, and espresso. It was how the vessel transformed it. In clay, the flavor softened. In glass, it grew sharper. In ceramic, it deepened. The drink became a reflection of life itself. The same story told in different voices, depending on who holds it.<br /><br />He named it “Tilawi.” A drink crafted with both science and soul, unveiled with the drama of dry ice mist curling around it like memory made visible.<br /><br />To witness it was to understand that coffee, like love, can be more than taste. It can be art, philosophy, and spirit all at once.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontFamily: 'Pacifico, cursive' }}>The Awarding</div>
          <div>When the awarding ceremony came, I was no longer there. I had already returned to my hometown, away from the bright lights of the convention hall. Yet even in absence, I remained connected.<br /><br />That evening, my phone lit up with a message from her. She told me with joy that Sir Jan had won the championship. Her pride, her happiness, her excitement poured through those words.<br /><br />Though I was not there when the applause thundered through the hall, I felt as though I had witnessed it all. Because through her, the triumph became mine as well. Presence, I realized, is not always about standing beside someone. Sometimes it is about sharing in their joy, even across distance.</div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#7e5f3b', marginBottom: '1.2rem', fontFamily: 'Pacifico, cursive' }}>Why Taste of Tales</div>
          <div>And so, Taste of Tales was born.<br /><br />Because coffee is not only beans or brews. It is stories, carried in every sip and shared in every gathering. It is the aroma that lingers long after a moment passes, the warmth that ties us to memories, the flavor that reminds us of people who leave a mark on our spirit.<br /><br />This website is a way to honor those stories. It is a way to remember the expo, the farmers, the baristas, the mentors, and most of all, her. The girl whose love for coffee awakened something within me. The girl whose presence turned an ordinary internship into a chapter of my life that I will carry forever.<br /><br />Taste of Tales is not only about drinks. It is about connection. It is about spirit. It is about the stories that live inside every cup, waiting for someone to taste, to tell, and to remember.<br /><br />And this, above all, is mine.</div>
        </div>
      </div>
      </main>
    </div>
  );
}

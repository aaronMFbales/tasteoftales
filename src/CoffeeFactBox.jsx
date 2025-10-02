import React, { useState } from 'react';

const coffeeFacts = [
  "Coffee is the second most traded commodity after oil.",
  "The word “coffee” comes from the Arabic “qahwa”.",
  "Brazil is the world’s largest coffee producer.",
  "Coffee beans are actually seeds inside cherries.",
  "Espresso has less caffeine per serving than drip coffee.",
  "The first webcam was made to watch a coffee pot.",
  "Two main beans: Arabica (smooth) & Robusta (strong).",
  "Finland drinks the most coffee per person.",
  "Light roast has more caffeine than dark roast.",
  "Coffee was once chewed, not brewed."
];

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function CoffeeFactBox() {
  const [fact, setFact] = useState('');
  const [animate, setAnimate] = useState(false);
  const [remainingFacts, setRemainingFacts] = useState(shuffle(coffeeFacts));

  function generateFact() {
    let facts = remainingFacts;
    if (facts.length === 0) {
      facts = shuffle(coffeeFacts);
    }
    const nextFact = facts[0];
    setFact(nextFact);
    setRemainingFacts(facts.slice(1));
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10); // trigger animation
  }

  return (
    <div
      className="coffee-fact-box"
      style={
        !fact
          ? {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '180px',
              height: 'auto',
            }
          : {}
      }
    >
      <h4 className="coffee-fact-title" style={!fact ? { textAlign: 'center', marginBottom: '2rem' } : {}}>
        Generate a Coffee Fact!
      </h4>
      <button
        className="coffee-fact-btn"
        onClick={generateFact}
        style={{ margin: '0 auto', display: 'block', width: '140px', minWidth: '80px' }}
      >
        Show Fact
      </button>
      <div className={`coffee-fact-text${animate ? ' pop' : ''}`} style={fact ? { marginTop: '1.5rem', textAlign: 'center' } : {}}>
        {fact}
      </div>
    </div>
  );
}

export default CoffeeFactBox;

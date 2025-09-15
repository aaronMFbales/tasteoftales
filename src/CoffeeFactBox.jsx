import React, { useState } from 'react';

const coffeeFacts = [
  "Coffee is the second most traded commodity in the world after oil.",
  "The word 'coffee' comes from the Arabic 'qahwa'.",
  "Brazil is the largest coffee producer in the world.",
  "Coffee beans are actually seeds from the coffee cherry.",
  "Espresso has less caffeine per serving than drip coffee.",
  "The first webcam was invented to monitor a coffee pot.",
  "There are two main types of coffee beans: Arabica and Robusta.",
  "Finland consumes the most coffee per capita in the world.",
  "Light roast coffee has more caffeine than dark roast.",
  "Coffee was originally chewed, not brewed."
];

function CoffeeFactBox() {
  const [fact, setFact] = useState('');
  const [animate, setAnimate] = useState(false);

  function generateFact() {
    const randomFact = coffeeFacts[Math.floor(Math.random() * coffeeFacts.length)];
    setFact(randomFact);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10); // trigger animation
  }

  return (
    <div className="coffee-fact-box">
      <h4 className="coffee-fact-title">Generate a Coffee Fact!</h4>
      <button
        className="coffee-fact-btn"
        onClick={generateFact}
      >
        Show Fact
      </button>
      <div className={`coffee-fact-text${animate ? ' pop' : ''}`}>
        {fact}
      </div>
    </div>
  );
}

export default CoffeeFactBox;

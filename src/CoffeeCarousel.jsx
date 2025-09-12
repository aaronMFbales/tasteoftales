import React, { useState } from 'react';
import coffeeData from './coffeeData';
import './CoffeeCarousel.css';

function CoffeeCarousel({ category }) {
  const coffees = coffeeData[category];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + coffees.length) % coffees.length);
  const next = () => setCurrent((current + 1) % coffees.length);

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{category === 'hot' ? 'Hot Coffees' : 'Cold Coffees'}</h2>
      <div className="carousel-card">
        <button className="carousel-arrow" onClick={prev}>&lt;</button>
        <div className="carousel-content">
          {/* Placeholder for image */}
          <div className="carousel-image">
            {coffees[current].image ? (
              <img src={coffees[current].image} alt={coffees[current].name} />
            ) : (
              <div className="carousel-image-placeholder">No Image</div>
            )}
          </div>
          <div className="carousel-info">
            <h3>{coffees[current].name}</h3>
            <p>{coffees[current].description}</p>
          </div>
        </div>
        <button className="carousel-arrow" onClick={next}>&gt;</button>
      </div>
      <div className="carousel-indicators">
        {coffees.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? 'active' : ''}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default CoffeeCarousel;

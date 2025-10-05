import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import SecondPage from './SecondPage';
import CoffeePage from './CoffeePage.jsx';
import MapPage from './MapPage.jsx';
import WheelPage from './WheelPage.jsx';
import AboutUs from './AboutUs.jsx';
import ProductsPage from './ProductsPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/second" element={<SecondPage />} />
    <Route path="/coffee" element={<CoffeePage />} />
    <Route path="/map" element={<MapPage />} />
    <Route path="/wheel" element={<WheelPage />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  </StrictMode>
);

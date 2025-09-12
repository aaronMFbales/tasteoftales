import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import SecondPage from './SecondPage';
import CoffeePage from './CoffeePage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/coffee" element={<CoffeePage />} />
      </Routes>
    </Router>
  </StrictMode>
);

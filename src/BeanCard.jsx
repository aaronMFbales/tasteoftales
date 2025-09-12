import React, { useState } from 'react';
import './App.css';

export default function BeanCard({ bean, idx }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div
        className="coffee-knowledge-bean bean-card"
        tabIndex={0}
        onClick={openModal}
        onKeyPress={e => (e.key === 'Enter' ? openModal() : null)}
        style={{ cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s' }}
      >
        <span className="bean-card-icon" aria-label="bean-icon" style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>{bean.icon}</span>
        <div className="bean-card-title">{bean.name}</div>
        <div className="bean-card-desc">{bean.desc}</div>
      </div>
      {showModal && (
        <div className="bean-modal-overlay" onClick={closeModal}>
          <div className="bean-modal" onClick={e => e.stopPropagation()}>
            <button className="bean-modal-close" onClick={closeModal}>&times;</button>
            <div className="bean-modal-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{bean.icon}</div>
            <div className="bean-modal-title" style={{ fontFamily: 'Pacifico, cursive', fontSize: '2rem', color: '#7e5f3b', marginBottom: '0.5rem' }}>{bean.name}</div>
            <div className="bean-modal-desc" style={{ color: '#634832', fontSize: '1.15rem', marginBottom: '0.7rem', textAlign: 'center' }}>{bean.desc}</div>
            <div className="bean-modal-details" style={{ color: '#38220f', fontSize: '1.08rem', marginTop: '0.5rem', textAlign: 'center' }}>{bean.details}</div>
          </div>
        </div>
      )}
    </>
  );
}

import React from 'react';

export default function SecondPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#ece0d1' }}>
      <header style={{ width: '100%', background: '#634832', color: '#fff', padding: '1.5rem 0', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
        Taste of Tales
      </header>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Second Page!</h1>
        <p className="text-lg">This is where your next story begins...</p>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from 'react-router-dom';
import './CoffeeCarousel.css';
import ReactECharts from "echarts-for-react";

const palette = {
  Fruity: "#F06292",
  Floral: "#BA68C8",
  "Sweet Aromatics": "#F6BF26",
  "Brown Sugar": "#F9A825",
  Roasted: "#8D6E63",
  "Nutty / Cocoa": "#6D4C41",
  Spices: "#D4A373",
  "Sour / Fermented": "#81C784",
  "Green / Vegetative": "#66BB6A",
  Other: "#90A4AE",
};

const data = [
  // ...existing wheel data, omitted for brevity...
];

function flattenSizes(node, depth = 1) {
  if (!node.children || node.children.length === 0) {
    node.value = 1;
    return 1;
  }
  let sum = 0;
  for (const child of node.children) sum += flattenSizes(child, depth + 1);
  node.value = sum;
  return sum;
}

const sizedData = data.map((d) => JSON.parse(JSON.stringify(d)));
sizedData.forEach((d) => flattenSizes(d));

const levels = [
  {},
  { r0: 0, r: 60, label: { rotate: 0, fontSize: 14, color: "#111" }, itemStyle: { borderWidth: 2 } },
  { r0: 60, r: 130, label: { rotate: "tangential", fontSize: 12 }, itemStyle: { borderWidth: 2 } },
  { r0: 130, r: 220, label: { rotate: "tangential", fontSize: 11, overflow: "truncate" }, itemStyle: { borderWidth: 1 } },
];

export default function WheelPage() {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: (info) => {
        const hierarchy = info.treePathInfo
          .slice(1)
          .map((n) => n.name)
          .join(" → ");
        return `<div style="font-size:12px"><strong>${info.name}</strong><br/>${hierarchy}</div>`;
      },
    },
    series: [
      {
        type: "sunburst",
        radius: [0, "100%"],
        sort: undefined,
        nodeClick: "zoomToNode",
        emphasis: { focus: "ancestor" },
        data: sizedData,
        levels,
        label: { show: true },
        itemStyle: { borderColor: "#fff" },
      },
    ],
  };

  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: '#f5e6d6', position: 'relative' }}>
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
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', marginLeft: '2rem', marginRight: '2rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '2.2rem', height: '2.2rem', color: '#fff' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4-11v11a1 1 0 001 1h5a1 1 0 001-1V10" />
          </svg>
        </Link>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginLeft: '0vw' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link to="/second" className="nav-link">Home</Link>
            <Link to="/coffee" className="nav-link">Coffee</Link>
            <Link to="/wheel" className="nav-link">Wheel</Link>
            <Link to="#" className="nav-link">About Us</Link>
          </nav>
        </div>
      </header>
      <div style={{ height: '2.5rem', background: '#f5e6d6' }} />
  <div className="wheel-page" style={{ minHeight: '520px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', marginTop: 0 }}>
        <h1 style={{ fontFamily: 'Pacifico, cursive', color: '#967259', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Coffee Taster's Flavor Wheel</h1>
        <ReactECharts
          style={{ height: 600, width: '100%', maxWidth: 900, background: '#fff', borderRadius: '2rem', boxShadow: '0 4px 32px rgba(150,114,89,0.10)' }}
          option={option}
          notMerge={true}
          lazyUpdate={true}
        />
        <p style={{ color: '#6d4c2b', fontSize: '1.1rem', marginTop: '2rem', textAlign: 'center', maxWidth: 700 }}>
          Tip: Click a segment to zoom. Hover to see the full hierarchy. Expand the dataset in this file to customize categories and descriptors.
        </p>
      </div>
    </div>
  );
}

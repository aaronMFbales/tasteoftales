
import React from "react";
import { Link } from 'react-router-dom';
import './WheelPage.css';
import ReactECharts from "echarts-for-react";
import { coffeeFlavorData } from "./flavorData";

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

const data = coffeeFlavorData;

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

function getOption() {
  return {
    tooltip: {
      trigger: "item",
      formatter: (info) => {
        const hierarchy = info.treePathInfo
          .slice(1)
          .map((n) => n.name)
          .join(" → ");
        return `<div style='font-size:13px'><strong>${info.name}</strong><br/>${hierarchy}</div>`;
      },
    },
    series: [
      {
        type: "sunburst",
        radius: [0, "95%"],
        sort: undefined,
        nodeClick: "zoomToNode",
        emphasis: { focus: "ancestor" },
        data: sizedData,
        levels: [
          {},
          {
            r0: 0,
            r: 100,
            label: {
              show: false,
              rotate: "tangential",
              align: "center",
              fontSize: 16,
              color: "#38220f",
              fontWeight: "bold",
              overflow: "break",
            },
            itemStyle: { borderWidth: 2 },
            emphasis: {
              label: {
                show: true,
                color: "#38220f",
                fontWeight: "bold",
              }
            }
          },
          {
            r0: 100,
            r: 220,
            label: {
              show: false,
              rotate: "tangential",
              align: "center",
              fontSize: 13,
              color: "#38220f",
              overflow: "break",
            },
            itemStyle: { borderWidth: 2 },
            emphasis: {
              label: {
                show: true,
                color: "#38220f",
                fontWeight: "bold",
              }
            }
          },
          {
            r0: 220,
            r: 400,
            label: {
              show: false,
              rotate: "tangential",
              align: "center",
              fontSize: 11,
              color: "#38220f",
              overflow: "truncate",
            },
            itemStyle: { borderWidth: 1 },
            emphasis: {
              label: {
                show: true,
                color: "#38220f",
                fontWeight: "bold",
              }
            }
          },
        ],
        labelLayout: {
          hideOverlap: false,
          moveOverlap: 'shiftY',
        },
        itemStyle: { borderColor: "#fff" },
      },
    ],
    animation: true,
  };
}

export default function WheelPage() {
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
      <div style={{ paddingTop: '7rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw' }}>
        <h1 style={{
          textAlign: 'center',
          fontFamily: 'Pacifico, cursive',
          fontSize: '3.2rem',
          color: '#967259',
          fontWeight: 'bold',
          marginBottom: '1.2rem',
          letterSpacing: '0.04em',
          textShadow: '0 4px 24px #d6ad6088',
        }}>
          Coffee Taster's Flavor Wheel
        </h1>
        <div style={{ width: '100vw', maxWidth: '950px', aspectRatio: '1/1', margin: '0 auto' }}>
          <ReactECharts
            option={getOption()}
            style={{ width: '100%', height: '100%', aspectRatio: '1/1' }}
          />
        </div>
        <p className="wheel-tip">
          Tip: Click a segment to zoom. Hover to see the full hierarchy. Expand the dataset in this file to customize categories and descriptors.
        </p>
      </div>
    </div>
  );
}


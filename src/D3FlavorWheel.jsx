import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { coffeeFlavorData } from "./flavorData";

function flattenData(data) {
  // Flatten hierarchical data into an array of segments with hierarchy info
  const segments = [];
  function walk(node, depth = 0, parent = null, startAngle = 0, endAngle = 2 * Math.PI) {
    const children = node.children || [];
    const value = node.value || 1;
    const angle = endAngle - startAngle;
    let currentAngle = startAngle;
    if (children.length === 0) {
      segments.push({ ...node, depth, parent, startAngle, endAngle });
      return;
    }
    const total = children.reduce((sum, c) => sum + (c.value || 1), 0);
    for (const child of children) {
      const childValue = child.value || 1;
      const childAngle = (childValue / total) * angle;
      walk(child, depth + 1, node, currentAngle, currentAngle + childAngle);
      currentAngle += childAngle;
    }
    segments.push({ ...node, depth, parent, startAngle, endAngle });
  }
  for (const root of data) walk(root);
  return segments;
}

export default function D3FlavorWheel({ width = 1500, height = 1500 }) {
  const ref = useRef();
  // Tooltip div is created once outside React
  useEffect(() => {
    let div = document.getElementById('flavor-tooltip');
    if (!div) {
      div = document.createElement('div');
      div.id = 'flavor-tooltip';
      div.style.position = 'absolute';
      div.style.pointerEvents = 'none';
      div.style.background = 'rgba(30,30,30,0.95)';
      div.style.color = '#fff';
      div.style.padding = '14px 18px';
      div.style.borderRadius = '10px';
      div.style.fontSize = '1.2em';
      div.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)';
      div.style.opacity = 0;
      div.style.zIndex = 99999;
      document.body.appendChild(div);
    } else {
      // Always ensure tooltip is appended to body and z-index is high in fullscreen
      div.style.zIndex = 99999;
      if (div.parentNode !== document.body) {
        document.body.appendChild(div);
      }
    }
    // Listen for fullscreen changes to re-append tooltip if needed
    const handleFS = () => {
      const tip = document.getElementById('flavor-tooltip');
      if (tip && tip.parentNode !== document.body) {
        document.body.appendChild(tip);
      }
      if (tip) tip.style.zIndex = 99999;
    };
    document.addEventListener('fullscreenchange', handleFS);
    document.addEventListener('webkitfullscreenchange', handleFS);
    document.addEventListener('msfullscreenchange', handleFS);
    return () => {
      document.removeEventListener('fullscreenchange', handleFS);
      document.removeEventListener('webkitfullscreenchange', handleFS);
      document.removeEventListener('msfullscreenchange', handleFS);
    };
  }, []);
  useEffect(() => {
    const tooltip = d3.select('#flavor-tooltip');
    const radius = Math.min(width, height) / 2 - 10;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    svg.attr("width", width).attr("height", height);
    const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);
    const data = coffeeFlavorData;
    flattenData(data); // Ensure .value is set
    const root = d3.hierarchy({ children: data }).sum(d => d.value || 1);
    const partition = d3.partition().size([2 * Math.PI, radius]);
    partition(root);
    const arc = d3.arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .innerRadius(d => d.y0)
      .outerRadius(d => d.y1);
    const paths = g.selectAll("path")
      .data(root.descendants().filter(d => d.depth > 0))
      .enter()
      .append("path")
      .attr("fill", d => d.data.itemStyle?.color || "#ccc")
      .attr("stroke", "#fff")
      .on("mousemove", function(event, d) {
        const name = d.data.name;
        const desc = d.data.description || d.data.definition || '';
        tooltip.transition().duration(150).style('opacity', 1);
        tooltip.html(`<strong>${name}</strong>${desc ? `<br><span style='font-size:0.95em;'>${desc}</span>` : ''}`);
        // Set tooltip background to segment color
        const bgColor = d.data.itemStyle?.color || '#333';
        tooltip.style('background', bgColor)
               .style('color', '#fff')
               .style('left', (event.pageX + 18) + 'px')
               .style('top', (event.pageY - 10) + 'px');
      })
      .on("mouseleave", function() {
        tooltip.transition().duration(150).style('opacity', 0);
      });

    // Animate the wheel segments with a circular reveal
    paths
      .attr("d", d => {
        // Start with zero arc
        const zeroArc = d3.arc()
          .startAngle(d.x0)
          .endAngle(d.x0)
          .innerRadius(d.y0)
          .outerRadius(d.y1);
        return zeroArc(d);
      })
      .transition()
      .duration(1200)
      .attrTween("d", function(d) {
        const interpolate = d3.interpolate(d.x0, d.x1);
        return function(t) {
          const arcGen = d3.arc()
            .startAngle(d.x0)
            .endAngle(interpolate(t))
            .innerRadius(d.y0)
            .outerRadius(d.y1);
          return arcGen(d);
        };
      });
    // Add labels
    const labels = g.selectAll("text")
      .data(root.descendants().filter(d => d.depth > 0))
      .enter()
      .append("text")
      .attr("dy", "0.35em")
      .attr("transform", d => {
  const angle = (d.x0 + d.x1) / 2;           // middle of the arc in radians
  // Move labels slightly inward from previous offset
  const baseRadius = (d.y0 + d.y1) / 2;
  const offset = 2; // reduced px offset for closer labels
  const radius = baseRadius + offset;
  let rotate = (angle * 180) / Math.PI - 90; // convert to degrees, start at 12 o’clock
  // Flip upside-down labels so they stay readable
  if (rotate > 90) rotate -= 180;
  // First translate, then rotate
  return `translate(${Math.cos(angle - Math.PI / 2) * radius},${Math.sin(angle - Math.PI / 2) * radius}) rotate(${rotate})`;
      })
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("font-size", d => {
  if (d.data.name === "Green / Vegetative" || d.data.name === "Sour / Fermented" || d.data.name === "Alcohol / Fermented") return 10;
  return 16 - d.depth * 2;
      })
      .attr("fill", "#fff")
      .style("font-weight", "bold")
      .style("text-shadow", "2px 2px 6px rgba(0,0,0,0.6)")
      .style("opacity", 0)
      .text(d => d.data.name);

    // Animate label fade-in after wheel segments
    labels
      .transition()
      .delay(1200)
      .duration(800)
      .style("opacity", 1);
  }, [width, height]);
  return <svg ref={ref} style={{ width: `${width}px`, height: `${height}px`, display: 'block' }} />;
}

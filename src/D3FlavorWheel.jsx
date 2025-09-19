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
  useEffect(() => {
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
    g.selectAll("path")
      .data(root.descendants().filter(d => d.depth > 0))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", d => d.data.itemStyle?.color || "#ccc")
      .attr("stroke", "#fff");
    // Add labels
    g.selectAll("text")
      .data(root.descendants().filter(d => d.depth > 0))
      .enter()
      .append("text")
      .attr("dy", "0.35em")
      .attr("transform", d => {
        const angle = (d.x0 + d.x1) / 2;           // middle of the arc in radians
        const radius = (d.y0 + d.y1) / 2;          // mid-radius of the arc
        let rotate = (angle * 180) / Math.PI - 90; // convert to degrees, start at 12 o’clock
        // Flip upside-down labels so they stay readable
        if (rotate > 90) rotate -= 180;
        // First translate, then rotate
        return `translate(${Math.cos(angle - Math.PI / 2) * radius},${Math.sin(angle - Math.PI / 2) * radius}) rotate(${rotate})`;
      })
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
  .attr("font-size", d => 16 - d.depth * 2)
  .attr("fill", "#fff")
  .style("font-weight", "bold")
  .style("text-shadow", "2px 2px 6px rgba(0,0,0,0.6)")
  .text(d => d.data.name);
  }, [width, height]);
  return <svg ref={ref} style={{ width: `${width}px`, height: `${height}px`, display: 'block' }} />;
}

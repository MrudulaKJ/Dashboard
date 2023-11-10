// BarGraph.js
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const BarGraph = ({ data }) => {
  const svgRef = useRef();
  const xAxisRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const xAxis = d3.select(xAxisRef.current);

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    svg.selectAll('*').remove();

    const xScale = d3
      .scaleBand()
      .domain(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
      .range([0, width])
      .padding(0.1); // Adjust the padding value for spacing

    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);

    const xAxisGenerator = d3.axisBottom(xScale);

    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxisGenerator);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale('Jan') + xScale.bandwidth() * i)
      .attr('y', (d) => yScale(d))
      .attr('width', xScale.bandwidth() - 25) // Reduce the width of each bar
      .attr('height', (d) => height - yScale(d))
      .attr('fill', 'green');
  }, [data]);

  return (
    <div>
      <svg ref={svgRef} width={400} height={200}></svg>
      <div ref={xAxisRef}></div>
    </div>
  );
};

export default BarGraph;

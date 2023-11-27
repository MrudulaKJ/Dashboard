// BarGraph.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarGraph = ({ data, selectedMonth }) => {
  const svgRef = useRef();
  const xAxisRef = useRef();
  const selectedMonthRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const xAxis = d3.select(xAxisRef.current);
    const selectedMonthText = d3.select(selectedMonthRef.current);

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    svg.selectAll('*').remove();

    const xScale = d3
      .scaleBand()
      .domain(data.map((_, i) => String.fromCharCode(65 + i))) 
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);

    const xAxisGenerator = d3.axisBottom(xScale);

    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxisGenerator)
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(String.fromCharCode(65 + i)))
      .attr('y', (d) => yScale(d))
      .attr('width', xScale.bandwidth() - 25)
      .attr('height', (d) => height - yScale(d))
      .attr('fill', 'green');

    selectedMonthText
      .attr('x', width / 2)
      .attr('y', height + margin.top + 30)
      .attr('text-anchor', 'middle')
      .text(`Selected Month: ${selectedMonth}`);
  }, [data, selectedMonth]);

  return (
    <div>
      <svg ref={svgRef} width={400} height={250} style={{margin:"4rem"}}></svg>
      <div ref={xAxisRef}></div>
      <svg ref={selectedMonthRef} width={400} height={50}></svg>
    </div>
  );
};

export default BarGraph;



// WaveGraph.js
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const WaveGraph = ({ randomData }) => {
  const svgRef = useRef();
  const xAxisRef = useRef();
  const [data, setData] = useState(generateStaticData());

  useEffect(() => {
    if (randomData) {
      setData(generateRandomData());
    } else {
      setData(generateStaticData());
    }
  }, [randomData]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const xAxis = d3.select(xAxisRef.current);

    const xScale = d3.scaleLinear().domain([9, 18]).range([0, 300]);
    const yScale = d3.scaleLinear().domain([0, 100]).range([150, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(9 + i))
      .y((d) => yScale(d))
      .curve(d3.curveBasis);

    svg.selectAll('path').remove();
    xAxis.selectAll('*').remove();

    svg
      .append('path')
      .datum(data)
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 2);

    const xAxisGenerator = d3.axisBottom(xScale).ticks(10);
    xAxis.call(xAxisGenerator);
  }, [data]);

  function generateStaticData() {
    return [50, 70, 80, 60, 40, 50, 70, 80, 60, 40];
  }

  function generateRandomData() {
    return Array.from({ length: 10 }, () => Math.random() * 50 + 50);
  }

  return (
    <div>
    <svg ref={svgRef} width="400" height="150"></svg>
    <div ref={xAxisRef} >
      {/* Add your desired CSS styles here */}
      X-Axis
    </div>
  </div>
  );
};

export default WaveGraph;

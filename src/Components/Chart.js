import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const WaveGraph = ({ randomData }) => {
  const svgRef = useRef();
  const xAxisRef = useRef();
  const [data, setData] = useState(generateRandomData());

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

    const xScale = d3
      .scaleBand()
      .domain(data.map((_, i) => 10 + i))
      .range([0, 300])
      .padding(0.1);

    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([150, 0]);

    const line = d3
      .line()
      .x((_, i) => xScale(10 + i) + xScale.bandwidth() / 2)
      .y((d) => yScale(d))
      .curve(d3.curveBasis);

    svg.selectAll('*').remove();

    svg
      .append('path')
      .datum(data)
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 2);

    const xAxisGenerator = d3.axisBottom(xScale);
    xAxis.selectAll('*').remove();
    xAxis.call(xAxisGenerator);
  }, [data]);

  function generateStaticData() {
    return [50, 70, 80, 60, 40, 50, 70, 80, 60, 40];
  }

  function generateRandomData() {
    return Array.from({ length: 7 }, () => Math.random() * 50 + 50);
  }

  return (
    <div>
      <svg ref={svgRef} width="400" height="150" style={{margin:"7rem"}}></svg>
    </div>
  );
};

export default WaveGraph;

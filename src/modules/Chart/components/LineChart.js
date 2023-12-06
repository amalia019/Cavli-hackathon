"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const orangeShades = [
  "#FFA07A",
  "#FFA500",
  "#FF8C00",
  "#FF7F50",
  "#FF6347",
  "#FF4500",
  "#FFD700",
  "#FFB90F",
  "#FFC125",
  "#FFD39B",
  "#FFDB58",
  "#FFD700",
  "#FFEC8B",
  "#FFE4B5",
  "#FFDAB9",
  "#FFDEAD",
  "#F4A460",
  "#DAA520",
  "#B8860B",
  "#CD853F",
  "#8B4513",
  "#A0522D",
  "#A52A2A",
  "#8B0000",
  "#800000",
  "#8B008B",
  "#FF1493",
  "#FF69B4",
  "#FFC0CB",
];

function LineChart(props) {
  if (!props.data) return <div>loading...</div>;
  const [data, setData] = useState(props.data[0]);
  if (!data) return <div>no data found...</div>;

  // preparing chart
  const [chartData, setChartData] = useState({
    labels: data.timestamps,
    datasets: [
      {
        label: "Sensory Values",
        data: data.values,
        backgroundColor: orangeShades,
        borderWidth: 3,
      },
    ],
  });
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Sensory Data Line Chart across various timestamps",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;

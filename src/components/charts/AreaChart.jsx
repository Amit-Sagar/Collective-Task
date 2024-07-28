"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const createPattern = (color, patternType, backgroundColor, ctx) => {
  const size = 10;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const patternCtx = canvas.getContext("2d");
  patternCtx.fillStyle = backgroundColor;
  patternCtx.fillRect(0, 0, size, size);

  switch (patternType) {
    case "stripe":
      patternCtx.strokeStyle = color;
      patternCtx.lineWidth = 5;
      patternCtx.beginPath();
      patternCtx.moveTo(0, 0);
      patternCtx.lineTo(size, size);
      patternCtx.stroke();
      break;
    case "dot":
      patternCtx.fillStyle = color;
      patternCtx.beginPath();
      patternCtx.arc(size / 2, size / 2, size / 4, 0, 2 * Math.PI);
      patternCtx.fill();
      break;
    case "line":
      patternCtx.strokeStyle = color;
      patternCtx.lineWidth = 1;
      patternCtx.beginPath();
      patternCtx.moveTo(size / 2, 0);
      patternCtx.lineTo(size / 2, size);
      patternCtx.stroke();
      break;
    default:
      break;
  }

  return ctx.createPattern(canvas, "repeat");
};

export const options = {
  plugins: {
    legend: {
      display: false, // Optionally hide the legend if there are no labels
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false, // Remove vertical grid lines
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false, // Remove horizontal grid lines
      },
    },
  },
};
const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const initialData = {
  labels,
  datasets: [
    {
      data: [8, 20, 18, 15, 25, 27, 30],
      borderColor: "#FC741E",
      backgroundColor: "#FC741E",
      backgroundColor: null, // Placeholder
      patternType: "line",
      fill: true,
      pattern: { color: "#FC741E", backgroundColor: "#FFF1E9" },
    },
  ],
};
const AreaChart = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const ctx = document.createElement("canvas").getContext("2d");
    const datasets = initialData.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: createPattern(
        dataset.pattern.color,
        dataset.patternType,
        dataset.pattern.backgroundColor,
        ctx
      ),
    }));
    setData({ ...initialData, datasets });
  }, []);

  return <Line className="bar-chart" options={options} data={data} />;
};

export default AreaChart;

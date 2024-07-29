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
import { createPattern } from "@/utils/patternCreator";

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

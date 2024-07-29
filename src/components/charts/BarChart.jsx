"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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
        display: false, // Remove vertical grid lines
      },
    },
  },
};

const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "#67AB75",
      borderRadius: 5,
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: "#FD904B",
      borderRadius: 5,
    },
    {
      label: "Dataset 3",
      data: [18, 48, 77, 9, 100, 27, 40],
      backgroundColor: "#334BFF",
      borderRadius: 5,
    },
  ],
};

const BarChart = () => {
  return <Bar className="bar-chart" options={options} data={data} />;
};

export default BarChart;

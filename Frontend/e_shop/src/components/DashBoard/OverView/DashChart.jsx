'use client'
import React from "react";
import Chart from "react-apexcharts";

const chartData = {
  series: [
    {
      name: "Visitors",
      data: [180, 51, 60, 38, 88, 50,],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 50,
      toolbar: { show: false },
      zoom: { enabled: false },
      background: "transparent",
    },
    stroke: { curve: "straight", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.1,
        opacityTo: 0.8,
      },
    },
    grid: { strokeDashArray: 2 },
    xaxis: {
      categories: [
        "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"
        
      ],
      labels: {
        style: { colors: "#9ca3af", fontSize: "13px", fontFamily: "Inter" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: {
        style: { colors: "#9ca3af", fontSize: "13px", fontFamily: "Inter" },
        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
      },
    },
    tooltip: {
      x: { format: "dd MMM yyyy" },
      y: {
        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
      },
    },
    legend: { show: false },
  },
};

function DashChart() {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-white font-semibold mb-4">Visitors Overview</h2>
      <Chart options={chartData.options} series={chartData.series} type="area" height={200}  />
    </div>
  );
}

export default DashChart;

'use client'
import React from "react";
import Chart from "react-apexcharts";

const barChartData = {
  series: [
    {
      name: "Sales",
      data: [23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000, 34000, 78000],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false },
      zoom: { enabled: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "16px",
        borderRadius: 0,
      },
    },
    stroke: {
      show: true,
      width: 8,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ],
      labels: {
        style: { colors: "#9ca3af", fontSize: "13px", fontFamily: "Inter" },
        offsetX: -2,
        formatter: (title) => title.slice(0, 3),
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { colors: "#9ca3af", fontSize: "13px", fontFamily: "Inter" },
        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`,
      },
    },
    grid: { borderColor: "#e5e7eb" },
    legend: { show: false },
    states: {
      hover: { filter: { type: "darken", value: 0.9 } },
    },
  },
};

function DashBarChart() {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-l my-3 ">
      <h2 className="text-white font-semibold mb-4">Monthly Sales</h2>
      <Chart
        options={barChartData.options}
        series={barChartData.series}
        type="bar"
        height={200}
      />
    </div>
  );
}

export default DashBarChart;

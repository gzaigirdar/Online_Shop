'use client'
import React from "react";
import Chart from "react-apexcharts";

function ItemsChart({ data, total }) {
  // mockdata if no data is received from the backend
  const mockData = [
    { _id: "cake", total: 10 },
    { _id: "sandwiches", total: 15 },
    { _id: "drinks", total: 8 },
    { _id: "pastries", total: 12 },
    { _id: "other", total: 5 },
  ];

  const chartDataInput = data && data.length ? data : mockData;

  const labels = chartDataInput.map(item => item._id.charAt(0).toUpperCase() + item._id.slice(1));
  const series = chartDataInput.map(item => item.total || 0);

  const totalCount = total ?? series.reduce((sum, val) => sum + val, 0);

  const chartData = {
    series,
    options: {
      chart: { type: "donut", background: "transparent" },
      labels,
      colors: ["#f472b6", "#60a5fa", "#34d399", "#facc15", "#a78bfa"],
      legend: { position: "bottom", labels: { colors: "#e5e7eb" } },
      dataLabels: { style: { colors: ["#fff"], fontSize: "13px" } },
      tooltip: { y: { formatter: val => `${val} items` } },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: { show: true, fontSize: "16px", color: "#fff" },
              value: { show: true, fontSize: "20px", color: "#fff" },
              total: { show: true, label: "Total", color: "#fff", formatter: () => totalCount },
            },
          },
        },
      },
      stroke: { colors: ["#1f2937"] },
    },
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-white font-semibold mb-4">Sales by Category</h2>
      <Chart options={chartData.options} series={chartData.series} type="donut" height={300} />
    </div>
  );
}

export default ItemsChart;

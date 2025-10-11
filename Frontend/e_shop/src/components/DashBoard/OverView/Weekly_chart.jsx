'use client'
import React from "react";
import Chart from "react-apexcharts";

function WeeklyBarChart({ data = Array(7).fill(0), title = "Weekly Revenue" }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const maxVal = Math.max(...data);

  const chartOptions = {
    chart: { type: "bar", height: 300, toolbar: { show: false } },
    plotOptions: { bar: { columnWidth: "50%", borderRadius: 4 } },
    colors: ["#FFA500"],
    xaxis: { categories: days, labels: { style: { colors: "#fff", fontSize: "13px" } } },
    yaxis: { 
      min: 0,
      max: maxVal > 0 ? maxVal * 1.1 : 10,
      labels: { formatter: (val) => `$${val.toLocaleString()}`, style: { colors: "#fff", fontSize: "13px" } }
    },
    tooltip: { y: { formatter: (val) => `$${val.toLocaleString()}` } },
    grid: { show: true },
    legend: { show: true },
  };

  const series = [{ name: "Revenue", data }];

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow my-3">
      <h2 className="text-white font-semibold mb-4">{title}</h2>
      <Chart options={chartOptions} series={series} type="bar" height={200} />
    </div>
  );
}

export default WeeklyBarChart;

'use client'
import React from "react";
import Chart from "react-apexcharts";

function WeeklyBarChart({ data, title = "Weekly Revenue" }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  // mock datas if no data is receivd from the backend
  const mockData = [0, 0, 0, 50, 0, 145, 0];
  const chartData = data && data.length === days.length ? data : mockData;
  const maxVal = Math.max(...chartData);

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

  const series = [{ name: "Revenue", data: chartData }];

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow my-3">
      <h2 className="text-white font-semibold mb-4">{title}</h2>
      <Chart options={chartOptions} series={series} type="bar" height={200} />
    </div>
  );
}

export default WeeklyBarChart;

import data from "../../json/distanceData";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: data.map((d) => d.day),
    datasets: [
      {
        label: "distance",
        data: data.map((d) => d.distance),
        backgroundColor: "#c0dedd",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
      {
        label: "steps",
        data: data.map((d) => d.steps),
        backgroundColor: "#f1dfde",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
      {
        label: "caloriesBurned",
        data: data.map((d) => d.caloriesBurned),
        backgroundColor: "#e6cff1",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="barchart_container">
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from "victory";
import data from "../../json/data";

const BarChart = () => {

  const totalActivityTimes = data.map((item) => parseInt(item.details.total_activity_time));
  const totalActivitySum = totalActivityTimes.reduce((sum, time) => sum + time, 0);

  const formattedTotalActivitySum = `${totalActivitySum}m`;


  const chartData = data.map((item) => ({
    x: item.day,
    y: parseInt(item.details.total_activity_time),
  }));

  return (
    <div>
      <p>Total Activity Time: {formattedTotalActivitySum}</p>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
        width={400}
        height={250}
      >
        <VictoryAxis tickFormat={(tick) => tick} />
        <VictoryAxis dependentAxis />
        <VictoryBar
           style={{
            data: { fill: "#c0dedd" },
            labels: { fontSize: 15, fill: "#fff" }, 
            parent: { border: "2px solid #ccc" },
          }}
          data={chartData}
          x="x"
          y="y"
          labels={({ datum }) => `${datum.y}m`}
          labelComponent={<VictoryLabel dy={-20} />}
        />
      </VictoryChart>
    </div>
  );
};

export default BarChart;

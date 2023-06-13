import React from "react";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme, VictoryLabel } from "victory";
import data from "../../json/data";

const LineChart = () => {
  const maxActivityTime = Math.max(...data.map((item) => parseFloat(item.details.total_activity_time.split("m")[0])));

  return (
    <div>
      <p>Highest activity time: {maxActivityTime}m</p>
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
      width={400}
      height={250}
    >
      <VictoryAxis
        tickValues={data.map((item) => item.day)} />
      <VictoryAxis
        dependentAxis
      />
      <VictoryLine
        style={{
          data: { stroke: "#c0dedd" },
          parent: { border: "2px solid #ccc" },
        }}
        data={data.map((item) => ({
          x: item.day,
          y: parseFloat(item.details.total_activity_time.split("m")[0]),
        }))}
      />
      <VictoryLabel
        x={25}
        y={25}
        style={{
          fontSize: 15,
          fill: "#666",
        }}
      />
    </VictoryChart>
    </div>
  );
};

export default LineChart;

import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import data from "../../json/data";

const SpeedChart = () => {
  let totalSpeed = 0;

  data.forEach((item) => {
    const averageSpeed = parseFloat(
      item.details.total_distance.average_speed.split(" ")[0]
    );
    totalSpeed += averageSpeed;
  });

  const averageCombinedSpeed = totalSpeed / data.length;
  const formattedAverageCombinedSpeed = averageCombinedSpeed.toFixed(2);

  return (
    <div>
      <div>
        <p>The average speed is: {formattedAverageCombinedSpeed}km</p>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryArea
            data={data.map((item) => ({
              x: item.day,
              y: parseFloat(item.details.total_distance.average_speed),
            }))}
          />
          <VictoryAxis />
        </VictoryChart>
      </div>
    </div>
  );
};

export default SpeedChart;

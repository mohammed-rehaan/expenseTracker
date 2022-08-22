import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const getMaximum = Math.max(...dataPointValues);
  console.log(dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((bar) => (
        <ChartBar
          value={bar.value}
          label={bar.label}
          maxValue={getMaximum}
          key={bar.label}
        />
      ))}
    </div>
  );
}
export default Chart;

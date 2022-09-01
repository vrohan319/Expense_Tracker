import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        // console.log(dataPoint.label);
        (<ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={totalMaximum}
          label={dataPoint.label}
        />)
      ))}
    </div>
  );
};

export default Chart;

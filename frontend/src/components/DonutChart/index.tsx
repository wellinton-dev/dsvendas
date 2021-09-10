import axios from "axios";
import { BASE_URL } from "pages/utils/requests";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";

type ChartData = {
  labels: String[];
  series: Number[];
};

const DonutChart = () => {
  //Forma Errada
  let chartData: ChartData = { labels: [], series: [] };

  axios.get(`${BASE_URL}/sales/amount-by-seller`)
  .then((response) => {

    const data = response.data as SaleSum[];
    const myLabels = data.map(x => x.sellerName);
    const mySeries = data.map((x) => x.sum);

    chartData = { labels: myLabels, series: mySeries };
    console.log(chartData);
  });
  // const mockData = {
  //   series: [477138, 499928, 444867, 220426, 473088],
  //   labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
  // };

  const options = {
    legend: {
      show: true,
    },
  };
  return (
    <Chart
      options={{ ...options }}
      series={chartData.series}
      type="donut"
      height="240px"
    />
  );
};

export default DonutChart;

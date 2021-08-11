<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  middleware: "auth",
  data: () => ({
    chartdata: {
      labels: ["Muy Mala", "Mala", "Regular", "Buena", "Muy Buena"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 10, 20, 56],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)"
        },
        {
          label: "My Second Dataset",
          data: [28, 48, 40, 60, 56],
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(54, 162, 235)"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        title: {
          display: true,
          text: "Chart.js Radar Chart"
        }
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

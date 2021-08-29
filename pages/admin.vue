<template>
  <v-container v-if="!loading">
    <client-only placeholder="Cargando...">
      <div class="py-5">
        <h3 class="text-center">Encuesta de Calidad</h3>
        <br />
        <div v-if="chartdata" class="chart-container">
          <chart :chartdata="chartdata" />
        </div>
      </div>
    </client-only>

    <div>
      <h3 class="text-center">Sugerencias</h3>
      <v-data-table
        :headers="headers"
        :items="sugerencias"
        :items-per-page="15"
        class="elevation-1"
      >
        <template v-slot:[`item.createdAt`]="{ item }">
          {{ item.createdAt | filterDate }}
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
import moment from "moment-timezone";
import "moment/locale/es";

export default {
  middleware: "auth",
  data() {
    return {
      loading: true,
      surveys: [],
      chartdata: null,
      headers: [
        {
          text: "Fecha",
          align: "start",
          value: "createdAt"
        },
        { text: "Sugerencia", value: "sugerencia" }
      ]
    };
  },
  head() {
    return {
      titleTemplate: "%s | Admin",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Admin"
        }
      ]
    };
  },
  async mounted() {
    await this.getSurveys();
    this.getChartData();
  },
  methods: {
    async getSurveys() {
      const surveyRef = await this.$fire.firestore.collection("surveys");
      try {
        const docs = await surveyRef.get();
        docs.forEach(doc => {
          this.surveys.push(Object.assign({ id: doc.id }, doc.data()));
        });
        this.loading = false;
      } catch (error) {
        this.category = [];
        console.log(`error`, error);
        this.loading = false;
      }
    },
    getChartData() {
      this.chartdata = {
        labels: [
          "Muy Buena",
          "Buena",
          "Regular",
          "Mala",
          "Muy Mala",
          "No Aplica"
        ],
        datasets: [
          {
            label: "Calidad",
            data: this.calidad,
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)"
          },
          {
            label: "Presentación",
            data: this.presentacion,
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)"
          },
          {
            label: "Rapidez",
            data: this.rapidez,
            fill: true,
            backgroundColor: "rgba(255, 205, 86, 0.2)",
            borderColor: "rgb(255, 205, 86)",
            pointBackgroundColor: "rgb(255, 205, 86)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 205, 86)"
          },
          {
            label: "Limpieza",
            data: this.limpieza,
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgb(75, 192, 192)",
            pointBackgroundColor: "rgb(75, 192, 192)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(75, 192, 192)"
          },
          {
            label: "Mesero",
            data: this.mesero,
            fill: true,
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgb(153, 102, 255)",
            pointBackgroundColor: "rgb(153, 102, 255)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(153, 102, 255)"
          }
        ]
      };
    },
    surveyItemCount(object, calification) {
      const item = object[calification];
      return item?.length ? item?.length : 0;
    },
    getCount(attr) {
      return {
        muy_buena: this.surveyItemCount(
          this._.groupBy(this.surveys, attr),
          "muy_buena"
        ),
        buena: this.surveyItemCount(
          this._.groupBy(this.surveys, attr),
          "buena"
        ),
        regular: this.surveyItemCount(
          this._.groupBy(this.surveys, attr),
          "regular"
        ),
        mala: this.surveyItemCount(this._.groupBy(this.surveys, attr), "mala"),
        muy_mala: this.surveyItemCount(
          this._.groupBy(this.surveys, attr),
          "muy_mala"
        ),
        no_aplica: this.surveyItemCount(
          this._.groupBy(this.surveys, attr),
          "no_aplica"
        )
      };
    }
  },
  computed: {
    calidad() {
      return Object.values(this.getCount("calidad"));
    },
    presentacion() {
      return Object.values(this.getCount("presentacion"));
    },
    rapidez() {
      return Object.values(this.getCount("rapidez"));
    },
    limpieza() {
      return Object.values(this.getCount("limpieza"));
    },
    mesero() {
      return Object.values(this.getCount("mesero"));
    },
    sugerencias() {
      return this.surveys.filter(survey => survey.sugerencia.length > 0);
    }
  },
  filters: {
    filterDate(timestamp) {
      if (!timestamp) return "no disponible";
      return moment(timestamp.toDate())
        .tz("America/Tegucigalpa")
        .format("L");
    }
  }
};
</script>

<style lang="scss">
.chart-container {
  flex-grow: 1;
  min-height: 0;
  > div {
    position: relative;
    height: 60vh;
  }
}
</style>

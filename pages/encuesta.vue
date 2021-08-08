<template>
  <div>
    <client-only placeholder="Loading...">
      <v-row class="text-left">
        <v-col cols="12" md="10" offset-md="1">
          <v-card elevation="2">
            <v-card-title>
              Encuesta
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <ol>
                <li>
                  ¿Cómo calificas la calidad/sabor de la comida o platillos?
                </li>
                <li>
                  ¿Te agradó la presentación de la comida o platillos?
                </li>
                <li>
                  ¿Cómo calificas la rapidez de del servicio a la hora de
                  ordenar?
                </li>
                <li>¿Cómo calificas la limpieza del lugar?</li>
                <li>
                  ¿Cómo calificas el servicio del mesero?
                </li>
              </ol>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comida: ""
    };
  },
  head() {
    titleTemplate: "%s | Encuesta";
  }
  // Fitos2021!
};
</script>

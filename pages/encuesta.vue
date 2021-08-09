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
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="my-5">
                    1. ¿Cómo calificas la calidad/sabor de la comida o
                    platillos?
                  </v-list-item-title>
                  <v-list-item-title class="my-5">
                    2. ¿Te agradó la presentación de la comida o platillos?
                  </v-list-item-title>
                  <v-list-item-title class="my-5">
                    3. ¿Cómo calificas la rapidez de del servicio a la hora de
                    ordenar?
                  </v-list-item-title>
                  <v-list-item-title class="my-5">
                    4. ¿Cómo calificas la limpieza del lugar?
                  </v-list-item-title>
                  <v-list-item-title class="my-5">
                    5. ¿Cómo calificas el servicio del mesero?
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
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

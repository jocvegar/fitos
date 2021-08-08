<template>
  <div>
    <client-only placeholder="Loading...">
      <v-row class="text-left">
        <v-col cols="12" md="10" offset-md="1">
          <v-card elevation="2">
            <v-card-title>
              Encuesta
            </v-card-title>
            <v-card-text>
              <p class="title font-weight-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                nesciunt architecto asperiores repellendus, placeat odit at
                adipisci omnis dolorem iusto quod obcaecati facilis laudantium
                temporibus totam, ratione fugit. Vero, quis.
              </p>
              <p class="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                nesciunt architecto asperiores repellendus, placeat odit at
                adipisci omnis dolorem iusto quod obcaecati facilis laudantium
                temporibus totam, ratione fugit. Vero, quis.
              </p>
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

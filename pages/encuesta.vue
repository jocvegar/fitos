<template>
  <div>
    <client-only placeholder="Loading...">
      <v-row class="text-left">
        <v-col cols="12" md="10" offset-md="1">
          <v-card elevation="2">
            <v-card-title class="primary white--text">
              Encuesta
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="my-5 text-wrap">
                      1. ¿Cómo calificas la calidad/sabor de la comida o
                      platillos?
                      <v-radio-group
                        v-model="survey.calidad"
                        :row="$vuetify.breakpoint.mdAndUp"
                        class="px-2"
                      >
                        <v-radio
                          mandatory
                          color="secondary"
                          v-for="option in options"
                          :key="option.id"
                          :label="option.label"
                          :value="option.value"
                        ></v-radio>
                      </v-radio-group>
                    </v-list-item-title>
                    <v-list-item-title class="my-5 text-wrap">
                      2. ¿Te agradó la presentación de la comida o platillos?
                      <v-radio-group
                        v-model="survey.presentacion"
                        :row="$vuetify.breakpoint.mdAndUp"
                        class="px-2"
                      >
                        <v-radio
                          mandatory
                          color="secondary"
                          v-for="option in options"
                          :key="option.id"
                          :label="option.label"
                          :value="option.value"
                        ></v-radio>
                      </v-radio-group>
                    </v-list-item-title>
                    <v-list-item-title class="my-5 text-wrap">
                      3. ¿Cómo calificas la rapidez del servicio a la hora de
                      ordenar?
                      <v-radio-group
                        v-model="survey.rapidez"
                        :row="$vuetify.breakpoint.mdAndUp"
                        class="px-2"
                      >
                        <v-radio
                          mandatory
                          color="secondary"
                          v-for="option in options"
                          :key="option.id"
                          :label="option.label"
                          :value="option.value"
                        ></v-radio>
                      </v-radio-group>
                    </v-list-item-title>
                    <v-list-item-title class="my-5 text-wrap">
                      4. ¿Cómo calificas la limpieza del lugar?
                      <v-radio-group
                        v-model="survey.limpieza"
                        :row="$vuetify.breakpoint.mdAndUp"
                        class="px-2"
                      >
                        <v-radio
                          mandatory
                          color="secondary"
                          v-for="option in options"
                          :key="option.id"
                          :label="option.label"
                          :value="option.value"
                        ></v-radio>
                      </v-radio-group>
                    </v-list-item-title>
                    <v-list-item-title class="my-5 text-wrap">
                      5. ¿Cómo calificas el servicio del mesero?
                      <v-radio-group
                        v-model="survey.mesero"
                        :row="$vuetify.breakpoint.mdAndUp"
                        class="px-2"
                      >
                        <v-radio
                          mandatory
                          color="secondary"
                          v-for="option in options"
                          :key="option.id"
                          :label="option.label"
                          :value="option.value"
                        ></v-radio>
                      </v-radio-group>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-form>
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
      survey: {
        calidad: "",
        presentacion: "",
        rapidez: "",
        limpieza: "",
        mesero: ""
      },
      options: [
        {
          id: 1,
          label: "Muy Buena",
          value: "muy_buena"
        },
        {
          id: 2,
          label: "Buena",
          value: "buena"
        },
        {
          id: 3,
          label: "Regular",
          value: "regular"
        },
        {
          id: 4,
          label: "Mala",
          value: "mala"
        },
        {
          id: 5,
          label: "Muy Mala",
          value: "muy_mala"
        }
      ]
    };
  },
  head() {
    titleTemplate: "%s | Encuesta";
  }
  // Fitos2021!
};
</script>

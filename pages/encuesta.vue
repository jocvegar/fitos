<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12" md="10" offset-md="1">
        <v-card elevation="2">
          <v-card-title class="primary white--text">
            Encuesta
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form ref="form" lazy-validation v-model="valid">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="my-5 text-wrap">
                    1. ¿Cómo calificás la calidad/sabor de la comida o
                    platillos?
                    <v-radio-group
                      v-model="survey.calidad"
                      :row="$vuetify.breakpoint.mdAndUp"
                      class="px-2"
                      :rules="[v => !!v || 'Selecciona una opción']"
                    >
                      <v-radio
                        required
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
                      :rules="[v => !!v || 'Selecciona una opción']"
                    >
                      <v-radio
                        required
                        color="secondary"
                        v-for="option in options"
                        :key="option.id"
                        :label="option.label"
                        :value="option.value"
                      ></v-radio>
                    </v-radio-group>
                  </v-list-item-title>
                  <v-list-item-title class="my-5 text-wrap">
                    3. ¿Cómo calificás la rapidez del servicio a la hora de
                    ordenar?
                    <v-radio-group
                      v-model="survey.rapidez"
                      :row="$vuetify.breakpoint.mdAndUp"
                      class="px-2"
                      :rules="[v => !!v || 'Selecciona una opción']"
                    >
                      <v-radio
                        required
                        color="secondary"
                        v-for="option in options"
                        :key="option.id"
                        :label="option.label"
                        :value="option.value"
                      ></v-radio>
                    </v-radio-group>
                  </v-list-item-title>
                  <v-list-item-title class="my-5 text-wrap">
                    4. ¿Cómo calificás la limpieza del lugar?
                    <v-radio-group
                      v-model="survey.limpieza"
                      :row="$vuetify.breakpoint.mdAndUp"
                      class="px-2"
                      :rules="[v => !!v || 'Selecciona una opción']"
                    >
                      <v-radio
                        required
                        color="secondary"
                        v-for="option in options"
                        :key="option.id"
                        :label="option.label"
                        :value="option.value"
                      ></v-radio>
                    </v-radio-group>
                  </v-list-item-title>
                  <v-list-item-title class="my-5 text-wrap">
                    5. ¿Cómo calificás el servicio del mesero?
                    <v-radio-group
                      v-model="survey.mesero"
                      :row="$vuetify.breakpoint.mdAndUp"
                      class="px-2"
                      :rules="[v => !!v || 'Selecciona una opción']"
                    >
                      <v-radio
                        required
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
              <v-row>
                <v-col cols="12" md="10" offset-md="1">
                  <v-textarea
                    outlined
                    name="input-7-4"
                    label="Sugerencias"
                    v-model="survey.sugerencia"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
            <v-card-actions>
              <v-btn
                :disabled="!valid"
                block
                large
                outlined
                color="primary"
                @click="validateAndSubmit()"
              >
                Enviar
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
        <v-col cols="auto">
          <v-dialog
            v-model="dialog"
            transition="dialog-top-transition"
            max-width="600"
          >
            <v-card>
              <v-toolbar dense color="secondary"></v-toolbar>
              <v-card-text>
                <div class="text-h2 px-6 py-10">¡Muchas gracias!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn color="primary" @click="dialog = false">Cerrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      valid: true,
      survey: {
        calidad: "",
        presentacion: "",
        rapidez: "",
        limpieza: "",
        mesero: "",
        sugerencia: ""
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
  },
  methods: {
    showMeShowMeShowMe() {
      console.log(`survey`, this.survey);
    },
    async validateAndSubmit() {
      if (this.$refs.form.validate()) {
        const surveyRef = await this.$fire.firestore.collection("surveys");
        this.survey.redeemed = false;
        this.survey.code = `${(Math.random() + 1)
          .toString(36)
          .substring(8)}-${new Date().getTime()}`;
        try {
          surveyRef.add(this.survey);
          this.dialog = true;
          this.$refs.form.reset();
        } catch (error) {
          this.category = "";
          console.log(`error`, error);
        }
      }
    }
  }
  // Fitos2021!
};
</script>

<template>
  <v-container>
    <v-alert
      v-if="error"
      border="right"
      colored-border
      type="error"
      elevation="2"
    >
      {{ errorMessage }}
    </v-alert>

    <v-row style="min-height: 50vh">
      <v-btn
        color="error"
        class="pa-8 white--text mx-auto my-auto"
        @click="googleSignIn()"
      >
        Ingresar con Google
        <v-icon right dark>
          mdi-google
        </v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import firestore from "firebase";

export default {
  data() {
    return {
      errorMessage: "",
      error: false,
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    googleSignIn() {
      let provider = new firestore.auth.GoogleAuthProvider();

      this.$fire.auth
        .signInWithPopup(provider)
        .then(result => {
          const user = result.user;
          const isNewUser = result.additionalUserInfo.isNewUser;
          if (isNewUser) {
            user.delete();
            this.errorMessage = "Usuario no existe buahah";
            this.error = true;
          } else {
            $nuxt.$router.push("/admin");
          }
        })
        .catch(error => console.log(`error`, error));
    }
  },
  middleware: "auth"
};
</script>

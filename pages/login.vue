<template>
  <v-container>
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
  created() {
    if (this.$store.state.user != null) return this.$router.push("/admin");
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
            this.$store.dispatch("setAlert", {
              message: "Usuario no existe buahaha",
              type: "error"
            });
          } else {
            $nuxt.$router.push("/admin");
            this.$store.dispatch("setAlert", {
              message: `Hola ${user.displayName}`,
              type: "success"
            });
          }
        })
        .catch(error => console.log(`error`, error));
    }
  },
  middleware: "auth"
};
</script>

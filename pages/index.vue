<template>
  <v-row class="my-10">
    <v-col cols="12" justify="center" align="center">
      <FitoLogo />
      {{ category }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      category: ""
    };
  },
  async mounted() {
    const menuRef = await this.$fire.firestore
      .collection("menu")
      .doc("2ucZMSlZVyyaMRbCYjNK");

    try {
      const doc = await menuRef.get();
      this.category = doc.data().category;
    } catch (error) {
      this.category = "";
      console.log(`error`, error);
    }
  }
};
</script>

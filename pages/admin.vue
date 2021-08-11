<template>
  <v-container>
    <client-only placeholder="Cargando...">
      <div class="chart-container">
        <chart />
      </div>
    </client-only>
  </v-container>
</template>

<script>
export default {
  created() {
    if (this.$store.state.user != null) return this.$router.push("/");
  },
  middleware: "auth"
};
</script>
<style lang="scss">
.chart-container {
  flex-grow: 1;
  min-height: 0;
  > div {
    position: relative;
    height: 100%;
  }
}
</style>

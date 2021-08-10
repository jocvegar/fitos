<template>
  <v-app>
    <v-app-bar color="secondary" dark fixed app :height="80" elevate-on-scroll>
      <v-toolbar-title v-text="title" @click.stop="goHome()" class="homeIcon" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" right temporary fixed>
      <v-list dense>
        <v-subheader class="text-center">Menu</v-subheader>
        <v-list-item-group v-model="selectedItem" color="orange darken-2">
          <v-list-item v-for="(item, i) in items" :key="i" nuxt :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item :href="menuLink.to" target="_blank">
          <v-list-item-icon>
            <v-icon v-text="menuLink.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="menuLink.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer absolute app>
      <span class="mx-auto">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-apps",
          title: "Inicio",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Encuesta",
          to: "/encuesta"
        }
      ],
      menuLink: {
        icon: "mdi-book-open-page-variant",
        title: "Menu",
        to: "https://menu.fitoshn.com/"
      },
      rightDrawer: false,
      title: "FITO'S",
      selectedItem: 1
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.homeIcon {
  cursor: pointer;
}
</style>

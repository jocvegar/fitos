import colors from "vuetify/es5/util/colors";
// import colors from "vuetify/lib/util/colors";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Fitos",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "title", content: "Fitos" },
      {
        hid: "description",
        name: "description",
        content: "Siéntete como en Casa"
      },
      { name: "format-detection", content: "telephone=98803849" },
      { name: "keywords", content: "Comida, Honduras, Fitos, Hamburguesa" },
      { name: "robots", content: "index, follow" },
      { name: "name", content: "Spanish" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Fitos" },
      { property: "og:description", content: "Siéntete como en casa" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/google-fonts"
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Lobster: true,
      "Josefin+Sans": true,
      Lato: [100, 300]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    // defaultAssets: false,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.black,
          accent: colors.red.darken1,
          secondary: colors.orange.darken2,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "#000",
          secondary: "#F57C00",
          accent: "#D32F2F",
          error: "#b71c1c",
          info: colors.teal.lighten1,
          success: colors.green.accent3,
          warning: "#FFC007"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        ["@babel/plugin-proposal-private-methods", { loose: true }],
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }]
      ]
    }
  }
};

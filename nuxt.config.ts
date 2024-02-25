// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss'],

  devServer: {
    port: 5000,
  },

  modules: [
    '@nuxt/image',
  ]
});

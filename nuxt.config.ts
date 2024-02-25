// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  css: ['~/assets/scss/main.scss'],

  devServer: {
    port: 5000,
  },

  modules: [
    '@nuxt/image',
    'nuxt-aos'
  ],
});

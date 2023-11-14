// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["./api"],
  modules: ["@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/pro-light-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@fawmi/vue-google-maps",
    ],
  },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  runtimeConfig: {
    public: {
      baseUrl: "http://localhost:3000",
      homeUrl: "/",
      loginUrl: "/login",
      verificationUrl: "/verify-email",
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
  },
});

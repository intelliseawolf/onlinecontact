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
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      baseUrl: "http://localhost:3000",
      homeUrl: "/dashboard",
      loginUrl: "/login",
      verificationUrl: "/verify-email",
    },
  },
});

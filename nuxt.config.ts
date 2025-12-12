// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,

  app: {
    baseURL: "/tri-dent/",
    buildAssetsDir: "assets",
  },

  css: ["@/assets/scss/global.scss"],
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/variables" as *;
          `,
        },
      },
    },
  },
  modules: ["@nuxt/icon", "@nuxt/fonts", "@pinia/nuxt"],
});

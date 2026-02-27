// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: true,

  app: {
    baseURL: "/",
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

  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    },
  },
  modules: ["@nuxt/icon", "@nuxt/fonts", "@pinia/nuxt", "@nuxtjs/sitemap"],

  site: {
    url: "https://www.cabinet-dentaire-tri-dent-cornebarrieu.fr/",
  },
});

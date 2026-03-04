// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: true,

  app: {
    baseURL: "/",
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
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

  fonts: {
    defaults: {
      weights: [400, 600, 700],
      styles: ["normal"],
    },
  },

  site: {
    url: "https://www.cabinet-dentaire-tri-dent-cornebarrieu.fr/",
  },
});

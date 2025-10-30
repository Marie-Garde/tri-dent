// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  css: ["@/assets/scss/global.scss"], // ton fichier global
  vite: {
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
});
// Nuxt 4 permet d’utiliser le mode “app only” sans pages/ (idéal pour des SPA ou micro frontends).
// Mais quand compatibilityDate est postérieure à juillet 2024, ce mode devient le comportement par défaut.
// Donc, si on veut un site multipage (SSG), il faut forcer pages: true tant que ce mode est encore transitionnel.

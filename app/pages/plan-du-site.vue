<template>
  <div class="sitemap">
    <div class="sitemap__banner">
      <h1>Plan du Site</h1>
      <Divider light />
    </div>
    <div class="sitemap__content">
      <ul>
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/notre-approche">Notre Approche</NuxtLink></li>
        <li>
          <NuxtLink to="/prendre-rendez-vous">Prendre Rendez-vous</NuxtLink>
        </li>
        <li><NuxtLink to="/urgence">Urgence</NuxtLink></li>
        <li>
          <NuxtLink to="/informations-medicales"
            >Informations Médicales</NuxtLink
          >
          <!-- Si il y a des sous-pages dynamiques, lister les articles ici serait bien -->
        </li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/mentions-legales">Mentions Légales</NuxtLink></li>
        <li><NuxtLink to="/plan-du-site">Plan du Site</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const BASE_URL = "https://www.cabinet-dentaire-tri-dent-cornebarrieu.fr";
const title = "Plan du Site - Cabinet Dentaire Tri-Dent";
const description =
  "Découvrez l'organisation complète du site du Cabinet Dentaire Tri-Dent grâce à notre plan du site. Accédez facilement à toutes les pages et informations importantes.";
const url = `${BASE_URL}/plan-du-site`;
const image = `${BASE_URL}/images/home/cabinet.png`;

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:image", content: image },
    { property: "og:locale", content: "fr_FR" },
    { property: "og:site_name", content: "Cabinet Dentaire Tri-Dent" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ],
  link: [
    { rel: "canonical", href: url },
    { rel: "alternate", hreflang: "fr", href: url },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Plan du site",
            item: url,
          },
        ],
      }),
    },
  ],
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.sitemap {
  &__banner {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color-green;
    color: $color-white;

    h1 {
      color: $color-white;
      font-size: 36px;
    }
  }

  &__content {
    max-width: 960px;
    margin: $spacing-xl auto;
    padding: 0 $spacing-md;

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: $spacing-md;
    }

    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: $color-text;
      transition: color 0.3s;

      &:hover {
        color: $color-primary;
      }
    }
  }
}

@media (max-width: 768px) {
  .sitemap {
    &__banner {
      height: 30vh;
      margin-top: 130px;
    }
    &__content {
      margin: $spacing-lg auto;
    }
  }
}
</style>

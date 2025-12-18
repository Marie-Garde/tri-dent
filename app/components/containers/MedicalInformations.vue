<template>
  <div class="medical-information">
    <h2>Nos informations médicales</h2>
    <Divider />
    <p>
      Nous croyons que l’information claire et accessible est essentielle pour
      prendre soin de votre santé bucco-dentaire. Retrouvez ici des conseils,
      explications et recommandations validés par notre équipe de
      chirurgiens-dentistes, pour mieux comprendre les soins, les pathologies
      courantes et les bonnes pratiques d’hygiène.
    </p>
    <Carousel :item-count="recentArticles.length">
      <article
        v-for="(item, i) in recentArticles"
        :key="i"
        :style="`--i:${i}`"
        :item="item"
        class="mi-card"
      >
        <img
          v-if="item.icone"
          :src="urlFor(item.icone).url()"
          :alt="item.icone.alt || item.titre"
        />
        <h3>{{ item.titre }}</h3>
        <a :href="`/informations-medicales/${item.slug.current}`"
          >En savoir plus</a
        >
      </article>
    </Carousel>
    <Button class="button" variant="secondary" href="/">
      Plus de ressources
    </Button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Carousel from "../Carousel.vue";
import { useArticlesStore } from "~/stores/articles";
import { urlFor } from "~/lib/sanity";

const articlesStore = useArticlesStore();

// ✅ Utiliser computed pour que ça se mette à jour automatiquement
const recentArticles = computed(() => articlesStore.recentArticles);

onMounted(async () => {
  await articlesStore.fetchRecentArticles();
  console.log("recent articles", articlesStore.recentArticles);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
.medical-information {
  background-color: $color-yellow-transparent;
  margin-top: -$spacing-md;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $spacing-xl 156px;

  h2 {
    text-align: center;
    margin-bottom: $spacing-md;
  }
  p {
    text-align: center;
    margin-top: $spacing-lg;
  }

  .medical-informations {
    padding: 1rem;
  }
  .mi-card {
    background: $color-white;
    border-radius: $border-radius;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
    width: 250px;
    height: 294px;
    text-align: center;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
      margin-top: $spacing-md;
      height: 120px;
    }
    h3 {
      margin-top: 1.5rem;
      font-weight: 500;
      font-size: 1.2rem;
    }
    a {
      margin-bottom: $spacing-md;
      text-decoration: underline;
    }
  }

  @media (max-width: 767px) {
    padding: $spacing-lg;
  }
}

.button {
  margin-top: $spacing-xl;
  padding: $spacing-md $spacing-xl;
}
</style>

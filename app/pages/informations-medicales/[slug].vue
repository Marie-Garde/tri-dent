<template>
  <div class="slug">
    <Banner
      :title="article?.titre ?? 'Informations médicales'"
      :image="bannerImage"
      light
    />

    <div class="slug__wrapper">
      <div class="slug__container">
        <div v-if="!article" class="loading">
          <p>Chargement de l'article...</p>
        </div>

        <article v-else class="article">
          <header class="article__header">
            <p class="article__date">{{ formatDate(article.publishedAt) }}</p>

            <div v-if="article.tags?.length" class="article__tags">
              <span
                v-for="tag in article.tags"
                :key="tag._id"
                class="tag-badge"
              >
                {{ tag.titre }}
              </span>
            </div>
          </header>

          <div v-if="article.contenu" class="article__content">
            <PortableTextRenderer :blocks="article.contenu" />
          </div>

          <div class="article__footer">
            <NuxtLink to="/informations-medicales" class="back-button">
              ← Retour aux articles
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bannerImage from "~/assets/images/informations-medicales/banner-article.png";

definePageMeta({
  layout: "default",
});

const route = useRoute();
const articlesStore = useArticlesStore();

await articlesStore.fetchArticles();

const article = computed(() =>
  articlesStore.articleBySlug(route.params.slug as string),
);

if (!article.value) {
  navigateTo("/informations-medicales");
}

useArticleSeo(article);

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<style lang="scss" scoped>
.slug {
  &__wrapper {
    background-color: $color-bg-blue;
    min-height: 60vh;
    padding: $spacing-lg 0;
  }

  &__container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 $spacing-md;
  }
}

.article {
  background-color: $color-white;
  padding: $spacing-lg;
  border-radius: $border-radius;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &__header {
    margin-bottom: $spacing-lg;
    padding-bottom: $spacing-lg;
    border-bottom: 2px solid $color-grey-light;

    h1 {
      font-size: 32px;
      font-weight: 700;
      margin: 0 0 $spacing-md 0;
      color: $color-primary;
    }
  }

  &__date {
    font-size: 14px;
    margin-bottom: $spacing-md;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .tag-badge {
      padding: 6px 12px;
      background-color: $color-bg-blue;
      border-radius: 16px;
      font-size: 14px;
      color: $color-primary;
      font-weight: 500;
    }
  }

  &__content {
    margin-bottom: $spacing-lg;
  }

  &__footer {
    padding-top: $spacing-lg;
    border-top: 1px solid $color-grey-light;

    .back-button {
      display: inline-block;
      padding: $spacing-sm $spacing-md;
      background-color: $color-bg-blue;
      color: $color-text;
      text-decoration: none;
      border-radius: $border-radius;
      font-weight: 500;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}

.loading {
  background-color: $color-white;
  padding: $spacing-xl;
  text-align: center;
  border-radius: $border-radius;
  color: $color-primary;
}

@media (max-width: 768px) {
  .slug__wrapper {
    padding: $spacing-md 0;
  }

  .article {
    padding: $spacing-md;

    &__header h1 {
      font-size: 24px;
    }
  }
}
</style>

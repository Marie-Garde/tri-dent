<template>
  <div class="info">
    <div class="info__banner">
      <div class="info__banner__content">
        <h1>Informations médicales</h1>
        <Divider light />
      </div>
    </div>
    <div class="info__container">
      <div class="info__sidebar">
        <h3>Thématiques</h3>
        <ul>
          <li :class="{ active: selectedThematique === null }">
            <a @click="selectThematique(null)">Toutes les thématiques</a>
          </li>
          <li
            v-for="thematique in thematiques"
            :key="thematique._id"
            :class="{ active: selectedThematique === thematique._id }"
          >
            <a @click="selectThematique(thematique._id)">
              {{ thematique.titre }}
            </a>
          </li>
        </ul>
      </div>

      <div class="info__content">
        <div v-if="articlesStore.loading" class="loading">
          <p>Chargement des articles...</p>
        </div>

        <div v-else-if="articlesStore.error" class="error">
          <p>{{ articlesStore.error }}</p>
        </div>

        <div v-else-if="filteredArticles.length === 0" class="no-articles">
          <p>Aucun article trouvé.</p>
        </div>

        <div v-else class="articles-list">
          <article
            v-for="article in filteredArticles"
            :key="article._id"
            class="article-card"
          >
            <NuxtLink :to="`/informations-medicales/${article.slug.current}`">
              <div class="article-card__image">
                <img
                  v-if="article.icone"
                  :src="urlFor(article.icone).url()"
                  :alt="article.icone.alt || article.titre"
                />
                <div v-else class="article-card__placeholder">
                  <span>📄</span>
                </div>
              </div>

              <div class="article-card__content">
                <h2>{{ article.titre }}</h2>

                <div v-if="article.tags?.length" class="article-card__tags">
                  <span
                    v-for="tag in article.tags"
                    :key="tag._id"
                    class="tag-badge"
                  >
                    {{ tag.titre }}
                  </span>
                </div>

                <p v-if="article.contenu" class="article-card__excerpt">
                  {{ getExcerpt(article.contenu) }}
                </p>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from "~/components/Divider.vue";
import { useArticlesStore } from "~/stores/articles";
import { urlFor } from "~/lib/sanity";

const articlesStore = useArticlesStore();
const bannerImageUrl = "/_nuxt/assets/images/informations-medicales/banner.png";

// Charger les données au montage
onMounted(async () => {
  await Promise.all([
    articlesStore.fetchArticles(),
    articlesStore.fetchThematiques(),
  ]);
});

// State pour les filtres
const selectedThematique = ref<string | null>(null);

// Computed
const thematiques = computed(() => articlesStore.thematiques);

const filteredArticles = computed(() => {
  let articles = articlesStore.articles;

  // Filtrer par thématique
  if (selectedThematique.value) {
    articles = articles.filter((article) =>
      article.thematique?.some((t) => t._id === selectedThematique.value)
    );
  }

  return articles;
});

// Methods
function selectThematique(thematiqueId: string | null) {
  selectedThematique.value = thematiqueId;
}

function getExcerpt(contenu: any[]): string {
  if (!contenu || contenu.length === 0) return "";

  // Extraire tout le texte des blocs
  let fullText = "";

  for (const block of contenu) {
    if (block._type === "block" && block.children) {
      for (const child of block.children) {
        if (child.text) {
          fullText += child.text + " ";
        }
      }
    }
  }

  // Prendre les 30 premiers mots
  const words = fullText.trim().split(/\s+/);
  if (words.length <= 20) {
    return fullText.trim();
  }

  return words.slice(0, 20).join(" ") + "...";
}
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.info {
  &__banner {
    width: 100%;
    height: 60vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("~/assets/images/informations-medicales/banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      max-width: 800px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $color-white-soft;

      h1 {
        font-size: 36px;
        font-weight: 700;
        margin: 0;
        color: $color-white-soft;
      }
    }
  }

  &__container {
    display: flex;
    max-width: 1280px;
    margin: $spacing-lg auto;
    gap: $spacing-lg;
  }

  &__sidebar {
    flex: 0 0 20%;
    background-color: $color-white;
    padding: $spacing-md;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: $border-radius;
    height: fit-content;

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: $spacing-sm;
      color: $color-primary;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;

      li {
        border-bottom: 1px solid $color-grey-light;

        &:last-child {
          border-bottom: none;
        }

        a {
          display: block;
          padding: $spacing-sm $spacing-md;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          transition: background-color 0.2s;

          &:hover {
            background-color: $color-bg-blue;
          }
        }

        &.active a {
          background-color: $color-bg-blue;
          font-weight: bold;
        }
      }
    }
  }

  &__content {
    flex: 1;
    background-color: $color-white;
    padding: $spacing-md;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: $border-radius;

    .loading,
    .error,
    .no-articles {
      text-align: center;
      padding: $spacing-lg;
      color: $color-primary;
    }

    .error {
      color: #dc2626;
    }

    .articles-list {
      display: flex;
      flex-direction: column;
      gap: $spacing-md;
    }

    .article-card {
      border: 1px solid $color-grey-light;
      border-radius: $border-radius;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;

      &:hover {
        transform: translateX(4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      a {
        text-decoration: none;
        color: inherit;
        display: flex;
        width: 100%;
      }

      &__image {
        width: 200px;
        height: 200px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }

      &__placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48px;
      }

      &__content {
        flex: 1;
        padding: $spacing-md;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 $spacing-sm 0;
          color: $color-primary;
        }
        p {
          margin: 16px 0 0 0;
        }
      }

      &__date {
        font-size: 14px;
        color: $color-primary;
        margin-bottom: $spacing-sm;
      }

      &__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;

        .tag-badge {
          padding: 4px 8px;
          background-color: $color-bg-blue;
          border-radius: 12px;
          font-size: 12px;
          color: $color-primary;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .info {
    &__banner__content h1 {
      font-size: 24px;
    }

    &__container {
      flex-direction: column;
      margin: $spacing-md;
    }

    &__sidebar {
      flex: 1;
    }

    &__content .article-card {
      flex-direction: column;

      &__image {
        flex: none;
        width: 100%;
        height: 200px;
      }
    }
  }
}
</style>

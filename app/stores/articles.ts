import { defineStore } from "pinia";
import { getSanityClient } from "~/lib/sanity";
import type { Article, Tag, Thematique } from "~/types/article";

export const useArticlesStore = defineStore("articles", {
  state: () => ({
    articles: [] as Article[],
    recentArticles: [] as Article[],
    tags: [] as Tag[],
    thematiques: [] as Thematique[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    articlesByThematique: (state) => (thematiqueId: string) => {
      return state.articles.filter((article) =>
        article.thematique?.some((t) => t._id === thematiqueId)
      );
    },

    articlesByTag: (state) => (tagId: string) => {
      return state.articles.filter((article) =>
        article.tags?.some((tag) => tag._id === tagId)
      );
    },

    articleBySlug: (state) => (slug: string) => {
      return state.articles.find((article) => article.slug.current === slug);
    },
  },

  actions: {
    async fetchArticles() {
      if (this.articles.length > 0) {
        return;
      }

      this.loading = true;
      this.error = null;

      try {
        const query = `*[_type == "article"] | order(publishedAt desc) {
          _id,
          titre,
          slug,
          icone,
          contenu,
          publishedAt,
          "thematique": thematique[]-> {
            _id,
            titre
          },
          "tags": tags[]-> {
            _id,
            titre
          }
        }`;

        this.articles = await getSanityClient().fetch(query);
      } catch (err: any) {
        this.error = err.message || "Erreur lors du chargement des articles";
      } finally {
        this.loading = false;
      }
    },

    async fetchTags() {
      if (this.tags.length > 0) {
        return;
      }

      try {
        const query = `*[_type == "tag"] | order(titre asc) {
          _id,
          titre
        }`;

        this.tags = await getSanityClient().fetch(query);
      } catch (err: any) {
        this.error = err.message || "Erreur lors du chargement des tags";
      }
    },

    async fetchThematiques() {
      if (this.thematiques.length > 0) {
        return;
      }

      try {
        const query = `*[_type == "thematique"] | order(titre asc) {
          _id,
          titre
        }`;

        this.thematiques = await getSanityClient().fetch(query);
      } catch (err: any) {
        this.error = err.message || "Erreur lors du chargement des thématiques";
      }
    },

    async fetchRecentArticles() {
      if (this.recentArticles.length > 0) {
        return;
      }

      try {
        const query = `*[_type == "article"] | order(publishedAt desc) [0...6] {
          _id,
          titre,
          slug,
          icone
        }`;

        this.recentArticles = await getSanityClient().fetch(query);
      } catch (err: any) {
        this.error = err.message || "Erreur lors du chargement des articles récents";
      }
    },
  },
});

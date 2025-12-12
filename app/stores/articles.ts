import { defineStore } from "pinia";
import { sanityClient } from "~/lib/sanity";
import type { Article, Tag, Thematique } from "~/types/article";

export const useArticlesStore = defineStore("articles", {
  state: () => ({
    articles: [] as Article[],
    tags: [] as Tag[],
    thematiques: [] as Thematique[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    // Récupérer les articles par thématique
    articlesByThematique: (state) => (thematiqueId: string) => {
      return state.articles.filter((article) =>
        article.thematique?.some((t) => t._id === thematiqueId)
      );
    },

    // Récupérer les articles par tag
    articlesByTag: (state) => (tagId: string) => {
      return state.articles.filter((article) =>
        article.tags?.some((tag) => tag._id === tagId)
      );
    },

    // Récupérer un article par son slug
    articleBySlug: (state) => (slug: string) => {
      return state.articles.find((article) => article.slug.current === slug);
    },
  },

  actions: {
    async fetchArticles() {
      if (this.articles.length > 0) {
        // Articles déjà chargés
        console.log(this.articles);
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

        this.articles = await sanityClient.fetch(query);
        console.log(this.articles);
      } catch (err: any) {
        this.error = err.message || "Erreur lors du chargement des articles";
        console.error("Erreur Sanity:", err);
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

        this.tags = await sanityClient.fetch(query);
      } catch (err: any) {
        console.error("Erreur lors du chargement des tags:", err);
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

        this.thematiques = await sanityClient.fetch(query);
      } catch (err: any) {
        console.error("Erreur lors du chargement des thématiques:", err);
      }
    },
  },
});

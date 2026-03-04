import type { ComputedRef } from "vue";
import type { Article } from "~/types/article";

const BASE_URL = "https://www.cabinet-dentaire-tri-dent-cornebarrieu.fr";

function getExcerpt(contenu: any[]): string {
  if (!contenu || contenu.length === 0) return "";

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

  const words = fullText.trim().split(/\s+/);
  if (words.length <= 20) {
    return fullText.trim();
  }

  return words.slice(0, 20).join(" ") + "...";
}

export const useArticleSeo = (
  article: ComputedRef<Article | null | undefined>,
) => {
  const title = () =>
    article.value?.titre
      ? `${article.value.titre} | Cabinet Dentaire Tri-Dent`
      : "Article | Cabinet Dentaire Tri-Dent";

  const description = () =>
    article.value?.contenu
      ? getExcerpt(article.value.contenu)
      : "Découvrez nos articles et conseils en santé bucco-dentaire par le Cabinet Dentaire Tri-Dent.";

  const url = () =>
    article.value?.slug
      ? `${BASE_URL}/informations-medicales/${article.value.slug}`
      : `${BASE_URL}/informations-medicales`;

  const image = `${BASE_URL}/images/informations-medicales/banner.webp`;

  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "article" },
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
        innerHTML: () =>
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.value?.titre || "Article",
            description: description(),
            url: url(),
            image,
            datePublished: article.value?.publishedAt || undefined,
            author: {
              "@type": "Organization",
              name: "Cabinet Dentaire Tri-Dent",
              url: BASE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "Cabinet Dentaire Tri-Dent",
              url: BASE_URL,
            },
          }),
      },
      {
        type: "application/ld+json",
        innerHTML: () =>
          JSON.stringify({
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
                name: "Informations médicales",
                item: `${BASE_URL}/informations-medicales`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: article.value?.titre || "Article",
                item: url(),
              },
            ],
          }),
      },
    ],
  });
};

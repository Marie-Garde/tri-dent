import type { ComputedRef } from "vue";
import type { Article } from "~/types/article";

// Fonction pour générer un extrait du contenu
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
  useHead({
    title: () =>
      article.value?.titre
        ? `${article.value.titre} | Cabinet Dentaire Tri-Dent`
        : "Article | Cabinet Dentaire Tri-Dent",
    meta: [
      {
        name: "description",
        content: () =>
          article.value?.contenu
            ? getExcerpt(article.value.contenu)
            : "Découvrez nos articles et conseils en santé bucco-dentaire par le Cabinet Dentaire Tri-Dent.",
      },
    ],
  });
};

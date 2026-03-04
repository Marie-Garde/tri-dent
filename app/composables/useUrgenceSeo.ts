const BASE_URL = "https://www.cabinet-dentaire-tri-dent-cornebarrieu.fr";

export const useUrgenceSeo = () => {
  const title = "Urgence Dentaire - Que faire ? Cabinet Dentaire Tri-Dent";
  const description =
    "Que faire en cas d'urgence dentaire ? Le Cabinet Dentaire Tri-Dent vous guide sur les premiers gestes et la procédure à suivre en dehors des horaires d'ouverture. Contactez-nous rapidement.";
  const url = `${BASE_URL}/urgence`;
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
              name: "Urgence",
              item: url,
            },
          ],
        }),
      },
    ],
  });
};

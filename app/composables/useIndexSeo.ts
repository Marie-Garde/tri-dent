const BASE_URL = "https://www.cabinet-dentaire-tri-dent-cornebarrieu.fr";

export const useIndexSeo = () => {
  const title =
    "Cabinet Dentaire Tri-Dent - Votre Santé Bucco-Dentaire à Cornebarrieu";
  const description =
    "Découvrez le Cabinet Dentaire Tri-Dent à Cornebarrieu. Une équipe complète de professionnels dévoués à votre santé bucco-dentaire, offrant des soins modernes et personnalisés.";
  const url = BASE_URL;
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
          "@type": "Dentist",
          name: "Cabinet Dentaire Tri-Dent",
          image,
          address: {
            "@type": "PostalAddress",
            streetAddress: "3 Rte d'Aussonne",
            addressLocality: "Cornebarrieu",
            postalCode: "31700",
            addressRegion: "Occitanie",
            addressCountry: "FR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.6558,
            longitude: 1.3223,
          },
          telephone: "+33561069192",
          email: "secretariat@scmtrident.fr",
          url: BASE_URL,
          priceRange: "$$",
          areaServed: [
            { "@type": "City", name: "Cornebarrieu" },
            { "@type": "City", name: "Colomiers" },
            { "@type": "City", name: "Blagnac" },
            { "@type": "City", name: "Tournefeuille" },
            { "@type": "City", name: "Aussonne" },
            { "@type": "City", name: "Pibrac" },
            { "@type": "City", name: "Toulouse" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
              opens: "09:00",
              closes: "12:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
              opens: "14:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Friday",
              opens: "09:00",
              closes: "13:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Friday",
              opens: "14:00",
              closes: "17:00",
            },
          ],
        }),
      },
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
          ],
        }),
      },
    ],
  });
};

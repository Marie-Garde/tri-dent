const BASE_URL = "https://www.cabinet-dentaire-tri-dent-cornebarrieu.fr";

export const useContactSeo = () => {
  const title = "Contactez-nous - Cabinet Dentaire Tri-Dent à Cornebarrieu";
  const description =
    "Contactez le Cabinet Dentaire Tri-Dent à Cornebarrieu. Retrouvez nos coordonnées, plan d'accès et posez toutes vos questions via notre formulaire de contact ou par téléphone.";
  const url = `${BASE_URL}/contact`;
  const image = `${BASE_URL}/images/contact/contact.webp`;

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
          url,
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
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: url,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "A quelle fréquence dois-je consulter mon dentiste ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Les dentistes recommandent un contrôle des dents 1 fois par an, si vous n'avez pas de problème de santé particulier. Néanmoins, si lors du contrôle des soins sont nécessaires, une période de 6 mois est en effet la durée moyenne de l'évolution de pathologie carieuse ou parodontale. Cette précaution permet de conserver la dent vivante ou d'éviter des complications.",
              },
            },
            {
              "@type": "Question",
              name: "Quel type de brosse à dent est à privilégier ? Et quel dentifrice dois-je utiliser ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ce sont les brosses à dents dites « souples » qui sont les plus recommandées pour les gencives et les dents. Certaines brosses à dent plus dures peuvent être proposées par le praticien en fonction du port d'un appareil ou de conditions particulières. Pour le dentifrice, il est conseillé de le prendre le moins abrasif possible et avec une teneur en fluor adapté à l'âge.",
              },
            },
            {
              "@type": "Question",
              name: "A quel âge faut-il commencer à amener son enfant chez le dentiste ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Afin de les familiariser avec le praticien et l'environnement du cabinet dentaire, il est important de commencer par une visite annuelle dès 3 ans. Les pathologies sont censées être assez rares à cet âge-là mais un dépistage précoce de certaines dysfonctions ou de mauvaises habitudes peut éviter de plus graves troubles par la suite.",
              },
            },
            {
              "@type": "Question",
              name: "Le jet dentaire est-il efficace ? Peut-il remplacer le fil dentaire ou la brossette inter-dentaire ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nettoyer les espaces entre les dents est primordial pour une bonne hygiène dentaire. Les jets dentaires ou hydropulseurs envoient à forte pression un mélange air-eau. Bien que moins efficaces que les brossettes et le fil dentaire, ils restent intéressants pour les personnes ayant une faible dextérité manuelle. Les brossettes inter-dentaires existent sous différentes tailles et formats. Le fil dentaire est à préférer ciré et un peu épais.",
              },
            },
            {
              "@type": "Question",
              name: "Comment faire pour utiliser le fil dentaire ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Prenez environ 30 cm de fil dentaire et enroulez les extrémités autour des majeurs pour que le fil soit bien tendu. Descendez délicatement le fil avec un va-et-vient latéral pour ne pas blesser la gencive. Remontez le fil de la gencive vers l'extérieur, en nettoyant l'une puis l'autre des faces interdentaires.",
              },
            },
            {
              "@type": "Question",
              name: "Quelle est la durée de vie d'une couronne ou d'un bridge ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "En moyenne, une couronne a une durée de vie comprise entre 5 et 10 ans, mais elle peut parfois atteindre 20 ans ou plus avec un bon entretien. Sa longévité dépend de nombreux facteurs : les habitudes d'hygiène bucco-dentaire, les habitudes de consommation alimentaire, les forces de mastication, l'acidité buccale ainsi que l'état de santé buccal et général.",
              },
            },
          ],
        }),
      },
    ],
  });
};

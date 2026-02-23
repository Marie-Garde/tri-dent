export const useContactSeo = () => {
  useHead({
    title: "Contactez-nous - Cabinet Dentaire Tri-Dent à Cornebarrieu",
    meta: [
      {
        name: "description",
        content:
          "Contactez le Cabinet Dentaire Tri-Dent à Cornebarrieu. Retrouvez nos coordonnées, plan d'accès et posez toutes vos questions via notre formulaire de contact ou par téléphone.",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Cabinet Dentaire Tri-Dent",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3 Rte d'Aussonne",
            addressLocality: "Cornebarrieu",
            postalCode: "31700",
            addressCountry: "FR",
          },
          telephone: "+33561069192",
          email: "secretariat@scmtrident.fr",
          url: "https://www.your-domain.com/contact", // TODO: Update with your actual domain
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
    ],
  });
};

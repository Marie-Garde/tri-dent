<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const BASE_URL = "https://www.cabinet-dentaire-tri-dent-cornebarrieu.fr";

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Cabinet Dentaire Tri-Dent",
        url: BASE_URL,
        publisher: {
          "@type": "Organization",
          name: "Cabinet Dentaire Tri-Dent",
          url: BASE_URL,
        },
      }),
    },
  ],
});
</script>

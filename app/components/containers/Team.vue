<template>
  <div class="team">
    <div class="team__title">
      <h2>Une équipe complète pour vous aider</h2>
      <Divider />
    </div>
    <!-- Section Associates -->
    <div v-if="associates.length" class="team__section">
      <div class="team__grid" ref="associatesGrid">
        <DrCard
          v-for="(doctor, index) in associates"
          :key="doctor.name"
          :image="doctor.img"
          :name="doctor.name"
          :status="doctor.status"
          :presentation="doctor.presentation"
          class="team__card"
          :style="{ '--card-index': index }"
        />
      </div>
    </div>

    <!-- Section Docteurs -->
    <div v-if="doctors.length" class="team__section">
      <div class="team__grid" ref="doctorsGrid">
        <DrCard
          v-for="(doctor, index) in doctors"
          :key="doctor.name"
          :image="doctor.img"
          :name="doctor.name"
          :status="doctor.status"
          :presentation="doctor.presentation"
          class="team__card"
          :style="{ '--card-index': index }"
        />
      </div>
    </div>

    <!-- Section Équipe -->
    <div v-if="assistants.length" class="team__section">
      <div class="team__grid" ref="assistantsGrid">
        <DrCard
          v-for="(member, index) in assistants"
          :key="member.name"
          :image="member.img"
          :name="member.name"
          :status="member.status"
          :presentation="member.presentation"
          class="team__card"
          :style="{ '--card-index': index }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// todo: Mock data - à remplacer par l'appel API
const teamMembers = [
  {
    name: "Dr. Réda BOUNAB",
    status: "Associate",
    img: "/images/logo trident.svg",
    presentation: "Omnipratique, Implantologie",
  },
  {
    name: "Dr. Sandrine DE CARVALHO",
    status: "Associate",
    img: "/images/logo trident.svg",
    presentation: "Omnipratique, Implantologie",
  },
  {
    name: "Dr. Laure RISPAL",
    status: "Associate",
    img: "/images/logo trident.svg",
    presentation: "Omnipratique",
  },
  {
    name: "Dr. Patrick SALINAS",
    status: "Associate",
    img: "/images/logo trident.svg",
    presentation: "Omnipratique, Orthodontie adulte, Implantologie",
  },
  {
    name: "Dr. Mathilde HOURSET",
    status: "Dr",
    img: "/images/logo trident.svg",
    presentation:
      "Omnipratique, Pédodontie, Orthodontie interceptive, Occlusodontie",
  },
  {
    name: "Dr. Hugo SENTILLES",
    status: "Dr",
    img: "/images/logo trident.svg",
    presentation: "Omnipratique",
  },
  {
    name: "Céline CHAUVERON",
    status: "Assistante",
    img: "/images/logo trident.svg",
    presentation: "Assistante dentaire",
  },
  {
    name: "Maylis GOURBAL",
    status: "Assistante",
    img: "/images/logo trident.svg",
    presentation: "Assistante dentaire",
  },
  {
    name: "Séverine PUPILLI",
    status: "Assistante",
    img: "/images/logo trident.svg",
    presentation: "Assistante dentaire",
  },
  {
    name: "Julie SETSOUA",
    status: "Assistante",
    img: "/images/logo trident.svg",
    presentation: "Assistante dentaire",
  },
];

// Séparation des docteurs et du reste de l'équipe
const associates = computed(() =>
  teamMembers.filter((member) => member.status === "Associate")
);
const doctors = computed(() =>
  teamMembers.filter((member) => member.status === "Dr")
);
const assistants = computed(() =>
  teamMembers.filter((member) => member.status === "Assistante")
);

// Refs pour les grilles
const associatesGrid = ref(null);
const doctorsGrid = ref(null);
const assistantsGrid = ref(null);

// Intersection Observer au montage
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Arrête d'observer une fois visible
        }
      });
    },
    {
      threshold: 0.1, // Se déclenche quand 10% de l'élément est visible
      rootMargin: "0px 0px -50px 0px", // Déclenche un peu avant que l'élément soit complètement visible
    }
  );

  // Observer toutes les grilles
  [associatesGrid.value, doctorsGrid.value, assistantsGrid.value].forEach(
    (grid) => {
      if (grid) observer.observe(grid);
    }
  );
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.team {
  &__section {
    margin-bottom: $spacing-xl;
    display: flex;
    justify-content: center;
  }

  &__title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: $spacing-lg;
    font-size: $spacing-lg;
  }

  &__grid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing-lg;
    align-items: start;
  }

  &__card {
    opacity: 0;
    transform: translateY(20px);
    transition: none; // Désactive la transition par défaut

    // L'animation ne se déclenche que quand la grille devient visible
    .is-visible & {
      animation: cardFadeIn 0.6s ease-out forwards;
      animation-delay: calc(var(--card-index) * 0.1s);
    }
  }
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

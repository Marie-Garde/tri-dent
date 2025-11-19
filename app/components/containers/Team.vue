<template>
  <div class="team">
    <div class="team__title">
      <h2>Une équipe complète pour vous aider</h2>
      <Divider />
    </div>
    <!-- Section Associates -->
    <div v-if="associates.length" class="team__section">
      <div class="team__grid">
        <DrCard
          v-for="doctor in associates"
          :key="doctor.name"
          :image="doctor.img"
          :name="doctor.name"
          :status="doctor.status"
          :presentation="doctor.presentation"
        />
      </div>
    </div>

    <!-- Section Docteurs -->
    <div v-if="doctors.length" class="team__section">
      <div class="team__grid">
        <DrCard
          v-for="doctor in doctors"
          :key="doctor.name"
          :image="doctor.img"
          :name="doctor.name"
          :status="doctor.status"
          :presentation="doctor.presentation"
        />
      </div>
    </div>

    <!-- Section Équipe -->
    <div v-if="assistants.length" class="team__section">
      <div class="team__grid">
        <DrCard
          v-for="member in assistants"
          :key="member.name"
          :image="member.img"
          :name="member.name"
          :status="member.status"
          :presentation="member.presentation"
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
}
</style>

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
// todo: ajouter une présentation -> au hover, la présentation s'affiche
const teamMembers = [
  {
    name: "Dr. Sarah Martin",
    status: "Associate",
    img: "/images/logo trident.svg",
    presentation:
      "Dr. Sarah Martin is a skilled associate with expertise in general medicine.",
  },
  {
    name: "Dr. Jean Dupont",
    status: "Associate",
    img: "/images/logo trident.svg",
    presentation:
      "Dr. Jean Dupont is a dedicated associate specializing in pediatric care.",
  },
  {
    name: "Dr. Sarah MartDeux",
    status: "Associate",
    img: "/images/logo trident.svg",
    presentation:
      "Dr. Sarah MartDeux focuses on women's health and preventive care.",
  },
  {
    name: "Dr. Jean Duponton",
    status: "Associate",
    img: "/images/logo trident.svg",
    presentation:
      "Dr. Jean Duponton is a compassionate associate with a focus on geriatric care.",
  },
  {
    name: "Dr. Sarah Martrois",
    status: "Dr",
    img: "/images/logo trident.svg",
    presentation: "Dr. Sarah Martrois is a leading expert in oral surgery.",
  },
  {
    name: "Dr. Jean Duponti",
    status: "Dr",
    img: "/images/logo trident.svg",
    presentation:
      "Dr. Jean Duponti is known for his innovative approach to dental implants.",
  },
  {
    name: "Marie Lambert",
    status: "Assistante",
    img: "/images/logo trident.svg",
    presentation:
      "Marie Lambert is a friendly assistant who ensures smooth patient experiences.",
  },
  {
    name: "Pierre Durand",
    status: "Assistante",
    img: "/images/logo trident.svg",
    presentation:
      "Pierre Durand is a dedicated assistant who supports the team with care.",
  },
  {
    name: "Marie Lamberto",
    status: "Assistante",
    img: "/images/logo trident.svg",
    presentation:
      "Marie Lamberto is a compassionate assistant who prioritizes patient comfort.",
  },
  {
    name: "Pierre Durandal",
    status: "Assistante",
    img: "/images/logo trident.svg",
    presentation:
      "Pierre Durandal is a meticulous assistant who pays attention to every detail.",
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

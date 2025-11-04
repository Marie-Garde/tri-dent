<template>
  <div class="team">
    <div class="team__title">
      <h2>Une équipe complète pour vous aider</h2>
      <Divider />
    </div>
    <!-- Section Docteurs -->
    <div v-if="doctors.length" class="team__section">
      <div class="team__grid">
        <DrCard
          v-for="doctor in doctors"
          :key="doctor.name"
          :image="doctor.img"
          :name="doctor.name"
          :isDr="true"
        />
      </div>
    </div>

    <!-- Section Équipe -->
    <div v-if="team.length" class="team__section">
      <div class="team__grid">
        <DrCard
          v-for="member in team"
          :key="member.name"
          :image="member.img"
          :name="member.name"
          :isDr="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// todo: Mock data - à remplacer par l'appel API
const teamMembers = [
  {
    name: "Dr. Sarah Martin",
    isDr: true,
    img: "/images/logo trident.svg",
  },
  {
    name: "Dr. Jean Dupont",
    isDr: true,
    img: "/images/logo trident.svg",
  },
  {
    name: "Dr. Sarah MartDeux",
    isDr: true,
    img: "/images/logo trident.svg",
  },
  {
    name: "Dr. Jean Duponton",
    isDr: true,
    img: "/images/logo trident.svg",
  },
  {
    name: "Dr. Sarah Martrois",
    isDr: true,
    img: "/images/logo trident.svg",
  },
  {
    name: "Dr. Jean Duponti",
    isDr: true,
    img: "/images/logo trident.svg",
  },
  {
    name: "Marie Lambert",
    isDr: false,
    img: "/images/logo trident.svg",
  },
  {
    name: "Pierre Durand",
    isDr: false,
    img: "/images/logo trident.svg",
  },
  {
    name: "Marie Lamberto",
    isDr: false,
    img: "/images/logo trident.svg",
  },
  {
    name: "Pierre Durandal",
    isDr: false,
    img: "/images/logo trident.svg",
  },
];

// Séparation des docteurs et du reste de l'équipe
const doctors = computed(() => teamMembers.filter((member) => member.isDr));
const team = computed(() => teamMembers.filter((member) => !member.isDr));
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center; // center each row
    gap: $spacing-lg;
    align-items: start;

    /* force each card to a fixed column width so rows can be centered */
    > * {
      flex: 0 0 230px;
      max-width: 230px;
    }
  }
}

@media (max-width: 1024px) {
  .team {
    &__grid {
      > * {
        flex: 0 0 200px;
        max-width: 200px;
      }
      gap: 1.5rem;
    }
  }
}

@media (max-width: 768px) {
  .team {
    &__grid {
      /* two columns on small screens */
      > * {
        flex: 0 0 calc(50% - 0.625rem);
        max-width: none;
      }
      gap: 1.25rem;
    }
  }
}
</style>

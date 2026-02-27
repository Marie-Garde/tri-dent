<template>
  <div class="team">
    <div class="team__title">
      <h2>Une équipe complète pour vous aider</h2>
      <Divider />
    </div>
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
          expandable
        />
      </div>
    </div>

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
          expandable
        />
      </div>
    </div>

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
          expandable
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatarImg from "~/assets/images/avatar.png";

const teamMembers = [
  {
    name: "Dr. Réda BOUNAB",
    status: "Associate",
    img: avatarImg,
    presentation: "Omnipratique, Implantologie",
  },
  {
    name: "Dr. Sandrine DE CARVALHO",
    status: "Associate",
    img: avatarImg,
    presentation: "Omnipratique, Implantologie",
  },
  {
    name: "Dr. Laure RISPAL",
    status: "Associate",
    img: avatarImg,
    presentation: "Omnipratique",
  },
  {
    name: "Dr. Patrick SALINAS",
    status: "Associate",
    img: avatarImg,
    presentation: "Omnipratique, Orthodontie adulte, Implantologie",
  },
  {
    name: "Dr. Mathilde HOURSET",
    status: "Dr",
    img: avatarImg,
    presentation:
      "Omnipratique, Pédodontie, Orthodontie interceptive, Occlusodontie",
  },
  {
    name: "Dr. Hugo SENTILLES",
    status: "Dr",
    img: avatarImg,
    presentation: "Omnipratique",
  },
  {
    name: "Céline",
    status: "Assistante",
    img: avatarImg,
    presentation: "Assistante dentaire qualifiée",
  },
  {
    name: "Maylis",
    status: "Assistante",
    img: avatarImg,
    presentation: "Assistante dentaire qualifiée",
  },
  {
    name: "Séverine",
    status: "Assistante",
    img: avatarImg,
    presentation: "Assistante dentaire qualifiée",
  },
  {
    name: "Julie",
    status: "Assistante",
    img: avatarImg,
    presentation: "Assistante dentaire qualifiée",
  },
];

const associates = computed(() =>
  teamMembers.filter((member) => member.status === "Associate"),
);
const doctors = computed(() =>
  teamMembers.filter((member) => member.status === "Dr"),
);
const assistants = computed(() =>
  teamMembers.filter((member) => member.status === "Assistante"),
);

const associatesGrid = ref(null);
const doctorsGrid = ref(null);
const assistantsGrid = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  // Observer toutes les grilles
  [associatesGrid.value, doctorsGrid.value, assistantsGrid.value].forEach(
    (grid) => {
      if (grid) observer.observe(grid);
    },
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
    @media (max-width: 767px) {
      margin-bottom: $spacing-lg;
    }
  }

  &__title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: $spacing-lg;
    font-size: $spacing-lg;
    margin-top: 40px;
  }

  &__grid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing-lg;
    align-items: start;

    @media (max-width: 1024px) {
      gap: $spacing-md;
      padding: 0 $spacing-md;
    }
  }

  &__card {
    opacity: 0;
    transform: translateY(20px);
    transition: none;

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

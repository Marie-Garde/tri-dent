<template>
  <div class="team">
    <div class="team__title">
      <h2>Une équipe complète pour vous aider</h2>
      <Divider />
    </div>
    <div v-if="doctorsStore.partners.length" class="team__section">
      <div class="team__grid" ref="associatesGrid">
        <DrCard
          v-for="(doctor, index) in doctorsStore.partners"
          :key="doctor._id"
          :image="doctorsStore.avatarUrl(doctor)"
          :name="doctor.nom"
          status="Associate"
          class="team__card"
          :style="{ '--card-index': index }"
          expandable
        />
      </div>
    </div>

    <div v-if="doctorsStore.dentists.length" class="team__section">
      <div class="team__grid" ref="doctorsGrid">
        <DrCard
          v-for="(doctor, index) in doctorsStore.dentists"
          :key="doctor._id"
          :image="doctorsStore.avatarUrl(doctor)"
          :name="doctor.nom"
          status="Dr"
          class="team__card"
          :style="{ '--card-index': index }"
          expandable
        />
      </div>
    </div>

    <div v-if="doctorsStore.assistants.length" class="team__section">
      <div class="team__grid" ref="assistantsGrid">
        <DrCard
          v-for="(member, index) in doctorsStore.assistants"
          :key="member._id"
          :image="doctorsStore.avatarUrl(member)"
          :name="member.nom"
          status="Assistante"
          class="team__card"
          :style="{ '--card-index': index }"
          expandable
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const doctorsStore = useDoctorsStore();

const associatesGrid = ref(null);
const doctorsGrid = ref(null);
const assistantsGrid = ref(null);

onMounted(async () => {
  await doctorsStore.fetchDoctors();

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

  [associatesGrid.value, doctorsGrid.value, assistantsGrid.value].forEach(
    (grid) => {
      if (grid) observer.observe(grid);
    },
  );
});
</script>

<style lang="scss" scoped>
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

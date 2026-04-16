<template>
  <div class="team">
    <div class="team__title">
      <h2>Une équipe complète pour vous aider</h2>
      <Divider />
    </div>
    <div
      v-for="(row, rowIndex) in rows"
      v-show="row.length"
      :key="rowIndex"
      class="team__section"
    >
      <div class="team__grid" :ref="(el) => (rowRefs[rowIndex] = el)">
        <DrCard
          v-for="(doctor, index) in row"
          :key="doctor._id"
          :image="doctorsStore.avatarUrl(doctor)"
          :name="doctor.nom"
          :description="doctor.description"
          :status="roleToStatus(doctor.role)"
          class="team__card"
          :style="{ '--card-index': index }"
          expandable
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SanityDoctor } from "~/types/doctor";

const doctorsStore = useDoctorsStore();

const ROW_SIZES = [4, 2, 4];

const rows = computed<SanityDoctor[][]>(() => {
  const list = doctorsStore.sortedByIndex;
  const result: SanityDoctor[][] = [];
  let cursor = 0;
  for (const size of ROW_SIZES) {
    result.push(list.slice(cursor, cursor + size));
    cursor += size;
  }
  return result;
});

const roleToStatus = (role: SanityDoctor["role"]) => {
  if (role === "assistant") return "Assistante";
  if (role === "partner") return "Associate";
  return "Dr";
};

const rowRefs = ref<(Element | null)[]>([]);

onMounted(async () => {
  await doctorsStore.fetchDoctors();
  await nextTick();

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

  rowRefs.value.forEach((grid) => {
    if (grid) observer.observe(grid);
  });
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

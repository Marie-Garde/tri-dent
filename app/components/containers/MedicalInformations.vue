<template>
  <div class="medical-information">
    <h2>Nos informations médicales</h2>
    <Divider />
    <p>
      em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <!-- <Caroussel :slides="cards" :showIndicators="true" :showArrows="true">
      <template #slide="{ slide }">
        <div class="mi-card">
          <img :src="slide.icon" :alt="slide.title" />
          <h3>{{ slide.title }}</h3>
          <NuxtLink :to="slide.link">En savoir plus</NuxtLink>
        </div>
      </template>
    </Caroussel> -->
    <Button class="button" variant="secondary" href="/"
      >Plus de ressources</Button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import Caroussel from "../Caroussel.vue";

// données JSON : chaque objet peut contenir icon, title, link
const cards = ref([
  {
    id: "c1",
    icon: "/images/tooth-brush.svg",
    title: "Brossage de dents",
    link: "/consultation",
  },
  {
    id: "c2",
    icon: "/images/implant.svg",
    title: "L'implantologie",
    link: "/soins-dentaires",
  },
  {
    id: "c3",
    icon: "/images/post-op.svg",
    title: "Soins post opératoires",
    link: "/ophtalmo",
  },
  {
    id: "c4",
    icon: "/images/implant.svg",
    title: "L'implantologie",
    link: "/soins-dentaires",
  },
]);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
// todo: typo
.medical-information {
  background-color: $color-yellow-transparent;
  margin-top: -$spacing-md;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $spacing-xl 156px;

  h2 {
    text-align: center;
    margin-bottom: $spacing-md;
  }
  p {
    text-align: center;
    margin-top: $spacing-lg;
  }

  .medical-informations {
    padding: 1rem;
  }
  .mi-card {
    padding: $spacing-md;
    background: #fff;
    border-radius: 6$border-radius;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
    min-width: 220px;
    text-align: center;
  }
}

.button {
  margin-top: $spacing-xl;
  padding: $spacing-md $spacing-xl;
}
</style>

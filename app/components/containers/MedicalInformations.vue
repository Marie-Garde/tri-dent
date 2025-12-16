<template>
  <div class="medical-information">
    <h2>Nos informations médicales</h2>
    <Divider />
    <p>
      Nous croyons que l’information claire et accessible est essentielle pour
      prendre soin de votre santé bucco-dentaire. Retrouvez ici des conseils,
      explications et recommandations validés par notre équipe de
      chirurgiens-dentistes, pour mieux comprendre les soins, les pathologies
      courantes et les bonnes pratiques d’hygiène.
    </p>
    <Carousel :item-count="cards.length">
      <article
        v-for="(item, i) in cards"
        :key="i"
        :style="`--i:${i}`"
        :item="item"
        class="mi-card"
      >
        <img :src="item.icon" :alt="item.title" />
        <h3>{{ item.title }}</h3>
        <NuxtLink :to="item.link">En savoir plus</NuxtLink>
      </article>
    </Carousel>
    <Button class="button" variant="secondary" href="/">
      Plus de ressources
    </Button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Carousel from "../Carousel.vue";

// données JSON : chaque objet peut contenir icon, title, link
const cards = ref([
  {
    id: "c1",
    icon: "/images/tooth-brush.svg",
    title: "Brossage de dents",
    link: "/",
  },
  {
    id: "c2",
    icon: "/images/implant.svg",
    title: "L'implantologie",
    link: "/",
  },
  {
    id: "c3",
    icon: "/images/post-op.svg",
    title: "Soins post opératoires",
    link: "/",
  },
  {
    id: "c4",
    icon: "/images/tooth-brush.svg",
    title: "Brossage de dents",
    link: "/",
  },
  {
    id: "c5",
    icon: "/images/implant.svg",
    title: "L'implantologie",
    link: "/",
  },
  {
    id: "c6",
    icon: "/images/post-op.svg",
    title: "Soins post opératoires",
    link: "/",
  },
]);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
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
    background: $color-white;
    border-radius: $border-radius;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
    width: 250px;
    height: 294px;
    text-align: center;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
      margin-top: $spacing-md;
      height: 110px;
    }
    h3 {
      margin-top: 1.5rem;
      font-weight: 500;
    }
    a {
      margin-bottom: $spacing-md;
      text-decoration: underline;
    }
  }

  @media (max-width: 767px) {
    padding: $spacing-lg;
  }
}

.button {
  margin-top: $spacing-xl;
  padding: $spacing-md $spacing-xl;
}
</style>

<template>
  <div class="welcome" ref="welcomeSection">
    <SideTextImage :img="team" img-alt="Équipe Tri-Dent">
      <template #content>
        <div class="welcome__content">
          <h2>Bienvenue au cabinet dentaire Tri-Dent Cornebarrieu</h2>
          <Divider />
          <p class="welcome__text">
            Toute l'équipe du cabinet Tri-dent est heureuse de vous accueillir
            dans notre nouveau cabinet situé au 3 route d'Aussonne à
            Cornebarrieu. Nous réalisons les soins conservateurs, d'orthodontie,
            d'esthétique, d'implantologie, d'occlusodontie et de parodontie.
          </p>
          <Button class="welcome__button" href="/notre-approche"
            >En savoir plus sur notre approche</Button
          >
        </div>
      </template>
      <template #image>
        <img
          src="/images/home/home team.png"
          alt="team"
          class="welcome__image"
        />
      </template>
    </SideTextImage>
  </div>
</template>

<script setup lang="ts">
import team from "~/assets/images/home/home team.png";
import Divider from "~/components/Divider.vue";
import Button from "~/components/Button.vue";

const welcomeSection = ref(null);

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
      threshold: 0.2,
      rootMargin: "0px",
    }
  );

  if (welcomeSection.value) {
    observer.observe(welcomeSection.value);
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.welcome {
  margin-top: $spacing-md;

  &__content {
    opacity: 0;
    transform: translateY(15px);

    .is-visible & {
      animation: fadeInContent 0.8s ease-out forwards;
    }
  }

  &__image {
    object-fit: cover;
    opacity: 0;
    transform: translateX(20px);

    .is-visible & {
      animation: fadeInImage 0.8s ease-out 0.2s forwards;
    }

    @media (max-width: 767px) {
      width: 100%;
      height: auto;
      transform: translateY(20px);
    }
  }

  &__text {
    padding-top: $spacing-md;
  }

  &__button {
    margin-top: 2.5rem;
  }
}

@keyframes fadeInContent {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInImage {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

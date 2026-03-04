<template>
  <div class="welcome" ref="welcomeSection">
    <SideTextImage :img="team" img-alt="Équipe Tri-Dent">
      <template #content>
        <div class="welcome__content">
          <h2>Bienvenue au cabinet dentaire Tri-Dent Cornebarrieu</h2>
          <Divider class="divider" />
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
    </SideTextImage>
  </div>
</template>

<script setup lang="ts">
import team from "~/assets/images/home/home-team.jpg";

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
    },
  );

  if (welcomeSection.value) {
    observer.observe(welcomeSection.value);
  }
});
</script>

<style lang="scss" scoped>
.welcome {
  margin-top: $spacing-md;

  .divider {
    margin: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    opacity: 0;
    transform: translateY(15px);

    .is-visible & {
      animation: fadeInContent 0.8s ease-out forwards;
    }
  }

  &__text {
    padding-top: $spacing-md;
  }

  &__button {
    margin-top: 2.5rem;
  }
}

@media (max-width: 1024px) {
  .welcome {
    h2 {
      font-size: 1.5rem;
      line-height: 1.3;
    }

    &__text {
      font-size: 0.95rem;
    }

    &__button {
      margin-top: $spacing-lg;
    }
  }
}

@media (max-width: 767px) {
  .welcome {
    margin-top: $spacing-lg;

    &__content {
      align-items: center;
      text-align: center;
    }

    h2 {
      font-size: 1.6rem;
      line-height: 1.3;
    }

    &__text {
      padding-top: $spacing-md;
      font-size: 1rem;
    }

    &__button {
      width: 90%;
      display: inline-flex;
      justify-content: center;
    }
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

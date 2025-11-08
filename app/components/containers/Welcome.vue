<template>
  <div class="welcome">
    <SideTextImage :img="team" img-alt="Équipe Tri-Dent">
      <template #content>
        <h2>Bienvenue au cabinet dentaire Tri-Dent Cornebarrieu</h2>
        <Divider />
        <p class="welcome__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor
        </p>
        <Button class="welcome__button" href="/about"
          >En savoir plus sur notre approche</Button
        >
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
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.welcome {
  margin-top: $spacing-md;

  &__text {
    padding-top: $spacing-md;
  }

  &__button {
    margin-top: 2.5rem;
  }

  &__image {
    object-fit: cover;

    @media (max-width: 767px) {
      width: 100%;
      height: auto;
    }
  }
}
</style>

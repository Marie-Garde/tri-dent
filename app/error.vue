<template>
  <div class="error-page">
    <div class="error-page__content">
      <h1 class="error-page__code">404</h1>
      <h2 class="error-page__title">Page introuvable</h2>
      <p class="error-page__message">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <button class="error-page__button" @click="handleError">
        Retour à l'accueil
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.error-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color-bg-blue;

  &__content {
    text-align: center;
    padding: $spacing-xl $spacing-lg;
  }

  &__code {
    font-family: "Anton", "Montserrat", "Raleway", sans-serif;
    font-size: clamp(6rem, 15vw, 10rem);
    color: $color-primary;
    margin: 0;
    line-height: 1;
    letter-spacing: 6px;
  }

  &__title {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: $color-darkblue;
    margin-top: $spacing-md;
    margin-bottom: $spacing-sm;
  }

  &__message {
    color: $color-text;
    font-size: 1.1rem;
    margin-bottom: $spacing-xl;
  }

  &__button {
    display: inline-block;
    padding: $spacing-md $spacing-xl;
    background-color: $color-primary;
    color: $color-white;
    border: none;
    border-radius: $border-radius-lg;
    font-family: "Montserrat", "Raleway", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: $color-darkblue;
    }
  }
}
</style>

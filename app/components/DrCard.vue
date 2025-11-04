<template>
  <div class="card">
    <div class="card__image-container">
      <img :src="image ?? logo" :alt="name" class="card__image" />
    </div>
    <div class="card__name" :class="{ 'card__name--doctor': isDr }">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    image?: string;
    name: string;
    isDr?: boolean;
  }>(),
  {
    isDr: false,
  }
);
import logo from "~/assets/images/logo trident.svg";
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.card {
  width: 100%;
  max-width: 230px;
  border: 1px solid $color-primary;
  border-radius: $border-radius;

  &__image-container {
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: $spacing-md;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__name {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82px;
    padding: $spacing-sm $spacing-md;
    text-align: center;
    font-size: 20px;
    background-color: $color-cta;
    border-radius: $border-radius -1;

    &--doctor {
      background-color: $color-green-transparent;
      color: $color-white;
    }
  }
}
</style>

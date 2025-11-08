<template>
  <div class="card">
    <div class="card__image-container">
      <img :src="image ?? logo" :alt="name" class="card__image" />
    </div>
    <div
      class="card__name-container"
      :class="{ 'card__name-container--doctor': status !== 'Assistante' }"
    >
      <div class="card__name">
        {{ name }}
      </div>
      <div v-if="presentation" class="card__presentation">
        {{ presentation }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    image?: string;
    name: string;
    status: string;
    presentation?: string;
  }>(),
  {}
);
import logo from "~/assets/images/logo trident.svg";
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.card {
  position: relative;
  width: 100%;
  max-width: 230px;
  border: 1px solid $color-primary;
  border-radius: $border-radius;
  background-color: $color-white;
  padding-bottom: 82px;
  filter: drop-shadow(0 4px 0 rgba(0, 0, 0, 0.1));

  &__image-container {
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 8px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__name-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: $color-yellow;
    border-radius: $border-radius - 1;
    transition: all 0.3s ease-in-out;

    &--doctor {
      background-color: $color-green-transparent;
      color: $color-white;
    }
  }

  &__name {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82px;
    padding: $spacing-sm $spacing-md;
    text-align: center;
    font-size: 20px;
  }

  &__presentation {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    text-align: center;
    font-size: 14px;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out,
      padding 0.3s ease-in-out;
    padding: 0 $spacing-md;
  }

  &:hover {
    .card__presentation {
      max-height: 200px;
      opacity: 1;
      padding: $spacing-sm $spacing-md $spacing-md;
    }
  }
}
</style>

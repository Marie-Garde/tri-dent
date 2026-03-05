<template>
  <div
    class="card"
    :class="{
      'card--doctor': status !== 'Assistante',
      'card--expandable': expandable,
    }"
  >
    <div class="card__image-container">
      <img
        :src="image"
        :alt="name"
        class="card__image"
        width="230"
        height="230"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div
      class="card__name-container"
      :class="{ 'card__name-container--doctor': status !== 'Assistante' }"
    >
      <div class="card__name">
        {{ name }}
      </div>
      <div v-if="description" class="card__presentation">
        {{ description }}
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
    description?: string;
    expandable?: boolean;
  }>(),
  {
    expandable: false,
  },
);
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  max-width: 230px;
  border: 1px solid $color-yellow;
  border-radius: $border-radius;
  background-color: $color-white;
  padding-bottom: 82px;
  box-shadow: 0 5px 5px $color-grey;

  &--expandable {
    flex: 1 1 200px;
    max-width: 296px;
    min-width: 250px;

    @media (max-width: 1024px) {
      flex: 1 1 180px;
      max-width: 220px;
      min-width: 180px;
    }
  }

  &--doctor {
    border-color: $color-green;
  }

  &__image-container {
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
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
    background-color: $color-yellow-transparent;
    border-radius: 0 0 4px 4px;
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
    padding: 0 $spacing-md;
    text-align: center;
    font-size: 20px;

    @media (max-width: 1024px) {
      font-size: 16px;
      height: 70px;
      padding: 0 $spacing-sm;
    }
  }

  &__presentation {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    text-align: center;
    font-size: 14px;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out,
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

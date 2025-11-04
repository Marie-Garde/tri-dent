<template>
  <div class="side-text-image" :class="{ 'side-text-image--rtl': rtl }">
    <div class="side-text-image__content">
      <img
        :src="elipse"
        alt="Elipse décorative"
        class="side-text-image__elipse"
        aria-hidden="true"
      />
      <div>
        <slot name="content"></slot>
      </div>
    </div>

    <!-- zone image : on utilise la prop `img` comme background -->
    <div
      class="side-text-image__image"
      :style="img ? { backgroundImage: `url(${img})` } : undefined"
    >
      <!-- élément caché visuellement mais accessible pour fournir un alt aux lecteurs d'écran -->
      <img v-if="img" :src="img" :alt="imgAlt || ''" class="visually-hidden" />
      <!-- slot image optionnel : garde la flexibilité si on veut override -->
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import elipse from "~/assets/images/SideTextImage/elipse.png";

withDefaults(
  defineProps<{
    rtl?: boolean;
    img?: string;
    imgAlt?: string;
  }>(),
  {
    rtl: false,
    img: "",
    imgAlt: "",
  }
);
</script>

<style lang="scss" scoped>
.side-text-image {
  display: flex;
  gap: $spacing-lg;
  align-items: center;

  &--rtl {
    flex-direction: row-reverse;
  }

  &__elipse {
    height: 430px;
    margin-right: 3rem;
  }

  &__content {
    display: flex;
  }

  &__image {
    height: 450px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .side-text-image__content,
  .side-text-image__image {
    flex: 1;
  }
}

/* Visually hidden but accessible to screen readers */
.visually-hidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
</style>

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

    <div class="side-text-image__image">
      <slot name="image">
        <img :src="img" :alt="imgAlt" />
      </slot>
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
  },
);
</script>

<style lang="scss" scoped>
.side-text-image {
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  &--rtl {
    flex-direction: row-reverse;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  &__elipse {
    height: 430px;
    margin-right: 3rem;
    @media (max-width: 767px) {
      margin-right: $spacing-md;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 430px;

    img {
      height: 100%;
      object-fit: contain;
    }
  }
}

.side-text-image__content,
.side-text-image__image {
  flex: 0 0 50%;
  width: 50%;
}
</style>

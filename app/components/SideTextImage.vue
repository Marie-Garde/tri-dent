<template>
  <div class="side-text-image" :class="{ 'side-text-image--rtl': rtl }">
    <div class="side-text-image__content">
      <img
        :src="elipse"
        alt="Elipse décorative"
        class="side-text-image__elipse"
        aria-hidden="true"
        width="60"
        height="410"
        loading="lazy"
        decoding="async"
      />
      <div class="side-text-image__slot">
        <slot name="content"></slot>
      </div>
    </div>

    <div class="side-text-image__image">
      <slot name="image">
        <img :src="img" :alt="imgAlt" width="500" height="430" loading="lazy" decoding="async" />
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

  @media (max-width: 1024px) {
    gap: $spacing-md;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  &__slot {
    flex: 1;
    min-width: 0;
  }

  &--rtl {
    flex-direction: row-reverse;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  &__elipse {
    height: 410px;
    margin-right: 3rem;
    margin-left: 5px;

    @media (max-width: 1024px) {
      height: 300px;
      margin-right: $spacing-lg;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 430px;

    @media (max-width: 1024px) {
      height: 320px;
    }

    @media (max-width: 767px) {
      width: 100%;
    }

    img {
      height: 100%;
      object-fit: contain;

      @media (max-width: 1024px) {
        object-fit: cover;
        border-radius: $border-radius-lg;
      }

      @media (max-width: 767px) {
        width: 100%;
        margin: 20px 0;
      }
    }
  }
}

.side-text-image__content,
.side-text-image__image {
  flex: 0 0 50%;
  width: 50%;
  @media (max-width: 767px) {
    flex: 0 0 100%;
    width: 100%;
  }
}
</style>

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
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import elipse from "~/assets/images/SideTextImage/elipse.png";

withDefaults(
  defineProps<{
    rtl?: boolean;
  }>(),
  {
    rtl: false,
  }
);
</script>

<style lang="scss" scoped>
.side-text-image {
  display: flex;
  gap: $spacing-lg;
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
  }
}

.side-text-image__content,
.side-text-image__image {
  flex: 1;
}
</style>

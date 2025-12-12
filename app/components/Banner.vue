<template>
  <div class="page-banner" :style="bannerStyle">
    <div class="page-banner__content">
      <h1>{{ title }}</h1>
      <Divider :light="light" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from "~/components/Divider.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    image: string;
    light?: boolean;
  }>(),
  {
    light: false,
  }
);

const bannerStyle = computed(() => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
}));
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.page-banner {
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $color-white-soft;
    text-align: center;

    h1 {
      font-size: 36px;
      font-weight: 700;
      margin: 0;
      color: $color-white-soft;
    }
  }
}

@media (max-width: 768px) {
  .page-banner__content h1 {
    font-size: 24px;
  }
}
</style>

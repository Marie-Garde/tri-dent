<template>
  <a
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="button"
    :class="{
      'button--primary': variant === 'primary',
      'button--secondary': variant === 'secondary',
    }"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
interface Props {
  href: string;
  target?: "_blank" | "_self";
  variant?: "primary" | "secondary";
}

withDefaults(defineProps<Props>(), {
  target: "_self",
  variant: "primary",
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/scss/variables" as *;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.button--primary {
  background-color: $color-cta;
  color: $color-dark;

  &:hover {
    background-color: color.adjust($color-cta, $lightness: 90%);
  }
}

.button--secondary {
  background-color: $color-secondary;
  color: $color-dark;

  &:hover {
    background-color: color.adjust($color-secondary, $lightness: 90%);
  }
}
</style>

<template>
  <div :class="['divider', { 'divider--light': light }]" />
</template>

<script setup>
const props = defineProps({
  light: { type: Boolean, default: false },
});
const { light } = props;
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.divider {
  border-bottom: 2px solid $color-darkblue;
  margin: $spacing-md;
  width: 120px;
}

.divider--light {
  border-bottom-color: $color-white;
}
</style>

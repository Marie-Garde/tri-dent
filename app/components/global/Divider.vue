<template>
  <div
    :class="[
      'divider',
      { 'divider--light': light, 'divider--vertical': vertical },
    ]"
  />
</template>

<script setup lang="ts">
defineProps({
  light: { type: Boolean, default: false },
  vertical: { type: Boolean, default: false },
});
</script>

<style lang="scss" scoped>
.divider {
  border-bottom: 2px solid $color-darkblue;
  margin: $spacing-md;
  width: 120px;
}

.divider--light {
  border-bottom-color: $color-white;
}

.divider--vertical {
  border-left: 2px solid $color-darkblue;
  height: 350px;
  width: 0;
  border-bottom: none;
  margin: $spacing-md 0;
}

.divider--light.divider--vertical {
  border-left-color: $color-white;
}
</style>

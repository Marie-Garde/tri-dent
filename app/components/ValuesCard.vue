<template>
  <div class="value-card">
    <img :src="imageSrc" :alt="text" class="value-card__icon" width="120" height="120" loading="lazy" decoding="async" />
    <p class="value-card__text">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  imageSrc: string;
  text: string;
}
const props = defineProps<Props>();
const { imageSrc, text } = props;
</script>

<style lang="scss" scoped>
.value-card {
  flex: 1;
  max-width: 380px;
  height: 264px;
  padding: $spacing-md;
  border-radius: $border-radius-lg;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: $spacing-md;
  background-color: $color-green;
  box-shadow: 0 5px 5px $color-grey;
}

.value-card__icon {
  height: 120px;
  object-fit: contain;
}

.value-card__text {
  margin: 0;
  font-size: 24px;
  color: $color-yellow;
  text-align: center;
}
</style>

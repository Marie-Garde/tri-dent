<template>
  <div class="articles-search">
    <div class="search-box">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher un article"
        class="search-input"
      />
      <span class="search-icon">🔍</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchQuery = defineModel<string>({ default: "" });

defineProps<{
  filteredCount?: number;
}>();
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.articles-search {
  margin-bottom: $spacing-lg;
  display: flex;
  justify-content: end;
}

.search-box {
  position: relative;
  width: 30%;
}

.search-input {
  width: 80%;
  padding: $spacing-sm $spacing-md;
  padding-right: 40px;
  border: 2px solid $color-grey-light;
  border-radius: $border-radius;
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: $color-primary;
  }

  &::placeholder {
    color: $color-darkblue;
  }
}

.search-icon {
  position: absolute;
  right: $spacing-md;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 18px;
}

.search-results {
  margin-top: $spacing-sm;
  color: $color-darkblue;
}
</style>

<template>
  <div class="pagination">
    <button
      class="pagination__arrow"
      :disabled="currentPage === 1"
      @click="$emit('update:currentPage', 1)"
      title="Première page"
    >
      «
    </button>

    <button
      class="pagination__arrow"
      :disabled="currentPage === 1"
      @click="$emit('update:currentPage', currentPage - 1)"
      title="Page précédente"
    >
      ‹
    </button>

    <div class="pagination__info">
      Page {{ currentPage }} sur {{ totalPages }}
    </div>

    <button
      class="pagination__arrow"
      :disabled="currentPage === totalPages"
      @click="$emit('update:currentPage', currentPage + 1)"
      title="Page suivante"
    >
      ›
    </button>

    <button
      class="pagination__arrow"
      :disabled="currentPage === totalPages"
      @click="$emit('update:currentPage', totalPages)"
      title="Dernière page"
    >
      »
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number;
  totalPages: number;
}>();

defineEmits<{
  "update:currentPage": [page: number];
}>();
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.pagination {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: $spacing-sm;
  margin-top: $spacing-xl;
  padding: $spacing-md 0;

  &__arrow {
    min-width: 44px;
    height: 44px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:not(:disabled) {
      color: $color-primary;
      transform: scale(1.1);
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  &__info {
    padding: 0 $spacing-md;
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
  }
}

@media (max-width: 768px) {
  .pagination {
    justify-content: center;
    &__arrow {
      min-width: 40px;
      height: 40px;
      font-size: 24px;
    }

    &__info {
      font-size: 14px;
      padding: 0 $spacing-sm;
    }
  }
}
</style>

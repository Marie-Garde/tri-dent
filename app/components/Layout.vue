<template>
  <div class="layout">
    <div class="layout__container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  min-height: 100%;
}

.layout__container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
}
</style>

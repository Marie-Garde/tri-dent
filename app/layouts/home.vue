<template>
  <main>
    <NavbarHome />
    <div class="layout">
      <div class="layout__container">
        <slot></slot>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
.layout {
  width: 100%;
  min-height: 100%;
}

.layout__container {
  width: 100%;
  height: 100%;
}
</style>

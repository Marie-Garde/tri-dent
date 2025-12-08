<template>
  <main>
    <Navbar />
    <div class="layout">
      <div class="layout__container">
        <slot></slot>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

main {
  position: relative;
}

.layout {
  width: 100%;
  min-height: 100%;
  margin-top: -134px;
}

.layout__container {
  /*max-width: 1280px;*/
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
</style>

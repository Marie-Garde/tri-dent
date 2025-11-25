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

<script setup lang="ts">
import NavbarHome from "~/components/NavbarHome.vue";
import Footer from "~/components/Footer.vue";
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
.layout {
  width: 100%;
  min-height: 100%;
}

.layout__container {
  /*max-width: 1280px;
  margin: 0 auto;*/
  width: 100%;
  height: 100%;
}
</style>

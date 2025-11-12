<template>
  <div>
    <!-- Accessibility feature -->
    <NuxtRouteAnnouncer />
    <!-- Exemple de layout global -->
    <Navbar />
    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <div>
    <h1>À propos</h1>
    <p>Site multipage en SSG construit avec Nuxt 4.2.0</p>
    <button @click="count++">Count: {{ count }}</button>
    <NuxtLink to="/">Retour à l’accueil</NuxtLink>
  </div>
</template>
<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <div>
    <HeroBanner />
    <div class="home__layout">
      <Welcome />
      <FindUs />
      <Team />
    </div>
    <div class="full-width-image">
      <img
        src="/images/home/cabinet-indoor.webp"
        alt="Vue intérieure du cabinet dentaire Tri-Dent à Cornebarrieu"
        width="1280"
        height="400"
        loading="lazy"
        decoding="async"
      />
    </div>
    <MedicalInformations />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
});

useIndexSeo();
</script>

<style lang="scss" scoped>
.home__layout {
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0 $spacing-lg;
  }
}

.full-width-image {
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    display: block;
    @media (max-width: 1024px) {
      height: 30vh;
      width: 100%;
      object-fit: cover;
    }

    @media (max-width: 767px) {
      height: 20vh;
    }
  }
}
</style>

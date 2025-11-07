<template>
  <div>
    <div class="herobanner">
      <div class="herobanner__content">
        <div class="logo"><img :src="logo" alt="Logo Tri-Dent" /></div>
        <h1>Cabinet dentaire Tri-Dent</h1>
      </div>
    </div>

    <Layout>
      <Welcome />
      <FindUs />
      <Team />
      <div class="full-width-image">
        <img :src="indoor" alt="Indoor Image" />
      </div>
      <MedicalInformations />
    </Layout>
  </div>
</template>

<script setup lang="ts">
import indoor from "~/assets/images/home/cabinet-indoor.png";
import logo from "~/assets/images/logo trident.svg";
import Welcome from "~/components/containers/Welcome.vue"; // import explicite
import FindUs from "~/components/containers/FindUs.vue";
import Team from "~/components/containers/Team.vue";
import MedicalInformations from "~/components/containers/MedicalInformations.vue";
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "sass:color";

.herobanner {
  width: 100%;
  height: 100vh;
  background-image: url("~/assets/images/home/hero_home.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;

  &__content {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;

    .logo {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 250px;
      width: 250px;
      display: flex;
      align-items: flex-end;
      background-color: $color-white;
      clip-path: polygon(0 10%, 0% 100%, 100% 100%);
      img {
        width: 60%;
      }
    }

    h1 {
      // todo: typo
      margin: 0;
      text-align: right;
      width: 100%;
      font-size: 64px;
      padding: $spacing-lg $spacing-md;
      background: linear-gradient(to left, #ffffff90 75%, transparent);
    }
  }
}

.full-width-image {
  width: 100%;
  img {
    width: 100%;
    height: auto;
    display: block; // Remove extra space below image
  }
}
</style>

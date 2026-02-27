<template>
  <div>
    <div class="herobanner">
      <div class="herobanner__content">
        <div class="logo"><img :src="logo" alt="Logo Tri-Dent" /></div>
        <h1 class="stroke">Cabinet dentaire Tri-Dent</h1>
      </div>
    </div>
    <div class="home__layout">
      <Welcome />
      <FindUs />
      <Team />
    </div>
    <div class="full-width-image">
      <img :src="indoor" alt="Indoor Image" loading="lazy" decoding="async" />
    </div>
    <MedicalInformations />
  </div>
</template>

<script setup lang="ts">
import indoor from "~/assets/images/home/cabinet-indoor.png";
import logo from "~/assets/images/logo trident.svg";
import Welcome from "~/components/containers/Welcome.vue";
import FindUs from "~/components/containers/FindUs.vue";
import Team from "~/components/containers/Team.vue";
import MedicalInformations from "~/components/containers/MedicalInformations.vue";
import { useIndexSeo } from "~/composables/useIndexSeo";

definePageMeta({
  layout: "home",
});

useIndexSeo();
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

    @media (max-width: 1024px) {
      height: 250px;
    }

    @media (max-width: 767px) {
      height: 200px;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }

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
      animation: logoSlideIn 1s ease-out;

      @media (max-width: 1024px) {
        height: 200px;
        width: 200px;
      }

      @media (max-width: 767px) {
        clip-path: polygon(0 50%, 0% 100%, 50% 100%);
      }

      img {
        width: 60%;
        animation: logoFadeIn 1s ease-out 0.3s backwards;

        @media (max-width: 1024px) {
          width: 50%;
        }

        @media (max-width: 767px) {
          width: 30%;
        }
      }
    }

    h1 {
      text-align: right;
      width: 100%;
      padding: $spacing-lg;
      background: linear-gradient(to left, #ffffff90 85%, transparent);
      animation: textReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;

      @media (max-width: 1024px) {
        font-size: 3.5rem;
        padding: $spacing-md $spacing-lg;
      }

      @media (max-width: 767px) {
        font-size: 4.5rem;
        line-height: 1.3;
        padding: $spacing-sm $spacing-md;
        padding-left: 160px;
        background: linear-gradient(to left, #ffffff90 40%, transparent);
      }
    }
  }
}

@keyframes textReveal {
  from {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
}

@keyframes logoSlideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes logoFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

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

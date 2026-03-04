<template>
  <div class="herobanner">
    <div class="herobanner__content">
      <div class="logo">
        <img
          src="/images/logo-trident.svg"
          alt="Logo Tri-Dent"
          width="150"
          height="150"
          loading="eager"
          fetchpriority="high"
        />
      </div>
      <h1 class="stroke">Cabinet dentaire Tri-Dent</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/images/home/hero_home.webp",
    },
  ],
});
</script>

<style lang="scss" scoped>
.herobanner {
  width: 100%;
  height: 100vh;
  background-image: url("/images/home/hero_home.webp");
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
</style>

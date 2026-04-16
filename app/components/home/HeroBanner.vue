<template>
  <div class="herobanner">
    <div class="herobanner__content">
      <div class="logo">
        <img
          v-if="isMobile"
          src="/images/logo-trident.svg"
          alt="Logo Tri-Dent"
          width="150"
          height="100"
          loading="eager"
          fetchpriority="high"
        />
        <img
          v-else
          src="/images/logo-trident.svg"
          alt="Logo Tri-Dent"
          width="150"
          height="150"
          loading="eager"
          fetchpriority="high"
        />
      </div>
      <h1 class="stroke">
        <span>Cabinet</span> <span>dentaire</span> <span>Tri-Dent</span>
      </h1>
    </div>
    <button
      type="button"
      class="herobanner__scroll"
      aria-label="Défiler vers le bas"
      @click="scrollDown"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 32"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="2" x2="12" y2="24" />
        <polyline points="5 20 12 28 19 20" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useIsMobile } from "~/reactives/isMobile";

useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/images/home/hero_home.webp",
    },
  ],
});

const isMobile = useIsMobile();

const scrollDown = () => {
  const navbarHeight = window.innerWidth <= 1024 ? 70 : 134;
  window.scrollBy({
    top: window.innerHeight - navbarHeight,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.herobanner {
  width: 100%;
  height: 100vh;
  height: 100svh;
  background-image: url("/images/home/hero_home.webp");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  position: relative;

  &__scroll {
    position: absolute;
    bottom: $spacing-lg;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 0;
    color: $color-white;
    cursor: pointer;
    z-index: 2;
    animation: scrollArrowBounce 1.8s ease-in-out infinite;

    svg {
      width: 36px;
      height: 56px;
      filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
      transition: transform 0.2s ease;
    }

    &:hover svg {
      transform: scale(1.15);
    }

    &:focus-visible {
      outline: 2px solid $color-white;
      outline-offset: 4px;
      border-radius: 50%;
    }
  }

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
        clip-path: polygon(0 35%, 0% 100%, 65% 100%);
        bottom: -20px;
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
        width: 90%;
        font-size: 3rem;
        line-height: 1.3;
        padding: $spacing-sm $spacing-md 100px 140px;
        background: linear-gradient(to left, #ffffff90 40%, transparent);

        span {
          display: block;
        }
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

@keyframes scrollArrowBounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
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

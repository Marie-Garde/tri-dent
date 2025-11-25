<template>
  <header :class="['navbar', { 'navbar--scrolled': isScrolled }]">
    <nav class="navbar__container">
      <NuxtLink to="/" class="navbar__logo">
        <img :src="logo" alt="Logo Tri-Dent" />
      </NuxtLink>

      <!-- Bouton burger (mobile uniquement) -->
      <button class="navbar__toggle" @click="toggleMenu" aria-label="Menu">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>

      <!-- Menu principal -->
      <ul class="navbar__menu" :class="{ open: isOpen }">
        <li>
          <NuxtLink @click="toggleMenu()" to="/notre-approche"
            >Notre approche</NuxtLink
          >
        </li>
        <li>
          <NuxtLink @click="toggleMenu()" to="/notre-approche"
            >Informations médicales</NuxtLink
          >
        </li>

        <!-- Logo centré uniquement sur desktop -->
        <NuxtLink to="/" class="navbar__logo--center">
          <img :src="logo" alt="Logo Tri-Dent" />
        </NuxtLink>

        <li>
          <NuxtLink @click="toggleMenu()" to="/contact"
            >Contactez-nous</NuxtLink
          >
        </li>
        <li class="navbar__urgent">
          <NuxtLink @click="toggleMenu()" to="/notre-approche">
            <span class="navbar__icon">
              <img :src="notificationImportant" alt="Urgences" />
            </span>
            Urgences
          </NuxtLink>
        </li>
        <li class="navbar__cta-mobile">
          <NuxtLink @click="toggleMenu()" to="/notre-approche"
            >Prendre rendez-vous</NuxtLink
          >
        </li>
      </ul>

      <!-- CTA desktop -->
      <NuxtLink to="/notre-approche" class="navbar__cta">
        Prendre rendez-vous
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import logo from "~/assets/images/logo trident light.svg";
import notificationImportant from "~/assets/images/notification_important.svg";

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// visible après scroll -> rename en isScrolled
const isScrolled = ref(false);
const SCROLL_THRESHOLD = 20;

const onScroll = () => {
  isScrolled.value = window.scrollY > SCROLL_THRESHOLD;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "sass:color";

/* Navbar : toujours visible, transition entre état transparent (texte blanc) et scrolled (fond blanc, texte noir) */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: "Nunito";

  /* Always visible: transparent background + white text by default */
  background-color: transparent;
  color: $color-white;
  transition: background-color 0.25s ease, color 0.25s ease,
    box-shadow 0.2s ease;

  /* Quand scroll -> background blanc et texte noir */
  &.navbar--scrolled {
    color: $color-text;
  }

  &__container {
    /* default: transparent / pas de bordure ni box-shadow */
    border-bottom: none;
    background-color: transparent;
    box-shadow: none;
    max-width: 100%;
    height: 134px;
    margin: 0 auto;
    padding: 0 $spacing-lg 0 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 900px) {
      height: 70px;
      padding: 0 $spacing-lg;
    }
  }

  /* when scrolled, apply visible styling (white background + subtle shadow + border) */
  &.navbar--scrolled .navbar__container {
    border-bottom: 1px solid color.adjust($color-dark, $lightness: 70%);
    background-color: $color-white;
    box-shadow: 0 2px 4px rgba($color-dark, 0.12);
  }

  /* Logo principal (toujours visible) */
  &__logo {
    img {
      display: none;

      @media (max-width: 900px) {
        display: block;
        height: 80px;
      }
    }

    @media (max-width: 900px) {
      position: relative;
      z-index: 1100;
    }
  }

  /* Logo centré uniquement sur desktop */
  &__logo--center {
    display: flex;
    align-items: center;

    img {
      height: 134px;
      width: auto;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-lg;
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;

    /* links inherit navbar color (white by default, black when scrolled) */
    a {
      color: inherit;
      text-decoration: none;
      font-size: $spacing-md;
      transition: color 0.2s ease;

      &:hover {
        color: $color-primary;
      }
    }

    /* Mobile : menu masqué puis déroulant */
    @media (max-width: 900px) {
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      background-color: $color-white;
      flex-direction: column;
      align-items: center;
      gap: $spacing-md;
      padding: $spacing-lg 0;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease-in-out;

      &.open {
        max-height: 500px;
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  &__urgent a {
    display: flex;
    align-items: center;

    &:hover {
      color: color.adjust($color-danger, $lightness: 10%);
    }
  }

  &__icon {
    width: 30px;
    height: 26px;
    margin-right: 6px;
  }

  /* CTA reste visuellement distinct (reste en blanc sur son fond foncé) */
  &__cta {
    width: 180px;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: $color-darkblue;
    color: #fff;
    border-radius: $border-radius;
    text-decoration: none;
    font-size: $spacing-md;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: color.adjust($color-darkblue, $lightness: 5%);
    }

    @media (max-width: 900px) {
      display: none;
    }
  }

  &__cta-mobile {
    display: none;
    @media (max-width: 900px) {
      display: block;
      a {
        display: block;
        width: 200px;
        padding: 16px 0;
        background-color: $color-darkblue;
        color: white;
        text-align: center;
        border-radius: $border-radius;
      }
    }
  }

  &__toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
    height: 22px;
    width: 30px;
    padding: 0;
    z-index: 1100;

    span {
      display: block;
      height: 3px;
      background-color: $color-dark;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    span.open:nth-child(1) {
      transform: rotate(45deg) translate(3px, 8px);
    }
    span.open:nth-child(2) {
      opacity: 0;
    }
    span.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -10px);
    }

    @media (max-width: 900px) {
      display: flex;
    }
  }
}
</style>

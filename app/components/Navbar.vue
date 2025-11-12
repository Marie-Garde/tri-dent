<template>
  <header class="navbar">
    <nav class="navbar__container">
      <!-- Logo toujours visible -->
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
        <li><NuxtLink to="/">Notre approche</NuxtLink></li>
        <li><NuxtLink to="/about">Informations médicales</NuxtLink></li>

        <!-- Logo centré uniquement sur desktop -->
        <NuxtLink to="/" class="navbar__logo--center">
          <img :src="logo" alt="Logo Tri-Dent" />
        </NuxtLink>

        <li><NuxtLink to="/about">Contactez-nous</NuxtLink></li>
        <li class="navbar__urgent">
          <NuxtLink to="/about">
            <span class="navbar__icon">
              <img :src="notificationImportant" alt="Urgences" />
            </span>
            Urgences
          </NuxtLink>
        </li>
        <li class="navbar__cta-mobile">
          <NuxtLink to="/about">Prendre rendez-vous</NuxtLink>
        </li>
      </ul>

      <!-- CTA desktop -->
      <NuxtLink to="/about" class="navbar__cta"> Prendre rendez-vous </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from "~/assets/images/logo trident.svg";
import notificationImportant from "~/assets/images/notification_important.svg";

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "sass:color";

.navbar {
  border-bottom: 1px solid color.adjust($color-dark, $lightness: 70%);
  background-color: $color-white;
  box-shadow: 0 2px 4px rgba($color-dark, 0.25);
  font-family: "Nunito";
  position: relative;
  z-index: 1000;

  &__container {
    max-width: 1200px;
    height: 134px;
    margin: 0 auto;
    padding: $spacing-md $spacing-lg;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 900px) {
      height: 70px;
    }
  }

  /* Logo principal (toujours visible) */
  &__logo {
    img {
      display: none;

      @media (max-width: 900px) {
        display: block;
        height: 110px;
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
    gap: $spacing-md;
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;

    a {
      color: $color-text;
      text-decoration: none;
      font-size: 20px;
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
      box-shadow: 0 8px 16px rgba($color-dark, 0.15);

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

  &__cta {
    width: 140px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #144f72;
    color: #fff;
    border-radius: $border-radius;
    text-decoration: none;
    font-size: 20px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: color.adjust(#144f72, $lightness: 5%);
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
        background-color: #144f72;
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
      transform: rotate(45deg) translate(5px, 5px);
    }
    span.open:nth-child(2) {
      opacity: 0;
    }
    span.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    @media (max-width: 900px) {
      display: flex;
    }
  }
}
</style>

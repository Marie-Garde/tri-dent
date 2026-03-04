<template>
  <header :class="['navbar', { 'navbar--visible': isVisible }]">
    <nav class="navbar__container">
      <NuxtLink to="/" class="navbar__logo">
        <img :src="logo" alt="Logo Tri-Dent" />
      </NuxtLink>

      <button class="navbar__toggle" @click="toggleMenu" aria-label="Menu">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>

      <ul class="navbar__menu" :class="{ open: isOpen }">
        <li>
          <NuxtLink @click="toggleMenu()" to="/notre-approche"
            >Notre approche</NuxtLink
          >
        </li>
        <li>
          <NuxtLink @click="toggleMenu()" to="/informations-medicales"
            >Informations médicales</NuxtLink
          >
        </li>

        <NuxtLink to="/" class="navbar__logo--center">
          <img :src="logo" alt="Logo Tri-Dent" />
        </NuxtLink>

        <li>
          <NuxtLink @click="toggleMenu()" to="/contact"
            >Contactez-nous</NuxtLink
          >
        </li>
        <li class="navbar__urgent">
          <NuxtLink @click="toggleMenu()" to="/urgence">
            <span class="navbar__icon">
              <img :src="notificationImportant" alt="Urgences" />
            </span>
            Urgences
          </NuxtLink>
        </li>
        <li class="navbar__cta-mobile">
          <NuxtLink @click="toggleMenu()" to="/prendre-rendez-vous"
            >Prendre rendez-vous</NuxtLink
          >
        </li>
      </ul>

      <NuxtLink to="/prendre-rendez-vous" class="navbar__cta">
        Prendre rendez-vous
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import logo from "~/assets/images/logo-trident.svg";
import notificationImportant from "~/assets/images/notification_important.svg";

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const isVisible = ref(false);
const SCROLL_THRESHOLD = 20;

const onScroll = () => {
  isVisible.value = window.scrollY > SCROLL_THRESHOLD;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style lang="scss" scoped>
@use "sass:color";

@keyframes slideFromTop {
  from {
    transform: translateY(-100vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 0;
  font-family: "Nunito";

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease, box-shadow 0.2s ease;

  &.navbar--visible {
    opacity: 1;
    pointer-events: auto;
    animation: slideFromTop 0.5s ease forwards;
  }

  &__container {
    border-bottom: 1px solid color.adjust($color-dark, $lightness: 70%);
    background-color: $color-white;
    box-shadow: 0 2px 4px rgba($color-dark, 0.25);
    max-width: 100%;
    height: 134px;
    margin: 0 auto;
    padding: 0 $spacing-lg 0 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 1024px) {
      height: 70px;
      padding: 0 $spacing-lg;
    }
  }

  &__logo {
    img {
      display: none;

      @media (max-width: 1024px) {
        display: block;
        height: 80px;
      }
    }

    @media (max-width: 1024px) {
      position: relative;
      z-index: 1100;
    }
  }

  &__logo--center {
    display: flex;
    align-items: center;

    img {
      height: 134px;
      width: auto;
    }

    @media (max-width: 1024px) {
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

    a {
      color: $color-text;
      text-decoration: none;
      font-size: $spacing-md;
      transition: color 0.2s ease;

      &:hover {
        color: $color-primary;
      }

      &.router-link-exact-active {
        font-weight: bold;
      }
    }

    @media (max-width: 1024px) {
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

  &__cta {
    width: 180px;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #144f72;
    color: #fff;
    border-radius: $border-radius;
    text-decoration: none;
    font-size: $spacing-md;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: color.adjust(#144f72, $lightness: 5%);
    }

    &.router-link-exact-active {
      font-weight: normal;
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__cta-mobile {
    display: none;
    @media (max-width: 1024px) {
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
      transform: rotate(45deg) translate(3px, 8px);
    }
    span.open:nth-child(2) {
      opacity: 0;
    }
    span.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -10px);
    }

    @media (max-width: 1024px) {
      display: flex;
    }
  }
}
</style>

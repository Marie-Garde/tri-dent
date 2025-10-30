<template>
  <header class="navbar">
    <nav class="navbar__container">
      <ul class="navbar__menu navbar__menu--left">
        <li><NuxtLink to="/">Notre approche</NuxtLink></li>
        <li><NuxtLink to="/about">Informations médicales</NuxtLink></li>
      </ul>

      <NuxtLink to="/" class="navbar__logo">
        <img :src="logo" alt="Logo Tri-Dent" />
      </NuxtLink>

      <ul class="navbar__menu navbar__menu--right">
        <li><NuxtLink to="/about">Contactez-nous</NuxtLink></li>
        <li class="navbar__urgent">
          <NuxtLink to="/about">
            <span class="navbar__icon">🚨</span> Urgences
          </NuxtLink>
        </li>
      </ul>

      <NuxtLink to="/about" class="navbar__cta"> Prendre rendez-vous </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import logo from "~/assets/images/logo trident.svg";
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "sass:color";

.navbar {
  border-bottom: 1px solid color.adjust($color-dark, $lightness: 70%);
  background-color: #fff;
  box-shadow: 0 2px 4px rgba($color-dark, 0.05);

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: $spacing-md $spacing-lg;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: $spacing-md;
  }

  &__menu {
    display: flex;
    gap: $spacing-lg;
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      color: $color-text;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;

      &:hover {
        color: $color-primary;
      }
    }

    &--left {
      margin-right: auto;
    }

    &--right {
      margin-left: auto;
    }
  }

  &__logo img {
    height: 45px;
    width: auto;
  }

  &__urgent a {
    color: $color-danger;
    font-weight: 600;

    &:hover {
      color: color.adjust($color-danger, $lightness: 10%);
    }
  }

  &__cta {
    background-color: $color-dark;
    color: #fff;
    padding: $spacing-sm $spacing-md;
    border-radius: $border-radius;
    text-decoration: none;
    font-weight: 600;
    margin-left: $spacing-md;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: color.adjust($color-dark, $lightness: 5%);
    }
  }
}
</style>

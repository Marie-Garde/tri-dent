<template>
  <header class="navbar">
    <nav class="navbar__container">
      <ul class="navbar__menu">
        <li><NuxtLink to="/">Notre approche</NuxtLink></li>
        <li><NuxtLink to="/about">Informations médicales</NuxtLink></li>

        <NuxtLink to="/" class="navbar__logo">
          <img :src="logo" alt="Logo Tri-Dent" />
        </NuxtLink>

        <li><NuxtLink to="/about">Contactez-nous</NuxtLink></li>
        <li class="navbar__urgent">
          <NuxtLink to="/about">
            <span class="navbar__icon"
              ><img :src="notificationImportant" alt="Urgences"
            /></span>
            Urgences
          </NuxtLink>
        </li>
      </ul>

      <NuxtLink to="/about" class="navbar__cta"> Prendre rendez-vous </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import logo from "~/assets/images/logo trident.svg";
import notificationImportant from "~/assets/images/notification_important.svg";
</script>

<!-- todo: responsive -->
<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "sass:color";

.navbar {
  border-bottom: 1px solid color.adjust($color-dark, $lightness: 70%);
  background-color: $color-white;
  box-shadow: 0 2px 4px rgba($color-dark, 0.25);
  font-family: "Nunito";

  &__container {
    max-width: 1200px;
    height: 134px;
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
    align-items: center;
    gap: $spacing-lg;
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      color: $color-text;
      text-decoration: none;
      font-size: 20px;
      transition: color 0.2s ease;

      &:hover {
        color: $color-primary;
      }
    }
  }

  &__logo img {
    height: 134px;
    width: auto;
  }

  &__urgent a {
    display: flex;

    &:hover {
      color: color.adjust($color-danger, $lightness: 10%);
    }
  }

  &__icon {
    width: 30px;
    height: 26px;
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
  }
}
</style>

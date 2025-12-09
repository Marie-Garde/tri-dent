<template>
  <div class="info">
    <div class="info__banner">
      <div class="info__banner__content">
        <h1>Informations médicales</h1>
        <Divider light />
      </div>
    </div>
    <div class="info__container">
      <div class="info__sidebar">
        <ul>
          <li>
            <NuxtLink to="/informations-medicales/thematique-1"
              >Thématique 1</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/informations-medicales/thematique-2"
              >Thématique 2</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/informations-medicales/thematique-3"
              >Thématique 3</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="info__content">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import Divider from "~/components/Divider.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.info {
  &__banner {
    width: 100%;
    height: 60vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("~/assets/images/informations-medicales/banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      max-width: 800px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $color-white-soft;

      h1 {
        font-size: 36px;
        font-weight: 700;
        margin: 0;
        color: $color-white-soft;
      }
    }
  }

  &__container {
    display: flex;
    max-width: 1280px;
    margin: $spacing-lg auto;
    gap: $spacing-lg;
  }

  &__sidebar {
    flex: 0 0 20%;
    background-color: $color-white;
    padding: $spacing-md;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: $border-radius;
    height: fit-content;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;

      li {
        border-bottom: 1px solid $color-grey-light;

        &:last-child {
          border-bottom: none;
        }

        a {
          display: block;
          padding: $spacing-sm $spacing-md;
          cursor: pointer;
          text-decoration: none;
          color: inherit;

          &:hover {
            background-color: $color-bg-blue;
          }

          &.router-link-active {
            background-color: $color-bg-blue;
            font-weight: bold;
          }
        }
      }
    }
  }

  &__content {
    flex: 1;
    background-color: $color-white;
    padding: $spacing-md;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: $border-radius;
  }
}

@media (max-width: 768px) {
  .info {
    &__banner__content h1 {
      font-size: 24px;
    }

    &__container {
      flex-direction: column;
      margin: $spacing-md;
    }

    &__sidebar {
      flex: 1;
    }
  }
}
</style>

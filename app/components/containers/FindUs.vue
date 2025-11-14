<template>
  <div class="find-us">
    <SideTextImage rtl :img="cabinet" imgAlt="Cabinet Tri-Dent">
      <template #content>
        <h2>Nous trouver ?</h2>
        <Divider />
        <p class="find-us__text">
          <span class="find-us__info">
            <Icon name="mdi:map-marker" size="24" />
            3 Rte d'Aussonne, 31700 Cornebarrieu
          </span>
          <span class="find-us__info">
            <Icon name="mdi:email" size="24" />
            secretariat@scmtrident.fr
          </span>
          <span class="find-us__info">
            <Icon name="mdi:phone" size="24" />
            05 61 06 91 92
          </span>
          <span class="find-us__info find-us__info--hours">
            <Icon name="mdi:clock-outline" size="24" />
            lundi au jeudi 9h-12h30 14h-18h<br />
            vendredi 9h-13h 14h-17h
          </span>
        </p>
      </template>
      <template #image>
        <img
          src="/images/home/cabinet.png"
          alt="Cabinet Tri-Dent"
          class="find-us__image"
        />
      </template>
    </SideTextImage>
  </div>
</template>

<script setup lang="ts">
import cabinet from "~/assets/images/home/cabinet.png";
import Divider from "~/components/Divider.vue";
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.find-us {
  background-color: $color-bg-blue;

  &__text {
    padding-top: $spacing-md;
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    &--hours {
      align-items: flex-start;
    }
  }

  &__button {
    margin-top: $spacing-xl;
  }

  &__image {
    object-fit: cover;

    @media (max-width: 767px) {
      width: 100%;
      height: auto;
    }
  }
}
</style>

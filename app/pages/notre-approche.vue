<template>
  <div class="approche">
    <div class="approche__banner">
      <div class="approche__banner__text">
        <div class="approche__banner__text__title">
          <h1>Notre approche</h1>
          <Divider light />
        </div>
        <div class="approche__banner__text__description">
          <p>
            iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint o
          </p>
        </div>
      </div>
    </div>
    <div class="approche__valeurs">
      <h2>Les valeurs qui nous guident</h2>
      <Divider />
      <div class="approche__valeurs__cards">
        <div class="approche__valeurs__cards__line">
          <ValuesCard
            v-for="value in valuesLine1"
            :key="value.text"
            :imageSrc="value.imageSrc"
            :text="value.text"
          />
        </div>

        <div class="approche__valeurs__cards__line">
          <ValuesCard
            v-for="value in valuesLine2"
            :key="value.text"
            :imageSrc="value.imageSrc"
            :text="value.text"
          />
        </div>
      </div>
    </div>
    <div class="approche__cabinet">
      <h2>Le cabinet</h2>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint o
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
      <!-- Carousel -->
      <CarouselApproche />
    </div>
    <div class="approche__technos">
      <h2>Nos technologies phares</h2>
      <Divider />
      <!-- Carousel -->
      <div class="approche__technos-carousel">
        <CarouselTechno />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const valuesLine1 = [
  {
    imageSrc: "/images/approche/icons/search.svg",
    text: "Pratiquer dans les règles de l’art avec professionnalisme",
  },
  {
    imageSrc: "/images/approche/icons/inform.svg",
    text: "Informer clairement et obtenir un consentement éclairé",
  },
  {
    imageSrc: "/images/approche/icons/attendance.svg",
    text: "Accueillir avec bienveillance et attention",
  },
];

const valuesLine2 = [
  {
    imageSrc: "/images/approche/icons/personalization.svg",
    text: "Personnaliser la relation de soin",
  },
  {
    imageSrc: "/images/approche/icons/calendar.svg",
    text: "Assurer un suivi post-soin attentif",
  },
  {
    imageSrc: "/images/approche/icons/network.svg",
    text: "Travailler en réseau avec ses collègues",
  },
];
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "sass:color";
.approche {
  &__banner {
    padding: 0 $spacing-xl;
    height: 580px;
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
      url("~/assets/images/approche/banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__text {
      display: flex;
      max-width: 1280px;
      margin: 0 auto;
      &__title {
        flex: 2;

        h1 {
          color: $color-white-soft;
          font-size: 36px;
        }
        .divider {
          margin-left: 0;
        }
      }

      &__description {
        flex: 1;
        color: $color-white-soft;
      }
    }
  }

  &__valeurs {
    padding: $spacing-xl;
    background-image: url("~/assets/images/approche/valeurs.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    h2 {
      text-align: center;
    }
    .divider {
      margin: $spacing-md auto;
    }

    &__cards {
      margin-top: $spacing-xl;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: $spacing-lg;

      &__line {
        display: flex;
        justify-content: center;
        gap: $spacing-lg;
      }
    }
  }

  &__cabinet {
    padding: $spacing-xl;
    background-color: $color-yellow;
    h2 {
      text-align: center;
    }
    .divider {
      margin: $spacing-md auto;
    }
    p {
      max-width: 950px;
      margin: $spacing-lg auto 0 auto;
      text-align: center;
    }
  }

  &__technos {
    padding: $spacing-xl;
    background-color: $color-white;
    h2 {
      text-align: center;
    }
    .divider {
      margin: $spacing-md auto;
    }

    &-carousel {
      max-width: 1280px;
      margin: 0 auto;
    }
  }
}
</style>

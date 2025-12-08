<template>
  <div class="urgence">
    <div class="urgence__banner">
      <div class="urgence__banner__content">
        <h1>Urgence dentaire, que faire ?</h1>
        <Divider light />
      </div>
    </div>

    <div class="urgence__container">
      <div class="urgence__intro">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div class="urgence__grid">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="urgence__card"
          :class="{ 'urgence__card--right': index % 2 === 1 }"
        >
          <div class="urgence__card__header">
            <p v-if="card.preTitle">{{ card.preTitle }}</p>
            <h3>{{ card.title }}</h3>
            <p>{{ card.subTitle }}</p>
          </div>
          <div v-if="card.description" class="urgence__card__content">
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const joursFeries = [
  "2026-01-01",
  "2026-04-06",
  "2026-05-01",
  "2026-05-08",
  "2026-05-14",
  "2026-05-25",
  "2026-07-14",
  "2026-08-15",
  "2026-11-01",
  "2026-11-11",
  "2026-12-25",
];

const getThirdCard = computed(() => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
  const dateString = today.toISOString().split("T")[0]; // Format YYYY-MM-DD
  const isJourFerie = joursFeries.includes(dateString);

  // Dimanche (0) ou jour férié
  if (dayOfWeek === 0 || isJourFerie) {
    return {
      preTitle: "Si ça ne répond pas...",
      title: "Contactez le dentiste de garde",
      subTitle: "Appelez ici : 116 117",
    };
  }

  // Samedi (6)
  if (dayOfWeek === 6) {
    return {
      preTitle: "Si ça ne répond pas...",
      title: "Contactez la Girafe Toulouse",
      subTitle: "05 34 60 90 90",
    };
  }

  // Lundi à Vendredi (1-5)
  return {
    preTitle: "Si ça ne répond pas...",
    title: "Rendez-vous aux urgences dentaires",
    subTitle: "CHU Purpan - 05 61 77 22 33 | CHU Rangueil - 05 61 32 25 33",
  };
});

const cards = computed(() => [
  {
    preTitle: "",
    title: "Contactez le cabinet par téléphone",
    subTitle: "05 61 06 91 92",
  },
  {
    preTitle: "Si ça ne répond pas...",
    title: "Contactez le cabinet par email",
    subTitle:
      "secretariat@scmtrident.fr - Décrivez vos symptômes, la durée, etc.",
  },
  getThirdCard.value,
  {
    preTitle: "Sinon...",
    title: "Appelez le SAMU",
    subTitle: "15 ou 112",
  },
]);
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.urgence {
  &__banner {
    width: 100%;
    height: 60vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("~/assets/images/urgence/banner.png");
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
    max-width: 1280px;
    margin: 0 auto;
    padding: $spacing-xl;
  }

  &__intro {
    max-width: 900px;
    margin: 0 auto $spacing-xl auto;
    text-align: center;

    p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: $color-text;
      margin: 0;
    }
  }

  &__grid {
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
    max-width: 1280px;
    position: relative;
  }

  &__card {
    background: $color-white;
    border-radius: $border-radius;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;

    // Card 1 et 3 à gauche (index pair)
    &:nth-child(odd) {
      align-self: flex-start;
    }

    // Card 2 et 4 à droite (index impair)
    &:nth-child(even) {
      align-self: flex-end;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    &__header {
      background-color: $color-yellow-transparent;
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      flex: 0 0 auto;
      border: solid 4px $color-green;

      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        text-align: center;
      }

      p {
        margin: 5px 0;
      }
    }

    &__content {
      padding: 20px 10px;
      display: flex;
      align-items: flex-start;
      flex: 1;
      background-color: $color-grey-light;
      border: solid 2px $color-green;

      p {
        color: $color-text;
        margin: 0;
        text-align: justify;
        margin: 5px 0;
      }
    }
  }

  // Styles pour les flèches SVG
  .arrow {
    position: absolute;
    width: 400px;
    height: 150px;
    pointer-events: none;
    z-index: 0;

    // Flèche 1 : Card 1 → Card 2 (gauche vers droite)
    &--1 {
      top: calc(250px + $spacing-xl / 2 - 75px);
      left: 25%;
    }

    // Flèche 2 : Card 2 → Card 3 (droite vers gauche)
    &--2 {
      top: calc(2 * (250px + $spacing-xl) + $spacing-xl / 2 - 75px);
      right: 25%;
    }

    // Flèche 3 : Card 3 → Card 4 (gauche vers droite)
    &--3 {
      top: calc(3 * (250px + $spacing-xl) + $spacing-xl / 2 - 75px);
      left: 25%;
    }
  }
}

// Media queries pour tablettes
@media (max-width: 768px) {
  .urgence {
    &__banner {
      height: 50vh;
      padding: 0 $spacing-md;

      &__content {
        h1 {
          font-size: 2rem;
        }
      }
    }

    &__container {
      padding: $spacing-lg $spacing-md;
    }

    &__intro {
      margin-bottom: $spacing-lg;

      p {
        font-size: 1rem;
      }
    }

    &__grid {
      gap: $spacing-md;
    }

    .arrow {
      display: none;
    }

    &__card {
      width: 100%;
      min-height: auto;

      &:nth-child(odd),
      &:nth-child(even) {
        align-self: stretch;
      }

      // Masquer les flèches sur mobile
      &::before,
      &::after {
        display: none;
      }

      &__header {
        padding: $spacing-md;

        h3 {
          font-size: 1.3rem;
        }
      }

      &__content {
        padding: $spacing-md;

        p {
          font-size: 0.95rem;
        }
      }
    }
  }
}

// Media queries pour smartphones
@media (max-width: 480px) {
  .urgence {
    &__banner {
      height: 45vh;
      padding: 0 $spacing-sm;

      &__content {
        h1 {
          font-size: 1.5rem;
        }
      }
    }

    &__container {
      padding: $spacing-md $spacing-sm;
    }

    &__intro {
      margin-bottom: $spacing-md;

      p {
        font-size: 0.9rem;
      }
    }

    &__grid {
      gap: $spacing-sm;
    }

    &__card {
      width: 100%;
    }

    &__card {
      &__header {
        padding: $spacing-sm $spacing-md;

        h3 {
          font-size: 1.2rem;
        }
      }

      &__content {
        padding: $spacing-sm $spacing-md;

        p {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>

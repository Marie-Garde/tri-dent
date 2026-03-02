<template>
  <div class="approche__banner">
    <div class="approche__banner__text">
      <div class="approche__banner__text__title">
        <h1>Notre approche</h1>
        <Divider light />
      </div>
      <div class="approche__banner__text__description">
        <p>
          Vous accompagner avec attention, clarté et personnalisation à chaque
          étape de votre parcours de soin est notre mission. Nous vous
          expliquons clairement la nature des soins, les étapes et la durée pour
          obtenir votre consentement éclairé, en adaptant notre communication à
          vos attentes. Dès votre arrivée, nous vous accueillons avec le sourire
          et veillons à votre confort. Nous personnalisons notre relation en
          fonction de vos besoins et émotions, et mettons en œuvre des solutions
          pour apaiser votre stress si nécessaire.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.approche__banner {
  padding: 0 $spacing-xl;
  height: 580px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("/images/approche/banner.png");
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
      flex: 3;
      color: $color-white-soft;
    }
  }
}

@media (max-width: 768px) {
  .approche__banner {
    height: 60vh;
    margin-top: 130px;
    padding: 0;

    &__text {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: $spacing-md;
      width: 90%;

      &__title {
        flex: 1;

        h1 {
          font-size: 28px;
        }

        .divider {
          margin-left: auto;
          margin-right: auto;
        }
      }

      &__description {
        flex: 1;
        text-align: center;

        p {
          font-size: 0.95rem;
        }
      }
    }
  }
}
</style>

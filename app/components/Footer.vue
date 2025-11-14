<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__logo">
        <img
          src="/images/logo trident light.svg"
          alt="Logo Trident"
          width="344"
        />
      </div>
      <div class="footer__container__find-us">
        <h3>Nous contacter</h3>
        <Divider light :style="{ marginLeft: '0' }" />
        <p class="footer__container__find-us__text">
          <span class="footer__container__find-us__info">
            <Icon name="mdi:map-marker" size="24" />
            3 Rte d'Aussonne, 31700 Cornebarrieu
          </span>
          <span class="footer__container__find-us__info">
            <Icon name="mdi:email" size="24" />
            secretariat@scmtrident.fr
          </span>
          <span class="footer__container__find-us__info">
            <Icon name="mdi:phone" size="24" />
            05 61 06 91 92
          </span>
          <span
            class="footer__container__find-us__info footer__container__find-us__info--hours"
          >
            <Icon name="mdi:clock-outline" size="24" />
            lundi au jeudi 9h-12h30 14h-18h<br />vendredi 9h-13h 14h-17h
          </span>
        </p>
      </div>
      <div class="footer__container__useful-links">
        <h3>Liens utiles</h3>
        <Divider light :style="{ marginLeft: '0' }" />
        <p class="footer__container__useful-links__text">
          <span class="footer__container__useful-links__info">
            <NuxtLink to="/">Accueil</NuxtLink>
          </span>
          <span class="footer__container__useful-links__info">
            <NuxtLink to="https://dentistes31.com/" target="_blank"
              >Conseil de l'ordre des dentistes</NuxtLink
            >
          </span>
          <span class="footer__container__useful-links__info">
            <NuxtLink to="https://dentistes31.com/" target="_blank"
              >Dentiste de garde</NuxtLink
            >
          </span>
          <span class="footer__container__useful-links__info">
            <NuxtLink to="https://www.3237.fr/" target="_blank"
              >Pharmacie de garde</NuxtLink
            >
          </span>
        </p>
      </div>
    </div>
    <p class="footer__copyright">
      &copy; Copyright - Tous droits réservés - site créé par
      <NuxtLink to="https://lenvoleenumerique.com/" target="_blank"
        >L’envolée numérique</NuxtLink
      >
      - <NuxtLink to="/">mentions légales</NuxtLink> - numérique -
      <NuxtLink to="/">mentions légales</NuxtLink> -
      <NuxtLink to="/">Plan du site</NuxtLink>
    </p>
  </footer>
</template>

<script setup>
// ...existing code...
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.footer {
  background-color: $color-green;
  color: $color-white;
  padding: $spacing-xl;
  padding-bottom: 0;

  &__container {
    display: flex;
    gap: $spacing-xl;
    align-items: flex-start;

    &__find-us,
    &__useful-links {
      display: flex;
      flex: 1;
      flex-direction: column;

      h3 {
        color: $color-white;
      }

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

        a {
          color: $color-white;
        }
      }
    }
  }

  &__logo {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      max-width: 100%;
      height: auto;
      display: block;
      width: 344px;
    }
  }

  &__copyright {
    text-align: center;
    margin-top: $spacing-xl;
    margin-bottom: 0;
    a {
      color: $color-white;
    }
  }
}

/* Responsive: stack sections on small screens */
@media (max-width: 1023px) {
  .footer {
    padding: $spacing-lg;

    &__logo img {
      width: 260px;
    }
  }
}

@media (max-width: 767px) {
  .footer {
    padding: $spacing-md;

    &__container {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: $spacing-md;

      &__find-us,
      &__useful-links {
        width: 100%;
        align-items: center;

        &__text {
          align-items: center;
        }

        &__info {
          justify-content: center;
          svg,
          i {
            flex: 0 0 auto;
          }
        }
      }
    }

    &__logo {
      justify-content: center;
      margin-bottom: $spacing-md;

      img {
        width: 200px;
      }
    }
  }
}

/* small polish: ensure links wrap and spacing is reasonable */
.footer a,
.footer span {
  word-break: break-word;
}
</style>

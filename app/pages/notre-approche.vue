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
            Vous accompagner avec attention, clarté et personnalisation à chaque
            étape de votre parcours de soin est notre mission. Nous vous
            expliquons clairement la nature des soins, les étapes et la durée
            pour obtenir votre consentement éclairé, en adaptant notre
            communication à vos attentes. Dès votre arrivée, nous vous
            accueillons avec le sourire et veillons à votre confort. Nous
            personnalisons notre relation en fonction de vos besoins et
            émotions, et mettons en œuvre des solutions pour apaiser votre
            stress si nécessaire.
          </p>
        </div>
      </div>
    </div>

    <div class="approche__valeurs" ref="valeursSection">
      <h2>Les valeurs qui nous guident</h2>
      <Divider />
      <div class="approche__valeurs__cards">
        <div class="approche__valeurs__cards__line">
          <ValuesCard
            v-for="(value, index) in valuesLine1"
            :key="value.text"
            :imageSrc="value.imageSrc"
            :text="value.text"
            class="value-card"
            :style="{ '--card-index': index }"
          />
        </div>

        <div class="approche__valeurs__cards__line">
          <ValuesCard
            v-for="(value, index) in valuesLine2"
            :key="value.text"
            :imageSrc="value.imageSrc"
            :text="value.text"
            class="value-card"
            :style="{ '--card-index': index + 3 }"
          />
        </div>
      </div>
    </div>

    <div class="approche__cabinet">
      <h2>Le cabinet</h2>
      <Divider />
      <p>
        Notre nouveau cabinet dentaire a été conçu pour vous offrir une
        expérience de soin sereine, moderne et confortable.
      </p>
      <p>
        Un cadre apaisant et lumineux: nos espaces ont été pensés pour votre
        bien-être : lignes épurées, couleurs douces, éclairage naturel et
        ambiance chaleureuse. Dès votre arrivée, vous serez accueilli dans un
        environnement spacieux et rassurant.
      </p>
      <p>
        Des équipements à la pointe de la technologie: nous avons équipé notre
        cabinet des dernières innovations dentaires. Votre confort et votre
        sécurité sont au cœur de notre pratique.
      </p>
      <!-- Carousel -->
      <CarouselApproche />
    </div>

    <div class="approche__technos" ref="technosSection">
      <h2>Nos technologies phares</h2>
      <Divider />
      <!-- Carousel -->
      <div class="approche__technos-carousel">
        <CarouselTechnoMobile v-if="isMobile" />
        <CarouselTechno v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIsMobile } from "@/reactives/isMobile";
import PracticeImage from "@/assets/images/approche/icons/search.svg";
import InformImage from "@/assets/images/approche/icons/inform.svg";
import AttendanceImage from "@/assets/images/approche/icons/attendance.svg";
import PersonalizationImage from "@/assets/images/approche/icons/personalization.svg";
import CalendarImage from "@/assets/images/approche/icons/calendar.svg";
import NetworkImage from "@/assets/images/approche/icons/network.svg";

const isMobile = useIsMobile();

const valuesLine1 = [
  {
    imageSrc: PracticeImage,
    text: "Pratiquer dans les règles de l'art avec professionnalisme",
  },
  {
    imageSrc: InformImage,
    text: "Informer clairement et obtenir un consentement éclairé",
  },
  {
    imageSrc: AttendanceImage,
    text: "Accueillir avec bienveillance et attention",
  },
];

const valuesLine2 = [
  {
    imageSrc: PersonalizationImage,
    text: "Personnaliser la relation de soin",
  },
  {
    imageSrc: CalendarImage,
    text: "Assurer un suivi post-soin attentif",
  },
  {
    imageSrc: NetworkImage,
    text: "Travailler en réseau avec ses collègues",
  },
];

// Refs uniquement pour les sections avec animations
const valeursSection = ref(null);
const technosSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  [valeursSection.value, technosSection.value].forEach((section) => {
    if (section) observer.observe(section);
  });
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "sass:color";

.approche {
  &__banner {
    padding: 0 $spacing-xl;
    height: 580px;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
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
        flex: 3;
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

    .value-card {
      opacity: 0;
      transform: translateY(15px);
    }

    &.is-visible .value-card {
      animation: fadeInUp 0.5s ease-out forwards;
      animation-delay: calc(var(--card-index) * 0.08s);
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
      max-width: 1280px;
      margin: 0 auto 20px auto;
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
      opacity: 0;
      transform: translateY(15px);
    }

    &.is-visible &-carousel {
      animation: fadeInUp 0.6s ease-out 0.2s forwards;
    }
  }
}

// Animation unique, plus subtile
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .approche {
    &__banner {
      padding: 0 $spacing-md;
      height: 70vh;

      &__text {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 90px;
        gap: $spacing-md;
        width: 100%;

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

    &__valeurs {
      padding: $spacing-lg $spacing-md;

      h2 {
        font-size: 1.5rem;
      }

      &__cards {
        margin-top: $spacing-lg;
        gap: $spacing-md;

        &__line {
          flex-direction: column;
          align-items: center;
          gap: $spacing-md;
        }
      }
    }

    &__cabinet {
      padding: $spacing-lg $spacing-md;
      text-align: center;

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.95rem;
      }
    }

    &__technos {
      padding: $spacing-lg $spacing-md;

      h2 {
        font-size: 1.5rem;
      }
    }
  }
}
</style>

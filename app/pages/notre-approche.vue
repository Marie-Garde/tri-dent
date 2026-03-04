<template>
  <div class="approche">
    <ApprocheBanner />

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
      <CarouselApproche />
    </div>

    <div class="approche__technos" ref="technosSection">
      <h2>Nos technologies phares</h2>
      <Divider />
      <div class="approche__technos-carousel">
        <CarouselTechnoMobile v-if="isCompactView" />
        <CarouselTechno v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useNotreApprocheSeo();

const isCompactView = ref(false);
let mediaQuery: MediaQueryList | undefined;

const valeursSection = ref<HTMLElement | null>(null);
const technosSection = ref<HTMLElement | null>(null);

const valuesLine1 = [
  {
    imageSrc: "/images/approche/icons/search.svg",
    text: "Pratiquer dans les règles de l'art avec professionnalisme",
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

function onMediaChange(e: MediaQueryListEvent) {
  isCompactView.value = e.matches;
}

onMounted(() => {
  mediaQuery = window.matchMedia("(max-width: 1024px)");
  isCompactView.value = mediaQuery.matches;
  mediaQuery.addEventListener("change", onMediaChange);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
  );

  [valeursSection.value, technosSection.value].forEach((section) => {
    if (section) observer.observe(section);
  });
});

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener("change", onMediaChange);
});
</script>

<style lang="scss" scoped>
.approche {
  &__valeurs {
    padding: $spacing-xl;
    background-image: url("/images/approche/valeurs.png");
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

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .approche {
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
      padding: $spacing-lg 0;

      h2 {
        font-size: 1.5rem;
      }
    }
  }
}
</style>

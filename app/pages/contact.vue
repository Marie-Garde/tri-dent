<template>
  <div class="contact">
    <div class="contact__banner">
      <div class="contact__banner__content">
        <h1>Contactez-nous</h1>
        <Divider />
      </div>
    </div>
    <div class="contact__container">
      <div class="contact__find-us" ref="findUsSection">
        <div class="contact__find-us__title">
          <h2>Nous trouver ?</h2>
          <Divider />
        </div>
        <div class="contact__find-us__description">
          <div class="contact__find-us__info-wrapper">
            <p class="contact__find-us__text">
              <span class="contact__find-us__info">
                <Icon name="mdi:map-marker" size="24" />
                3 Rte d'Aussonne, 31700 Cornebarrieu
              </span>
              <span class="contact__find-us__info">
                <Icon name="mdi:email" size="24" />
                secretariat@scmtrident.fr
              </span>
              <span class="contact__find-us__info">
                <Icon name="mdi:phone" size="24" />
                05 61 06 91 92
              </span>
              <span
                class="contact__find-us__info contact__find-us__info--hours"
              >
                <Icon name="mdi:clock-outline" size="24" />
                lundi au jeudi 9h-12h30 14h-18h<br />
                vendredi 9h-13h 14h-17h
              </span>
            </p>
          </div>
          <Divider vertical />
          <div class="contact__find-us__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.629083805756!2d1.3201366768328324!3d43.655884871101954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeae4c10c2b78b%3A0x4c30a0114cd4e4a1!2sTri-dent%20Scm!5e0!3m2!1sen!2sfr!4v1765287495959!5m2!1sen!2sfr"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="contact__faq" ref="faqSection">
        <div class="contact__faq__accordion">
          <h2>Questions fréquentes</h2>
          <Divider />
          <Accordion
            id="accordion1"
            title="A quelle fréquence dois-je consulter mon dentiste ? "
            :modelValue="openAccordionId === 'accordion1'"
            @update:modelValue="
              openAccordionId = $event === openAccordionId ? null : $event
            "
          >
            Les dentistes recommandent un contrôle des dents 1 fois par an, si
            vous n'avez pas de problème de santé particulier.<br />
            Néanmoins, si lors du contrôle des soins sont nécessaires, une
            période de 6 mois est en effet la durée moyenne de l'évolution de
            pathologie carieuse ou parodontale. Cette précaution permet de
            conserver la dent vivante ou d’éviter des complications.
          </Accordion>
          <Accordion
            id="accordion2"
            title="Quel type de brosse à dent est à privilégier ? Et quel dentifrice dois-je utiliser ?"
            :modelValue="openAccordionId === 'accordion2'"
            @update:modelValue="
              openAccordionId = $event === openAccordionId ? null : $event
            "
          >
            On distingue trois types de brosses à dents : celles munies de poils
            souples, de poils médium (les plus répandues sur le marché) et
            enfin, de poils durs. Ce sont les brosses à dents dites « souples »
            qui sont les plus recommandées pour les gencives et les dents.<br />
            Certaines brosses à dent plus dures peuvent être proposées par le
            praticien en fonction du port d’un appareil ou de conditions
            particulières. Pour le dentifrice, il est conseillé de le prendre le
            moins abrasif possible et avec une teneur en fluor adapté à
            l’âge.<br />
            Certains dentifrices sont plus thérapeutiques et sont préconisés en
            fonction de vos pathologies bucco-dentaires.
          </Accordion>
          <Accordion
            id="accordion3"
            title="A quel âge faut-il commencer à amener son enfant chez le dentiste ?"
            :modelValue="openAccordionId === 'accordion3'"
            @update:modelValue="
              openAccordionId = $event === openAccordionId ? null : $event
            "
          >
            Afin de les familiariser avec le praticien et l’environnement du
            cabinet dentaire, il est important de commencer par une visite
            annuelle dès 3 ans. Les pathologies sont censées être assez rares à
            cet âge-là mais un dépistage précoce de certaines dysfonctions ou de
            mauvaises habitudes peut éviter de plus graves troubles par la
            suite. Le praticien pourra accompagner l’enfant vers de bonnes
            habitudes et une bonne hygiène bucco-dentaire.
          </Accordion>
          <Accordion
            id="accordion4"
            title="Le jet dentaire est-il efficace ? Peut-il remplacer le fil dentaire ou la brossette inter-dentaire ? Quel système choisir ?"
            :modelValue="openAccordionId === 'accordion4'"
            @update:modelValue="
              openAccordionId = $event === openAccordionId ? null : $event
            "
          >
            Nettoyer les espaces entre les dents est primordial pour une bonne
            hygiène dentaire. Néanmoins plusieurs systèmes sont possibles avec
            des avantages différents : <br /><br />- les jets dentaires ou
            hydropulseurs envoient à forte pression un mélange air-eau. Leur
            maniabilité et leur facilité d’utilisation leur confèrent une très
            bonne observance au long cours. Bien que moins efficaces que les
            brossettes et le fil dentaire, ils restent intéressants pour les
            personnes ayant une faible dextérité manuelle (âgées ou avec un
            handicap) mais ne suffisent pas souvent à nettoyer les zones
            molaires. <br /><br />- les brossettes inter-dentaires existent sous
            différentes tailles et formats. Votre dentiste peut vous aiguiller.
            La bonne taille permet de frotter entre les dents sans forcer.
            Plusieurs tailles sont souvent nécessaires. Elles sont réutilisables
            et à changer, comme la brosse à dent, quand les poils sont usés.
            <br /><br />- Le fil dentaire est à préférer ciré et un peu épais.
            Il nécessite un certain apprentissage et une certaine dextérité
            manuelle. Son utilisation permet de nettoyer tous les espaces
            inter-dentaires de manière efficace à moindre coût.
          </Accordion>
          <Accordion
            id="accordion5"
            title="Comment faire pour utiliser le fil dentaire ?"
            :modelValue="openAccordionId === 'accordion5'"
            @update:modelValue="
              openAccordionId = $event === openAccordionId ? null : $event
            "
          >
            1. Prenez environ 30 cm de fil dentaire et enroulez les extrémités
            autour des majeurs (ou des index) pour que le fil soit bien
            tendu.<br />
            2. Descendez délicatement le fil avec un va-et-vient latéral pour ne
            pas blesser la gencive.<br />
            3. Remontez le fil de la gencive vers l’extérieur, en nettoyant
            l’une puis l’autre des faces interdentaires. N’oubliez pas le collet
            (base de la dent au contact avec la gencive). Déroulez un peu de fil
            propre et recommencez entre les deux dents suivantes.
          </Accordion>
          <Accordion
            id="accordion6"
            title="Quelle est la durée de vie d’une couronne ou d’un bridge ?"
            :modelValue="openAccordionId === 'accordion6'"
            @update:modelValue="
              openAccordionId = $event === openAccordionId ? null : $event
            "
          >
            En moyenne, une couronne a une durée de vie comprise entre 5 et 10
            ans, mais elle peut parfois atteindre 20 ans ou plus avec un bon
            entretien. Sa longévité dépend de nombreux facteurs : les habitudes
            d'hygiène bucco-dentaire, les habitudes de consommation alimentaire,
            les forces de mastication, l’acidité buccale ainsi que l’état de
            santé buccal et général. Mais aussi la qualité des matériaux
            utilisés et la technique de pose effectuée par le dentiste.
          </Accordion>
        </div>
      </div>
      <div class="contact__form">
        <h2>Envoyez nous un message</h2>
        <Divider />
        <Form />
      </div>
    </div>
  </div>
</template>

<script setup>
import Form from "@/components/Form.vue";
import { ref } from "vue";
import { useContactSeo } from "~/composables/useContactSeo";

definePageMeta({
  layout: "default",
});

useContactSeo();

const openAccordionId = ref(null);

// Refs pour les sections
const findUsSection = ref(null);
const faqSection = ref(null);

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
    },
  );

  [findUsSection.value, faqSection.value].forEach((section) => {
    if (section) observer.observe(section);
  });
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.contact {
  &__container {
    margin: 0 auto;
  }

  &__banner {
    width: 100%;
    height: 60vh;
    background-image: url("~/assets/images/contact/banner.png");
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
      color: $color-primary;

      h1 {
        font-size: 36px;
        font-weight: 700;
        margin: 0;
        color: $color-primary;
      }
    }
  }

  &__find-us {
    max-width: 1280px;
    margin: 30px auto;
    background-color: $color-white;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__description {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 20px;

      .divider--vertical {
        display: flex;
        justify-content: center;
      }
    }

    &__info-wrapper {
      opacity: 0;
      transform: translateX(-15px);
    }

    &.is-visible &__info-wrapper {
      animation: fadeInLeft 0.6s ease-out 0.2s forwards;
    }

    &__map {
      opacity: 0;
      transform: translateX(15px);

      iframe {
        width: 420px;
        height: 300px;
      }
    }

    &.is-visible &__map {
      animation: fadeInRight 0.6s ease-out 0.2s forwards;
    }

    &__text {
      width: 420px;
      padding-top: $spacing-md;
      display: flex;
      flex-direction: column;
      gap: $spacing-lg;
    }

    &__info {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      &--hours {
        align-items: flex-start;
      }
    }

    &__title {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 80px;
    }
  }

  &__faq {
    background-color: $color-bg-blue;
    padding: 30px 0;

    &__accordion {
      max-width: 1280px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 40px auto;
      opacity: 0;
      transform: translateY(15px);
    }

    &.is-visible &__accordion {
      animation: fadeInUp 0.6s ease-out forwards;
    }

    .divider {
      margin-bottom: $spacing-lg;
    }
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

// Animations
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// Media queries pour mobile
@media (max-width: 768px) {
  .contact {
    &__banner {
      height: 60vh;

      &__image {
        top: 40%;
        width: 90%;
        height: 70%;
      }

      &__title {
        padding: 0 $spacing-md $spacing-md $spacing-md;

        h1 {
          font-size: 1.5rem;
        }
      }
    }

    &__find-us {
      margin: 20px $spacing-md;
      padding: 0 $spacing-md;

      &__title {
        padding-top: 40px;

        h2 {
          font-size: 1.3rem;
        }
      }

      &__description {
        flex-direction: column;
        gap: $spacing-lg;

        .divider--vertical {
          display: none;
        }
      }

      &__info-wrapper {
        transform: translateY(15px);
      }

      &.is-visible &__info-wrapper {
        animation: fadeInUp 0.6s ease-out 0.2s forwards;
      }

      &__text {
        width: 100%;
        padding-top: $spacing-sm;
      }

      &__map {
        width: 100%;
        transform: translateY(15px);

        iframe {
          width: 100%;
          height: 250px;
        }
      }

      &.is-visible &__map {
        animation: fadeInUp 0.6s ease-out 0.3s forwards;
      }

      &__info {
        font-size: 0.9rem;
        word-break: break-word;
      }
    }

    &__faq {
      padding: 20px $spacing-md;

      &__accordion {
        margin: 20px auto;
        padding: 0 $spacing-sm;

        h2 {
          font-size: 1.3rem;
          text-align: center;
        }

        h3 {
          font-size: 1rem;
        }
      }
    }

    &__form {
      padding: 0 $spacing-md;
      width: 90%;
      margin: 0 auto;

      h2 {
        font-size: 1.3rem;
        text-align: center;
      }
    }
  }
}

@media (max-width: 480px) {
  .contact {
    &__banner {
      height: 50vh;

      &__image {
        width: 95%;
        height: 65%;
      }

      &__title {
        padding: 0 $spacing-sm $spacing-sm $spacing-sm;

        h1 {
          font-size: 1.2rem;
        }
      }
    }

    &__find-us {
      margin: 15px $spacing-sm;

      &__title {
        padding-top: 30px;

        h2 {
          font-size: 1.1rem;
        }
      }

      &__text {
        gap: $spacing-md;
      }

      &__map {
        iframe {
          height: 200px;
        }
      }

      &__info {
        font-size: 0.85rem;
      }
    }

    &__faq {
      padding: 15px $spacing-sm;

      &__accordion {
        margin: 15px auto;

        h2 {
          font-size: 1.1rem;
        }
      }
    }

    &__form {
      padding: 0 $spacing-sm;

      h2 {
        font-size: 1.1rem;
      }
    }
  }
}
</style>

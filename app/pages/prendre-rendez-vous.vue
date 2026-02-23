<template>
  <div class="rdv">
    <div class="rdv__banner">
      <div class="rdv__banner__content">
        <h1>Prendre rendez-vous</h1>
        <Divider />
      </div>
    </div>

    <div class="rdv__container">
      <div class="rdv__content">
        <div class="rdv__content__left">
          <h2>Nouveau patient ?</h2>
          <p>Bienvenue au cabinet !</p>
          <p>Pour votre première visite :</p>
          <div class="buttons">
            <Button href="tel:0561069192"
              ><Icon name="mdi:phone" size="24" />05 61 06 91 92</Button
            >
            <Button href="/contact" variant="secondary"
              ><Icon name="mdi:email" size="24" />
              secretariat@scmtrident.fr</Button
            >
          </div>
        </div>
        <div class="rdv__content__right">
          <h2>Déjà patient ?</h2>
          <p>Renseignez votre praticien :</p>
          <DoctorDropdown
            v-model="selectedDoctorName"
            :doctors="doctors"
            placeholder="Praticien"
          />
          <div v-if="selectedDoctor" class="contact-buttons">
            <p>Votre prise de rendez-vous :</p>
            <div>
              <Button
                v-for="contact in selectedDoctor.contact"
                :key="contact.type"
                :href="
                  contact.type === 'phone'
                    ? `tel:${contact.url}`
                    : contact.type === 'email'
                      ? `mailto:${contact.url}`
                      : contact.url
                "
                target="_blank"
                class="contact-button"
              >
                <template v-if="contact.type === 'phone'" variant="secondary">
                  <Icon name="mdi:phone" /> 05 61 06 91 92
                </template>

                <template v-if="contact.type === 'email'" variant="secondary">
                  <Icon name="mdi:email" size="24" />
                  secretariat@scmtrident.fr
                </template>

                <template v-else-if="contact.type === 'doctolib'">
                  <img :src="doctolibIcon" alt="Icône Doctolib" />
                  <p>Doctolib</p>
                </template>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Divider from "~/components/Divider.vue";
import Button from "~/components/Button.vue";
import DoctorDropdown from "~/components/DoctorDropdown.vue";
import { doctors } from "~/data/dentists";
import doctolibIcon from "~/assets/images/contact/doctolib-icon.png";

definePageMeta({
  layout: "default",
});

useHead({
  title: "Prendre Rendez-vous - Cabinet Dentaire Tri-Dent",
  meta: [
    {
      name: "description",
      content:
        "Prenez rendez-vous facilement avec le Cabinet Dentaire Tri-Dent à Cornebarrieu. Instructions pour les nouveaux patients et accès direct à la prise de rendez-vous pour les patients existants.",
    },
  ],
});

const selectedDoctorName = ref("");
const selectedDoctor = ref(null);

watch(selectedDoctorName, (newName) => {
  selectedDoctor.value = doctors.find((d) => d.name === newName) || null;
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.rdv {
  background-color: $color-bg-blue;

  &__banner {
    width: 100%;
    height: 60vh;
    background-image: url("~/assets/images/appointment/banner.png");
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

  &__container {
    max-width: 1280px;
    margin: 0 auto;
    padding: $spacing-xl;
  }

  &__content {
    display: flex;
    gap: $spacing-xl;

    &__left,
    &__right {
      background-color: $color-white;
      padding: $spacing-lg;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    &__left {
      flex: 1;

      h2 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: $spacing-md;
      }

      p {
        margin-bottom: $spacing-lg;
      }

      .buttons {
        display: flex;
        flex-direction: column;
        gap: $spacing-md;
        align-items: center;

        .button {
          width: 90%;
          background-color: $color-green;
          color: $color-white;
          border: 1px solid $color-green;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: $spacing-sm;

          &:hover {
            background-color: $color-green-transparent;
            border-color: $color-green-transparent;
          }
        }
      }
    }

    &__right {
      flex: 2;
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: $spacing-sm;
      }

      p {
        margin-bottom: $spacing-md;
      }

      .contact-buttons {
        margin-top: $spacing-lg;
        display: flex;
        flex-direction: column;
        gap: $spacing-md;
        div {
          display: flex;
          gap: $spacing-md;
        }
      }

      .contact-button {
        flex: 1;
        background-color: $color-green;
        color: $color-white;
        border: 1px solid $color-green;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: $spacing-sm;
        font-size: 24px;

        img {
          width: 24px;
          height: 24px;
        }

        p {
          margin-left: $spacing-sm;
        }

        &:hover {
          background-color: $color-green-transparent;
          border-color: $color-green-transparent;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .rdv {
    &__banner__content h1 {
      font-size: 24px;
    }

    &__container {
      padding: $spacing-md;
    }

    &__content {
      flex-direction: column;
      gap: $spacing-lg;
    }

    &__content__left .buttons {
      flex-direction: column;
      gap: $spacing-sm;
    }

    .contact-buttons > div {
      flex-direction: column;
      gap: $spacing-sm;
    }
  }
}
</style>

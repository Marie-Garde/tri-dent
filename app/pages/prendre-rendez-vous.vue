<template>
  <div class="rdv">
    <Banner
      title="Prendre rendez-vous"
      image="/images/appointment/banner.webp"
    />

    <div class="rdv__container">
      <div class="rdv__content">
        <div class="rdv__content__left">
          <h2>Nouveau patient ?</h2>
          <Divider class="divider" />
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
          <Divider class="divider" />
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
                    ? `tel:${contact.valeur}`
                    : contact.type === 'email'
                      ? `mailto:${contact.valeur}`
                      : contact.valeur
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
                  <img
                    src="/images/appointment/doctolib-icon.png"
                    alt="Icône Doctolib"
                    width="24"
                    height="24"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="/images/appointment/doctolib-icon.png"
                    alt="Icône Doctolib"
                    width="24"
                    height="24"
                    loading="lazy"
                    decoding="async"
                  />
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

<script setup lang="ts">
import type { SanityDoctor } from "~/types/doctor";

definePageMeta({
  layout: "default",
});

usePrendreRendezVousSeo();

const doctorsStore = useDoctorsStore();

onMounted(async () => {
  await doctorsStore.fetchDoctors();
});

const doctors = computed(() =>
  doctorsStore.doctorsWithContact.map((d) => ({
    name: d.nom,
    image: doctorsStore.avatarUrl(d),
  })),
);

const selectedDoctorName = ref("");
const selectedDoctor = ref<SanityDoctor | null>(null);

watch(selectedDoctorName, (newName) => {
  selectedDoctor.value =
    doctorsStore.doctorsWithContact.find((d) => d.nom === newName) || null;
});
</script>

<style lang="scss" scoped>
.rdv {
  background-color: $color-bg-blue;

  &__container {
    max-width: 1280px;
    margin: 0 auto;
    padding: $spacing-xl;
  }

  &__content {
    display: flex;
    gap: $spacing-xl;

    .divider {
      margin: 0;
    }

    &__left,
    &__right {
      background-color: $color-white;
      padding: $spacing-lg;
      border-radius: $border-radius-lg;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    &__left {
      flex: 1;

      h2 {
        font-size: 24px;
        font-weight: 700;
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
          margin: 0 0 0 $spacing-sm;
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
    &__container {
      padding: $spacing-md;
    }

    &__content {
      flex-direction: column;
      gap: $spacing-lg;
    }

    &__content__left {
      text-align: center;
      h2 {
        margin-top: 0;
      }
      .divider {
        margin: 0 auto;
      }
      p {
        margin-bottom: 0;
      }
      .buttons {
        margin-top: $spacing-md;
        flex-direction: column;
        gap: $spacing-sm;
      }
    }

    &__content__right {
      text-align: center;
      h2 {
        margin-top: 0;
      }
      .divider {
        margin: 0 auto $spacing-md auto;
      }
      p {
        margin: 0;
      }
      .buttons {
        margin-top: $spacing-md;
        flex-direction: column;
        gap: $spacing-sm;
      }
    }

    .contact-buttons > div {
      flex-direction: column;
      gap: $spacing-sm;
    }
  }
}
</style>

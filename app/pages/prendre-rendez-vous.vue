<template>
  <div class="rdv">
    <Banner
      title="Prendre rendez-vous"
      image="/images/appointment/banner.webp"
      light
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
          <div v-if="hasSelection" class="contact-buttons">
            <p>Votre prise de rendez-vous :</p>
            <div>
              <Button href="tel:0561069192" class="contact-button">
                <Icon name="mdi:phone" size="24" />
                <span>05 61 06 91 92</span>
              </Button>
              <Button
                href="mailto:secretariat@scmtrident.fr"
                class="contact-button"
              >
                <Icon name="mdi:email" size="24" />
                <span>secretariat@scmtrident.fr</span>
              </Button>
              <Button
                v-if="platformContact"
                :href="platformContact.valeur"
                target="_blank"
                class="contact-button"
              >
                <img
                  :src="PLATFORM_META[platformContact.type].icon"
                  :alt="`Icône ${PLATFORM_META[platformContact.type].label}`"
                  width="24"
                  height="24"
                  loading="lazy"
                  decoding="async"
                />
                <span>{{ PLATFORM_META[platformContact.type].label }}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DoctorContact, SanityDoctor } from "~/types/doctor";

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

const hasSelection = computed(() => selectedDoctorName.value !== "");

watch(selectedDoctorName, (newName) => {
  selectedDoctor.value =
    doctorsStore.doctorsWithContact.find((d) => d.nom === newName) || null;
});

type PlatformType = Extract<DoctorContact["type"], "doctolib" | "logos">;

const PLATFORM_META: Record<PlatformType, { label: string; icon: string }> = {
  doctolib: {
    label: "Doctolib",
    icon: "/images/appointment/doctolib-icon.png",
  },
  logos: {
    label: "Logos",
    icon: "/images/appointment/logos-icon.png",
  },
};

const platformContact = computed(() => {
  const contact = selectedDoctor.value?.contact?.find(
    (c): c is DoctorContact & { type: PlatformType } =>
      c.type === "doctolib" || c.type === "logos",
  );
  return contact ?? null;
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
        flex: 1 1 0;
        min-width: 0;
        background-color: $color-green;
        color: $color-white;
        border: 1px solid $color-green;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: $spacing-sm;
        padding: $spacing-sm $spacing-md;
        font-size: $spacing-md;

        img {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        span {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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

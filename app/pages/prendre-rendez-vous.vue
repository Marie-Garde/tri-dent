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
          <div class="doctor-selector">
            <div
              class="doctor-toggle"
              @click="isDoctorListVisible = !isDoctorListVisible"
            >
              <div v-if="selectedDoctor" class="selected-doctor">
                <img
                  :src="selectedDoctor.image"
                  :alt="selectedDoctor.name"
                  class="doctor-image"
                />
                <span class="doctor-name">{{ selectedDoctor.name }}</span>
              </div>
              <div v-else class="doctor-placeholder">
                <span>Praticien</span>
              </div>
              <Icon
                name="mdi:chevron-down"
                class="chevron-icon"
                :class="{ 'chevron-icon--rotated': isDoctorListVisible }"
              />
            </div>
            <div v-if="isDoctorListVisible" class="doctor-list">
              <div
                v-for="doctor in doctors"
                :key="doctor.name"
                class="doctor-item"
                @click="selectDoctor(doctor)"
              >
                <img
                  :src="doctor.image"
                  :alt="doctor.name"
                  class="doctor-image"
                />
                <span class="doctor-name">{{ doctor.name }}</span>
              </div>
            </div>
          </div>
          <div v-if="selectedDoctor" class="contact-buttons">
            <p>Votre prise de rendez-vous :</p>
            <div>
              <Button
                v-for="contact in selectedDoctor.contact"
                :key="contact.type"
                :href="contact.url"
                class="contact-button"
              >
                <template v-if="contact.type === 'phone'">
                  <Icon name="mdi:phone" /> 05 61 06 91 92
                </template>
                <template v-else-if="contact.type === 'doctolib'">
                  <img
                    src="https://www.doctolib.fr/favicon.ico"
                    alt="Doctolib"
                  />
                  Doctolib
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
import { ref } from "vue";
import Divider from "~/components/Divider.vue";
import Button from "~/components/Button.vue";

const isDoctorListVisible = ref(false);
const selectedDoctor = ref(null);

const doctors = ref([
  {
    name: "Dr. Reda BOUNAB",
    image: "https://picsum.photos/id/237/100/100",
    contact: [
      { type: "doctolib", url: "" },
      { type: "phone", url: "tel:0561069192" },
    ],
  },
  {
    name: "Dr. Sandrine DE CARVALHO",
    image: "https://picsum.photos/id/238/100/100",
    contact: [
      { type: "doctolib", url: "" },
      { type: "phone", url: "tel:0561069192" },
    ],
  },
  {
    name: "Dr. Laure RISPAL",
    image: "https://picsum.photos/id/239/100/100",
    contact: [
      { type: "doctolib", url: "" },
      { type: "phone", url: "tel:0561069192" },
    ],
  },
  {
    name: "Dr. Patrick SALINAS",
    image: "https://picsum.photos/id/239/100/100",
    contact: [
      { type: "doctolib", url: "" },
      { type: "phone", url: "tel:0561069192" },
    ],
  },
  {
    name: "Dr. Mathilde HOURSET",
    image: "https://picsum.photos/id/239/100/100",
    contact: [
      { type: "doctolib", url: "" },
      { type: "phone", url: "tel:0561069192" },
    ],
  },
  {
    name: "Dr. Hugo SENTILLES",
    image: "https://picsum.photos/id/239/100/100",
    contact: [
      { type: "doctolib", url: "" },
      { type: "phone", url: "tel:0561069192" },
    ],
  },
]);

const selectDoctor = (doctor) => {
  selectedDoctor.value = doctor;
  isDoctorListVisible.value = false;
};
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
        margin-bottom: $spacing-sm; // Reduced margin
      }

      p {
        margin-bottom: $spacing-md;
      }

      .doctor-selector {
        position: relative;
        width: 100%;
        margin-bottom: $spacing-md;
      }

      .doctor-toggle {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: $spacing-sm 0; /* Adjusted padding to remove side borders visually */
        border: none; /* Remove all borders initially */
        border-bottom: 1px solid $color-grey; /* Only bottom border visible */
        background-color: transparent; /* Make background transparent */

        .chevron-icon {
          transition: transform 0.3s ease;
          font-size: 24px; /* Make icon larger */
          color: $color-green; /* Change icon color to green */

          &--rotated {
            transform: rotate(180deg);
          }
        }
      }

      .selected-doctor {
        display: flex;
        align-items: center;
        gap: $spacing-md;
      }

      .doctor-placeholder {
        color: $color-grey;
      }

      .doctor-list {
        position: absolute;
        top: calc(100% + 5px);
        left: 0;
        width: 100%;
        background-color: $color-white;
        border: 1px solid $color-grey-light;
        border-radius: $border-radius;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 10;
        display: flex;
        flex-direction: column;
        max-height: 300px;
        overflow-y: auto;
      }

      .doctor-item {
        display: flex;
        align-items: center;
        gap: $spacing-md;
        padding: $spacing-sm $spacing-md;
        cursor: pointer;
        transition: background-color 0.2s ease;

        &:hover {
          background-color: $color-bg-blue;
        }
      }

      .doctor-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }

      .doctolib-button {
        margin-top: auto; // Pushes the button to the bottom
        .button {
          background-color: #1a8dff;
          color: $color-white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: $spacing-sm;
          width: 100%;

          img {
            width: 20px;
            height: 20px;
          }

          &:hover {
            background-color: darken(#1a8dff, 10%);
          }
        }
      }

      .contact-buttons {
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
        padding: $spacing-sm; // Adjust padding for icon-only buttons
        font-size: 24px; // Make icons larger

        img {
          width: 24px;
          height: 24px;
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
      gap: $spacing-lg; // Adjust gap for vertical stacking
    }

    &__content__left .buttons {
      flex-direction: column; // Stack buttons vertically on mobile
      gap: $spacing-sm;
    }

    .contact-buttons > div {
      flex-direction: column;
      gap: $spacing-sm;
    }
  }
}
</style>

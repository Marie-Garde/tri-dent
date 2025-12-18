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
          Contactez-nous par téléphone ou par mail. En dehors des horaires
          d'ouverture, un message vous indiquera la procédure à suivre pour
          joindre le dentiste de garde. Décrivez clairement les symptômes :
          douleur, saignement, traumatisme, etc. Cela nous permettra de vous
          orienter au mieux.
        </p>
        <div class="gestures">
          <p>Premiers gestes :</p>
          <ul>
            <li>
              <strong>Douleur :</strong> Prenez un antalgique (paracétamol de
              préférence, sauf cas d'allergies ou de contre-indication médicale)
              et évitez l'aspirine.
            </li>
            <li>
              <strong>Dent cassée ou expulsée :</strong> Rincez-la délicatement
              (sans frotter) et conservez-la dans du sérum physiologique ou du
              lait. Si possible, replacez-la dans son alvéole sans forcer.
            </li>
            <li>
              <strong>Saignement :</strong> Appliquez une compresse stérile ou
              un linge propre sur la zone et maintenez une pression douce.
            </li>
            <li>
              <strong>Gonflement ou abcès :</strong> Appliquez du froid à
              l'extérieur de la joue (sans contact direct avec la peau) et
              rince.
            </li>
          </ul>
        </div>
      </div>
      <div v-if="isMobile">
        <EmergencyImageSundayMob v-if="useEmergencyImageType() === 'sunday'" />
        <EmergencyImageSaturdayMob
          v-if="useEmergencyImageType() === 'saturday'"
        />
        <EmergencyImageWeekMob v-if="useEmergencyImageType() === 'week'" />
      </div>
      <div v-else>
        <EmergencyImageSunday v-if="useEmergencyImageType() === 'sunday'" />
        <EmergencyImageSaturday v-if="useEmergencyImageType() === 'saturday'" />
        <EmergencyImageWeek v-if="useEmergencyImageType() === 'week'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import EmergencyImageWeek from "~/assets/images/emergency/emergencyImageWeek.vue";
import EmergencyImageSaturday from "~/assets/images/emergency/emergencyImageSaturday.vue";
import EmergencyImageSunday from "~/assets/images/emergency/emergencyImageSunday.vue";
import EmergencyImageWeekMob from "~/assets/images/emergency/emergencyImageWeekMob.vue";
import EmergencyImageSaturdayMob from "~/assets/images/emergency/emergencyImageSaturdayMob.vue";
import EmergencyImageSundayMob from "~/assets/images/emergency/emergencyImageSundayMob.vue";
import { useIsMobile } from "@/reactives/isMobile";

const isMobile = useIsMobile();

const offDays = [
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

const useEmergencyImageType = () => {
  const today = new Date();
  const day = today.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi

  // Formater la date actuelle en 'YYYY-MM-DD'
  const dateStr = today.toISOString().split("T")[0];

  // Vérifier si c'est un jour férié
  const isDayOff = offDays.includes(dateStr);

  if (day === 0 || isDayOff) {
    return "sunday";
  }

  // Samedi (6) → saturday
  if (day === 6) {
    return "saturday";
  }

  // Lundi (1) à Vendredi (5) → week
  return "week";
};
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
      max-width: 1280px;
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
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $spacing-xl;
  }

  &__intro {
    margin: 20px 0 40px 0;

    p {
      margin: 0;
      padding: 0;
    }
    .gestures {
      margin-top: 20px;
    }
    ul {
      margin: 0;
    }
  }
}

// Media queries pour mobile
@media (max-width: 768px) {
  .urgence {
    &__container {
      width: 90%;
      padding: $spacing-md;
    }

    &__intro {
      width: 100%;
    }

    &__banner__content h1 {
      font-size: 24px;
    }

    // Pour que les SVG prennent aussi 90% de largeur
    :deep(svg) {
      width: 100%;
      height: auto;
    }
  }
}
</style>

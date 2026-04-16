<template>
  <div class="urgence">
    <Banner
      title="Urgence dentaire, que faire ?"
      image="/images/urgence/banner.webp"
      light
    />

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
        <EmergencyImageSundayMob v-if="getEmergencyImageType() === 'sunday'" />
        <EmergencyImageSaturdayMob
          v-if="getEmergencyImageType() === 'saturday'"
        />
        <EmergencyImageWeekMob v-if="getEmergencyImageType() === 'week'" />
      </div>
      <div v-else>
        <EmergencyImageSunday v-if="getEmergencyImageType() === 'sunday'" />
        <EmergencyImageSaturday v-if="getEmergencyImageType() === 'saturday'" />
        <EmergencyImageWeek v-if="getEmergencyImageType() === 'week'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIsMobile } from "~/reactives/isMobile";

definePageMeta({
  layout: "default",
});

useUrgenceSeo();

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

function getEmergencyImageType() {
  const today = new Date();
  const day = today.getDay();
  const dateStr = today.toISOString().split("T")[0];

  if (day === 0 || offDays.includes(dateStr ?? "")) return "sunday";
  if (day === 6) return "saturday";
  return "week";
}
</script>

<style lang="scss" scoped>
.urgence {
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

@media (max-width: 1024px) {
  .urgence {
    &__container {
      padding: 0;
    }
    &__intro {
      padding: $spacing-md;
    }

    :deep(svg) {
      width: 100%;
      height: auto;
    }
  }
}

@media (max-width: 768px) {
  .urgence {
    &__container {
      width: 90%;
      padding: $spacing-md;
    }

    &__intro {
      width: 100%;
    }

    :deep(svg) {
      width: 100%;
      height: auto;
    }
  }
}
</style>

<template>
  <div class="techno-carousel-mobile">
    <div class="carousel-container">
      <button
        class="nav-button nav-button--prev"
        @click="previousSlide"
        :disabled="currentIndex === 0"
      >
        <Icon name="mdi:chevron-left" size="32" />
      </button>

      <div class="carousel-wrapper">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="carousel-slide"
          >
            <div class="slide-card">
              <div class="slide-image">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="slide-content">
                <h3 class="slide-title">{{ item.title }}</h3>
                <div class="slide-description">
                  <p>{{ formatDescription(item.description) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        class="nav-button nav-button--next"
        @click="nextSlide"
        :disabled="currentIndex === items.length - 1"
      >
        <Icon name="mdi:chevron-right" size="32" />
      </button>
    </div>

    <!-- Pagination dots -->
    <div class="pagination-dots">
      <button
        v-for="(item, index) in items"
        :key="`dot-${index}`"
        class="dot"
        :class="{ 'dot--active': index === currentIndex }"
        @click="goToSlide(index)"
        :aria-label="`Aller à la slide ${index + 1}`"
      ></button>
    </div>

    <!-- Counter -->
    <div class="slide-counter">{{ currentIndex + 1 }} / {{ items.length }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CFAOImage from "@/assets/images/approche/techno/CFAO.png";
import ConeBeamImage from "@/assets/images/approche/techno/ConeBeam.png";
import MicroscopeImage from "@/assets/images/approche/techno/microscope.jpg";
import SmillersImage from "@/assets/images/approche/techno/smillers.jpg";
import TriosImage from "@/assets/images/approche/techno/Trios.png";
import radio from "@/assets/images/approche/techno/radio.png";

const currentIndex = ref(0);

const items = ref([
  {
    image: ConeBeamImage,
    title: "CBCT",
    description:
      "Le Cone Beam également dénommé CBCT est une imagerie volumétrique par faisceau conique . Il permet un examen performant des tissus minéralisés (dents, cartilages, os), mettant en évidence avec une bonne précision (de l’ordre du millimètre) des lésions ou autres affections osseuses. Cet examen est plus précis que le panoramique dentaire et offre une résolution similaire, voire supérieure à celle du scanner, avec en plus la possibilité d’une reconstitution numérique en 3D. A  l’inverse du scanner, il permet de balayer en un seul passage l’ensemble du volume à radiographier, en étant  moins irradiant. Il offre par ailleurs la possibilité de localiser le champ d’examen sur la zone à étudier (quelques dents, une mâchoire).  Du fait de la précision qu’il apporte, le cone beam reste un examen de choix en implantologie. Il permet alors d’évaluer au plus juste le volume osseux et la position des structures anatomiques délicates comme les nerfs en vue de la pose d’implants. La modélisation en 3D permet en outre de choisir la taille et la forme des implants proportionnellement à la morphologie du patient et de simuler leurs emplacements virtuellement. Ainsi, le cone beam est préconisé en dentisterie dans les cas suivants : les pathologies infectieuses ou tumorales au niveau du parodonte, de l’os alvéolaire, des sinus maxillaires, les kystes, les dents incluses, les implants dentaires ou encore les pathologies dégénératives de l’articulation temporo-mandibulaire.",
  },
  {
    image: TriosImage,
    title: "TRIOS® 6",
    description:
      "La Caméra intra-orale numérique Trios 6  est le nouveau scanner intra-oral de la société danoise 3Shape. La caméra d'empreinte numérique transforme la façon dont sont créées les empreintes dentaires. Son utilisation réduit les désagréments pour les patients et améliore la précision des résultats. Cet outil remplace les empreintes traditionnelles à base de pâte, souvent inconfortables. Ainsi en combinant des innovations matérielles et logicielles, la caméra numérique redéfinit les standards de la dentisterie numérique. Elle offre une restitution exceptionnelle des détails, aussi bien pour les praticiens que pour les laboratoires. Numérisées, les empreintes sont plus fiables, les ajustements des prothèses plus précis et la communication avec le patient et le prothésiste est facilitée.",
  },
  {
    image: "https://picsum.photos/200/200?random=3",
    title: "Energie solaire",
    description:
      "Peu de temps après l’ouverture du cabinet, de nombreux panneaux photovoltaïques  ont été installés sur le toit plat du cabinet. Dans ce projet, l’accent a été mis sur l’efficacité et l’optimisation de l’espace afin d’allier performance énergétique et réduction de l’empreinte carbone. Ce système permet de produire une grande quantité d’électricité verte, tout en s’intégrant parfaitement dans l’environnement du cabinet. Ce projet montre que l’énergie solaire peut aisément être intégrée dans des lieux professionnels tels que les cabinets dentaires qui fonctionnent la journée. En choisissant l’énergie solaire, nous réduisons notre empreinte carbone et tentons de produire de l’électricité locale.",
  },
  {
    image: CFAOImage,
    title: "CFAO Cerec",
    description:
      "Des restaurations dentaires en céramique en 1 temps. La technologie CFAO (Conception et Fabrication Assisté par Ordinateur) CEREC permet de réaliser vos inlays en céramique directement au cabinet, en une seule séance. Grâce à une caméra 3D, le dentiste prend une empreinte numérique de votre dent, conçoit la restauration sur écran, puis la fabrique sur place à l’aide d’une machine de fraisage. Résultat : une restauration dentaire précise, esthétique et durable, posée le jour même, sans attente.",
  },
  {
    image: MicroscopeImage,
    title: "Microscope optique CJ-Optik",
    description:
      "Un équipement fait pour certaines interventions chirurgicales, en particulier pour retirer les parties de racines infectées. Dans une démarche de conservation, cet équipement permet de réaliser des interventions en toute sécurité et ainsi de préserver les prothèses dentaires existantes.",
  },
  {
    image: SmillersImage,
    title: "Aligneurs",
    description:
      "Gouttières transparentes préconisées  pour  réduire l'espace  de vos dents (diasteme) et l'alignements des dents. Les aligneurs sont des gouttieres invisibles, amovible portées entre 22 et 24h, et  retirées seulement pour manger et brossage des dents. La durée du traitement varie entre 6 et 24 mois, pour pré adultes et adultes. Les étapes du traitement: consultation, empreinte, traitement aligneurs et contention en fin de traitement.",
  },
  {
    image: radio,
    title: "Analyse radio assistée par IA",
    description:
      "Grâce à la visualisation instantanée générée par l'Intelligence Artificielle des éléments en couleur sur la radiographie panoramique, le praticien peut s'appuyer sur un outil visuel pour expliquer de manière simple, ludique et pédagogique les éléments présents sur la radiographie. Il va pouvoir mettre en évidence des éléments difficiles à voir pour le patient, tels que la ligne osseuse pour expliquer une éventuelle perte osseuse, ou encore les caries. Le patient, quant à lui, peut pour la première fois voir clairement ce que le praticien lui explique.",
  },
]);

const formatDescription = (text) => {
  return text.replace(/\.\s+([A-Z])/g, ".\n\n$1");
};

const nextSlide = () => {
  if (currentIndex.value < items.value.length - 1) {
    currentIndex.value++;
  }
};

const previousSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Touch support for swipe
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  if (touchStartX - touchEndX > 50) {
    nextSlide();
  }
  if (touchEndX - touchStartX > 50) {
    previousSlide();
  }
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.techno-carousel-mobile {
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  padding: $spacing-lg 0;
  overflow: hidden;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: 0 $spacing-sm;
}

.carousel-wrapper {
  flex: 1;
  overflow: hidden;
  border-radius: $border-radius;
}

.carousel-track {
  display: flex;
  transition: transform 0.4s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
}

.slide-card {
  background: $color-white;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 80vh;
  max-height: 600px;
  width: 100%;
}

.slide-image {
  width: 100%;
  height: 40%;
  overflow: hidden;
  background-color: $color-bg-blue;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.slide-content {
  flex: 1;
  padding: $spacing-lg $spacing-md;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.slide-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: $spacing-md;
  color: $color-dark;
  text-align: center;
}

.slide-description {
  flex: 1;
  overflow-y: auto;
  padding-right: $spacing-xs;
  white-space: pre-line;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: $color-bg-blue;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: $color-green;
    border-radius: 3px;
  }
}

.nav-button {
  background: $color-white;
  border: 2px solid $color-green;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  color: $color-green;

  &:hover:not(:disabled) {
    background: $color-green;
    color: $color-white;
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }
}

.pagination-dots {
  display: flex;
  justify-content: center;
  gap: $spacing-sm;
  margin-top: $spacing-lg;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: $color-bg-blue;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &--active {
    background: $color-green;
    width: 28px;
    border-radius: 5px;
  }

  &:hover {
    background: $color-green;
    opacity: 0.7;
  }
}

.slide-counter {
  text-align: center;
  margin-top: $spacing-sm;
  font-size: 0.9rem;
  color: $color-text;
  font-weight: 500;
}

// Responsive adjustments
@media (max-width: 480px) {
  .slide-card {
    height: 65vh;
  }

  .slide-title {
    font-size: 1.3rem;
    margin-bottom: $spacing-sm;
  }

  .slide-description {
    p {
      font-size: 0.9rem;
    }
  }

  .nav-button {
    width: 40px;
    height: 40px;

    :deep(svg) {
      width: 24px;
      height: 24px;
    }
  }

  .carousel-container {
    gap: $spacing-xs;
  }
}

@media (max-width: 380px) {
  .slide-content {
    padding: $spacing-md $spacing-sm;
  }

  .slide-title {
    font-size: 1.2rem;
  }

  .nav-button {
    width: 36px;
    height: 36px;
  }
}
</style>

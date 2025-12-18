<template>
  <div class="wheel-container">
    <div class="wheel-center">
      <img
        src="/images/logo trident.svg"
        alt="Trident Logo"
        class="wheel-center-logo"
      />
    </div>
    <div
      v-for="(item, index) in items"
      :key="index"
      :style="getItemStyle(index)"
      class="wheel-item"
      :class="{ 'active-item': index === 3 }"
      @click="rotateToIndex(index)"
    >
      <img :src="item.image" alt="Orbiting image" />
      <div v-if="index !== 3" class="item-title-overlay">
        <h3>{{ item.title }}</h3>
      </div>
      <div v-if="index === 3" class="item-content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div
      v-for="(item, index) in items"
      :key="'line-' + index"
      :style="getLineStyle(index)"
      class="line"
    ></div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import CFAOImage from "@/assets/images/approche/techno/CFAO.png";
import ConeBeamImage from "@/assets/images/approche/techno/ConeBeam.png";
import MicroscopeImage from "@/assets/images/approche/techno/microscope.jpg";
import SmillersImage from "@/assets/images/approche/techno/smillers.jpg";
import TriosImage from "@/assets/images/approche/techno/Trios.png";
import radio from "@/assets/images/approche/techno/radio.png";

const swapping = ref([]);
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

const numItems = items.value.length;
const radius = 300;

// Index de l'élément au centre (horizontalement aligné avec le rond noir)
const centerIndex = Math.floor(numItems / 2);

const getItemStyle = (index) => {
  const angle = -90 + (index / (numItems - 1)) * 180;
  let x = radius * Math.cos(angle * (Math.PI / 180));
  let y = radius * Math.sin(angle * (Math.PI / 180));

  let style = {
    transform: `translate(${x}px, ${y}px)`,
    cursor: index !== centerIndex ? "pointer" : "default",
    opacity: swapping.value.includes(index) ? 0 : 1,
  };

  // Apply specific styles for the 4th item (index 3)
  if (index === 3) {
    const rightOffset = 200; // Adjust this value as needed to move it further right
    style.transform = `translate(${x + rightOffset}px, ${y}px)`;
    style.height = "80vh";
    style.borderRadius = "5";
  }
  return style;
};

const getLineStyle = (index) => {
  const angle = -90 + (index / (numItems - 1)) * 180;
  let lineHeight = radius; // Default height

  if (index === 3) {
    // For the 4th item, make the line longer to reach the rectangle
    // The height property, when rotated -90deg, controls the horizontal length
    lineHeight = radius + 250; // Arbitrarily increased by 250px for now. This will need adjustment based on visual.
  }

  return {
    transform: `rotate(${angle - 90}deg)`,
    height: `${lineHeight}px`,
  };
};

const rotateToIndex = (clickedIndex) => {
  // Ne rien faire si on clique sur l'image centrale
  if (clickedIndex === centerIndex) return;

  // Échanger les positions de l'image cliquée avec l'image centrale
  const temp = items.value[centerIndex];
  items.value[centerIndex] = items.value[clickedIndex];
  items.value[clickedIndex] = temp;
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
.wheel-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.wheel-center {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wheel-item {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.wheel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wheel-item:not(.active-item) {
  border: 2px solid black;
  background-color: white;
}

.wheel-item:not(.active-item) img {
  opacity: 0.5;
}

.wheel-center-logo {
  width: 80%; /* Adjust as needed to fill the circle nicely */
  height: 80%; /* Adjust as needed */
  object-fit: contain;
}

.item-title-overlay {
  position: absolute;
  color: white;
  text-align: center;
  width: 100%;
  z-index: 2;
  h3 {
    font-size: 1.2rem;
    margin: 0;
  }
}

.wheel-item.active-item {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  max-width: 800px;
  height: 100vh;
  background-color: $color-bg-blue;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: -31px 44px 1px $color-green;
}

.wheel-item.active-item img {
  width: 100%;
  height: 50%; /* Adjust as needed */
  object-fit: cover;
}

.item-content {
  padding: 20px;
  color: black;
  text-align: center;
  p {
    white-space: pre-line;
  }
}

.line {
  position: absolute;
  width: 1px;
  background-color: black;
  transform-origin: top;
  top: 50%;
  left: 75px;
  z-index: 0;
}
</style>

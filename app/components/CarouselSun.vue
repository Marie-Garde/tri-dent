<template>
  <div class="wrapper">
    <!-- Left side navigation (circle map) -->
    <div class="circle-map">
      <div class="center-circle">
        <img src="/images/logo trident.svg" alt="Logo" />
      </div>

      <div
        v-for="(item, index) in items"
        :key="index"
        class="circle-item"
        :style="getCirclePosition(index, items.length)"
        @click="current = index"
      >
        <div class="circle" :class="{ active: current === index }">
          <img :src="item.icon" :alt="item.title" />
          <span>{{ item.title }}</span>
        </div>
        <div class="line" />
      </div>
    </div>

    <!-- Right side carousel -->
    <div class="carousel-card">
      <img :src="items[current].image" class="carousel-image" />

      <div class="carousel-content">
        <h2>{{ items[current].title }}</h2>
        <p>{{ items[current].text }}</p>

        <div class="nav">
          <button @click="prev">‹</button>
          <button @click="next">›</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const current = ref(0);

const items = [
  {
    title: "CFAO",
    icon: "/images/approche/icons/attendance.svg",
    image: "/images/approche/microscope.png",
    text: "iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  },
  {
    title: "CBCT",
    icon: "/images/approche/icons/calendar.svg",
    image: "/images/approche/microscope.png",
    text: "iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  },
  {
    title: "Implantologie",
    icon: "/images/approche/icons/inform.svg",
    image: "/images/approche/microscope.png",
    text: "iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  },
  {
    title: "Laser",
    icon: "/images/approche/icons/network.svg",
    image: "/images/approche/microscope.png",
    text: "iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  },
  {
    title: "Stérilisation",
    icon: "/images/approche/icons/search.svg",
    image: "/images/approche/microscope.png",
    text: "iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  },
  {
    title: "Smilers",
    icon: "/images/approche/icons/search.svg",
    image: "/images/approche/microscope.png",
    text: "iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  },
];

const next = () => {
  current.value = (current.value + 1) % items.length;
};

const prev = () => {
  current.value = (current.value - 1 + items.length) % items.length;
};

// Positionnement circulaire des marqueurs
const getCirclePosition = (index, total) => {
  // Sur un cercle :
  // 0° = droite
  // 90° = haut
  // 180° = gauche
  // 270° = bas
  const startDeg = 270;
  const endDeg = 450;

  const angleDeg = startDeg + (index / (total - 1)) * (endDeg - startDeg);
  const angle = (angleDeg * Math.PI) / 180;

  const radius = 300; // écarte du centre
  const r = 75; // rayon du petit cercle

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  // Ligne vers le centre : angle + 180°
  const lineAngle = angle + Math.PI;

  return {
    transform: `translate(${x - r}px, ${y - r}px)`,
    "--angle": `${lineAngle - 1.25}rad`,
    "--line-length": `70px`,
  };
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.wrapper {
  max-width: 1240px;
  margin: 0 auto;
  margin-top: $spacing-xl;
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  flex-wrap: wrap;
}

/* -------- LEFT : CIRCLE MAP -------- */
.circle-map {
  position: relative;
  width: 380px;
  height: 380px;
  min-width: 320px;
}

.center-circle {
  width: 250px;
  height: 250px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.center-circle img {
  width: 80%;
  height: auto;
}

.circle-item {
  position: absolute;
  top: 50%;
  left: 50%;
  --angle: 0rad;
}

.circle-item .line {
  position: absolute;
  width: 2px;
  height: var(--line-length);
  background: #b7c4c8;
  left: 50%;
  top: 50%;

  transform-origin: bottom center;

  transform: rotate(var(--angle));
}

.circle {
  width: 135px;
  height: 135px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  padding: 0.5rem;
  transition: 0.2s;
}

.circle.active {
  border: 2px solid #0086a8;
  transform: scale(1.1);
}

.circle img {
  width: 60%;
  opacity: 0.7;
}

.circle span {
  font-size: 0.7rem;
  margin-top: 0.3rem;
  opacity: 0.8;
}

/* -------- RIGHT : CAROUSEL -------- */
.carousel-card {
  width: 100%;
  max-width: 480px;
  background-color: $color-bg-blue;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: -31px 44px 1px $color-green;
}

.carousel-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.carousel-content {
  padding: 1.5rem;
  text-align: center;
}

.carousel-content h2 {
  margin: 0 0 1rem;
  color: #004d5f;
}

.carousel-content p {
  margin-bottom: 1rem;
  line-height: 1rem;
}

.nav {
  display: flex;
  justify-content: space-between;
}

.nav button {
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  background: transparent;
  border-radius: $border-radius;
  color: #007c96;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.nav button:hover {
  background: #007c96;
  color: white;
}

/* -------- RESPONSIVE -------- */
@media (max-width: 900px) {
  .wrapper {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .circle-map {
    transform: scale(0.8);
  }
}
</style>

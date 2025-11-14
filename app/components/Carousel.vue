<template>
  <div class="carousel" :style="carouselStyle" mask>
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  itemCount: {
    type: Number,
    required: true,
  },
  itemWidth: {
    type: String,
    default: "280px",
  },
  itemHeight: {
    type: String,
    default: "294px",
  },
  gap: {
    type: String,
    default: "2rem",
  },
  duration: {
    type: String,
    default: "40s",
  },
});

const carouselStyle = computed(() => {
  return `
    --items: ${props.itemCount};
    --carousel-duration: ${props.duration};
    --carousel-item-width: ${props.itemWidth};
    --carousel-item-height: ${props.itemHeight};
    --carousel-item-gap: ${props.gap};
  `;
});
</script>

<style scoped>
.carousel {
  position: relative;
  width: min(80vw, 1200px);
  height: var(--carousel-item-height);
  overflow: clip;
  margin-top: 2rem;
}

.carousel[mask] {
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10% 90%,
    transparent
  );
}

/* chaque enfant agit comme un article du carrousel */
.carousel > * {
  position: absolute;
  top: 0;
  width: var(--carousel-item-width);
  height: var(--carousel-item-height);
  will-change: transform;
  animation-name: marquee;
  animation-duration: var(--carousel-duration);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* applique un décalage basé sur la variable --i passée dans le style inline */
.carousel > * {
  left: calc(100% + var(--carousel-item-gap));
  animation-delay: calc(
    var(--carousel-duration) / var(--items) * var(--i) * -1
  );
}

@keyframes marquee {
  100% {
    transform: translateX(
      calc(
        (var(--items) * (var(--carousel-item-width) + var(--carousel-item-gap))) *
          -1
      )
    );
  }
}

/* pause à l'arrêt */
.carousel:hover > * {
  animation-play-state: paused;
}
</style>

<template>
  <div class="playlist-carousel">
    <div class="cards">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="card"
        :class="getPositionClass(idx)"
        @click="selected = idx"
      >
        <img :src="item.image" :alt="item.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selected = ref(0);

const items = [
  { title: "Bunker", image: "/images/approche/cabinet1.png" },
  { title: "Words Remain", image: "/images/approche/cabinet2.png" },
  { title: "Falling Out", image: "/images/approche/cabinet3.png" },
  { title: "Extra 1", image: "/images/home/cabinet.png" },
  { title: "Extra 2", image: "/images/home/home team.png" },
];

function getPositionClass(idx) {
  const n = items.length;

  if (idx === selected.value) return "is-active";

  if (idx === (selected.value - 1 + n) % n) return "is-prev";

  if (idx === (selected.value + 1) % n) return "is-next";

  return "is-hidden";
}
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.playlist-carousel {
  margin: 0 auto;
  margin-top: 2 * $spacing-xl;
  max-width: 1240px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
  font-family: "DM Sans", sans-serif;

  .cards {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;

    .card {
      position: absolute;
      width: 60%;
      height: 100%;
      left: 0;
      right: 0;
      margin: auto;
      transition: transform 0.4s ease, opacity 0.3s ease;
      cursor: pointer;
      opacity: 0;
      z-index: 0;
      pointer-events: none;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &.is-active {
        transform: translateX(0) scale(1);
        opacity: 1;
        z-index: 3;
        width: 80%;
        pointer-events: auto;

        img {
          box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.06);
        }
      }

      &.is-prev {
        transform: translateX(-50%) translateY(-25%) scale(0.8);
        opacity: 1;
        z-index: 2;
        mask-image: linear-gradient(to right, transparent 0%, black 10%);
        pointer-events: auto;
      }

      &.is-next {
        transform: translateX(50%) translateY(-25%) scale(0.8);
        opacity: 1;
        z-index: 2;
        mask-image: linear-gradient(to left, transparent 0%, black 10%);
        pointer-events: auto;
      }

      &.is-hidden {
        opacity: 0;
        z-index: 0;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 3 * $spacing-lg;
    height: 300px;

    .cards .card {
      width: 60%;
    }
  }

  @media (max-width: 600px) {
    margin-top: $spacing-lg;
    height: 30vh;

    .cards .card {
      width: 80%;
    }
  }
}
</style>

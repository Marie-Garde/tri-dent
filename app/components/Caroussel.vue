<template>
  <div
    class="carousel"
    ref="root"
    tabindex="0"
    @keydown.left.prevent="prev"
    @keydown.right.prevent="next"
  >
    <div
      class="viewport"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div
        class="track"
        :style="{
          transform: `translateX(${translate}px)`,
          transition: 'transform .35s ease',
        }"
      >
        <div
          v-for="(slide, idx) in slides"
          :key="slideKey(slide, idx)"
          class="slide"
          :aria-hidden="
            idx < current || idx >= current + visibleCount ? 'true' : 'false'
          "
        >
          <slot name="slide" :slide="slide">
            <img v-if="isString(slide)" :src="slide" :alt="'slide-' + idx" />
            <div v-else class="slide-content">
              {{ slide && slide.title ? slide.title : slide }}
            </div>
          </slot>
        </div>
      </div>
    </div>

    <div
      v-if="showArrows && slides.length > visibleCount"
      class="arrow prev"
      @click="prev"
      aria-label="Previous"
      role="button"
    >
      ‹
    </div>

    <div
      v-if="showArrows && slides.length > visibleCount"
      class="arrow next"
      @click="next"
      aria-label="Next"
      role="button"
    >
      ›
    </div>
  </div>
</template>

<!-- ! Cette saloperie ne fonctionne pas ! -->
<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  slides: { type: Array, default: () => [] },
  modelValue: { type: Number, default: 0 },
  loop: { type: Boolean, default: false }, // minimal default: no loop
  showArrows: { type: Boolean, default: true },
  showIndicators: { type: Boolean, default: false }, // accepted for API compatibility (ignored)
});

const emit = defineEmits(["update:modelValue", "change"]);

const root = ref(null);
const containerWidth = ref(0);
const internal = ref(props.modelValue || 0);
const touchStartX = ref(0);
const touchDeltaX = ref(0);
const isString = (v) => typeof v === "string" || v instanceof String;

const current = computed({
  get() {
    return typeof props.modelValue === "number"
      ? props.modelValue
      : internal.value;
  },
  set(v) {
    const clamped = Math.max(0, Math.min(v, maxIndex.value));
    if (typeof props.modelValue === "number")
      emit("update:modelValue", clamped);
    else {
      internal.value = clamped;
      emit("update:modelValue", clamped);
    }
    emit("change", clamped);
  },
});

const visibleCount = ref(3);
function computeVisibleCount(w) {
  if (w >= 1024) return 3;
  if (w >= 768) return 2;
  return 1;
}

function onResize() {
  const w = root.value ? root.value.clientWidth : window.innerWidth;
  containerWidth.value = w;
  visibleCount.value = computeVisibleCount(window.innerWidth);
}

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
  if (root.value) root.value.setAttribute("tabindex", "0");
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});

const maxIndex = computed(() =>
  Math.max(0, props.slides.length - visibleCount.value)
);

watch([visibleCount, () => props.slides.length], () => {
  if (current.value > maxIndex.value) current.value = maxIndex.value;
});

const translate = computed(() => {
  const w = containerWidth.value || window.innerWidth;
  const step = w / visibleCount.value;
  return -(current.value * step);
});

function slideKey(slide, idx) {
  return slide && slide.id ? slide.id : idx;
}

function next() {
  if (!props.slides.length) return;
  if (current.value >= maxIndex.value) {
    if (props.loop) current.value = 0;
    else current.value = maxIndex.value;
  } else {
    current.value = current.value + 1;
  }
}

function prev() {
  if (!props.slides.length) return;
  if (current.value <= 0) {
    if (props.loop) current.value = maxIndex.value;
    else current.value = 0;
  } else {
    current.value = current.value - 1;
  }
}

// touch handlers (simple swipe)
function onTouchStart(e) {
  touchStartX.value = e.touches[0].clientX;
  touchDeltaX.value = 0;
}
function onTouchMove(e) {
  touchDeltaX.value = e.touches[0].clientX - touchStartX.value;
}
function onTouchEnd() {
  const threshold = 40;
  if (touchDeltaX.value > threshold) prev();
  else if (touchDeltaX.value < -threshold) next();
  touchDeltaX.value = 0;
}
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  outline: none;
  user-select: none;
}

.viewport {
  width: 100%;
  height: 100%;
}

.track {
  display: flex;
  will-change: transform;
}

.slide {
  flex: 0 0 calc(100% / 3);
  box-sizing: border-box;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide img {
  max-width: 100%;
  display: block;
  object-fit: contain;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  font-size: 1.25rem;
  border-radius: 4px;
}
.arrow:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
.prev {
  left: 8px;
}
.next {
  right: 8px;
}

@media (max-width: 767px) {
  .slide {
    flex-basis: calc(100% / 1);
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .slide {
    flex-basis: calc(100% / 2);
  }
}
@media (min-width: 1024px) {
  .slide {
    flex-basis: calc(100% / 3);
  }
}
</style>

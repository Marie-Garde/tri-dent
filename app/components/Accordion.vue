<template>
  <div class="accordion">
    <div class="accordion-header" @click="toggleAccordion">
      <h3>{{ title }}</h3>
      <span>{{ props.modelValue ? "-" : "+" }}</span>
    </div>
    <Transition name="accordion-slide">
      <div v-if="props.modelValue" class="accordion-content">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  id: {
    type: [String, Number],
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const toggleAccordion = () => {
  emit("update:modelValue", props.id);
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.accordion {
  width: 100%;
  margin-bottom: $spacing-md;
}

.accordion-header {
  box-shadow: 0 2px 4px rgba($color-dark, 0.25);
  background-color: $color-green;
  border-radius: $border-radius;
  padding: $spacing-md;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    color: $color-white;
  }

  span {
    color: $color-white;
    font-size: 4rem;
    line-height: 1rem;
  }
}

.accordion-content {
  padding: $spacing-md $spacing-lg;
  background-color: $color-yellow-transparent;
  border-radius: $border-radius;
  box-shadow: 0 2px 4px rgba($color-dark, 0.25);
}

/* Accordion Slide Transition */
.accordion-slide-enter-active,
.accordion-slide-leave-active {
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
}

.accordion-slide-enter-from,
.accordion-slide-leave-to {
  max-height: 0;
}

.accordion-slide-enter-to,
.accordion-slide-leave-from {
  max-height: 500px; /* Adjust as needed, ensure it's larger than max possible content height */
}

@media (max-width: 768px) {
  .accordion-header > h3 {
    font-size: 1rem;
  }
}
</style>

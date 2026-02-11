<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="input-line"
      :class="{ 'error-border': error }"
    />
    <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
.input-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input-line {
  border: none;
  border-bottom: 1px solid #aaa;
  padding: 0.6rem 0;
  background: transparent;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.2s;
  width: 100%;

  &::placeholder {
    color: #7b7b7b;
    font-family: "Raleway", sans-serif;
  }

  &:focus {
    border-bottom-color: #2563eb;
  }

  &.error-border {
    border-bottom-color: red;
  }
}

.error-message {
  color: red;
  font-size: 0.8rem;
  position: absolute;
  bottom: -1.5rem;
}
</style>

<template>
  <div class="doctor-selector" ref="dropdownRef">
    <div
      class="doctor-toggle"
      @click="isDoctorListVisible = !isDoctorListVisible"
      :class="{ 'error-border': error }"
    >
      <div v-if="selectedDoctor" class="selected-doctor">
        <img
          v-if="selectedDoctor.image"
          :src="selectedDoctor.image"
          :alt="selectedDoctor.name"
          class="doctor-image"
        />
        <span class="doctor-name">{{ selectedDoctor.name }}</span>
      </div>
      <div v-else class="doctor-placeholder">
        <span>{{ placeholder }}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="chevron-icon"
        :class="{ 'chevron-icon--rotated': isDoctorListVisible }"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div v-if="isDoctorListVisible" class="doctor-list">
      <div class="doctor-item" @click="selectDoctor(noReferrerOption)">
        <span class="doctor-name">{{ noReferrerOption.name }}</span>
      </div>
      <div
        v-for="doctor in doctors"
        :key="doctor.name"
        class="doctor-item"
        @click="selectDoctor(doctor)"
      >
        <img :src="doctor.image" :alt="doctor.name" class="doctor-image" />
        <span class="doctor-name">{{ doctor.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps({
  doctors: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Praticien",
  },
  error: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isDoctorListVisible = ref(false);
const selectedDoctor = ref(null);
const dropdownRef = ref(null);

const noReferrerOption = { name: "Pas de dentiste référent", image: null };

const selectDoctor = (doctor) => {
  selectedDoctor.value = doctor;
  isDoctorListVisible.value = false;
  emit("update:modelValue", doctor.name);
};

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue === noReferrerOption.name) {
      selectedDoctor.value = noReferrerOption;
    } else {
      selectedDoctor.value =
        props.doctors.find((d) => d.name === newValue) || null;
    }
  },
  { immediate: true },
);

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDoctorListVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
.doctor-selector {
  position: relative;
  width: 100%;
}

.doctor-toggle {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  border: none;
  border-bottom: 1px solid #aaa;
  background-color: transparent;
  transition: border-color 0.2s;

  &.error-border {
    border-bottom-color: red;
  }
}

.chevron-icon {
  transition: transform 0.3s ease;
  width: 24px;
  height: 24px;
  color: #7b7b7b;

  &--rotated {
    transform: rotate(180deg);
  }
}

.selected-doctor {
  display: flex;
  align-items: center;
  gap: $spacing-md;
}

.doctor-placeholder {
  color: #7b7b7b;
}

.doctor-list {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: 100%;
  background-color: $color-white;
  border: 1px solid #ddd;
  border-radius: $border-radius;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: auto;
}

.doctor-item {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  padding: $spacing-sm $spacing-md;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
}

.doctor-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
</style>

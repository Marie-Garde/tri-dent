<template>
  <form class="contact-form">
    <!-- Row 1: Nom | Prénom -->
    <div class="form-row">
      <input
        v-model="form.lastName"
        type="text"
        placeholder="Nom"
        class="input-line"
      />
      <input
        v-model="form.firstName"
        type="text"
        placeholder="Prénom"
        class="input-line"
      />
    </div>

    <!-- Row 2: Email | Téléphone -->
    <div class="form-row">
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="input-line"
      />
      <input
        v-model="form.phone"
        type="tel"
        placeholder="Téléphone"
        class="input-line"
      />
    </div>

    <!-- Dentiste référent -->
    <div class="form-row single">
      <input
        v-model="form.dentist"
        type="text"
        placeholder="Dentiste référent"
        class="input-line"
      />
    </div>

    <!-- Message -->
    <div class="form-row single">
      <textarea
        v-model="form.message"
        placeholder="Message"
        class="input-line textarea"
      ></textarea>
    </div>

    <button type="submit" @click.prevent="submitForm" class="submit-btn">
      Envoyer
    </button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  dentist: "",
  message: "",
});

function submitForm() {
  console.log("Formulaire envoyé:", form);
}
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
.contact-form {
  width: 100%;
  max-width: 600px;
  margin: $spacing-lg auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  &.single {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    &.single {
      grid-template-columns: 1fr;
    }
  }
}

.input-line {
  border: none;
  border-bottom: 1px solid #aaa;
  padding: 0.6rem 0;
  background: transparent;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.2s;

  &::placeholder {
    color: #7b7b7b;
  }

  &:focus {
    border-bottom-color: #2563eb;
  }
}

.textarea {
  height: 120px;
  resize: none;
}

.submit-btn {
  cursor: pointer;
  border: none;
  width: 180px;
  padding: 0.75rem;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  text-align: center;
  background-color: $color-yellow-transparent;
  color: $color-dark;
  border-radius: $border-radius;
  text-decoration: none;
  font-size: $spacing-md;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: darken($color-yellow-transparent, 10%);
  }
}
</style>

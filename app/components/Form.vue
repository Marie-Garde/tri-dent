<script setup lang="ts">
import emailjs from "@emailjs/browser";
import DoctorDropdown from "./DoctorDropdown.vue";
import TextInput from "./TextInput.vue";
import TextareaInput from "./TextareaInput.vue";
import { useDoctorsStore } from "~/stores/doctors";

const doctorsStore = useDoctorsStore();

onMounted(async () => {
  await doctorsStore.fetchDoctors();
});

const doctors = computed(() =>
  doctorsStore.doctorsWithContact.map((d) => ({
    name: d.nom,
    image: doctorsStore.avatarUrl(d),
  })),
);

const form = reactive({
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  dentist: "",
  message: "",
  rgpdConsent: false,
});

const errors = reactive<Record<string, string>>({});
const isSubmitting = ref(false);
const status = reactive({
  message: "",
  type: "",
});

const config = useRuntimeConfig();
const EMAILJS_SERVICE_ID = config.public.emailjsServiceId;
const EMAILJS_TEMPLATE_ID = config.public.emailjsTemplateId;
const EMAILJS_PUBLIC_KEY = config.public.emailjsPublicKey;

const validateForm = () => {
  errors.lastName = !form.lastName ? "Le nom est requis." : "";
  errors.firstName = !form.firstName ? "Le prénom est requis." : "";
  errors.dentist = !form.dentist ? "Le dentiste référent est requis." : "";
  errors.message = !form.message ? "Un message est requis." : "";
  errors.rgpdConsent = !form.rgpdConsent
    ? "Vous devez accepter les conditions."
    : "";

  if (!form.email && !form.phone) {
    errors.email = "L'email ou le téléphone est requis.";
    errors.phone = "L'email ou le téléphone est requis.";
  } else {
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = "L'adresse email n'est pas valide.";
    } else if (!errors.phone) {
      errors.email = "";
    }
    if (!form.email) {
      errors.phone = "";
    }
  }

  return Object.values(errors).every((error) => !error);
};

async function submitForm() {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  status.message = "";

  try {
    const templateParams = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email || "Non renseigné",
      phone: form.phone || "Non renseigné",
      dentist: form.dentist,
      message: form.message,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY,
    );

    status.message =
      "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.";
    status.type = "success";

    Object.keys(form).forEach((key) => {
      (form as Record<string, string | boolean>)[key] =
        key === "rgpdConsent" ? false : "";
    });

    Object.keys(errors).forEach((key) => {
      errors[key] = "";
    });
  } catch (error) {
    status.message =
      "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.";
    status.type = "error";
  } finally {
    isSubmitting.value = false;

    setTimeout(() => {
      status.message = "";
    }, 7000);
  }
}
</script>

<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <div class="form-row">
      <TextInput
        v-model="form.lastName"
        placeholder="Nom"
        :error="!!errors.lastName"
        :errorMessage="errors.lastName"
      />
      <TextInput
        v-model="form.firstName"
        placeholder="Prénom"
        :error="!!errors.firstName"
        :errorMessage="errors.firstName"
      />
    </div>

    <div class="form-row">
      <TextInput
        v-model="form.email"
        type="email"
        placeholder="Email"
        :error="!!errors.email"
        :errorMessage="errors.email"
      />
      <TextInput
        v-model="form.phone"
        type="tel"
        placeholder="Téléphone"
        :error="!!errors.phone"
        :errorMessage="errors.phone"
      />
    </div>

    <div class="form-row single">
      <DoctorDropdown
        v-model="form.dentist"
        :doctors="doctors"
        placeholder="Dentiste référent"
        :error="!!errors.dentist"
      />
      <span v-if="errors.dentist" class="error-message">{{
        errors.dentist
      }}</span>
    </div>

    <div class="form-row single">
      <TextareaInput
        v-model="form.message"
        placeholder="Message"
        :error="!!errors.message"
        :errorMessage="errors.message"
      />
    </div>

    <div class="form-row single">
      <div class="input-wrapper">
        <label
          class="checkbox-label"
          :class="{ 'error-text': errors.rgpdConsent }"
        >
          <input v-model="form.rgpdConsent" type="checkbox" />
          <span>
            J'accepte que mes données soient collectées et traitées pour
            répondre à ma demande.
            <a href="/mentions-legales" target="_blank">En savoir plus</a>
            *
          </span>
        </label>
        <span v-if="errors.rgpdConsent" class="error-message">{{
          errors.rgpdConsent
        }}</span>
      </div>
    </div>

    <div v-if="status.message" :class="['status-message', status.type]">
      {{ status.message }}
    </div>

    <button type="submit" class="submit-btn" :disabled="isSubmitting">
      {{ isSubmitting ? "Envoi en cours..." : "Envoyer" }}
    </button>
  </form>
</template>

<style lang="scss" scoped>
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

.input-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  position: absolute;
  bottom: -1.5rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #555;
  cursor: pointer;
  user-select: none;

  input[type="checkbox"] {
    margin-top: 0.2rem;
    cursor: pointer;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  span {
    line-height: 1.5;
  }

  a {
    color: #2563eb;
    text-decoration: underline;

    &:hover {
      color: #1d4ed8;
    }
  }

  &.error-text span {
    color: red;
  }
}

.status-message {
  padding: 1rem;
  border-radius: $border-radius;
  text-align: center;
  font-size: 0.95rem;
  animation: slideIn 0.3s ease;

  &.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover:not(:disabled) {
    background-color: $color-yellow-transparent-hover;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>

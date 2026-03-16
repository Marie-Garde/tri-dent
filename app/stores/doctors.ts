import { defineStore } from "pinia";
import { getSanityClient, urlFor } from "~/lib/sanity";
import type { SanityDoctor } from "~/types/doctor";

export const useDoctorsStore = defineStore("doctors", {
  state: () => ({
    doctors: [] as SanityDoctor[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    partners: (state) => state.doctors.filter((d) => d.role === "partner"),

    dentists: (state) => state.doctors.filter((d) => d.role === "doctor"),

    assistants: (state) => state.doctors.filter((d) => d.role === "assistant"),

    doctorsWithContact: (state) =>
      state.doctors.filter((d) => d.contact && d.contact.length > 0),

    avatarUrl: () => (doctor: SanityDoctor) => {
      if (doctor.avatar?.asset) {
        return urlFor(doctor.avatar).width(460).url();
      }
      return "/images/avatar.png";
    },
  },

  actions: {
    async fetchDoctors() {
      if (this.doctors.length > 0) return;

      this.loading = true;
      this.error = null;

      try {
        const query = `*[_type == "doctor"] | order(nom asc) {
          _id,
          nom,
          role,
          avatar,
          description,
          contact[] {
            type,
            valeur
          }
        }`;

        this.doctors = await getSanityClient().fetch(query);
      } catch (err: any) {
        this.error = err.message || "Erreur lors du chargement de l'équipe";
      } finally {
        this.loading = false;
      }
    },
  },
});

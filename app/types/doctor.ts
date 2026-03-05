export interface DoctorContact {
  type: "email" | "phone" | "doctolib";
  valeur: string;
}

export interface SanityDoctor {
  _id: string;
  nom: string;
  role: "partner" | "doctor" | "assistant";
  avatar?: {
    asset: { _ref: string };
    alt?: string;
  };
  contact?: DoctorContact[];
}

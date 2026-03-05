export interface DoctorContact {
  type: "email" | "phone" | "doctolib";
  valeur: string;
}

export interface SanityDoctor {
  _id: string;
  nom: string;
  role: "partner" | "doctor" | "assistant";
  description: string;
  avatar?: {
    asset: { _ref: string };
    alt?: string;
  };
  contact?: DoctorContact[];
}

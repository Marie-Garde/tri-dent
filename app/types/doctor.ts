export interface DoctorContact {
  type: "email" | "phone" | "doctolib" | "logos";
  valeur: string;
}

export interface SanityDoctor {
  _id: string;
  index: number;
  nom: string;
  role: "partner" | "doctor" | "assistant";
  description: string;
  avatar?: {
    asset: { _ref: string };
    alt?: string;
  };
  contact?: DoctorContact[];
}

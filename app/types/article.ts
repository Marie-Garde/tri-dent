export interface Tag {
  _id: string;
  titre: string;
}

export interface Thematique {
  _id: string;
  titre: string;
}

export interface Article {
  _id: string;
  titre: string;
  slug: {
    current: string;
  };
  icone?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  contenu?: any[];
  tags?: Tag[];
  thematique?: Thematique[];
  publishedAt: string;
}

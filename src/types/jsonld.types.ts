export interface JsonLdTypes {
  Product: "Product";
  WebSite: "WebSite";
  AboutPage: "AboutPage";
  CollectionPage: "CollectionPage";
}

export type JsonLdKeys = keyof JsonLdTypes;

export interface Availability {
  InStock: "InStock";
  OutOfStock: "OutOfStock";
  PreOrder: "PreOrder";
  Discontinued: "Discontinued";
}

export type AvailabilityKeys = keyof Availability;

interface OffersInput {
  price: number | string;
  availability: AvailabilityKeys;
}

export interface Offers {
  "@type": "Offer";
  url: string;
  priceCurrency: string;
  price: number | string;
  availability: AvailabilityKeys;
}

export interface JsonLdInput {
  "@type": JsonLdKeys;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  offers?: OffersInput;
}

export interface JsonLd {
  "@type": JsonLdKeys;
  "@context": string;
  image?: string;
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  offers?: Offers;
}

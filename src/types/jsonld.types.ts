export interface JsonLdTypes {
  Product: "Product";
  WebSite: "WebSite";
  AboutPage: "AboutPage";
  CollectionPage: "CollectionPage";
}

export type JsonLdKeys = keyof JsonLdTypes;

export interface JsonLdInput {
  "@type": JsonLdKeys;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

export interface JsonLd extends JsonLdInput {
  "@context": string;
  name: string;
  description: string;
  url: string;
}

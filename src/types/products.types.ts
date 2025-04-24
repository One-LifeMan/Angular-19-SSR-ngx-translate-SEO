import { AvailabilityKeys } from "./jsonld.types";

export interface ServerProduct {
  id: number;
  name: Record<string, string>;
  slug: string;
  description: Record<string, string>;
  shortDesc: Record<string, string>;
  metaDesc: Record<string, string>;
  price: number;
  color: string;
  src: string | null;
  createdAt: string;
  updatedAt: string;
  availability: AvailabilityKeys;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDesc: string;
  metaDesc: string;
  price: number;
  color: string;
  src: string | null;
  createdAt: string;
  updatedAt: string;
  availability: AvailabilityKeys;
}

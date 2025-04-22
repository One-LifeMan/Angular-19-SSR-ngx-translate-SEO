import { JsonLdInput } from "./jsonld.types";

export enum SeoKeysEnum {
  Home = "HOME",
  About = "ABOUT",
  Products = "PRODUCTS",
  ProductsDetails = "PRODUCTS_DETAILS",
  NotFound = "404",
}

export interface SeoOptions {
  key: string;
  jsonLd: JsonLdInput;
  params?: Record<string, string>;
}

export interface ProductDetailsParams {
  name: string;
  desc: string;
}

import { Product, ServerProduct } from "src/types/products.types";

export const serverProducts: Array<ServerProduct> = [
  {
    id: 1,
    name: { en: "Apple", uk: "Яблуко" },
    slug: "apple",
    description: { en: "Fresh and juicy apple", uk: "Свіже та соковите яблуко" },
    metaDesc: { en: "Buy fresh apples", uk: "Купуйте свіжі яблука" },
    price: 1.2,
    color: "red",
    src: "v1744617529/apples_hd9yit.png",
    createdAt: new Date("2023-10-01T12:00:00Z").toISOString(),
    updatedAt: new Date("2023-10-01T12:00:00Z").toISOString(),
    availability: "InStock",
  },
  {
    id: 2,
    name: { en: "Pear", uk: "Груша" },
    slug: "pear",
    description: { en: "Sweet and delicious pear", uk: "Солодка та смачна груша" },
    metaDesc: { en: "Buy sweet pears", uk: "Купуйте солодкі груші" },
    price: 1.5,
    color: "green",
    src: "v1744617529/pears_g18zef.png",
    createdAt: new Date("2024-10-01T12:00:00Z").toISOString(),
    updatedAt: new Date("2024-10-01T12:00:00Z").toISOString(),
    availability: "InStock",
  },
  {
    id: 3,
    name: { en: "Plum", uk: "Слива" },
    slug: "plum",
    description: { en: "Ripe and tasty plum", uk: "Стигла та смачна слива" },
    metaDesc: { en: "Buy ripe plums", uk: "Купуйте стиглі сливи" },
    price: 1.8,
    color: "purple",
    src: "v1744617529/plums_nkpac0.png",
    createdAt: new Date("2025-03-01T12:00:00Z").toISOString(),
    updatedAt: new Date("2025-03-01T12:00:00Z").toISOString(),
    availability: "InStock",
  },
  {
    id: 4,
    name: { en: "Orange", uk: "Апельсин" },
    slug: "orange",
    description: { en: "Citrusy and refreshing orange", uk: "Цитрусовий та освіжаючий апельсин" },
    metaDesc: { en: "Buy fresh oranges", uk: "Купуйте свіжі апельсини" },
    price: 2.0,
    color: "orange",
    src: "v1744617529/oranges_zy3pcb.png",
    createdAt: new Date("2025-04-01T12:00:00Z").toISOString(),
    updatedAt: new Date("2025-04-01T12:00:00Z").toISOString(),
    availability: "InStock",
  },
  {
    id: 5,
    name: { en: "Banana", uk: "Банан" },
    slug: "banana",
    description: { en: "Soft and sweet banana", uk: "М'який та солодкий банан" },
    metaDesc: { en: "Buy fresh bananas", uk: "Купуйте свіжі банани" },
    price: 1.3,
    color: "yellow",
    createdAt: new Date("2025-04-10T12:00:00Z").toISOString(),
    updatedAt: new Date("2025-04-10T12:00:00Z").toISOString(),
    availability: "InStock",
    src: null,
  },
];

export const getAllProducts = (language: string) => {
  const products = serverProducts.map(p => {
    const product: Product = {
      ...p,
      name: p.name[language],
      description: p.description[language],
      metaDesc: p.metaDesc[language],
    };
    return product;
  });

  return products;
};

export const getProductBySlug = (slug: string, language: string) => {
  const serverProduct = serverProducts.find(p => p.slug === slug);

  if (!serverProduct) {
    return null;
  }
  const product: Product = {
    ...serverProduct,
    name: serverProduct.name[language],
    description: serverProduct.description[language],
    metaDesc: serverProduct.metaDesc[language],
  };

  return product;
};

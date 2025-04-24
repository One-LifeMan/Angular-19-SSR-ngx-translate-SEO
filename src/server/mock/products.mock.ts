import { Product, ServerProduct } from "src/types/products.types";

export const serverProducts: Array<ServerProduct> = [
  {
    id: 1,
    name: { en: "Apple", uk: "Яблуко" },
    slug: "apple",
    description: {
      en: "Apple is not just a delicious fruit, but a true symbol of a healthy lifestyle. Its crunchy texture, refreshing taste and richness in vitamin C make it an ideal option for your daily diet. Apples strengthen the immune system, improve digestion and help normalize blood sugar levels. Eat them fresh, add to salads or bake delicious pies - an apple will always be appropriate.",
      uk: "Яблуко — це не просто смачний фрукт, а справжній символ здорового способу життя. Його хрустка текстура, освіжаючий смак і насиченість вітаміном C роблять його ідеальним варіантом для щоденного раціону. Яблука зміцнюють імунну систему, покращують травлення та сприяють нормалізації рівня цукру в крові. Вживайте їх свіжими, додавайте в салати або випікайте смачні пироги — яблуко завжди буде доречним.",
    },
    shortDesc: {
      en: "A juicy and crunchy apple is a source of vitamins and antioxidants. Perfect for snacking, making desserts or adding to salads.",
      uk: "Соковите та хрустке яблуко — джерело вітамінів і антиоксидантів. Ідеально підходить для перекусу, приготування десертів або додавання в салати.",
    },
    metaDesc: {
      en: "A delicious and healthy apple is a natural source of vitamins and freshness. Choose it for a healthy snack or homemade baking.",
      uk: "Смачне та корисне яблуко — натуральне джерело вітамінів і свіжості. Оберіть для здорового перекусу або домашньої випічки.",
    },
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
    description: {
      en: "A pear is a delicate and aromatic fruit that gives a sweet taste and useful trace elements. Its soft texture is ideal for children and people with sensitive stomachs. It contains dietary fiber that improves digestion, as well as antioxidants that support overall health. Pear can be eaten fresh, baked with honey, added to cheese or used in compotes and jams.",
      uk: "Груша — ніжний та ароматний фрукт, який дарує солодкий смак і корисні мікроелементи. Її м’яка текстура ідеально підходить для дітей та людей з чутливим шлунком. Вона містить харчові волокна, що покращують травлення, а також антиоксиданти, які підтримують загальне здоров’я. Грушу можна вживати в свіжому вигляді, запікати з медом, додавати до сиру або використовувати в компотах і джемах.",
    },
    shortDesc: {
      en: "A tender and juicy pear with a pleasant sweetness. Perfect for compotes, pies or a light snack.",
      uk: "Ніжна та соковита груша з приємною солодкістю. Ідеальний варіант для компотів, пирогів або легкого перекусу.",
    },
    metaDesc: {
      en: "A juicy pear with a soft texture and sweet taste. It will become a favorite fruit for daily consumption.",
      uk: "Соковита груша з м’якою текстурою та солодким смаком. Стане улюбленим фруктом для щоденного вживання.",
    },
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
    description: {
      en: "Plum is a versatile fruit with a rich taste, combining pleasant sourness and sweetness. It is often used to make jam, marmalade, pies or homemade prunes. Plums are rich in vitamin K, iron and antioxidants, which contribute to better functioning of the cardiovascular system. They also have a mild laxative effect, which makes them beneficial for the health of the gastrointestinal tract.",
      uk: "Слива — універсальний фрукт із насиченим смаком, що поєднує приємну кислинку та солодкість. Її часто використовують для приготування варення, повидла, пирогів або домашнього чорносливу. Сливи багаті на вітамін K, залізо та антиоксиданти, які сприяють кращій роботі серцево-судинної системи. Вони також мають легкий послаблювальний ефект, що робить їх корисними для здоров’я шлунково-кишкового тракту.",
    },
    shortDesc: {
      en: "A fragrant plum with a rich taste is a great choice for jam, baking and healthy desserts. Rich in antioxidants.",
      uk: "Ароматна слива з насиченим смаком — чудовий вибір для варення, випічки та здорових десертів. Багата на антиоксиданти.",
    },
    metaDesc: {
      en: "Plum is a healthy fruit with a bright taste, ideal for processing and fresh consumption.",
      uk: "Слива — корисний фрукт з яскравим смаком, ідеальний для переробки та вживання у свіжому вигляді.",
    },
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
    description: {
      en: "Orange is a bright citrus fruit that energizes and improves mood from the first bite. Thanks to its high vitamin C content, it strengthens the immune system, promotes skin cell renewal and fights fatigue. Oranges go well with other fruits in salads, are ideal for making fresh juices or simply as a healthy alternative to sweets. This is the perfect companion for a healthy lifestyle.",
      uk: "Апельсин — яскравий цитрусовий фрукт, що заряджає енергією та покращує настрій з першого шматочка. Завдяки високому вмісту вітаміну C, він зміцнює імунітет, сприяє оновленню клітин шкіри та бореться з втомою. Апельсини добре поєднуються з іншими фруктами у салатах, ідеально підходять для приготування фрешів або просто як корисна альтернатива солодощам. Це ідеальний супутник для здорового способу життя.",
    },
    shortDesc: {
      en: "A fresh orange, rich in vitamin C. Suitable for fresh juices, fruit salads or as a separate refreshing dessert.",
      uk: "Свіжий апельсин, багатий на вітамін C. Підходить для фрешів, фруктових салатів або як окремий освіжаючий десерт.",
    },
    metaDesc: {
      en: "Orange is a juicy citrus fruit that strengthens the immune system and gives a boost of energy.",
      uk: "Апельсин — соковитий цитрусовий фрукт, що зміцнює імунітет і дарує заряд енергії.",
    },
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
    description: {
      en: "Bananas are a nutritious, delicious and versatile fruit that are great for breakfast or as a snack throughout the day. They contain potassium, magnesium and natural sugars that provide a long-lasting feeling of energy. Bananas help reduce fatigue, improve mood and are an ideal ingredient for smoothies, baking, pancakes or even as an addition to oatmeal. They are also popular among athletes due to their ability to quickly restore strength.",
      uk: "Банан — це поживний, смачний і універсальний фрукт, який чудово підходить як для сніданку, так і для перекусу протягом дня. Він містить калій, магній і природні цукри, що забезпечують тривале відчуття енергії. Банани допомагають зменшити втому, покращують настрій і є ідеальним інгредієнтом для смузі, випічки, млинців або навіть як добавка до вівсянки. Вони також популярні серед спортсменів завдяки здатності швидко відновлювати сили.",
    },
    shortDesc: {
      en: "Banana is a versatile fruit with a soft texture, ideal for smoothies, desserts and quick snacks.",
      uk: "Банан — універсальний фрукт із м’якою консистенцією, що ідеально підходить для смузі, десертів та швидких перекусів.",
    },
    metaDesc: {
      en: "A nutritious banana is a natural source of energy with a pleasant sweet taste. Ideal for an active lifestyle.",
      uk: "Поживний банан — натуральне джерело енергії з приємним солодким смаком. Ідеально підходить для активного способу життя.",
    },
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
      shortDesc: p.shortDesc[language],
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
    shortDesc: serverProduct.shortDesc[language],
    metaDesc: serverProduct.metaDesc[language],
  };

  return product;
};

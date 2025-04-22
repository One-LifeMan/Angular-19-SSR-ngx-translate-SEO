# Angular + SSR + Ngx-translate + SEO <!-- omit in toc -->

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

🌐 Available languages:

- 🇺🇦 [Українська](README.uk.md)
- 🇺🇸 [English](README.md)

**Table of contents:** <!-- omit in toc -->

- [1. Favicons](#1-favicons)
  - [1.1. Create favicons](#11-create-favicons)
  - [1.2. Update index.html](#12-update-indexhtml)
  - [1.3. Add site.webmanifest](#13-add-sitewebmanifest)
- [2. SEO service](#2-seo-service)
  - [2.1. Create SEO service](#21-create-seo-service)
  - [2.2. Update global attribute - lang](#22-update-global-attribute---lang)
  - [2.3. Update meta tags](#23-update-meta-tags)
  - [2.4. Adding and updating structured data:](#24-adding-and-updating-structured-data)
  - [2.5. Create method updateSeo](#25-create-method-updateseo)
- [3. Update pages](#3-update-pages)
  - [3.1. Update translation files](#31-update-translation-files)
- [4. Add pages with dynamic data](#4-add-pages-with-dynamic-data)
  - [4.1. Create data](#41-create-data)
  - [4.2. Configuring i18next on the server](#42-configuring-i18next-on-the-server)
    - [4.2.1. Installing dependencies](#421-installing-dependencies)
    - [4.2.2. Create a configuration file](#422-create-a-configuration-file)
    - [4.2.3. Add translation files for i18next](#423-add-translation-files-for-i18next)
    - [4.2.4. Import and "connect" our i18next configuration](#424-import-and-connect-our-i18next-configuration)
    - [4.2.5. Request settings](#425-request-settings)
    - [4.2.6. Update cookies when changing language](#426-update-cookies-when-changing-language)
    - [4.2.7. Update package.json](#427-update-packagejson)
  - [4.3. Create ProductsService](#43-create-productsservice)
  - [4.4. Configure Cloudinary](#44-configure-cloudinary)
    - [4.4.1. Update environments](#441-update-environments)
    - [4.4.2. Update app.config.ts](#442-update-appconfigts)
  - [4.5. Create products page](#45-create-products-page)
  - [4.6. Create product details page](#46-create-product-details-page)
  - [4.7. Update translation files](#47-update-translation-files)
  - [4.8. Update routes](#48-update-routes)
- [5. Create sitemap.xml](#5-create-sitemapxml)

This is the second part of the [Angular-19-SSR-ngx-translate
](https://github.com/One-LifeMan/Angular-19-SSR-ngx-translate) project. It repeats all the steps from the first part and adds new steps for SEO optimization (described below).

## 1. Favicons

### 1.1. Create favicons

There are many different generators and opinions on what favicon formats and sizes to use. You can add whatever you want, but I will add these in this project:

<!-- prettier-ignore -->
```md
└── 📁public
  └── 📁favicon
    └── apple-touch-icon.png
    └── favicon-16x16.png
    └── favicon-32x32.png
    └── favicon-48x48.png
    └── favicon-96x96.png
    └── favicon.ico
    └── favicon.svg
    └── safari-pinned-tab.svg
    └── web-app-manifest-192x192.png
    └── web-app-manifest-512x512.png
  └── site.webmanifest
```

### 1.2. Update index.html

**src\index.html**

```html
<!-- Favicons -->
<link href="/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
<link href="/favicon/favicon-96x96.png" type="image/png" rel="icon" sizes="96x96" />
<link href="/favicon/favicon-48x48.png" type="image/png" rel="icon" sizes="48x48" />
<link href="/favicon/favicon-32x32.png" type="image/png" rel="icon" sizes="32x32" />
<link href="/favicon/favicon-16x16.png" type="image/png" rel="icon" sizes="16x16" />
<link href="/site.webmanifest" rel="manifest" />
<link href="/favicon/safari-pinned-tab.svg" color="#a00000" rel="mask-icon" />
<link href="/favicon/favicon.ico" rel="shortcut icon" />

<meta name="msapplication-TileColor" content="#a00000" />
<meta name="theme-color" content="#ccc" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#191919" media="(prefers-color-scheme: dark)" />
```

### 1.3. Add site.webmanifest

```bash
touch public/site.webmanifest
```

Customize site.webmanifest however you like. I have it like this:
More information about webmanifest at [W3C spec](https://www.w3.org/TR/appmanifest/)

**public\site.webmanifest**

```json
{
  "lang": "en-US",
  "name": "Angular v19 + SSR + ngx-translate + SEO",
  "name_localized": {
    "uk": { "value": "Angular v19 + SSR + ngx-translate + SEO", "dir": "rtl" }
  },
  "short_name": "ASNTS",
  "short_name_localized": {
    "uk": { "value": "ASNTS", "dir": "rtl" }
  },
  "icons": [
    {
      "src": "/favicon/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/favicon/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#a00000",
  "display": "standalone",
  "start_url": "/",
  "description": "This site is an attempt to find out if it is possible to use ngx-translate with Angular + SSR, and how it will affect SEO, and whether the pages will be indexed.",
  "description_localized": {
    "uk": {
      "value": "Цей сайт є спробою з'ясувати чи можливо використовувати ngx-translate з Angular + SSR, та як це вплине на SEO, з'ясувати чи будуть індексуватись сторінки.",
      "dir": "rtl"
    }
  },
  "categories": ["Angular", "SSR", "ngx-translate", "translate", "SEO"],
  "screenshots": [
    {
      "src": "/screenshots/screenshot1.webp",
      "sizes": "540x720",
      "type": "image/webp",
      "form_factor": "narrow"
    },
    {
      "src": "/screenshots/screenshot2.webp",
      "sizes": "540x720",
      "type": "image/webp"
    },
    {
      "src": "/screenshots/screenshot3.webp",
      "sizes": "1280x720",
      "type": "image/webp",
      "form_factor": "narrow"
    },
    {
      "src": "/screenshots/screenshot4.webp",
      "sizes": "1280x720",
      "type": "image/webp"
    },
    {
      "src": "/screenshots/screenshot5.png",
      "sizes": "1920x1080",
      "type": "image/png",
      "form_factor": "narrow"
    },
    {
      "src": "/screenshots/screenshot6.png",
      "sizes": "1920x1080",
      "type": "image/png"
    }
  ]
}
```

## 2. SEO service

Honestly, this is my first time dealing with SEO, so I can't say that I understand it well, but I think I've done the basic things and that should be enough for an example.

### 2.1. Create SEO service

```bash
ng g s services/seo
```

### 2.2. Update global attribute - lang

Let's create the following method in the seo service:

**src\app\services\seo.service.ts**

```ts
@Injectable({
  providedIn: "root",
})
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);

  private changeHtmlLang() {
    this.document.documentElement.lang = this.translate.currentLang;
  }
}
```

### 2.3. Update meta tags

To update meta tags, we will create the following method:
**src\app\services\seo.service.ts**

```ts
  private readonly DEFAULT_IMAGE = "/images/ng-image.jpg";
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private currentUrl = "";

```

```ts
  private updateMetaTags(title: string, description: string, image: string = this.DEFAULT_IMAGE) {
    this.titleService.setTitle(title);

    this.meta.updateTag({ name: "description", content: description });
    this.meta.updateTag({ property: "og:title", content: title });
    this.meta.updateTag({ property: "og:description", content: description });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:image", content: image });
    this.meta.updateTag({ property: "twitter:card", content: "summary" });
    this.meta.updateTag({ property: "twitter:title", content: title });
    this.meta.updateTag({ property: "twitter:description", content: description });
    this.meta.updateTag({ property: "twitter:image", content: image });
    this.meta.updateTag({ name: "canonical", content: this.currentUrl });
  }
```

To get the currentUrl value, we will create a method:

```ts
  private readonly router = inject(Router);
```

```ts
  private getCurrentUrl() {
    const appUrl = environment.appUrl;
    const currentUrl = appUrl + this.router.url.slice(1);
    return currentUrl;
  }
```

### 2.4. Adding and updating structured data:

Read more: [schema.org](https://schema.org/docs/documents.html)

```bash
touch src/types/jsonld.types.ts
```

**src\types\jsonld.types.ts**

```ts
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
```

**src\app\services\seo.service.ts**

```ts
  private readonly renderFactory = inject(RendererFactory2);
  private readonly render: Renderer2;

    constructor() {
    this.render = this.renderFactory.createRenderer(null, null);
  }
```

It seems `private readonly render = inject(Renderer2);` doesn't work on the server side. Therefore, I had to do it through RendererFactory2.

**src\app\services\seo.service.ts**

```ts
  private updateJsonLd(jsonLd: JsonLdInput, name: string, description: string) {
    const existingScript = this.document.querySelector(
      "script[type='application/ld+json']#json-ld-script",
    );

    const enrichedJsonLd: JsonLd = {
      "@context": "https://schema.org",
      name: name,
      description: description,
      url: this.currentUrl,
      image: this.DEFAULT_IMAGE,
      ...jsonLd,
    };

    if (existingScript) {
      existingScript.textContent = JSON.stringify(enrichedJsonLd);
    } else {
      this.addJsonLd(enrichedJsonLd);
    }
  }

  private addJsonLd(jsonLd: JsonLd) {
    const script = this.document.createElement("script");
    script.type = "application/ld+json";
    script.id = "json-ld-script";
    script.textContent = JSON.stringify(jsonLd);
    this.render.appendChild(this.document.head, script);
  }
```

### 2.5. Create method updateSeo

All the methods that were created before this are private. Therefore, we need another public method, which we will use.

```bash
touch src/types/seo.types.ts
```

**src\types\seo.types.ts**

```ts
export interface SeoOptions {
  key: string;
  jsonLd: JsonLdInput;
  params?: Record<string, string>;
}
```

**src\app\services\seo.service.ts**

```ts
interface TranslateResponse {
  title: string;
  description: string;
}
```

```ts
updateSeo(options: SeoOptions) {
    this.currentUrl = this.getCurrentUrl();

    this.changeHtmlLang();

    this.translate
      .get(`META.${options.key}`, options.params)
      .pipe(take(1))
      .subscribe({
        next: (translations: TranslateResponse) => {
          const { title, description } = translations;
          const image = options.jsonLd.image;
          this.updateMetaTags(title, description, image);

          this.updateJsonLd(options.jsonLd, title, description);
        },
        error: err => {
          console.error("Error updating SEO:", err);
        },
      });
  }
```

The updateSeo method accepts an object containing:
`key` - which serves as a key to search for translated strings
`jsonLd` - an object with data to create a script with structured data. More information about this can be found at https://schema.org
`params` (optional) - an object containing parameter values ​​for interpolation in translated strings. We will need it a little later.

## 3. Update pages

**src\types\seo.types.ts**

```ts
export enum SeoKeysEnum {
  Home = "HOME",
  About = "ABOUT",
  Products = "PRODUCTS",
  ProductsDetails = "PRODUCTS_DETAILS",
  NotFound = "404",
}
```

**src\app\pages\client\home\home.component.ts**

```ts
@Component({
  selector: "app-home",
  imports: [TranslatePipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private readonly seo = inject(SeoService);
  translate = inject(TranslateService);

  ngOnInit(): void {
    const jsonLd: JsonLdInput = { "@type": "WebSite" };
    const seoOptions: SeoOptions = { key: SeoKeysEnum.Home, jsonLd };

    this.seo.updateSeo(seoOptions);

    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.seo.updateSeo(seoOptions);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

We run the `seo.updateSeo` method during component initialization, as well as when changing the language - so that meta tags and other data are in the current language.

This needs to be repeated in AboutComponent and NotFoundPageComponent.

### 3.1. Update translation files

**public\i18n\en.json**

```json
  "META": {
    "HOME": {
      "title": "Home | ASNTS",
      "description": "This site is an attempt to find out if it is possible to use ngx-translate with Angular + SSR, and how it will affect SEO, and whether the pages will be indexed."
    },
    "ABOUT": {
      "title": "About | ASNTS",
      "description": "This is a test page about us."
    },
    "404": {
      "title": "404 | ASNTS",
      "description": "This page is not found."
    }
  },
```

**public\i18n\uk.json**

```json
  "META": {
    "HOME": {
      "title": "Головна | ASNTS",
      "description": "Цей сайт є спробою з'ясувати чи можливо використовувати ngx-translate з Angular + SSR, та як це вплине на SEO, з'ясувати чи будуть індексуватись сторінки."
    },
    "ABOUT": {
      "title": "Про нас | ASNTS",
      "description": "Це тестова сторінка про нас."
    },
    "404": {
      "title": "404 | ASNTS",
      "description": "Ця сторінка не знайдена."
    }
  },
```

## 4. Add pages with dynamic data

### 4.1. Create data

**src\types\products.types.ts**

```ts
export interface ServerProduct {
  id: number;
  name: Record<string, string>;
  slug: string;
  description: Record<string, string>;
  metaDesc: Record<string, string>;
  price: number;
  color: string;
  src: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  metaDesc: string;
  price: number;
  color: string;
  src: string | null;
  createdAt: string;
  updatedAt: string;
}
```

ServerProduct - This is how the data will be stored on the server.
Product - In this form, the data will be sent to the client.

**Warning! This is a test project, so I will not use a database, but simply store an array of data on the server.**

**src\server\core\mock-data.ts**

```ts
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
    src: null,
  },
];
```

We will also immediately add methods for getting all products and for getting one specific product.

```ts
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
```

As we can see, some fields in products have translations ( name, description, metaDesc ).
There are two options:

- you can send data with all translations and already on the client display information in the desired language.
- send data in one language that the user is currently using.

Each of the options has advantages and disadvantages. I chose the second option to touch on another topic - obtaining the user's language on the server.

### 4.2. Configuring i18next on the server

#### 4.2.1. Installing dependencies

```bash
pnpm add i18next i18next-fs-backend i18next-http-middleware
```

#### 4.2.2. Create a configuration file

```bash
touch src/server/core/i18next-config.ts
```

**src\server\core\i18next-config.ts**

```ts
import { Express } from "express";
import i18next, { InitOptions } from "i18next";
import Backend, { FsBackendOptions } from "i18next-fs-backend/cjs";
import * as middleware from "i18next-http-middleware";
import path from "node:path";
import { environment } from "src/environments/environment";

const i18nextConfig = (serverDistFolder: string, app: Express) => {
  const fsBackendOptions: FsBackendOptions = {
    loadPath: path.join(serverDistFolder, "locales/{{lng}}/{{ns}}.json"),
    addPath: path.join(serverDistFolder, "locales/{{lng}}/{{ns}}.missing.json"),
  };

  const detectorOptions: middleware.LanguageDetectorOptions = {
    order: ["querystring", "cookie", "header"],
    caches: ["cookie"],
    lookupCookie: "i18next",
    lookupQuerystring: "lng",
    convertDetectedLanguage: lng => lng.split("-")[0],
    cookieExpirationDate: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
  };

  const i18nextOptions: InitOptions = {
    initImmediate: false,
    fallbackLng: environment.languages[0],
    preload: environment.languages,
    ns: ["messages"],
    debug: false,
    backend: fsBackendOptions,
    detection: detectorOptions,
    supportedLngs: environment.languages,
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
  };

  i18next.use(Backend).use(middleware.LanguageDetector).init(i18nextOptions);

  app.use(middleware.handle(i18next));
};

export default i18nextConfig;
```

Read more about settings in the official documentation:
[i18next](https://www.i18next.com/)
[i18next-fs-backend](https://github.com/i18next/i18next-fs-backend)
[i18next-http-middleware](https://github.com/i18next/i18next-http-middleware)

**Warning! In my opinion, the `load: "languageOnly"` property in `i18nextOptions` does not work, so in `detectorOptions` I added `convertDetectedLanguage: lng => lng.split("-")[0]` to get 'en' from 'en-US'.**

#### 4.2.3. Add translation files for i18next

```bash
mkdir src/server/locales
mkdir src/server/locales/en
mkdir src/server/locales/uk
touch src/server/locales/en/messages.json
touch src/server/locales/uk/messages.json
```

**src\server\locales\en\messages.json**

```json
{
  "NOT_FOUND": "Product with slug: {{slug}} not found"
}
```

**src\server\locales\uk\messages.json**

```json
{
  "NOT_FOUND": "Продукт з slug: {{slug}} не знайдено"
}
```

#### 4.2.4. Import and "connect" our i18next configuration

**src\server.ts**

```ts
import i18nextConfig from "./server/core/i18next-config";
```

```ts
i18nextConfig(serverDistFolder, app);
```

#### 4.2.5. Request settings

Returning to ngx-translate and ngx-translate-router:
Let's imagine a situation: the user first visits the site via the link `http://localhost:4000` (i.e. the language is not specified), the page should be generated on the server, BUT! what language should `ngx-translate` choose? The one that `ngx-translate-router` will transfer, but `ngx-translate-router` in our case cannot determine the language since the server does not have access to localStorage, and the language was not passed in the url. Therefore, the default language will be used, in our case "en". But after the page is loaded in the browser, `ngx-translate-router` will detect the language from localStorage, or the browser (in our case it is "uk"), transfer it to `ngx-translate`, and it in turn will load the file with translations and update the text on the page. This is bad. We need the user to immediately receive the page in his language.
We can already determine the user's language on the server since we configured i18next. All we have to do is pass it to `ngx-translate-router` and to do this we will make a simple request:

**src\server.ts**

```ts
app.get("/", (req, res) => {
  const lang = req.language;
  res.redirect(301, `/${lang}`);
});
```

Let's add two more queries that return product data:

**src\server.ts**

```ts
app.get("/api/products", (req, res) => {
  const language = req.language;
  const products = getAllProducts(language);
  res.json(products);
});

app.get("/api/products/:slug", (req, res) => {
  const slug = req.params.slug;
  const language = req.language;

  const product = getProductBySlug(slug, language);

  if (!product) {
    res.status(404).send(req.t(`messages:NOT_FOUND`, { replace: { slug } }));
  } else {
    res.json(product);
  }
});
```

#### 4.2.6. Update cookies when changing language

Another important point is that i18next (more precisely i18next-http-middleware) stores the language in a "cookie" with the key "i18next" and if it cannot get the language from "path" or "querystring", then it will try to get the language from the "cookie". BUT! When the user changes the language on the site (in our case, the "LanguageSwitcherComponent" is responsible for this), then ngx-translate-router stores/updates the data in localStorage with the key "LOCALIZE_DEFAULT_LANGUAGE", but the language in the "cookie" will not change! And therefore, in certain cases, i18next and ngx-translate-router may consider the current language as two different languages. Therefore, it is necessary to update the language in the "cookie" when the user changes the language. Let's do this.

**Install a package for convenient work with cookies**

```bash
pnpm add ngx-cookie-service-ssr
```

Actually, there is also a regular version: `ngx-cookie-service` - without SSR support. Considering that we will only use this library in the browser, it could have been installed, but I decided to install the SSR version.

**src\app\app.component.ts**

```ts
import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { SsrCookieService } from "ngx-cookie-service-ssr";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  private readonly translate = inject(TranslateService);
  private readonly cookieService = inject(SsrCookieService);

  constructor() {
    this.translate.onLangChange.subscribe(langeEvent => {
      this.saveLangInCookie(langeEvent.lang);
    });
  }

  saveLangInCookie(lang: string) {
    this.cookieService.set("i18next", lang, 365, "/");
  }
}
```

#### 4.2.7. Update package.json

It is worth adding a "postbuild" script to automatically copy the `src/server/locales` folder to `dist/angular-ssr-ngx-translate/server/` after executing "build".

```json
{
  "name": "angular-ssr-ngx-translate",
  "version": "0.0.0",
  "scripts": {
    "postbuild": "cp -r src/server/locales dist/angular-ssr-ngx-translate/server/",
    ...
  }
  ...
}
```

### 4.3. Create ProductsService

```bash
ng g s services/products
```

**src\app\services\products.service.ts**

```ts
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "@app/rxjs";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";
import { Product } from "src/types/products.types";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private baseUrl = environment.appUrl;
  private readonly http = inject(HttpClient);
  private readonly translate = inject(TranslateService);

  findAll(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.baseUrl}api/products`, {
      params: { lng: this.translate.currentLang },
    });
  }

  findBySlug(slug: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}api/products/${slug}`, {
      params: { lng: this.translate.currentLang },
    });
  }
}
```

**Why do I pass the language in params?**

Because if we go to a direct link, for example: `http://localhost:4000/uk/products/apple`, the page will be generated on the server side, and accordingly the `findBySlug("apple")` query will be executed on the server side, and in this case `i18next-http-middleware` cannot detect the language and sets the default language.

At the same time, if we go from another page `http://localhost:4000/uk/products` => `http://localhost:4000/uk/products/apple`, then everything will be fine, since the request was made in the browser, not on the server side.

Honestly, now I don't understand why this is happening and why `i18next-http-middleware` cannot take the language from the url even though `detectorOptions` has `order: ["path", ...]`. Maybe I'll figure it out later, but for now I'll just add the language to params.
It would be possible to create an Interceptor to avoid adding params to every request, but I'm too lazy to do that right now 😣
[More about Interceptors](https://angular.dev/guide/http/interceptors)

### 4.4. Configure Cloudinary

You may have noticed that the `ServerProduct` and `Product` data have `src` fields with similar values: "v1744617529/apples_hd9yit.png". These are the names of the images. More precisely, "v1744617529" is the folder in which the image is located, and "apples_hd9yit.png" is the name itself. Hello captain!
These images need to be stored somewhere. I chose the service https://cloudinary.com
To use it, we will do the following:

#### 4.4.1. Update environments

**src\environments\environment.ts**
**src\environments\environment.watch.ts**
**src\environments\environment.development.ts**

```json
  cloudinary: "https://res.cloudinary.com/det0m1i3y",
  placeholderImg: "v1744642967/placeholder_w468jr.png",

```

#### 4.4.2. Update app.config.ts

Warning! Since I will be using NgOptimizedImage, I need to add provideCloudinaryLoader.
Warning! If you are using another service, check if it supports NgOptimizedImage.
[More about NgOptimizedImage](https://angular.dev/guide/image-optimization)
[More about supported services](https://angular.dev/guide/image-optimization#configuring-an-image-loader-for-ngoptimizedimage)

**src\app\app.config.ts**

```ts
import { environment } from "src/environments/environment";
```

```ts
provideCloudinaryLoader(environment.cloudinary),
```

### 4.5. Create products page

```bash
ng g c pages/client/products
```

The code in the component is not much different from other pages, except that a call to the `this.prodService.findAll()` method has been added during initialization and after changing the language.

**src\app\pages\client\products\products.component.ts**

```ts
import { AsyncPipe, NgOptimizedImage } from "@angular/common";
import { Component, inject, OnInit, OnDestroy } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Observable, Subject, takeUntil } from "@app/rxjs";
import { LocalizeRouterPipe } from "@gilsdav/ngx-translate-router";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { ProductsService } from "src/app/services/products.service";
import { SeoService } from "src/app/services/seo.service";
import { environment } from "src/environments/environment";
import { JsonLdInput } from "src/types/jsonld.types";
import { Product } from "src/types/products.types";
import { SeoKeysEnum, SeoOptions } from "src/types/seo.types";

@Component({
  selector: "app-products",
  imports: [TranslatePipe, RouterLink, LocalizeRouterPipe, AsyncPipe, NgOptimizedImage],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss",
})
export class ProductsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  private readonly prodService = inject(ProductsService);
  private readonly seo = inject(SeoService);
  private readonly translate = inject(TranslateService);

  products$: Observable<Array<Product>> | null = null;
  placeholderImg = environment.placeholderImg;

  ngOnInit(): void {
    const jsonLd: JsonLdInput = { "@type": "CollectionPage" };
    const seoOptions: SeoOptions = { key: SeoKeysEnum.Products, jsonLd };

    this.products$ = this.prodService.findAll();
    this.seo.updateSeo(seoOptions);

    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.products$ = this.prodService.findAll();
      this.seo.updateSeo(seoOptions);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

**src\app\pages\client\products\products.component.html**

```html
<p>{{ "CONTENT.PRODUCTS" | translate }}</p>

<section class="products">
  <ul class="products__list">
    @for (product of products$ | async; track product.id) {
    <li class="products__item">
      <h2 class="products__title">{{ product.name }}</h2>
      <h3 class="products__title">Slug: {{ product.slug }}</h3>
      <img
        class="products__img"
        alt="{{ product.name }}"
        height="9"
        ngSrc="{{ product.src || placeholderImg }}"
        ngSrcset="200w, 400w"
        sizes="(max-width: 460px) 400px, 200px"
        width="16"
      />
      <a class="products__link" [routerLink]="['/products/' + product.slug | localize]">
        {{ "BTNS.DETAILS" | translate }}
      </a>
    </li>
    }
  </ul>
</section>
```

**src\app\pages\client\products\products.component.scss**

```scss
.products {
  margin: 20px 0;

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-medium);
    justify-content: space-evenly;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: var(--gap-medium);
    align-items: center;
    max-width: 200px;
    padding: var(--gap-medium);
    color: var(--on-secondary-color);
    background-color: var(--secondary-color);
    border-radius: var(--gap-medium);
  }

  &__title {
  }

  &__img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    border-radius: var(--gap-medium);
    object-fit: cover;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--gap-medium);
    color: var(--secondary-color);
    background-color: var(--on-secondary-color);
    border-radius: var(--gap-medium);
  }
}

@media screen and (width <= 460px) {
  .products {
    &__item {
      max-width: 100%;
    }
  }
}

@media (hover: hover) {
  .products {
    &__link:hover {
      background-color: var(--accent-color);
    }
  }
}
```

### 4.6. Create product details page

```bash
ng g c pages/client/product-detail
```

The code here is also similar. It also executes a query to retrieve data. But a little more information is passed to the this.seo.updateSeo method.

In jsonLd we pass datePublished, dateModified and image.
Also in params we pass name and desc. ! Please note that I do not pass product.description, but product.metaDesc - a special description for meta tags.

**src\types\seo.types.ts**
For convenience, I added the ProductDetailsParams interface

```ts
export interface ProductDetailsParams {
  name: string;
  desc: string;
}
```

**src\app\pages\client\product-details\product-details.component.ts**

```ts
import { CurrencyPipe, NgOptimizedImage } from "@angular/common";
import { Component, inject, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject, take, takeUntil } from "@app/rxjs";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { ProductsService } from "src/app/services/products.service";
import { SeoService } from "src/app/services/seo.service";
import { environment } from "src/environments/environment";
import { JsonLdInput } from "src/types/jsonld.types";
import { Product } from "src/types/products.types";
import { ProductDetailsParams, SeoKeysEnum, SeoOptions } from "src/types/seo.types";

@Component({
  selector: "app-product-details",
  imports: [TranslatePipe, CurrencyPipe, NgOptimizedImage],
  templateUrl: "./product-details.component.html",
  styleUrl: "./product-details.component.scss",
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private readonly route = inject(ActivatedRoute);
  private readonly prodService = inject(ProductsService);
  private readonly seo = inject(SeoService);
  private readonly translate = inject(TranslateService);
  placeholderImg = environment.placeholderImg;
  product: Product | null = null;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug) {
      this.getProductDetails(slug);
    }

    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (slug) {
        this.getProductDetails(slug);
      }
    });
  }

  private getProductDetails(slug: string): void {
    this.prodService
      .findBySlug(slug)
      .pipe(take(1))
      .subscribe(product => {
        this.product = product;

        const jsonLd: JsonLdInput = {
          "@type": "Product",
          datePublished: product.createdAt,
          dateModified: product.updatedAt,
        };
        if (product.src) {
          jsonLd.image = environment.cloudinary + product.src;
        }
        const params: ProductDetailsParams = { name: product.name, desc: product.metaDesc };
        const seoOptions: SeoOptions = {
          key: SeoKeysEnum.ProductsDetails,
          jsonLd,
          params: { ...params },
        };

        this.seo.updateSeo(seoOptions);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

**src\app\pages\client\product-details\product-details.component.html**

```html
<p>{{ "CONTENT.PRODUCT-DETAILS" | translate }}</p>

@if (product) {
<section class="product">
  <h1 class="product__title">{{ product.name }}</h1>
  <div class="product__card">
    <img
      class="product__img"
      alt="{{ product.name }}"
      height="9"
      ngSrc="{{ product.src || placeholderImg }}"
      ngSrcset="200w, 400w, 600w"
      placeholder
      sizes="(max-width: 240px) 200px,
              (max-width: 440px) 400px,
              (max-width: 600px) 600px,
              (max-width: 900px) 400px,
              600px"
      width="16"
    />

    <div class="product__content">
      <dl class="product__params">
        <div class="product__params-group">
          <dt class="product__key">
            <b>{{ "PRODUCT-DETAILS.PARAMS.PRICE" | translate }}</b>
          </dt>
          <dd class="product__value">{{ product.price | currency }}</dd>
        </div>
        <div class="product__params-group">
          <dt class="product__key">
            <b>{{ "PRODUCT-DETAILS.PARAMS.COLOR" | translate }}</b>
          </dt>
          <dd class="product__value">{{ product.color }}</dd>
        </div>
      </dl>
      <h3 class="product__subtitle">{{ "PRODUCT-DETAILS.DESC" | translate }}</h3>
      <p class="product__description">{{ product.description }}</p>
    </div>
  </div>
</section>
} @else {
<span class="not-fund-message">{{ "PRODUCT-DETAILS.NOT-FOUND" | translate }}</span>
}
```

**src\app\pages\client\product-details\product-details.component.scss**

```scss
.product {
  padding: var(--gap-medium);
  margin: 20px 0;
  background: linear-gradient(135deg, var(--secondary-color), rgb(0 0 0 / 0%));
  border: 2px solid var(--secondary-color);
  border-radius: var(--gap-medium);

  &__title {
  }

  &__card {
    display: flex;
    gap: var(--gap-medium);
    align-items: start;
    justify-content: space-between;
    margin: 20px 0;
  }

  &__img {
    display: block;
    width: 100%;
    object-fit: cover;
    height: auto;
    aspect-ratio: 16/9;
    border-radius: var(--gap-medium);
  }

  &__content {
    width: 100%;
    margin: 20px 0;
  }

  &__params {
  }

  &__params-group {
    display: flex;
    justify-content: space-between;
  }

  &__key {
    display: flex;
    flex: 0 1 100%;

    &::after {
      width: 100%;
      content: "";
      border-bottom: 1px dotted;
    }
  }

  &__value {
  }

  &__subtitle {
    border-bottom: 1px solid var(--on-primary-color);
  }

  &__description {
  }
}

@media screen and (width <= 600px) {
  .product {
    &__title {
    }

    &__card {
      flex-direction: column;
    }

    ...
  }
}
```

### 4.7. Update translation files

**public\i18n\en.json**

```json
{
  "NAV": {
    ...
    "PRODUCTS": "Products"
  },
  "CONTENT": {
    ...
    "PRODUCTS": "products works!",
    "PRODUCT-DETAILS": "product-details works!",
    ...
  },
  "META": {
    ...
    "PRODUCTS": {
      "title": "Products | ASNTS",
      "description": "This is an example of a products page."
    },
    "PRODUCTS_DETAILS": {
      "title": "{{name}} | ASNTS",
      "description": "{{desc}}"
    },
    ...
  },
  "BTNS": {
    "DETAILS": "Details"
  },
  "PRODUCT-DETAILS": {
    "DESC": "description",
    "PARAMS": {
      "PRICE": "price",
      "COLOR": "color"
    },
    "NOT-FOUND": "Product not found"
  }
}
```

**public\i18n\uk.json**

```json
{
  "NAV": {
    ...
    "PRODUCTS": "Продукти"
  },
  "CONTENT": {
    ...
    "PRODUCTS": "products працює!",
    "PRODUCT-DETAILS": "product-details працює!",
    ...
  },
  "META": {
    ...
    "PRODUCTS": {
      "title": "Продукти | ASNTS",
      "description": "Це приклад сторінки продуктів."
    },
    "PRODUCTS_DETAILS": {
      "title": "{{name}} | ASNTS",
      "description": "{{desc}}"
    },
    ...
  },
  "BTNS": {
    "DETAILS": "Детальніше"
  },
  "PRODUCT-DETAILS": {
    "DESC": "Опис",
    "PARAMS": {
      "PRICE": "ціна",
      "COLOR": "колір"
    },
    "NOT-FOUND": "Продукт не знайдено"
  }
}
```

### 4.8. Update routes

**src\app\pages\index.ts**

```ts
...
export * from "./client/products/products.component";
export * from "./client/product-details/product-details.component";
...
```

**src\app\app.routes.ts**

```ts
import { Routes } from "@angular/router";

const loadClientLayout = () => import("@app/layouts").then(c => c.ClientLayoutComponent);

const loadHome = () => import("@app/pages").then(c => c.HomeComponent);
const loadAbout = () => import("@app/pages").then(c => c.AboutComponent);
const loadProducts = () => import("@app/pages").then(c => c.ProductsComponent);
const loadProductDetails = () => import("@app/pages").then(c => c.ProductDetailsComponent);

const loadNotFoundPage = () => import("@app/pages").then(c => c.NotFoundPageComponent);

export const routes: Routes = [
  {
    path: "",
    loadComponent: loadClientLayout,
    children: [
      { path: "", loadComponent: loadHome },
      { path: "about", loadComponent: loadAbout },
      {
        path: "products",
        children: [
          { path: "", loadComponent: loadProducts },
          { path: ":slug", loadComponent: loadProductDetails },
        ],
      },
      { path: "404", loadComponent: loadNotFoundPage },
    ],
  },
  { path: "**", redirectTo: "/404" },
];
```

**src\app\ui\client\menu\menu.component.html**

```html
...
<li class="nav__item">
  <a
    class="nav__link"
    [routerLink]="['products' | localize]"
    [routerLinkActiveOptions]="{ exact: true }"
    ariaCurrentWhenActive="page"
    routerLinkActive="active"
  >
    {{ "NAV.PRODUCTS" | translate }}
  </a>
</li>
...
```

## 5. Create sitemap.xml

Since we have pages with dynamic data, I decided to make a sitemap generator that would generate a new sitemap every hour, and in between, return cached data.

```bash
touch src/server/core/sitemap.ts
```

```ts
import { serverProducts } from "./mock-data";
import { environment } from "src/environments/environment";

interface XmlUrl {
  loc: string;
  lastmod?: string;
}

let cachedSitemap: string | null = null;
let cacheExpiresAt = 0;
const CACHE_TTL_MS = 1000 * 60 * 60;

export const getSitemap = () => {
  const now = Date.now();

  if (cachedSitemap && now < cacheExpiresAt) {
    return cachedSitemap;
  }

  const xml = generateSitemap();

  cachedSitemap = xml;
  cacheExpiresAt = now + CACHE_TTL_MS;

  return xml;
};

export const generateSitemap = () => {
  const hostname = environment.appUrl;

  const pages: Array<XmlUrl> = [
    { loc: "/", lastmod: new Date("2025-04-10").toISOString() },
    { loc: "/about", lastmod: new Date("2025-04-10").toISOString() },
    { loc: "/products", lastmod: new Date("2025-04-10").toISOString() },
    { loc: "/404", lastmod: new Date("2025-04-10").toISOString() },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const lang of environment.languages) {
    for (const page of pages) {
      xml += `  <url>\n`;
      xml += `    <loc>${hostname}${lang}${page.loc}</loc>\n`;
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
      xml += `  </url>\n`;
    }

    for (const page of serverProducts) {
      xml += `  <url>\n`;
      xml += `    <loc>${hostname}${lang}/products/${page.slug}</loc>\n`;
      xml += `    <lastmod>${page.updatedAt}</lastmod>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;

  return xml;
};
```

**src\server.ts**

```ts
import { getSitemap } from "./server/core/sitemap";
```

```ts
app.get("/sitemap.xml", (req, res) => {
  const xml = getSitemap();

  res.header("Content-Type", "application/xml");
  res.send(xml);
});
```

<!--
- [ ] create robot.txt
-->

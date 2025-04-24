import { DOCUMENT } from "@angular/common";
import { inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { take } from "@app/rxjs";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";
import { JsonLd, JsonLdInput, Offers } from "src/types/jsonld.types";
import { SeoOptions } from "src/types/seo.types";

interface TranslateResponse {
  title: string;
  description: string;
}

@Injectable({
  providedIn: "root",
})
export class SeoService {
  private readonly DEFAULT_IMAGE = `${environment.appUrl}images/ng-image.jpg`;

  private readonly document = inject(DOCUMENT);
  private readonly titleService = inject(Title);
  private readonly translate = inject(TranslateService);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly renderFactory = inject(RendererFactory2);
  private readonly render: Renderer2;

  private currentUrl = "";

  constructor() {
    this.render = this.renderFactory.createRenderer(null, null);
  }

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

  private changeHtmlLang() {
    this.document.documentElement.lang = this.translate.currentLang;
  }

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

  private updateJsonLd(jsonLd: JsonLdInput, name: string, description: string) {
    const existingScript = this.document.querySelector(
      "script[type='application/ld+json']#json-ld-script",
    );

    let enrichedJsonLd: JsonLd = {
      "@context": "https://schema.org",
      name: name,
      description: description,
      url: this.currentUrl,
      image: this.DEFAULT_IMAGE,
      "@type": jsonLd["@type"],
      datePublished: jsonLd.datePublished,
      dateModified: jsonLd.dateModified,
      inLanguage: this.translate.currentLang,
    };

    if (jsonLd.offers) {
      const offers: Offers = {
        "@type": "Offer",
        url: this.currentUrl,
        priceCurrency: "USD",
        price: jsonLd.offers.price,
        availability: jsonLd.offers.availability,
      };

      enrichedJsonLd = Object.assign(enrichedJsonLd, offers);
    }

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

  private getCurrentUrl() {
    const appUrl = environment.appUrl;
    const currentUrl = appUrl + this.router.url.slice(1);
    return currentUrl;
  }
}

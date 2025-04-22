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

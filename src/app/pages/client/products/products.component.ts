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

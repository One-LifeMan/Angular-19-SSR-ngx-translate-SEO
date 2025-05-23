import { Component, inject, OnInit, OnDestroy } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Subject, takeUntil } from "@app/rxjs";
import { LocalizeRouterPipe } from "@gilsdav/ngx-translate-router";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { SeoService } from "src/app/services/seo.service";
import { environment } from "src/environments/environment";
import { JsonLdInput } from "src/types/jsonld.types";
import { SeoKeysEnum, SeoOptions } from "src/types/seo.types";

@Component({
  selector: "app-not-found-page",
  imports: [TranslatePipe, RouterLink, LocalizeRouterPipe],
  templateUrl: "./not-found-page.component.html",
  styleUrl: "./not-found-page.component.scss",
})
export class NotFoundPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private readonly seo = inject(SeoService);
  translate = inject(TranslateService);

  ngOnInit(): void {
    const jsonLd: JsonLdInput = {
      "@type": "WebSite",
      image: `${environment.appUrl}images/404.png`,
    };
    const seoOptions: SeoOptions = { key: SeoKeysEnum.NotFound, jsonLd };

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

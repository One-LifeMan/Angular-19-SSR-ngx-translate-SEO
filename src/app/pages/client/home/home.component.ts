import { Component, inject, OnInit, OnDestroy } from "@angular/core";
import { Subject, takeUntil } from "@app/rxjs";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { SeoService } from "src/app/services/seo.service";
import { JsonLdInput } from "src/types/jsonld.types";
import { SeoKeysEnum, SeoOptions } from "src/types/seo.types";

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

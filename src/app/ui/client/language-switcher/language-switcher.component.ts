import { environment } from "../../../../environments/environment";
import { filter } from "../../../shared/rxjs";
import { Component, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";

@Component({
  selector: "app-language-switcher",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./language-switcher.component.html",
  styleUrl: "./language-switcher.component.scss",
})
export class LanguageSwitcherComponent {
  private readonly router = inject(Router);
  private readonly localizeRouterService = inject(LocalizeRouterService);
  readonly languages = environment.languages;
  currentUrl = "";

  constructor() {
    this.setCurrentUrl();

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.setCurrentUrl());
  }

  private setCurrentUrl = () => {
    const langPrefix = `/${this.localizeRouterService.parser.currentLang}`;
    this.currentUrl = this.router.url.replace(langPrefix, "").split("?")[0];
  };
}

import { environment } from "../../../../environments/environment";
import { filter } from "../../../shared/rxjs";
import { Component, inject } from "@angular/core";
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
  private readonly localizeRouterService = inject(LocalizeRouterService); // <---
  languages = environment.languages;
  protected currentUrl = "";

  constructor() {
    this.setCurrentUrl(); // <---

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.setCurrentUrl());
  }

  private setCurrentUrl = () => {
    this.currentUrl = this.router.url
      .replace("/" + this.localizeRouterService.parser.currentLang, "")
      .split("?")[0]; // <---
  };
}

import { environment } from "../../../../environments/environment";
import { filter } from "../../../shared/rxjs";
import { Component, inject } from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-language-switcher",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./language-switcher.component.html",
  styleUrl: "./language-switcher.component.scss",
})
export class LanguageSwitcherComponent {
  private readonly router = inject(Router);
  languages = environment.languages;
  protected currentUrl = "";

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.setCurrentUrl());
  }

  private setCurrentUrl = () => {
    // Later here will be the language switching logic
  };
}

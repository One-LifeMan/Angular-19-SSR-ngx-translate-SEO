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

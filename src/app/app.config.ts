import { routes } from "./app.routes";
import { httpLoaderFactory, localizeLoaderFactory } from "./core/translate.config";
import { Location, provideCloudinaryLoader } from "@angular/common";
import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideRouter, withDisabledInitialNavigation } from "@angular/router";
import {
  LocalizeParser,
  LocalizeRouterSettings,
  withLocalizeRouter,
} from "@gilsdav/ngx-translate-router";
import { provideTranslateService, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withDisabledInitialNavigation(),
      withLocalizeRouter(routes, {
        parser: {
          provide: LocalizeParser,
          useFactory: localizeLoaderFactory,
          deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
        },
        initialNavigation: true,
      }),
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideTranslateService({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    provideCloudinaryLoader(environment.cloudinary),
  ],
};

import { Express } from "express";
import i18next, { InitOptions } from "i18next";
import Backend, { FsBackendOptions } from "i18next-fs-backend/cjs";
import * as middleware from "i18next-http-middleware";
import path from "node:path";
import { environment } from "src/environments/environment";

const i18nextConfig = (serverDistFolder: string, app: Express) => {
  const fsBackendOptions: FsBackendOptions = {
    loadPath: path.join(serverDistFolder, "locales/{{lng}}/{{ns}}.json"),
    addPath: path.join(serverDistFolder, "locales/{{lng}}/{{ns}}.missing.json"),
  };

  const detectorOptions: middleware.LanguageDetectorOptions = {
    order: ["path", "querystring", "cookie", "header"],
    caches: ["cookie"],
    lookupCookie: "i18next",
    lookupQuerystring: "lng",
    convertDetectedLanguage: lng => lng.split("-")[0],
    cookieExpirationDate: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
  };

  const i18nextOptions: InitOptions = {
    initImmediate: false,
    fallbackLng: environment.languages[0],
    preload: environment.languages,
    ns: ["messages"],
    debug: false,
    backend: fsBackendOptions,
    detection: detectorOptions,
    supportedLngs: environment.languages,
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
  };

  i18next.use(Backend).use(middleware.LanguageDetector).init(i18nextOptions);

  app.use(middleware.handle(i18next));
};

export default i18nextConfig;

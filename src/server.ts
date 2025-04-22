import bootstrap from "./main.server";
import i18nextConfig from "./server/core/i18next-config";
import { getAllProducts, getProductBySlug } from "./server/core/mock-data";
import { APP_BASE_HREF } from "@angular/common";
import { CommonEngine, isMainModule } from "@angular/ssr/node";
import express from "express";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, "../browser");
const indexHtml = join(serverDistFolder, "index.server.html");

const app = express();
const commonEngine = new CommonEngine();

i18nextConfig(serverDistFolder, app);

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

app.get("/", (req, res) => {
  const lang = req.language;
  res.redirect(301, `/${lang}`);
});

app.get("/api/products", (req, res) => {
  const language = req.language;
  const products = getAllProducts(language);
  res.json(products);
});

app.get("/api/products/:slug", (req, res) => {
  const slug = req.params.slug;
  const language = req.language;

  const product = getProductBySlug(slug, language);

  if (!product) {
    res.status(404).send(req.t(`messages:NOT_FOUND`, { replace: { slug } }));
  } else {
    res.json(product);
  }
});

/**
 * Serve static files from /browser
 */
app.get(
  "**",
  express.static(browserDistFolder, {
    maxAge: "1y",
    index: "index.html",
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get("**", (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then(html => res.send(html))
    .catch(err => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env["PORT"] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export default app;

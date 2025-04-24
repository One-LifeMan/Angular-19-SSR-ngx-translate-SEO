import { serverProducts } from "../mock/products.mock";
import { environment } from "src/environments/environment";

interface XmlUrl {
  loc: string;
  lastmod?: string;
}

let cachedSitemap: string | null = null;
let cacheExpiresAt = 0;
const CACHE_TTL_MS = 1000 * 60 * 60;

export const getSitemap = () => {
  const now = Date.now();

  if (cachedSitemap && now < cacheExpiresAt) {
    return cachedSitemap;
  }

  const xml = generateSitemap();

  cachedSitemap = xml;
  cacheExpiresAt = now + CACHE_TTL_MS;

  return xml;
};

export const generateSitemap = () => {
  const hostname = environment.appUrl;

  const pages: Array<XmlUrl> = [
    { loc: "/", lastmod: new Date("2025-04-10").toISOString() },
    { loc: "/about", lastmod: new Date("2025-04-10").toISOString() },
    { loc: "/products", lastmod: new Date("2025-04-10").toISOString() },
    { loc: "/404", lastmod: new Date("2025-04-10").toISOString() },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const lang of environment.languages) {
    for (const page of pages) {
      xml += `  <url>\n`;
      xml += `    <loc>${hostname}${lang}${page.loc}</loc>\n`;
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
      xml += `  </url>\n`;
    }

    for (const page of serverProducts) {
      xml += `  <url>\n`;
      xml += `    <loc>${hostname}${lang}/products/${page.slug}</loc>\n`;
      xml += `    <lastmod>${page.updatedAt}</lastmod>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;

  return xml;
};

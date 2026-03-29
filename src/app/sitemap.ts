import type { MetadataRoute } from "next";

import { getConfiguredSiteOrigin } from "@/lib/site-url";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/product",
  "/privacy",
  "/terms",
  "/security",
  "/accessibility",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getConfiguredSiteOrigin();
  const now = new Date();

  return STATIC_ROUTES.map((route, index) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}

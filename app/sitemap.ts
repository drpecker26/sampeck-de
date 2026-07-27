import type { MetadataRoute } from "next";

/** Public pages only — /cl/* is deliberately absent. */
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/games", "/tools"].map((path) => ({
    url: `https://sampeck.de${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

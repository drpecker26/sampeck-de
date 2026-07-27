import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Cover-letter pages are unlisted — reachable by link, never crawled.
      disallow: "/cl/",
    },
    sitemap: "https://sampeck.de/sitemap.xml",
  };
}

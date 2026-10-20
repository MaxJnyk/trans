import type { MetadataRoute } from "next";

const SITE_URL = "https://trans-stroy-spb.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2025-07-21",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/stroenie`,
      lastModified: "2025-07-21",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/perevozki`,
      lastModified: "2025-07-21",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}

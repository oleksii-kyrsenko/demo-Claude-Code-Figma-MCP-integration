import type { MetadataRoute } from 'next';

import { env } from '@/env';

/**
 * Sitemap is regenerated at build time and served at /sitemap.xml.
 *
 * Add static routes here. For dynamic routes (CMS posts, products, etc.)
 * convert this to `async` and fetch the data; the function will be called
 * once at build time. For >50 000 URLs, switch to `generateSitemaps()`:
 * https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_APP_URL;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}

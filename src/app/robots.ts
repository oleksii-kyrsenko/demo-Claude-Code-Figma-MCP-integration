import type { MetadataRoute } from 'next';

import { env } from '@/env';

/**
 * Served at /robots.txt. Tells search engines what to crawl and points at
 * the sitemap. Tighten the disallow list as the app grows (admin pages,
 * authenticated areas, etc.).
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = env.NEXT_PUBLIC_APP_URL;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block both bare and trailing-slash variants — per robots.txt spec,
        // patterns are exact prefix matches, so `/api/` alone allows `/api`.
        disallow: ['/api', '/api/', '/admin', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

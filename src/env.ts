import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * Resolve the public app URL with a sensible fallback chain so the build
 * succeeds on Vercel without manually setting NEXT_PUBLIC_APP_URL:
 *
 *   1. NEXT_PUBLIC_APP_URL  — explicit override (always wins)
 *   2. VERCEL_PROJECT_PRODUCTION_URL — canonical production URL on Vercel
 *   3. VERCEL_URL           — per-deployment URL (preview / branch builds)
 *   4. undefined            — Zod fails fast in local dev without .env.local
 */
const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: appUrl,
  },
});

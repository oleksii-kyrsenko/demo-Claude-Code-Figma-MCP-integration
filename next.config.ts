import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

// next.config.ts is ESM, so __dirname is not built-in — derive it explicitly.
const dirname = path.dirname(fileURLToPath(import.meta.url));

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Pin the workspace root to this file's directory so Next.js does not
  // walk up to ancestor lockfiles (e.g. ~/yarn.lock) and emit a warning.
  outputFileTracingRoot: dirname,
};

export default withBundleAnalyzer(nextConfig);

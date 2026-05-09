import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the workspace root so Turbopack does not pick up
    // a lock-file from a parent directory (e.g. ~/yarn.lock).
    // process.cwd() is used instead of __dirname because next.config.ts
    // is compiled before execution, making __dirname unreliable.
    root: process.cwd(),
  },
};

export default withBundleAnalyzer(nextConfig);

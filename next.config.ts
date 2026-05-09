import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the workspace root so Turbopack does not pick up
    // a lock-file from a parent directory (e.g. ~/yarn.lock).
    root: __dirname,
  },
};

export default withBundleAnalyzer(nextConfig);

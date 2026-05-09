import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/app/**/*.{ts,tsx}', 'src/env.ts', 'src/middleware.ts'],
  project: ['src/**/*.{ts,tsx}'],
  ignore: ['src/**/*.gitkeep'],
  ignoreDependencies: ['@testing-library/jest-dom'],
};

export default config;

import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/app/**/*.{ts,tsx}', 'src/env.ts'],
  project: ['src/**/*.{ts,tsx}'],
  ignoreDependencies: [
    // ESLint plugins are loaded via compat.extends() in eslint.config.mjs,
    // not via direct imports — knip cannot detect them statically.
    'eslint-config-airbnb',
    'eslint-config-airbnb-typescript',
    'eslint-config-next',
    'eslint-plugin-import',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    // Tailwind is consumed by @tailwindcss/postcss at build time, not imported.
    'tailwindcss',
    // Testing Library is available for component tests — not yet used in example tests.
    '@testing-library/react',
    '@testing-library/user-event',
  ],
};

export default config;

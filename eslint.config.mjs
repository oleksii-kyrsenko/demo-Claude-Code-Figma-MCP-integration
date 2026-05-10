import { defineConfig, globalIgnores } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import nextPlugin from '@next/eslint-plugin-next';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'playwright.config.ts',
    'src/__tests__/e2e/**',
  ]),

  // Airbnb style guide (JS + React rules)
  ...compat.extends('airbnb'),

  // Airbnb TypeScript overrides
  ...compat.extends('airbnb-typescript'),

  // TypeScript parser + plugin for .ts/.tsx files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },

  // Next.js specific rules
  {
    plugins: { '@next/next': nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // Prettier — must be last
  prettierConfig,
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',

      // React 17+ — JSX transform, no import needed
      'react/react-in-jsx-scope': 'off',

      // Next.js Link doesn't require <a> inside
      'jsx-a11y/anchor-is-valid': 'off',

      // Named exports are common in Next.js
      'import/prefer-default-export': 'off',

      // Props spreading is fine for wrapper/HOC components
      'react/jsx-props-no-spreading': 'off',

      // Removed in @typescript-eslint v8 (airbnb-typescript still references it)
      '@typescript-eslint/lines-between-class-members': 'off',

      // Config files (next.config.ts, knip.config.ts) import devDependencies intentionally
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['*.config.ts', '*.config.mjs', '*.config.cjs'] },
      ],

      // Disabled: TypeScript handles module resolution and extension validation.
      // The rule's resolver does not understand tsconfig `paths` (e.g. `@/`)
      // unless eslint-import-resolver-typescript is installed.
      'import/extensions': 'off',
    },
  },
]);

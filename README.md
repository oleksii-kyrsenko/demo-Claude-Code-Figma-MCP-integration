# Next.js Starter Template

A production-ready Next.js starter with TypeScript, Tailwind CSS, ESLint (Airbnb), Prettier, Husky, Jest, Playwright, GitHub Actions CI, and CodeRabbit AI code review.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript (strict mode)
- **Styling** — Tailwind CSS v4
- **Env validation** — `@t3-oss/env-nextjs` + Zod
- **Linting** — ESLint 9 + Airbnb style guide
- **Formatting** — Prettier
- **Git hooks** — Husky + lint-staged (pre-commit)
- **Unit / Integration tests** — Jest 29 + ts-jest
- **E2E tests** — Playwright
- **Dead code detection** — Knip
- **Bundle analysis** — `@next/bundle-analyzer`
- **CI** — GitHub Actions
- **AI Code Review** — CodeRabbit

## Getting Started

### Prerequisites

- Node.js 24+
- npm 10+

### Installation

```bash
git clone <repo-url>
cd <project-name>
npm install
cp .env.example .env.local   # fill in required values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   ├── page.tsx           # Home page
│   ├── error.tsx          # Error boundary page
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles + CSS variables
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Third-party clients, shared utilities
├── types/                 # Shared TypeScript types and interfaces
├── env.ts                 # Type-safe environment variable schema
├── proxy.ts               # Security headers, auth guards, redirects
└── __tests__/
    ├── unit/              # *.unit.test.ts
    ├── integration/       # *.integration.test.ts
    └── e2e/               # *.e2e.test.ts (Playwright)
```

## Environment Variables

All variables are declared in [`.env.example`](.env.example) and validated at build time via [`src/env.ts`](src/env.ts) using `@t3-oss/env-nextjs` + Zod.

```bash
cp .env.example .env.local
```

To add a new variable:

1. Add it to `.env.example`
2. Declare it in `src/env.ts` under `server` or `client`
3. Use `env.MY_VAR` instead of `process.env.MY_VAR`

## Scripts

| Command                          | Description                                  |
| -------------------------------- | -------------------------------------------- |
| `npm run dev`                    | Start development server (webpack)           |
| `npm run dev:turbo`              | Start development server (Turbopack)         |
| `npm run build`                  | Production build                             |
| `npm run start`                  | Start production server                      |
| `npm run analyze`                | Build + open bundle size visualiser          |
| `npm run typescript:check`       | Type-check without emitting files            |
| `npm run lint`                   | Check code with ESLint                       |
| `npm run lint:fix`               | Auto-fix ESLint issues                       |
| `npm run format`                 | Format all files with Prettier               |
| `npm run format:check`           | Check formatting without writing             |
| `npm run knip`                   | Find unused files, exports, and dependencies |
| `npm test`                       | Run unit + integration tests                 |
| `npm run test:unit`              | Unit tests only                              |
| `npm run test:unit:watch`        | Unit tests in watch mode                     |
| `npm run test:integration`       | Integration tests only                       |
| `npm run test:integration:watch` | Integration tests in watch mode              |
| `npm run test:coverage`          | All tests with coverage report               |
| `npm run test:e2e`               | Playwright E2E tests                         |
| `npm run test:e2e:ui`            | Playwright with interactive UI               |
| `npm run test:e2e:report`        | Open last Playwright HTML report             |

## Code Quality

### Pre-commit Hook

Husky runs automatically on every `git commit`:

1. **TypeScript** — `tsc --noEmit`
2. **Tests** — unit + integration
3. **ESLint** — auto-fix staged `*.{ts,tsx}` files
4. **Prettier** — format staged files

### ESLint

Configured with the Airbnb style guide (`eslint-config-airbnb` + `eslint-config-airbnb-typescript`), integrated with Prettier to avoid conflicts.

Config: [`eslint.config.mjs`](eslint.config.mjs)

### Prettier

Config: [`.prettierrc`](.prettierrc)

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

### Knip

Detects unused files, exports, and dependencies. Run locally with `npm run knip` or automatically in CI.

Config: [`knip.config.ts`](knip.config.ts)

### VS Code

Install the recommended extensions (prompted automatically on project open):

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Errors are highlighted in the editor and auto-fixed on save.

## Testing

Tests are split into three suites:

| Suite       | Location                     | Config                        | Runner     |
| ----------- | ---------------------------- | ----------------------------- | ---------- |
| Unit        | `src/__tests__/unit/`        | `jest.unit.config.cjs`        | Jest       |
| Integration | `src/__tests__/integration/` | `jest.integration.config.cjs` | Jest       |
| E2E         | `src/__tests__/e2e/`         | `playwright.config.ts`        | Playwright |

File naming convention: `*.unit.test.ts` / `*.integration.test.ts` / `*.e2e.test.ts`

E2E tests run against a live dev server (started automatically by Playwright via `webServer` config).

## CI / GitHub Actions

On every pull request to `dev` or `main`, five sequential jobs run:

```text
Type Check → Lint → Unit Tests → Integration Tests → E2E Tests
```

| Job                   | What runs                                                 |
| --------------------- | --------------------------------------------------------- |
| **Type Check**        | `tsc --noEmit`                                            |
| **Lint**              | ESLint, Prettier format check, Knip                       |
| **Unit Tests**        | Jest unit suite                                           |
| **Integration Tests** | Jest integration suite                                    |
| **E2E Tests**         | Playwright (Chromium), uploads report artifact on failure |

All jobs must pass before merging.

Config: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

## AI Code Review

[CodeRabbit](https://coderabbit.ai) automatically reviews every PR targeting `dev` or `main`. It follows project-specific guidelines for TypeScript, tests, and CI workflows defined in [`.coderabbit.yaml`](.coderabbit.yaml).

If CodeRabbit requests changes, the PR is blocked until the issues are resolved or the review is dismissed.

## Proxy

[`src/proxy.ts`](src/proxy.ts) runs on every request and applies security headers by default (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).

Extend it for auth guards, i18n redirects, or feature flags.

> **Note:** In Next.js 16, `middleware.ts` was renamed to `proxy.ts`. The API is identical — `NextRequest`, `NextResponse`, and `matcher` config all work the same way.

## Branch Protection

`dev` and `main` are protected:

- Direct push is blocked — changes go through PRs only
- All CI checks must pass before merging
- Branches are deleted automatically after merge

To apply the same rules to a new repository created from this template:

```bash
bash scripts/setup-branch-protection.sh
```

Requires [GitHub CLI](https://cli.github.com/) with `administration:write` permission.

## Dev server: webpack vs. Turbopack

This template defaults to `next dev --webpack` for compatibility with low-memory machines (≤8 GB RAM). On Apple Silicon M1/M2 base models, Turbopack's Rust worker pool can consume 5–7 GB RSS during initial compilation, causing severe memory pressure or system freezes.

| Script              | Bundler   | Use when                               |
| ------------------- | --------- | -------------------------------------- |
| `npm run dev`       | webpack   | Default. Stable on 8 GB machines.      |
| `npm run dev:turbo` | Turbopack | Faster HMR. Recommended on ≥16 GB RAM. |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT — see [LICENSE](LICENSE).

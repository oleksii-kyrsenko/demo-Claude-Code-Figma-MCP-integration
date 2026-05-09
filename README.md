# Next.js Starter Template

A production-ready Next.js starter with TypeScript, Tailwind CSS, ESLint (Airbnb), Prettier, Husky, Jest, GitHub Actions CI, and CodeRabbit AI code review.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Linting** — ESLint 9 + Airbnb style guide
- **Formatting** — Prettier
- **Git hooks** — Husky + lint-staged (pre-commit)
- **Testing** — Jest 29 + ts-jest
- **CI** — GitHub Actions
- **Code Review** — CodeRabbit AI

## Getting Started

### Prerequisites

- Node.js 24+
- npm 10+

### Installation

```bash
git clone <repo-url>
cd <project-name>
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command                    | Description                       |
| -------------------------- | --------------------------------- |
| `npm run dev`              | Start development server          |
| `npm run build`            | Build for production              |
| `npm run start`            | Start production server           |
| `npm run typescript:check` | Type-check without emitting files |
| `npm run lint`             | Check code with ESLint            |
| `npm run lint:fix`         | Auto-fix ESLint issues            |
| `npm run format`           | Format all files with Prettier    |
| `npm run format:check`     | Check formatting without writing  |
| `npm run test`             | Run all tests                     |
| `npm run test:unit`        | Run unit tests                    |
| `npm run test:unit:watch`  | Run unit tests in watch mode      |
| `npm run test:integration` | Run integration tests             |
| `npm run test:coverage`    | Run tests with coverage report    |

## Code Quality

### Pre-commit Hook

Husky runs on every commit:

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

### VS Code

Install the recommended extensions (prompted automatically on project open):

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Errors are highlighted in the editor and auto-fixed on save.

## Testing

Tests are split into two suites:

| Suite       | Location                     | Config                        |
| ----------- | ---------------------------- | ----------------------------- |
| Unit        | `src/__tests__/unit/`        | `jest.unit.config.cjs`        |
| Integration | `src/__tests__/integration/` | `jest.integration.config.cjs` |

File naming convention: `*.unit.test.ts` / `*.integration.test.ts`

## CI / GitHub Actions

On every pull request to `dev` or `main`, four sequential jobs run:

1. **Type Check** — `tsc --noEmit`
2. **Lint** — ESLint + Prettier format check
3. **Unit Tests** — Jest unit suite
4. **Integration Tests** — Jest integration suite

All checks must pass before merging.

Config: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

## Code Review

[CodeRabbit](https://coderabbit.ai) automatically reviews every PR targeting `dev` or `main`. It follows project-specific guidelines for TypeScript, tests, and CI workflows defined in [`.coderabbit.yaml`](.coderabbit.yaml).

If CodeRabbit requests changes, the PR is blocked until the issues are resolved or the review is dismissed.

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

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
└── __tests__/
    ├── unit/              # Unit tests
    └── integration/       # Integration tests
```

## License

MIT — see [LICENSE](LICENSE).

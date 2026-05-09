# Contributing

## Branching

- `main` — production-ready, protected
- `dev` — integration branch, protected
- Feature branches — `feat/`, `fix/`, `chore/`, `docs/` prefixes

Always branch from `dev`:

```bash
git checkout dev && git pull origin dev
git checkout -b feat/your-feature
```

## Development workflow

```bash
npm install
cp .env.example .env.local   # fill in required values
npm run dev
```

## Before committing

The pre-commit hook runs automatically:

1. `tsc --noEmit` — type check
2. `npm test` — unit + integration tests
3. ESLint auto-fix on staged files
4. Prettier format on staged files

If the hook fails, fix the reported issues before committing.

## Pull requests

- Open PRs against `dev` (not `main`)
- Fill in the PR template — summary, type of change, checklist
- All CI checks must pass (Type Check → Lint → Unit Tests → Integration Tests → E2E Tests)
- CodeRabbit will review automatically — address any actionable comments

## Scripts reference

| Command                    | Description                         |
| -------------------------- | ----------------------------------- |
| `npm run dev`              | Start dev server                    |
| `npm run build`            | Production build                    |
| `npm run typescript:check` | Type check                          |
| `npm run lint`             | ESLint check                        |
| `npm run lint:fix`         | ESLint auto-fix                     |
| `npm run format`           | Prettier format                     |
| `npm run format:check`     | Prettier check                      |
| `npm test`                 | Unit + integration tests            |
| `npm run test:unit`        | Unit tests only                     |
| `npm run test:integration` | Integration tests only              |
| `npm run test:e2e`         | E2E tests (requires running server) |
| `npm run knip`             | Find unused code and dependencies   |
| `npm run analyze`          | Bundle size analysis                |

## Code conventions

- TypeScript strict mode — no `any`
- Airbnb ESLint style guide
- Named exports only (no default component exports, except pages)
- Path aliases: `@/components/...`, `@/lib/...`, `@/hooks/...`, `@/types/...`
- Test files: `*.unit.test.ts` / `*.integration.test.ts` / `*.e2e.test.ts`

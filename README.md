# Next.js Starter Template

A production-ready Next.js starter with TypeScript, Tailwind CSS, ESLint (Airbnb), Prettier, Husky, and GitHub Actions CI.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Linting** — ESLint 9 + Airbnb style guide
- **Formatting** — Prettier
- **Git hooks** — Husky + lint-staged (pre-commit)
- **CI** — GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
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

## Code Quality

### Pre-commit Hook

Husky runs on every commit:

1. **TypeScript** — `tsc --noEmit`
2. **ESLint** — auto-fix staged `*.{ts,tsx}` files
3. **Prettier** — format staged files

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

## CI / GitHub Actions

On every pull request to `dev` or `main`, the `code-quality` job runs:

1. TypeScript check
2. ESLint
3. Prettier format check

Config: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

## Branch Protection

`dev` and `main` are protected:

- Direct push is blocked — changes go through PRs only
- PR requires all CI checks to pass before merging
- Branches are deleted automatically after merge

To apply the same rules to a new repository created from this template:

```bash
bash scripts/setup-branch-protection.sh
```

Requires [GitHub CLI](https://cli.github.com/) with `administration:write` permission.

## Project Structure

```
src/
└── app/
    ├── layout.tsx   # Root layout
    ├── page.tsx     # Home page
    └── globals.css  # Global styles
```

## License

MIT — see [LICENSE](LICENSE).

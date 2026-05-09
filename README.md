# Claude Code + Figma MCP Integration

A Next.js demo project showcasing integration between [Claude Code](https://claude.ai/code) and Figma via the Model Context Protocol (MCP).

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Linting** — ESLint 9 + Airbnb style guide
- **Formatting** — Prettier
- **Git hooks** — Husky + lint-staged (pre-commit)

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
git clone <repo-url>
cd demo-Claude-Code-Figma-MCP-integration
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start development server         |
| `npm run build`        | Build for production             |
| `npm run start`        | Start production server          |
| `npm run lint`         | Check code with ESLint           |
| `npm run lint:fix`     | Auto-fix ESLint issues           |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check formatting without writing |

## Code Quality

### ESLint + Airbnb

ESLint is configured with the Airbnb style guide (`eslint-config-airbnb` + `eslint-config-airbnb-typescript`) and integrated with Prettier to avoid rule conflicts.

Config: [`eslint.config.mjs`](eslint.config.mjs)

### Prettier

Prettier config: [`.prettierrc`](.prettierrc)

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

### Pre-commit Hook

Husky runs lint-staged before every commit:

- `*.{ts,tsx}` — ESLint fix + Prettier
- `*.{js,mjs,cjs}` — Prettier
- `*.{json,css,md}` — Prettier

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

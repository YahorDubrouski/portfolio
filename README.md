# Yahor Dubrouski Portfolio

Personal portfolio site — Astro static export with role-based hire funnels, curated proof pages, and CV exports.

**Live site:** https://portfolio.yahordubrouski.com/

## Stack

- Astro 5 (SSG)
- TypeScript
- Tailwind CSS
- Playwright (smoke tests)
- Cloudflare Pages (production deploy target)

## Development

```bash
npm install
npm run dev
```

Local default: http://localhost:4321

## Production build

```bash
SITE_URL=https://your-domain.com npm run build
npm run preview
```

Set `SITE_URL` to your canonical domain so sitemap, canonical URLs, and JSON-LD use absolute links.

## Cloudflare Pages

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Build environment | `SITE_URL=https://your-domain.com` |
| Output directory | `dist` |

## Tests

```bash
npm run build
npm run test:e2e
```

## Main routes

| Route | Purpose |
|-------|---------|
| `/` | Neutral home — proof overview |
| `/projects` | All projects (includes this repo as **Yahor Dubrouski Portfolio**) |
| `/hire/devops`, `/hire/full-stack`, `/hire/backend` | Role landing funnels + sub-pages |
| `/hire/ai-automation` | Placeholder hire page |
| `/experience`, `/outcomes`, `/reviews`, `/certificates`, `/integrations`, `/capabilities` | Proof pages |
| `/proof/docker` | Docker skill proof |
| `/cv/*` | Web CV views (noindex) |

## Project structure

```
src/
  data/           # Typed site data (projects.json, outcomes, reviews, …)
  templates/      # Page templates
  components/     # Shared UI
  pages/          # Astro routes
ai-agents/        # Agent-only cache and enrichment (not imported at runtime)
public/           # Static assets
```

## Data sources

| Layer | Location | Used by |
|-------|----------|---------|
| **AI agent cache** | `ai-agents/database/projects.cache.json` | Cursor agents only |
| **Public site catalog** | `src/data/projects.json` | Astro build — curated copy |

The live site never imports the agent cache at runtime. Refresh site projects from cache only when explicitly updating content:

```bash
python3 ai-agents/scripts/export_site_projects.py
```

After export, re-review `src/data/projects.json` and section order in `src/data/projects.ts`.

## CV PDFs

```bash
CV_SLUG=backend-devops npm run cv:regenerate-pdf
```

# AI Agents Database

Two agent-readable databases — **not** the website. Cursor enriches; site (`src/data/*`) is updated separately.

## 1. Projects (code repos)

```bash
python3 ai-agents/scripts/sync_projects_cache.py
# In Cursor: "Update portfolio cache"
python3 ai-agents/scripts/check_cache_stale.py
# When updating the live site project list (explicit step):
python3 ai-agents/scripts/export_site_projects.py
```

| File | Description |
|------|-------------|
| `database/projects.json` | Manual list of project paths |
| `database/projects.cache.json` | Enriched repos — **agents read this** |

Rule: `.cursor/rules/portfolio-cache.mdc`

## 2. Profile (career & proof)

JSON files in `database/` — identity, jobs, reviews, certs, CVs, outcomes.

| File | Content |
|------|---------|
| `profile.json` | Taglines, bios, contacts, languages |
| `experience.json` | Work history |
| `outcomes.json` | Measurable achievements |
| `reviews.json` | Testimonials + proof links/images |
| `certifications.json` | Certs and courses |
| `capabilities.json` | Skills → evidence map |
| `cvs.json` | CV versions + extracted bullets |
| `sources.json` | Registry of every raw input |

Raw files (PDFs, screenshots): `sources/` (gitignored — see `sources/README.md`).

### How to enrich

1. Provide data (text, image, PDF) in chat.
2. Say e.g. **"enrich database with this review"** or **"enrich database with this CV"**.
3. Cursor follows the matching rule in `.cursor/rules/profile-enrich-*.mdc`.

Index rule: `.cursor/rules/profile-database.mdc`

| Task | Rule |
|------|------|
| Any new file/paste | `profile-enrich-sources.mdc` |
| Reviews | `profile-enrich-reviews.mdc` |
| CV / resume | `profile-enrich-cv.mdc` |
| Jobs | `profile-enrich-experience.mdc` |
| Metrics / achievements | `profile-enrich-outcomes.mdc` |
| Bio / positioning | `profile-enrich-profile.mdc` |
| Certificates | `profile-enrich-certifications.mdc` |
| Skills matrix | `profile-enrich-capabilities.mdc` |

## Principles

- **Database ≠ website** — enrich JSON first; copy to site only when building pages.
- **Evidence only** — no invented metrics or skills.
- **Sources first** — every input traceable in `sources.json`.
- Projects: Python stubs only; Cursor marks `complete`. Profile: Cursor writes all enrichment.

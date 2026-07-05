# AI Agents Database

Portfolio project cache for Cursor agents. **No external API keys** — Cursor explores each project and writes the cache.

## Workflow

```bash
# Optional: add stubs for new paths in projects.json
python3 ai-agents/scripts/sync_projects_cache.py

# In Cursor chat:
# "Update portfolio cache"

# Verify all entries enriched:
python3 ai-agents/scripts/check_cache_stale.py
```

## Files

| File | Description |
|------|-------------|
| `database/projects.json` | Manual list of project paths |
| `database/projects.cache.json` | **Agents read this** — Cursor-enriched |
| `scripts/sync_projects_cache.py` | Stubs + git dates only |
| `scripts/check_cache_stale.py` | Flags pending/stale entries |

## Cache entry fields

| Field | Description |
|-------|-------------|
| `enrichment_status` | `pending` \| `complete` \| `stale` |
| `summary`, `technologies`, `features` | Core project description |
| `when_to_use` | Agent routing hint |
| `competencies` | Skills this project demonstrates |
| `design_patterns` | Patterns found in code (with evidence) |
| `best_practices` | Practices exemplified in the project |
| `keywords` | Tags for search/routing |
| `trade_offs` | Documented architectural decisions |
| `audience` | Who this project targets (e.g. hiring managers) |
| `complexity` | `low` \| `medium` \| `high` |
| `related_projects` | Other cache entry ids |
| `sub_project_ids` | For collections/monorepos |

## Rules

- Python does **not** interpret projects
- Only Cursor marks entries `complete`
- See `.cursor/rules/portfolio-cache.mdc` for full enrichment workflow

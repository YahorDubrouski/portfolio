# Profile source files

Raw inputs for profile database enrichment (CV PDFs, review screenshots, LinkedIn exports, perf review notes).

- Files here are referenced from `database/sources.json`.
- Sensitive files may also live outside the repo; use absolute `path` in `sources.json`.
- Cursor rules in `.cursor/rules/profile-enrich-*.mdc` describe how to process each type.

Suggested layout:

```
sources/
  cvs/
  reviews/
  linkedin/
  performance-reviews/
  notes/
```

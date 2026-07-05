#!/usr/bin/env python3
"""Report pending/stale project cache entries. Exit 1 if any need Cursor enrichment."""

from __future__ import annotations

import json
import sys
from datetime import datetime, timezone
from pathlib import Path

DATABASE_DIR = Path(__file__).resolve().parent.parent / "database"
PROJECTS_CACHE = DATABASE_DIR / "projects.cache.json"


def parse_iso(value: str | None) -> datetime | None:
    if not value:
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None


def main() -> None:
    if not PROJECTS_CACHE.is_file():
        print(f"Missing cache: {PROJECTS_CACHE}")
        raise SystemExit(1)

    cache = json.loads(PROJECTS_CACHE.read_text(encoding="utf-8"))
    stale_after_days = cache.get("stale_after_days", 30)
    now = datetime.now(timezone.utc)
    needs_work: list[str] = []

    for project in cache.get("projects", []):
        project_id = project.get("id", project.get("path", "?"))
        status = project.get("enrichment_status", "pending")

        if status == "pending":
            needs_work.append(f"{project_id} (pending)")
            continue

        if status == "stale":
            needs_work.append(f"{project_id} (stale)")
            continue

        enriched_at = parse_iso(project.get("enriched_at"))
        if enriched_at is None:
            needs_work.append(f"{project_id} (no enriched_at)")
            continue

        age_days = (now - enriched_at.astimezone(timezone.utc)).days
        if age_days > stale_after_days:
            needs_work.append(f"{project_id} (older than {stale_after_days} days)")
            continue

        last_commit_at = parse_iso(project.get("last_commit_at"))
        if last_commit_at and last_commit_at > enriched_at:
            needs_work.append(f"{project_id} (git commit after enrichment)")

    if needs_work:
        print("Project cache needs Cursor enrichment:")
        for line in needs_work:
            print(f"  - {line}")
        raise SystemExit(1)

    total = len(cache.get("projects", []))
    print(f"Project cache is fresh ({total} entries).")


if __name__ == "__main__":
    main()

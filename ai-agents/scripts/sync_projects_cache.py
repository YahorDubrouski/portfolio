#!/usr/bin/env python3
"""Ensure projects.cache.json has a stub entry for every path in projects.json.

Does not interpret projects — only adds missing paths and updates git dates.
All enrichment is done by Cursor (see .cursor/rules/portfolio-cache.mdc).
"""

from __future__ import annotations

import json
import subprocess
from datetime import datetime, timezone
from pathlib import Path

STALE_AFTER_DAYS = 30
SCRIPT_DIR = Path(__file__).resolve().parent
DATABASE_DIR = SCRIPT_DIR.parent / "database"
PROJECTS_SOURCE = DATABASE_DIR / "projects.json"
PROJECTS_CACHE = DATABASE_DIR / "projects.cache.json"


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def empty_technologies() -> dict:
    return {
        "languages": [],
        "frameworks": [],
        "cloud": [],
        "tools": [],
        "databases": [],
    }


def project_id(path: Path) -> str:
    return path.name.replace("_", "-").lower()


def git_last_commit_at(project_path: Path) -> str | None:
    if not (project_path / ".git").exists():
        return None
    result = subprocess.run(
        ["git", "-C", str(project_path), "log", "-1", "--format=%cI"],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return None
    return result.stdout.strip() or None


def load_cache() -> dict:
    if not PROJECTS_CACHE.is_file():
        return {
            "generated_at": None,
            "stale_after_days": STALE_AFTER_DAYS,
            "source": str(PROJECTS_SOURCE),
            "enrichment_model": "cursor",
            "projects": [],
        }
    return json.loads(PROJECTS_CACHE.read_text(encoding="utf-8"))


def pending_stub(path: Path, updated_at: str) -> dict:
    return {
        "id": project_id(path),
        "path": str(path),
        "type": "project",
        "parent_collection": None,
        "name": path.name.replace("-", " ").replace("_", " ").title(),
        "last_commit_at": git_last_commit_at(path),
        "sub_project_ids": [],
        "enrichment_status": "pending",
        "enriched_at": None,
        "enriched_by": None,
        "summary": None,
        "technologies": empty_technologies(),
        "features": [],
        "architecture": None,
        "problems_solved": [],
        "use_cases": [],
        "when_to_use": None,
        "competencies": [],
        "design_patterns": [],
        "best_practices": [],
        "keywords": [],
        "trade_offs": [],
        "audience": [],
        "complexity": null,
        "related_projects": [],
        "updated_at": updated_at,
    }


def main() -> None:
    if not PROJECTS_SOURCE.is_file():
        raise SystemExit(f"Missing source file: {PROJECTS_SOURCE}")

    updated_at = utc_now_iso()
    source_paths = {
        str(Path(entry["path"]).expanduser().resolve())
        for entry in json.loads(PROJECTS_SOURCE.read_text(encoding="utf-8")).get("local-projects", [])
    }

    cache = load_cache()
    by_path = {entry["path"]: entry for entry in cache.get("projects", [])}
    added = 0

    for path_str in sorted(source_paths):
        path = Path(path_str)
        if path_str in by_path:
            by_path[path_str]["last_commit_at"] = git_last_commit_at(path)
            by_path[path_str]["updated_at"] = updated_at
            continue
        by_path[path_str] = pending_stub(path, updated_at)
        added += 1

    cache["projects"] = sorted(by_path.values(), key=lambda item: item["path"])
    cache["generated_at"] = updated_at
    cache["stale_after_days"] = STALE_AFTER_DAYS
    cache["source"] = str(PROJECTS_SOURCE)
    cache["enrichment_model"] = "cursor"

    PROJECTS_CACHE.write_text(
        json.dumps(cache, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    pending = sum(1 for entry in cache["projects"] if entry.get("enrichment_status") == "pending")
    print(f"Sync complete. Added {added} stub(s). Pending enrichment: {pending}.")


if __name__ == "__main__":
    main()

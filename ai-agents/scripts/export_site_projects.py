#!/usr/bin/env python3
"""Copy public-safe project fields from the AI cache into src/data/projects.json.

Run only when explicitly updating site project content — not part of normal build.
The live site must never import ai-agents/database/projects.cache.json directly.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / "ai-agents/database/projects.cache.json"
OUT = ROOT / "src/data/projects.json"

SITE_FIELDS = [
    "id",
    "type",
    "parent_collection",
    "name",
    "summary",
    "technologies",
    "features",
    "architecture",
    "problems_solved",
    "use_cases",
    "when_to_use",
    "competencies",
    "design_patterns",
    "best_practices",
    "keywords",
    "trade_offs",
    "audience",
    "complexity",
    "related_projects",
    "sub_project_ids",
]


def main() -> None:
    cache = json.loads(CACHE.read_text(encoding="utf-8"))
    projects = [{k: entry[k] for k in SITE_FIELDS if k in entry} for entry in cache.get("projects", [])]

    payload = {
        "schema_version": 1,
        "description": "Public site project catalog — curated copy, not the AI agent cache.",
        "updated_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "sync_note": (
            "Populate from ai-agents/database/projects.cache.json only when explicitly "
            "updating site content — never import cache at runtime."
        ),
        "projects": projects,
    }

    OUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Exported {len(projects)} projects → {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()

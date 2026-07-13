#!/usr/bin/env python3
"""Copy README and documentation images from cached projects into public/projects/."""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / "ai-agents/database/projects.cache.json"
PUBLIC = ROOT / "public/projects"
IMG_EXT = {".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif"}
SKIP_SRC = ("shields.io", "img.shields")


def readme_images(readme: Path) -> list[tuple[str, Path]]:
    found: list[tuple[str, Path]] = []
    text = readme.read_text(errors="ignore")
    for alt, src in re.findall(r"!\[([^\]]*)\]\(([^)]+)\)", text):
        src = src.strip()
        if any(skip in src for skip in SKIP_SRC) or src.startswith("http"):
            continue
        local = (readme.parent / src.lstrip("./")).resolve()
        if local.exists() and local.suffix.lower() in IMG_EXT:
            found.append((src.lstrip("./"), local))
    return found


def copy_project(project: dict) -> int:
    if project.get("type") != "project":
        return 0
    proot = Path(project["path"])
    if not proot.exists():
        return 0

    pid = project["id"]
    dest_root = PUBLIC / pid
    copied = 0
    seen: set[str] = set()

    readme = proot / "README.md"
    if readme.exists():
        for rel, local in readme_images(readme):
            if str(local) in seen:
                continue
            seen.add(str(local))
            out = dest_root / rel
            out.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(local, out)
            copied += 1

    for name in ("diagram.svg", "diagram.png", "Diagram.jpg", "diagram.png"):
        for source in proot.rglob(name):
            if "vendor" in source.parts or "node_modules" in source.parts:
                continue
            key = str(source)
            if key in seen:
                continue
            seen.add(key)
            rel = source.relative_to(proot)
            out = dest_root / rel
            out.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, out)
            copied += 1

    return copied


def main() -> None:
    cache = json.loads(CACHE.read_text())
    total = 0
    for project in cache["projects"]:
        count = copy_project(project)
        if count:
            print(f"{project['id']}: {count} file(s)")
            total += count
    print(f"Done. Copied {total} media file(s) to {PUBLIC.relative_to(ROOT)}/")


if __name__ == "__main__":
    main()

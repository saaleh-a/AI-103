#!/usr/bin/env python3
"""Keep concept/entity pages' reciprocal links current (schema.md §9, lint "one-way links").

For every concept or entity page, finds the concept, entity and synthesis pages that link
to it but that it does not link back to, and writes them as one generated line at the end
of its `## Connections` section:

    - *Also linked from:* [[page-a]] · [[page-b]]

The line is regenerated on every run (idempotent), so hand-written connection bullets are
never touched. Run after compiling pages, before lint.

Usage (from the repo root):  python scripts/sync_backlinks.py
"""
from __future__ import annotations

import re
from collections import defaultdict
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
WIKI = ROOT / "wiki"
WIKILINK = re.compile(r"\[\[([^\[\]|#^]+)(?:[#^][^\[\]|]*)?(?:\|[^\[\]]*)?\]\]")
MARK = "- *Also linked from:*"
TARGET_TYPES = {"concept", "entity"}
SOURCE_TYPES = {"concept", "entity", "synthesis"}
EXCLUDE = {"index", "log", "lint-report", "corpus-map", "objective-map", "glossary", "learning-path"}


def load(path: Path):
    text = path.read_text(encoding="utf-8")
    end = text.find("\n---", 3)
    fm = yaml.safe_load(text[3:end]) or {}
    return text, fm


def main() -> None:
    pages = {}
    for path in WIKI.rglob("*.md"):
        text, fm = load(path)
        body = "\n".join(l for l in text.splitlines() if not l.startswith(MARK))
        links = {m.group(1).strip().split("/")[-1] for m in WIKILINK.finditer(body)}
        pages[path.stem] = {"path": path, "text": text, "type": fm.get("type"), "links": links}

    inbound = defaultdict(set)
    for stem, pg in pages.items():
        if pg["type"] not in SOURCE_TYPES or stem in EXCLUDE:
            continue
        for tgt in pg["links"]:
            if tgt in pages and tgt != stem:
                inbound[tgt].add(stem)

    changed = 0
    for stem, pg in pages.items():
        if pg["type"] not in TARGET_TYPES:
            continue
        missing = sorted(s for s in inbound[stem] if s not in pg["links"])
        lines = [l for l in pg["text"].splitlines() if not l.startswith(MARK)]
        if missing:
            try:
                start = next(i for i, l in enumerate(lines) if l.strip() == "## Connections")
            except StopIteration:
                continue
            end = next((i for i in range(start + 1, len(lines)) if lines[i].startswith("## ")), len(lines))
            insert_at = end
            while insert_at > start + 1 and not lines[insert_at - 1].strip():
                insert_at -= 1
            lines.insert(insert_at, f"{MARK} " + " · ".join(f"[[{s}]]" for s in missing))
        new = "\n".join(lines) + ("\n" if pg["text"].endswith("\n") else "")
        if new != pg["text"]:
            pg["path"].write_text(new, encoding="utf-8")
            changed += 1
    print(f"backlinks synced: {changed} pages updated")


if __name__ == "__main__":
    main()

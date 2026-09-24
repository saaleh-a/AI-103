#!/usr/bin/env python3
"""Keep each source page's module navigation current (schema.md §8, navigation).

Every Learn unit and episode belongs to a module (scripts/data/corpus-registry.json). This writes one
generated line at the end of each such source page's `## Connections` section listing the other
units of its module in course order, then the module's episode transcript(s):

    - *Module units:* [[src-118-…|1 Introduction]] · [[src-238-…|2 Understand workflows]] · … · [[src-15-…|episode 12]]

A learner can follow a module unit by unit, and no unit page is left without inbound links. The line
is regenerated on every run (idempotent) and ignored by `scripts/build_wiki_graph.py`, so module
membership does not drown the idea-level link graph.

Usage (from the repo root):  python scripts/sync_module_links.py
"""
from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
WIKI = ROOT / "wiki"
REGISTRY = ROOT / "scripts" / "data" / "corpus-registry.json"
MARK = "- *Module units:*"
TOKENS = re.compile(r"[a-z0-9]+")
STOP = {"a", "an", "the", "with", "in", "to", "and", "of", "for", "microsoft", "azure", "ai",
        "using", "by", "on", "use"}


def toks(s: str | None) -> set[str]:
    return set(TOKENS.findall((s or "").lower())) - STOP


def main() -> None:
    reg = json.loads(REGISTRY.read_text(encoding="utf-8"))["sources"]
    pages = {}
    for p in (WIKI / "sources").glob("src-*.md"):
        text = p.read_text(encoding="utf-8")
        fm = yaml.safe_load(text[3:text.find("\n---", 3)]) or {}
        for sid in fm.get("source_ids") or []:
            pages[sid] = p
    units = defaultdict(list)
    for r in reg:
        if r["kind"] == "learn-unit" and r.get("module"):
            units[r["module"]].append(r)
    episodes = defaultdict(list)
    for r in reg:
        if r["kind"] == "episode":
            best = max(units, key=lambda m: len(toks(m) & toks(r["module"])) / max(1, len(toks(m) | toks(r["module"]))))
            episodes[best].append(r)
    changed = 0
    for module, rs in units.items():
        members = sorted(rs, key=lambda r: (r.get("unit_index") or 0, r["id"])) + \
            sorted(episodes.get(module, []), key=lambda r: r.get("episode") or 0)
        for r in members:
            path = pages.get(r["sid"])
            if path is None:
                continue
            others = [m for m in members if m["sid"] != r["sid"] and m["sid"] in pages]

            def label(m: dict) -> str:
                if m["kind"] == "episode":
                    return f"episode {m['episode']}"
                title = m["title"].replace("|", "/").replace("[", "(").replace("]", ")")
                return f"{m.get('unit_index') or '?'} {title}"
            line = f"{MARK} " + " · ".join(f"[[{pages[m['sid']].stem}|{label(m)}]]" for m in others)
            text = path.read_text(encoding="utf-8")
            lines = [l for l in text.splitlines() if not l.startswith(MARK)]
            try:
                start = next(i for i, l in enumerate(lines) if l.strip() == "## Connections")
            except StopIteration:
                continue
            end = next((i for i in range(start + 1, len(lines)) if lines[i].startswith("## ")), len(lines))
            insert_at = end
            while insert_at > start + 1 and not lines[insert_at - 1].strip():
                insert_at -= 1
            if others:
                lines.insert(insert_at, line)
            new = "\n".join(lines) + ("\n" if text.endswith("\n") else "")
            if new != text:
                path.write_text(new, encoding="utf-8")
                changed += 1
    print(f"module links synced: {changed} source pages updated across {len(units)} modules")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Build a metadata registry of the raw AI-103 corpus (schema.md §4, §10).

Each raw file in corpus/ gets one record: its source ID (SRC-N = the filename's numeric
prefix), URL, capture kind, Learn learning path / module / unit position, episode number
and presenters, and the 1-based line range that holds the actual teaching content (Learn
captures wrap ~200 lines of site navigation around it). The registry is derived and
deterministic; the raw files stay untouched.

Usage (from the repo root):
    python scripts/corpus_registry.py            # writes scripts/data/corpus-registry.json
    python scripts/corpus_registry.py --print    # also prints a one-line summary per source
"""
from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CORPUS = ROOT / "corpus"
OUT = ROOT / "scripts" / "data" / "corpus-registry.json"

UNIT = re.compile(r"^Unit (\d+) of (\d+)$")
URL_MODULE = re.compile(r"/training/modules/([a-z0-9-]+)/(\d+)[a-z0-9-]*", re.I)
EPISODE = re.compile(r"AI-103 - Episode (\d+)")
SPEAKER = re.compile(r"^([A-Z][A-Z .'\-]{2,40}):")
END_MARKERS = ("Next unit:", "Previous Next", "Need help? See our troubleshooting guide", "Feedback")
GENERIC_TITLES = {"introduction", "summary", "knowledge check", "module assessment"}


def raw_files() -> list[Path]:
    return sorted(CORPUS.glob("*.md"), key=lambda p: int(p.name.split("-", 1)[0]))


def title_from_name(name: str) -> str:
    stem = name[:-3] if name.endswith(".md") else name
    stem = stem.split("-", 1)[1]
    return stem.replace(" - Training - Microsoft Learn", "").strip()


def content_range(lines: list[str], kind: str) -> tuple[int, int]:
    """1-based inclusive line range of the teaching content inside a capture."""
    n = len(lines)
    if kind != "learn-unit":
        return (3 if n >= 3 else 1), n
    start = None  # 0-based index of the first content line
    ui = next((i for i, l in enumerate(lines) if UNIT.match(l.strip())), None)
    if ui is not None:
        for i in range(ui, n):
            if lines[i].strip() == "Ask Learn Ask Learn":
                start = i + 2  # skip the repeated unit title that follows
                break
    if start is None:
        for i, line in enumerate(lines):
            if line.strip() == "Achievements":
                start = i + 2
                break
    if start is None:
        start = 2
    end = n  # 1-based last content line
    for i in range(start, n):
        if lines[i].strip().startswith(END_MARKERS):
            end = i  # the marker is line i+1, so content ends at line i
            break
    first = min(start + 1, n)
    return first, max(end, first)


def main() -> int:
    records = []
    module_titles: dict[str, str] = {}
    paths_by_module: dict[str, str] = {}
    parsed = []
    for p in raw_files():
        text = p.read_text(encoding="utf-8", errors="replace")
        lines = text.splitlines()
        url = lines[0][len("> Source:"):].strip() if lines and lines[0].startswith("> Source:") else None
        sid = int(p.name.split("-", 1)[0])
        parsed.append((sid, p, text, lines, url))
        ui = next((i for i, l in enumerate(lines) if UNIT.match(l.strip())), None)
        m = URL_MODULE.search(url or "")
        if ui is not None and m:
            module_titles[m.group(1)] = lines[ui + 1].strip()
            # breadcrumb: "... Browse / <learning path> / <module> / Read in English ..."
            for j in range(ui, max(ui - 12, 0), -1):
                if lines[j].startswith("Read in English"):
                    if j >= 2 and lines[j - 1].strip() == module_titles[m.group(1)]:
                        crumb = lines[j - 2].strip()
                        if crumb and crumb not in {"Browse", "Training", "Learn"}:
                            paths_by_module[m.group(1)] = crumb
                    break

    for sid, p, text, lines, url in parsed:
        name = p.name
        ep = EPISODE.search(name)
        if sid == 1:
            kind = "study-cram"
        elif url and "youtube.com" in url and ep:
            kind = "episode"
        elif url and "youtube.com" in url:
            kind = "course-preview"
        elif url and "/credentials/" in url:
            kind = "study-guide"
        elif url and "/training/courses/" in url:
            kind = "course-page"
        else:
            kind = "learn-unit"
        m = URL_MODULE.search(url or "")
        slug = m.group(1) if m else None
        unit_index = int(m.group(2)) if m else None
        ui = next((i for i, l in enumerate(lines) if UNIT.match(l.strip())), None)
        unit_total = int(UNIT.match(lines[ui].strip()).group(2)) if ui is not None else None
        title = title_from_name(name)
        module = module_titles.get(slug) if slug else None
        if kind == "episode":
            module = re.sub(r"\s*-\s*AI-103 - Episode \d+$", "", title)
        display = title
        if kind == "learn-unit" and title.lower() in GENERIC_TITLES and module:
            display = f"{title} — {module}"
        start, end = content_range(lines, kind)
        body = "\n".join(lines[start - 1:end])
        speakers = []
        if kind in {"episode", "course-preview"}:
            c = Counter(SPEAKER.match(l).group(1).strip() for l in lines if SPEAKER.match(l))
            speakers = [s for s, _ in c.most_common(6)]
        records.append({
            "id": sid,
            "sid": f"SRC-{sid}",
            "raw_file": name,
            "title": title,
            "display_title": display,
            "kind": kind,
            "url": url,
            "learning_path": paths_by_module.get(slug) if slug else None,
            "module": module,
            "module_slug": slug,
            "unit_index": unit_index,
            "unit_total": unit_total,
            "episode": int(ep.group(1)) if ep else None,
            "speakers": speakers,
            "lines": len(lines),
            "words": len(text.split()),
            "content_lines": [start, end],
            "content_words": len(body.split()),
        })

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({"generated_by": "scripts/corpus_registry.py",
                               "count": len(records), "sources": records},
                              indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    kinds = Counter(r["kind"] for r in records)
    print(f"registry: {len(records)} sources -> {OUT.relative_to(ROOT).as_posix()} "
          + " ".join(f"{k}={v}" for k, v in sorted(kinds.items())))
    missing_module = [r["sid"] for r in records if r["kind"] == "learn-unit" and not r["module"]]
    if missing_module:
        print("learn units without a module title: " + ", ".join(missing_module))
    if "--print" in sys.argv:
        for r in records:
            print(f"{r['sid']:>8} {r['kind']:<14} L{r['content_lines'][0]}-{r['content_lines'][1]:<5} "
                  f"{r['content_words']:>5}w | {r['display_title'][:70]} | {r['module'] or ''}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

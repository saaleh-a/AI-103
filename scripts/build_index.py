#!/usr/bin/env python3
"""Regenerate wiki/index.md from page frontmatter (schema.md §6, §9).

The catalogue is built from each page's `title`, `summary`, `area`, `type` and tags, and the
source list follows the corpus registry (learning path → module → unit), so a page that
exists can never be missing from the index. Hand-written context lives in the synthesis
pages, not here.

Usage (from the repo root):  python scripts/build_index.py
"""
from __future__ import annotations

import datetime as _dt
import json
from collections import defaultdict
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
WIKI = ROOT / "wiki"
INDEX = WIKI / "index.md"
REGISTRY = ROOT / "scripts" / "data" / "corpus-registry.json"
NAV = {"index", "log", "lint-report"}

AREA_ORDER = [
    ("exam", "The exam and how to study it"),
    ("platform", "Microsoft Foundry platform, deployment, security and operations"),
    ("models", "Models: selection, prompting, tuning and evaluation"),
    ("responsible-ai", "Responsible AI and safety"),
    ("generative-apps", "Generative AI applications"),
    ("agents", "Agents and tools"),
    ("orchestration", "Workflows, multi-agent orchestration and agent interoperability"),
    ("retrieval", "Retrieval, search and knowledge"),
    ("vision", "Computer vision and media generation"),
    ("language", "Text analysis and translation"),
    ("speech", "Speech and voice"),
    ("extraction", "Information extraction"),
    ("corpus", "About this corpus"),
]
SYNTHESIS_FIRST = ["overview", "master-synthesis", "learning-path", "decision-boundaries",
                   "key-tensions", "naming-and-currency", "corpus-gaps", "open-questions", "glossary"]
ENTITY_KINDS = [("product", "Products and platforms"), ("service", "Services"),
                ("feature", "Platform features"), ("sdk", "SDKs and frameworks"), ("api", "APIs"),
                ("protocol", "Protocols"), ("tool", "Tools and servers"), ("model", "Models"),
                ("work", "Courses, exams and works"), ("person", "People"),
                ("organisation", "Organisations")]
KIND_LABEL = {"learn-unit": "", "episode": "episode", "study-cram": "study cram",
              "study-guide": "study guide", "course-page": "course page", "course-preview": "course preview"}


def load(path: Path):
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return {}
    end = text.find("\n---", 3)
    try:
        return yaml.safe_load(text[3:end]) or {}
    except yaml.YAMLError:
        return {}


def entry(stem: str, fm: dict, label: str | None = None) -> str:
    title = label or fm.get("title") or stem
    summary = (fm.get("summary") or "").strip()
    status = fm.get("status")
    flag = f" `{status}`" if status in {"disputed", "stale", "stub", "seed", "superseded"} else ""
    return f"- [[{stem}|{title}]]{flag} — {summary}"


def main() -> None:
    pages = {}
    for path in sorted(WIKI.rglob("*.md")):
        if path.stem in NAV:
            continue
        pages[path.stem] = load(path)
    registry = {f"SRC-{r['id']}": r for r in json.loads(REGISTRY.read_text(encoding="utf-8"))["sources"]}

    by_type = defaultdict(list)
    for stem, fm in pages.items():
        by_type[fm.get("type", "other")].append(stem)

    today = _dt.date.today().isoformat()
    n_src, n_con, n_ent, n_syn = (len(by_type[t]) for t in ("source", "concept", "entity", "synthesis"))
    out = [
        "---",
        "title: Index — AI-103 wiki",
        "type: index",
        "status: active",
        "confidence: high",
        "created: 2026-09-24",
        f"updated: {today}",
        f"summary: Catalogue of all {len(pages)} content pages — {n_src} sources, {n_con} concepts, {n_ent} entities, {n_syn} synthesis pages.",
        "area: corpus",
        "source_ids: []",
        "tags: [index]",
        "aliases: [index, home]",
        "---",
        "",
        "# AI-103 wiki — index",
        "",
        f"A compiled knowledge layer over the {len(registry)} raw sources in `corpus/` (SRC-1 … SRC-{len(registry)}) for",
        "**AI-103: Developing AI Apps and Agents on Azure** — Microsoft Foundry, models, generative AI",
        "apps, agents and orchestration, retrieval, vision, language, speech, information extraction",
        "and responsible AI. **Start with the [[overview]].** Rules are in `schema.md`; the improvement",
        "loop is in `program.md`; history is in [[log]]; health is in [[lint-report]]. Navigation:",
        "[[corpus-map]] (the course structure, source by source) and [[objective-map]] (the 64 official",
        "exam objectives → wiki pages → sources).",
        "",
        f"**{len(pages)} content pages** · {n_src} sources · {n_con} concepts · {n_ent} entities · "
        f"{n_syn} synthesis · regenerated {today} by `scripts/build_index.py`.",
        "",
        "Status flags: `disputed` holds an unresolved conflict · `stale` time-sensitive · `stub`",
        "near-empty capture · `seed` thin but correct. Unflagged pages are `active`.",
        "",
        "Graphs: raw sources — `graphify-out/graph.html`; this wiki — `graphify-out-wiki/graph.html`.",
        "",
    ]

    syn = sorted(by_type["synthesis"], key=lambda s: (SYNTHESIS_FIRST.index(s) if s in SYNTHESIS_FIRST else 99, s))
    out += ["## Start here — synthesis", ""]
    out += [entry(s, pages[s]) for s in syn] or ["_None yet._"]
    out.append("")

    out += ["## Concepts", ""]
    concept_areas = defaultdict(list)
    for s in by_type["concept"]:
        concept_areas[pages[s].get("area", "corpus")].append(s)
    known = {a for a, _ in AREA_ORDER}
    for area, heading in AREA_ORDER + [(a, a) for a in sorted(set(concept_areas) - known)]:
        members = sorted(concept_areas.get(area, []), key=lambda s: (pages[s].get("title") or s).lower())
        if members:
            out += [f"### {heading}", ""] + [entry(s, pages[s]) for s in members] + [""]

    out += ["## Entities", ""]
    kinds = defaultdict(list)
    for s in by_type["entity"]:
        tags = set(pages[s].get("tags") or [])
        kind = next((k for k, _ in ENTITY_KINDS if k in tags), "other")
        kinds[kind].append(s)
    for kind, heading in ENTITY_KINDS + [("other", "Other")]:
        members = sorted(kinds.get(kind, []), key=lambda s: (pages[s].get("title") or s).lower())
        if members:
            out += [f"### {heading}", ""] + [entry(s, pages[s]) for s in members] + [""]

    out += ["## Sources", "",
            "One page per raw file, grouped by the course structure. The SRC-ID is the raw filename's",
            "numeric prefix (the same numbers the app's lessons use as `sourceIds`).", ""]
    src_by_id = {}
    for s in by_type["source"]:
        for sid in pages[s].get("source_ids") or []:
            src_by_id[sid] = s
    groups: dict[tuple, list] = defaultdict(list)
    for sid, r in registry.items():
        if sid not in src_by_id:
            continue
        if r["kind"] in {"study-cram", "study-guide", "course-page", "course-preview"}:
            key = (0, "Exam, course and study aids", "")
        else:
            key = (1, r.get("learning_path") or "Other modules", r.get("module") or "")
        groups[key].append(r)
    current_path = None
    for key in sorted(groups, key=lambda k: (k[0], k[1] == "Other modules", k[1], k[2])):
        _, lp, module = key
        if lp != current_path:
            out += [f"### {lp}", ""]
            current_path = lp
        if module:
            out += [f"**{module}**", ""]
        members = sorted(groups[key], key=lambda r: (r["kind"] != "learn-unit", r.get("unit_index") or 0, r["id"]))
        for r in members:
            stem = src_by_id[r["sid"]]
            kind = KIND_LABEL.get(r["kind"], r["kind"])
            unit = f"unit {r['unit_index']}" if r.get("unit_index") else kind
            label = f"{r['sid']} · {unit} · {pages[stem].get('title') or stem}"
            out.append(entry(stem, pages[stem], label))
        out.append("")

    others = sorted(s for t, ss in by_type.items() if t not in {"source", "concept", "entity", "synthesis"} for s in ss)
    if others:
        out += ["## Other pages", ""] + [entry(s, pages[s]) for s in others] + [""]

    INDEX.write_text("\n".join(out).rstrip() + "\n", encoding="utf-8")
    print(f"index.md: {len(pages)} pages ({n_src} sources, {n_con} concepts, {n_ent} entities, {n_syn} synthesis)")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Build graphify-out-wiki/: a knowledge graph of the wiki itself, from its wikilinks.

A wikilink is an explicit, authored relationship, so every edge is EXTRACTED with
confidence 1.0 and no LLM is involved. The edge relation comes from the section the link
sits in: links under Sources / Relation to other sources become `cites`, links under
Tensions or Decision boundaries become `conceptually_related_to`, everything else
`references`. Navigation pages (index, log, lint report, corpus map, objective map,
glossary, learning path, overview) are excluded because they link to everything by
construction and would bury the real hubs.

Community labels: edit graphify-out-wiki/.graphify_labels.json ({"0": "Label", ...}) and
re-run; without it each community is named after its best-connected page.

Usage (from the repo root):  python scripts/build_wiki_graph.py
"""
from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

import yaml
from graphify.analyze import god_nodes, suggest_questions, surprising_connections
from graphify.build import build_from_json
from graphify.cluster import cluster, score_all
from graphify.export import to_html, to_json
from graphify.report import generate

ROOT = Path(__file__).resolve().parent.parent
WIKI = ROOT / "wiki"
OUT = ROOT / "graphify-out-wiki"
EXCLUDE = {"index", "log", "lint-report", "corpus-map", "objective-map", "glossary",
           "learning-path", "overview"}
FENCE = re.compile(r"```.*?```", re.S)
INLINE_CODE = re.compile(r"`[^`\n]*`")
WIKILINK = re.compile(r"\[\[([^\[\]|#^]+)(?:[#^][^\[\]|]*)?(?:\|[^\[\]]*)?\]\]")
HEADING = re.compile(r"^(#{1,6})\s+(.*)$")
FILE_TYPE = {"source": "document", "concept": "concept", "entity": "concept", "synthesis": "document"}


def node_id(stem: str) -> str:
    return "wiki_" + re.sub(r"[^a-z0-9]+", "_", stem.lower()).strip("_")


def relation_for(section: str) -> str:
    s = section.lower()
    if "source" in s or "relation to other" in s:
        return "cites"
    if "tension" in s or "disput" in s or "contradict" in s or "decision boundar" in s:
        return "conceptually_related_to"
    return "references"


def parse(path: Path):
    text = path.read_text(encoding="utf-8")
    fm, body = {}, text
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            try:
                fm = yaml.safe_load(text[3:end]) or {}
            except yaml.YAMLError:
                fm = {}
            body = text[end + 4:]
    return fm, INLINE_CODE.sub("", FENCE.sub("", body))


def main() -> None:
    pages = {}
    for path in sorted(WIKI.rglob("*.md")):
        if path.stem in EXCLUDE:
            continue
        fm, body = parse(path)
        pages[path.stem] = (path, fm, body)
    lookup = {s.lower(): s for s in pages}

    nodes, weights, relations, first_src = [], defaultdict(float), {}, {}
    words = 0
    for stem, (path, fm, body) in pages.items():
        words += len(body.split())
        nodes.append({
            "id": node_id(stem),
            "label": fm.get("title") or stem,
            "file_type": FILE_TYPE.get(fm.get("type"), "document"),
            "source_file": path.relative_to(ROOT).as_posix(),
            "source_location": None,
            "page_type": fm.get("type"),
            "area": fm.get("area"),
            "status": fm.get("status"),
        })
        section = ""
        for line in body.splitlines():
            h = HEADING.match(line)
            if h:
                section = h.group(2)
                continue
            for m in WIKILINK.finditer(line):
                tgt = lookup.get(m.group(1).strip().split("/")[-1].lower())
                if not tgt or tgt == stem:
                    continue
                key = tuple(sorted((stem, tgt)))
                weights[key] += 1.0
                rel = relation_for(section)
                if relations.get(key) in (None, "references"):
                    relations[key] = rel
                first_src.setdefault(key, stem)

    edges = []
    for key, w in weights.items():
        a, b = key
        src = first_src.get(key, a)
        tgt = b if src == a else a
        edges.append({
            "source": node_id(src), "target": node_id(tgt), "relation": relations[key],
            "confidence": "EXTRACTED", "confidence_score": 1.0,
            "source_file": pages[src][0].relative_to(ROOT).as_posix(),
            "source_location": None, "weight": w,
        })

    extraction = {"nodes": nodes, "edges": edges, "hyperedges": [], "input_tokens": 0, "output_tokens": 0}
    G = build_from_json(extraction, root=str(ROOT), directed=False)
    if G.number_of_nodes() == 0:
        raise SystemExit("ERROR: wiki graph is empty")
    communities = cluster(G)
    cohesion = score_all(G, communities)
    gods = god_nodes(G)
    surprises = surprising_connections(G, communities)

    OUT.mkdir(exist_ok=True)
    labels_path = OUT / ".graphify_labels.json"
    labels = {}
    if labels_path.exists():
        labels = {int(k): v for k, v in json.loads(labels_path.read_text(encoding="utf-8")).items()}
    for cid, members in communities.items():
        if cid not in labels:
            hub = max(members, key=lambda n: G.degree(n))
            labels[cid] = f"{G.nodes[hub].get('label', hub)} cluster"
    questions = suggest_questions(G, communities, labels)
    detection = {"total_files": len(pages), "total_words": words}
    report = generate(G, communities, cohesion, labels, gods, surprises, detection,
                      {"input": 0, "output": 0}, "wiki/ (link graph)", suggested_questions=questions)
    report = report.replace(
        "- Token cost: 0 input · 0 output",
        "- Token cost: 0 input · 0 output (deterministic: built from wikilinks, no LLM)")
    (OUT / "GRAPH_REPORT.md").write_text(report, encoding="utf-8")
    to_json(G, communities, str(OUT / "graph.json"), force=True, community_labels=labels)
    to_html(G, communities, str(OUT / "graph.html"), community_labels=labels)
    (OUT / ".graphify_analysis.json").write_text(json.dumps({
        "communities": {str(k): v for k, v in communities.items()},
        "cohesion": {str(k): v for k, v in cohesion.items()},
        "gods": gods, "surprises": surprises, "questions": questions,
    }, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"wiki graph: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges, "
          f"{len(communities)} communities -> {OUT.relative_to(ROOT).as_posix()}/")


if __name__ == "__main__":
    main()

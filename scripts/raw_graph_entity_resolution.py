#!/usr/bin/env python3
"""Apply cross-document entity resolution to a graphify extraction (documents-only corpus).

Why: graphify's semantic extraction mints file-scoped node IDs (`{path-stem}_{entity}`), and
its built-in dedup only unifies nodes whose labels pass its similarity gates. In a corpus of
265 short documents that leaves the same idea — "Microsoft Foundry", "Model Context
Protocol", "Handoff orchestration" — as separate islands, one per document, so communities
collapse to "one module each" and the graph cannot show how the curriculum connects.

What: a resolution pass groups nodes that denote the same product, service, concept or
artifact (`graphify-out/entity-resolution.json`). Groups come from two stages, both recorded
with their basis: (1) exact normalised-label matches, and (2) an LLM review of the remaining
near-duplicate labels (renamed products, plural/singular, acronym vs expansion), under a
strict same-referent rule — a product and a feature of it are linked, never merged. This
script merges each group into its best-connected member, relabels it with the canonical
name, rewires every edge and hyperedge, drops self-loops the merge creates, and records the
merged members on the survivor (`merged_from`) so provenance survives.

Optional `links` add INFERRED edges between distinct nodes that are closely related across
documents; each needs a graphify rubric score (0.95 / 0.85 / 0.75 / 0.65 / 0.55).

Run between graphify's merge step (Part C) and graph build (Step 4):
    python scripts/raw_graph_entity_resolution.py graphify-out/.graphify_extract.json
"""
from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GROUPS = ROOT / "graphify-out" / "entity-resolution.json"


def rel(path: str | None) -> str | None:
    """Repo-relative POSIX path, so merged_from provenance is portable across machines."""
    if not path:
        return path
    try:
        return Path(path).resolve().relative_to(ROOT).as_posix()
    except (ValueError, OSError):
        return path.replace("\\", "/")


def main(path: str) -> None:
    ext_path = Path(path)
    ext = json.loads(ext_path.read_text(encoding="utf-8"))
    spec = json.loads(GROUPS.read_text(encoding="utf-8"))
    groups = spec["groups"]
    links = spec.get("links", [])
    nodes = {n["id"]: n for n in ext["nodes"]}
    degree = Counter()
    for e in ext["edges"]:
        degree[e["source"]] += 1
        degree[e["target"]] += 1

    remap: dict[str, str] = {}
    applied = 0
    for g in groups:
        members = [m for m in g["members"] if m in nodes and m not in remap]
        if len(members) < 2:
            continue
        winner = max(members, key=lambda m: (degree[m], -len(m), m))
        w = nodes[winner]
        w["merged_from"] = [
            {"id": m, "label": nodes[m]["label"], "source_file": rel(nodes[m].get("source_file"))}
            for m in members
        ]
        w["label"] = g["canonical"]
        if w.get("file_type") not in {"concept", "rationale"}:
            w["file_type"] = "concept"
        w["resolution_basis"] = g.get("basis")
        for m in members:
            if m != winner:
                remap[m] = winner
        applied += 1

    ext["nodes"] = [n for n in ext["nodes"] if n["id"] not in remap]
    kept, loops = [], 0
    for e in ext["edges"]:
        e["source"] = remap.get(e["source"], e["source"])
        e["target"] = remap.get(e["target"], e["target"])
        if e["source"] == e["target"]:
            loops += 1
            continue
        kept.append(e)
    ext["edges"] = kept
    for h in ext.get("hyperedges", []):
        seen, members = set(), []
        for m in h.get("nodes", []):
            m = remap.get(m, m)
            if m not in seen:
                seen.add(m)
                members.append(m)
        h["nodes"] = members
    alive = {n["id"]: n for n in ext["nodes"]}
    added = 0
    for ln in links:
        s, t = remap.get(ln["source"], ln["source"]), remap.get(ln["target"], ln["target"])
        if s in alive and t in alive and s != t:
            score = ln.get("confidence_score", 0.95)
            if score not in (0.95, 0.85, 0.75, 0.65, 0.55):
                raise ValueError(f"link {s} -> {t}: confidence_score {score} not in the graphify rubric")
            ext["edges"].append({
                "source": s, "target": t, "relation": ln.get("relation", "references"),
                "confidence": "INFERRED", "confidence_score": score,
                "source_file": alive[s].get("source_file"), "source_location": None,
                "weight": 1.0, "resolution_basis": ln.get("basis"),
            })
            added += 1
    ext_path.write_text(json.dumps(ext, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"entity resolution: {applied} groups applied, {len(remap)} nodes merged away, "
          f"{loops} self-loops dropped, {added} cross-document links added -> "
          f"{len(ext['nodes'])} nodes, {len(ext['edges'])} edges")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "graphify-out/.graphify_extract.json")

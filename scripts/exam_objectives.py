#!/usr/bin/env python3
"""Build scripts/data/exam-objectives.json: the 64 official AI-103 objectives with raw locators.

Objective IDs (P01 … I08) follow the numbering the app already uses in
app/src/data/objectives.ts, so the wiki, the app and the tutor share one vocabulary. The
official wording is re-checked against the raw study guide (SRC-191): every objective must
occur verbatim on one line of that file, and the line number becomes its citation.

Usage (from the repo root):  python scripts/exam_objectives.py
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP_OBJECTIVES = ROOT / "app" / "src" / "data" / "objectives.ts"
OUT = ROOT / "scripts" / "data" / "exam-objectives.json"
STUDY_GUIDE_ID = 191

ENTRY = re.compile(r"\{\s*id:\s*'([PGVTI]\d{2})',\s*domain:\s*([A-Z]+),\s*skill:\s*'([^']*)',"
                   r"\s*objective:\s*'([^']*)'")
DOMAINS = {
    "PLAN": ("P", "Plan and manage an Azure AI solution", "25–30%"),
    "GEN": ("G", "Implement generative AI and agentic solutions", "30–35%"),
    "VISION": ("V", "Implement computer vision solutions", "10–15%"),
    "TEXT": ("T", "Implement text analysis solutions", "10–15%"),
    "EXTRACT": ("I", "Implement information extraction solutions", "10–15%"),
}


def main() -> int:
    raw = next((ROOT / "corpus").glob(f"{STUDY_GUIDE_ID}-*.md"))
    lines = raw.read_text(encoding="utf-8").splitlines()
    ts = APP_OBJECTIVES.read_text(encoding="utf-8")
    records, problems = [], []
    for oid, dom, skill, objective in ENTRY.findall(ts):
        prefix, domain, weight = DOMAINS[dom]
        hits = [i + 1 for i, l in enumerate(lines) if l.strip() == objective]
        skill_hits = [i + 1 for i, l in enumerate(lines) if l.strip() == skill]
        if len(hits) != 1:
            problems.append(f"{oid}: objective found {len(hits)} times verbatim in SRC-{STUDY_GUIDE_ID}")
        records.append({
            "id": oid, "domain": domain, "domain_prefix": prefix, "weight": weight,
            "skill": skill, "objective": objective,
            "source_id": f"SRC-{STUDY_GUIDE_ID}", "line": hits[0] if hits else None,
            "skill_line": skill_hits[0] if skill_hits else None,
        })
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({
        "generated_by": "scripts/exam_objectives.py",
        "study_guide": raw.name,
        "note": "IDs mirror app/src/data/objectives.ts; wording and line numbers verified against the raw study guide.",
        "count": len(records), "objectives": records,
    }, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"exam objectives: {len(records)} -> {OUT.relative_to(ROOT).as_posix()}")
    for p in problems:
        print("PROBLEM", p)
    return 1 if problems or len(records) != 64 else 0


if __name__ == "__main__":
    sys.exit(main())

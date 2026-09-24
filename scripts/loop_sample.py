#!/usr/bin/env python3
"""Draw the judgement verifier's page sample for a loop cycle (program.md, loop/rubric.md).

Stratified and reproducible: the cycle number seeds the draw, so a reviewer and a re-run see
the same pages. Pages changed since a git revision (default: the last commit) are drawn first
within each stratum, so each cycle's review concentrates on what the generator just touched.

Usage (from the repo root):
    python scripts/loop_sample.py --cycle 3                  # 20 pages: 8 source, 6 concept, 3 entity, 3 synthesis
    python scripts/loop_sample.py --cycle 3 --since HEAD~1   # prefer pages changed since HEAD~1
"""
from __future__ import annotations

import random
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STRATA = [("sources", 8), ("concepts", 6), ("entities", 3), ("synthesis", 3)]


def changed(since: str) -> set[str]:
    out = subprocess.run(["git", "diff", "--name-only", since, "--", "wiki"], cwd=ROOT,
                         capture_output=True, text=True).stdout
    live = subprocess.run(["git", "diff", "--name-only", "--", "wiki"], cwd=ROOT,
                          capture_output=True, text=True).stdout
    return {l.strip() for l in (out + live).splitlines() if l.strip().endswith(".md")}


def main() -> int:
    args = sys.argv[1:]
    cycle = int(args[args.index("--cycle") + 1]) if "--cycle" in args else 0
    since = args[args.index("--since") + 1] if "--since" in args else "HEAD"
    rng = random.Random(1000 + cycle)
    touched = changed(since)
    picks = []
    for folder, n in STRATA:
        pages = sorted(p.relative_to(ROOT).as_posix() for p in (ROOT / "wiki" / folder).glob("*.md"))
        first = [p for p in pages if p in touched]
        rest = [p for p in pages if p not in touched]
        rng.shuffle(first)
        rng.shuffle(rest)
        picks += (first + rest)[:n]
    print("\n".join(picks))
    return 0


if __name__ == "__main__":
    sys.exit(main())

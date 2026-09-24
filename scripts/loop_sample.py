#!/usr/bin/env python3
"""Draw the judgement verifier's pages for a loop cycle (program.md, loop/rubric.md).

Two modes:

- **Fixed panel** (`--panel`): the pages listed in loop/panel.txt. The ratchet compares judgement
  results only on this panel — the same pages every cycle, like a fixed validation set — so a
  change in the failure rate reflects a change in the pages, not in which pages were drawn.
- **Rotating sample** (`--cycle N`): stratified and reproducible (the cycle number seeds the draw);
  pages changed since a git revision (default: the last commit) are drawn first within each
  stratum. Use it to look for failure classes the panel does not contain.

Usage (from the repo root):
    python scripts/loop_sample.py --panel                   # the fixed panel (20 pages)
    python scripts/loop_sample.py --cycle 3                  # rotating: 8 source, 6 concept, 3 entity, 3 synthesis
    python scripts/loop_sample.py --cycle 3 --since HEAD~1   # prefer pages changed since HEAD~1
    python scripts/loop_sample.py --make-panel 7             # orchestrator only: draw a new panel with seed 7
"""
from __future__ import annotations

import random
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PANEL = ROOT / "loop" / "panel.txt"
STRATA = [("sources", 8), ("concepts", 6), ("entities", 3), ("synthesis", 3)]


def changed(since: str) -> set[str]:
    out = subprocess.run(["git", "diff", "--name-only", since, "--", "wiki"], cwd=ROOT,
                         capture_output=True, text=True).stdout
    live = subprocess.run(["git", "diff", "--name-only", "--", "wiki"], cwd=ROOT,
                          capture_output=True, text=True).stdout
    return {l.strip() for l in (out + live).splitlines() if l.strip().endswith(".md")}


def draw(seed: int, touched: set[str]) -> list[str]:
    rng = random.Random(seed)
    picks = []
    for folder, n in STRATA:
        pages = sorted(p.relative_to(ROOT).as_posix() for p in (ROOT / "wiki" / folder).glob("*.md"))
        first = [p for p in pages if p in touched]
        rest = [p for p in pages if p not in touched]
        rng.shuffle(first)
        rng.shuffle(rest)
        picks += (first + rest)[:n]
    return picks


def main() -> int:
    args = sys.argv[1:]
    if "--panel" in args:
        print(PANEL.read_text(encoding="utf-8").strip())
        return 0
    if "--make-panel" in args:
        seed = int(args[args.index("--make-panel") + 1])
        pages = draw(5000 + seed, set())
        PANEL.write_text("\n".join(pages) + "\n", encoding="utf-8")
        print(f"panel: {len(pages)} pages -> {PANEL.relative_to(ROOT).as_posix()}")
        return 0
    cycle = int(args[args.index("--cycle") + 1]) if "--cycle" in args else 0
    since = args[args.index("--since") + 1] if "--since" in args else "HEAD"
    print("\n".join(draw(1000 + cycle, changed(since))))
    return 0


if __name__ == "__main__":
    sys.exit(main())

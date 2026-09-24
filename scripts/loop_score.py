#!/usr/bin/env python3
"""Ratchet scorer for the wiki improvement loop (program.md) — part of the verifier.

Runs scripts/lint_wiki.py, reads the metrics it embeds in wiki/lint-report.md, and compares
them with the best score recorded in loop/scores.jsonl. The score is lexicographic, lower is
better:

    (errors, locator problems, raw sources without a source page, warnings,
     unlabelled claim lines)

Verdicts: IMPROVED, SAME or REGRESSED. A cycle whose verdict is REGRESSED must be reverted
(program.md: the ratchet — the floor only rises). The verifier files are hash-locked: if any
of them changed since `--lock`, the score is refused (exit 2), because a generator that can
edit its verifier will optimise the test instead of the wiki.

Usage (from the repo root):
    python scripts/loop_score.py                         # score now, compare with the best
    python scripts/loop_score.py --record "cycle 3: …"   # also append the score to loop/scores.jsonl
    python scripts/loop_score.py --judgement 20:3 --panel --record "…"   # add the fixed-panel judgement
                                                         #   (pages judged : pages failing the rubric)
    python scripts/loop_score.py --judgement 20:5 --record "…"   # a rotating-sample judgement
                                                         #   (recorded for diagnosis; never ratchets)
    python scripts/loop_score.py --lock                  # orchestrator only: re-lock the verifier
"""
from __future__ import annotations

import datetime as _dt
import hashlib
import json
import re
import subprocess
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")
ROOT = Path(__file__).resolve().parent.parent
REPORT = ROOT / "wiki" / "lint-report.md"
SCORES = ROOT / "loop" / "scores.jsonl"
LOCK = ROOT / "loop" / "verifier.lock"
VERIFIER = ["scripts/lint_wiki.py", "scripts/check_citations.py", "scripts/loop_score.py",
            "scripts/loop_sample.py", "scripts/data/corpus-registry.json",
            "scripts/data/exam-objectives.json", "loop/rubric.md", "loop/reviewer.md", "loop/panel.txt"]
MECHANICAL = ["scripts/lint_wiki.py", "scripts/data/corpus-registry.json", "scripts/data/exam-objectives.json"]
# Entries recorded before scores carried a mechanical version were all made under lint v1–v2.
LEGACY_MECH = "legacy"


def digest(rel: str) -> str:
    return hashlib.sha256((ROOT / rel).read_bytes()).hexdigest()


def score_of(m: dict) -> list[int]:
    return [m["errors"], m["locator_problems"], m["raw_sources"] - m["raw_covered"], m["warnings"],
            m["unlabelled_claim_lines"]]


def main() -> int:
    args = sys.argv[1:]
    if "--lock" in args:
        LOCK.write_text(json.dumps({f: digest(f) for f in VERIFIER}, indent=2) + "\n", encoding="utf-8")
        print(f"verifier locked: {len(VERIFIER)} files -> {LOCK.relative_to(ROOT).as_posix()}")
        return 0
    if LOCK.exists():
        locked = json.loads(LOCK.read_text(encoding="utf-8"))
        changed = [f for f, h in locked.items() if not (ROOT / f).exists() or digest(f) != h]
        if changed:
            print("VERIFIER CHANGED since lock: " + ", ".join(changed))
            print("Refusing to score. Revert the change, or have the human re-lock deliberately.")
            return 2
    proc = subprocess.run([sys.executable, str(ROOT / "scripts" / "lint_wiki.py")], cwd=ROOT,
                          capture_output=True, text=True, encoding="utf-8")
    summary = [l for l in proc.stdout.splitlines() if not l.startswith("ERROR")][:4]
    m = re.search(r"<!-- metrics: (\{.*\}) -->", REPORT.read_text(encoding="utf-8"))
    if not m:
        print(proc.stdout[-2000:], proc.stderr[-2000:])
        print("no metrics in lint report")
        return 3
    metrics = json.loads(m.group(1))
    score = score_of(metrics)
    # The mechanical score is comparable only under the same lint rules and registries: a new rule
    # is a new measuring instrument, so its first score starts a new mechanical baseline.
    mech = hashlib.sha256("".join(digest(f) for f in MECHANICAL).encode()).hexdigest()
    history = []
    if SCORES.exists():
        history = [json.loads(l) for l in SCORES.read_text(encoding="utf-8").splitlines() if l.strip()]
    comparable = [h for h in history if h.get("mechanical_sha256", LEGACY_MECH) == mech]
    best = min((h["score"] for h in comparable), default=None)
    verdict = "BASELINE" if best is None else ("IMPROVED" if score < best else "SAME" if score == best else "REGRESSED")
    judgement = None
    rubric = hashlib.sha256((digest("loop/rubric.md") + (digest("loop/reviewer.md")
                             if (ROOT / "loop" / "reviewer.md").exists() else "")).encode()).hexdigest()
    panel = digest("loop/panel.txt") if (ROOT / "loop" / "panel.txt").exists() else None
    if "--judgement" in args:
        sampled, failing = (int(x) for x in args[args.index("--judgement") + 1].split(":"))
        on_panel = "--panel" in args
        judgement = {"sampled": sampled, "failing": failing, "rubric_sha256": rubric,
                     "sample": "panel" if on_panel else "rotating"}
        if on_panel:
            judgement["panel_sha256"] = panel
            # The ratchet compares judgement rates only between runs of the same fixed panel under
            # the same rubric — the same pages judged by the same standard. Rotating samples are
            # recorded for diagnosis but never move the ratchet.
            prev = [h["judgement"] for h in history if h.get("judgement")
                    and h["judgement"].get("sample") == "panel"
                    and h["judgement"].get("rubric_sha256") == rubric
                    and h["judgement"].get("panel_sha256") == panel]
            if prev:
                last = prev[-1]
                if failing / max(sampled, 1) > last["failing"] / max(last["sampled"], 1):
                    verdict = "REGRESSED"
            else:
                judgement["baseline"] = True
    print("\n".join(summary))
    print(f"score={score} best={best} verdict={verdict}" + (f" judgement={judgement}" if judgement else ""))
    if "--record" in args:
        note = args[args.index("--record") + 1] if len(args) > args.index("--record") + 1 else ""
        entry = {"at": _dt.datetime.now().isoformat(timespec="seconds"), "score": score,
                 "verdict": verdict, "metrics": metrics, "mechanical_sha256": mech, "note": note}
        if judgement:
            entry["judgement"] = judgement
        SCORES.parent.mkdir(exist_ok=True)
        with SCORES.open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(entry, ensure_ascii=False) + "\n")
        print(f"recorded -> {SCORES.relative_to(ROOT).as_posix()}")
    return 1 if verdict == "REGRESSED" else 0


if __name__ == "__main__":
    sys.exit(main())

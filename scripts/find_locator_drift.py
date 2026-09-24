#!/usr/bin/env python3
"""Find likely locator drift: citations whose lines do not carry the claim, while nearby lines do.

The lint proves that every `SRC-N La–b` range *exists*; it cannot tell whether the range carries the
claim. The judgement verifier found systematic off-by-a-few drift (e.g. a source page citing SRC-91
L232–235 for File Search, which sits at L236–238), copied from source pages into concept pages. This
heuristic finds candidates at scale:

- For each claim segment (the text of a line before a citation parenthesis) and each `SRC-N La–b` in
  that parenthesis, compare the claim's distinctive content words with the words of the cited lines
  and of equally sized windows within ±8 lines.
- Flag the citation when the cited window carries few of the claim's words and a nearby window
  carries clearly more — and suggest that window.

- Separately, flag **chrome-only citations**: every cited line is Learn capture chrome (`Tip`, `Note`,
  `Copy`, a language tab, `Completed 100 XP`, `35 minutes`, `See the Text and images tab…`), so the
  claim cannot be carried by the cited lines. Claims that are *about* the capture (code markers,
  status lines, the next-unit link) legitimately cite chrome and are skipped.

It is a **candidate finder for the generator**, not a verifier: every flagged citation must be
confirmed by reading the raw lines before it is changed. False positives are expected (paraphrases,
claims supported by the cited lines in other words). It never edits files.

Usage (from the repo root):
    python scripts/find_locator_drift.py                  # all wiki pages; writes loop/drift-candidates.md
    python scripts/find_locator_drift.py wiki/concepts/code-interpreter-tool.md   # some pages; prints only
"""
from __future__ import annotations

import re
import sys
from collections import Counter
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "loop" / "drift-candidates.md"
FENCE = re.compile(r"```.*?```", re.S)
PAREN = re.compile(r"\(([^()]*\bSRC-\d{1,3}\b[^()]*)\)")
CITE = re.compile(r"\bSRC-(\d{1,3})\s+L(\d{1,5})(?:\s*[–-]\s*L?(\d{1,5}))?")
WORD = re.compile(r"[a-z][a-z0-9_\-]{3,}")
STOP = set("""this that with from have into your their they them then than when what which while
where will would could should about also only more most such these those other over under very
been being does done each many much must some same both uses used using make makes made like
just than within without across source sources page pages says said describes describe explains
teaches teach unit module episode shows show note notes corpus capture captured inference
synthesis stale risk disputed illustrative""".split())
WINDOW = 8
CHROME = re.compile(r"^\s*(?:See the Text and images tab for more details!|Tip|Note|Important|Caution|"
                    r"Warning|Copy|Python|C#|Bash|JSON|JavaScript|TypeScript|PowerShell|Azure CLI|HTTP|"
                    r"YAML|Console|Output|Expand table|Completed(?: \d+ XP)?|\d+ minutes?|\d+ min|\d+ XP)?\s*$",
                    re.I)
ABOUT_CAPTURE = re.compile(r"captur|marker|\bcopy\b|code bod|footer|status|next unit|follows|language tab",
                           re.I)


def words(text: str) -> set[str]:
    return {w for w in WORD.findall(text.lower()) if w not in STOP}


def load_raw() -> tuple[dict[int, list[str]], Counter]:
    raw, df = {}, Counter()
    for p in (ROOT / "corpus").glob("*.md"):
        head = p.name.split("-", 1)[0]
        if head.isdigit():
            lines = p.read_text(encoding="utf-8", errors="replace").splitlines()
            raw[int(head)] = lines
            df.update(set().union(*(words(l) for l in lines)) if lines else set())
    return raw, df


def score(claim: set[str], lines: list[str], a: int, b: int) -> set[str]:
    text = " ".join(lines[max(a - 1, 0):b])
    return claim & words(text)


def scan(page: Path, raw: dict, df: Counter, n_docs: int, chrome: list | None = None) -> list[dict]:
    out = []
    body = FENCE.sub("", page.read_text(encoding="utf-8"))
    if body.startswith("---"):
        body = body[body.find("\n---", 3) + 4:]
    for ln_no, line in enumerate(body.splitlines(), 1):
        if line.lstrip().startswith(("- SRC-", "| Source ID", "| Raw file", "| Teaching content")):
            continue
        prev_end = 0
        for m in PAREN.finditer(line):
            claim_text = line[prev_end:m.start()]
            prev_end = m.end()
            if chrome is not None and not ABOUT_CAPTURE.search(claim_text):
                for c in CITE.finditer(m.group(1)):
                    sid, a = int(c.group(1)), int(c.group(2))
                    b = int(c.group(3) or a)
                    lines = raw.get(sid)
                    if lines and b <= len(lines) and all(CHROME.match(x) for x in lines[a - 1:b]):
                        chrome.append({"page": page.relative_to(ROOT).as_posix(), "line": ln_no,
                                       "sid": sid, "cited": (a, b), "claim": claim_text.strip()[-140:]})
            # distinctive words only: rare across the corpus
            claim = {w for w in words(claim_text) if df[w] <= max(3, n_docs // 10)}
            if len(claim) < 3:
                continue
            for c in CITE.finditer(m.group(1)):
                sid, a = int(c.group(1)), int(c.group(2))
                b = int(c.group(3) or a)
                lines = raw.get(sid)
                if not lines or b > len(lines) or b - a > 12:
                    continue
                hit = score(claim, lines, a, b)
                if len(hit) >= max(2, len(claim) // 3):
                    continue
                size = b - a
                best, best_hit = None, hit
                for na in range(max(1, a - WINDOW), min(len(lines), a + WINDOW) + 1):
                    nb = min(len(lines), na + size)
                    h = score(claim, lines, na, nb)
                    if len(h) > len(best_hit):
                        best, best_hit = (na, nb), h
                if best and len(best_hit) >= max(3, 2 * max(len(hit), 1)):
                    out.append({"page": page.relative_to(ROOT).as_posix(), "line": ln_no, "sid": sid,
                                "cited": (a, b), "suggest": best, "cited_hits": len(hit),
                                "suggest_hits": len(best_hit), "claim": claim_text.strip()[-140:]})
    return out


def main() -> int:
    targets = [Path(a) for a in sys.argv[1:]] or sorted((ROOT / "wiki").rglob("*.md"))
    raw, df = load_raw()
    found, chrome = [], []
    for p in targets:
        p = p if p.is_absolute() else ROOT / p
        if p.stem in {"index", "log", "lint-report", "corpus-map", "objective-map"}:
            continue
        found += scan(p, raw, df, len(raw), chrome)
    fmt = lambda r: (f"- `{r['page']}` L{r['line']}: SRC-{r['sid']} L{r['cited'][0]}–{r['cited'][1]} "
                     f"→ L{r['suggest'][0]}–{r['suggest'][1]}? ({r['cited_hits']} vs {r['suggest_hits']} "
                     f"distinctive words) — …{r['claim']}")
    cfmt = lambda r: (f"- `{r['page']}` L{r['line']}: SRC-{r['sid']} L{r['cited'][0]}–{r['cited'][1]} "
                      f"cites only capture chrome — …{r['claim']}")
    if sys.argv[1:]:
        print("\n".join([fmt(r) for r in found] + [cfmt(r) for r in chrome]) or "no candidates")
        return 0
    by_sid = Counter(r["sid"] for r in found)
    lines = ["# Locator-drift candidates", "",
             "Generated by `scripts/find_locator_drift.py` (heuristic; confirm each against the raw lines "
             "before changing a citation). Candidates per source, most first: "
             + ", ".join(f"SRC-{s} ({n})" for s, n in by_sid.most_common(15)) + ".", ""]
    lines += [fmt(r) for r in sorted(found, key=lambda r: (r["sid"], r["page"], r["line"]))]
    lines += ["", "## Chrome-only citations", "",
              "Every cited line is capture chrome, so the lines cannot carry the claim. "
              f"{len(chrome)} found.", ""]
    lines += [cfmt(r) for r in sorted(chrome, key=lambda r: (r["sid"], r["page"], r["line"]))]
    OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"drift candidates: {len(found)} across {len({r['page'] for r in found})} pages; "
          f"chrome-only citations: {len(chrome)} -> {OUT.relative_to(ROOT).as_posix()}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

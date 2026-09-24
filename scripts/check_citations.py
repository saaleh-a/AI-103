#!/usr/bin/env python3
"""Check a reader-facing document (e.g. a study guide in outputs/) against the raw sources.

Same evidence rules as scripts/lint_wiki.py, for files that live outside wiki/:
  1. every `SRC-N L<a>[–<b>]` line range exists in that raw file (a range belongs to the
     SRC-ID token before it, within 90 characters);
  2. every curly-quoted passage (“…”, 2+ words) occurs in the raw file of a source cited on
     the same line, compared case- and punctuation-insensitively ("…" splits a quote into
     parts); quotes longer than 25 words are flagged;
  3. every [[wikilink]] resolves to a page in wiki/;
  4. SRC-IDs lie in the corpus range;
  5. counts of SOURCE / SYNTHESIS / INFERENCE / PRACTICE labels; warns on **SOURCE** lines
     without an SRC-ID and **SYNTHESIS** lines citing fewer than 2 sources.

Usage:  python scripts/check_citations.py <file.md> [--coverage] [--quiet]
Exit code 1 when errors are found.
"""
from __future__ import annotations

import re
import sys
from collections import Counter
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")
ROOT = Path(__file__).resolve().parent.parent
FENCE = re.compile(r"```.*?```", re.S)
INLINE_CODE = re.compile(r"`[^`\n]*`")
WIKILINK = re.compile(r"\[\[([^\[\]|#^]+)(?:[#^][^\[\]|]*)?(?:\|[^\[\]]*)?\]\]")
SRCID = re.compile(r"\bSRC-(\d{1,3})\b")
TOKEN = re.compile(r"\bSRC-(?P<sid>\d{1,3})\b|\bL(?P<a>\d{1,5})(?:\s*[–-]\s*L?(?P<b>\d{1,5}))?\b")
QUOTE = re.compile(r"“([^”\n]{2,600})”")
LABEL = re.compile(r"\*\*(SOURCE|SYNTHESIS|INFERENCE|PRACTICE)\b")


def norm(s: str) -> str:
    return re.sub(r"[^0-9a-z]+", " ", s.casefold()).strip()


def main() -> int:
    path = Path(sys.argv[1])
    coverage = "--coverage" in sys.argv
    quiet = "--quiet" in sys.argv
    text = path.read_text(encoding="utf-8")
    body = INLINE_CODE.sub("", FENCE.sub("", text))

    raw_n, raw_t = {}, {}
    for p in (ROOT / "corpus").glob("*.md"):
        head = p.name.split("-", 1)[0]
        if not head.isdigit():
            continue
        sid = f"SRC-{int(head)}"
        t = p.read_text(encoding="utf-8", errors="replace")
        raw_n[sid] = t.count("\n") + 1
        raw_t[sid] = " " + norm(t) + " "
    slugs = {p.stem.lower() for p in (ROOT / "wiki").rglob("*.md")}
    slugs |= {p.stem.lower() for p in (ROOT / "corpus").glob("*.md")}

    errors, warnings = [], []
    n_ranges = n_quotes = 0
    cited = Counter()
    for ln_no, line in enumerate(body.splitlines(), 1):
        ids = [(m.start(), m.end(), f"SRC-{int(m.group(1))}") for m in SRCID.finditer(line)]
        for _, _, sid in ids:
            cited[sid] += 1
            if sid not in raw_n:
                errors.append(f"L{ln_no}: {sid} has no raw file")
        current, last_end = None, -1
        for m in TOKEN.finditer(line):
            if m.group("sid"):
                current, last_end = f"SRC-{int(m.group('sid'))}", m.end()
                continue
            if current is None or current not in raw_n or m.start() - last_end > 90:
                continue
            last_end = m.end()
            a = int(m.group("a"))
            b = int(m.group("b") or a)
            n_ranges += 1
            if not (1 <= a <= raw_n[current] and a <= b <= raw_n[current]):
                errors.append(f"L{ln_no}: {current} L{a}" + (f"–{b}" if b != a else "") +
                              f" outside raw file (1–{raw_n[current]})")
        line_ids = {s for _, _, s in ids}
        for q in QUOTE.finditer(line):
            quote = q.group(1)
            words = len(quote.split())
            if words < 2:
                continue
            parts = [norm(p) for p in re.split(r"…|\.\.\.", quote) if len(norm(p)) >= 3]
            if not parts:
                continue
            n_quotes += 1
            if words > 25:
                warnings.append(f"L{ln_no}: quote longer than 25 words ({words})")
            if not line_ids:
                found = [s for s, t in raw_t.items() if all(f" {p} " in t for p in parts)]
                warnings.append(f"L{ln_no}: quote without a citation on its line: “{quote[:60]}”"
                                + (f" (occurs in {', '.join(sorted(found)[:3])})" if found else " (not found in any raw file)"))
                continue
            if any(s in raw_t and all(f" {p} " in raw_t[s] for p in parts) for s in line_ids):
                continue
            found = [s for s, t in raw_t.items() if all(f" {p} " in t for p in parts)]
            if found:
                errors.append(f"L{ln_no}: quote attributed to {', '.join(sorted(line_ids))} but found in "
                              f"{', '.join(sorted(found)[:3])}: “{quote[:60]}”")
            else:
                errors.append(f"L{ln_no}: quote not found in any raw file: “{quote[:70]}”")
        for m in WIKILINK.finditer(line):
            if m.group(1).strip().split("/")[-1].lower() not in slugs:
                errors.append(f"L{ln_no}: dead wikilink [[{m.group(1)}]]")
        if re.search(r"\*\*SOURCE\b", line) and not SRCID.search(line):
            warnings.append(f"L{ln_no}: SOURCE label without an SRC-ID on the line")
        if re.search(r"\*\*SYNTHESIS\b", line) and len(line_ids) < 2:
            warnings.append(f"L{ln_no}: SYNTHESIS label citing fewer than 2 sources on the line")

    labels = Counter(m.group(1) for m in LABEL.finditer(body))
    words = len(re.findall(r"\S+", body))
    print(f"file: {path.name} · words: {words:,} · line ranges checked: {n_ranges} · quotes checked: {n_quotes}")
    print("labels: " + ", ".join(f"{k}={labels.get(k, 0)}" for k in ("SOURCE", "SYNTHESIS", "INFERENCE", "PRACTICE")))
    print(f"distinct SRC-IDs cited: {len(cited)} · errors: {len(errors)} · warnings: {len(warnings)}")
    if coverage:
        missing = sorted((s for s in raw_n if s not in cited), key=lambda s: int(s[4:]))
        print("SRC-IDs never cited: " + (", ".join(missing) or "none"))
    if not quiet:
        for e in errors[:60]:
            print("ERROR", e)
        if len(errors) > 60:
            print(f"... {len(errors) - 60} more errors")
        for w in warnings[:25]:
            print("WARN ", w)
        if len(warnings) > 25:
            print(f"... {len(warnings) - 25} more warnings")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())

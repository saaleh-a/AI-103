#!/usr/bin/env python3
"""Mechanical lint for the AI-103 wiki — the loop's verifier (schema.md §9, program.md).

Checks frontmatter, dead links, orphans, raw-source coverage, citation hygiene, index
coverage, disputed-page structure, exam-objective IDs and every raw locator:

- each `SRC-N L…` line range must exist in that raw file;
- each curly-quoted passage “…” (2+ words) must occur verbatim (case- and
  punctuation-insensitive; "…" splits it into parts) in the raw text of an SRC-ID cited on
  the same line;
- a line range that falls wholly inside a Learn capture's site navigation (outside the
  teaching-content range recorded in scripts/data/corpus-registry.json) is a warning.

It also reports a judgement aid: claim-bearing lines that carry neither an SRC-ID nor an
evidence label. Writes wiki/lint-report.md and exits non-zero when it finds errors.

The generator (anything that writes wiki pages) must never edit this file — see program.md.

Usage (from the repo root):
    python scripts/lint_wiki.py                 # full wiki, writes wiki/lint-report.md
    python scripts/lint_wiki.py --pages wiki/sources/src-231-*.md   # check only these pages
                                                 # (locators, frontmatter, links); no report
"""
from __future__ import annotations

import datetime as _dt
import glob
import json
import re
import sys
from collections import defaultdict
from pathlib import Path

import yaml

sys.stdout.reconfigure(encoding="utf-8")
ROOT = Path(__file__).resolve().parent.parent
WIKI = ROOT / "wiki"
CORPUS = ROOT / "corpus"
REPORT = WIKI / "lint-report.md"
REGISTRY = ROOT / "scripts" / "data" / "corpus-registry.json"
OBJECTIVES = ROOT / "scripts" / "data" / "exam-objectives.json"

TYPES = {"source", "entity", "concept", "synthesis", "index", "log", "lint"}
STATUSES = {"seed", "active", "disputed", "stale", "superseded", "stub"}
CONFIDENCE = {"high", "medium", "low"}
AREAS = {"platform", "models", "responsible-ai", "generative-apps", "agents", "orchestration",
         "retrieval", "vision", "language", "speech", "extraction", "exam", "corpus"}
SOURCE_KINDS = {"learn-unit", "episode", "study-cram", "study-guide", "course-page", "course-preview"}
DEPTHS = {"full", "partial", "stub"}
ENTITY_KINDS = {"product", "service", "feature", "sdk", "api", "protocol", "tool", "model",
                "person", "organisation", "work"}
REQUIRED = ["title", "type", "status", "confidence", "created", "updated", "summary", "area",
            "source_ids"]
SOURCE_REQUIRED = ["source_kind", "module", "raw_file", "url", "ingest_depth"]
NAV = {"index", "log", "lint-report", "corpus-map", "objective-map"}
LABELS = ("Synthesis:", "Inference:", "Hypothesis:", "Disputed:", "Stale-risk:", "Illustrative")
UNLABELLED_EXEMPT_SECTIONS = ("source metadata", "connections", "sources", "open questions",
                              "chapter guide")

FENCE = re.compile(r"```.*?```", re.S)
INLINE_CODE = re.compile(r"`[^`\n]*`")
WIKILINK = re.compile(r"\[\[([^\[\]|#^]+)(?:[#^][^\[\]|]*)?(?:\|[^\[\]]*)?\]\]")
SRC_ID = re.compile(r"\bSRC-(\d{1,3})\b")
LOCATOR_CITE = re.compile(r"\bSRC-\d{1,3}[,:]?\s+(?:L\d|§|“|\")")
DATE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
# One citation token stream per line: an SRC-ID sets the current source; the line ranges that
# follow it on the same line (within 90 characters of the previous token) belong to it.
CITE_TOKEN = re.compile(r"\bSRC-(?P<sid>\d{1,3})\b|\bL(?P<a>\d{1,5})(?:\s*[–-]\s*L?(?P<b>\d{1,5}))?\b")
QUOTE = re.compile(r"“([^”\n]{2,600})”")


def split_frontmatter(text: str):
    if not text.startswith("---"):
        return None, text, "missing frontmatter"
    end = text.find("\n---", 3)
    if end == -1:
        return None, text, "unterminated frontmatter"
    raw = text[3:end]
    body = text[end + 4:]
    try:
        fm = yaml.safe_load(raw) or {}
    except yaml.YAMLError as exc:
        return None, body, f"invalid YAML: {str(exc).splitlines()[0]}"
    if not isinstance(fm, dict):
        return None, body, "frontmatter is not a mapping"
    return fm, body, None


def strip_code(body: str) -> str:
    return INLINE_CODE.sub("", FENCE.sub("", body))


def links_of(body: str) -> list[str]:
    # `[[page\|label]]` is the escaped form used inside Markdown tables.
    return [m.group(1).strip().rstrip("\\").strip() for m in WIKILINK.finditer(strip_code(body))]


def norm_text(s: str) -> str:
    return re.sub(r"[^0-9a-z]+", " ", s.casefold()).strip()


def load_raw() -> tuple[dict, dict, dict]:
    """Return {SRC-N: filename}, {SRC-N: line count}, {SRC-N: normalised text}."""
    by_id, n_lines, normed = {}, {}, {}
    for p in CORPUS.glob("*.md"):
        head = p.name.split("-", 1)[0]
        if not head.isdigit():
            continue
        sid = f"SRC-{int(head)}"
        by_id[sid] = p.name
        text = p.read_text(encoding="utf-8", errors="replace")
        n_lines[sid] = text.count("\n") + 1
        normed[sid] = " " + norm_text(text) + " "
    return by_id, n_lines, normed


def check_locators(pages: dict, raw_lines: dict, raw_norm: dict, content: dict):
    problems, nav_warnings, n_lines, n_anchors = [], [], 0, 0
    for stem, pg in pages.items():
        if stem == "lint-report":
            continue
        for line in strip_code(pg["body"]).splitlines():
            current, last_end = None, -1
            for m in CITE_TOKEN.finditer(line):
                if m.group("sid"):
                    current, last_end = f"SRC-{int(m.group('sid'))}", m.end()
                    continue
                if current is None or current not in raw_lines or m.start() - last_end > 90:
                    continue
                last_end = m.end()
                a = int(m.group("a"))
                b = int(m.group("b") or a)
                n = raw_lines[current]
                n_lines += 1
                if not (1 <= a <= n and a <= b <= n):
                    problems.append((pg["rel"], f"locator {current} L{a}" + (f"–{b}" if b != a else "")
                                     + f" outside raw file (1–{n})"))
                elif current in content:
                    lo, hi = content[current]
                    if b < lo - 2 or a > hi + 2:
                        nav_warnings.append((pg["rel"], f"locator {current} L{a}" + (f"–{b}" if b != a else "")
                                             + f" lies outside the teaching content (L{lo}–{hi}); "
                                             "it points at site navigation"))
            line_ids = {f"SRC-{int(s)}" for s in SRC_ID.findall(line)} & set(raw_norm)
            for q in QUOTE.finditer(line):
                quote = q.group(1)
                if len(quote.split()) < 2:
                    continue
                parts = [norm_text(p) for p in re.split(r"…|\.\.\.", quote) if len(norm_text(p)) >= 3]
                if not parts:
                    continue
                n_anchors += 1
                if not line_ids:
                    problems.append((pg["rel"], f"curly quote without an SRC citation on its line: “{quote[:60]}”"))
                elif not any(all(f" {p} " in raw_norm[s] for p in parts) for s in line_ids):
                    where = sorted((s for s, t in raw_norm.items() if all(f" {p} " in t for p in parts)),
                                   key=lambda s: int(s[4:]))
                    hint = f" (occurs in {', '.join(where[:3])})" if where else ""
                    problems.append((pg["rel"], f"quote not found in the raw text of "
                                     f"{', '.join(sorted(line_ids))}{hint}: “{quote[:60]}”"))
    return problems, nav_warnings, n_lines, n_anchors


def unlabelled_lines(body: str) -> list[str]:
    """Claim-bearing lines with neither an SRC-ID nor an evidence label (judgement aid)."""
    out, section, first_para = [], "", True
    for line in strip_code(body).splitlines():
        s = line.strip()
        if not s:
            continue
        if s.startswith("#"):
            section = s.lstrip("#").strip().lower()
            continue
        if section == "" or any(section.startswith(x) for x in UNLABELLED_EXEMPT_SECTIONS):
            continue
        if s.startswith("|") and (set(s) <= set("|-: ") or "---" in s):
            continue
        if s.startswith("*") and s.endswith("*") and not s.startswith("**") and first_para:
            first_para = False
            continue
        if s.lower().startswith(("not covered by this source", "none.", "- *also linked from:*")):
            continue
        if SRC_ID.search(s) or any(lbl in s for lbl in LABELS) or "[[" in s and len(WIKILINK.sub("", s).split()) < 6:
            continue
        if len(s.split()) < 5:
            continue
        out.append(s)
    return out


def main() -> int:
    only = None
    if "--pages" in sys.argv:
        pats = sys.argv[sys.argv.index("--pages") + 1:]
        only = {Path(p).resolve() for pat in pats for p in glob.glob(pat)}
        if not only:
            print("no pages matched")
            return 1
    raw_by_id, raw_lines, raw_norm = load_raw()
    raw_files = set(raw_by_id.values())
    registry = {f"SRC-{r['id']}": r for r in json.loads(REGISTRY.read_text(encoding="utf-8"))["sources"]}
    content = {sid: tuple(r["content_lines"]) for sid, r in registry.items() if r["kind"] == "learn-unit"}
    objective_ids = {o["id"] for o in json.loads(OBJECTIVES.read_text(encoding="utf-8"))["objectives"]}

    pages: dict[str, dict] = {}
    errors: list[tuple[str, str]] = []
    warnings: list[tuple[str, str]] = []

    for path in sorted(WIKI.rglob("*.md")):
        stem = path.stem
        rel = path.relative_to(ROOT).as_posix()
        if stem.lower() in {p.lower() for p in pages}:
            errors.append((rel, f"duplicate page name '{stem}' (Obsidian cannot disambiguate)"))
        text = path.read_text(encoding="utf-8")
        fm, body, err = split_frontmatter(text)
        pages[stem] = {"path": path, "rel": rel, "fm": fm or {}, "body": body,
                       "links": [] if stem == "lint-report" else links_of(body)}
        checked = only is None or path.resolve() in only
        if not checked:
            continue
        if err:
            errors.append((rel, err))
            continue
        for key in REQUIRED:
            if key not in fm:
                errors.append((rel, f"missing frontmatter field '{key}'"))
        t = fm.get("type")
        if t not in TYPES:
            errors.append((rel, f"invalid type '{t}'"))
        if fm.get("status") not in STATUSES:
            errors.append((rel, f"invalid status '{fm.get('status')}'"))
        if fm.get("confidence") not in CONFIDENCE:
            errors.append((rel, f"invalid confidence '{fm.get('confidence')}'"))
        if fm.get("area") not in AREAS:
            errors.append((rel, f"invalid area '{fm.get('area')}'"))
        for dkey in ("created", "updated"):
            val = fm.get(dkey)
            if isinstance(val, (_dt.date, _dt.datetime)):
                continue
            if not (isinstance(val, str) and DATE.match(val)):
                errors.append((rel, f"'{dkey}' must be YYYY-MM-DD"))
        summ = fm.get("summary")
        if not isinstance(summ, str) or not summ.strip():
            errors.append((rel, "empty summary"))
        elif len(summ) > 220:
            warnings.append((rel, f"summary is {len(summ)} chars (limit 200)"))
        sids = fm.get("source_ids")
        if not isinstance(sids, list):
            errors.append((rel, "source_ids must be a list"))
            sids = []
        for sid in sids:
            if not (isinstance(sid, str) and re.fullmatch(r"SRC-[1-9]\d{0,2}", sid)):
                errors.append((rel, f"malformed source id '{sid}'"))
            elif sid not in raw_by_id:
                errors.append((rel, f"source id {sid} has no raw file"))
        objs = fm.get("objectives", [])
        if objs is None:
            objs = []
        if not isinstance(objs, list):
            errors.append((rel, "objectives must be a list of exam objective IDs"))
        else:
            for o in objs:
                if o not in objective_ids:
                    errors.append((rel, f"unknown exam objective '{o}' (see scripts/data/exam-objectives.json)"))
        gaps = fm.get("objective_gaps", []) or []
        if not isinstance(gaps, list):
            errors.append((rel, "objective_gaps must be a list of exam objective IDs"))
        else:
            for o in gaps:
                if o not in objective_ids:
                    errors.append((rel, f"unknown exam objective '{o}' in objective_gaps"))
            both = sorted(set(gaps) & set(objs if isinstance(objs, list) else []))
            if both:
                errors.append((rel, f"objective(s) {', '.join(both)} listed as both taught and gap"))
        if t == "entity":
            tags = set(fm.get("tags") or [])
            if not tags & ENTITY_KINDS:
                warnings.append((rel, "entity page lacks a kind tag (" + "/".join(sorted(ENTITY_KINDS)) + ")"))
        if t == "source":
            for key in SOURCE_REQUIRED:
                if key not in fm:
                    errors.append((rel, f"source page missing '{key}'"))
            if fm.get("source_kind") not in SOURCE_KINDS:
                errors.append((rel, f"invalid source_kind '{fm.get('source_kind')}'"))
            if fm.get("ingest_depth") not in DEPTHS:
                errors.append((rel, f"invalid ingest_depth '{fm.get('ingest_depth')}'"))
            m = re.match(r"src-(\d{1,3})-", stem)
            if not m:
                errors.append((rel, "source page filename must start with src-N-"))
            else:
                sid = f"SRC-{int(m.group(1))}"
                if sids != [sid]:
                    errors.append((rel, f"source_ids should be exactly [{sid}]"))
                rf = fm.get("raw_file")
                if rf not in raw_files:
                    errors.append((rel, f"raw_file does not match a raw file: {rf!r}"))
                elif raw_by_id.get(sid) != rf:
                    errors.append((rel, f"raw_file {rf!r} does not belong to {sid}"))
                reg = registry.get(sid)
                if reg:
                    if fm.get("source_kind") in SOURCE_KINDS and fm.get("source_kind") != reg["kind"]:
                        errors.append((rel, f"source_kind '{fm.get('source_kind')}' but the registry says '{reg['kind']}'"))
                    if fm.get("url") != reg["url"]:
                        warnings.append((rel, "url differs from the raw file's '> Source:' line"))
        if fm.get("status") == "disputed" and not re.search(r"^#{2,4} .*(Tension|Disput|Contradict)", body, re.M):
            errors.append((rel, "status 'disputed' but no Tensions/Disputed section"))
        if t in {"source", "entity", "concept", "synthesis"} and not re.search(r"^## Sources\b", body, re.M):
            warnings.append((rel, "no '## Sources' section"))
        cited = {f"SRC-{int(n)}" for n in SRC_ID.findall(strip_code(body))}
        if t in {"entity", "concept", "synthesis"}:
            missing = sorted(cited - set(sids), key=lambda s: int(s[4:]))
            if missing:
                warnings.append((rel, f"cites {', '.join(missing)} but not in source_ids"))
            unused = sorted(set(sids) - cited, key=lambda s: int(s[4:]))
            if unused:
                warnings.append((rel, f"source_ids never cited in body: {', '.join(unused)}"))
            if not LOCATOR_CITE.search(strip_code(body)):
                warnings.append((rel, "no locator-style raw citation (e.g. 'SRC-231 L230')"))
        pages[stem]["unlabelled"] = unlabelled_lines(body) if t in {"source", "entity", "concept", "synthesis"} else []

    checked_pages = {s: p for s, p in pages.items() if only is None or p["path"].resolve() in only}
    loc_problems, nav_warn, n_line_cites, n_anchor_cites = check_locators(checked_pages, raw_lines, raw_norm, content)
    errors.extend(loc_problems)
    warnings.extend(nav_warn)

    names = {s.lower(): s for s in pages}
    raw_names = {Path(n).stem.lower() for n in raw_files}
    inbound: dict[str, set[str]] = defaultdict(set)
    outbound: dict[str, set[str]] = defaultdict(set)
    for stem, pg in pages.items():
        for target in pg["links"]:
            key = target.split("/")[-1].lower()
            if key.endswith(".md"):
                key = key[:-3]
            if key in names:
                tgt = names[key]
                if tgt != stem:
                    outbound[stem].add(tgt)
                    if stem not in NAV:
                        inbound[tgt].add(stem)
            elif key in raw_names or key in {"schema", "claude", "program"}:
                continue
            elif stem in checked_pages:
                errors.append((pg["rel"], f"dead link `[[{target}]]`"))

    n_unlabelled = sum(len(p.get("unlabelled", [])) for p in checked_pages.values())
    n_claim_lines = 0
    for p in checked_pages.values():
        if p["fm"].get("type") in {"source", "entity", "concept", "synthesis"}:
            n_claim_lines += sum(1 for l in strip_code(p["body"]).splitlines()
                                 if len(l.split()) >= 5 and not l.lstrip().startswith(("#", "|")))

    if only is not None:
        for p, m in errors:
            print(f"ERROR {p}: {m}")
        for p, m in warnings:
            print(f"WARN  {p}: {m}")
        for stem, p in checked_pages.items():
            for l in p.get("unlabelled", [])[:5]:
                print(f"INFO  {p['rel']}: unlabelled claim line: {l[:100]}")
        print(f"checked={len(checked_pages)} errors={len(errors)} warnings={len(warnings)} "
              f"locators: {n_line_cites} line ranges, {n_anchor_cites} anchors · unlabelled lines={n_unlabelled}")
        return 1 if errors else 0

    covered = defaultdict(list)
    for stem, pg in pages.items():
        if pg["fm"].get("type") == "source":
            for sid in pg["fm"].get("source_ids") or []:
                covered[sid].append(stem)
    for sid in sorted(raw_by_id, key=lambda s: int(s[4:])):
        fname = raw_by_id[sid]
        if not covered.get(sid):
            errors.append((f"corpus/{fname}", f"raw source {sid} has no source page"))
        elif len(covered[sid]) > 1:
            errors.append((f"corpus/{fname}", f"{sid} has several source pages: {covered[sid]}"))

    index_links = outbound.get("index", set())
    for stem, pg in pages.items():
        if stem in NAV:
            continue
        if "index" in pages and stem not in index_links:
            errors.append((pg["rel"], "not listed in wiki/index.md"))
        if not inbound.get(stem):
            warnings.append((pg["rel"], "orphan: no inbound links from content pages"))

    one_way = 0
    for stem, pg in pages.items():
        if pg["fm"].get("type") not in {"concept", "entity"}:
            continue
        for tgt in outbound.get(stem, ()):
            if pages[tgt]["fm"].get("type") in {"concept", "entity"} and stem not in outbound.get(tgt, ()):
                one_way += 1

    seen_alias: dict[str, str] = {}
    for stem, pg in pages.items():
        for alias in [pg["fm"].get("title")] + list(pg["fm"].get("aliases") or []):
            if not isinstance(alias, str):
                continue
            key = alias.strip().lower()
            if key in seen_alias and seen_alias[key] != stem:
                warnings.append((pg["rel"], f"title/alias '{alias}' also used by {seen_alias[key]}"))
            seen_alias.setdefault(key, stem)

    by_type = defaultdict(int)
    for pg in pages.values():
        by_type[pg["fm"].get("type", "?")] += 1
    worst = sorted(((len(p.get("unlabelled", [])), p["rel"]) for p in pages.values()), reverse=True)[:10]
    today = _dt.date.today().isoformat()
    n_cov = sum(1 for s in raw_by_id if covered.get(s))
    metrics = {
        "pages": len(pages), "raw_sources": len(raw_by_id), "raw_covered": n_cov,
        "errors": len(errors), "warnings": len(warnings), "locator_problems": len(loc_problems),
        "navigation_locators": len(nav_warn), "line_ranges_verified": n_line_cites,
        "anchors_verified": n_anchor_cites, "unlabelled_claim_lines": n_unlabelled,
        "claim_lines": n_claim_lines, "one_way_links": one_way,
    }
    lines = [
        "---",
        "title: Lint report",
        "type: lint",
        "status: active",
        "confidence: high",
        f"created: {today}",
        f"updated: {today}",
        f"summary: Mechanical lint result — {len(errors)} errors, {len(warnings)} warnings across {len(pages)} pages.",
        "area: corpus",
        "source_ids: []",
        "tags: [lint]",
        "aliases: []",
        "---",
        "",
        "# Lint report",
        "",
        f"Generated by `scripts/lint_wiki.py` on {today}. Regenerate after every change; do not edit by hand.",
        "",
        "| Measure | Value |",
        "|---|---|",
        f"| Pages | {len(pages)} |",
    ]
    lines += [f"| {k} pages | {v} |" for k, v in sorted(by_type.items())]
    lines += [
        f"| Raw sources | {len(raw_by_id)} |",
        f"| Raw sources with a source page | {n_cov} |",
        f"| Errors | {len(errors)} |",
        f"| Warnings | {len(warnings)} |",
        f"| Line-range citations verified | {n_line_cites} |",
        f"| Verbatim-anchor citations verified | {n_anchor_cites} |",
        f"| Locator problems | {len(loc_problems)} |",
        f"| Locators pointing at site navigation (warnings) | {len(nav_warn)} |",
        f"| Claim-bearing lines | {n_claim_lines} |",
        f"| Unlabelled claim lines (judgement aid) | {n_unlabelled} |",
        f"| One-way concept/entity links (info) | {one_way} |",
        "",
        "## Errors",
        "",
    ]
    lines += [f"- `{p}` — {m}" for p, m in errors] or ["None."]
    lines += ["", "## Warnings", ""]
    lines += [f"- `{p}` — {m}" for p, m in warnings] or ["None."]
    lines += ["", "## Pages with the most unlabelled claim lines", ""]
    lines += [f"- `{r}` — {n}" for n, r in worst if n] or ["None."]
    lines += [
        "",
        "## Judgement checks (not mechanical)",
        "",
        "Unsupported claims · unrepresented contradictions · stale claims · recurring concepts",
        "without a page · summaries that drifted from evidence · circular synthesis · confident",
        "answers outside corpus coverage. See schema.md §9 and loop/rubric.md.",
        "",
        "<!-- metrics: " + json.dumps(metrics) + " -->",
        "",
    ]
    REPORT.write_text("\n".join(lines), encoding="utf-8")

    print(f"pages={len(pages)} " + " ".join(f"{k}={v}" for k, v in sorted(by_type.items())))
    print(f"raw={len(raw_by_id)} covered={n_cov}")
    print(f"locators: {n_line_cites} line ranges, {n_anchor_cites} anchors, {len(loc_problems)} problems, "
          f"{len(nav_warn)} in navigation")
    print(f"errors={len(errors)} warnings={len(warnings)} one_way={one_way} "
          f"unlabelled={n_unlabelled}/{n_claim_lines}")
    for p, m in errors[:60]:
        print(f"ERROR {p}: {m}")
    if len(errors) > 60:
        print(f"... {len(errors) - 60} more errors in {REPORT.relative_to(ROOT).as_posix()}")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())

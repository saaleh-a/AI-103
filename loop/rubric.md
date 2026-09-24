# Judgement rubric — the loop's second verifier

Used by a **read-only reviewer** that did not write the pages it reviews (`program.md`). The
generator never edits this file. For each sampled page, open the raw files it cites and check
the claims against the cited lines — not against memory of Azure. Ratchet decisions use the fixed
panel (`python scripts/loop_sample.py --panel`); rotating samples (`--cycle N`) look for new
failure classes.

## Criteria

1. **Faithful** — each checked claim is supported by the raw lines it cites. Check at least five
   load-bearing claims per page (all of them on short pages). A claim that contradicts, overstates
   or is absent from its cited lines fails this criterion.
2. **Precise locators** — citations point at the lines that carry the claim, inside the teaching
   content (not site navigation), not merely somewhere in the same file.
3. **Honest labels** — statements no source makes (exam cues, decision rules, comparisons,
   customer-transfer advice) carry **Inference:**, **Synthesis:** or *Illustrative*; time-sensitive
   facts that matter carry **Stale-risk:**; conflicts are shown as **Disputed:**, not resolved
   silently.
4. **Coverage** — a source page captures the source's main teaching points, knowledge-check items
   and code patterns; a thin capture is honestly marked `stub`/`partial`. A concept or entity page
   covers what the corpus says across its main sources, not just one.
5. **Terminology** — the corpus's product names are preserved; renames are flagged, not silently
   modernised.
6. **No invention** — nothing is presented as sourced that the corpus does not say. General Azure
   knowledge dressed as a citation is the worst failure.
7. **Useful structure** — concept and entity pages give the mechanism and the decision boundary
   against the closest confusion; links go to the right neighbours.
8. **Honest frontmatter** — judged per objective ID, using the wording in
   `scripts/data/exam-objectives.json`. An ID in `objectives` passes when the page's own cited
   evidence *other than the study guide* substantively teaches **at least one named part** of that
   objective and the page is about that part (not merely adjacent to it). A broad objective's other
   parts may be taught on other pages: missing parts are recorded once, in the gap register
   ([[corpus-gaps]]), not required on every page. An ID fails when the page teaches none of its
   parts, or teaches only something the objective does not ask for. `objective_gaps` may only name
   objectives recorded in the gap register, and only where the page discusses that gap — never to
   mean "not taught on this page". Hubs and non-teaching units claim none (the lint enforces the
   mechanical parts of this rule; judge the rest).

## Verdict

A page **FAILS** if criterion 1, 2, 6 or 8 fails for any load-bearing claim, or criterion 3 fails for
a load-bearing statement. Otherwise it **PASSES** (list minor notes). Be harsh: a mediocre page
is a pass with notes, a wrong page is a fail.

## Output per page

`page` · `verdict` · `failed criteria` · for each problem: the claim, its locator, what the raw
text actually says, and the smallest fix.

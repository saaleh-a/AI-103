# Learning Studio: carried-forward learning

Recovered on 2026-09-20 from the saved conversation and named, read-only worktree
artifacts for **Ai-103 learning studio**, branch `saaleh-a-ai-103-learning-studio`,
session `57ecb9b9-0a35-41a6-8f3d-d7bf4b9c2c5a`.

The branch's committed tip matches this work's starting code. The studio changes
are uncommitted in its own worktree; they were not merged or modified here.
Direct session handoff failed twice, so this register uses saved history and
actual files. This is a synthesis of all recovered material decisions and
findings, not a claim that every source fact in its curriculum was re-audited.

## Binding user corrections

| Learning | Evidence | Consequence here |
| --- | --- | --- |
| Cover the entire supplied corpus, not a selected exam-cram subset. | User turn 48; original 265-file inventory reported by that session. | Dual coverage ledger: every meaningful corpus concept AND every official objective. |
| Teach engagingly and provide real hands-on experience. | User turn 48. | Each build connects teaching to an action, observation and changed requirement. |
| More cards with a new skin still look generic. | User turn 413, explicitly rejecting the earlier visual treatment. | Preserve the later engineering-field-station direction; content and working artifacts lead. |
| Hands-on primarily means guiding the learner through Azure Portal / Microsoft Foundry. | User turn 929. | Portal-first walkthroughs, not a pretend browser console. SDK-only steps explicitly transition to an editor. |
| Read -> checklist -> quiz remains a Learn clone. | User turn 7133 and the correction that followed. | Continuing projects own the front door; the syllabus remains reference. |
| Motion, Bklit and React Bits were requested to support the interface. | User turn 413 and studio direction contract. | Retain their semantic interaction lessons, not mandatory animation or dependencies in a static proving artifact. Production reuse remains subject to a useful role and reduced motion. |

## Adopted product and interaction decisions

1. **Six builds:** grounded support assistant; multi-agent case routing; document
   intake; voice assistant; visual content workflow; reliability review.
2. **Project continuity:** milestones have outcomes and evidence, not only topic
   names. Prior observations and safe resource-name breadcrumbs remain available.
3. **One next action:** resume unfinished work, address a relevant repair, retrieve
   taught material when due, then choose prerequisite-ready work. A longer session
   can continue fieldwork. Explain the recommendation and allow an alternative.
4. **Changed requirements:** after the baseline, change a policy, remove evidence,
   interrupt a workflow or change modality. Ask which component should change
   and what the learner would expect to observe.
5. **Synthetic starter materials:** original safe policies, cases, voice scripts,
   extraction contracts and evaluation fixtures. Clearly mark them synthetic.
6. **Portal guides:** environment, duration, cost, permissions, prerequisites,
   location, action, expected observation, troubleshooting, success evidence and
   cleanup. Never claim the app provisioned or inspected a resource.
7. **Code honesty:** do not invent portal buttons for SDK-only features. Portal
   setup may be followed by a source-backed editor/Cloud Shell exercise.
8. **Pacing:** one coherent teaching step, short-session stopping points, no
   countdown. Changing available energy does not lower intellectual difficulty.
9. **True resume:** preserve teaching position, configuration drafts, portal
   checkpoint, selected scenario alternative, field notes and repair context.
10. **Causal repair:** use the actual wrong alternative. Merely reading the repair
    neither erases a repair flag nor awards mastery.
11. **Practice eligibility:** teach before recall; explicitly label untaught exam
    questions diagnostic instead of treating them as mastery failures.
12. **Honest progress:** separate mapped sources, explored lessons, self-recorded
    fieldwork and assessed evidence. A diagram checkbox is not a deployment.
13. **Reference access:** searchable source library with explicit load failures and
    retry; original-source access does not replace authored instruction.
14. **Local privacy:** export/import the notebook without API keys. Resource names
    are bookmarks, not a discovered inventory. Never solicit credentials or
    customer data in field notes.
15. **Accessibility:** keyboard interaction, focus restoration, a quiet/focus mode
    with escape routes, 320px reflow, dark appearance, motion off by default and
    operating-system reduced-motion precedence.

## Curriculum and implementation findings

- The studio reports **65 authored units**, four typed content slices, all
  **265 sources mapped**, **65 portal guides** and **417 checkpoints**. Its
  README, curriculum schema, project map and handoff request support these
  structural claims. They are not proof that every objective is taught deeply.
- The four source slices are `foundations.ts`, `agents.ts`,
  `retrieval-content.ts` and `language-speech.ts`; retain their shared schema.
  Audit/reuse that authoring work before generating replacement content.
- `CourseUnit` already carries prerequisites, primary exam domain, source IDs,
  small teaching steps, local rehearsal, real-exercise relationship, portal
  walkthrough, application check, retrieval and customer transfer.
- Preserve historical topic IDs. A real cross-slice integration failure occurred
  when `chat-response-state` conflicted with `chat-responses`. The final reported
  correction used `chat-responses`; validate dangling prerequisites and cycles.
- Source mapping must account for introductions, assessments, summaries and
  transcripts without pretending that attaching a broad source teaches it.
- The six experience tracks/builds are not the five official exam domains.
  Topic-share weighting is a maintenance heuristic, not objective coverage.
- Practice promotion was made conservative: self-rated recall is not mastery,
  and immediate MCQ success does not justify durable mastery. The replacement
  adds explicit support level, item-family novelty and time-separated evidence.
- Preserve unknown historical IDs during migration; add an empty new notebook
  rather than deleting old evidence. Reject malformed imports transactionally.
- An unreadable save must not be overwritten with empty state. Blocked storage
  must be visible. Source fetch failures must remain retryable.
- Incompatible/unavailable dependency versions caused installation trouble.
  The studio regenerated a published-compatible lockfile rather than disabling
  TLS. Do not copy an unverified partial install or silently change production
  dependencies during a design task.
- Hash routes, relative asset paths and on-demand full source fetching matter
  for static GitHub Pages hosting. Corpus regeneration must not remount and lose
  a live lesson's state.

## Visual decisions and further lessons

The later direction is **engineering field station**, not the initial indigo card
dashboard: Geist, graphite navigation, cool mineral canvas, restrained green
actions, readable unboxed explanations, measured rules and modest corner radii.
The older `DESIGN.md` in that worktree was explicitly stale at the finish review.

The recovered desktop build screenshot shows that direction, the build outcome,
connected milestones, downloadable synthetic policy and cumulative field notebook.
Carry forward this vocabulary while reducing its many competing navigation
destinations and increasing default reading size. Charts must explain real data
and retain text equivalents; decorative motion is not evidence of engagement.

## Verification recovered, and its limits

The prior `browser-report.json` records:

- exact pause/reload/resume, teach-before-check and five-minute stopping;
- local valid/invalid configuration checks with synthetic-output labels;
- portal notes/checkpoints, prerequisite-aware project switching and fieldwork
  deferral without false completion;
- actual wrong-answer repair, without clearing the repair flag just for reading;
- all 265 source rows, explicit source-fetch failure and successful retry;
- malformed-import preservation, notebook export without keys, unreadable-save
  preservation and live corpus-refresh stability;
- navigation at 320px, no reported overflow/runtime errors, mobile Escape/focus
  restoration, dark appearance and reduced-motion precedence.

Those are **earlier-run reports**, not tests of this prototype. Synthetic browser
observations were labelled as test fixtures; no Azure subscription was used.
A final independent finish verdict was not recovered, so none is claimed.
This design runs its own applicable acceptance checks.

## Reconciliations with the current request

| Prior decision | Current resolution |
| --- | --- |
| Optional BYOK tutor remained available. | It is not part of the replacement core or a fallback for missing content. This prototype has no AI feature at all. |
| Portal-first real work. | Preserved. Account-free rehearsal is an explicitly different access path, not claimed live experience. |
| 65 units / 265 linked sources. | Reuse candidates; require meaningful-concept and objective-level audit before declaring the replacement complete. |
| Library-driven visual polish. | Preserve semantic step rails, useful visual evidence and the field-station vocabulary; no library solely for branding compliance. |
| Conservative labels. | Extend to an inspectable evidence ledger with supported/independent/delayed provenance; no immediate mastery promotion. |
| All studio work was in another uncommitted worktree. | Do not merge blindly or change it. Persist these learnings and identify candidates for deliberate later integration. |

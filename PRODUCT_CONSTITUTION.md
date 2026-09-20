# Product constitution: an AI-103 learning replacement

Status: design contract, established from the learner's request on 2026-09-20.
This is product authority, not a claim that the existing app already implements it.
`CLAUDE.md` remains the teaching constitution; this contract specifies its
non-AI product implementation.

## Thesis

Build a complete, source-grounded AI-103 learning environment that teaches,
repairs, rehearses and verifies knowledge without a runtime language model.
Its defining mechanism is a continuing Azure project supported by a versioned
network of authored learning units, diagnostic response patterns, portal
observations and evidence-sensitive routing.

## Learner, situation and capability promise

The learner needs both exam competence and professional architectural judgement.
Attention, working memory, initiation effort, sensory load and fatigue can vary
between sessions. The product must make participation easier without assuming
reduced ability, a particular sensory preference, or a medical treatment effect.

The capability promise is: "I can start without planning a study session, stop
without losing my place, understand why a solution works, distinguish it from
nearby choices, and demonstrate that understanding later."

## Replacement boundary

All significant skills in the selected official AI-103 outline must have in-product
teaching, worked examples, practice, repair, implementation practice when applicable,
retrieval and source references. Source links are optional verification routes.
They must not substitute for missing lessons or require the learner to browse Learn.

This does not replace Microsoft's credential issuance, exam registration,
accommodations process, live Azure service access or every Microsoft Learn subject.
The current design uses the official outline effective April 16, 2026, checked
September 20, 2026. Later outlines require an explicit coverage reconciliation.

## Core job and loop

Return to a useful saved point in a build -> see one manageable next action and
its reason -> learn a coherent mechanism -> work through an example -> use or
rehearse it in the build -> inspect what happened -> reconstruct or apply it ->
receive specific feedback -> repair the particular gap if needed -> record the
kind of evidence actually observed -> stop or continue -> retrieve a variant later.

Reading, checking, repairing and reviewing belong to one experience. The learner
does not have to assemble a lesson, a flashcard app, a chatbot and a notebook.

## Distinctive mechanism

The six outcome-led builds recovered from Learning Studio remain the experience's
backbone: grounded support, case routing, document intake, voice interaction,
visual content, and reliability review. They are not the five official exam
domains. The curriculum map is a reference beneath the work, not the front door.

Each unit contains a prerequisite graph, source anchors, worked examples,
assessment families, response-to-repair branches, support levels and completion
criteria. Rules choose the next step using this content and the learner's evidence.
Adaptation is explainable: "This choice suggests a context/training mix-up, so
here is the distinction we will work on."

Structured assessment includes causal reconstruction, evidence selection,
architecture assembly, code tracing, error localisation and scenario contrasts.
Multiple choice is useful but is not the whole learning model.

Open prose may be saved and compared with a rubric. Without a validated grader or
a human assessment, it is self-reported evidence, not an automatically verified
explanation. The interface must say so.

## Invariants

1. **No runtime AI dependency.** Every teaching, repair and assessment path works
   without a model, token, API key or metered inference. Optional learner-executed
   Azure fieldwork is distinct from the app's runtime.
2. **No delegated curriculum.** "Ask the AI" and "read this Learn page" cannot
   fill a coverage hole.
3. **Source integrity.** Preserve corpus files; author explanations and record
   exact supporting sources. Separate source conflict from editorial judgement.
4. **Teach before testing.** New material is taught first. Prior-knowledge
   diagnostics are labelled, optional and nonpunitive.
5. **No false mastery.** Reading, self-confidence, a hinted answer, repeated
   exposure, or one corrected answer cannot establish durable mastery.
6. **Reasoning matters.** A correct selection with an incorrect rationale routes
   to repair rather than receiving full credit.
7. **Interruption is normal.** Save the current position and unfinished response.
   Stopping never resets learning or creates a failure.
8. **Agency survives adaptation.** Explain recommendations and permit a safe
   alternative, earlier material, reference lookup or stopping.
9. **No shame economy.** No streak loss, debt count, speed judgement, coercive
   notifications, forced motion or gamified punishment.
10. **Coverage honesty.** Source counts, authored-topic counts, lesson completion,
    objective readiness and learner evidence are separate measures.
11. **Progress belongs to the learner.** Local-first, inspectable, exportable state;
    deliberate migration; explicit storage errors; no silent data erasure.
12. **Simulation honesty.** A local lab, preview clock or example learner record
    never masquerades as real cloud execution or earned mastery.

## Positive design principles

- Put the mechanism before the service name, then reconnect it to the architecture.
- Offer one recommended action, with alternatives available but visually secondary.
- Let users adjust presentation and session size independently of content difficulty.
- Make feedback specific enough to change the next attempt.
- Prefer calm, predictable interaction over novelty, praise or visual performance.
- Represent evidence with plain-language receipts rather than impressive-looking scores.

## Anti-principles

- A documentation reader with quizzes attached.
- A chatbot with an API-key setup step.
- A flashcard engine that treats recognition as understanding.
- A rigid "ADHD mode" that assumes all preferences are the same.
- A dashboard of percentages with no explanation of what was demonstrated.
- A deterministic engine that pretends to understand arbitrary prose.
- A complete-looking syllabus whose missing content is hidden behind links.

## Design alternatives

| ID | Approach | Decision |
| --- | --- | --- |
| A | Linear course reader with chapter-end quizzes | Reject as the primary model: repeats the current passive loop and leaves repair to the learner. Keep browseable reference access. |
| B | Retrieval-first drill app | Reject as the default: cannot teach a novice and encourages recognition scoring. Keep delayed review once teaching exists. |
| C | Continuing Azure builds with authored adaptive support | Adopt: project consequences, portal observations, teaching, diagnosis, repair and retrieval form one saved loop. |

## References: borrow and refuse

- **Bundled Microsoft Learn material:** borrow technical facts, terminology and
  source authority; do not inherit page order as pedagogy or copy its navigation.
- **Existing app:** keep source provenance, local-first progress, stable topic IDs
  and semantic controls. Rebuild the passive main loop; do not treat permissive
  mastery promotion as accepted product behaviour.
- **Learning Studio:** carry forward project-led work, portal-first guides,
  exact resume, field observations and the graphite/mineral/green visual direction.
  Treat its uncommitted 65-unit curriculum as an authoring candidate, not proven
  objective coverage. Do not resurrect the rejected read/checklist/quiz front door.
- **Teaching constitution:** preserve evidence, discrimination and transfer.
  Implement them through content contracts and rules instead of an LLM prompt.
- **AuDHD requirements:** respect the learner's stated needs; offer controls
  rather than making clinical assumptions or promising a health benefit.

## Success and rejection criteria

The binding gates are `design/QUALITY_STANDARD.md`. Reject a release if any core
learning step requires AI or Learn, if it loses the saved position, if unsupported
answers are presented as verified knowledge, or if any significant objective is
missing its required learning components.

Improvement hypotheses must be tested against the same tasks on Microsoft Learn:
initiation effort, resume accuracy, navigation burden, usefulness of repair,
delayed retrieval and transfer. Do not advertise comparative learning gains from
screenshots or the prototype alone.

## Current scope and non-goals

The current deliverable is the complete product design, a reusable execution
prompt, objective-level curriculum specification, and a working representative
prototype. It is not the completed course. Production content audit/expansion, a full
local coding sandbox, validated exam readiness, live-lab validation and migration
of real learner records require subsequent bounded implementation work.

Do not add social features, streaks, a marketplace, certification claims, a
replacement AI provider, or a generic authoring CMS to this design.

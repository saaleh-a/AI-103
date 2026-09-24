# AI-103: build, understand, remember

## Design outcome

An AI-free learning studio built around **six continuing Azure projects**. The
product supplies the teaching, worked examples, portal guidance, structured
diagnosis, repair and spaced retrieval that the learner would otherwise assemble
from Microsoft Learn, notes, a quiz app and an AI tutor.

The question on arrival is **"What is the next useful change to my build?"**, not
"Which page should I read?" The learner leaves with an explanation, a tested
decision, an observation or a clearly recorded blocker, and a saved next step.

This document specifies the complete replacement. The adjacent prototype
implements one representative milestone. Neither the prototype nor the prior
studio's content counts establishes full-course readiness.

Canonical constraints: `../PRODUCT_CONSTITUTION.md`.
Inherited findings: `LEARNING_STUDIO_LEARNINGS.md`.
Protected acceptance: `QUALITY_STANDARD.md`.

## 1. Experience architecture

### Six builds, one learning system

| Build | The useful thing being made | The decision that gives learning a purpose |
| --- | --- | --- |
| Grounded support assistant | An answer tied to evidence, with controlled actions | What belongs in instructions, retrieved context, model behaviour and human approval? |
| Case routing | A resumable multi-agent workflow | Which tasks are independent, which share context, and who may act next? |
| Document intake | An extraction-to-search pipeline | What should be extracted, how is uncertainty represented, and what becomes searchable? |
| Voice assistant | A traceable audio/language interaction | Which component transcribes, translates, redacts, reasons, synthesizes or handles interruption? |
| Visual content workflow | Grounded visual understanding plus controlled generation | Is the requirement to understand existing media, generate new media or edit it safely? |
| Reliability review | Evidence for changing and operating the other builds | What improved, which risk remains, and what would justify deployment? |

The projects connect: a synthetic support policy grounds the assistant, becomes
document-intake input, supplies voice interactions, and contributes cases to the
reliability review. Reuse the learner's own safe observations, not fabricated
success stories. Prerequisites may cross build boundaries without switching the
learner's active project.

### Primary navigation

**Your build / Curriculum / Evidence.** Reading preferences and export are
secondary utilities. In production, Source library, Compare and Exam practice
are discoverable within the relevant workspace/reference surface rather than
nine equally prominent global destinations.

- **Your build:** current outcome, one next task, why it was selected, saved point,
  safe materials and field notebook.
- **Curriculum:** searchable concepts, official objectives and source coverage.
  It is a map and an escape route, not the main instructional sequence.
- **Evidence:** what was actually demonstrated, with support, time, source and
  modality; upcoming review; no opaque mastery percentage.

### Next-action precedence

1. Resume the exact current response/checkpoint. Offer a smaller stopping boundary
   when the learner changes available time.
2. Repair an unresolved prerequisite or decision boundary relevant to the build.
3. Retrieve previously taught material that is due, capped to a manageable session.
4. Continue ready fieldwork when setup, time and learner choice permit.
5. Teach the next prerequisite-ready concept needed by the selected milestone.
6. If all authored work is exhausted, say so; do not invent completion or tasks.

Tie-break by safety/dependency, then relevance to the current build, then due
date. Include a plain-language "Why this?" explanation. Never redirect a fresh
learner straight into untaught assessment.

## 2. The defining loop

Example milestone: **make a support answer traceable to a policy**.

| State | Primary material | Learner action | Consequence |
| --- | --- | --- | --- |
| Resume/brief | Project outcome, a missing capability, saved point | Start/resume one task | Exact checkpoint opens |
| Understand | One mechanism in about 60-120 words; one concrete example | Continue or ask for the simpler authored explanation | Exposure recorded, not mastery |
| Reconstruct | Accessible ordering or architecture task | Build the data flow using buttons/keyboard | Specific feedback; hints tagged as support |
| Try and observe | Portal-first steps, or clearly synthetic rehearsal | Change one thing and record an observation/blocker | Field note, not claimed service verification |
| Decide and explain | A scenario plus a structured rationale | Select the decision and the load-bearing reason | Both are evaluated, not just the chosen product |
| Repair | The exact misconception implicated by the response | Study a contrast, try a different case, or stop | Coached evidence remains coached |
| Change the requirement | A nearby scenario with one decisive change | Revise the plan and explain the changed boundary | Transfer evidence only within this assessed task |
| Receipt | Honest evidence and what remains unproven | Finish for now or continue deliberately | Saved boundary; later retrieval scheduled |
| Retrieve later | A different, previously unseen variant | Reconstruct/apply without seeing the explanation first | Time-separated evidence, never automatic universal mastery |

Each screen has one dominant action. Back, reference, help and stop remain
available. No auto-advance. "I don't know" is an instructional route, not a scored
failure. After two unsuccessful assisted attempts, reveal a worked case and
offer a safe stop or supported continuation; never trap the learner in a loop.

## 3. AuDHD-specific interaction contract

These are adjustable supports, not claims about every autistic or ADHD learner.

| Friction | Product response | Acceptance |
| --- | --- | --- |
| Starting requires planning | One named task, its purpose and a visible stopping boundary | Start/resume in one action from the workbench |
| Working-memory pressure | Keep the problem, relevant artifact and "what changes" close together | No need to remember a prompt across unrelated pages |
| Too much text at once | Small mechanism-first steps with depth/reference available | Core explanation is coherent on its own; depth is not removed |
| Losing context after interruption | Save exact step, response draft, selected reason and notes | Reload restores them, without reopening instructions from the beginning |
| Uncertain energy/time | Short/standard/fieldwork-sized stopping boundaries | No timer, penalty or reduction in intellectual level |
| Sensory overload | Motion off, quiet view, adjustable reading size, explicit light/dark | Preferences remain reachable while quiet view is on |
| Error threat or perfectionism | Specific neutral feedback; "not sure" and stopping are legitimate | No red score theatre, streak loss or judgement about speed |
| Interest and relevance | Continuing build, visible consequence, changed-requirement challenge | Engagement comes from agency and outcomes, not animation |
| Exploration/need for control | Browse prerequisites, source, build map and alternate explanation | Recommendation is not an irreversible lock |
| Excessive note-taking | Small observation prompts and reusable resource-name breadcrumbs | No mandatory essay before continuing; optional detail can be expanded |

Require semantic headings, associated labels, native keyboard controls,
visible focus, status announcements, non-colour feedback, readable contrast,
44px interaction targets, 320px reflow and enlarged-text support. Ordering
activities must have button alternatives to dragging.

No countdowns, forced audio, confetti, unreadable "focus" icons, attention-grabbing
idle effects, fabricated urgency or automatic notification permission requests.

## 4. Content is the teaching engine

Runtime adaptation is a pure rule system over reviewed content, not a language
model hidden behind an API. Each unit has:

```text
Unit
  stableId, contentVersion, title, buildMilestoneIds
  prerequisites, officialObjectiveIds, meaningfulCorpusConceptIds
  sources[{sourceId, exactSection, authority, reviewedAt, conflictNote}]
  teachingSteps[{problem, mechanism, example, optionalDepth, architecture}]
  workedExamples[{input, process, output, why, limitation}]
  activities[{familyId, variantId, format, taughtConcepts, responseSchema,
              answerKey, reasonKey, feedbackByResponse, supportOptions}]
  repairBranches[{responsePattern, tentativeMisconception, contrast,
                  workedCase, freshRecheckId, stopAlternative}]
  fieldwork{environment, prerequisites, costs, version, steps,
            expectedObservations, blockers, evidencePrompt, cleanup}
  localRehearsal{syntheticInputs, executableRulesOrFixture, labelledOutput}
  retrieval{variantFamilies, eligibility, spacingPolicy}
  transfer{changedRequirements, customerDiscovery, tradeOff, rubric}
  completionRequirements, accessibilityAlternatives
```

Extend rather than discard the studio's `CourseUnit` schema. Its 65 units are
authoring candidates to audit and enrich, not disposable text and not accepted
full coverage.

### Assessment formats and their limits

- **Decision + reason:** catches a correct product choice supported by a wrong
  mechanism. It remains structured selection, not proof of a free explanation.
- **Causal reconstruction:** order and connect a data/control path; verify edges
  as well as labels. Keyboard buttons are first-class.
- **Code trace / error location:** use reviewed fixtures and bounded execution
  where possible; ask for outputs or identify the causal faulty line.
- **Configuration construction:** validate typed fields against a reviewed schema;
  explain why a choice cannot meet the stated requirement.
- **Contrastive scenario:** change one load-bearing condition, not just names.
- **Teach-back:** save text/audio only with deliberate permission; a rubric-based
  self-check remains self-reported. Do not invent a semantic score.
- **Portal observation:** learner-reported evidence; include the surface and what
  changed. The app does not observe an Azure subscription.

## 5. Evidence and mastery

An append-only event records:

```text
eventId, unitId, contentVersion, activityFamilyId, variantId,
response, rationale, result, assistance, evidenceKind,
firstPresentedAt, committedAt, previousTeachingAt,
sessionId, simulation, sourceVersion
```

`assistance` distinguishes none, hint, worked example, solution revealed and
self-report. `evidenceKind` distinguishes structured assessment, reconstruction,
local execution, learner-reported Azure observation and delayed retrieval.
Do not store keys, tokens or confidential documents.

### Promotion rules

- **Introduced:** relevant teaching encountered.
- **Understood:** a reviewed causal/reconstruction task is correct; identify the
  limited format and whether support was used.
- **Retrievable:** later independent retrieval of a different variant.
- **Discriminable:** correct decisions AND reasons across close alternatives.
- **Applicable:** appropriately varied scenario or executable/configuration task.
- **Mastered:** all significant gates for that unit, including architecture and
  code when relevant, plus retention across separated sessions/variants.
- **Needs repair:** conflicting evidence requires a targeted next step. Previous
  achievements remain visible rather than being erased.

Proposed initial retention policy: independent evidence after at least 24 hours
and again after at least seven days, across distinct item families; calibrate
with learner evidence. These intervals are product defaults, not a clinical
prescription or proof that two successes guarantee mastery.

One correct answer, repeated self-rating, showing an answer, reading a repair,
or an imported label cannot satisfy the gates. Familiar items may remain useful
practice but cannot count as unseen transfer. Time spent answering is not a grade.

The prototype deliberately **never awards "mastered"**. It shows the specific
evidence it can gather and the important evidence it cannot establish.

## 6. Portal-first hands-on work

Every meaningful practical unit provides a self-contained guide: prepare, act,
observe, vary, explain and clean up. A link to "launch exercise" is insufficient.

Before opening the portal, show account/role/region/model prerequisites, billable
resources, shared-resource cautions, synthetic inputs, estimated fieldwork size
and a return checkpoint. No automatic resource creation, spending or permissions.

At each step show:

1. **Where:** verified product/surface and navigation, with version/date.
2. **Do:** one concrete action.
3. **Look for:** observable result, not a statement that it happened.
4. **If different:** probable causes and safe recovery; record a blocker.
5. **Save:** optional short observation and safe resource-name breadcrumb.

End with a controlled variation, a before/after observation, an explicit limitation
and cleanup restricted to the learner's isolated resources. A skip/blocker must
not tick a completed deployment or damage conceptual progress.

The bundled exercise 76 says to launch an exercise but does not contain its full
instructions. That is a **content acquisition gap**: the finished replacement
must acquire/review permitted instructions and embed an original complete guide.
The prototype does not pretend that the scraped launch stub is a full lab.

The prototype's fieldwork preparation is grounded in sources 22/23/239 and offers
a clearly labelled synthetic rehearsal. Its portal navigation is a design
walkthrough, not live-validated on a learner subscription. Full live setup,
permissions and service-version validation remain release gates.

## 7. Complete curriculum specification

Two ledgers are required:

- **Corpus ledger:** all 265 files classified as substantive teaching, exercise,
  assessment, overview, summary or supporting transcript; each meaningful concept
  linked to authored units. Broad-source attachment does not count as teaching.
- **Official-objective ledger:** every significant objective linked to teaching,
  an example, assessment families, repair, practical experience when relevant,
  retrieval, transfer and reviewed sources.

The requirement is their **union**, not whichever list is smaller. Neither raw
file counts nor the legacy topic-share report is an acceptable completeness test.
All rows below are specification, not claims of shipped coverage.

Official source: [AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103),
effective **2026-04-16**, checked **2026-09-20**. The following 64 compact entries
paraphrase its objective bullets; the official wording remains authoritative.

### Plan and manage an Azure AI solution: 25-30%

| ID | Required capability | Primary build |
| --- | --- | --- |
| P01 | Select LLM, small, multimodal and tool capabilities for the task | Support |
| P02 | Select generation, grounding, vector, workflow and multimodal services | Support |
| P03 | Select retrieval/indexing methods | Support |
| P04 | Select agent memory, tool and knowledge integrations | Case routing |
| P05 | Design infrastructure for apps and agents | Support |
| P06 | Choose deployment options | Support |
| P07 | Configure model/agent deployments | Support |
| P08 | Integrate Foundry projects with CI/CD | Reliability |
| P09 | Manage quotas, scaling, rate limits and costs | Reliability |
| P10 | Monitor performance, drift, safety and grounding | Reliability |
| P11 | Monitor ingestion, index health and relevance | Document intake |
| P12 | Configure identity, private networking, keyless access and roles | Reliability |
| P13 | Configure safety filters, guardrails, risk detection and moderation | Reliability |
| P14 | Apply evaluation, safety and explanation instrumentation | Reliability |
| P15 | Audit with tracing, provenance and approvals | Reliability |
| P16 | Govern agent oversight, constraints and tool access | Case routing |

### Implement generative AI and agentic solutions: 30-35%

| ID | Required capability | Primary build |
| --- | --- | --- |
| G01 | Deploy/consume language, code and multimodal models | Support |
| G02 | Implement application RAG | Support |
| G03 | Design workflows, tools and multistep pipelines | Case routing |
| G04 | Evaluate fabrication, relevance, quality and safety | Reliability |
| G05 | Integrate workflows using SDKs/connectors | Case routing |
| G06 | Connect an application to a Foundry project | Support |
| G07 | Define agent roles, goals, conversation tracking and tool schemas | Support |
| G08 | Integrate retrieval, functions and conversation memory | Support |
| G09 | Integrate APIs, knowledge, search, content understanding and custom tools | Document intake |
| G10 | Orchestrate multiple agents | Case routing |
| G11 | Implement safeguarded autonomous/semi-autonomous approval flows | Case routing |
| G12 | Monitor/evaluate deployed agents and analyse errors | Reliability |
| G13 | Tune prompts and generation parameters | Reliability |
| G14 | Implement reflection, reasoning-process evaluation and self-critique | Reliability |
| G15 | Trace token use, safety and latency | Reliability |
| G16 | Orchestrate multiple models, flows and model/rules combinations | Case routing |

G14 is taught through documented mechanisms and observable traces/evaluation
artifacts; the product must not solicit private hidden chain-of-thought.

### Implement computer vision solutions: 10-15%

| ID | Required capability | Primary build |
| --- | --- | --- |
| V01 | Generate images from prompts/reference media | Visual |
| V02 | Generate video from prompts/reference media | Visual |
| V03 | Configure inpainting, masks and prompt-led image edits | Visual |
| V04 | Edit generated video workflows | Visual |
| V05 | Select generation/editing controls | Visual |
| V06 | Analyse visual context with multimodal models | Visual |
| V07 | Produce short/detailed captions for one/multiple images | Visual |
| V08 | Ground visual question-answering in evidence | Visual |
| V09 | Generate accessible alt text and extended descriptions | Visual |
| V10 | Extract visual characteristics with Content Understanding | Document intake |
| V11 | Analyse/interpret video segments | Visual |
| V12 | Configure single-task and pro-mode understanding pipelines | Document intake |
| V13 | Identify objects, components and regions | Visual |
| V14 | Classify unsafe/disallowed visual content | Reliability |
| V15 | Address indirect prompt injection through image text | Reliability |
| V16 | Apply visual policies, watermarking and prohibited-content rules | Visual |

### Implement text analysis solutions: 10-15%

| ID | Required capability | Primary build |
| --- | --- | --- |
| T01 | Extract entities, topics, summaries and structured JSON | Document intake |
| T02 | Detect sentiment, tone, safety issues and sensitive content | Voice |
| T03 | Translate text using Translator or model-based flows | Voice |
| T04 | Customize domain summarization/extraction | Document intake |
| T05 | Implement agentic speech-to-text/text-to-speech workflows | Voice |
| T06 | Integrate speech modality and custom speech models | Voice |
| T07 | Reason over audio inputs | Voice |
| T08 | Translate speech using models and Foundry Tools | Voice |

### Implement information extraction solutions: 10-15%

| ID | Required capability | Primary build |
| --- | --- | --- |
| I01 | Ingest/index documents, images, audio and video | Document intake |
| I02 | Configure semantic, hybrid and vector retrieval | Support |
| I03 | Enrich text, image and layout using built-in/custom skills | Document intake |
| I04 | Configure document/OCR RAG ingestion | Document intake |
| I05 | Connect retrieval to workflows/agent tools | Support |
| I06 | Combine OCR, layout and field extraction | Document intake |
| I07 | Produce grounded representations for agents/RAG | Document intake |
| I08 | Generate structured/Markdown output through analyzers | Document intake |

High-risk content-audit candidates include operations/security/CI/CD, current
vision editing and responsible multimodal AI. These must be checked against
actual substantive corpus passages; their presence in a study-guide list does
not establish teaching coverage.

### Per-objective release record

Each ID needs `sources`, `taughtBy`, `workedExample`, `assessmentFamilies`,
`repairBranches`, `practiceOrReasonNotApplicable`, `delayedVariants`, `transfer`,
`reviewer`, `reviewedVersion`, `status` and `knownGaps`. Allowed statuses:
unmapped, source-gap, authoring, review, ready. Readiness requires every mandatory
field; there is no "ready because an AI can answer it" state.

## 8. State, persistence and recovery

Separate:

- authored/versioned content and objective/source ledger;
- immutable learning events;
- derived mastery/retrieval state;
- the current build/session/response cursor;
- portal observations and safe resource breadcrumbs;
- presentation preferences.

The production adapter must preserve `ai103-learner-state` and stable historical
IDs, take an exportable snapshot before migration, validate imports without
partially applying them, preserve unknown historical records, and distinguish
legacy labels from new verified evidence.

The design prototype uses **`ai103-replacement-prototype-v1` only**. It never reads
or writes the legacy app's state. It stores drafts and notes locally, exports
its own JSON and reports blocked/full/corrupt storage. Unreadable bytes are retained
until an explicit reset; a temporary session must not overwrite them.

Use unique attempt IDs and stage guards for double submission. Inject time into
the pure engine for tests. Never alter the device clock or real schedule to
demonstrate tomorrow; a review preview is a separate, visibly simulated state.

## 9. Visual and interaction system

Carry forward Learning Studio's engineering field station:

- Geist, locally bundled with its OFL licence; body 16px, line-height about 1.7,
  measure 65ch. Reading enlargement changes content, not just browser zoom.
- Cool mineral `#f5f7f6`, ink `#202c27`, graphite rail `#202d27`, green action
  `#326b59`, muted `#58665e`, border `#dce3de`, support surface `#e6efe9`.
- Dark appearance uses the studio's dark mineral/green roles, not a black/purple
  AI dashboard.
- Desktop: 224px navigation, restrained workspace bar, broad reading/work plane,
  narrow contextual build path. Mobile: text navigation wraps, the path becomes
  a compact optional disclosure, and the current task remains first.
- One filled action per decision surface. Secondary actions are outline/text.
  Reading is primarily unboxed; panels denote a different artifact or context.
- 44px controls, visible focus, text plus shape for selected/correct/support states,
  native radio groups, native disclosure and keyboard ordering controls.
- No automatic motion, decorative charts, hero metrics or generic icon-card grid.
  Stable layout and explicit state changes are the signature, not a transition.

The standalone prototype is intentionally dependency-free. This does not reverse
the studio's approved use of Motion/Bklit/React Bits in the production app; reuse
them only for useful, accessible behaviour. The prototype is design evidence,
not a second production framework.

## 10. Prototype hypothesis and boundaries

**Hypothesis:** a continuing build with short authored teaching, meaningful local
reconstruction, portal-first preparation, consequence-oriented checks and saved
evidence offers a substantially better study loop than reading a course page
and answering an isolated quiz.

**Support:** a learner can explain what the next change is for, recover from a
specific misconception, identify an unsupported answer, stop/resume mid-response,
and distinguish rehearsal from real observation.

**Falsifier:** the interface still feels like a chapter quiz, repair is generic,
the project has no consequences, or a learner cannot tell what was actually proven.

**Real in the prototype:** content, state transitions, draft persistence,
decision/reason diagnosis, reconstruction validation, synthetic fixtures, notes,
assistance labels, delayed-review eligibility and simulation isolation.

**Explicitly illustrative:** the one-milestone starting context and local service
responses. No connected subscription, executed Azure calls, verified deployment,
complete curriculum or independently established mastery.

## 11. Expansion order and acceptance

1. Prove the defined slice and the strongest failure cases in `QUALITY_STANDARD`.
2. Reconcile/import the studio's 65 unit candidates deliberately, preserving IDs
   and authored source relationships; audit every substantive source and all 64
   current official objective records.
3. Build one complete grounded-support project, including prerequisite teaching,
   full in-product portal guides, authentic local code/configuration fixtures,
   diverse assessment families and delayed variants.
4. Expand the other five builds using the same reviewed contracts. Cross-reference
   shared concepts; do not re-teach as disconnected duplicates.
5. Add the versioned migration, source library, robust storage/export, offline
   asset/content packaging and explicit update notification.
6. Validate portal guides on the intended product versions, without recording
   secrets; keep service availability/cost caveats current.
7. Conduct learner evaluation before claiming superiority or exam readiness.

Production completion requires every significant corpus concept and current
official objective ready; all core paths AI-free and self-contained; zero
false-mastery shortcuts; real accessibility/storage recovery evidence; and a
reviewed set of local/practical tasks with honest limits.

## 12. Improvement measurement

Compare equivalent tasks, not page screenshots:

- time/number of decisions to begin a useful task;
- interruption recovery without rereading completed content;
- correct boundary selection and reason, including tempting near-misses;
- success on an unseen variant after intervening topics/time;
- ability to predict/explain a changed build requirement;
- learner-rated cognitive effort and autonomy, with no diagnosis inferred;
- observation quality and ability to distinguish simulated from live evidence.

Use a small counterbalanced learner evaluation and record limitations; no invented
percentages, pass guarantees or clinical efficacy claims. The prototype can
demonstrate mechanics and usability, not prove durable learning gains.

## Decisions and rejected directions

- Adopt project-led work from Learning Studio; reject a new card-based lesson
  catalogue, even if the text is more polished.
- Keep portal-first fieldwork; reject fake SDK execution and hallucinated portal
  navigation. Missing lab instructions are a content gap, not an external-link fix.
- Use deterministic structured assessment; reject model grading and keyword
  matching of arbitrary prose.
- Keep state isolated for design work; reject blind merging of a large uncommitted
  sibling worktree.
- Use a standalone, locally bundled prototype to make zero-runtime-service
  dependence observable; production remains in the existing React app.

## Source notes

Prototype teaching draws on corpus 239 (RAG), 19 (combining optimization),
95 (fine-tuning), 22 (data sources) and 23 (retrieval), with 76 identifying the
fieldwork relationship. These are source IDs, not invented lesson counts.

Source 239 describes grounding in unusually absolute terms; source 19 explains
the dependence on retrieval/index quality. The design's conservative synthesis
does not promise that RAG eliminates fabrication. Source review must preserve
this distinction rather than repeat an absolute guarantee.

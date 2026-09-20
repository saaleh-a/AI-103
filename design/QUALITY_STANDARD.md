# Protected acceptance contract

Established before prototype implementation, 2026-09-20. Changing a gate requires
an explicit product decision, not an attempt to make a candidate pass.
The reviewer may reject the prompt, design or prototype independently.

## Prompt gates

| ID | Reject if | Evidence surface |
| --- | --- | --- |
| P1 | A cold executor needs hidden conversation context to identify the scope, inputs, output or stop condition. | `DESIGN_PROMPT.md` |
| P2 | No-AI is ambiguous, or authorship tools are confused with runtime dependencies. | Prompt and dependency/request inspection |
| P3 | Instructions allow destructive progress migration, publishing, or corpus changes without appropriate authority. | Prompt and changed-file inspection |
| P4 | The generator may weaken its own evaluator, or a prototype is called a finished course. | Prompt, fixed gates and handoff |

## Complete-design gates

| ID | Reject if | Evidence surface |
| --- | --- | --- |
| D1 | A significant official objective is absent from the curriculum specification. | Objective ledger against dated official outline |
| D2 | The main loop is only reading plus MCQs, a chat wrapper or a flashcard app. | Loop, activity contracts and prototype |
| D3 | "AI-free" leaves instruction, repair or grading dependent on an LLM. | Architecture and every core transition |
| D4 | AuDHD tailoring is only visual quietness or lower difficulty. | Initiation, working-memory, stopping/resume, sensory and agency contracts |
| D5 | Arbitrary prose, self-confidence or immediate corrections are represented as verified mastery. | Evidence model and promotion rules |
| D6 | Coverage, source freshness, migration, missing content or simulation limits are hidden. | Release gates and state/content model |
| D7 | Comparative learning gains are asserted without measurement. | Success criteria and handoff |
| D8 | The design discards the Learning Studio project-led correction or substitutes a fake console for portal-first fieldwork. | Carry-forward register, six-build model and fieldwork contract |

## Working-slice gates

| ID | Reject if | Evidence surface |
| --- | --- | --- |
| S1 | Any core step needs an account, AI key or external request. | Complete browser flow with non-local network blocked |
| S2 | A new learner is tested before receiving the relevant teaching. | Fresh-state flow and engine tests |
| S3 | A right choice with a wrong reason receives independent-success credit. | Boundary-case test and browser response |
| S4 | "I don't know" records a failure or traps the learner in repeated questions. | State assertions and repair/stop path |
| S5 | Immediate corrected answers count as retention or mastery. | Evidence assertions and visible receipt |
| S6 | Pause/reload loses the current step or in-progress response. | Browser reload and saved-state readback |
| S7 | Review simulation writes earned evidence or changes the real due date. | Stored-state comparison before/after preview |
| S8 | A prototype action reads/writes legacy learner state. | Storage keys, legacy sentinel preservation |
| S9 | Keyboard users cannot complete ordering/check/repair, or essential feedback is colour-only. | Keyboard run and semantic inspection |
| S10 | A 360px viewport or enlarged reading mode requires page-level horizontal scrolling. | Browser geometry and screenshot |
| S11 | Corrupt or blocked storage is silently erased, ignored or called saved. | Invalid-state and blocked-storage tests |
| S12 | Duplicate submission grants duplicate evidence, or a not-yet-due review is treated as delayed retention. | Pure-engine tests |
| S13 | A prototype screen implies the whole curriculum is playable or exam readiness is verified. | Curriculum, evidence and completion screens |
| S14 | Fieldwork is called verified deployment, rehearsal is presented as live output, or missing permission/account is treated as learning failure. | Fieldwork mode, evidence labels and saved notes |

## Soft quality questions

Is the next useful action obvious? Does the page explain why the current task
matters? Is repair more useful than showing the correct answer? Can the learner
stop without negotiating with the product? Is the UI visually coherent without
depending on animation, celebratory copy or a dashboard of scores?

## Bounded verification

Use one batched desktop/mobile inspection, fix confirmed defects coherently, then
one confirmation round. Run executable checks again when a fix changes behaviour.
Use one independent review, with a targeted follow-up for blockers if needed.
No score average can conceal a failed hard gate.

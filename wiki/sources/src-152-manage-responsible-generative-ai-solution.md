---
title: "Manage a responsible generative AI solution"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Covers prerelease reviews, phased release, incident response, rollback, blocking, feedback, and telemetry."
area: responsible-ai
source_ids: [SRC-152]
objectives: [P10, P13, P15]
tags: [responsible-ai, operations, telemetry, incident-response]
aliases: ["SRC-152"]
source_kind: learn-unit
module: "Implement a responsible generative AI solution in Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "6 of 9"
presenters: []
raw_file: "152-Manage a responsible generative AI solution - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/responsible-ai-studio/6-operate-responsibly"
ingest_depth: full
---
# Manage a responsible generative AI solution

*learn-unit · Implement a responsible generative AI solution in Microsoft Foundry · unit 6 of 9 · SRC-152*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-152 |
| Raw file | 152-Manage a responsible generative AI solution - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Implement a responsible generative AI solution in Microsoft Foundry |
| Unit / episode | 6 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/responsible-ai-studio/6-operate-responsibly |
| Teaching content | L212–233 of 263 |
| Content length | ~297 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Management begins after harms have been mapped, measured, and mitigated and before release. (SRC-152 L216) The source recommends prerelease compliance reviews and operational plans. (SRC-152 L217–225) Responsible operation includes phased delivery, incident response, rollback, harmful-response blocking, misuse blocking, feedback, and privacy-compliant telemetry. (SRC-152 L225–233)

## Key claims

- Before release, teams should identify compliance requirements and provide review opportunities for appropriate teams. (SRC-152 L217–218)
- Common compliance reviews include legal, privacy, security, and accessibility. (SRC-152 L219–223)
- Phased delivery releases first to a restricted user group to gather feedback and find problems. (SRC-152 L225)
- Incident response and rollback plans should be prepared before release. (SRC-152 L226–227)
- The solution should support immediate blocking of harmful responses and blocking of abusive users, applications, or client IP addresses. (SRC-152 L228–229)
- Users should be able to report inaccurate, incomplete, harmful, offensive, or otherwise problematic generated content. (SRC-152 L230–231)
- Telemetry should identify satisfaction, functional gaps, and usability challenges while respecting privacy obligations. (SRC-152 L232–233)

## How it works

This unit shifts from design-time safety to operational readiness. (SRC-152 L216–217) It first puts the system and documentation through compliance review, then requires release mechanics that make problems discoverable, blockable, and reversible. (SRC-152 L217–233)

## Code and API patterns

Not covered by this source.

## Key terms

- **Phased delivery plan** — restricted initial release for feedback and issue discovery. (SRC-152 L225)
- **Incident response plan** — a plan with response-time estimates for unanticipated incidents. (SRC-152 L226)
- **Rollback plan** — steps to revert the solution after an incident. (SRC-152 L227)
- **Telemetry** — data for satisfaction, functional gaps, and usability challenges under privacy constraints. (SRC-152 L232–233)

## Decision boundaries and exam cues

- **Inference:** Choose management when a scenario is about prerelease reviews, rollout, incident response, feedback, telemetry, or operations. (SRC-152 L217–233)
- **Inference:** Choose mitigation when a scenario is about reducing harms at solution layers before release. (SRC-156 L217–240)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- Telemetry is required for operations, but the source constrains it by privacy laws and organizational privacy commitments. (SRC-152 L232–233)

## Relation to other sources

- [[src-182-plan-responsible-generative-ai-solution]] names management as the final stage. (SRC-182 L17)
- [[src-170-module-assessment-implement-responsible-generative-ai-solution-microsoft-foundry]] asks why phased delivery is useful. (SRC-170 L226–229)
- [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6]] ties management to accountability, monitoring, and looping back. (SRC-106 L282–305)

## Connections

- [[responsible-ai-lifecycle]] — manage stage.
- [[observability-and-tracing]] — telemetry supports operational visibility.
- [[solution-engineering-transfer]] — compliance and operations map to customer governance.
- *Module units:* [[src-112-introduction-implement-responsible-generative-ai-solution-microsoft-foundry|1 Introduction]] · [[src-182-plan-responsible-generative-ai-solution|2 Plan a responsible generative AI solution]] · [[src-153-map-potential-harms|3 Map potential harms]] · [[src-154-measure-potential-harms|4 Measure potential harms]] · [[src-156-mitigate-potential-harms|5 Mitigate potential harms]] · [[src-57-exercise-apply-guardrails-prevent-output-harmful-content|7 Exercise - Apply guardrails to prevent the output of harmful content]] · [[src-170-module-assessment-implement-responsible-generative-ai-solution-microsoft-foundry|8 Module assessment]] · [[src-211-summary-implement-responsible-generative-ai-solution-microsoft-foundry|9 Summary]] · [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6|episode 6]]

## Open questions

- The source does not specify a telemetry service or incident-management tool. (SRC-152 L226–233)

## Sources

- SRC-152 — raw file: [[152-Manage a responsible generative AI solution - Training - Microsoft Learn]]

---
title: "Map potential harms"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains identifying, prioritizing, testing, verifying, documenting, and sharing potential harms."
area: responsible-ai
source_ids: [SRC-153]
objectives: [P13, P14]
tags: [responsible-ai, harm-mapping, red-team]
aliases: ["SRC-153"]
source_kind: learn-unit
module: "Implement a responsible generative AI solution in Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "3 of 9"
presenters: []
raw_file: "153-Map potential harms - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/responsible-ai-studio/3-identify-harms"
ingest_depth: full
---
# Map potential harms

*learn-unit · Implement a responsible generative AI solution in Microsoft Foundry · unit 3 of 9 · SRC-153*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-153 |
| Raw file | 153-Map potential harms - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Implement a responsible generative AI solution in Microsoft Foundry |
| Unit / episode | 3 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/responsible-ai-studio/3-identify-harms |
| Teaching content | L212–244 of 274 |
| Content length | ~760 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Mapping is the first responsible generative AI stage. (SRC-153 L216) The stage identifies harms, prioritizes them, tests and verifies prioritized harms, and documents and shares verified harms. (SRC-153 L217–222) The source emphasizes services, models, fine-tuning, grounding data, documentation, impact assessment, and red-team testing as inputs to harm discovery. (SRC-153 L224–229; SRC-153 L237–242)

## Key claims

- Relevant harms depend on services, models, fine-tuning, and grounding data. (SRC-153 L224)
- Common harms include offensive or discriminatory content, factual inaccuracies, and support for illegal or unethical behavior. (SRC-153 L225–227)
- Builders should consult documentation such as Azure OpenAI transparency notes and model system cards. (SRC-153 L228)
- The Microsoft Responsible AI Impact Assessment Guide and template can help document harms. (SRC-153 L229)
- Harms should be prioritized by likelihood and impact, considering intended use and potential misuse. (SRC-153 L231–236)
- Red-team testing deliberately probes for weaknesses and attempts to produce harmful results. (SRC-153 L237–242)
- Verified harms should be documented, shared, maintained, and extended when new harms are found. (SRC-153 L244)

## How it works

Mapping starts by identifying the harm types relevant to the planned solution. (SRC-153 L216–229) Prioritization then weighs likelihood against impact, and the source's kitchen-copilot example shows that severe harm and frequent harm can differ. (SRC-153 L231–236) Testing verifies whether the prioritized harms actually occur and under what conditions, often through red teaming. (SRC-153 L237–242) The mapped harms become a maintained stakeholder artifact. (SRC-153 L244)

## Code and API patterns

Not covered by this source.

## Key terms

- **Potential harm** — a harmful output risk such as discriminatory, inaccurate, illegal, or unethical content. (SRC-153 L224–227)
- **Red-team testing** — deliberate probing to produce harmful results. (SRC-153 L238–240)
- **Impact assessment** — a recommended guide and template for documenting harms. (SRC-153 L229)

## Decision boundaries and exam cues

- **Inference:** Choose mapping when the task is to discover, prioritize, or verify possible harms before mitigation. (SRC-153 L216–244)
- **Inference:** Choose measurement when prompts are run and outputs are categorized against criteria. (SRC-154 L14–17)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says prioritization can be subjective and may require policy or legal experts. (SRC-153 L232–236)
- External documentation and templates are referenced but not included in the capture. (SRC-153 L228–229; SRC-153 L242)

## Relation to other sources

- [[src-182-plan-responsible-generative-ai-solution]] names mapping as stage one. (SRC-182 L14)
- [[src-154-measure-potential-harms]] uses mapped harms as test targets. (SRC-154 L12–17)
- [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6]] describes mapping as generating checks and to-dos. (SRC-106 L31–47)

## Connections

- [[responsible-ai-lifecycle]] — mapping is the first stage.
- [[model-and-app-evaluation]] — red-team tests can become evaluation cases.
- [[prompt-injection-and-jailbreaks]] — adversarial probing overlaps with misuse discovery.
- *Module units:* [[src-112-introduction-implement-responsible-generative-ai-solution-microsoft-foundry|1 Introduction]] · [[src-182-plan-responsible-generative-ai-solution|2 Plan a responsible generative AI solution]] · [[src-154-measure-potential-harms|4 Measure potential harms]] · [[src-156-mitigate-potential-harms|5 Mitigate potential harms]] · [[src-152-manage-responsible-generative-ai-solution|6 Manage a responsible generative AI solution]] · [[src-57-exercise-apply-guardrails-prevent-output-harmful-content|7 Exercise - Apply guardrails to prevent the output of harmful content]] · [[src-170-module-assessment-implement-responsible-generative-ai-solution-microsoft-foundry|8 Module assessment]] · [[src-211-summary-implement-responsible-generative-ai-solution-microsoft-foundry|9 Summary]] · [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6|episode 6]]

## Open questions

- The source does not give a numeric likelihood-impact scoring rubric. (SRC-153 L231–236)

## Sources

- SRC-153 — raw file: [[153-Map potential harms - Training - Microsoft Learn]]

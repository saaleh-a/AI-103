---
title: "Measure potential harms"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Shows how to baseline harmful outputs with prompts, generated responses, and strict criteria."
area: responsible-ai
source_ids: [SRC-154]
objectives: [P13, P14]
tags: [responsible-ai, evaluation, harm-measurement]
aliases: ["SRC-154"]
source_kind: learn-unit
module: "Implement a responsible generative AI solution in Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "4"
presenters: []
raw_file: "154-Measure potential harms - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/responsible-ai-studio/4-measure-harms"
ingest_depth: full
---
# Measure potential harms

*learn-unit · Implement a responsible generative AI solution in Microsoft Foundry · unit 4 · SRC-154*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-154 |
| Raw file | 154-Measure potential harms - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Implement a responsible generative AI solution in Microsoft Foundry |
| Unit / episode | 4 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/responsible-ai-studio/4-measure-harms |
| Teaching content | L8–20 of 34 |
| Content length | ~346 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Measurement starts after a prioritized list of potential harmful outputs exists. (SRC-154 L12) The goal is an initial baseline that quantifies harms in usage scenarios and tracks improvement as mitigations are added. (SRC-154 L12) The method is to prepare harm-eliciting prompts, submit them, retrieve outputs, and categorize outputs using strict pre-defined criteria. (SRC-154 L14–17)

## Key claims

- Measurement creates a baseline for harms produced by the solution in usage scenarios. (SRC-154 L12)
- Test prompts should be diverse and likely to trigger each documented harm. (SRC-154 L14)
- Generated outputs should be retrieved and evaluated against predefined criteria. (SRC-154 L15–16)
- Criteria can use simple or ranged categories, but they must be strict enough to apply consistently. (SRC-154 L16)
- Results should be documented and shared with stakeholders. (SRC-154 L17)
- Manual testing should usually precede automated testing, and manual validation should continue after automation. (SRC-154 L19–20)

## How it works

The source describes a baseline-and-iterate loop. (SRC-154 L12) Teams first use a small manual set to check that results are consistent and criteria are well-defined. (SRC-154 L19) They can then automate larger-volume measurement, potentially with a classification model, while periodically rechecking manually. (SRC-154 L19–20)

## Code and API patterns

Not covered by this source.

## Key terms

- **Baseline** — the initial quantified level of harms used for later comparison. (SRC-154 L12)
- **Evaluation criteria** — predefined rules for categorizing generated output by harm level. (SRC-154 L16)

## Decision boundaries and exam cues

- **Inference:** Choose measurement when the scenario includes prompts, generated outputs, categories, criteria, and a baseline. (SRC-154 L12–17)
- **Inference:** Automation does not remove the need for periodic manual testing. (SRC-154 L19–20)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says automation may use a classification model but does not name a specific model or service. (SRC-154 L19)

## Relation to other sources

- [[src-153-map-potential-harms]] provides the harm list to measure. (SRC-153 L231–244)
- [[src-156-mitigate-potential-harms]] uses baseline comparison after mitigation. (SRC-156 L216)
- [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6]] describes measurement as testing current outputs. (SRC-106 L48–75)

## Connections

- [[model-and-app-evaluation]] — measurement is an evaluation workflow.
- [[responsible-ai-lifecycle]] — measurement is the second stage.
- [[guardrails-and-content-filters]] — measurement can show whether guardrails need adjustment.
- *Module units:* [[src-112-introduction-implement-responsible-generative-ai-solution-microsoft-foundry|1 Introduction]] · [[src-182-plan-responsible-generative-ai-solution|2 Plan a responsible generative AI solution]] · [[src-153-map-potential-harms|3 Map potential harms]] · [[src-156-mitigate-potential-harms|5 Mitigate potential harms]] · [[src-152-manage-responsible-generative-ai-solution|6 Manage a responsible generative AI solution]] · [[src-57-exercise-apply-guardrails-prevent-output-harmful-content|7 Exercise - Apply guardrails to prevent the output of harmful content]] · [[src-170-module-assessment-implement-responsible-generative-ai-solution-microsoft-foundry|8 Module assessment]] · [[src-211-summary-implement-responsible-generative-ai-solution-microsoft-foundry|9 Summary]] · [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6|episode 6]]

## Open questions

- The source does not define exact severity thresholds or metrics. (SRC-154 L16–20)

## Sources

- SRC-154 — raw file: [[154-Measure potential harms - Training - Microsoft Learn]]

---
title: "Plan a responsible generative AI solution"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines the four responsible generative AI stages: map, measure, mitigate, and manage."
area: responsible-ai
source_ids: [SRC-182]
objectives: [P13, P14, P15]
tags: [responsible-ai, lifecycle, risk-management]
aliases: ["SRC-182"]
source_kind: learn-unit
module: "Implement a responsible generative AI solution in Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "2"
presenters: []
raw_file: "182-Plan a responsible generative AI solution - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/responsible-ai-studio/2-plan-responsible-ai"
ingest_depth: full
---
# Plan a responsible generative AI solution

*learn-unit · Implement a responsible generative AI solution in Microsoft Foundry · unit 2 · SRC-182*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-182 |
| Raw file | 182-Plan a responsible generative AI solution - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Implement a responsible generative AI solution in Microsoft Foundry |
| Unit / episode | 2 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/responsible-ai-studio/2-plan-responsible-ai |
| Teaching content | L8–19 of 33 |
| Content length | ~157 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Microsoft's guidance is presented as practical and actionable. (SRC-182 L12) It defines a four-stage process: map potential harms, measure harms in outputs, mitigate harms at multiple layers with transparent risk communication, and manage deployment and operational readiness. (SRC-182 L14–18) The source says these stages correspond closely to NIST AI Risk Management Framework functions. (SRC-182 L19)

## Key claims

- The responsible generative AI process has four stages. (SRC-182 L12–18)
- Mapping identifies potential harms relevant to the planned solution. (SRC-182 L14)
- Measurement checks generated outputs for those harms. (SRC-182 L15)
- Mitigation minimizes harm presence and impact at multiple solution layers. (SRC-182 L16)
- Management uses a deployment and operational readiness plan. (SRC-182 L17)

## How it works

This page is the module's process map. (SRC-182 L12–18) The sequence moves from discovery, to evidence, to controls, to operation: map what could go wrong, measure whether it occurs, reduce it through layered mitigations, and manage the release responsibly. (SRC-182 L14–18)

## Code and API patterns

Not covered by this source.

## Key terms

- **Map** — identify relevant potential harms. (SRC-182 L14)
- **Measure** — find harms in generated outputs. (SRC-182 L15)
- **Mitigate** — reduce harms at multiple layers and communicate risk. (SRC-182 L16)
- **Manage** — define and follow readiness plans. (SRC-182 L17)

## Decision boundaries and exam cues

- **Inference:** Mapping and measuring are distinct: mapping lists relevant harms, while measuring looks for those harms in outputs. (SRC-182 L14–15)
- **Inference:** Mitigation is not the last stage, because operation still requires management. (SRC-182 L16–17)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source cites NIST alignment but does not explain the NIST framework. (SRC-182 L19)

## Relation to other sources

- [[src-153-map-potential-harms]] covers mapping. (SRC-153 L216–244)
- [[src-154-measure-potential-harms]] covers measuring. (SRC-154 L12–20)
- [[src-156-mitigate-potential-harms]] covers mitigation. (SRC-156 L216–240)
- [[src-152-manage-responsible-generative-ai-solution]] covers management. (SRC-152 L216–233)

## Connections

- [[responsible-ai-lifecycle]] — core lifecycle outline.
- [[guardrails-and-content-filters]] — later mitigation control.
- [[model-and-app-evaluation]] — measurement depends on evaluation.
- *Module units:* [[src-112-introduction-implement-responsible-generative-ai-solution-microsoft-foundry|1 Introduction]] · [[src-153-map-potential-harms|3 Map potential harms]] · [[src-154-measure-potential-harms|4 Measure potential harms]] · [[src-156-mitigate-potential-harms|5 Mitigate potential harms]] · [[src-152-manage-responsible-generative-ai-solution|6 Manage a responsible generative AI solution]] · [[src-57-exercise-apply-guardrails-prevent-output-harmful-content|7 Exercise - Apply guardrails to prevent the output of harmful content]] · [[src-170-module-assessment-implement-responsible-generative-ai-solution-microsoft-foundry|8 Module assessment]] · [[src-211-summary-implement-responsible-generative-ai-solution-microsoft-foundry|9 Summary]] · [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6|episode 6]]

## Open questions

- The source does not specify tools or metrics for each stage. (SRC-182 L14–18)

## Sources

- SRC-182 — raw file: [[182-Plan a responsible generative AI solution - Training - Microsoft Learn]]

---
title: "Mitigate potential harms"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains layered mitigation across model, safety system, prompting and grounding, and user experience."
area: responsible-ai
source_ids: [SRC-156]
objectives: [P13, P14, G13]
tags: [responsible-ai, mitigation, guardrails, rag]
aliases: ["SRC-156"]
source_kind: learn-unit
module: "Implement a responsible generative AI solution in Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "5 of 9"
presenters: []
raw_file: "156-Mitigate potential harms - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/responsible-ai-studio/5-mitigate-harms"
ingest_depth: full
---
# Mitigate potential harms

*learn-unit · Implement a responsible generative AI solution in Microsoft Foundry · unit 5 of 9 · SRC-156*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-156 |
| Raw file | 156-Mitigate potential harms - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Implement a responsible generative AI solution in Microsoft Foundry |
| Unit / episode | 5 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/responsible-ai-studio/5-mitigate-harms |
| Teaching content | L212–240 of 270 |
| Content length | ~517 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Mitigation follows baseline measurement, and the modified system can be retested against that baseline. (SRC-156 L216) The source teaches four mitigation layers: model, safety system, system message and grounding, and user experience. (SRC-156 L217–221) Foundry guardrails sit in the safety-system layer and can suppress prompts and responses by harm category and severity. (SRC-156 L227–230)

## Key claims

- Mitigation techniques can be applied at the model, safety system, system message and grounding, and user experience layers. (SRC-156 L217–221)
- Model-layer mitigations include selecting an appropriate model and fine-tuning a foundational model with training data. (SRC-156 L222–226)
- Foundry guardrails classify content into severity levels for hate and fairness, sexual, violence, self-harm, and task-adherence categories. (SRC-156 L227–229)
- Prompt shields use abuse detection algorithms to detect systematic abuse, such as attempts to subvert the system prompt. (SRC-156 L230)
- System-message and grounding mitigations include behavioral system inputs, grounding data, prompt engineering, and RAG from trusted sources. (SRC-156 L231–235)
- User-experience mitigations include constrained inputs, validation, and transparent documentation about capabilities, limitations, models, and residual harms. (SRC-156 L236–240)

## How it works

The source presents mitigation as defense in depth. (SRC-156 L217–221) Model selection and fine-tuning shape the base behavior, safety-system guardrails filter risky prompts and responses, prompting and grounding increase relevance, and the application experience constrains input while explaining limits to users. (SRC-156 L222–240)

## Code and API patterns

Not covered by this source.

## Key terms

- **Guardrails** — Foundry support for suppressing prompts and responses using content filters. (SRC-156 L227–229)
- **Prompt shields** — abuse detection that can identify attempts to subvert the system prompt. (SRC-156 L230)
- **RAG** — retrieving contextual data from trusted data sources and including it in prompts. (SRC-156 L234–235)

## Decision boundaries and exam cues

- **Inference:** Choose Foundry guardrails for platform-level suppression of harmful prompts or responses. (SRC-156 L227–230)
- **Inference:** Choose grounding or RAG when the scenario asks for trusted contextual data in prompts. (SRC-156 L231–235)
- **Inference:** Choose user-experience mitigation when the scenario emphasizes UI constraints, validation, or transparent documentation. (SRC-156 L236–240)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Guardrail categories and severity levels are platform details that may evolve. (SRC-156 L227–229)
- The source says documentation should disclose harms that mitigation may not always address, so mitigation is not total elimination. (SRC-156 L239–240)

## Relation to other sources

- [[src-154-measure-potential-harms]] supplies the baseline that mitigation compares against. (SRC-154 L12)
- [[src-57-exercise-apply-guardrails-prevent-output-harmful-content]] launches a guardrail exercise. (SRC-57 L214–217)
- [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6]] demonstrates custom guardrails in Foundry. (SRC-106 L427–552)

## Connections

- [[guardrails-and-content-filters]] — central guardrails source.
- [[azure-ai-content-safety]] — harm categories and filtering align with content safety.
- [[prompt-injection-and-jailbreaks]] — prompt shields target subversion.
- [[retrieval-augmented-generation]] — RAG is named as a mitigation.
- [[responsible-ai-lifecycle]] — mitigation is the third stage.

## Open questions

- The source does not provide step-by-step guardrail configuration. (SRC-156 L227–230)

## Sources

- SRC-156 — raw file: [[156-Mitigate potential harms - Training - Microsoft Learn]]

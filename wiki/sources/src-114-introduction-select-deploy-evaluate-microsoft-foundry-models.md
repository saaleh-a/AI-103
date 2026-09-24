---
title: "Introduction — Select, deploy, and evaluate Microsoft Foundry models"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces the Foundry model lifecycle: discover, benchmark, deploy, test, and evaluate models for a use case."
area: models
source_ids: [SRC-114]
objectives: [P01, P06, G01, G04]
tags: [model-selection, model-catalog, model-evaluation]
aliases: ["SRC-114"]
source_kind: learn-unit
module: "Select, deploy, and evaluate Microsoft Foundry models"
learning_path: null
unit: "1 of 8"
presenters: []
raw_file: "114-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/1-introduction"
ingest_depth: full
---
# Introduction — Select, deploy, and evaluate Microsoft Foundry models

*learn-unit · Select, deploy, and evaluate Microsoft Foundry models · unit 1 of 8 · SRC-114*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-114 |
| Raw file | 114-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | null |
| Module | Select, deploy, and evaluate Microsoft Foundry models |
| Unit / episode | 1 of 8 |
| Presenter(s) | none |
| URL | https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/1-introduction |
| Teaching content | L209–224 of 254 |
| Content length | ~368 words |
| Capture quality | high |
| Ingest depth | full |

## TL;DR

Microsoft Foundry is presented as the portal workflow for choosing from many foundation models, comparing them, deploying the selected model to an endpoint, and evaluating whether it meets quality and safety requirements. (SRC-114 L213–216)

## Key claims

- Building an effective generative AI application starts with matching the foundation model to the specific use case rather than choosing a model generically. (SRC-114 L213)
- The example customer-support chatbot needs a model that understands customer questions, returns accurate responses, and maintains suitable tone and safety standards. (SRC-114 L214)
- The Microsoft Foundry portal supports the full workflow: explore more than 1,900 models, compare benchmark data, deploy to an endpoint, and evaluate with automated and manual methods. (SRC-114 L215)
- The module outcomes cover catalog filtering, benchmark comparison, endpoint deployment, playground testing, manual and automated evaluation, and knowing when different evaluation metrics apply. (SRC-114 L217–222)

## How it works

The unit frames model work as a lifecycle: discover candidates in the model catalog, compare them by benchmark dimensions, deploy the chosen model to an endpoint consumed by an application, and test and evaluate the result. (SRC-114 L215–222)

**Inference:** The exam-relevant decision is not only which model is impressive, but whether selection, deployment, and evaluation prove that it fits the application requirement. (SRC-114 L213–222)

## Code and API patterns

Not covered by this source.

## Key terms

- Foundation model — the model selected for a specific generative AI application use case. (SRC-114 L213)
- Endpoint — the deployed access point through which an application consumes a selected model. (SRC-114 L215)
- Evaluation approaches — manual and automated ways to verify model quality and safety. (SRC-114 L215; SRC-114 L220–222)

## Decision boundaries and exam cues

- **Inference:** Choose the model catalog and benchmarks when a question asks how to select among many models with objective comparison data. (SRC-114 L215; SRC-114 L218–219)
- **Inference:** Choose deployment to an endpoint when the selected model must be consumed by an application rather than merely inspected in the portal. (SRC-114 L215; SRC-114 L220)
- **Inference:** Choose evaluation when the scenario asks whether the model meets quality, safety, or performance requirements after selection or deployment. (SRC-114 L215; SRC-114 L221–222)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The source states that Foundry offers more than 1,900 models; catalog size, provider list, and available models are time-sensitive. (SRC-114 L215)
- The source uses Microsoft Foundry terminology while related captures and screenshots may still show older Azure AI Foundry naming. (SRC-114 L215)

## Relation to other sources

- [[src-89-explore-model-catalog]] expands the catalog-discovery step named in this introduction. (SRC-114 L218; SRC-89 L213–225)
- [[src-188-select-models-benchmarks]] expands the benchmark-comparison outcome listed here. (SRC-114 L219; SRC-188 L213–271)
- [[src-39-deploy-models-endpoints]] expands the endpoint-deployment outcome listed here. (SRC-114 L220; SRC-39 L213–270)
- [[src-53-evaluate-model-performance]] expands the manual and automated evaluation outcome listed here. (SRC-114 L221–222; SRC-53 L213–296)
- [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] demonstrates the same lifecycle in the portal. (SRC-114 L215–222; SRC-189 L3–28)

## Connections

- [[microsoft-foundry]] — portal that hosts the workflow. (SRC-114 L215)
- [[model-catalog]] — catalog step in the workflow. (SRC-114 L218)
- [[model-selection]] — decision problem introduced by the unit. (SRC-114 L213)
- [[model-benchmarks]] — comparison method introduced by the unit. (SRC-114 L219)
- [[model-deployment-types]] — deployment step after selection. (SRC-114 L220)
- [[model-and-app-evaluation]] — validation step after deployment. (SRC-114 L221–222)

## Open questions

- The introduction does not specify which benchmark or evaluation metric should dominate for a given business constraint. (SRC-114 L217–222)

## Sources

- SRC-114 — raw file: [[114-Introduction - Training - Microsoft Learn]]

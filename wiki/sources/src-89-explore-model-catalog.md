---
title: "Explore the model catalog"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains the Foundry model catalog, model categories, filters, model cards, and major language and specialized model types."
area: models
source_ids: [SRC-89]
objectives: [P01, G01]
tags: [model-catalog, model-selection, model-types]
aliases: ["SRC-89"]
source_kind: learn-unit
module: "Select, deploy, and evaluate Microsoft Foundry models"
learning_path: null
unit: "2 of 8"
presenters: []
raw_file: "89-Explore the model catalog - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/2-explore-model-catalog"
ingest_depth: full
---
# Explore the model catalog

*learn-unit · Select, deploy, and evaluate Microsoft Foundry models · unit 2 of 8 · SRC-89*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-89 |
| Raw file | 89-Explore the model catalog - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | null |
| Module | Select, deploy, and evaluate Microsoft Foundry models |
| Unit / episode | 2 of 8 |
| Presenter(s) | none |
| URL | https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/2-explore-model-catalog |
| Teaching content | L209–244 of 274 |
| Content length | ~655 words |
| Capture quality | high |
| Ingest depth | full |

## TL;DR

The Foundry Models catalog is the discovery hub for more than 1,900 models, with filters for provider, capability, task, fine-tuning method, industry, and collection. (SRC-89 L213–225)

## Key claims

- The model catalog is a central hub for discovering and comparing AI models, and it requires filtering because the catalog contains more than 1,900 models. (SRC-89 L213)
- The catalog separates models sold directly by Azure from models provided by partners and the community, with different licensing and pricing implications. (SRC-89 L214–216)
- Model cards expose provider, capabilities, benchmark metrics, responsible AI considerations, and deployment options. (SRC-89 L217–218)
- Catalog filters include collection, capabilities, source, inference tasks, fine-tuning methods, and industry. (SRC-89 L219–225)
- The unit distinguishes LLMs for complex reasoning and extensive context from SLMs for efficiency, lower cost, speed, and edge or lower-end hardware scenarios. (SRC-89 L226–228)
- Specialized catalog models include embeddings, image generation, video generation, image analysis, text to speech, and speech to text. (SRC-89 L232–238)

## How it works

A learner starts in the catalog, searches by keyword, and narrows the candidate set with filters tied to what the application needs: capabilities, inference task, provider/source, fine-tuning support, collection, and domain. (SRC-89 L217–225)

The unit maps model families: LLMs for harder reasoning and content generation, SLMs for speed and cost efficiency, chat completion models for conversational text, reasoning models for complex math/coding/science/strategy/logistics problems, and specialized models for embeddings or media tasks. (SRC-89 L226–238)

## Code and API patterns

Not covered by this source.

## Key terms

- Foundry Models sold directly by Azure — Azure-billed models, including Azure OpenAI models and models from Microsoft and other providers. (SRC-89 L214–215)
- Foundry Models from partners and community — models from trusted partners and the community with their own licensing and pricing. (SRC-89 L216)
- Model card — the catalog page showing provider, capabilities, benchmarks, responsible AI considerations, and deployment options. (SRC-89 L217–218)
- Embedding models — models that convert text into numerical representations for semantic search, recommendations, and RAG. (SRC-89 L233)

## Decision boundaries and exam cues

- **Inference:** If the requirement is to discover available models by capability, task, provider, or industry, start with the model catalog filters. (SRC-89 L217–225)
- **Inference:** If the scenario prioritizes deep reasoning or extensive context, the source points toward LLMs; if it prioritizes cost, speed, or lower-end hardware, it points toward SLMs. (SRC-89 L227–228)
- **Inference:** If the task is semantic search or RAG retrieval rather than generating an answer directly, the catalog model type to recognize is an embedding model. (SRC-89 L233)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The number of models, provider names, model examples, and model versions are time-sensitive catalog details. (SRC-89 L213; SRC-89 L222; SRC-89 L227–238)
- The source uses Microsoft Foundry / Foundry Models naming while some related corpus items use Azure AI Foundry. (SRC-89 L213–216)

## Relation to other sources

- [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models]] introduces catalog exploration as the first step in the module workflow. (SRC-114 L215; SRC-114 L218)
- [[src-188-select-models-benchmarks]] continues from model cards and catalog comparison into benchmark dimensions. (SRC-89 L217–218; SRC-188 L213–271)
- [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] demonstrates catalog filtering and comparison in the portal. (SRC-89 L217–225; SRC-189 L29–93)

## Connections

- [[model-catalog]] — the source's main product surface. (SRC-89 L213)
- [[model-selection]] — filters and model families support selection. (SRC-89 L217–238)
- [[azure-openai]] — Azure OpenAI is one of the catalog sources named in the unit. (SRC-89 L222)
- [[model-benchmarks]] — model cards expose benchmark metrics. (SRC-89 L217–218)
- [[fine-tuning]] — fine-tuning support is a catalog filter. (SRC-89 L224)
- [[retrieval-augmented-generation]] — embedding models are presented as useful for RAG scenarios. (SRC-89 L233)
- [[image-generation]] — image generation is a specialized model category. (SRC-89 L234)
- [[speech-capable-models]] — speech-to-text and text-to-speech models are catalog categories. (SRC-89 L237–238)
- *Module units:* [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models|1 Introduction]] · [[src-188-select-models-benchmarks|3 Select models using benchmarks]] · [[src-39-deploy-models-endpoints|4 Deploy models to endpoints]] · [[src-53-evaluate-model-performance|5 Evaluate model performance]] · [[src-80-exercise-select-deploy-evaluate-models|6 Exercise - Select, deploy, and evaluate models]] · [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models|7 Knowledge check]] · [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models|8 Summary]] · [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2|episode 2]]

## Open questions

- The source does not specify how to weight filters when multiple constraints conflict. (SRC-89 L219–225)

## Sources

- SRC-89 — raw file: [[89-Explore the model catalog - Training - Microsoft Learn]]

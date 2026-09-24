---
title: "Foundry model catalog"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Microsoft Foundry's portal catalog for discovering, filtering, comparing and starting deployment of models from Azure, partners and community sources."
area: models
source_ids: [SRC-17, SRC-38, SRC-89, SRC-114, SRC-188, SRC-258]
objectives: [P01]
objective_gaps: [P06, G01, V01, T05]
tags: ["feature"]
aliases: ["Foundry Models", "Microsoft Foundry Models", "model catalog", "Models catalog", "Foundry Models catalog"]
---

# Foundry model catalog

## Summary

The Foundry model catalog is the portal surface for discovering and comparing AI models before deployment. SRC-89 calls it the central hub for discovering and comparing AI models and says it contains over 1,900 models from multiple providers (SRC-89 L215). SRC-114 frames the larger workflow as discover, compare, deploy and validate: use the catalog, compare models with benchmarks, deploy the selected model to an endpoint, then evaluate whether it meets requirements (SRC-114 L213–216).

## What it is

The catalog is a feature of the Microsoft Foundry portal, not a model family. It contains model cards and filters that help you find a model whose provider, capability, task, deployment option and governance notes fit your use case (SRC-89 L219–226). It is the evidence-backed home for questions like "where do I find a model?", while [[model-selection]] is the reasoning process for deciding which model type fits a requirement.

## What the sources say

- SRC-89 says the catalog has two broad model categories: Foundry Models sold directly by Azure, which include Azure OpenAI models and models from Microsoft and other providers; and Foundry Models from partners/community with their own licensing and pricing (SRC-89 L216–218).
- SRC-89 says each model has a model card showing provider, capabilities, benchmark metrics, responsible AI considerations and deployment options (SRC-89 L219–220).
- SRC-89 lists filters for collection, capabilities, source, inference tasks, fine-tuning methods and industry (SRC-89 L221–226).
- SRC-17 says Microsoft Foundry Models is a catalog of generative AI models from multiple providers and recommends filter/search features to find suitable speech-capable models (SRC-17 L215–217).
- SRC-258 says image-generation models can be found by using the catalog and filtering by inference task for text-to-image models (SRC-258 L214–218).
- SRC-38 shows the deployment path for video generation starting from **Models + endpoints**, selecting **+ Deploy model**, choosing Sora 2, naming the deployment and selecting **Deploy** (SRC-38 L219–226).

## Capabilities and components

- **Search and filters:** keyword search plus filters for collection, capability, provider/source, inference task, fine-tuning method and industry (SRC-89 L221–226).
- **Model cards:** model-level pages with provider, capabilities, benchmark metrics, responsible AI considerations and deployment options (SRC-89 L219–220).
- **Model type discovery:** examples in the corpus include LLMs, SLMs, chat completion models, reasoning models, embedding models, image generation, video generation, image analysis, text-to-speech and speech-to-text models (SRC-89 L227–248).
- **Benchmarks entry point:** model cards expose benchmarks, and the catalog provides the model leaderboard for comparative ranking (SRC-188 L217–219).
- **Deployment entry point:** model catalog workflows lead into endpoint deployment and playground testing (SRC-114 L215–220; SRC-38 L219–226).

## How to use it

Start from the task, then narrow the catalog. For example, a speech scenario should filter/search for models that transcribe speech to text or synthesize text to speech (SRC-17 L217–221). An image-generation scenario should filter by inference task for text-to-image models (SRC-258 L214–218). A deployment workflow can start in **Models + endpoints**, use **+ Deploy model**, select the target model, name the deployment and deploy it (SRC-38 L219–226). **Inference:** Do not treat the catalog result as the final answer; inspect the model card and benchmark/deployment information before choosing.

## Decision boundaries

| **Inference:** Confusion | Correct boundary |
|---|---|
| Catalog vs [[model-selection]] | The catalog is the portal inventory and metadata surface; model selection is the judgement process that uses requirements, model cards and benchmarks (SRC-89 L215–226; SRC-114 L213–216). |
| Catalog vs [[model-benchmarks]] | The catalog exposes model cards and the leaderboard; benchmarks are the metric system for comparing quality, safety, cost and performance (SRC-188 L215–219). |
| Catalog vs [[azure-openai]] | Azure OpenAI is one source/provider category inside the catalog, not the entire catalog (SRC-89 L216–224). |
| Catalog vs endpoint | The catalog is where you discover and initiate deployment; the endpoint is what an application consumes after deployment (SRC-114 L215–220). |

## Naming and currency

**Stale-risk:** The captured corpus says the catalog has over 1,900 models and gives concrete model examples such as GPT-5, Mistral Large, Llama 3, Phi-4, Sora 2 and GPT-image-1 (SRC-89 L215; SRC-89 L227–248; SRC-258 L214–218). Counts, names and availability are time-sensitive.

## Appearances in the corpus

The catalog appears in the main select/deploy/evaluate module, speech-capable model selection, image generation model discovery, video-generation deployment and benchmark navigation (SRC-114 L213–220; SRC-17 L215–221; SRC-258 L214–218; SRC-38 L219–226; SRC-188 L217–219).

## Connections

- [[microsoft-foundry]] — platform that hosts the portal catalog.
- [[model-selection]] — decision process that uses catalog metadata.
- [[model-benchmarks]] — metric and leaderboard layer linked from catalog/model cards.
- [[azure-openai]] — one source/provider category in the catalog.
- [[model-deployment-types]] — deployment decisions after model discovery.
- [[model-playgrounds]] — testing surface after deployment or model exploration.
- [[image-generation]] — uses catalog filters for text-to-image models.
- [[video-generation]] — uses catalog deployment flow for Sora 2 examples.
- *Also linked from:* [[embeddings-and-vector-search]] · [[fine-tuning]] · [[foundry-toolkit-for-vs-code]] · [[generative-ai-fundamentals]] · [[overview]] · [[sora-2]] · [[speech-capable-models]]

## Sources

- SRC-17 — [[src-17-choose-speech-capable-model]] — model catalog for speech-capable models.
- SRC-38 — [[src-38-deploy-video-generating-model]] — video-generation deployment through Models + endpoints.
- SRC-89 — [[src-89-explore-model-catalog]] — catalog categories, filters, model cards and model type taxonomy.
- SRC-114 — [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models]] — select, compare, deploy and evaluate workflow.
- SRC-188 — [[src-188-select-models-benchmarks]] — leaderboard and model-card benchmark entry points.
- SRC-258 — [[src-258-what-are-image-generation-models]] — catalog filtering for image-generation models.

## Open questions

- The corpus does not give a stable complete list of catalog providers or models.
- The corpus names licensing/pricing differences for partner/community models but does not deeply explain procurement or licensing workflows.

---
title: "Model selection"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "A requirements-first process for choosing LLMs, SLMs, multimodal, speech, image, video, embedding or Foundry Tool options."
area: models
source_ids: [SRC-17, SRC-18, SRC-32, SRC-89, SRC-114, SRC-188, SRC-191, SRC-221, SRC-225, SRC-248, SRC-258]
objectives: [P01]
objective_gaps: [P02, G01, G04, V01, V06, T05]
tags: []
aliases: ["choose a model", "LLM vs SLM", "small language models", "reasoning models", "multimodal models", "choose Foundry models"]
---

# Model selection

## Summary

Model selection is the decision process that turns a task requirement into a deployable model choice. The corpus states the exam explicitly tests choosing an appropriate model for each task, including LLMs, small language models, multimodal models and Foundry Tools (SRC-191 L121). The Foundry select/deploy/evaluate module says effective generative applications require selecting the right foundation model for a specific use case and using a structured approach to discover, compare, deploy and validate it (SRC-114 L213–216).

## The problem it solves

The catalog contains many models and model types, so picking by brand name alone is fragile. A customer-support chatbot, a code assistant, a text-to-image feature, a speech transcription app and a vision Q&A app need different capabilities, costs, latency profiles and safety evidence. SRC-114 uses this exact framing: you must know whether the model understands questions, responds accurately, maintains tone and safety standards, then measure and improve its performance after deployment (SRC-114 L214–216).

## Mental model

**Synthesis:** Select models by eliminating mismatches in layers (SRC-89 L221–226; SRC-188 L215–219):

1. **Synthesis:** **Task modality:** text, image, audio, video, embeddings or tool/service output (SRC-89 L221–226).
2. **Synthesis:** **Capability:** reasoning, tool calling, multimodal processing, generation, transcription, synthesis or domain specialization (SRC-89 L221–246).
3. **Synthesis:** **Operational fit:** cost, latency, throughput, deployment option and endpoint compatibility (SRC-188 L242–271).
4. **Synthesis:** **Risk fit:** safety, responsible AI considerations and evaluation requirements (SRC-89 L219–220; SRC-188 L232–241).

**Synthesis:** The catalog gives candidate models and metadata; benchmarks compare candidates; deployment exposes the chosen model to applications; evaluation checks whether it actually meets requirements (SRC-89 L219–226; SRC-188 L215–219; SRC-114 L215–220).

## What the sources say

- SRC-89 says the catalog can be filtered by capabilities such as reasoning, tool calling or multimodal processing; source/provider; inference task; fine-tuning methods; and industry (SRC-89 L221–226).
- SRC-89 distinguishes LLMs for deep reasoning, complex content generation and extensive context understanding from SLMs that trade complexity for efficiency, speed, cost and lower-end/edge suitability (SRC-89 L227–231).
- SRC-89 also identifies specialised model categories: embeddings for semantic search/RAG, image generation, video generation, image analysis, text-to-speech and speech-to-text (SRC-89 L237–246).
- SRC-17 narrows speech selection to two common use cases: speech-to-text transcription and text-to-speech synthesis (SRC-17 L217–221).
- SRC-248 says prompts containing images require a multimodal model that supports text input plus image-based and sometimes audio-based input (SRC-248 L213).
- SRC-258 says image-generation models create graphical data from natural-language input and are not search systems retrieving images from a curated catalog (SRC-258 L218–223).
- SRC-188 says benchmarks should be used before deployment to compare quality, safety, cost and performance (SRC-188 L215–219).

## How it works in Azure

In Azure/Foundry terms, selection usually starts in [[model-catalog]], where filters and model cards identify candidates. [[model-benchmarks]] then compare candidates across quality, safety, estimated cost and throughput (SRC-188 L263–271). After selection, deployment and endpoint choice determine how the app consumes the model; the introduction module says selected models are deployed to endpoints and tested in the playground (SRC-114 L215–220).

## Code and configuration

**Inference:** Model selection itself is not a code pattern, but it affects code:

- Choosing an OpenAI-compatible chat/text model points toward Responses or Chat Completions calls (SRC-18 L281–307).
- Choosing an image-generation model points toward Images API or Azure OpenAI .NET SDK patterns (SRC-32 L214).
- Choosing speech models points toward audio transcription or speech synthesis client calls (SRC-221 L223; SRC-225 L224).
- Choosing a multimodal vision model requires the app to send image-based prompts, not only text (SRC-248 L219–221).

## Decision boundaries

| **Inference:** Requirement clue | Choose / investigate | Rule |
|---|---|---|
| Deep reasoning, complex content generation, broad context | LLM or reasoning model | LLMs are described as suitable for deep reasoning and complex generation; reasoning models target complex math, coding, science, strategy and logistics (SRC-89 L227–235). |
| Speed/cost/edge constraint and common NLP | SLM | SLMs are described as efficient and cost-effective for common NLP tasks and lower-end/edge hardware (SRC-89 L229–231). |
| Semantic search or RAG retrieval | Embedding model plus retrieval stack | Embedding models convert text to numerical representations for semantic search, recommendations and RAG (SRC-89 L237). |
| Image in the prompt | Multimodal image-capable model | Vision prompts require a model supporting image-based input (SRC-248 L213–221). |
| Generate a new image from text | Image-generation model | Image models create original graphical output from natural-language input (SRC-258 L218–223). |
| Transcribe or synthesize speech | Speech-capable generative model | The corpus separates speech-to-text and text-to-speech use cases (SRC-17 L217–221). |
| Structured extraction, translation, safety or other focused service outcome | Foundry Tools may fit | The study guide explicitly includes Foundry Tools in the model/service choice objective (SRC-191 L121–122). |

## Failure modes and misconceptions

- **Misconception:** Highest quality index is always best. **Correction:** Benchmarks include quality, safety, cost and throughput, and trade-off charts can show that a slightly less accurate but much faster or cheaper model better serves requirements (SRC-188 L263–265).
- **Misconception:** Multimodal means image generation. **Correction:** The corpus separately describes image-generation models that create images and multimodal models that accept image-based prompts for analysis (SRC-258 L218–223; SRC-248 L213–221).
- **Misconception:** Azure OpenAI equals all Foundry models. **Correction:** Azure OpenAI is one provider/source within a broader catalog that also includes Microsoft, partner and community models (SRC-89 L216–224).
- **Misconception:** A model choice is final after catalog filtering. **Correction:** The workflow includes deployment, playground testing and evaluation after selecting a model (SRC-114 L215–220).

## Solution Engineering transfer

**Inference:** Ask customers for the task, modality, latency tolerance, cost envelope, safety exposure and evaluation criterion before naming a model. If the customer says "best model," translate that into measurable dimensions: quality for the task, acceptable safety posture, total token/media cost and interactive responsiveness.

## Connections

- [[generative-ai-fundamentals]] — base concepts of prompt, response, context and tokens.
- [[model-catalog]] — discovery surface for candidate models.
- [[model-benchmarks]] — evidence layer for comparing model trade-offs.
- [[azure-openai]] — one model source and endpoint surface.
- [[model-deployment-types]] — deployment choice after model choice.
- [[foundry-tools]] — focused tools as alternatives/complements to general LLMs.
- [[vision-enabled-chat]] — selection implications for image input.
- [[image-generation]] — selection implications for graphical output.
- [[retrieval-augmented-generation]] — embedding models can support RAG/search retrieval choices.
- *Also linked from:* [[azure-translator]] · [[fine-tuning]] · [[model-and-app-evaluation]] · [[model-playgrounds]] · [[speech-capable-models]] · [[text-translation]]

## Sources

- SRC-17 — [[src-17-choose-speech-capable-model]] — speech-to-text and text-to-speech selection.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — SDK implications of model choice.
- SRC-32 — [[src-32-create-client-application-that-uses-image-generation-model]] — image-generation SDK implication.
- SRC-89 — [[src-89-explore-model-catalog]] — model categories, filters and capabilities.
- SRC-114 — [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models]] — select, deploy and evaluate workflow.
- SRC-188 — [[src-188-select-models-benchmarks]] — benchmark dimensions and trade-offs.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official model-choice objectives.
- SRC-221 — [[src-221-synthesize-speech]] — speech synthesis client implication.
- SRC-225 — [[src-225-transcribe-speech]] — transcription client implication.
- SRC-248 — [[src-248-vision-capable-model-microsoft-foundry-portal]] — image-input model requirement.
- SRC-258 — [[src-258-what-are-image-generation-models]] — image-generation model behaviour and catalog filtering.

## Open questions

- The corpus does not give a deterministic scoring formula for model selection; it gives dimensions and workflow.
- The corpus mentions Foundry Tools in the official objective, but detailed tool-vs-model boundaries live on specialised tool pages rather than in the core model-selection unit.

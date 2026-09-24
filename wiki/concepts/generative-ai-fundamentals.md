---
title: "Generative AI fundamentals"
type: concept
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "AI apps use models to interpret inputs and generate responses; generative AI uses LLMs, prompts, context and output tokens."
area: models
source_ids: [SRC-18, SRC-89, SRC-98, SRC-99, SRC-178, SRC-188, SRC-191, SRC-260]
objectives: [G01, G13]
objective_gaps: []
tags: []
aliases: ["What is AI", "generative AI", "LLM fundamentals", "prompts and completions", "tokens"]
---

# Generative AI fundamentals

## Summary

Generative AI is the part of the corpus where AI stops being only a classifier or extractor and becomes a response generator: a model receives prompts and context, then produces text, images, speech or other output for an application. The corpus defines modern AI solutions as machine-learning models that encode semantic relationships in large data sets and appear to interpret inputs, reason over them and generate responses or predictions (SRC-260 L218). Generative AI specifically uses large language models to produce original responses to natural-language prompts, and the same foundation can power agents when the model is combined with instructions and tools (SRC-260 L223–224).

## The problem it solves

Without generative AI, application logic has to predefine most outputs or hand off each task to a specialised deterministic service. Generative AI lets a developer build an app that accepts flexible natural-language input and asks a model to produce a useful answer, caption, summary, image, transcription-driven response or action plan. **Synthesis:** The exam therefore treats model choice, model consumption, prompt tuning and application evaluation as core skills rather than as isolated product trivia (SRC-191 L121; SRC-191 L142; SRC-191 L145; SRC-191 L156).

## Mental model

A generative app is a loop: collect user intent, package it as a prompt plus optional instructions and context, send that package to a model, receive generated output, and decide whether to show, store, stream, evaluate or continue the conversation. In the Responses API source, the prompt is passed as `input`, the generated response is exposed as `output_text`, and the response object also reports `usage` for input, output and total tokens (SRC-99 L230–236). **Inference:** Tokens are the billing and context-window unit underneath this loop: the app may feel conversational, but each run still sends tokenized instructions, current input and selected context to a model.

## What the sources say

- SRC-260 gives the broad hierarchy: AI covers many software capabilities; today's AI solutions are built on machine-learning models that encode semantic relationships; generative AI uses LLMs to generate original responses to natural-language prompts (SRC-260 L218; SRC-260 L223–224).
- SRC-99 shows the main response-generation shape in Microsoft Foundry: use an OpenAI-compatible client, call `responses.create()`, pass prompt input, optionally add instructions, and inspect response text, id, status, usage and model (SRC-99 L227–243).
- SRC-98 preserves the older but common Chat Completions pattern: prompts are collections of message objects; the app must track previous prompts and responses to keep context; every turn resubmits the conversation history (SRC-98 L218–233).
- SRC-178 names prompt engineering as designing and refining prompts to improve quality, accuracy and relevance, then breaks chat prompts into system, user and assistant messages plus examples (SRC-178 L217–223).

## How it works in Azure

**Inference:** In this wiki's boundary, the generic mechanics live here; where to discover, deploy and call models lives elsewhere. Use [[model-catalog]] to discover available models and their model cards, [[model-selection]] to choose between LLMs, SLMs, multimodal models and tools, [[azure-openai]] for Azure OpenAI endpoint/client details, [[responses-api]] and [[chat-completions-api]] for API-specific conversation mechanics, and [[prompt-engineering]] for prompt-design patterns.

**Synthesis:** A Microsoft Foundry generative app is usually built on a deployed model, an endpoint/SDK choice, prompt instructions, context management and evaluation of quality or safety (SRC-18 L218–220; SRC-99 L242–251; SRC-188 L215–219). The corpus separates those responsibilities so that model capability, API surface and prompt design are not confused.

## Code and configuration

**Inference:** The fundamentals page does not own full SDK recipes. It owns the conceptual fields you must recognise in code:

- `input` / prompt: the current user request or instruction text sent to the model (SRC-99 L230).
- `instructions` / system message: behaviour guidance for the model (SRC-99 L242; SRC-178 L221–227).
- response text: the generated output to use in the application (SRC-99 L233–236).
- token usage: reported input, output and total tokens for a response (SRC-99 L236).
- conversation history: previous user and assistant messages if the app is manually maintaining context (SRC-98 L223–233; SRC-99 L268–288).

## Decision boundaries

| **Inference:** If the scenario asks for... | Start with... | Why |
|---|---|---|
| A flexible natural-language answer or content generation | Generative AI / LLM model | LLMs generate original responses to prompts (SRC-260 L223–224). |
| Choosing which model family fits the task | [[model-selection]] | The study guide explicitly tests choosing LLMs, SLMs, multimodal models and Foundry Tools (SRC-191 L121). |
| Finding and filtering concrete deployable models | [[model-catalog]] | The catalog is the discovery and comparison hub (SRC-89 L215–224). |
| Measuring model trade-offs before deployment | [[model-benchmarks]] | Benchmarks compare quality, safety, cost and performance (SRC-188 L215–219). |
| Improving response quality without new training data | [[prompt-engineering]] | Prompt engineering needs no extra infrastructure or training data (SRC-178 L217). |

## Failure modes and misconceptions

- **Misconception:** A prompt is only the user's latest question. **Correction:** In chat-style apps the active context can include system instructions, current prompt, conversation history, tool schemas, tool outputs and retrieved documents; all are tokenized and sent to the model together (SRC-99 L281–288).
- **Misconception:** A system message guarantees the model will obey. **Correction:** The corpus says a system message influences behaviour but does not guarantee compliance, so testing, filtering and evaluation still matter (SRC-178 L239).
- **Misconception:** Chat Completions and Responses are just two names for the same thing. **Correction:** Responses is recommended for new Foundry response generation and maintains response history, while Chat Completions is stateless and requires manual history tracking (SRC-99 L217–224; SRC-98 L223–233).

## Solution Engineering transfer

**Inference:** A customer signal for this topic is, "We want users to ask questions in natural language and get tailored answers or generated content." The discovery question is: what output should be generated, what context must ground it, what safety boundary applies, and how will the team measure whether the answer is good? Those answers route into [[model-selection]], [[retrieval-augmented-generation]], [[prompt-engineering]] and [[model-and-app-evaluation]].

## Connections

- [[model-selection]] — applies the fundamentals to choose the right kind of model or tool.
- [[model-catalog]] — the place to discover concrete model options.
- [[azure-openai]] — endpoint and API surface for Azure OpenAI model inference.
- [[responses-api]] — recommended stateful response-generation API in Foundry apps.
- [[chat-completions-api]] — established stateless message-list API.
- [[prompt-engineering]] — prompt structure and response-shaping techniques.
- [[generation-parameters]] — temperature, token limits and other output controls.
- [[ai-agents]] — agents add task instructions and tools on top of an LLM foundation.
- *Also linked from:* [[overview]]

## Sources

- SRC-18 — [[src-18-choose-endpoint-sdk]] — Foundry endpoints, SDKs and inference-client choice.
- SRC-89 — [[src-89-explore-model-catalog]] — catalog as the discovery and comparison hub.
- SRC-98 — [[src-98-generate-responses-chatcompletions-api]] — Chat Completions prompt and context mechanics.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses API prompt, response, usage and context mechanics.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — prompt components and system-message caveats.
- SRC-188 — [[src-188-select-models-benchmarks]] — benchmark dimensions used in model decisions.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official objectives for model choice, consumption, evaluation and tuning.
- SRC-260 — [[src-260-what-is-ai]] — AI and generative AI definitions.

## Open questions

- The corpus gives practical token-usage guidance but does not define tokenization mechanics in detail.
- The corpus names LLMs as the basis of generative AI, while later media units cover image, speech and video generation; a future synthesis page could reconcile terminology across modalities.

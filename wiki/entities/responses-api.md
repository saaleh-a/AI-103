---
title: "Responses API"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Recommended Foundry response API for stateful, multi-turn generation, response chaining, direct models, streaming and async use."
area: generative-apps
source_ids: [SRC-18, SRC-99, SRC-98, SRC-102, SRC-255]
objectives: [G05, G06, G13]
objective_gaps: []
tags: ["api"]
aliases: ["OpenAI Responses API", "responses.create", "previous_response_id", "response object"]
---

# Responses API

## Summary

The Responses API is the corpus's recommended API for generating AI responses in Microsoft Foundry applications; it combines ChatCompletions and Assistants patterns into a stateful, multi-turn response API. (SRC-99 L217; SRC-99 L225)

## What it is

The Responses API provides stateful, multi-turn response generation for conversational AI applications, and it can be accessed through an OpenAI-compatible client using either the Foundry SDK or the OpenAI SDK. (SRC-99 L217)

SRC-18 names Responses as one of the two chat APIs supported by the OpenAI client API and says it is recommended for most new development projects. (SRC-18 L221)

## What the sources say

- SRC-99 says Responses brings together ChatCompletions and Assistants capabilities in a unified experience. (SRC-99 L217)
- SRC-99 lists advantages over traditional chat completions: stateful conversations, unified experience, Foundry direct-model support and simple OpenAI-compatible integration. (SRC-99 L219–223)
- SRC-99 says it replaces the older ChatCompletions API for most scenarios. (SRC-99 L225)
- SRC-99 names `responses.create()` as the generation method and `input` as the prompt text parameter. (SRC-99 L227–230)
- SRC-99 says response objects include `output_text`, `id`, `status`, `usage` and `model`. (SRC-99 L231–237)
- SRC-102 uses the Responses API as the generation surface for grounded answers after connecting an Azure AI Search index to a model through a Foundry project. (SRC-102 L251–256)
- SRC-255 uses the OpenAI Responses API with `file_search` enabled for document-grounded answers. (SRC-255 L232–240)

## Capabilities and components

- **State:** `previous_response_id` links responses together and maintains conversation context across API calls. (SRC-99 L279–280)
- **Instructions:** the API has an `instructions` channel, often referred to as a system prompt, to guide model behavior. (SRC-99 L241–242)
- **Generation controls:** `temperature`, `max_output_tokens` and `top_p` control response generation. (SRC-99 L245–251)
- **Model reach:** when using the Foundry SDK or AzureOpenAI client with a project endpoint, the API works with Azure OpenAI models and Foundry direct models. (SRC-99 L253–254)
- **Streaming:** streaming returns output incrementally for long responses. (SRC-99 L289–297)
- **Async:** `AsyncOpenAI` with `await` supports non-blocking calls and concurrent handling. (SRC-99 L298–304)
- **Tools and retrieval:** file search sends `file_search` in the tools array with vector store IDs, retrieves chunks, injects matching passages and then generates the answer. (SRC-255 L235–241)

## How to use it

Use `responses.create()` through an OpenAI-compatible client when generating text responses in a Foundry app. (SRC-99 L227–230)

Use `instructions` for behavior guidance and generation parameters to tune randomness and token limits. (SRC-99 L241–251)

For multi-turn experiences, either let response IDs link turns or manually manage history when you need to customize context, prune tokens, or store and restore history from a database. (SRC-99 L256–280)

For grounded RAG answers, connect an Azure AI Search index through the Foundry project, get an authenticated OpenAI client, and use Responses to generate from retrieved context. (SRC-102 L251–256)

## Decision boundaries

### Responses API vs Chat Completions API

| **Synthesis:** Decision detail | Responses API | Chat Completions API |
|---|---|---|
| Default for new Foundry development | Recommended for most new development and for generating AI responses in Microsoft Foundry apps. (SRC-18 L221; SRC-99 L225) | Useful for code maintenance or cross-platform compatibility. (SRC-98 L217) |
| Conversation state | Provides stateful multi-turn generation and links turns with `previous_response_id`. (SRC-99 L217; SRC-99 L279–280) | Does not provide stateful response tracking; app code must manually track prompts and responses. (SRC-98 L223) |
| Context control | Can also use manual conversation chaining when pruning, selective context or database restore is needed. (SRC-99 L267–274) | The entire conversation history is submitted each turn in the described loop. (SRC-98 L232) |
| Model reach in Foundry | Works with Azure OpenAI models and Foundry direct models when connected through the Foundry SDK or AzureOpenAI client. (SRC-99 L253–254) | Well established across many generative AI models and platforms. (SRC-98 L233) |
| Tooling and grounding in this corpus | Used with RAG and file search examples. (SRC-102 L251–256; SRC-255 L232–240) | The captured ChatCompletions unit does not describe built-in tool use; it focuses on message objects and history. (SRC-98 L219–233) |

**Inference:** In an exam scenario, choose Responses when the clues say new Foundry application, stateful multi-turn chat, response IDs, Foundry direct models, file search, or built-in response tooling; choose Chat Completions when the clues say existing code, cross-platform compatibility, or manual message-list history. (SRC-18 L221; SRC-99 L217–225; SRC-98 L217–233)

## Naming and currency

The corpus uses both `Responses API` and `OpenAI Responses API`; both refer to the OpenAI-compatible response-generation API used from Foundry or OpenAI SDK clients. (SRC-99 L217; SRC-18 L221)

**Stale-risk:** SRC-99's named direct-model examples such as Microsoft Phi and DeepSeek reflect the captured corpus and may change. (SRC-99 L253–254)

## Appearances in the corpus

- Core chat app unit and state management. (SRC-99 L217–305)
- Endpoint and API selection guidance. (SRC-18 L219)
- RAG grounded answer implementation. (SRC-102 L251–256)
- File search request surface. (SRC-255 L232–240)

## Connections

- [[chat-completions-api]] — closest exam decision boundary. (SRC-18 L221; SRC-98 L217–233; SRC-99 L217–225)
- [[conversation-state]] — response IDs and history management are the main state mechanism. (SRC-99 L256–288)
- [[openai-sdk]] — one access path for the API. (SRC-99 L217)
- [[foundry-sdk]] — another access path, especially for Foundry project integration. (SRC-99 L217; SRC-102 L251–256)
- [[retrieval-augmented-generation]] — grounded answers can use Responses after retrieval. (SRC-102 L251–256)
- [[file-search-tool]] — built-in retrieval tool used through the Responses API. (SRC-255 L231–239)
- *Also linked from:* [[agent-publishing]] · [[agent-tools]] · [[azure-openai]] · [[code-interpreter-tool]] · [[decision-boundaries]] · [[endpoints-and-sdk-choice]] · [[foundry-agent-service]] · [[function-calling]] · [[generation-parameters]] · [[generative-ai-fundamentals]] · [[model-playgrounds]] · [[overview]] · [[prompt-engineering]] · [[quotas-rate-limits-and-cost]] · [[vision-enabled-chat]] · [[web-search-tool]]

## Sources

- SRC-18 — [[src-18-choose-endpoint-sdk]] — API choice summary.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — core Responses API behavior and state.
- SRC-98 — [[src-98-generate-responses-chatcompletions-api]] — contrast with ChatCompletions.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG with Responses.
- SRC-255 — [[src-255-file-search-tool]] — file search with Responses.

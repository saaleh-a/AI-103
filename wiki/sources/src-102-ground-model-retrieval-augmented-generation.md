---
title: "Ground your model with Retrieval Augmented Generation"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains grounding, RAG's retrieve-augment-generate flow, embeddings, Azure AI Search, and when to use RAG."
area: generative-apps
source_ids: [SRC-102]
objectives: [G02, P03]
tags: [rag, grounding, azure-ai-search, embeddings, vector-search]
aliases: ["SRC-102"]
source_kind: learn-unit
module: "Optimize generative AI model performance with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "3 of 8"
presenters: []
raw_file: "102-Ground your model with Retrieval Augmented Generation - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/3-retrieval-augmented-generation"
ingest_depth: full
---
# Ground your model with Retrieval Augmented Generation

*learn-unit · Optimize generative AI model performance with Microsoft Foundry · unit 3 of 8 · SRC-102*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-102 |
| Raw file | 102-Ground your model with Retrieval Augmented Generation - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Optimize generative AI model performance with Microsoft Foundry |
| Unit / episode | 3 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/3-retrieval-augmented-generation |
| Teaching content | L211–265 of 295 |
| Content length | ~980 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

RAG grounds a model by retrieving relevant trusted data, adding it to the prompt, and then generating a response from that augmented context. (SRC-102 L218; SRC-102 L226–231)
This unit positions Azure AI Search as the retrieval component for Microsoft Foundry RAG solutions, using indexes, embeddings, and search techniques including keyword, semantic, vector, and hybrid search. (SRC-102 L241–250)

## Key claims

- Prompt engineering can shape responses, but it cannot give a model knowledge that is absent from training data or private organizational sources. (SRC-102 L217)
- Grounding provides relevant factual data with the user's question so the model can base its answer on trusted context. (SRC-102 L218–225)
- RAG follows three steps: retrieve relevant information, augment the prompt with context, and generate a grounded response. (SRC-102 L226–231)
- Embeddings represent text as floating-point vectors that capture meaning and support semantic matching. (SRC-102 L232–239)
- Azure AI Search can bring data into a searchable index, store generated vector representations, and retrieve relevant results for a user's question. (SRC-102 L241–245)
- Hybrid search combines keyword, semantic, and vector search and is recommended for generative AI applications. (SRC-102 L246–250)
- The azure-ai-projects SDK can provide an authenticated OpenAI client and use the Responses API to generate grounded answers. (SRC-102 L251–256)
- RAG fits domain-specific, frequently changing, factual, or post-training-cutoff information needs. (SRC-102 L257–263)

## How it works

Ungrounded generation relies only on model training data, which can produce fluent but fabricated answers. (SRC-102 L220–224)
Grounded generation supplies trusted context with the question so the model can answer from real data rather than general training memory. (SRC-102 L221–225)
A RAG pipeline searches a data source, inserts returned content into the prompt, and sends the augmented prompt to the model. (SRC-102 L226–231)
For retrieval, embeddings and cosine similarity let the system find meaning-similar documents even when exact words differ. (SRC-102 L232–239)
In Microsoft Foundry, Azure AI Search stores the index and can use uploaded files or data from Azure Blob Storage, Azure Data Lake Storage Gen2, or Microsoft OneLake. (SRC-102 L241–245)

## Code and API patterns

The unit says the Azure AI Foundry SDK pattern connects an Azure AI Search index to a model through a Microsoft Foundry project, gets an authenticated OpenAI client through `azure-ai-projects`, and uses the Responses API for grounded answers. (SRC-102 L251–256)
The captured code block itself is not present beyond `Python` and `Copy` placeholders. (SRC-102 L253–255)

## Key terms

- Grounding — providing relevant trusted data with the user's question so the model answers based on that data. (SRC-102 L218–225)
- RAG — a pattern that retrieves relevant information, adds it to a prompt, and generates a grounded response. (SRC-102 L226–231)
- Embedding — a vector representation of text that captures meaning. (SRC-102 L232–234)
- Cosine similarity — a measure of vector closeness based on the angle between vectors. (SRC-102 L239)
- Hybrid search — a combined keyword, semantic, and vector search approach recommended for generative AI applications. (SRC-102 L246–250)

## Decision boundaries and exam cues

- **Inference:** Choose RAG when the scenario's failure is missing private, current, domain-specific, or post-cutoff facts. (SRC-102 L217–225; SRC-102 L257–263)
- **Inference:** Do not choose RAG primarily for brand voice or output style; those are treated elsewhere as behavior/consistency problems. (SRC-102 L257–263; SRC-95 L217–231)
- **Inference:** If the question mentions Azure AI Search, indexes, embeddings, vector search, semantic search, or hybrid search in a grounding context, the source points to RAG. (SRC-102 L241–250)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

The source says to consider Foundry IQ when building agents that need grounded knowledge without managing search infrastructure, but it does not teach Foundry IQ in this unit. (SRC-102 L264–265)
The unit uses both Microsoft Foundry and Azure AI Foundry SDK wording around the same RAG implementation area. (SRC-102 L241–256)

## Relation to other sources

SRC-178 establishes the limitation that prompt engineering cannot provide missing catalog knowledge. (SRC-178 L280–286)
SRC-19 compares RAG with prompt engineering and fine-tuning and says RAG is added when accuracy requires specific, current, or private data. (SRC-19 L220; SRC-19 L228–229; SRC-19 L255)
SRC-177 visually explains the same flow: vectorize input, retrieve similar document segments, and send user input plus search results to the model. (SRC-177 L318–364)

## Connections

- [[retrieval-augmented-generation]] — core mechanism.
- [[azure-ai-search]] — retrieval/index service named by the source.
- [[responses-api]] — generation API named for grounded answers.
- [[foundry-sdk]] — project SDK path named by the source.
- [[foundry-iq]] — related managed knowledge-store option for agents.
- *Module units:* [[src-116-introduction-optimize-generative-ai-model-performance-microsoft-foundry|1 Introduction]] · [[src-178-optimize-model-output-prompt-engineering|2 Optimize model output with prompt engineering]] · [[src-95-fine-tune-model-consistent-behavior|4 Fine-tune a model for consistent behavior]] · [[src-19-compare-combine-optimization-strategies|5 Compare and combine optimization strategies]] · [[src-77-exercise-optimize-generative-ai-model-performance|6 Exercise - Optimize generative AI model performance]] · [[src-161-module-assessment-optimize-generative-ai-model-performance-microsoft-foundry|7 Module assessment]] · [[src-202-summary-optimize-generative-ai-model-performance-microsoft-foundry|8 Summary]] · [[src-177-optimize-generative-ai-model-performance-microsoft-foundry-episode-5|episode 5]]

## Open questions

- The source names chunking quality as important through index quality, but it does not provide chunking design rules. (SRC-102 L228–231; SRC-102 L241–250)

## Sources

- SRC-102 — raw file: [[102-Ground your model with Retrieval Augmented Generation - Training - Microsoft Learn]]

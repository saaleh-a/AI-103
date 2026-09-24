---
title: "Retrieval-augmented generation (RAG)"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Grounding pattern that retrieves trusted content, adds it to the prompt, and generates answers with current, domain-specific context."
area: generative-apps
source_ids: [SRC-102, SRC-19, SRC-239, SRC-85, SRC-22, SRC-23, SRC-255, SRC-261, SRC-8, SRC-53, SRC-156]
objectives: [G02, G09, I02, I04, I07]
objective_gaps: []
tags: []
aliases: ["RAG", "grounding", "grounded generation", "retrieval augmented generation", "prompt grounding"]
---

# Retrieval-augmented generation (RAG)

## Summary

RAG retrieves relevant information from a data source, adds it to the prompt as context, and sends the augmented prompt to a language model so the response is grounded in trusted data rather than only model training. (SRC-102 L227–230)

## The problem it solves

Prompt engineering can guide behavior, but it cannot give a model knowledge it does not already have, including private organizational information or facts after the training cutoff. (SRC-102 L217)

Without grounding, a response can be grammatical and plausible but inaccurate or fabricated; grounding supplies trusted data with the user's question so the model answers from that data. (SRC-102 L220–225)

## Mental model

RAG is a three-step loop: retrieve evidence, augment the prompt with that evidence, then generate the answer. (SRC-102 L227–230; SRC-239 L224–227)

**Synthesis:** The retrieval component can be a custom Azure AI Search index, a managed Foundry IQ knowledge base, or a built-in file search/vector store, but the model still needs retrieved content inserted into its active context. (SRC-102 L240–256; SRC-85 L220–238; SRC-255 L235–241)

## What the sources say

### Optimization module

SRC-102 defines RAG as the most common technique for grounding a language model and says grounding improves factual accuracy by connecting the model to information specific, current and relevant to the user's needs. (SRC-102 L218; SRC-102 L221–225)

SRC-102 says embeddings and vector search are critical for finding relevant information, and Azure AI Search provides the retrieval component for RAG in Microsoft Foundry. (SRC-102 L232–245)

SRC-102 says hybrid search combines keyword, semantic and vector search and is recommended for generative AI applications. (SRC-102 L246–250)

SRC-19 compares optimization strategies: RAG retrieves external data for accuracy and current context, while fine-tuning changes model behavior and prompt engineering remains the foundation. (SRC-19 L217–229)

### Agent and Foundry IQ module

SRC-239 explains RAG for agents as a move from static training data to dynamic knowledge retrieval, with real-time updates, source transparency and factual grounding. (SRC-239 L221–231)

SRC-85 says Foundry IQ is a managed knowledge platform for AI agents built on Azure AI Search, providing RAG retrieval capabilities as a shared service for multiple agents. (SRC-85 L219–220)

SRC-85 says Foundry IQ handles discovery, chunking, embeddings, indexing and automatic reindexing when documents change. (SRC-85 L232–238)

SRC-22 says Foundry IQ knowledge bases can connect multiple data-source types: Azure AI Search Index, Azure Blob Storage, Web, SharePoint Remote, SharePoint Indexed and OneLake. (SRC-22 L12–14)

SRC-23 says retrieval instructions must tell the agent when to retrieve, how to cite and what to do when information is not found. (SRC-23 L224–233)

### AI Search, file search and Content Understanding

SRC-261 says Azure AI Search indexes and queries structured, semi-structured and non-structured content, uses AI skills to enrich indexes, and supports RAG with vector-based indexes for prompt grounding data. (SRC-261 L218–226)

SRC-255 says `file_search` retrieves relevant information from uploaded documents during a response, using semantic retrieval, vector stores, citations and matched results for traceability. (SRC-255 L218–226)

SRC-255 says file search works by uploading documents to a vector store, sending `file_search` in the tools array, retrieving indexed chunks, injecting matching passages and generating the response. (SRC-255 L235–241)

SRC-8 says Content Understanding analysis output includes `markdown`, a text representation useful for search and RAG scenarios. (SRC-8 L232–237)

### Evaluation and safety

SRC-53 lists RAG integration as an improvement when evaluation scores are lower than required and responses need grounding in data. (SRC-53 L286–291)

SRC-156 places RAG in the system-message-and-grounding mitigation layer for reducing potential harms by retrieving contextual data from trusted sources and including it in prompts. (SRC-156 L232–237)

## How it works in Azure

1. Ingest or connect data: use Azure AI Search indexes, Foundry IQ data sources, uploaded files/vector stores, or downstream content such as Content Understanding markdown. (SRC-102 L240–245; SRC-22 L12–14; SRC-255 L235–238; SRC-8 L232–237)
2. Represent and retrieve: generate embeddings, use vector/semantic/keyword/hybrid search, and return relevant content. (SRC-102 L232–250; SRC-261 L218–226)
3. Augment the prompt: inject retrieved context into the system message, tool context or model request. (SRC-102 L251–256; SRC-255 L238–241)
4. Generate and cite: the agent or app responds using retrieved content; Foundry IQ instructions should require source attribution and fallback behavior. (SRC-23 L231–252)

## Code and configuration

The corpus's captured code blocks are mostly placeholders, but it states these implementation shapes:

- Azure AI Search RAG: create an index with embeddings, query it, then use an authenticated OpenAI client and Responses API for grounded answers. (SRC-102 L241–256)
- Foundry IQ: configure knowledge bases and data sources once; Foundry IQ handles processing, embeddings, indexing and reindexing. (SRC-85 L232–238; SRC-22 L12–14)
- Retrieval instructions: specify when to retrieve, citation format and fallback when information is missing. (SRC-23 L231–233)
- File search: include `file_search` in the tools array with vector store IDs. (SRC-255 L235–240)

## Decision boundaries

| Need | Choose | Why |
|---|---|---|
| Current, private or domain-specific facts | RAG | RAG retrieves current/private data at query time without retraining. (SRC-102 L258–261) |
| Output style, tone or format consistency | Fine-tuning or prompt engineering first | Fine-tuning embeds desired behavior; prompt engineering defines behavior; RAG supplies knowledge. (SRC-19 L217–229) |
| Enterprise agent knowledge across many stores | Foundry IQ | It is a managed shared knowledge platform for agents built on Azure AI Search. (SRC-85 L220; SRC-22 L12–14) |
| Existing enterprise search index and custom retrieval pipeline | Azure AI Search Index / Azure AI Search | Azure AI Search supports indexes, AI skills, semantic ranking and vector-based grounding data. (SRC-22 L16–20; SRC-261 L218–226) |
| Small set of uploaded files for a model response | `file_search` tool | The model searches uploaded indexed files and returns grounded answers. (SRC-255 L218–226) |
| Clean representation from multimodal documents/images | Content Understanding before RAG | Markdown output is useful for search and RAG scenarios. (SRC-8 L232–237) |

**Inference:** The exam boundary is not "RAG versus prompt engineering" as competitors; prompt engineering controls behavior, while RAG supplies missing factual context. (SRC-19 L217–229; SRC-102 L217–230)

## Failure modes and misconceptions

- A good model without grounding can still fabricate when the needed facts are absent from training data. (SRC-102 L217–225)
- RAG response quality depends on search index quality and chunking/indexing quality. (SRC-19 L231–235)
- A knowledge base alone is insufficient if agent instructions do not force retrieval, citations and fallback behavior. (SRC-23 L219–233)
- File search quality depends on document quality, coverage and chunk relevance. (SRC-255 L248–250)
- **Inference:** RAG does not replace safety systems or evaluation; the corpus positions it as one mitigation/improvement layer among others. (SRC-53 L286–291; SRC-156 L232–237)

## Solution Engineering transfer

**Inference:** Customer signal: "The model gives plausible but wrong answers about our policies/catalog/pricing" maps to RAG because the issue is missing trusted context. (SRC-102 L217–225; SRC-102 L258–263)

**Inference:** Discovery questions: "Where does the trusted data live?", "How current must answers be?", "Do users need citations?", and "Is the data a few uploaded files or an enterprise knowledge estate?" (SRC-22 L12–14; SRC-23 L231–252; SRC-255 L218–226)

**Inference:** Trade-off: Azure AI Search gives more control over indexes and retrieval pipelines; Foundry IQ reduces infrastructure work for agents; file search is narrower and document-upload centric. (SRC-102 L240–256; SRC-85 L220–238; SRC-255 L218–255)

## Connections

- [[azure-ai-search]] — retrieval/index backbone for custom RAG and Foundry IQ. (SRC-102 L240–245; SRC-85 L220; SRC-261 L218–226)
- [[foundry-iq]] — managed knowledge platform for agent RAG. (SRC-85 L220)
- [[file-search-tool]] — built-in document-grounding tool for uploaded files. (SRC-255 L218–241)
- [[responses-api]] — response-generation surface named for grounded answers. (SRC-102 L251–256; SRC-255 L232–240)
- [[embeddings-and-vector-search]] — embeddings and vector search make semantic retrieval possible. (SRC-102 L232–250)
- [[semantic-ranking]] — Foundry IQ and Azure AI Search sources name semantic relevance and ranking. (SRC-22 L17–20; SRC-102 L246–250)
- [[azure-content-understanding]] — can produce markdown representations useful for RAG. (SRC-8 L232–237)
- [[model-and-app-evaluation]] — low evaluation scores can trigger RAG integration as a remediation. (SRC-53 L286–291)
- *Also linked from:* [[content-understanding-analyzers]] · [[conversation-state]] · [[fine-tuning]] · [[foundry-sdk]] · [[generative-ai-fundamentals]] · [[knowledge-bases-and-sources]] · [[knowledge-mining]] · [[model-selection]] · [[overview]] · [[prompt-engineering]]

## Sources

- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — core grounding and Azure AI Search RAG flow.
- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — RAG compared with prompt engineering and fine-tuning.
- SRC-239 — [[src-239-understanding-rag-agents]] — RAG for agents.
- SRC-85 — [[src-85-explore-foundry-iq]] — Foundry IQ managed RAG platform.
- SRC-22 — [[src-22-configure-data-sources-knowledge-bases]] — Foundry IQ data sources.
- SRC-23 — [[src-23-configure-retrieval-foundry-iq]] — retrieval instructions and quality criteria.
- SRC-255 — [[src-255-file-search-tool]] — file search grounding tool.
- SRC-261 — [[src-261-what-is-azure-ai-search]] — Azure AI Search and RAG.
- SRC-8 — [[src-8-analyze-images-content-understanding]] — markdown output for search and RAG.
- SRC-53 — [[src-53-evaluate-model-performance]] — RAG as evaluation remediation.
- SRC-156 — [[src-156-mitigate-potential-harms]] — RAG as grounding-layer mitigation.

## Open questions

The corpus does not provide detailed chunk-size, embedding-model, reranking, or citation-format recipes for production RAG beyond the high-level instructions and service roles cited above. (SRC-19 L231–235; SRC-23 L231–252; SRC-102 L232–250)


---
title: "Embeddings, vector and hybrid search"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Embeddings turn text into vectors for similarity search; the corpus defines vector search and only briefly names hybrid search for grounding."
area: retrieval
source_ids: [SRC-102, SRC-89, SRC-19, SRC-259, SRC-191]
objectives: [I02, G02, P02, P03]
objective_gaps: []
tags: []
aliases: ["vector search", "hybrid search", "embeddings", "vector index", "embedding model", "cosine similarity"]
---

# Embeddings, vector and hybrid search

## Summary

Embeddings are numerical vector representations of text that capture meaning; vector search uses those vectors to find semantically similar content, and the corpus names hybrid search as combining keyword, semantic, and vector search for grounding. (SRC-102 L232–250)

## The problem it solves

RAG needs to find relevant source material even when the user's words do not exactly match the documents. The corpus says embeddings and vector search are critical for efficiently finding the most relevant information in a data source. (SRC-102 L232–234)

## Mental model

An embedding places a piece of text into a multidimensional meaning space. Texts with similar meaning sit close together, so a question can be embedded and compared with document chunks to find likely relevant content. (SRC-102 L234–245)

## What the sources say

- SRC-102 defines an embedding as a mathematical representation of text as a vector, a list of floating-point numbers that captures the meaning of words, sentences, or documents. (SRC-102 L232–234)
- SRC-102 says embeddings are created by sending content to an embedding model, such as an Azure OpenAI embedding model available in Microsoft Foundry. (SRC-102 L234)
- SRC-102 explains cosine similarity as measuring how close two vectors are by calculating the angle between them; values near 1 indicate high similarity. (SRC-102 L238–240)
- SRC-102 says Azure AI Search can create an index using an embedding model, store vector representations, convert a user's question to an embedding, search for similar content, and return relevant results. (SRC-102 L241–245)
- SRC-89 says embedding models such as Ada and Cohere convert text into numerical representations for semantic search, recommendation systems, and RAG scenarios. (SRC-89 L236–238)
- SRC-19 says RAG can improve factual accuracy with query-time data but requires search service setup, index maintenance, and processing embeddings; quality depends on chunking and indexing. (SRC-19 L229)
- SRC-259 says the `file_search` tool searches uploaded files in a dedicated vector search index to ground responses in specific knowledge. (SRC-259 L224–226)

## How it works in Azure

For RAG in Microsoft Foundry, Azure AI Search provides the retrieval component: data is added, an embedding model creates vector representations, the index is stored in Azure AI Search, and user questions are converted to embeddings for similarity search. (SRC-102 L241–245)

The model catalog includes embedding models as specialized models rather than chat-completion models; their job is conversion to numerical representations, not direct conversational answering. (SRC-89 L232–238)

The Responses API tool list includes `file_search`, which uses a dedicated vector search index over uploaded files for grounding. (SRC-259 L219–226)

## Code and configuration

The corpus does not provide the full Azure AI Search vector-index schema or SDK setup. It does provide the conceptual configuration path: choose or deploy an embedding model, create vector representations of content, store them in an Azure AI Search index, embed the user question, and search for the most similar content. (SRC-102 L234–245)

**Stale-risk:** Specific embedding model names such as Ada and Cohere are captured examples from the model catalog source and may change. (SRC-89 L236–238)

## Decision boundaries

- **Keyword search:** matches exact terms in the query to text in the index. (SRC-102 L247)
- **Semantic search:** uses semantic models to match meaning rather than exact keywords. (SRC-102 L248)
- **Vector search:** uses embeddings to find semantically similar content. (SRC-102 L249)
- **Hybrid search:** the corpus says it combines keyword, semantic, and vector search for the most accurate results and is recommended for generative AI applications; it does not teach hybrid-search configuration beyond that statement. (SRC-102 L250; SRC-191 L192–195)
- **Vector search vs file search tool:** vector search is the retrieval mechanism; `file_search` is a tool that exposes a dedicated vector search index over uploaded files to a model. (SRC-102 L249; SRC-259 L224–226)

## Failure modes and misconceptions

- Treating embeddings as readable summaries is wrong: the corpus defines them as numerical vectors, not human-facing text. (SRC-102 L234)
- Treating vector search as exact keyword search is wrong: vector search uses embeddings for semantic similarity, while keyword search matches exact terms. (SRC-102 L247–249)
- Treating hybrid search as fully taught by the corpus is wrong: objective I02 names semantic, hybrid, and vector search, but the body content only defines hybrid search in one line and recommends it for generative AI applications. (SRC-102 L250; SRC-191 L192–195)
- Assuming RAG quality comes only from the embedding model is incomplete: the corpus says quality also depends on the search index and how well data is chunked and indexed. (SRC-19 L229)

## Solution Engineering transfer

**Inference:** Ask whether the customer needs exact-term recall, meaning-based recall, or both. The corpus maps exact terms to keyword search, meaning to semantic/vector methods, and generative-AI grounding to hybrid search, but it does not provide a tuning guide. (SRC-102 L247–250)

## Connections

- [[retrieval-augmented-generation]] — embeddings and vector search power the retrieval step for RAG.
- [[azure-ai-search]] — stores indexes used for vector retrieval in the corpus examples.
- [[semantic-ranking]] — another meaning-oriented retrieval-quality technique.
- [[search-queries]] — keyword/full-text querying is the lexical contrast.
- [[file-search-tool]] — uses a dedicated vector search index over uploaded files.
- [[model-catalog]] — embedding models are selected from the model catalog.
- [[src-102-ground-model-retrieval-augmented-generation]] — primary source for embeddings, vector search, and hybrid search.
- [[src-89-explore-model-catalog]] — embedding models in the catalog.
- *Also linked from:* [[foundry-iq]] · [[search-indexes]]

## Sources

- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — embeddings, cosine similarity, vector search, and hybrid search in RAG.
- SRC-89 — [[src-89-explore-model-catalog]] — embedding models as specialized catalog models.
- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — RAG requires indexing and embedding processing.
- SRC-259 — [[src-259-what-are-tools]] — file search tool uses a vector search index.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official objective names semantic, hybrid, and vector search for grounding.

## Open questions

- The corpus does not specify vector field schemas, dimensionality, HNSW/exhaustive settings, hybrid weighting, or semantic ranker configuration.

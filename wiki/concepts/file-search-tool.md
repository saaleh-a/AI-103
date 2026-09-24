---
title: "File search tool"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Built-in retrieval tool that grounds a model or agent in uploaded, indexed files through semantic/vector search."
area: agents
source_ids: [SRC-4, SRC-91, SRC-254, SRC-255, SRC-257, SRC-259]
objectives: [P03, P04, G02, G08, G09, I02, I05]
objective_gaps: []
tags: []
aliases: ["file_search", "vector store", "uploaded file search", "document-grounded tool"]
---

# File search tool

## Summary

`file_search` is the built-in tool for grounding model or agent answers in uploaded files. It indexes documents in a vector store, retrieves relevant chunks, and supplies those passages to the model for a grounded answer. (SRC-255 L218–227; SRC-91 L237)

## The problem it solves

A general model may not know a team's policies, contracts, manuals, or internal documents. File Search lets the model answer from private or domain-specific files rather than relying only on general training data. (SRC-255 L218–221)

## Mental model

File Search is a small RAG pipeline wrapped as a tool: upload documents, index them into a searchable vector store, let the model search for relevant chunks, inject matching passages into context, and generate an answer from those passages. (SRC-255 L224–241)

## What the sources say

- The Responses API tools overview defines `file_search` as a tool that searches specific files uploaded to a dedicated vector search index so responses can be grounded in specific knowledge. (SRC-259 L225–227)
- The dedicated source says File Search retrieves relevant information from uploaded documents during a response. (SRC-255 L218)
- It highlights document-grounded answers, semantic retrieval, vector store integration, citations/transparency, and enterprise relevance. (SRC-255 L222–227)
- The Foundry agent tools source says File Search provides RAG by searching uploaded documents, indexing them in a vector store, and retrieving relevant information when needed. (SRC-91 L237)
- That same source says File Search supports PDF, Word `.docx`, plain text `.txt`, Markdown `.md`, and other formats. (SRC-91 L238)
- In Agent Framework, file search is a service-provided tool when supported by the provider. (SRC-4 L217–220)

## How it works in Azure

For Responses API usage, the application includes `file_search` in the tools array with vector store IDs; the model searches indexed chunks and receives matching passages. (SRC-255 L235–241) For Foundry agents, adding File Search creates or selects a vector store for document indexing. (SRC-91 L260)

## Code and configuration

The captured Learn code is elided, but the source gives the configuration sequence: upload documents to a vector store, include `file_search` with vector store IDs in the request, let the model retrieve indexed chunks, and inspect retrieval results during development for troubleshooting. (SRC-255 L235–249)

## Decision boundaries

- Use [[file-search-tool]] when the grounding source is a specific set of uploaded files or documents. (SRC-255 L218–227)
- Use [[web-search-tool]] when the grounding source is current public web information rather than your own files. (SRC-257 L218–227)
- Use [[azure-ai-search]] when the source is an existing enterprise-scale search index rather than files uploaded directly to the agent; the Foundry source explicitly contrasts Azure AI Search with File Search. (SRC-91 L240–241)
- Use [[foundry-iq]] for enterprise-scale agents that need large quantities of data in multiple data stores, because the File Search source names Foundry IQ as the alternative to consider. (SRC-255 L255)
- Use [[code-interpreter-tool]] when the main task is computation over data, not retrieval of passages. (SRC-254 L222–226)

**Inference:** The exam clue for File Search is usually "uploaded documents" or "specific files" plus grounded answers; "existing search indexes" points away from File Search toward Azure AI Search. (SRC-255 L218–227; SRC-91 L240–241)

## Failure modes and misconceptions

- Retrieval quality depends on document quality, coverage, and chunk relevance. (SRC-255 L249)
- Very large or mixed-domain vector stores can return less focused context, so stores should be scoped carefully. (SRC-255 L247–252)
- Updated source files may require re-indexing before new content is searchable. (SRC-255 L251)
- Retrieval improves grounding but does not remove the need for human review in sensitive decisions. (SRC-255 L252)

## Solution Engineering transfer

**Inference:** Customer signal: "Our assistant must answer from our policy PDFs." Discovery question: "Are the documents a bounded uploaded set, an enterprise search estate, or multiple enterprise data stores?" Choose File Search for bounded uploaded documents, Azure AI Search for existing search indexes, and Foundry IQ when a Foundry agent needs multi-source enterprise knowledge. (SRC-255 L218–255; SRC-91 L240–241)

## Connections

- [[agent-tools]] — File Search is one built-in/service-provided tool.
- [[retrieval-augmented-generation]] — File Search wraps a RAG pattern for uploaded files.
- [[azure-ai-search]] — nearby enterprise search alternative.
- [[foundry-iq]] — multi-source enterprise knowledge alternative named by the source.
- [[web-search-tool]] — closest grounding confusion: private files vs current web.
- [[retrieval-options-compared]] — broader retrieval decision boundary.
- [[src-255-file-search-tool]] — dedicated source page for this tool.
- [[src-91-extend-agent-capabilities-tools]] — agent-context description and Azure AI Search contrast.
- *Also linked from:* [[decision-boundaries]] · [[embeddings-and-vector-search]] · [[function-calling]] · [[overview]] · [[responses-api]]

## Sources

- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — service-provided tool category.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — File Search in Foundry agent tool catalog and Azure AI Search contrast.
- SRC-254 — [[src-254-code-interpreter-tool]] — Code Interpreter boundary for computation rather than retrieval.
- SRC-255 — [[src-255-file-search-tool]] — dedicated file-search behavior, flow, practices, and limits.
- SRC-257 — [[src-257-web-search-tool]] — Web Search boundary for public current information.
- SRC-259 — [[src-259-what-are-tools]] — Responses API tool overview.

## Open questions

- The corpus does not specify vector-store limits, chunking defaults, file-size limits, citation response schema, or exact supported formats beyond examples. (SRC-91 L238; SRC-255 L249–255)




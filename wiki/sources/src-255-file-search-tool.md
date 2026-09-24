---
title: "Use the file_search tool"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains how file_search grounds model answers in uploaded documents indexed through vector stores."
area: agents
source_ids: [SRC-255]
objectives: [G02, G03, G05, G09]
tags: [file-search, vector-store, grounding, responses-api]
aliases: ["SRC-255"]
source_kind: learn-unit
module: "Develop generative AI apps that use tools"
learning_path: "Develop generative AI apps in Azure"
unit: "5 of 9"
presenters: []
raw_file: "255-Use the file_search tool - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/05-file-search"
ingest_depth: full
---

# Use the file_search tool

*learn-unit · Develop generative AI apps that use tools · unit 5 of 9 · SRC-255*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-255 |
| Raw file | `255-Use the file_search tool - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop generative AI apps that use tools |
| Unit / episode | 5 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/05-file-search |
| Teaching content | L212–255 of 285 |
| Content length | ~466 words |
| Capture quality | High for prose; code block is omitted by capture. |
| Ingest depth | full |

## TL;DR

The `file_search` tool lets a model retrieve relevant information from uploaded documents during a response (SRC-255 L218). It supports private or domain-specific files such as policies, manuals, contracts, and internal knowledge bases (SRC-255 L220). The flow is to upload files to a vector store, include `file_search` with vector store IDs, let the model retrieve indexed chunks, and generate an answer from retrieved context (SRC-255 L235–241).

## Key claims

- `file_search` retrieves relevant information from uploaded documents during a model response (SRC-255 L218).
- It helps a model answer questions using private or domain-specific files instead of only general training data (SRC-255 L220).
- The tool is especially useful when accurate responses must come from trusted internal documents (SRC-255 L221).
- Key features include document-grounded answers, semantic retrieval, vector store integration, citations and transparency, and enterprise relevance (SRC-255 L222–227).
- The process prepares files by uploading documents to a vector store, includes `file_search` with vector store IDs, searches indexed chunks, injects matching passages, and generates a contextual answer (SRC-255 L235–241).
- Foundry IQ knowledge stores are suggested for enterprise-scale agents that need large quantities of data in multiple data stores (SRC-255 L254–255).

## How it works

The source describes a retrieval pipeline: documents are uploaded into a vector store, the request includes `file_search` and vector store IDs, the model searches indexed chunks, matching passages are provided to the model, and the final answer uses that retrieved document context (SRC-255 L235–241). Retrieval depends on document quality, coverage, and chunk relevance, so mixed-domain or very large stores may return less focused context (SRC-255 L249–250).

## Code and API patterns

The source states that the OpenAI Responses API request includes `file_search` in the tools array with vector store IDs (SRC-255 L238; SRC-255 L235–238). The captured Python example is omitted from the raw file beyond the `Python` and `Copy` markers (SRC-255 L230–234).

## Key terms

- Vector store: an indexed document collection used by `file_search` to search uploaded content (SRC-255 L225; SRC-255 L235–238).
- Semantic retrieval: finding relevant passages by meaning rather than only exact keyword matching (SRC-255 L224).
- Retrieval results: matched passages that can be included during development for troubleshooting (SRC-255 L246).

## Decision boundaries and exam cues

- **Inference:** Choose `file_search` when the model must answer from uploaded policy documents, manuals, contracts, or internal knowledge bases (SRC-255 L218–221).
- **Inference:** Choose `web_search` instead when the needed content is current public web information rather than uploaded files (SRC-257 L218–221).
- **Inference:** For enterprise-scale agents over large multi-store data estates, consider Foundry IQ rather than only `file_search` (SRC-255 L254–255).
- **Inference:** Re-indexing is a clue when source files change, because updated files may not be searchable until re-indexed (SRC-255 L251).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- Retrieval improves grounding but does not replace human review for sensitive decisions (SRC-255 L252).
- Updated source files may require re-indexing before new content is searchable (SRC-255 L251).
- **Stale-risk:** The source's Foundry IQ recommendation reflects the corpus's current enterprise-scale guidance and may evolve with product changes (SRC-255 L254–255).

## Relation to other sources

- [[src-259-what-are-tools]] names `file_search` as a Responses API tool over files uploaded to a dedicated vector search index (SRC-259 L225).
- [[src-63-exercise-create-generative-ai-chat-app-that-uses-tools]] uses `file_search` to ground responses in the contents of files (SRC-63 L214–215).
- [[src-50-develop-generative-ai-apps-that-tools-episode-4]] explains vector stores, chunking, embeddings, upload, and vector store IDs in the episode demonstration (SRC-50 L269–363; SRC-50 L672–754).

## Connections

- [[file-search-tool]] — canonical concept for this built-in tool.
- [[responses-api]] — API used to include the tool and vector store IDs.
- [[embeddings-and-vector-search]] — underlying retrieval mechanism named in the episode counterpart.
- [[foundry-iq]] — enterprise-scale alternative named by this source.
- [[retrieval-options-compared]] — synthesis page for grounding choices.
- *Module units:* [[src-123-introduction-develop-generative-ai-apps-that-tools|1 Introduction]] · [[src-259-what-are-tools|2 What are tools-]] · [[src-254-code-interpreter-tool|3 Use the code_interpreter tool]] · [[src-257-web-search-tool|4 Use the web_search tool]] · [[src-256-function-tool|6 Use the function tool]] · [[src-63-exercise-create-generative-ai-chat-app-that-uses-tools|7 Exercise - Create a generative AI chat app that uses tools]] · [[src-163-module-assessment-develop-generative-ai-apps-that-tools|8 Module assessment]] · [[src-198-summary-develop-generative-ai-apps-that-tools|9 Summary]] · [[src-50-develop-generative-ai-apps-that-tools-episode-4|episode 4]]

## Open questions

- The source does not define vector store limits, supported file types, or chunking controls; it only describes the high-level flow and limitations (SRC-255 L235–252).

## Sources

- SRC-255 — raw file: [[255-Use the file_search tool - Training - Microsoft Learn]]

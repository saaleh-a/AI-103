---
title: "Summary — Build knowledge-enhanced AI agents with Foundry IQ"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Summarizes RAG, shared Foundry IQ knowledge bases, retrieval-quality tuning, and instruction-driven agent behavior."
area: retrieval
source_ids: [SRC-194]
objectives: []
tags: [summary, foundry-iq, rag, retrieval-quality, agent-instructions]
aliases: ["SRC-194"]
source_kind: learn-unit
module: "Build knowledge-enhanced AI agents with Foundry IQ"
learning_path: "Develop AI agents on Azure"
unit: "8 of 8"
presenters: []
raw_file: "194-Summary - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/8-summary"
ingest_depth: full
---

# Summary — Build knowledge-enhanced AI agents with Foundry IQ

*learn-unit · Build knowledge-enhanced AI agents with Foundry IQ · unit 8 of 8 · SRC-194*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-194 |
| Raw file | 194-Summary - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build knowledge-enhanced AI agents with Foundry IQ |
| Unit / episode | 8 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/8-summary |
| Teaching content | L211–235 of 263 |
| Content length | ~360 words |
| Capture quality | High; Learn summary with no code listing. |
| Ingest depth | full |

## TL;DR

The summary says Foundry IQ transforms simple chatbots into knowledge-enhanced enterprise tools by giving agents access to organizational information. (SRC-194 L214–235) It recaps four pillars: RAG grounding, shared knowledge bases, retrieval-quality techniques, and instructions that control when agents retrieve, cite, and fall back. (SRC-194 L214–234)

## Key claims

- RAG addresses agent limitations by retrieving relevant information, augmenting queries with factual context, and generating responses grounded in organizational content. (SRC-194 L214–218)
- Foundry IQ removes the need to build custom RAG infrastructure for every agent by providing shared knowledge bases connected to SharePoint, Azure Blob Storage, OneLake, or Azure AI Search indexes. (SRC-194 L219–223)
- Improving a knowledge base benefits every connected agent immediately. (SRC-194 L222–223)
- Retrieval effectiveness depends on data quality and can be improved with scoring profiles, semantic ranking, and custom analyzers. (SRC-194 L224–228)
- Effective agent instructions specify when to retrieve, how to cite, and what to do when unsure. (SRC-194 L229–234)
- The recommended next step is to start with a high-value knowledge domain, build a knowledge base, configure retrieval instructions, and test before deploying. (SRC-194 L235)

## How it works

The summary compresses the module into an implementation sequence. (SRC-194 L214–235) First, use RAG so the agent retrieves and grounds answers in organizational content. (SRC-194 L214–218) Second, use Foundry IQ knowledge bases so multiple agents share managed data access. (SRC-194 L219–223) Third, tune retrieval with scoring profiles, semantic ranking, and custom analyzers. (SRC-194 L224–228) Fourth, use instructions and testing to make behavior consistent. (SRC-194 L229–235)

## Code and API patterns

Not covered by this source.

## Key terms

- **RAG-enabled agents** — agents that retrieve relevant information, augment queries with factual context, and generate grounded responses. (SRC-194 L214–218)
- **Shared knowledge platform** — Foundry IQ knowledge bases that multiple agents can use. (SRC-194 L219–223)
- **Scoring profiles** — retrieval tuning that boosts fields or attributes to surface more relevant results. (SRC-194 L224–226)
- **Semantic ranking** — AI-based ranking that understands meaning and context beyond keywords. (SRC-194 L226–227)
- **Custom analyzers** — retrieval configuration for specialized content such as HTML, product codes, or technical terminology. (SRC-194 L227–228)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks how to improve result ordering for important fields, use scoring profiles. (SRC-194 L224–226)
- **Inference:** If a scenario asks how to move beyond keyword matching, use semantic ranking. (SRC-194 L226–227)
- **Inference:** If a scenario contains specialized formats or terminology, custom analyzers are the retrieval-quality lever named by this source. (SRC-194 L227–228)
- **Inference:** If deployment readiness is the issue, test different query types and monitor production usage rather than assuming initial instructions are sufficient. (SRC-194 L229–234)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The summary names scoring profiles, semantic ranking, and custom analyzers but does not explain their configuration screens or API details. (SRC-194 L224–228)
- The source closes with Azure signup marketing text that is not part of the module's technical teaching. (SRC-194 L235)

## Relation to other sources

- [[src-239-understanding-rag-agents]] provides the detailed RAG mechanism summarized here. (SRC-239 L219–230; SRC-194 L214–218)
- [[src-85-explore-foundry-iq]] provides the platform details behind the shared knowledge-base summary. (SRC-85 L219–263; SRC-194 L219–223)
- [[src-23-configure-retrieval-foundry-iq]] provides the instruction, testing, and monitoring details summarized here. (SRC-23 L214–278; SRC-194 L229–235)

## Connections

- [[foundry-iq]] — the module summary's central platform. (SRC-194 L219–223)
- [[retrieval-augmented-generation]] — the grounding pattern summarized by the source. (SRC-194 L214–218)
- [[knowledge-bases-and-sources]] — data-source connections are part of the shared knowledge platform. (SRC-194 L219–223)
- [[semantic-ranking]] — named as a retrieval-quality technique. (SRC-194 L226–227)
- [[agent-testing-and-evaluation]] — the source calls for testing and production monitoring of behavior. (SRC-194 L229–234)
- *Module units:* [[src-141-introduction-build-knowledge-enhanced-ai-agents-foundry-iq|1 Introduction]] · [[src-239-understanding-rag-agents|2 Understanding RAG for agents]] · [[src-85-explore-foundry-iq|3 Explore Foundry IQ]] · [[src-22-configure-data-sources-knowledge-bases|4 Configure data sources for knowledge bases]] · [[src-23-configure-retrieval-foundry-iq|5 Configure retrieval with Foundry IQ]] · [[src-147-knowledge-check-build-knowledge-enhanced-ai-agents-foundry-iq|6 Knowledge check]] · [[src-76-exercise-integrate-ai-agent-foundry-iq|7 Exercise - Integrate an AI agent with Foundry IQ]] · [[src-16-build-knowledge-enhanced-ai-agents-foundry-iq-episode-10|episode 10]]

## Open questions

- The summary does not specify how to configure scoring profiles, semantic ranking, custom analyzers, or production monitoring telemetry. (SRC-194 L224–234)

## Sources

- SRC-194 — raw file: [[194-Summary - Training - Microsoft Learn]]

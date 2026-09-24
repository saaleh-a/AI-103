---
title: "Configure retrieval with Foundry IQ"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Teaches how agent instructions, testing, and monitoring control whether Foundry IQ-backed agents retrieve, cite, and stay grounded."
area: retrieval
source_ids: [SRC-23]
objectives: [G02, G08, G09, G12, P10, I05]
tags: [foundry-iq, retrieval-instructions, citations, testing, monitoring]
aliases: ["SRC-23"]
source_kind: learn-unit
module: "Build knowledge-enhanced AI agents with Foundry IQ"
learning_path: "Develop AI agents on Azure"
unit: "5 of 8"
presenters: []
raw_file: "23-Configure retrieval with Foundry IQ - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/5-configure-retrieval"
ingest_depth: full
---

# Configure retrieval with Foundry IQ

*learn-unit · Build knowledge-enhanced AI agents with Foundry IQ · unit 5 of 8 · SRC-23*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-23 |
| Raw file | 23-Configure retrieval with Foundry IQ - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build knowledge-enhanced AI agents with Foundry IQ |
| Unit / episode | 5 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/5-configure-retrieval |
| Teaching content | L211–278 of 308 |
| Content length | ~638 words |
| Capture quality | High; Learn unit references code examples but code text is not present in capture. |
| Ingest depth | full |

## TL;DR

The unit warns that well-indexed content still fails if the agent does not know when or how to use the knowledge base. (SRC-23 L214–218) Effective retrieval instructions specify when to retrieve, how to cite, and what to do when information is missing; testing and monitoring then verify the behavior in practice. (SRC-23 L227–278)

## Key claims

- Retrieval configuration is critical because an agent can have indexed content but still fail to use the knowledge base consistently. (SRC-23 L214–218)
- Without proper configuration, an agent might answer from training data, answer without citing, or retrieve and cite correctly. (SRC-23 L219–224)
- Agent instructions determine retrieval behavior and act as a contract for how the agent should use knowledge bases. (SRC-23 L225–226)
- Effective instructions state when to retrieve, how to cite, and what to do when unsure. (SRC-23 L227–233)
- Testing should cover multiple retrieval scenarios, and response quality should be evaluated for grounding, citation, relevance, and completeness. (SRC-23 L234–251)
- Production monitoring should track citation frequency, fallback frequency, query types, and retrieval accuracy. (SRC-23 L264–277)

## How it works

The source treats retrieval control as an instruction, test, and monitor loop. (SRC-23 L225–278) Instructions define mandatory knowledge-base use, source-attribution format, and fallback behavior when information is unavailable. (SRC-23 L227–233) Test conversations check whether the agent behaves as configured across query types. (SRC-23 L234–243) Production usage then supplies data for refining instructions, improving knowledge-base content, and adjusting search configurations. (SRC-23 L264–278)

## Code and API patterns

The capture labels several Python examples for basic instructions, effective instructions, test conversations, and specialized agent types, but the actual code text is not visible in the captured content. (SRC-23 L225–263) The implementation pattern the source does expose is conceptual: instructions should define scope, retrieval requirements, citation standards, and edge-case handling. (SRC-23 L257–263)

## Key terms

- **Retrieval behavior** — whether and how an agent uses a knowledge base before answering. (SRC-23 L214–226)
- **Grounding** — response information comes from the knowledge base rather than training data. (SRC-23 L244–248)
- **Citation** — factual claims include source references. (SRC-23 L244–249)
- **Fallback behavior** — the agent's response when the knowledge base lacks the answer. (SRC-23 L227–233)
- **Retrieval accuracy** — whether retrieved documents actually contain the answers users need. (SRC-23 L273–277)

## Decision boundaries and exam cues

- **Inference:** If a scenario says the knowledge base exists but responses are inconsistent or uncited, fix agent instructions and tests rather than only rebuilding the index. (SRC-23 L214–233)
- **Inference:** For customer-facing support agents, prioritize high accuracy and refusal to provide uncertain information. (SRC-23 L252–255)
- **Inference:** For internal research assistants, allow synthesis across documents and broader context when that matches the agent purpose. (SRC-23 L256–258)
- **Inference:** Treat ongoing monitoring as part of retrieval quality, because real users ask questions differently from test scenarios. (SRC-23 L264–278)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source references Python snippets, but the raw capture only shows labels such as `Python` and `Copy`, so the source page cannot recover exact SDK code. (SRC-23 L225–263)
- The source gives monitoring categories but does not specify telemetry tools, metric schemas, or thresholds for production. (SRC-23 L264–278)

## Relation to other sources

- [[src-22-configure-data-sources-knowledge-bases]] covers choosing the data sources that this unit assumes are already connected. (SRC-22 L8–83; SRC-23 L214–218)
- [[src-85-explore-foundry-iq]] describes built-in retrieval intelligence, while this source explains how instructions control agent behavior on top of it. (SRC-85 L242–251; SRC-23 L225–278)
- [[src-194-summary-build-knowledge-enhanced-ai-agents-foundry-iq]] summarizes the same instruction pattern: when to retrieve, how to cite, and what to do when unsure. (SRC-23 L227–233; SRC-194 L229–234)

## Connections

- [[foundry-iq]] — the platform whose retrieval behavior is configured. (SRC-23 L214–218)
- [[prompt-engineering]] — instructions shape when the agent retrieves, cites, and falls back. (SRC-23 L225–233)
- [[agent-testing-and-evaluation]] — the source requires systematic testing of retrieval behavior. (SRC-23 L234–251)
- [[observability-and-tracing]] — production monitoring tracks usage and retrieval quality signals. (SRC-23 L264–278)
- [[retrieval-augmented-generation]] — retrieval instructions determine whether the agent stays grounded in the retrieved context. (SRC-23 L244–251)

## Open questions

- The unit does not show the exact Python code, data structures, or API calls used to configure the example agents. (SRC-23 L225–263)

## Sources

- SRC-23 — raw file: [[23-Configure retrieval with Foundry IQ - Training - Microsoft Learn]]

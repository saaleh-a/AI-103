---
title: "Introduction — Build knowledge-enhanced AI agents with Foundry IQ"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Foundry IQ as a shared knowledge platform for grounding agents in organizational data instead of custom RAG per project."
area: retrieval
source_ids: [SRC-141]
objectives: []
tags: [foundry-iq, rag, ai-agents, knowledge-bases]
aliases: ["SRC-141"]
source_kind: learn-unit
module: "Build knowledge-enhanced AI agents with Foundry IQ"
learning_path: "Develop AI agents on Azure"
unit: "1 of 8"
presenters: []
raw_file: "141-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/1-introduction"
ingest_depth: full
---

# Introduction — Build knowledge-enhanced AI agents with Foundry IQ

*learn-unit · Build knowledge-enhanced AI agents with Foundry IQ · unit 1 of 8 · SRC-141*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-141 |
| Raw file | 141-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build knowledge-enhanced AI agents with Foundry IQ |
| Unit / episode | 1 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/1-introduction |
| Teaching content | L211–229 of 259 |
| Content length | ~347 words |
| Capture quality | High; Learn introduction with clear objectives and no code listing. |
| Ingest depth | full |

## TL;DR

Organizations want agents to move beyond predefined tasks by accessing policies, procedures, product documentation, support articles, and domain expertise. (SRC-141 L213–215) The unit frames Foundry IQ as a unified knowledge platform that avoids rebuilding custom RAG pipelines for every project and lets multiple agents share improved knowledge bases. (SRC-141 L218–219)

## Key claims

- AI agents become more useful when they can access organizational knowledge such as policies, procedures, product documentation, support articles, and domain expertise. (SRC-141 L213–215)
- Traditional agents are limited by private-data access, knowledge cutoff dates, generic responses, and incorrect information when factual grounding is missing. (SRC-141 L216)
- Building knowledge-enabled agents directly requires data-source connections, chunking strategies, vector databases, and access-control management. (SRC-141 L217)
- Foundry IQ is described as Microsoft's unified knowledge platform for agent access to organizational data. (SRC-141 L218)
- Shared knowledge bases let multiple agents use the same knowledge and benefit immediately when that knowledge is improved. (SRC-141 L218–219)

## How it works

The source introduces a problem-and-platform flow: agents need organizational data, direct custom RAG work repeats complex retrieval engineering, and Foundry IQ provides shared knowledge management instead. (SRC-141 L213–219) The unit's learning objectives then sequence the module: explain RAG, describe Foundry IQ, configure data sources, configure retrieval instructions and citations, and test or monitor retrieval quality. (SRC-141 L220–226)

## Code and API patterns

Not covered by this source.

## Key terms

- **Organizational knowledge** — policies, procedures, product documentation, support articles, and domain expertise that agents need for company-specific answers. (SRC-141 L214–215)
- **Retrieval Augmented Generation (RAG)** — introduced as the approach that connects agents to real-time information. (SRC-141 L221; SRC-141 L228)
- **Foundry IQ** — Microsoft's unified knowledge platform for organizational data access by AI agents. (SRC-141 L218)
- **Knowledge bases** — shared stores that multiple agents can access and that improve all connected agents when updated. (SRC-141 L218–219)

## Decision boundaries and exam cues

- **Inference:** Choose Foundry IQ when a scenario emphasizes multiple agents sharing organizational knowledge instead of each team rebuilding chunking, vector databases, data connections, and access controls. (SRC-141 L217–219)
- **Inference:** Treat generic, unsupported answers from an agent as a grounding problem, because the source ties missing factual grounding to incorrect information. (SRC-141 L216)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source names Foundry IQ as Microsoft's unified knowledge platform but does not specify service limits, regions, pricing, API versions, or deployment prerequisites. (SRC-141 L218–226)
- The source uses both a general term, knowledge-enabled agents, and the product name Foundry IQ; later pages must preserve the distinction between the pattern and the platform. (SRC-141 L217–219)

## Relation to other sources

- [[src-239-understanding-rag-agents]] supplies the RAG mechanism that this introduction says comes next. (SRC-141 L228; SRC-239 L214–231)
- [[src-85-explore-foundry-iq]] expands the shared platform claim by describing knowledge bases, data-source integration, and built-in retrieval intelligence. (SRC-141 L218–219; SRC-85 L219–251)
- [[src-16-build-knowledge-enhanced-ai-agents-foundry-iq-episode-10]] presents the same module arc in video form: RAG fundamentals, Foundry IQ, retrieval configuration, and an end-to-end integration. (SRC-141 L220–226; SRC-16 L14–26)

## Connections

- [[foundry-iq]] — the product introduced as the shared knowledge platform for agents. (SRC-141 L218–219)
- [[retrieval-augmented-generation]] — the grounding pattern the module starts with. (SRC-141 L221; SRC-141 L228)
- [[ai-agents]] — the unit frames agents as the consumers of organizational knowledge. (SRC-141 L213–219)
- [[knowledge-bases-and-sources]] — the source names shared knowledge bases and data-source configuration as central module outcomes. (SRC-141 L218–224)
- [[retrieval-options-compared]] — useful later for comparing custom RAG pipelines with Foundry IQ knowledge bases. (SRC-141 L217–219)

## Open questions

- The introduction does not define the exact access-control model, data-source setup screens, or monitoring signals; later units must supply those details. (SRC-141 L223–226)

## Sources

- SRC-141 — raw file: [[141-Introduction - Training - Microsoft Learn]]

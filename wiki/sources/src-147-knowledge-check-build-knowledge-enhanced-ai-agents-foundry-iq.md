---
title: "Knowledge check — Build knowledge-enhanced AI agents with Foundry IQ"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Checks RAG advantages, SharePoint Remote, scoring profiles, and why explicit retrieval instructions matter for Foundry IQ agents."
area: retrieval
source_ids: [SRC-147]
objectives: []
tags: [knowledge-check, foundry-iq, rag, sharepoint, scoring-profiles, retrieval-instructions]
aliases: ["SRC-147"]
source_kind: learn-unit
module: "Build knowledge-enhanced AI agents with Foundry IQ"
learning_path: "Develop AI agents on Azure"
unit: "6 of 8"
presenters: []
raw_file: "147-Knowledge check - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/6-knowledge-check"
ingest_depth: full
---

# Knowledge check — Build knowledge-enhanced AI agents with Foundry IQ

*learn-unit · Build knowledge-enhanced AI agents with Foundry IQ · unit 6 of 8 · SRC-147*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-147 |
| Raw file | 147-Knowledge check - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build knowledge-enhanced AI agents with Foundry IQ |
| Unit / episode | 6 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/6-knowledge-check |
| Teaching content | L211–234 of 264 |
| Content length | ~255 words |
| Capture quality | High; knowledge-check questions and options are captured, but checked answers are not shown. |
| Ingest depth | full |

## TL;DR

The knowledge check asks learners to distinguish RAG from simple agents, identify the real-time SharePoint source, understand scoring profiles, and explain why retrieval behavior belongs in agent instructions. (SRC-147 L212–231) The capture shows the questions and options but not the post-submission answer key. (SRC-147 L232–234)

## Key claims

- The assessment treats RAG's advantage as grounding responses in current organizational information with source transparency, contrasting that with eliminating LLMs or automatic retraining. (SRC-147 L212–216)
- The assessment distinguishes SharePoint Remote from SharePoint Indexed and Azure Blob Storage for real-time SharePoint access with Microsoft 365 governance. (SRC-147 L217–221)
- The assessment describes scoring profiles as boosting specific fields or attributes so important results surface first. (SRC-147 L222–226)
- The assessment tests retrieval instructions as protection against training-data answers, unverifiable responses, and missing citations. (SRC-147 L227–231)

## How it works

This source is a knowledge-check unit, so its content is organized as four multiple-choice items rather than explanatory prose. (SRC-147 L212–231) It reinforces the module sequence: RAG grounding, data-source selection, retrieval relevance tuning, and agent instruction behavior. (SRC-147 L212–231)

## Code and API patterns

Not covered by this source.

## Key terms

- **RAG** — tested as the capability that grounds responses in current organizational information and provides source transparency. (SRC-147 L212–216)
- **SharePoint Remote** — tested as the option that queries SharePoint sites and libraries in real time. (SRC-147 L217–221)
- **Scoring profiles** — tested as boosting fields or attributes so more important results surface first. (SRC-147 L222–226)
- **Retrieval behavior** — tested as something that must be specified in agent instructions. (SRC-147 L227–231)

## Decision boundaries and exam cues

- **Inference:** If the answer choice says RAG eliminates LLMs, reject it; the check contrasts that distractor with grounding LLM-backed agents in current organizational information. (SRC-147 L212–216)
- **Inference:** If the scenario asks for real-time SharePoint access with Microsoft 365 governance, choose SharePoint Remote rather than SharePoint Indexed. (SRC-147 L217–221)
- **Inference:** If the scenario asks to boost important fields in retrieval results, choose scoring profiles rather than encryption or chunking configuration. (SRC-147 L222–226)
- **Inference:** If the agent may answer from training data or omit citations, specify retrieval behavior in instructions. (SRC-147 L227–231)

## Assessment items

1. What is the primary advantage of Retrieval Augmented Generation (RAG) over simple AI agents? (SRC-147 L212–216)
   - Option 0: RAG eliminates the need for large language models by relying entirely on document retrieval. (SRC-147 L213–214)
   - Option 1: RAG enables agents to ground responses in current organizational information and provide source transparency. (SRC-147 L215)
   - Option 2: RAG automatically retrains the language model whenever organizational documents change. (SRC-147 L216)
   - Answer shown in capture: answer not shown in capture. (SRC-147 L232–234)
2. Which data source option provides real-time access to SharePoint content with Microsoft 365 governance? (SRC-147 L217–221)
   - Option 0: SharePoint Indexed, which pre-processes SharePoint content into Azure AI Search. (SRC-147 L218)
   - Option 1: SharePoint Remote, which queries SharePoint sites and libraries in real-time. (SRC-147 L219–220)
   - Option 2: Azure Blob Storage, which connects to SharePoint files stored as blobs. (SRC-147 L221)
   - Answer shown in capture: answer not shown in capture. (SRC-147 L232–234)
3. What is the purpose of scoring profiles in Foundry IQ knowledge bases? (SRC-147 L222–226)
   - Option 0: To encrypt sensitive fields and protect confidential information during retrieval. (SRC-147 L223)
   - Option 1: To boost specific fields or attributes so more important results surface first. (SRC-147 L224–225)
   - Option 2: To configure how documents are chunked and embedded for semantic search. (SRC-147 L226)
   - Answer shown in capture: answer not shown in capture. (SRC-147 L232–234)
4. Why is it critical to specify retrieval behavior in agent instructions? (SRC-147 L227–231)
   - Option 0: Without proper instructions, agents might answer from training data instead of the knowledge base, provide unverifiable responses, or fail to cite sources. (SRC-147 L228–229)
   - Option 1: Instructions determine the semantic ranking algorithm that Foundry IQ applies to search results. (SRC-147 L230)
   - Option 2: Instructions enable the agent to automatically update knowledge base content when it detects outdated information. (SRC-147 L231)
   - Answer shown in capture: answer not shown in capture. (SRC-147 L232–234)

## Tensions, caveats and currency

- The capture shows the form state before checking work, so this page does not claim the answer key even where the intended answers are apparent from other module sources. (SRC-147 L232–234)

## Relation to other sources

- [[src-239-understanding-rag-agents]] teaches the RAG advantage assessed by question 1. (SRC-239 L219–230; SRC-147 L212–216)
- [[src-22-configure-data-sources-knowledge-bases]] teaches the SharePoint Remote and scoring-profile concepts tested by questions 2 and 3. (SRC-22 L49–61; SRC-22 L15–24; SRC-147 L217–226)
- [[src-23-configure-retrieval-foundry-iq]] teaches the retrieval-instruction problem assessed by question 4. (SRC-23 L214–233; SRC-147 L227–231)

## Connections

- [[retrieval-augmented-generation]] — directly assessed in question 1. (SRC-147 L212–216)
- [[knowledge-bases-and-sources]] — SharePoint source choices are assessed in question 2. (SRC-147 L217–221)
- [[search-queries]] — scoring profiles relate to surfacing important retrieval results. (SRC-147 L222–226)
- [[prompt-engineering]] — retrieval behavior is controlled through agent instructions. (SRC-147 L227–231)
- [[ai-103-exam]] — this is an exam-style knowledge-check unit inside the corpus. (SRC-147 L212–234)

## Open questions

- The capture does not show the submitted answer key or explanations. (SRC-147 L232–234)

## Sources

- SRC-147 — raw file: [[147-Knowledge check - Training - Microsoft Learn]]

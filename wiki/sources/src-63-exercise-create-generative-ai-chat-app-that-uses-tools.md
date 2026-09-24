---
title: "Exercise - Create a generative AI chat app that uses tools"
type: source
status: stub
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Exercise launch page for deploying a model and grounding a chat app with file_search."
area: agents
source_ids: [SRC-63]
objectives: []
tags: [exercise, file-search, microsoft-foundry, tools]
aliases: ["SRC-63"]
source_kind: learn-unit
module: "Develop generative AI apps that use tools"
learning_path: "Develop generative AI apps in Azure"
unit: "7 of 9"
presenters: []
raw_file: "63-Exercise - Create a generative AI chat app that uses tools - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/07-exercise"
ingest_depth: stub
---

# Exercise - Create a generative AI chat app that uses tools

*learn-unit · Develop generative AI apps that use tools · unit 7 of 9 · SRC-63*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-63 |
| Raw file | `63-Exercise - Create a generative AI chat app that uses tools - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop generative AI apps that use tools |
| Unit / episode | 7 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/07-exercise |
| Teaching content | L212–218 of 248 |
| Content length | ~71 words |
| Capture quality | High but thin: launch page only, not lab steps. |
| Ingest depth | stub |

## TL;DR

This exercise asks the learner to use Microsoft Foundry to deploy a model and use the `file_search` tool to ground responses in file contents (SRC-63 L214–215). The source requires an Azure subscription with administrative access (SRC-63 L216–217). The actual lab instructions are not captured in this raw file (SRC-63 L218).

## Key claims

- The exercise is a hands-on attempt at tool calling with the Response API and Microsoft Foundry (SRC-63 L214).
- The exercise includes deploying a model in Microsoft Foundry (SRC-63 L215).
- The exercise uses `file_search` to ground model responses in file contents (SRC-63 L215).
- The lab requires an Azure subscription with administrative access (SRC-63 L216–217).

## How it works

Not covered by this source beyond the launch-page statement that the lab deploys a model and uses `file_search` for grounding in files (SRC-63 L214–215).

## Code and API patterns

Not covered by this source.

## Key terms

- Response API: named by the exercise as the API context for tool calling (SRC-63 L214).
- Microsoft Foundry: the environment where the exercise deploys a model (SRC-63 L215).
- `file_search`: the tool used to ground responses in file contents (SRC-63 L215).

## Decision boundaries and exam cues

- **Inference:** Treat this page as lab context rather than conceptual instruction; use [[src-255-file-search-tool]] for the underlying `file_search` mechanics (SRC-63 L214–218; SRC-255 L235–241).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The capture is a launch page and does not contain the actual exercise steps (SRC-63 L218).
- **Stale-risk:** Subscription access requirements may vary outside the captured lab environment, but this source states administrative access is needed (SRC-63 L216–217).

## Relation to other sources

- [[src-255-file-search-tool]] teaches the `file_search` flow that this exercise applies (SRC-255 L235–241).
- [[src-259-what-are-tools]] establishes that tools are specified in Responses API calls (SRC-259 L230–231).
- [[src-50-develop-generative-ai-apps-that-tools-episode-4]] demonstrates similar file-search grounding with travel brochures and vector store IDs (SRC-50 L672–754; SRC-50 L788–808).

## Connections

- [[file-search-tool]] — the tool used by the exercise.
- [[responses-api]] — API context named by the exercise.
- [[microsoft-foundry]] — environment used to deploy the model.
- [[retrieval-augmented-generation]] — grounding pattern underlying file-based answers.

## Open questions

- The lab steps, repository, exact code, and validation output are not present in this capture (SRC-63 L218).

## Sources

- SRC-63 — raw file: [[63-Exercise - Create a generative AI chat app that uses tools - Training - Microsoft Learn]]

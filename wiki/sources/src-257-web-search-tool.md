---
title: "Use the web_search tool"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains how web_search lets a model retrieve current public web information during response generation."
area: agents
source_ids: [SRC-257]
objectives: [G03, G09]
tags: [web-search, grounding, responses-api, tools]
aliases: ["SRC-257"]
source_kind: learn-unit
module: "Develop generative AI apps that use tools"
learning_path: "Develop generative AI apps in Azure"
unit: "4 of 9"
presenters: []
raw_file: "257-Use the web_search tool - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/04-web-search"
ingest_depth: full
---

# Use the web_search tool

*learn-unit · Develop generative AI apps that use tools · unit 4 of 9 · SRC-257*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-257 |
| Raw file | `257-Use the web_search tool - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop generative AI apps that use tools |
| Unit / episode | 4 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/04-web-search |
| Teaching content | L212–253 of 283 |
| Content length | ~435 words |
| Capture quality | High for prose; code block is omitted by capture. |
| Ingest depth | full |

## TL;DR

The `web_search` tool gives a generative AI model access to current external information at runtime (SRC-257 L218–220). The model can issue search queries, review relevant sources, and generate a response grounded in up-to-date content (SRC-257 L220). This is useful for changing facts such as pricing, product releases, policy updates, and current events (SRC-257 L221).

## Key claims

- `web_search` lets a model retrieve fresh information from the web while generating a response (SRC-257 L218).
- The tool gives the model current external information at runtime rather than relying only on training data (SRC-257 L220).
- The model can issue a search query, review relevant sources, and produce an answer grounded in up-to-date content (SRC-257 L220).
- Useful cases include frequently changing facts such as pricing, product releases, policy updates, and current events (SRC-257 L221).
- Key features include live retrieval, source-grounded responses, reduced hallucination risk, automatic query generation, and a seamless user experience (SRC-257 L222–227).
- Web retrieval can increase response time and token usage (SRC-257 L247).

## How it works

A request includes a web search tool in the tools array (SRC-257 L235–237). The model evaluates the question, decides whether fresh web data is needed, issues one or more search queries, selects and summarizes relevant pages, and generates an answer from the search findings (SRC-257 L238–241). The source recommends time-aware prompts, reputable or official sources, concise outputs, independent validation of critical facts, and usage and latency tracking (SRC-257 L242–247).

## Code and API patterns

The source states that `web_search` is enabled in an OpenAI Responses API request by including a web search tool in the tools array (SRC-257 L231; SRC-257 L235–237). The capture indicates an omitted Python example and does not include the concrete request body (SRC-257 L230–234).

## Key terms

- Fresh information: current external information retrieved at runtime (SRC-257 L218–220).
- Source-grounded response: an answer built from retrieved web content (SRC-257 L224).
- Automatic query generation: model-driven decisions about when and how to search based on user intent (SRC-257 L226).

## Decision boundaries and exam cues

- **Inference:** Choose `web_search` when a scenario asks for latest, current, recently changed, or public web information (SRC-257 L220–223; SRC-257 L243).
- **Inference:** Do not choose `web_search` for private uploaded documents; that maps to `file_search` in this module (SRC-255 L218–225).
- **Inference:** Human review remains important for high-stakes facts because source quality varies and retrieved content can change (SRC-257 L246; SRC-257 L249–251).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- Results depend on what is publicly available and indexable at query time (SRC-257 L249).
- Source quality varies, retrieved content may change, and regional, policy, or network restrictions may apply (SRC-257 L250–252).
- **Stale-risk:** The output of the same prompt may differ over time because retrieved content can change (SRC-257 L251).

## Relation to other sources

- [[src-259-what-are-tools]] names `web_search` as the Responses API tool for general Internet information beyond training data (SRC-259 L224).
- [[src-198-summary-develop-generative-ai-apps-that-tools]] summarizes `web_search` as retrieval of current external information for timely, source-grounded content (SRC-198 L221).
- [[src-50-develop-generative-ai-apps-that-tools-episode-4]] demonstrates that a plain model gives generic travel ideas, while adding web search yields more concrete current activity suggestions (SRC-50 L541–601).

## Connections

- [[web-search-tool]] — canonical concept for this built-in tool.
- [[responses-api]] — request surface for enabling the tool.
- [[retrieval-augmented-generation]] — related grounding pattern, though this source focuses on web retrieval.
- [[file-search-tool]] — closest module neighbour for private document grounding.
- [[retrieval-options-compared]] — synthesis for choosing retrieval and grounding approaches.
- *Module units:* [[src-123-introduction-develop-generative-ai-apps-that-tools|1 Introduction]] · [[src-259-what-are-tools|2 What are tools-]] · [[src-254-code-interpreter-tool|3 Use the code_interpreter tool]] · [[src-255-file-search-tool|5 Use the file_search tool]] · [[src-256-function-tool|6 Use the function tool]] · [[src-63-exercise-create-generative-ai-chat-app-that-uses-tools|7 Exercise - Create a generative AI chat app that uses tools]] · [[src-163-module-assessment-develop-generative-ai-apps-that-tools|8 Module assessment]] · [[src-198-summary-develop-generative-ai-apps-that-tools|9 Summary]] · [[src-50-develop-generative-ai-apps-that-tools-episode-4|episode 4]]

## Open questions

- The source does not specify which web index or regions are available; it only notes possible regional, policy, or network restrictions (SRC-257 L252).

## Sources

- SRC-257 — raw file: [[257-Use the web_search tool - Training - Microsoft Learn]]

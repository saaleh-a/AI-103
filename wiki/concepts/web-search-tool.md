---
title: "Web search tool"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Built-in grounding tool that lets a model or agent search current public web content during response generation."
area: agents
source_ids: [SRC-4, SRC-91, SRC-255, SRC-256, SRC-257, SRC-259]
objectives: [P04, G08, G09]
objective_gaps: []
tags: []
aliases: ["web_search", "web grounding", "Bing grounding", "Bing Web Search"]
---

# Web search tool

## Summary

`web_search` gives a model or agent current external information at runtime: the model can issue search queries, review sources, and generate an answer grounded in recent web content. (SRC-257 L218–220)

## The problem it solves

Model training data is static, but many facts change. The source names pricing, product releases, policy updates, and current events as cases where fresh web information matters. (SRC-257 L220–221)

## Mental model

**Inference:** Web Search is a grounding tool for public, time-sensitive information: the model decides whether fresh web data is needed, searches, selects and summarizes relevant pages, then combines findings into the final answer. (SRC-257 L235–241)

## What the sources say

- The Responses API tools overview says `web_search` lets the model find general information on the Internet and base responses on more current data than it was trained on. (SRC-259 L224)
- The dedicated source says the tool enables the model to retrieve fresh information from the web while generating a response. (SRC-257 L218)
- It lists live information retrieval, source-grounded responses, reduced hallucination risk, automatic query generation, and one-flow user experience as key features. (SRC-257 L223–227)
- In the Foundry agent tools source, Bing Web Search connects an agent to real-time internet information and includes automatic citation generation. (SRC-91 L240)
- Agent Framework treats web search as a service-provided tool where the provider supports it. (SRC-4 L217–220)

## How it works in Azure

In a Responses API app, include a web-search tool in the tools array; the model evaluates the question, issues one or more search queries, reviews results, and generates the response. (SRC-257 L235–241) In Foundry agent contexts, the comparable catalog item is described as Bing Web Search or Bing Grounding. (SRC-91 L236–237; SRC-4 L221–223)

**Stale-risk:** The agent source notes that some tools, including Bing Grounding, are in preview or experimental and may have limited support across providers. (SRC-4 L221–223)

## Code and configuration

The captured Learn code block is elided, but the implementation pattern is explicit: enable the web-search tool in the Responses API tools array and phrase time-aware requests clearly. (SRC-257 L235–245) The source also recommends asking for reputable or official sources and tracking latency and usage. (SRC-257 L244–247)

## Decision boundaries

- Use [[web-search-tool]] for current, external web information. (SRC-257 L218–221)
- Use [[file-search-tool]] for private uploaded files, internal documents, manuals, or contracts. (SRC-255 L218–227)
- **Inference:** Use [[azure-ai-search]] for enterprise indexes and controlled retrieval over an organization's indexed data sources. (SRC-91 L242)
- **Inference:** Use [[function-calling]] when the answer needs data or an action from a developer-controlled API rather than public search. (SRC-256 L219–224)

**Inference:** If a scenario says "latest pricing" or "current release announcement," Web Search is plausible; if it says "internal HR policy PDF," File Search is the closer tool; if it says "customer order status from our ERP," function calling or a custom tool is the execution boundary. (SRC-257 L220–227; SRC-255 L218–227; SRC-256 L219–224)

## Failure modes and misconceptions

- Web results depend on what is publicly available and indexable at query time. (SRC-257 L248–249)
- Source quality varies, so outputs may still need human review. (SRC-257 L250)
- Retrieved content changes over time, so repeated runs can produce different answers. (SRC-257 L251)
- Regional, policy, or network restrictions can affect access. (SRC-257 L252)
- Web Search can increase response time and token usage. (SRC-257 L247)

## Solution Engineering transfer

**Inference:** Customer signal: "The assistant needs today's information." Discovery question: "Is the information public and acceptable to retrieve from the web, or is it private enterprise data?" Use Web Search for public currency, File Search or Azure AI Search for private controlled corpora, and function tools for transactional system access. (SRC-257 L218–252; SRC-255 L218–227; SRC-91 L240–241; SRC-256 L219–224)

## Connections

- [[agent-tools]] — Web Search is one built-in/service-provided tool.
- [[responses-api]] — Responses API can enable web search in the tools array.
- [[file-search-tool]] — closest grounding confusion: current web vs uploaded files.
- [[azure-ai-search]] — enterprise indexed-data alternative.
- [[function-calling]] — alternative when the data or action lives behind an application/API.
- [[retrieval-options-compared]] — broader retrieval decision boundary.
- [[src-257-web-search-tool]] — dedicated source page for this tool.
- [[src-91-extend-agent-capabilities-tools]] — agent-context Bing Web Search description.
- *Also linked from:* [[code-interpreter-tool]] · [[decision-boundaries]] · [[overview]]

## Sources

- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — service-provided tool category and Bing Grounding preview note.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — Bing Web Search in the Foundry agent tool catalog.
- SRC-255 — [[src-255-file-search-tool]] — File Search boundary for private uploaded files.
- SRC-256 — [[src-256-function-tool]] — function-calling boundary for API and application actions.
- SRC-257 — [[src-257-web-search-tool]] — dedicated web-search behavior, flow, practices, and limitations.
- SRC-259 — [[src-259-what-are-tools]] — Responses API tool overview.

## Open questions

- The corpus does not specify ranking controls, regional availability, source inclusion/exclusion settings, or exact citation schema for web-search outputs. (SRC-257 L248–252)





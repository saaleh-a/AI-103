---
title: "Azure Functions"
type: entity
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Serverless Azure compute used in the corpus as an agent custom-tool option and an AI Search custom skill host."
area: agents
source_ids: [SRC-52, SRC-104, SRC-110, SRC-179, SRC-256]
objectives: [P04, G09, I03]
objective_gaps: []
tags: ["service"]
aliases: ["Azure Function", "Azure Functions tool", "function app"]
---

# Azure Functions

## Summary

Azure Functions appears in the AI-103 corpus in two places: as a serverless custom-tool option for Foundry agents, and as an example host for a custom skill in an Azure AI Search enrichment pipeline (SRC-104 L228–234; SRC-52 L228–230). The corpus treats it as code-first, event-driven compute rather than as a low-code workflow surface (SRC-110 L250–290).

## What it is

Azure Functions provides serverless computing capabilities for real-time processing in the custom-tools module. The source says this integration is ideal for event-driven workflows and for responding to triggers such as HTTP requests or queue messages (SRC-104 L228–229). In the search enrichment module, a custom skill can be implemented as an Azure Function that passes index document data to another service, such as Azure Document Intelligence, and returns extracted fields (SRC-52 L228–230).

## What the sources say

- SRC-104 describes Azure Functions as one of the ways to define a custom tool for an agent; the example first deploys a function and then adds it to the agent definition as an Azure Function tool (SRC-104 L216–234).
- SRC-179 says Azure Functions support triggers and bindings; triggers determine when a function executes, while bindings streamline connections to input or output data sources (SRC-179 L222–225).
- SRC-110 contrasts Azure Functions with local custom functions: local function tools rely on the host application's compute, while Azure Functions can offload compute to another Azure system (SRC-110 L203–250).
- SRC-110 also contrasts Azure Functions with Logic Apps: Azure Functions are straight code, while Logic Apps are typically low-code; both can potentially expose HTTP endpoints for an agent to invoke (SRC-110 L272–290).
- SRC-52 names Azure Functions as an implementation option for Azure AI Search custom skills in an enrichment pipeline (SRC-52 L217–230).

## Capabilities and components

- Serverless execution for custom code invoked by agents (SRC-104 L228–234).
- Event-driven triggers, including HTTP requests and queue messages in the agent-tool source (SRC-104 L228–229).
- Triggers and bindings that simplify interaction with external systems and data sources (SRC-179 L222–225).
- Custom skill hosting for Azure AI Search enrichment pipelines (SRC-52 L228–230).

## How to use it

For a Foundry Agent Service custom tool, the corpus pattern is: develop and deploy the Azure Function, add it to the agent definition as an Azure Function tool, and let the agent send requests through the configured mechanism. The example says the agent sends requests to the function through a storage queue and processes the results (SRC-104 L230–234).

For Azure AI Search, the corpus pattern is: create a custom skill that performs custom logic on input data from the index document and returns new field values for the index; the example says this custom skill could be implemented as an Azure Function wrapper around Azure Document Intelligence (SRC-52 L225–230).

## Decision boundaries

| Compare (SRC-104 L228–234; SRC-110 L272–290) | Azure Functions | Neighbour |
|---|---|---|
| Function tool | Azure-hosted serverless compute that can offload work and respond to triggers (SRC-104 L228–234; SRC-110 L203–250). | Function tool code runs under the application/framework pattern; the model requests a call but application code executes it (SRC-256 L219–263 on [[function-calling]]). |
| Logic Apps | Code-first function execution (SRC-110 L272–290). | Logic Apps are described as low-code/no-code workflow connectivity (SRC-179 L222). |
| AI Search built-in skills | Custom skill logic, possibly wrapping another service (SRC-52 L225–230). | Built-in skills use Foundry Tools capabilities such as Language and Vision during indexing (SRC-52 L219–225). |

**Inference:** In an AI-103 scenario, choose Azure Functions when the clue emphasizes serverless custom code, event triggers, queues, bindings or custom enrichment logic; choose Logic Apps when the clue emphasizes low-code workflow composition (SRC-104 L228–234; SRC-179 L222–230).

## Naming and currency

The corpus uses both singular "Azure Function" for an individual deployed function and plural "Azure Functions" for the Azure service (SRC-104 L228–234). **Stale-risk:** The agent-tool examples are high level and the raw Learn capture collapses code blocks, so current SDK syntax must be checked before implementation.

## Appearances in the corpus

- Agent custom tools: option listing and integration flow (SRC-104 L216–234; SRC-179 L217–225).
- Episode explanation: code-first offloaded compute, contrasted with local custom functions and Logic Apps (SRC-110 L203–290).
- Azure AI Search enrichment: custom skill wrapper around document-extraction logic (SRC-52 L225–230).

## Connections

- [[custom-tool-options]] — Azure Functions are one custom-tool option.
- [[agent-tools]] — agent tools are the broader capability family.
- [[function-calling]] — the closest local-code confusion.
- [[ai-enrichment-skillsets]] — custom skills can be implemented as Azure Functions.
- [[azure-ai-search]] — the indexing pipeline that can call custom skills.
- [[azure-document-intelligence]] — the example downstream extraction service.
- [[src-104-how-integrate-custom-tools]] — agent tool source.
- [[src-52-enrich-extracted-data-ai-skills]] — search custom skill source.
- *Also linked from:* [[document-intelligence-custom-models]] · [[overview]]

## Sources

- SRC-52 — [[src-52-enrich-extracted-data-ai-skills]] — Azure AI Search custom skills and Azure Function example.
- SRC-104 — [[src-104-how-integrate-custom-tools]] — Azure Functions as agent custom tools.
- SRC-110 — [[src-110-integrate-custom-tools-agent-episode-8]] — presenter comparison and offload rationale.
- SRC-179 — [[src-179-options-implementing-custom-tools]] — option catalogue, triggers and bindings.
- SRC-256 — [[src-256-function-tool]] — function tool execution contrast.

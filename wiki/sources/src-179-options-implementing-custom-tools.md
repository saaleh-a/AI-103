---
title: "Options for implementing custom tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Lists custom-tool implementation options: function calling, Azure Functions, OpenAPI specified tools and Azure Logic Apps."
area: agents
source_ids: [SRC-179]
objectives: [G09]
tags: [custom-tools, function-calling, azure-functions, openapi, logic-apps]
aliases: ["SRC-179"]
source_kind: learn-unit
module: "Integrate custom tools into your agent"
learning_path: "Develop AI agents on Azure"
unit: "3 of 7"
presenters: []
raw_file: "179-Options for implementing custom tools - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/3-custom-tool-options"
ingest_depth: full
---
# Options for implementing custom tools
*learn-unit · Integrate custom tools into your agent · unit 3 of 7 · SRC-179*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-179 |
| Raw file | 179-Options for implementing custom tools - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate custom tools into your agent |
| Unit / episode | 3 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/3-custom-tool-options |
| Teaching content | L210–223 of 253 |
| Content length | ~316 words |
| Capture quality | High; option list is complete but concise. |
| Ingest depth | full |

## TL;DR
Microsoft Foundry Agent Service offers custom-tool options for improving agent capability and efficiency and for interoperating with applications, existing infrastructure and web services. (SRC-179 L216) The source lists OpenAPI specified tools, Azure Functions, function calling and Azure Logic Apps. (SRC-179 L218–222) These options support external APIs, event-driven applications, custom functions and low-code workflows. (SRC-179 L218–222)

## Key claims
- Custom tools support scalable interoperability with applications, infrastructure and web services. (SRC-179 L216)
- Foundry Agent Service provides OpenAPI specified tools, Azure Functions and function calling as custom tool options. (SRC-179 L218)
- Function calling lets developers describe custom function structure to an agent and return the functions to call with arguments. (SRC-179 L219)
- Azure Functions support event-driven applications using triggers and bindings. (SRC-179 L220)
- OpenAPI specification tools connect an Azure AI Agent to an external API using an OpenAPI 3.0 specification. (SRC-179 L221)
- Azure Logic Apps provide low-code/no-code workflow connections across apps, data and services. (SRC-179 L222)

## How it works
Each option exposes custom functionality through a different integration shape. Function calling exposes custom logic and workflows in code, with the agent dynamically identifying functions from definitions. (SRC-179 L219) Azure Functions expose event-driven execution, where triggers decide when code runs and bindings simplify input and output connections. (SRC-179 L220) OpenAPI tools expose HTTP APIs through OpenAPI 3.0 descriptions that support understanding, client code generation, tests and design standards. (SRC-179 L221) Logic Apps expose low-code workflows that connect apps, data and services. (SRC-179 L222)

## Code and API patterns
No concrete code is captured. The source gives API-level patterns: function definitions with arguments, Azure Function triggers and bindings, OpenAPI 3.0 specifications and Logic App workflows. (SRC-179 L219–222)

## Key terms
- **Function calling** — describing function structure so the agent can identify calls and arguments. (SRC-179 L219)
- **Azure Functions** — event-driven functions using triggers and bindings for external systems and data sources. (SRC-179 L220)
- **OpenAPI specification tools** — OpenAPI 3.0 based API integrations for Azure AI Agents. (SRC-179 L221)
- **Azure Logic Apps** — low-code/no-code workflows connecting apps, data and services. (SRC-179 L222)

## Decision boundaries and exam cues
- **Inference:** Choose function calling when the scenario emphasizes custom logic in code and function arguments. (SRC-179 L219)
- **Inference:** Choose Azure Functions when the scenario emphasizes event-driven execution, triggers, bindings or minimal overhead. (SRC-179 L220)
- **Inference:** Choose OpenAPI specified tools when the scenario mentions an existing HTTP API or OpenAPI 3.0 specification. (SRC-179 L221)
- **Inference:** Choose Logic Apps when the scenario calls for low-code/no-code workflow connections across apps and services. (SRC-179 L222)

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
The heading says Microsoft Foundry Agent Service while one bullet says Azure AI Agent, so this source should be read as part of the corpus's broader naming drift. (SRC-179 L216; SRC-179 L221)

## Relation to other sources
- [[src-104-how-integrate-custom-tools]] expands function calling, Azure Functions and OpenAPI with integration steps and examples. (SRC-179 L219–221; SRC-104 L217–246)
- [[src-167-module-assessment-integrate-custom-tools-agent]] checks recognition of custom tools, OpenAPI tools and function calling. (SRC-179 L219–221; SRC-167 L212–225)
- [[src-110-integrate-custom-tools-agent-episode-8]] discusses the same four options and contrasts Azure Functions with Logic Apps. (SRC-179 L218–222; SRC-110 L152–285)

## Connections
- [[custom-tool-options]] — this unit is the source module's option catalogue.
- [[function-calling]] — one of the main options named here.
- [[azure-functions]] — one of the custom-tool implementation options.
- [[agent-tools]] — these are tool types that extend agent capability.
- [[tool-options-compared]] — this source provides comparison inputs for custom tool types.

## Open questions
- The source does not describe authentication differences among these tool options. (SRC-179 L219–222)
- The source names Logic Apps, but the next integration unit does not provide a Logic Apps walkthrough. (SRC-179 L222; SRC-104 L217–249)

## Sources
- SRC-179 — raw file: [[179-Options for implementing custom tools - Training - Microsoft Learn]]

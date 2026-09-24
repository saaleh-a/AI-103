---
title: "How to integrate custom tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains integration patterns for function calling, Azure Functions and OpenAPI tools, including declarative agent tool use."
area: agents
source_ids: [SRC-104]
objectives: [G09]
tags: [custom-tools, function-calling, azure-functions, openapi, declarative-tools]
aliases: ["SRC-104"]
source_kind: learn-unit
module: "Integrate custom tools into your agent"
learning_path: "Develop AI agents on Azure"
unit: "4 of 7"
presenters: []
raw_file: "104-How to integrate custom tools - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/4-how-use-custom-tools"
ingest_depth: full
---
# How to integrate custom tools
*learn-unit · Integrate custom tools into your agent · unit 4 of 7 · SRC-104*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-104 |
| Raw file | 104-How to integrate custom tools - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate custom tools into your agent |
| Unit / episode | 4 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/4-how-use-custom-tools |
| Teaching content | L210–249 of 279 |
| Content length | ~530 words |
| Capture quality | Medium-high; prose is present, but code snippets are replaced by language/copy placeholders. |
| Ingest depth | full |

## TL;DR
Custom tools can be defined in several ways depending on the scenario, including existing Azure Functions or public OpenAPI specifications. (SRC-104 L216) Function calling lets agents execute predefined functions dynamically from user input and is useful for data retrieval or query processing in code. (SRC-104 L217–218) Azure Functions support serverless real-time processing for event-driven workflows, and OpenAPI tools let agents use standardized external API specifications. (SRC-104 L227–246) The unit emphasizes that custom-tool integration is declarative: developers provide meaningful function names and parameters, and the agent decides when to call the tool. (SRC-104 L247–248)

## Key claims
- Custom tools can be defined in different ways based on what fits the scenario. (SRC-104 L216)
- Function calling enables dynamic execution of predefined functions based on user input. (SRC-104 L217–218)
- The unit's function-calling example defines a fake snowfall tracking function and registers it with the agent using the Azure AI SDK. (SRC-104 L219–226)
- Azure Functions provide serverless computing for real-time processing and can respond to HTTP requests or queue messages. (SRC-104 L227–234)
- OpenAPI tools use standardized specifications, and Foundry Agent Service uses OpenAPI 3.0 specified tools. (SRC-104 L235–236)
- OpenAPI 3.0 tools currently support anonymous, API key and managed identity authentication. (SRC-104 L237–238)
- Developers do not explicitly call custom tool functions; the agent decides based on prompt messages. (SRC-104 L247–248)

## How it works
Function calling starts with a developer-defined function, registration through the Azure AI SDK and agent-side dynamic invocation when the prompt requires that function's information. (SRC-104 L219–226) Azure Functions integration starts with developing and deploying a function, adding it to the agent definition as an Azure Function tool and letting the agent send requests through a storage queue. (SRC-104 L229–234) OpenAPI integration starts with a JSON file that describes the API, then registering the OpenAPI tool in the agent definition so the agent can fetch data dynamically. (SRC-104 L239–246)

## Code and API patterns
The capture includes placeholders rather than verbatim snippets, so no code block can be quoted. (SRC-104 L219–245) The API pattern is still visible: define a callable function, register it as a tool, or provide an OpenAPI JSON specification and register the OpenAPI tool in the agent definition. (SRC-104 L219–246)

## Key terms
- **Function calling** — agent execution of predefined functions based on user input. (SRC-104 L217–218)
- **Azure Function tool** — an agent tool that calls a deployed Azure Function, with the example using a storage queue. (SRC-104 L229–234)
- **OpenAPI defined tool** — an agent tool that interacts with external APIs through standardized OpenAPI specifications. (SRC-104 L235–246)
- **Declarative solution** — a design where the agent decides when and how to call tool functions from names and parameter documentation. (SRC-104 L247–248)

## Decision boundaries and exam cues
- **Inference:** Use function calling when the local agent application includes code that should be exposed as a callable function. (SRC-104 L217–226)
- **Inference:** Use Azure Functions when the requirement is event-driven, serverless or queue/HTTP-triggered processing. (SRC-104 L227–234)
- **Inference:** Use OpenAPI tools when an external API can be described with OpenAPI 3.0 and registered in the agent definition. (SRC-104 L235–246)
- **Inference:** Do not write orchestration logic that manually decides every custom function call if the scenario expects declarative agent tool choice. (SRC-104 L247–248)

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
**Stale-risk:** The source says OpenAPI 3.0 tools currently support anonymous, API key and managed identity authentication; authentication support can change. (SRC-104 L237–238)

## Relation to other sources
- [[src-179-options-implementing-custom-tools]] names the option set before this source explains integration flows. (SRC-179 L218–222; SRC-104 L216–249)
- [[src-58-exercise-build-agent-custom-tools]] follows this unit with a hands-on exercise to create an agent in code and connect a tool definition to a function. (SRC-104 L217–249; SRC-58 L212)
- [[src-110-integrate-custom-tools-agent-episode-8]] demonstrates function-tool definitions, required parameters, tool-call dispatch and function-call outputs. (SRC-104 L247–248; SRC-110 L447–585)

## Connections
- [[function-calling]] — the source's main custom-code integration pattern.
- [[azure-functions]] — the serverless custom-tool option described here.
- [[custom-tool-options]] — this source operationalizes the option set.
- [[agent-tools]] — custom tools are registered in agent definitions.
- [[tool-options-compared]] — the source adds integration-pattern detail.

## Open questions
- The code samples are not present in the capture, so exact SDK calls and object names must be learned from another source. (SRC-104 L219–245)
- The unit does not explain how tool-call failures, retries or permissions are handled. (SRC-104 L247–249)

## Sources
- SRC-104 — raw file: [[104-How to integrate custom tools - Training - Microsoft Learn]]

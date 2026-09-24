---
title: "Module assessment — Integrate custom tools into your agent"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment capture with three questions on custom tools, OpenAPI specification tools and function calling."
area: agents
source_ids: [SRC-167]
objectives: []
tags: [custom-tools, assessment, openapi, function-calling]
aliases: ["SRC-167"]
source_kind: learn-unit
module: "Integrate custom tools into your agent"
learning_path: "Develop AI agents on Azure"
unit: "6 of 7"
presenters: []
raw_file: "167-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/6-knowledge-check"
ingest_depth: full
---
# Module assessment — Integrate custom tools into your agent
*learn-unit · Integrate custom tools into your agent · unit 6 of 7 · SRC-167*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-167 |
| Raw file | 167-Module assessment - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate custom tools into your agent |
| Unit / episode | 6 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/6-knowledge-check |
| Teaching content | L210–228 of 258 |
| Content length | ~190 words |
| Capture quality | High for questions and options; answer selection is not shown. |
| Ingest depth | full |

## TL;DR
This assessment asks what custom tools are, how to integrate an OpenAPI 3.0-based web service into an agent, and which tool type an agent should use to call a local application function; each question lists three options, including callable functions, an OpenAPI specification tool and function calling. (SRC-167 L212–225) The capture does not show which options were selected or checked, so answers are recorded as not shown. (SRC-167 L226–228)

## Key claims
- The first assessment item asks what custom tools are and how they help develop effective agents with Microsoft Foundry Agent Service. (SRC-167 L212–215)
- The second item asks what to do when integrating functionality from an OpenAPI 3.0-based web service into an agent solution. (SRC-167 L217–220)
- The third item asks what kind of tool should be added when application code includes a local function the agent should call. (SRC-167 L222–225)
- The capture requires all questions to be answered before checking work. (SRC-167 L226–228)

## How it works
The assessment is a knowledge-check page rather than an explanatory unit. It asks about the custom-tool definition, OpenAPI specification tool use and function-calling tool use. (SRC-167 L212–225)

## Code and API patterns
Not covered by this source. The assessment mentions a local function in agent application code and an OpenAPI 3.0-based web service, but it does not show code or an OpenAPI document. (SRC-167 L217–225)

## Key terms
- **Custom tools** — one option describes them as callable functions that extend agent capabilities. (SRC-167 L212–213)
- **OpenAPI specification tool** — one option adds a web service as this tool type in the agent definition. (SRC-167 L217–220)
- **Function calling** — one option is the tool kind for local functions in agent application code. (SRC-167 L222–223)

## Decision boundaries and exam cues
- **Inference:** The assessment contrasts OpenAPI integration with adding JSON schema to instructions or hard-coding a Python rewrite. (SRC-167 L217–220)
- **Inference:** The assessment contrasts local function calling with code interpreter and Azure Functions, so the location of the function is a load-bearing detail. (SRC-167 L222–225)

## Assessment items
1. Question: What are custom tools, and how can they help you develop effective agents with Microsoft Foundry Agent Service? (SRC-167 L212)
   - Callable functions that an agent can use to extend its capabilities. (SRC-167 L213)
   - Extensions for Visual Studio Code that make it easier to create and deploy agents. (SRC-167 L214)
   - Fine-tuned models that the agent can use to generate custom output. (SRC-167 L215)
   - Answer shown in capture: not shown. (SRC-167 L226–228)
2. Question: You need to integrate functionality from an OpenAPI 3.0-based web service into an agent solution. What should you do? (SRC-167 L217)
   - Add the JSON schema of the web service to the agent's instructions. (SRC-167 L218)
   - Rewrite the web service as a Python function and hard-code it in your agent app. (SRC-167 L219)
   - Add the web service as an OpenAPI specification tool to the agent definition. (SRC-167 L220)
   - Answer shown in capture: not shown. (SRC-167 L226–228)
3. Question: Your agent application code includes a local function that you want the agent to call. What kind of tool should you add to the agent's definition? (SRC-167 L222)
   - Function calling. (SRC-167 L223)
   - Code interpreter. (SRC-167 L224)
   - Azure Functions. (SRC-167 L225)
   - Answer shown in capture: not shown. (SRC-167 L226–228)

## Tensions, caveats and currency
The capture lists options but does not show validated answers, so the page preserves that absence rather than marking answers as correct. (SRC-167 L226–228)

## Relation to other sources
- [[src-179-options-implementing-custom-tools]] provides source text for the option set assessed here. (SRC-179 L218–222; SRC-167 L217–225)
- [[src-104-how-integrate-custom-tools]] explains OpenAPI and function-calling integration before this assessment tests them. (SRC-104 L217–246; SRC-167 L217–225)
- [[src-110-integrate-custom-tools-agent-episode-8]] includes presenter review answers for the first two assessment-style questions. (SRC-110 L657–676; SRC-167 L212–220)

## Connections
- [[custom-tool-options]] — the assessment tests option selection.
- [[function-calling]] — local-function integration is tested.
- [[code-interpreter-tool]] — appears as a distractor for local custom function calls.
- [[foundry-toolkit-for-vs-code]] — Visual Studio Code extensions appear as a distractor for custom tools.
- [[tool-options-compared]] — useful for explaining why the distractors fail.
- *Module units:* [[src-122-introduction-integrate-custom-tools-agent|1 Introduction]] · [[src-265-why-custom-tools|2 Why use custom tools]] · [[src-179-options-implementing-custom-tools|3 Options for implementing custom tools]] · [[src-104-how-integrate-custom-tools|4 How to integrate custom tools]] · [[src-58-exercise-build-agent-custom-tools|5 Exercise - Build an agent with custom tools]] · [[src-213-summary-integrate-custom-tools-agent|7 Summary]] · [[src-110-integrate-custom-tools-agent-episode-8|episode 8]]

## Open questions
- The source does not show the checked answers after submission. (SRC-167 L226–228)

## Sources
- SRC-167 — raw file: [[167-Module assessment - Training - Microsoft Learn]]

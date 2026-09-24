---
title: "Use the function tool"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains function calling: the model requests a named function call, the app executes it, and returns function output."
area: agents
source_ids: [SRC-256]
objectives: [G03, G05, G08, G09]
tags: [function-calling, tools, responses-api, custom-functions]
aliases: ["SRC-256"]
source_kind: learn-unit
module: "Develop generative AI apps that use tools"
learning_path: "Develop generative AI apps in Azure"
unit: "6 of 9"
presenters: []
raw_file: "256-Use the function tool - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/06-function"
ingest_depth: full
---

# Use the function tool

*learn-unit · Develop generative AI apps that use tools · unit 6 of 9 · SRC-256*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-256 |
| Raw file | `256-Use the function tool - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop generative AI apps that use tools |
| Unit / episode | 6 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/06-function |
| Teaching content | L212–259 of 289 |
| Content length | ~619 words |
| Capture quality | High for prose; code blocks are omitted by capture. |
| Ingest depth | full |

## TL;DR

The `function` tool lets a model call developer-defined functions to retrieve data or trigger actions during a response (SRC-256 L218). The model does not run business logic directly; it returns a structured function call, the app executes the function, and the app sends function output back to the model (SRC-256 L220). This pattern connects model reasoning to APIs, databases, business workflows, and utility functions under developer control (SRC-256 L221–225).

## Key claims

- Function calling lets a model decide when to call named tools exposed by the application (SRC-256 L220).
- The model returns a structured function call rather than running business logic directly (SRC-256 L220).
- Application code runs the function and passes the function output back to the model (SRC-256 L220).
- This pattern suits APIs, databases, business workflows, and utility functions (SRC-256 L221).
- Key features include structured tool calls, developer-controlled execution, reliable integration, multi-turn orchestration, and live grounded data (SRC-256 L222–227).
- The process defines tools, lets the model evaluate the prompt, emits a function call, runs matching app logic, returns `function_call_output`, and lets the model complete the answer (SRC-256 L240–247).

## How it works

The developer defines one or more function tools in the tools array (SRC-256 L240–242). The model evaluates the prompt and may emit a function name plus call metadata (SRC-256 L243–244). The app runs the matching function, returns a `function_call_output` item, and the model incorporates that result into the final response (SRC-256 L245–247).

## Code and API patterns

The source's example exposes a `get_time` function and lets the model call it when needed (SRC-256 L230–234). A prompt that does not need the function receives a normal response, while a time question triggers `get_time`; the app executes it and sends results back so the model can produce a second response (SRC-256 L234–237). The captured page marks Python and output blocks but omits concrete code (SRC-256 L231–236).

## Key terms

- Function tool: a developer-defined callable function exposed to the model through application code (SRC-256 L218; SRC-256 L220).
- Structured function call: the explicit request emitted by the model when it wants the app to run a function (SRC-256 L220; SRC-256 L223).
- `function_call_output`: the item the app sends back with the function result (SRC-256 L246).

## Decision boundaries and exam cues

- **Inference:** Choose `function` when the model must interact with developer-controlled business logic, internal APIs, databases, workflows, or utilities (SRC-256 L221; SRC-256 L224–225).
- **Inference:** Do not expect the model to execute the function automatically; the app must run it and return output (SRC-256 L220; SRC-256 L245–246; SRC-256 L255).
- **Inference:** Scenarios involving validation, authorization, auditability, latency, and tool failure fit function calling because execution remains under application control (SRC-256 L224; SRC-256 L249–257).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The model can request a function call, but the application must execute it (SRC-256 L255).
- Tool arguments can be incorrect or unexpected, so they require validation (SRC-256 L250; SRC-256 L256).
- Function calling improves reliability, but critical final outputs still need review (SRC-256 L258).

## Relation to other sources

- [[src-259-what-are-tools]] names `function` as the Responses API tool for calling custom functions in application code (SRC-259 L226).
- [[src-198-summary-develop-generative-ai-apps-that-tools]] summarizes the function tool as allowing application business logic to run and return results to the model (SRC-198 L223–224).
- [[src-50-develop-generative-ai-apps-that-tools-episode-4]] expands the function workflow with `get_time`, descriptions, response-output type checks, dispatch, and another response with appended output (SRC-50 L383–500).

## Connections

- [[function-calling]] — canonical concept for this workflow.
- [[responses-api]] — API surface for function calls and outputs.
- [[custom-tool-options]] — broader family of custom tool approaches.
- [[agent-tools]] — umbrella concept for tools available to models and agents.
- [[tool-options-compared]] — synthesis for deciding between built-in and custom tools.
- *Module units:* [[src-123-introduction-develop-generative-ai-apps-that-tools|1 Introduction]] · [[src-259-what-are-tools|2 What are tools-]] · [[src-254-code-interpreter-tool|3 Use the code_interpreter tool]] · [[src-257-web-search-tool|4 Use the web_search tool]] · [[src-255-file-search-tool|5 Use the file_search tool]] · [[src-63-exercise-create-generative-ai-chat-app-that-uses-tools|7 Exercise - Create a generative AI chat app that uses tools]] · [[src-163-module-assessment-develop-generative-ai-apps-that-tools|8 Module assessment]] · [[src-198-summary-develop-generative-ai-apps-that-tools|9 Summary]] · [[src-50-develop-generative-ai-apps-that-tools-episode-4|episode 4]]

## Open questions

- The source mentions functions with parameters but does not show schemas or parameter details in the capture (SRC-256 L238–239).

## Sources

- SRC-256 — raw file: [[256-Use the function tool - Training - Microsoft Learn]]

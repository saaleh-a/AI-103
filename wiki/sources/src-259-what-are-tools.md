---
title: "What are tools-"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines model tools in Microsoft Foundry and shows where tools are specified in Responses API calls."
area: agents
source_ids: [SRC-259]
objectives: [G03, G05, G09]
tags: [tools, responses-api, microsoft-foundry, tool-calling]
aliases: ["SRC-259"]
source_kind: learn-unit
module: "Develop generative AI apps that use tools"
learning_path: "Develop generative AI apps in Azure"
unit: "2 of 9"
presenters: []
raw_file: "259-What are tools- - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/02-what-are-tools"
ingest_depth: full
---

# What are tools-

*learn-unit · Develop generative AI apps that use tools · unit 2 of 9 · SRC-259*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-259 |
| Raw file | `259-What are tools- - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop generative AI apps that use tools |
| Unit / episode | 2 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/02-what-are-tools |
| Teaching content | L212–235 of 265 |
| Content length | ~373 words |
| Capture quality | High: compact Learn unit text with code blocks omitted by capture. |
| Ingest depth | full |

## TL;DR

Microsoft Foundry Models can use tools to find information or perform tasks when prompts are sent through the OpenAI Responses API (SRC-259 L218). A developer searches for a tool-calling capable model, deploys it, and submits prompts that specify available tools (SRC-259 L219). By default, the model chooses tool use, but tool-selection rules and Instructions can guide that choice (SRC-259 L221).

## Key claims

- Microsoft Foundry Models includes models that can use tools to find information or perform tasks (SRC-259 L218).
- Tool support is enabled by specifying desired tools in prompts sent through the OpenAI Responses API (SRC-259 L218).
- The development flow is to find a model with tool-calling capabilities, deploy it, and call it from a client app through Responses API prompts that specify tools (SRC-259 L219).
- By default, the model chooses when to use a tool and which tool to use (SRC-259 L221).
- Common Responses API tools include `code_interpreter`, `web_search`, `file_search`, and `function` (SRC-259 L222–226).
- Tools are specified in a `responses.create()` call as a list of callable tools (SRC-259 L230–231).

## How it works

The source describes a request-time configuration pattern: find and deploy a Foundry model that supports tool calling, then call it through the OpenAI Responses API with a tool list in the request (SRC-259 L218–219; SRC-259 L230–231). The model normally decides whether the prompt requires a tool and which available tool fits, although developers can guide the choice through selection rules and instructions (SRC-259 L221).

## Code and API patterns

The source names `responses.create()` as the place where a developer specifies one or more callable tools (SRC-259 L230–231). The captured page indicates a Python pseudocode block but does not include the code itself beyond the `Python` and `Copy` markers (SRC-259 L231–234).

## Key terms

- `code_interpreter`: a Python environment where the model can generate and run code (SRC-259 L223).
- `web_search`: a tool for finding Internet information beyond training data (SRC-259 L224).
- `file_search`: a tool for searching uploaded files in a dedicated vector search index (SRC-259 L225).
- `function`: a tool that lets the model call custom functions in application code (SRC-259 L226).

## Decision boundaries and exam cues

- **Inference:** If a question asks where tools are declared for a model call, point to the `tools` list in a `responses.create()` request rather than model training or fine-tuning (SRC-259 L218; SRC-259 L230–231).
- **Inference:** Match the requested capability to the tool name: Python execution maps to `code_interpreter`, current web facts to `web_search`, uploaded document grounding to `file_search`, and custom app logic to `function` (SRC-259 L223–226).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says these are only some available tools and that tool development for agentic AI is growing (SRC-259 L228–229).
- **Stale-risk:** The list on this page may not remain exhaustive because the source points readers to the OpenAI developer guide for broader tool support (SRC-259 L228–229).

## Relation to other sources

- [[src-123-introduction-develop-generative-ai-apps-that-tools]] motivates tools as a way to overcome model isolation and training-data limits (SRC-123 L216; SRC-123 L220–226).
- [[src-254-code-interpreter-tool]], [[src-257-web-search-tool]], [[src-255-file-search-tool]], and [[src-256-function-tool]] each expand one tool named in this unit (SRC-259 L222–226).
- [[src-50-develop-generative-ai-apps-that-tools-episode-4]] mirrors the same four-tool structure and adds a demonstration narrative (SRC-50 L113–199; SRC-50 L211–383).

## Connections

- [[responses-api]] — the API surface used to specify callable tools.
- [[agent-tools]] — umbrella concept for the tools named here.
- [[code-interpreter-tool]] — dedicated concept for Python execution.
- [[web-search-tool]] — dedicated concept for web retrieval.
- [[file-search-tool]] — dedicated concept for uploaded-file retrieval.
- [[function-calling]] — dedicated concept for custom functions.
- [[tool-options-compared]] — synthesis for choosing between tool options.

## Open questions

- The capture does not show the pseudocode block, so exact Python request syntax is not recoverable from this source alone (SRC-259 L231–234).

## Sources

- SRC-259 — raw file: [[259-What are tools- - Training - Microsoft Learn]]

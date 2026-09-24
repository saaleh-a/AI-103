---
title: "Summary — Develop generative AI apps that use tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Summarizes the four tool types and the shared implementation pattern for tool-augmented model responses."
area: agents
source_ids: [SRC-198]
objectives: [G03, G05, G09]
tags: [summary, tools, responses-api, agents]
aliases: ["SRC-198"]
source_kind: learn-unit
module: "Develop generative AI apps that use tools"
learning_path: "Develop generative AI apps in Azure"
unit: "9 of 9"
presenters: []
raw_file: "198-Summary - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/09-summary"
ingest_depth: full
---

# Summary — Develop generative AI apps that use tools

*learn-unit · Develop generative AI apps that use tools · unit 9 of 9 · SRC-198*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-198 |
| Raw file | `198-Summary - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop generative AI apps that use tools |
| Unit / episode | 9 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/09-summary |
| Teaching content | L212–231 of 259 |
| Content length | ~227 words |
| Capture quality | High: concise summary with footer remnants after content. |
| Ingest depth | full |

## TL;DR

This source summarizes tool calling as extending a generative AI model from text-only reasoning to grounded action (SRC-198 L218). The module covers configuring tools in OpenAI Responses API requests and distinguishes the added capability of `code_interpreter`, `web_search`, `file_search`, and `function` (SRC-198 L219–223). Across tools, the shared pattern is to define the tool, let the model decide when to use it, return tool output when required, and validate responses for correctness and safety (SRC-198 L224).

## Key claims

- Tool calling extends a generative AI model from text-only reasoning to practical grounded action (SRC-198 L218).
- The module teaches configuration of tools in OpenAI Responses API requests (SRC-198 L219).
- `code_interpreter` lets the model generate and run Python for calculations, data analysis, and iterative problem solving (SRC-198 L220).
- `web_search` retrieves current external information for timely, source-grounded responses (SRC-198 L221).
- `file_search` helps answer questions from indexed documents and knowledge files (SRC-198 L222).
- `function` lets the application run custom business logic and return results to the model (SRC-198 L223).
- The shared implementation pattern is to define tools in the request, let the model choose when to use them, return output when required, and validate results (SRC-198 L224).
- Combining these techniques can evolve assistants toward agentic solutions with persisted instructions, tools, and orchestration (SRC-198 L225).

## How it works

The source condenses the module into a general loop: configure tools in a Responses API request, allow the model to decide tool use, return tool output if the tool requires it, and validate final responses (SRC-198 L219; SRC-198 L224). It maps each tool to a capability: executable Python, current web retrieval, indexed document retrieval, or custom business logic (SRC-198 L220–223).

## Code and API patterns

No code is shown in this summary source, but it names OpenAI Responses API requests as the configuration surface for tools (SRC-198 L219). It also identifies the core pattern for code that integrates tools: define the tool, let the model select, return outputs when required, and validate (SRC-198 L224).

## Key terms

- Tool calling: the mechanism that extends a model from text-only reasoning to grounded action (SRC-198 L218).
- `code_interpreter`: Python generation and execution for computation and analysis (SRC-198 L220).
- `web_search`: current external information retrieval (SRC-198 L221).
- `file_search`: indexed document and knowledge-file retrieval (SRC-198 L222).
- `function`: application business logic invoked as a custom tool (SRC-198 L223).

## Decision boundaries and exam cues

- **Inference:** This summary gives a compact selection rule: Python execution maps to `code_interpreter`, current external facts to `web_search`, indexed owned documents to `file_search`, and custom business logic to `function` (SRC-198 L220–223).
- **Inference:** Any exam scenario about tool integration should include validation for correctness and safety because the source makes validation part of the shared pattern (SRC-198 L224).
- **Inference:** If a scenario requires persisted instructions, tools, and orchestration, it is moving beyond this module's chat-app tool pattern toward agentic solutions (SRC-198 L225).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The summary includes further-reading links to OpenAI developer guidance but not the guidance content itself (SRC-198 L226–229).
- **Stale-risk:** External developer guide details may change; this source only captures their existence as further reading (SRC-198 L226–229).

## Relation to other sources

- [[src-123-introduction-develop-generative-ai-apps-that-tools]] introduces the same transition from isolated generative AI to tool-extended assistants (SRC-123 L216; SRC-123 L226–227).
- [[src-259-what-are-tools]] defines the four common tools that this summary recaps (SRC-259 L222–226).
- [[src-50-develop-generative-ai-apps-that-tools-episode-4]] closes with the same set of capabilities: code, files, functions, and web search (SRC-50 L834–847).

## Connections

- [[agent-tools]] — module-level concept summarized here.
- [[responses-api]] — tool configuration surface named in the summary.
- [[code-interpreter-tool]] — summarized tool capability.
- [[web-search-tool]] — summarized tool capability.
- [[file-search-tool]] — summarized tool capability.
- [[function-calling]] — summarized custom logic capability.
- [[ai-agents]] — next-stage agentic solutions named by the summary.

## Open questions

- The source does not add new syntax, limits, or configuration detail beyond the earlier module units (SRC-198 L219–225).

## Sources

- SRC-198 — raw file: [[198-Summary - Training - Microsoft Learn]]

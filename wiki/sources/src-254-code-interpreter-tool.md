---
title: "Use the code_interpreter tool"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains how code_interpreter gives a model a sandboxed Python runtime for calculations, data analysis, and iterative code execution."
area: agents
source_ids: [SRC-254]
objectives: [G03, G05, G09]
tags: [code-interpreter, python, responses-api, tools]
aliases: ["SRC-254"]
source_kind: learn-unit
module: "Develop generative AI apps that use tools"
learning_path: "Develop generative AI apps in Azure"
unit: "3 of 9"
presenters: []
raw_file: "254-Use the code_interpreter tool - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/03-code-interpreter"
ingest_depth: full
---

# Use the code_interpreter tool

*learn-unit · Develop generative AI apps that use tools · unit 3 of 9 · SRC-254*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-254 |
| Raw file | `254-Use the code_interpreter tool - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop generative AI apps that use tools |
| Unit / episode | 3 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/03-code-interpreter |
| Teaching content | L212–256 of 286 |
| Content length | ~451 words |
| Capture quality | High for prose; code blocks are omitted by capture. |
| Ingest depth | full |

## TL;DR

The `code_interpreter` tool gives a model a Python runtime so it can write and run Python code during a conversation (SRC-254 L218–220). It supports dynamic Python execution, file handling, data analysis, feedback-driven iteration, and complex problem solving (SRC-254 L221–226). Its execution is sandboxed, has no external network access, and has timeout and memory constraints (SRC-254 L252–256).

## Key claims

- `code_interpreter` provides a Python runtime where the model can generate and run Python code (SRC-254 L218).
- The model can test logic, process data, and return actual code results rather than only discussing code or algorithms (SRC-254 L220).
- Key capabilities include dynamic Python execution, file handling, data analysis, real-time feedback, and complex problem solving (SRC-254 L221–226).
- The tool is used by including `code_interpreter` in the tools array (SRC-254 L238–240).
- The model determines whether code execution is needed, writes Python code, runs it in a sandbox, receives results, and incorporates them into the response (SRC-254 L239–244).
- Executions have no external network access and are bounded by library availability, timeout limits, and memory constraints (SRC-254 L252–256).

## How it works

The request includes `code_interpreter` in the tools array, after which the model analyzes the task and decides whether execution is needed (SRC-254 L239–241). If execution is useful, the model generates Python, runs it in a sandbox with common libraries, receives the output, and uses that result in its final answer (SRC-254 L242–244). The model can also see execution errors and attempt to fix them automatically (SRC-254 L251).

## Code and API patterns

The source identifies OpenAI Responses API usage and says the request includes `code_interpreter` in the tools array (SRC-254 L230; SRC-254 L238–240). The captured page marks omitted Python and output code blocks but does not include their contents (SRC-254 L230–237). Prompt guidance includes describing data format and expected output clearly, using the language `python tool`, and validating AI-generated code before production use (SRC-254 L246–248).

## Key terms

- Python runtime: the execution environment made available to the model by `code_interpreter` (SRC-254 L218–220).
- Sandbox: the constrained environment where code runs with no external network access (SRC-254 L243; SRC-254 L253).
- Real-time feedback: execution results and errors that the model can inspect and iterate on (SRC-254 L225; SRC-254 L251).

## Decision boundaries and exam cues

- **Inference:** Choose `code_interpreter` when the scenario requires calculations, statistical analysis, data transformations, simulations, or executable logic rather than only text generation (SRC-254 L224; SRC-254 L226).
- **Inference:** Do not choose `code_interpreter` for browsing external websites during execution because the sandbox has no external network access (SRC-254 L253).
- **Inference:** If the scenario emphasizes uploaded files plus computation, `code_interpreter` can handle files; if it emphasizes answering from indexed documents, compare with `file_search` (SRC-254 L223–224; SRC-255 L218–225).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says some libraries may not be available even though common packages such as pandas, numpy, and matplotlib are pre-installed (SRC-254 L250; SRC-254 L254).
- **Stale-risk:** Available libraries, timeouts, and memory limits are platform details that can change; the source only states the general constraints (SRC-254 L250; SRC-254 L254–256).

## Relation to other sources

- [[src-259-what-are-tools]] first names `code_interpreter` as one of the commonly used Responses API tools (SRC-259 L222–223).
- [[src-198-summary-develop-generative-ai-apps-that-tools]] summarizes `code_interpreter` as the tool for calculations, data analysis, and iterative problem solving (SRC-198 L218–220).
- [[src-50-develop-generative-ai-apps-that-tools-episode-4]] explains the mental model: LLMs predict tokens poorly for math, but they can write code and execute deterministic code (SRC-50 L113–152).

## Connections

- [[code-interpreter-tool]] — canonical concept for this built-in tool.
- [[responses-api]] — request surface for the tools array.
- [[agent-tools]] — broader tool category.
- [[function-calling]] — nearby custom execution pattern to distinguish from sandboxed Python execution.
- [[tool-options-compared]] — synthesis page for selecting among tools.

## Open questions

- The capture omits the actual Python example, so exact parameter names beyond `code_interpreter` and tools array are not visible in this source (SRC-254 L230–237; SRC-254 L239–240).

## Sources

- SRC-254 — raw file: [[254-Use the code_interpreter tool - Training - Microsoft Learn]]

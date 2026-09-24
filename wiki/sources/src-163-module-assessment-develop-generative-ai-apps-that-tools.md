---
title: "Module assessment — Develop generative AI apps that use tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment capture with three questions on file_search, function_call handling, and code_interpreter behavior."
area: agents
source_ids: [SRC-163]
objectives: []
tags: [assessment, tools, file-search, function-calling, code-interpreter]
aliases: ["SRC-163"]
source_kind: learn-unit
module: "Develop generative AI apps that use tools"
learning_path: "Develop generative AI apps in Azure"
unit: "8 of 9"
presenters: []
raw_file: "163-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/08-knowledge-check"
ingest_depth: full
---

# Module assessment — Develop generative AI apps that use tools

*learn-unit · Develop generative AI apps that use tools · unit 8 of 9 · SRC-163*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-163 |
| Raw file | `163-Module assessment - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop generative AI apps that use tools |
| Unit / episode | 8 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/08-knowledge-check |
| Teaching content | L212–230 of 260 |
| Content length | ~152 words |
| Capture quality | High for questions and options; checked answers are not shown. |
| Ingest depth | full |

## TL;DR

This assessment checks three distinctions: which tool answers from uploaded policy documents, what an app should do after a `function_call` item, and what the `code_interpreter` tool can do (SRC-163 L214–227). The capture lists options but does not show submitted answers or correctness feedback (SRC-163 L228–230).

## Key claims

- The assessment asks which tool should be used for questions over uploaded policy documents (SRC-163 L214–217).
- The assessment asks what an application should do after receiving a `function_call` item (SRC-163 L219–222).
- The assessment asks which statement about `code_interpreter` is correct (SRC-163 L223–227).
- The capture requires all questions to be answered before checking work (SRC-163 L228–230).

## How it works

Not covered by this source; it is an assessment capture rather than an explanatory unit (SRC-163 L214–230).

## Code and API patterns

The assessment names the `function_call` item and `function_call_output` return pattern in one option (SRC-163 L219–221). It names the `code_interpreter` sandboxed Python capability in one option (SRC-163 L223–225).

## Key terms

- `file_search`: an option for answering from uploaded policy documents (SRC-163 L214–216).
- `function_call`: the model-returned item named in the workflow question (SRC-163 L219).
- `function_call_output`: the item named as output sent back to the model in one option (SRC-163 L220–221).
- `code_interpreter`: the tool named in the Python sandbox question (SRC-163 L223–225).

## Decision boundaries and exam cues

- **Inference:** The assessment targets uploaded-document grounding versus web retrieval or Python execution by contrasting `web_search`, `file_search`, and `code_interpreter` (SRC-163 L214–217).
- **Inference:** It tests that application code executes functions and returns output, rather than expecting the model to run functions automatically (SRC-163 L219–222).
- **Inference:** It tests that `code_interpreter` can run Python in a sandbox but should not be confused with direct external web browsing (SRC-163 L223–227).

## Assessment items

1. Question: Which tool should you use when a model needs to answer questions from your own uploaded policy documents? Options: `web_search`; `file_search`; `code_interpreter`. Answer: answer not shown in capture (SRC-163 L214–217).
2. Question: In a function-calling workflow, what should your application do after the model returns a `function_call` item? Options: wait for the model to run the function automatically; run the function in your code and send a `function_call_output` back to the model; convert the function call into a `web_search` request. Answer: answer not shown in capture (SRC-163 L219–222).
3. Question: Which statement about the `code_interpreter` tool is correct? Options: it can run Python code in a sandboxed runtime to help solve tasks; it can browse external websites directly during code execution; it only supports file uploads and cannot perform calculations. Answer: answer not shown in capture (SRC-163 L223–227).

## Tensions, caveats and currency

- The capture shows question text and options, but no selected or correct answers (SRC-163 L214–230).

## Relation to other sources

- [[src-255-file-search-tool]] provides the explanatory basis for the uploaded-policy-documents question (SRC-255 L218–225).
- [[src-256-function-tool]] provides the explanatory basis for running a function and sending `function_call_output` (SRC-256 L240–247).
- [[src-254-code-interpreter-tool]] provides the explanatory basis for the sandboxed Python question and the no-network limitation (SRC-254 L218–220; SRC-254 L252–256).
- [[src-50-develop-generative-ai-apps-that-tools-episode-4]] verbally reviews the first assessment question and says the expected answer is File Search (SRC-50 L817–826).

## Connections

- [[file-search-tool]] — assessed as the uploaded-document tool.
- [[function-calling]] — assessed workflow pattern after `function_call`.
- [[code-interpreter-tool]] — assessed Python sandbox tool.
- [[agent-tools]] — assessment topic family.
- [[decision-boundaries]] — useful for converting these items into exam discrimination rules.
- *Module units:* [[src-123-introduction-develop-generative-ai-apps-that-tools|1 Introduction]] · [[src-259-what-are-tools|2 What are tools-]] · [[src-254-code-interpreter-tool|3 Use the code_interpreter tool]] · [[src-257-web-search-tool|4 Use the web_search tool]] · [[src-255-file-search-tool|5 Use the file_search tool]] · [[src-256-function-tool|6 Use the function tool]] · [[src-63-exercise-create-generative-ai-chat-app-that-uses-tools|7 Exercise - Create a generative AI chat app that uses tools]] · [[src-198-summary-develop-generative-ai-apps-that-tools|9 Summary]] · [[src-50-develop-generative-ai-apps-that-tools-episode-4|episode 4]]

## Open questions

- The capture does not show correctness feedback for the three assessment items (SRC-163 L228–230).

## Sources

- SRC-163 — raw file: [[163-Module assessment - Training - Microsoft Learn]]

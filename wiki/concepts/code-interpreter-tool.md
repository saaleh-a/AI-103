---
title: "Code interpreter tool"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Built-in tool that lets a model or agent generate and run Python in a sandbox for computation and file analysis."
area: agents
source_ids: [SRC-4, SRC-91, SRC-254, SRC-255, SRC-256, SRC-257, SRC-259]
objectives: [P04, G03, G09]
objective_gaps: []
tags: []
aliases: ["code_interpreter", "Python tool", "code execution tool", "Code Interpreter"]
---

# Code interpreter tool

## Summary

`code_interpreter` is the built-in tool that gives a model or agent a Python runtime so it can calculate, analyze data, process files, generate charts, and iterate after execution errors. (SRC-254 L218–224; SRC-91 L234–235)

## The problem it solves

Some user requests need exact computation or file processing rather than natural-language reasoning alone. The code-interpreter source says the model can test logic, process data, and return actual results from code rather than merely discuss algorithms. (SRC-254 L219–224)

## Mental model

The model becomes a supervised analyst with a temporary Python workspace: it decides code execution is useful, writes Python, runs it in a sandbox, sees the output or error, and folds the result into the response. (SRC-254 L238–244)

## What the sources say

- The Responses API tools module defines `code_interpreter` as a Python environment where the model can generate and run code. (SRC-259 L222–223)
- The dedicated source says the tool enables generative AI models to write and run Python dynamically during a conversation. (SRC-254 L218–220)
- It lists dynamic Python execution, file handling, data analysis, real-time feedback, and complex problem solving as key features. (SRC-254 L222–226)
- The Foundry agent tools source says Code Interpreter enables agents to write and execute Python in a secure sandbox for mathematical calculations, data analysis, chart generation, file processing, and complex problem-solving. (SRC-91 L234–235)
- The Agent Framework source groups code execution with service-provided tools when the provider supports them. (SRC-4 L217–220)

## How it works in Azure

In a Responses API app, the application includes `code_interpreter` in the tools array, and the model determines whether code execution is needed. (SRC-254 L238–240) In Foundry agent scenarios, Code Interpreter is a built-in/service-provided tool enabled in the agent configuration or tool catalog. (SRC-91 L232–235; SRC-4 L217–220)

The runtime is sandboxed and has access to common libraries such as pandas, numpy, and math; the model receives execution results and can fix errors automatically. (SRC-254 L242–257)

## Code and configuration

The corpus's captured code blocks are elided by the Learn capture, but the process is explicit: include `code_interpreter` in the tools array, let the model analyze the task, let it generate Python, run the code, and return results to the model. (SRC-254 L238–244) The source advises prompts to be specific about data format and expected output, and notes many models internally use the name `python tool`, so instructions can use that language. (SRC-254 L245–246)

## Decision boundaries

**Synthesis:** each rule below pairs the code-interpreter evidence (SRC-254 L222–226; SRC-91 L234–235) with the cited tool's own description; the "instead" choices are this page's decision rules, not statements of any one source.

- Use [[code-interpreter-tool]] when the answer depends on executable computation, data transformation, charting, or iterative code/debug output. (SRC-254 L222–226; SRC-91 L234–235)
- **Inference:** Use [[file-search-tool]] instead when the need is to retrieve relevant passages from uploaded documents, not calculate over them. (SRC-255 L218–227; SRC-254 L222–226)
- **Inference:** Use [[function-calling]] instead when execution must happen in developer-owned business logic, APIs, databases, or workflows rather than the tool's Python sandbox. (SRC-256 L219–224; SRC-254 L252–253)
- **Inference:** Use [[web-search-tool]] instead when the missing input is current public web information. (SRC-257 L218–227; SRC-254 L252–253)

**Inference:** If a scenario asks for exact math over a CSV and a chart, Code Interpreter is the built-in match; if it asks for an approved internal payroll system action, use function calling or a custom tool because the source says Code Interpreter has no external network access. (SRC-254 L252–257; SRC-256 L219–224)

## Failure modes and misconceptions

- Do not assume the sandbox can call external systems: executions run with no external network access. (SRC-254 L252–253)
- Do not assume every Python library or unlimited data size is available: the source names library availability, timeout, and memory constraints. (SRC-254 L253–256)
- Do not treat generated code as production code without review: the source says to validate results and review AI-generated code before production use. (SRC-254 L247–248)
- Do not add the tool without purpose: the agent-tools source says unnecessary tools add latency. (SRC-91 L288–291)

## Solution Engineering transfer

**Inference:** Customer signal: "Can the assistant analyze this spreadsheet and produce calculations or charts?" Discovery question: "Does the data fit in files the tool can process, and can the work run without calling external systems?" Trade-off: use Code Interpreter for sandboxed analysis; use functions/custom tools for governed enterprise actions. (SRC-254 L222–257; SRC-256 L219–224)

## Connections

- [[agent-tools]] — Code Interpreter is one built-in tool in the broader tool family.
- [[responses-api]] — Responses API apps enable `code_interpreter` in the tools array.
- [[function-calling]] — closest execution-boundary confusion: sandboxed Python vs developer-run logic.
- [[file-search-tool]] — often paired with documents but solves retrieval rather than computation.
- [[tool-options-compared]] — synthesis decision boundary for tool selection.
- [[src-254-code-interpreter-tool]] — dedicated source page for this tool.
- [[src-91-extend-agent-capabilities-tools]] — agent-context description of Code Interpreter.
- *Also linked from:* [[overview]]

## Sources

- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — Agent Framework service-provided tool category.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — Code Interpreter in Foundry agent tool catalog.
- SRC-254 — [[src-254-code-interpreter-tool]] — dedicated tool behavior, process, practices, and limits.
- SRC-255 — [[src-255-file-search-tool]] — File Search boundary for uploaded-document retrieval.
- SRC-256 — [[src-256-function-tool]] — function-calling boundary for developer-run logic.
- SRC-257 — [[src-257-web-search-tool]] — Web Search boundary for current public information.
- SRC-259 — [[src-259-what-are-tools]] — Responses API tool overview.

## Open questions

- The corpus names common libraries but does not give an authoritative complete package list, timeout limit, memory limit, or supported file-size limit. (SRC-254 L242–256)





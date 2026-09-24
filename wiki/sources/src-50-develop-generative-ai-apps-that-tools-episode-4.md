---
title: "Develop generative AI apps that use tools - AI-103 - Episode 4"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode transcript walkthrough of model tools, Responses API calls, Foundry demos, vector stores, and function calling."
area: agents
source_ids: [SRC-50]
objectives: [G02, G03, G05, G09]
tags: [episode, tools, responses-api, file-search, web-search, function-calling]
aliases: ["SRC-50"]
source_kind: episode
module: "Develop generative AI apps that use tools"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "50-Develop generative AI apps that use tools - AI-103 - Episode 4.md"
url: "https://www.youtube.com/watch?v=N5DcQ-ZNp_M"
ingest_depth: full
---

# Develop generative AI apps that use tools - AI-103 - Episode 4

*episode · Develop generative AI apps that use tools · SRC-50*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-50 |
| Raw file | `50-Develop generative AI apps that use tools - AI-103 - Episode 4.md` |
| Kind | episode |
| Learning path | null |
| Module | Develop generative AI apps that use tools |
| Unit / episode | Episode 4 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=N5DcQ-ZNp_M |
| Teaching content | L3–865 of 865 |
| Content length | ~3881 words |
| Capture quality | Medium: auto-captioned transcript with line-wrapped speech and likely transcription artifacts. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames tools as a way to make generative AI applications more than chat, especially by adding grounding, data, current information, and actions (SRC-50 L11–29; SRC-50 L54–88). The episode covers common Foundry tools: code interpreter, web search, file search, and function calling (SRC-50 L100–113; SRC-50 L834–847). It demonstrates web search in the Foundry playground, then code that uses endpoint and model settings, vector stores, file upload, Responses API calls, `web_search`, and `file_search` (SRC-50 L522–601; SRC-50 L605–754).

## Key claims

- The episode's goal is to move applications beyond back-and-forth chat by using tools, primarily for grounding or data (SRC-50 L11–29).
- A trained large language model is fixed for its lifetime in this account and does not know the present, private enterprise information, or how to take action by itself (SRC-50 L41–55).
- Tools can provide real-time information, actions, enterprise-grounded responses, extended functionality, and workflows (SRC-50 L60–92).
- Foundry supports custom tools and also has built-in common tools (SRC-50 L93–110).
- Code interpreter combines the model's code-writing ability with deterministic code execution for tasks like math or data analysis (SRC-50 L113–152).
- Web search adds current Internet information through a simple Foundry tool capability (SRC-50 L153–173).
- File search uses uploaded files as a knowledge source, such as documentation, policy files, job descriptions, or enterprise descriptions (SRC-50 L174–185).
- Function tools let a client app run code on behalf of the model when described functions are needed (SRC-50 L186–208).
- File search requires creating a vector store, uploading documents, chunking and embedding content, and passing vector store IDs to the `file_search` tool (SRC-50 L269–363).

## How it works

The episode begins with the model limitation: training fixes the model's public knowledge, while tools extend it with current information, enterprise data, action, and workflows (SRC-50 L35–59; SRC-50 L60–92). It then maps built-in tools to needs: code interpreter for deterministic execution, web search for current public information, file search for uploaded knowledge sources, and functions for application-specific code (SRC-50 L113–199).

For code interpreter, the portal path is to add code interpreter in the Foundry tool section, while the code path uses `client.responses.create`, a model, instructions, and a tools array containing a lowercase `type` value of `code_interpreter` (SRC-50 L211–241). For web search, the code pattern again uses create, model, instructions, and a tools entry with a known type value such as web search or web search preview (SRC-50 L253–265). For file search, the episode describes creating a vector store, uploading documents, and passing vector store IDs to `file_search` (SRC-50 L269–363). For functions, the model receives a function name and description, emits a function-call output type when needed, and the app dispatches and returns output in another response (SRC-50 L383–500).

## Code and API patterns

The episode repeatedly anchors tool use in the Responses API, specifically `client.responses.create` with model, instructions, input, and a tools collection (SRC-50 L219–231; SRC-50 L430–435; SRC-50 L716–736). For code interpreter, the known type value is `code_interpreter`, all lowercase, and the tool can use a container for uploaded files or data files (SRC-50 L232–251).

For file search, the code creates a vector store, receives an ID, uploads documents, and later passes the vector store ID to a `file_search` tool configuration (SRC-50 L335–363). In the app demo, the code uses `vector_stores.file_batches.upload_and_poll` with the vector store ID and file streams (SRC-50 L701–712). The final Responses API request includes `web_search` and `file_search` tools, with `file_search` receiving the vector store ID array (SRC-50 L735–754).

For function calling, the example defines a `get_time` function, gives the tool the function name and description, checks the response output type for a function call, dispatches the function, appends output to the function call, and sends another response (SRC-50 L399–435; SRC-50 L447–490).

## Key terms

- Tools: capabilities that extend a model with real-time information, actions, enterprise grounding, functionality, or workflows (SRC-50 L54–88).
- Code interpreter: a tool that lets the model write code and execute it deterministically (SRC-50 L113–152).
- Web search: a tool that adds current Internet search capability to the model (SRC-50 L153–173; SRC-50 L571–601).
- Vector store: a store that represents data numerically so semantically similar arrays can be compared (SRC-50 L278–294).
- Embedding: the process of turning chunked data into numerical equivalents for retrieval (SRC-50 L304–314).
- Function tool: a described app-side function the model can request but cannot directly execute itself (SRC-50 L383–441).

## Decision boundaries and exam cues

- **Inference:** If the task is mathematical or analytical, code interpreter fits because the episode contrasts token prediction with deterministic code execution (SRC-50 L113–152).
- **Inference:** If the information happened yesterday or is not in training data or knowledge sources, web search fits (SRC-50 L153–173).
- **Inference:** If the source of truth is enterprise documentation or brochures, file search and vector stores fit better than a generic web search (SRC-50 L174–185; SRC-50 L657–678).
- **Inference:** If no built-in tool fits and the app can run custom code, a function tool fits because the app calls the described function on the model's behalf (SRC-50 L186–208; SRC-50 L430–490).

## Assessment items

The episode reviews the assessment prompts at the end rather than displaying a full interactive assessment (SRC-50 L817–833). It says the tool for uploaded policy documents is File Search (SRC-50 L819–826). It also asks what an app should do after a function call item and which statement about code interpreter is correct, but the transcript does not provide full options or explicit answers for those two prompts (SRC-50 L826–833).

## Segment guide

- L3–29 — Opening and topic: tools make apps more than chat and add grounding or data (SRC-50 L3–29).
- L30–92 — Why tools matter: models are fixed after training and tools add real-time information, action, enterprise grounding, functionality, and workflows (SRC-50 L30–92).
- L93–208 — Built-in and custom tool overview: code interpreter, web search, file search, and function tools (SRC-50 L93–208).
- L209–265 — Code-level tool calls for code interpreter and web search through `client.responses.create` and tools type values (SRC-50 L209–265).
- L266–383 — File search mechanics: vector stores, chunking, embeddings, uploads, vector store IDs, and search result inclusion (SRC-50 L266–383).
- L383–500 — Function tool mechanics: `get_time`, tool name and description, function-call output, dispatch, appended output, and follow-up response (SRC-50 L383–500).
- L501–601 — Foundry playground demo: start with no tools, then add web search to make travel recommendations more current and concrete (SRC-50 L501–601).
- L602–754 — Client app demo setup: endpoint, model, DefaultAzureCredential, OpenAI client, travel brochures, vector store creation, file upload, and Responses API tools (SRC-50 L602–754).
- L755–813 — Demo run: upload files, ask about San Francisco events using web search, then ask about Margie's Travel hotels using uploaded brochures (SRC-50 L755–813).
- L814–865 — Knowledge check review and wrap-up: File Search for uploaded policy docs, function call and code interpreter prompts, and summary of tools covered (SRC-50 L814–865).

## Tensions, caveats and currency

- The transcript is auto-captioned and line-wrapped, so product names and code identifiers can be less reliable than Learn prose (SRC-50 L3–865).
- **Stale-risk:** The presenter says the demo was tested against Python 3.13 as of the recording, which is time-sensitive environment guidance (SRC-50 L763–766).
- The presenter mentions type values for web search or web search preview depending on the version, which signals API naming or version variation (SRC-50 L260–265).

## Relation to other sources

- [[src-123-introduction-develop-generative-ai-apps-that-tools]] states the same high-level reason for tools: models are bounded by training data and tools add real-world capabilities (SRC-123 L216; SRC-123 L220–226).
- [[src-259-what-are-tools]] provides the concise Learn-unit inventory for the same four common Responses API tools (SRC-259 L222–226).
- [[src-255-file-search-tool]] is the prose companion for the episode's vector-store and document-grounding demo (SRC-255 L235–241; SRC-50 L269–363).
- [[src-256-function-tool]] is the prose companion for the episode's `get_time` function-calling walkthrough (SRC-256 L230–247; SRC-50 L399–490).

## Connections

- [[agent-tools]] — the episode's core concept.
- [[responses-api]] — the code path used throughout the episode.
- [[code-interpreter-tool]] — built-in tool explained in the episode.
- [[web-search-tool]] — built-in tool demonstrated in the playground and client app.
- [[file-search-tool]] — built-in tool demonstrated with vector stores and brochures.
- [[function-calling]] — custom function pattern shown with `get_time`.
- [[embeddings-and-vector-search]] — retrieval mechanism described for vector stores.
- [[keyless-authentication]] — episode uses DefaultAzureCredential in the client setup.
- [[retrieval-options-compared]] — synthesis target for web versus file grounding.
- *Module units:* [[src-123-introduction-develop-generative-ai-apps-that-tools|1 Introduction]] · [[src-259-what-are-tools|2 What are tools-]] · [[src-254-code-interpreter-tool|3 Use the code_interpreter tool]] · [[src-257-web-search-tool|4 Use the web_search tool]] · [[src-255-file-search-tool|5 Use the file_search tool]] · [[src-256-function-tool|6 Use the function tool]] · [[src-63-exercise-create-generative-ai-chat-app-that-uses-tools|7 Exercise - Create a generative AI chat app that uses tools]] · [[src-163-module-assessment-develop-generative-ai-apps-that-tools|8 Module assessment]] · [[src-198-summary-develop-generative-ai-apps-that-tools|9 Summary]]

## Open questions

- The transcript does not show exact code blocks, so some identifiers are inferred from spoken captions and should be checked against official samples before reuse (SRC-50 L219–265; SRC-50 L335–363; SRC-50 L701–754).
- The episode says there are more complicated function versions with parameters later, but this transcript only shows a no-parameter example (SRC-50 L474–482).

## Sources

- SRC-50 — raw file: [[50-Develop generative AI apps that use tools - AI-103 - Episode 4]]

---
title: "Use Workflows in Code"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Shows invoking saved Foundry workflows from code with AIProjectClient, conversations, Responses API streaming, and events."
area: orchestration
source_ids: [SRC-247]
tags: [workflows, code, azure-ai-projects-sdk, responses-api, streaming]
aliases: ["SRC-247"]
source_kind: learn-unit
module: "Build agent-driven workflows using Microsoft Foundry"
learning_path: "Develop AI agents on Azure"
unit: "8"
presenters: []
raw_file: "247-Use Workflows in Code - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/8-use-workflows-in-code"
ingest_depth: full
---
# Use Workflows in Code
*learn-unit · Build agent-driven workflows using Microsoft Foundry · unit 8 · SRC-247*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-247 |
| Raw file | 247-Use Workflows in Code - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build agent-driven workflows using Microsoft Foundry |
| Unit / episode | 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/8-use-workflows-in-code |
| Teaching content | L8–31 of 45 |
| Content length | ~563 words |
| Capture quality | Compact Learn capture; code appears minified onto single lines. |
| Ingest depth | full |

## TL;DR
This source shows how a saved workflow from the Microsoft Foundry visual designer can be invoked from applications using the Azure AI Projects SDK (SRC-247 L12–15). The code pattern creates a conversation, calls `openai_client.responses.create`, passes the workflow as an `agent_reference`, streams events, and reads completion or workflow-action events (SRC-247 L16; SRC-247 L23–27).

## Key claims
- After a workflow is designed and tested in the visual designer, the Azure AI Projects SDK can integrate it into web apps, APIs, backend services, and other software solutions (SRC-247 L12).
- The Foundry portal visual designer creates the underlying YAML definition, and a saved workflow can be invoked by name or downloaded as YAML for a codebase (SRC-247 L13).
- `AIProjectClient` connects to the Microsoft Foundry project, handles authentication, and provides access to the OpenAI-compatible API for conversations and workflow invocation (SRC-247 L15).
- The `input` parameter can supply a question, support ticket, data payload, or empty string to start workflow logic (SRC-247 L17–21).
- Streaming events can show real-time progress, agent outputs, and workflow actions (SRC-247 L23–27).

## How it works
The workflow itself is authored in the portal, saved in a project, and referenced from code by name (SRC-247 L13–16). Code creates a conversation context, invokes the workflow through the Responses API with an `agent_reference`, supplies input, and optionally streams events while the workflow executes (SRC-247 L15–17; SRC-247 L23–27). For human-in-the-loop workflows, the application may need to provide additional messages to resume execution after a pause (SRC-247 L27).

## Code and API patterns
The invocation pattern is captured on one minified line in the source: reference a workflow name, create a conversation, call `openai_client.responses.create`, pass `extra_body={"agent": {"name": workflow_name, "type": "agent_reference"}}`, provide `input`, and set `stream=True` (SRC-247 L16).

The event-processing pattern is also minified: iterate over `stream`, handle `response.completed`, inspect `event.response.output`, and detect `response.output_item.done` where `event.item.type == ItemType.WORKFLOW_ACTION` (SRC-247 L24–26).

## Key terms
- `AIProjectClient`: project client that handles authentication and provides OpenAI-compatible access for executing conversations and invoking workflows (SRC-247 L15).
- `conversation`: context created before executing the workflow (SRC-247 L16).
- `agent_reference`: metadata in `extra_body` that points to the workflow by name and type (SRC-247 L16).
- `response.completed`: event type for final workflow completion (SRC-247 L25–26).
- `response.output_item.done`: event type for an individual output item such as a workflow action completing (SRC-247 L25–26).

## Decision boundaries and exam cues
- **Inference:** Use code integration when the workflow must be embedded in a web app, API, backend service, batch process, CI/CD validation, or custom interface (SRC-247 L12; SRC-247 L28–31).
- **Inference:** If the scenario requires real-time progress or workflow-action tracking, stream events and inspect event types (SRC-247 L23–27).
- **Inference:** If the workflow contains human-in-the-loop pauses, the application must be prepared to send additional messages to resume execution (SRC-247 L27).

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- The capture compresses Python code onto single lines, reducing readability but preserving the named objects and parameters (SRC-247 L16; SRC-247 L24).
- **Stale-risk:** SDK APIs and event names can change; this source captures the API surface at Learn capture time (SRC-247 L15–27).

## Relation to other sources
- [[src-151-maintain-workflows-microsoft-foundry]] introduces the YAML representation that this source says can be downloaded and included in a codebase (SRC-151 L222; SRC-247 L13).
- [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12]] demonstrates a similar code path with project endpoint, project client, conversation, `responses.create`, streaming, and deleting the conversation (SRC-15 L855–930).
- [[src-66-exercise-create-agent-driven-workflow]] sends learners to the portal exercise rather than code integration (SRC-66 L216–219).

## Connections
- [[foundry-sdk]] — `AIProjectClient` is the project SDK entry point named by this source (SRC-247 L15).
- [[responses-api]] — workflow invocation uses `openai_client.responses.create` (SRC-247 L16).
- [[conversation-state]] — the source creates a conversation context before invoking the workflow (SRC-247 L16).
- [[foundry-workflows]] — code invokes a workflow saved in a Foundry project (SRC-247 L13–16).
- *Module units:* [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry|1 Introduction]] · [[src-238-understand-workflows|2 Understand workflows]] · [[src-105-identify-workflow-patterns|3 Identify workflow patterns]] · [[src-36-create-workflows-microsoft-foundry|4 Create workflows in Microsoft Foundry]] · [[src-3-add-agents-workflow|5 Add agents to a workflow]] · [[src-11-apply-power-fx-workflows|6 Apply Power Fx in workflows]] · [[src-151-maintain-workflows-microsoft-foundry|7 Maintain workflows in Microsoft Foundry]] · [[src-66-exercise-create-agent-driven-workflow|9 Exercise - Create an agent-driven workflow]] · [[src-171-module-assessment-build-agent-driven-workflows-microsoft-foundry|10 Module assessment]] · [[src-219-summary-build-agent-driven-workflows-microsoft-foundry|11 Summary]] · [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12|episode 12]]

## Open questions
- The source does not include package installation, imports, authentication setup details, or complete runnable formatting (SRC-247 L15–24).

## Sources
- SRC-247 — raw file: [[247-Use Workflows in Code - Training - Microsoft Learn]]

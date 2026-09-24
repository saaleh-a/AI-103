---
title: "Implement an Agent Executor"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains the Agent Executor as the A2A component that receives requests, executes agent logic, streams events, and handles cancellation."
area: orchestration
source_ids: [SRC-107]
objectives: [G10]
tags: [a2a, agent-executor, request-context, event-queue]
aliases: ["SRC-107"]
source_kind: learn-unit
module: "Discover Azure AI Agents with A2A"
learning_path: "Develop AI agents on Azure"
unit: "3"
presenters: []
raw_file: "107-Implement an Agent Executor - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/3-implement-agent-executor"
ingest_depth: full
---
# Implement an Agent Executor

*learn-unit · Discover Azure AI Agents with A2A · unit 3 · SRC-107*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-107 |
| Raw file | 107-Implement an Agent Executor - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Discover Azure AI Agents with A2A |
| Unit / episode | 3 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/3-implement-agent-executor |
| Teaching content | L8–36 of 50 |
| Content length | ~313 words |
| Capture quality | High: compact Learn capture with complete teaching text. |
| Ingest depth | full |

## TL;DR

The Agent Executor is the A2A component that connects protocol-level requests to the agent's business logic. (SRC-107 L12) It handles incoming requests through `AgentExecutor`, uses `RequestContext` to understand the request, and uses `EventQueue` to send messages, task updates, artifacts, or other events back to the client. (SRC-107 L14; SRC-107 L24; SRC-107 L28)

## Key claims

- The Agent Executor is a core A2A-agent component. (SRC-107 L12)
- The Agent Executor defines how an agent processes requests, generates responses, and communicates with clients or other agents. (SRC-107 L12)
- The `AgentExecutor` interface handles incoming requests sent to the agent. (SRC-107 L14)
- The executor receives request information, processes it according to the agent's capabilities, and sends responses or events through a communication channel. (SRC-107 L14)
- Key responsibilities are executing requested tasks, streaming responses or individual messages, and handling cancellation if supported. (SRC-107 L15–18)
- The executor typically implements `Execute` and `Cancel` operations. (SRC-107 L19–27)
- The executor uses `RequestContext` for incoming request details and `EventQueue` to communicate results or events. (SRC-107 L28)

## How it works

The request flow in the source starts with a helper class that implements the agent's core logic, such as returning a string. (SRC-107 L29–31) The executor receives the request, calls the helper logic, wraps the result as an event, places that event on the event queue, and lets the routing mechanism send it back to the requester. (SRC-107 L32–34) For cancellation, a basic agent may only report that cancellation is unsupported. (SRC-107 L35)

## Code and API patterns

The source names the implementation surface but does not include a code block. (SRC-107 L19–28)

- `AgentExecutor` is the interface that receives incoming agent requests. (SRC-107 L14)
- `Execute` processes incoming requests, accesses request details, and sends results through the event queue. (SRC-107 L21–24)
- `Cancel` handles cancellation requests, but simple agents may not support it. (SRC-107 L25–27)
- `RequestContext` supplies incoming-request information, such as user input and task context. (SRC-107 L23; SRC-107 L28)
- `EventQueue` carries messages, task updates, artifacts, or other response events back to the client. (SRC-107 L24; SRC-107 L28)

## Key terms

- **Agent Executor** — the bridge between the A2A protocol and the agent's business logic. (SRC-107 L12)
- **`AgentExecutor` interface** — the interface that handles incoming requests sent to the agent. (SRC-107 L14)
- **`RequestContext`** — the object used by the executor to understand the incoming request. (SRC-107 L28)
- **`EventQueue`** — the channel used by the executor to communicate results or events back to the client. (SRC-107 L28)

## Decision boundaries and exam cues

- **Inference:** If a question asks what processes incoming requests and generates responses or events in an A2A agent, the answer is the Agent Executor, because that is the role this source assigns to it. (SRC-107 L12–14)
- **Inference:** If a question asks what contains the agent's business logic itself, the executor is not necessarily the helper logic; the source says the executor bridges protocol requests to the agent-specific business logic. (SRC-107 L12; SRC-107 L31–33)
- **Inference:** If a scenario needs task cancellation, verify whether the executor supports `Cancel`, because the source says cancellation may not be supported for simple agents. (SRC-107 L25–27)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source describes the interface and flow but does not show imports, packages, or concrete class signatures. (SRC-107 L14–28)

## Relation to other sources

- [[src-37-define-a2a-agent]] defines the skills and Agent Card before this source explains request execution. (SRC-37 L224–243)
- [[src-103-host-a2a-server]] places the Agent Executor behind a request handler and task store on an A2A server. (SRC-103 L24–27)
- [[src-157-module-assessment-discover-azure-ai-agents-a2a]] tests the executor's role as processing incoming requests and generating responses or events. (SRC-157 L218–221)

## Connections

- [[a2a-agent-implementation]] — this is the implementation component that executes A2A requests. (SRC-107 L12–14)
- [[agent2agent-protocol]] — the executor bridges protocol requests to business logic. (SRC-107 L12)
- [[multi-agent-orchestration]] — the executor enables the agent to participate in collaborative A2A workflows. (SRC-107 L36)

## Open questions

- The source does not show concrete Python code for `AgentExecutor`, `RequestContext`, or `EventQueue`. (SRC-107 L14–28)
- The source does not specify how artifacts differ from messages or task updates. (SRC-107 L24)

## Sources

- SRC-107 — raw file: [[107-Implement an Agent Executor - Training - Microsoft Learn]]

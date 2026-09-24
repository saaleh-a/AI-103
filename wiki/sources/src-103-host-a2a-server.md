---
title: "Host an A2A Server"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains hosting an A2A agent with an Agent Card, request handler, task store, Starlette app, and Uvicorn server."
area: orchestration
source_ids: [SRC-103]
objectives: [G10]
tags: [a2a, agent-card, request-handler, task-store, starlette, uvicorn]
aliases: ["SRC-103"]
source_kind: learn-unit
module: "Discover Azure AI Agents with A2A"
learning_path: "Develop AI agents on Azure"
unit: "4"
presenters: []
raw_file: "103-Host an A2A Server - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/4-host-a2a-agent-server"
ingest_depth: full
---
# Host an A2A Server

*learn-unit · Discover Azure AI Agents with A2A · unit 4 · SRC-103*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-103 |
| Raw file | 103-Host an A2A Server - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Discover Azure AI Agents with A2A |
| Unit / episode | 4 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/4-host-a2a-agent-server |
| Teaching content | L8–39 of 53 |
| Content length | ~407 words |
| Capture quality | High: compact Learn capture with complete server-hosting explanation. |
| Ingest depth | full |

## TL;DR

After an A2A agent has skills and an Agent Card, hosting makes it reachable over HTTP by clients and other agents. (SRC-103 L12) The server combines an Agent Card, a request handler linked to the Agent Executor and Task Store, and a Starlette/Uvicorn server application. (SRC-103 L18–31; SRC-103 L32–36)

## Key claims

- Hosting makes the agent accessible over HTTP for clients and other agents. (SRC-103 L12)
- Hosted agents can expose capabilities through the Agent Card, receive A2A requests, forward requests to the Agent Executor, and manage task lifecycles. (SRC-103 L13–16)
- The server bridges the agent's logic and the external world so the agent can participate in coordinated workflows. (SRC-103 L17)
- The three core server components are Agent Card, Request Handler, and Server Application. (SRC-103 L18–31)
- The Agent Card is typically exposed at `/.well-known/agent-card.json`. (SRC-103 L20–22)
- The request handler routes incoming requests to executor methods such as `execute` or `cancel`. (SRC-103 L24–25)
- The Task Store tracks tasks, streaming data, and resubscriptions, and simple agents still require one. (SRC-103 L26–27)
- The server application can be built with Starlette and run with an ASGI server such as Uvicorn. (SRC-103 L28–30)

## How it works

The setup sequence is: define skills and an Agent Card, initialize a request handler that links the Agent Executor with a Task Store, set up the server application with the card and handler, and start the server with Uvicorn. (SRC-103 L32–36) Once running, the server listens for incoming requests and responds according to the defined skills. (SRC-103 L37) A simple hosted agent might expose a greeting skill, while a more complex one might expose multiple skills or an extended Agent Card for authenticated users. (SRC-103 L38)

## Code and API patterns

The source names the web stack and endpoint shape but does not include executable code. (SRC-103 L22; SRC-103 L29–30)

- Agent Card endpoint: `/.well-known/agent-card.json`. (SRC-103 L20–22)
- Executor methods routed by the request handler include `execute` and `cancel`. (SRC-103 L24–25)
- Starlette is the Python web framework named for handling HTTP requests. (SRC-103 L28–29)
- Uvicorn is the ASGI server named for listening on a network interface and port. (SRC-103 L29–30)

## Key terms

- **Agent Card** — the server-exposed description of the agent's capabilities, skills, and input/output modes. (SRC-103 L20–22)
- **Request Handler** — the component that routes incoming requests to Agent Executor methods and manages the task lifecycle with a Task Store. (SRC-103 L24–27)
- **Task Store** — the component that tracks tasks, streaming data, and resubscriptions. (SRC-103 L26)
- **Server Application** — the HTTP application that exposes the agent card and request-handler endpoints. (SRC-103 L28–31)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks what makes an A2A agent reachable to other agents over HTTP, the source points to hosting the A2A server. (SRC-103 L12)
- **Inference:** If a scenario asks which component routes requests to `execute` or `cancel`, choose Request Handler, not Agent Executor, because the handler performs the routing. (SRC-103 L24–25)
- **Inference:** If a question asks the primary server role, select request routing between clients and connected agents rather than direct business logic, because the server forwards requests to the executor. (SRC-103 L15; SRC-103 L24–25)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says the Agent Card endpoint is typically `/.well-known/agent-card.json`, so the endpoint is presented as a common convention rather than an absolute rule. (SRC-103 L22)
- The source mentions extended cards for authenticated users but does not specify how authentication changes the card retrieval flow. (SRC-103 L23; SRC-103 L38)

## Relation to other sources

- [[src-37-define-a2a-agent]] defines the Agent Card and skills that this source hosts. (SRC-37 L224–243)
- [[src-107-implement-agent-executor]] explains the executor methods the request handler routes to. (SRC-107 L20–28)
- [[src-26-connect-a2a-agent]] explains the client side that retrieves the Agent Card and sends requests to the hosted server. (SRC-26 L217–225)
- [[src-157-module-assessment-discover-azure-ai-agents-a2a]] asks about the primary role of an A2A server. (SRC-157 L213–216)

## Connections

- [[a2a-agent-implementation]] — hosting is the step that makes the card, handler, executor, and task store available to clients. (SRC-103 L18–39)
- [[agent2agent-protocol]] — the server exposes A2A interaction over HTTP. (SRC-103 L12; SRC-103 L31)
- [[multi-agent-orchestration]] — the hosted server lets the agent participate in coordinated workflows. (SRC-103 L17; SRC-103 L39)

## Open questions

- The source does not show deployment hosting choices beyond a Starlette application and Uvicorn ASGI server. (SRC-103 L28–30)
- The source does not define resubscriptions beyond listing them as Task Store data. (SRC-103 L26)

## Sources

- SRC-103 — raw file: [[103-Host an A2A Server - Training - Microsoft Learn]]

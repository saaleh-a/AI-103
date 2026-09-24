---
title: "Connect to your A2A Agent"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains A2A client responsibilities: discover the Agent Card, send streaming or non-streaming requests, and handle message or task responses."
area: orchestration
source_ids: [SRC-26]
objectives: [G10]
tags: [a2a, client, agent-card, streaming, task-response]
aliases: ["SRC-26"]
source_kind: learn-unit
module: "Discover Azure AI Agents with A2A"
learning_path: "Develop AI agents on Azure"
unit: "5 of 8"
presenters: []
raw_file: "26-Connect to your A2A Agent - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/5-connect-to-a2a-agent"
ingest_depth: full
---
# Connect to your A2A Agent

*learn-unit · Discover Azure AI Agents with A2A · unit 5 of 8 · SRC-26*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-26 |
| Raw file | 26-Connect to your A2A Agent - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Discover Azure AI Agents with A2A |
| Unit / episode | 5 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/5-connect-to-a2a-agent |
| Teaching content | L211–240 of 270 |
| Content length | ~399 words |
| Capture quality | High: full client-connection explanation; one apparent typo appears in the raw text. |
| Ingest depth | full |

## TL;DR

An A2A client bridges an application to the agent server after the server is running. (SRC-26 L217) The client discovers the Agent Card, sends requests, and handles either direct-message responses or task-based responses. (SRC-26 L218–221; SRC-26 L231–235)

## Key claims

- A client is the bridge between an application and the A2A agent server. (SRC-26 L217)
- Client responsibilities include discovering the Agent Card, sending requests, and receiving and interpreting responses. (SRC-26 L218–221)
- The client must know the server base URL. (SRC-26 L222–223)
- The client typically retrieves the Agent Card from a well-known endpoint. (SRC-26 L224)
- After obtaining the Agent Card, the client can be initialized and become ready to send messages. (SRC-26 L225)
- A client can make non-streaming requests or streaming requests. (SRC-26 L226–229)
- More complex agents may return task objects instead of immediate messages, enabling task tracking or cancellation. (SRC-26 L230)

## How it works

The connection flow starts with the server base URL and Agent Card discovery. (SRC-26 L222–225) The client then sends either a non-streaming request, where it waits for a complete response, or a streaming request, where it receives incremental responses while the agent processes the request. (SRC-26 L226–229) Requests usually include a role and message content, and advanced agents may return task objects for tracking or cancellation. (SRC-26 L230) The client must handle direct messages and task-based responses. (SRC-26 L231–235)

## Code and API patterns

The source names client request and response patterns but does not include code. (SRC-26 L226–240)

- Non-streaming request: send a message and wait for a complete response. (SRC-26 L227–228)
- Streaming request: send a message and receive incremental responses. (SRC-26 L227–229)
- Request payloads usually include a role and message content. (SRC-26 L230)
- Each request should be uniquely identifiable, often with a generated ID. (SRC-26 L236–237)
- Streaming responses are asynchronous and can provide partial results before the final output. (SRC-26 L238)

## Key terms

- **Agent Card** — the metadata the client discovers about the agent and its endpoints. (SRC-26 L218–219)
- **Non-Streaming Requests** — requests where the client waits for a complete response. (SRC-26 L227–228)
- **Streaming Requests** — requests where the client receives incremental responses during processing. (SRC-26 L227–229)
- **Direct messages** — immediate outputs such as text or structured content. (SRC-26 L232–233)
- **Task-based responses** — ongoing task objects that may require follow-up calls to check status or retrieve results. (SRC-26 L232–234)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks what the client must discover before interacting with an A2A server, choose the Agent Card because the client retrieves it before initialization. (SRC-26 L222–225)
- **Inference:** Choose streaming when the scenario needs long-running processing or real-time user updates, because the source names those cases for streaming requests. (SRC-26 L229)
- **Inference:** Choose non-streaming when a simple single response is expected, because the source names simple interactions and single-response cases for non-streaming requests. (SRC-26 L228)
- **Inference:** If a scenario needs task tracking or cancellation, prepare for task objects rather than only immediate messages. (SRC-26 L230; SRC-26 L232–234)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The raw source has the typo `fo example` where it appears to mean `for example`; the page preserves the underlying claim without reproducing the typo. (SRC-26 L230)
- The source says the Agent Card is typically retrieved from a well-known endpoint but does not name the endpoint in this unit. (SRC-26 L224)

## Relation to other sources

- [[src-103-host-a2a-server]] provides the server-side endpoint and components the client connects to. (SRC-103 L20–31)
- [[src-37-define-a2a-agent]] defines the Agent Card metadata that clients discover. (SRC-37 L234–243)
- [[src-205-summary-discover-azure-ai-agents-a2a]] summarizes the client/server message flow as streaming and non-streaming. (SRC-205 L217–218)

## Connections

- [[a2a-agent-implementation]] — client connection is the final implementation step before using a remote A2A agent. (SRC-26 L217–240)
- [[agent2agent-protocol]] — the client uses A2A to discover and communicate with a remote agent. (SRC-26 L218–225)
- [[conversation-state]] — task-based responses may require follow-up status or result retrieval. (SRC-26 L232–234)

## Open questions

- The source does not provide concrete client code, package names, or method names. (SRC-26 L226–240)
- The source does not define the exact task-object schema returned by complex agents. (SRC-26 L230; SRC-26 L232–234)

## Sources

- SRC-26 — raw file: [[26-Connect to your A2A Agent - Training - Microsoft Learn]]

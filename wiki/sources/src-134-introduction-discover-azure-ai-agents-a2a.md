---
title: "Introduction — Discover Azure AI Agents with A2A"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces A2A as a standard for remote agent discovery, communication, delegation, and coordinated Azure AI Agent workflows."
area: orchestration
source_ids: [SRC-134]
objectives: [G10]
tags: [a2a, azure-ai-agents, multi-agent, routing-agent]
aliases: ["SRC-134"]
source_kind: learn-unit
module: "Discover Azure AI Agents with A2A"
learning_path: "Develop AI agents on Azure"
unit: "1 of 8"
presenters: []
raw_file: "134-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/1-introduction"
ingest_depth: full
---
# Introduction — Discover Azure AI Agents with A2A

*learn-unit · Discover Azure AI Agents with A2A · unit 1 of 8 · SRC-134*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-134 |
| Raw file | 134-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Discover Azure AI Agents with A2A |
| Unit / episode | 1 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/1-introduction |
| Teaching content | L211–220 of 250 |
| Content length | ~247 words |
| Capture quality | High: concise Learn unit with navigation lines around the teaching content. |
| Ingest depth | full |

## TL;DR

Many real tasks need agents to collaborate, and this unit positions A2A as the standard framework for agent discovery, communication, and coordinated task execution across remote or distributed agents. (SRC-134 L215–216) The module teaches implementing A2A with Azure AI Agents by configuring a routing agent, registering remote agents, and building a coordinated workflow. (SRC-134 L218)

## Key claims

- Standalone AI agents can be powerful, but multi-agent collaboration is needed for many real-world tasks. (SRC-134 L215)
- Manual coordination becomes complex when agents are remote or distributed. (SRC-134 L215)
- A2A standardizes agent discovery, communication, and coordinated task execution. (SRC-134 L216)
- Implementing A2A helps manage remote-agent connections, delegate requests, and enable standardized secure communication between agents. (SRC-134 L216)
- The example workflow has a routing agent pass a user request to a title agent, pass the generated title to the outline agent, and return the final outline to the user. (SRC-134 L217)
- The module teaches A2A with Azure AI Agents, including routing-agent configuration, remote-agent registration, and coordinated workflow construction. (SRC-134 L218)

## How it works

The source frames A2A as the coordination layer for remote or distributed agents: rather than making one agent do every task, a routing agent delegates the right part of the request to the right remote agent. (SRC-134 L216–218) In the blog-content example, the title agent handles headline generation and the outline agent handles detailed outlines, while the routing agent sequences the handoff and returns the result. (SRC-134 L217)

## Code and API patterns

Not covered by this source.

## Key terms

- **Agent-to-Agent (A2A) protocol** — a standardized framework for agent discovery, communication, and coordinated task execution. (SRC-134 L216)
- **Routing agent** — the coordinating agent that sends the request to a title agent, passes the generated title to the outline agent, and returns the final outline in the source example. (SRC-134 L217)
- **Remote agents** — agents that must be registered so the routing agent can coordinate work with them. (SRC-134 L218)

## Decision boundaries and exam cues

- **Inference:** Choose A2A when a scenario needs more than one agent to collaborate across remote or distributed boundaries, because this unit names remote/distributed coordination as the problem A2A addresses. (SRC-134 L215–216)
- **Inference:** A scenario about registering remote agents and configuring a routing agent is pointing at the A2A module rather than a single-agent build, because those are the practice tasks the module promises. (SRC-134 L218)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says the text-and-images format contains greater detail than the videos in some cases, so the written capture should be treated as the richer reference for this unit. (SRC-134 L220)

## Relation to other sources

- [[src-37-define-a2a-agent]] extends the introduction by defining Agent Skills and Agent Cards, which are how A2A agents expose capabilities. (SRC-37 L217–218)
- [[src-107-implement-agent-executor]] extends the module flow by explaining how an Agent Executor processes incoming A2A requests. (SRC-107 L12–14)
- [[src-103-host-a2a-server]] extends the module flow by explaining how hosting exposes an agent over HTTP for clients and other agents. (SRC-103 L12–17)

## Connections

- [[agent2agent-protocol]] — the protocol introduced as the discovery and communication framework for collaborating agents. (SRC-134 L216)
- [[a2a-agent-implementation]] — the module's promised implementation path: routing agent, registered remote agents, and coordinated workflow. (SRC-134 L218)
- [[multi-agent-orchestration]] — the source's problem statement is coordinating work across multiple agents. (SRC-134 L215)
- [[ai-agents]] — the source starts from standalone AI agents and explains when collaboration is needed. (SRC-134 L215)

## Open questions

- The source does not define the Agent Card, Agent Executor, or client/server mechanics in this introduction. (SRC-134 L216–218)

## Sources

- SRC-134 — raw file: [[134-Introduction - Training - Microsoft Learn]]

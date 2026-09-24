---
title: "Define an A2A Agent"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines A2A Agent Skills and Agent Cards as the discoverable capability contract for multi-agent collaboration."
area: orchestration
source_ids: [SRC-37]
objectives: [G07, G10]
tags: [a2a, agent-card, agent-skills, discovery]
aliases: ["SRC-37"]
source_kind: learn-unit
module: "Discover Azure AI Agents with A2A"
learning_path: "Develop AI agents on Azure"
unit: "2 of 8"
presenters: []
raw_file: "37-Define an A2A Agent - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/2-define-a2a-agent"
ingest_depth: full
---
# Define an A2A Agent

*learn-unit · Discover Azure AI Agents with A2A · unit 2 of 8 · SRC-37*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-37 |
| Raw file | 37-Define an A2A Agent - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Discover Azure AI Agents with A2A |
| Unit / episode | 2 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/2-define-a2a-agent |
| Teaching content | L211–249 of 279 |
| Content length | ~608 words |
| Capture quality | High: complete Learn unit text with no apparent truncation in the teaching range. |
| Ingest depth | full |

## TL;DR

This unit defines A2A as a standard protocol for AI agents to communicate, collaborate, share context, invoke capabilities, and exchange information securely. (SRC-37 L217) Before joining multi-agent workflows, an A2A agent must explain its capabilities through Agent Skills and expose discovery details through an Agent Card. (SRC-37 L218)

## Key claims

- A2A standardizes how AI agents communicate and collaborate. (SRC-37 L217)
- A2A defines context sharing, cross-agent capability invocation, and secure information exchange. (SRC-37 L217)
- A2A enables agents from different vendors or platforms to work together. (SRC-37 L217)
- Before participating in multi-agent workflows, an A2A agent needs to explain its capabilities. (SRC-37 L218)
- Agent Skills describe specific capabilities or functions an agent can perform. (SRC-37 L224–225)
- An Agent Card is a structured document that a routing agent or client can retrieve to discover capabilities and interaction details. (SRC-37 L234–235)
- Once skills and an Agent Card are published, other agents or clients can discover the agent, route requests to the appropriate skill, and receive responses in supported formats. (SRC-37 L245–248)

## How it works

The source builds the A2A agent contract in two layers. First, an Agent Skill describes one capability with an ID, name, description, tags, examples, and supported input/output modes. (SRC-37 L224–233) Second, the Agent Card packages the agent's identity, endpoint URL, supported A2A features, default modes, skills, and authentication support so a client or routing agent can discover how to use the agent. (SRC-37 L234–243)

After an agent publishes its skills and Agent Card, discovery and routing can happen automatically: clients discover the agent, route a request to the appropriate skill, and receive a response in a supported format. (SRC-37 L245–248) In the technical-writer example, one agent defines article-title skills and another defines outline skills; the routing agent retrieves each card and chains title output into the outline agent. (SRC-37 L249)

## Code and API patterns

This source names the data elements an implementation must provide but does not include executable code. (SRC-37 L226–243)

Agent Skill fields in the source are ID, name, description, tags, examples, and input/output modes. (SRC-37 L226–232) Agent Card fields in the source are identity information, endpoint URL, capabilities, default input/output modes, skills, and authentication support. (SRC-37 L236–242)

## Key terms

- **Agent-to-Agent (A2A) protocol** — the standardized way for AI agents to communicate and collaborate, including context sharing, capability invocation, and secure information exchange. (SRC-37 L217)
- **Agent Skill** — a specific capability or function the agent can perform. (SRC-37 L224–225)
- **Agent Card** — a structured discovery document for an agent's capabilities and interaction details. (SRC-37 L234–235)
- **Endpoint URL** — the location where the agent's A2A service can be accessed. (SRC-37 L237–238)
- **Authentication Support** — the Agent Card indication of whether credentials are required for access. (SRC-37 L241–242)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks how another agent discovers what an A2A agent can do, the answer is the Agent Card, because the card is the retrievable document for discovery and interaction details. (SRC-37 L234–235)
- **Inference:** If a scenario asks how to describe one action the agent can perform, the answer is an Agent Skill, because the skill is the unit of capability/function description. (SRC-37 L224–225)
- **Inference:** If the scenario emphasizes different vendors or platforms collaborating, A2A is more directly signaled than a single-platform tool call, because the source names cross-vendor and cross-platform collaboration as an A2A outcome. (SRC-37 L217)
- **Inference:** If a scenario contrasts A2A with MCP around model choice, this source says each A2A agent can choose its own LLM, unlike some MCP scenarios that rely on a single LLM connection. (SRC-37 L222)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source compares A2A with some MCP scenarios but does not define MCP in this unit. (SRC-37 L222)
- The source says authentication is built into A2A but does not describe credential flows or configuration steps. (SRC-37 L223)

## Relation to other sources

- [[src-134-introduction-discover-azure-ai-agents-a2a]] introduces the need for A2A before this page details skills and cards. (SRC-134 L215–218)
- [[src-103-host-a2a-server]] uses the Agent Card as a server component exposed at a standard endpoint. (SRC-103 L20–23)
- [[src-26-connect-a2a-agent]] uses the Agent Card as the metadata a client discovers before sending messages. (SRC-26 L217–225)

## Connections

- [[agent2agent-protocol]] — the source defines A2A's communication, collaboration, security, and cross-platform purpose. (SRC-37 L217)
- [[a2a-agent-implementation]] — skills and cards are the first implementation artifacts in the module flow. (SRC-37 L218)
- [[model-context-protocol]] — the source explicitly contrasts A2A model choice with some MCP scenarios. (SRC-37 L222)
- [[multi-agent-orchestration]] — the technical-writer example chains specialized agents through a routing agent. (SRC-37 L249)

## Open questions

- The source does not show the concrete JSON schema or class definitions for Agent Skills or Agent Cards. (SRC-37 L226–243)
- The source does not explain the authentication mechanism beyond saying the Agent Card can indicate credential requirements. (SRC-37 L241–242)

## Sources

- SRC-37 — raw file: [[37-Define an A2A Agent - Training - Microsoft Learn]]

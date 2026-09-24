---
title: "Agent2Agent (A2A) protocol"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "A protocol for discoverable, secure agent-to-agent communication, delegation, routing, and distributed multi-agent workflows."
area: orchestration
source_ids: [SRC-26, SRC-37, SRC-61, SRC-103, SRC-107, SRC-134, SRC-157, SRC-205, SRC-105, SRC-108, SRC-124, SRC-133, SRC-231]
objectives: [G10, G16]
objective_gaps: []
tags: ["protocol"]
aliases: ["A2A", "A2A protocol", "Agent-to-Agent protocol", "Agent2Agent"]
---

# Agent2Agent (A2A) protocol

## Summary

Agent2Agent is the corpus's protocol for agents that need to discover one another, communicate across process or platform boundaries, delegate work, and return messages or task results through a standardized client/server shape (SRC-134 L216–218; SRC-205 L217–218). Its core artifacts are the Agent Card, Agent Skills, an Agent Executor, an A2A server, and a client that discovers and calls the server (SRC-37 L218–249; SRC-103 L18–39; SRC-26 L217–240).

## What it is

A2A standardizes agent-to-agent collaboration. The corpus says it defines how agents share context, invoke each other's capabilities, and exchange information securely, including across different vendors or platforms (SRC-37 L217). It addresses agent discovery, communication, and coordinated task execution so a routing agent can manage remote agents and delegate requests to the appropriate one (SRC-134 L216–218).

The mental model is a service contract between agents. A remote agent publishes what it can do, where it can be reached, which modes it supports, and whether authentication is required. A caller retrieves that description, chooses whether the remote agent fits the task, sends a request, and receives either a direct message stream or task-oriented result (SRC-37 L232–249; SRC-26 L217–240).

## What the sources say

- SRC-134 introduces the module problem: multiple Azure AI Agents need discovery, secure communication, delegation, and coordinated execution. Its example uses a routing agent that sends a user's request to a title agent, passes the title to an outline agent, and returns the final outline (SRC-134 L216–218).
- SRC-37 defines A2A as standardized communication and collaboration. It names advantages: cross-vendor/platform collaboration, flexible model selection per agent, and built-in authentication (SRC-37 L217–223).
- SRC-37 also defines Agent Skills and the Agent Card. Skills describe capabilities through ID, name, description, tags, examples, and input/output modes; the Agent Card exposes identity, endpoint URL, capabilities such as streaming or push notifications, default modes, skills, and authentication support (SRC-37 L224–249).
- SRC-107 defines the Agent Executor as the bridge between the protocol and the agent's business logic. It executes tasks, streams or sends messages, and may handle cancellation through `RequestContext` and `EventQueue` (SRC-107 L12–36).
- SRC-103 defines hosting: the server exposes the card and request handler endpoints, uses a request handler and task store, and makes the agent accessible over HTTP with Starlette/Uvicorn in the Python example (SRC-103 L12–39).
- SRC-26 defines the client side: clients fetch the Agent Card from a well-known endpoint, initialize a connection, send non-streaming or streaming requests, and handle direct messages or task-based responses (SRC-26 L217–240).
- SRC-205 summarizes the module as connecting Python clients to Azure AI Agents through A2A, with dynamic discovery by Agent Card, executors, streaming and non-streaming messages, delegation, and distributed environments (SRC-205 L217–218).
- SRC-61 is the hands-on application: developing an A2A client-server application that interacts with remote agents (SRC-61 L210–213).
- SRC-157 reinforces the key roles in assessment form: the server routes requests between clients and connected agents, the executor processes incoming requests and generates responses or events, and the Agent Card provides metadata such as capabilities and available functions (SRC-157 L213–226).

## Capabilities and components

| **Synthesis:** Component | Role in A2A |
|---|---|
| Agent Skill | Describes one capability the agent can perform, including examples and input/output modes (SRC-37 L224–231). |
| Agent Card | Discoverable structured description of the agent: identity, endpoint, capabilities, modes, skills, and authentication support (SRC-37 L232–249). |
| Agent Executor | Protocol-to-logic bridge that processes requests, emits messages/events, and may support cancellation (SRC-107 L12–36). |
| Request handler and task store | Routes requests to executor methods and tracks tasks, streaming data, and resubscriptions (SRC-103 L20–27). |
| A2A server | Hosts the card and request handler over HTTP so clients and other agents can interact (SRC-103 L12–39). |
| A2A client | Discovers the Agent Card, sends streaming or non-streaming requests, and interprets message or task responses (SRC-26 L217–240). |

Authentication belongs to the A2A surface rather than being an afterthought in the card. The corpus says A2A has integrated authentication and that an Agent Card indicates whether credentials are required (SRC-37 L223; SRC-37 L243–249). **Stale-risk:** the corpus does not specify concrete authentication schemes or current wire-format details for credentials.

## How to use it

1. Define the remote agent's skills and publish them through an Agent Card, including endpoint URL, capabilities, modes, skills, and authentication support (SRC-37 L224–249).
2. Implement an Agent Executor that receives `RequestContext`, runs the agent's logic, and writes messages, task updates, or artifacts to an `EventQueue` (SRC-107 L24–35).
3. Host the server by combining the Agent Card, request handler, executor, and task store, then run it as a web app over HTTP (SRC-103 L18–39).
4. Connect a client by knowing the server base URL, retrieving the Agent Card from the well-known endpoint, sending streaming or non-streaming requests, and handling either direct messages or task objects (SRC-26 L217–240).
5. Use a routing/delegation agent when the solution needs to select among remote agents and pass outputs between them, as in the title-agent to outline-agent workflow (SRC-134 L217–218; SRC-37 L245–249).

## Decision boundaries

| **Synthesis:** Question | A2A | MCP | In-process multi-agent orchestration |
|---|---|---|---|
| Primary job | Agent-to-agent discovery, communication, delegation, and task execution across boundaries (SRC-134 L216–218). | Tool discovery and invocation: an MCP server hosts tool definitions and an MCP client registers them with an agent (SRC-108 L216–234). | Coordinate multiple agents or executors inside a workflow runtime without manually handling coordination details (SRC-231 L214–240). |
| What is discovered | Agents and skills through an Agent Card (SRC-37 L232–249). | Tools through `session.list_tools()` (SRC-108 L219–234). | Executors, edges, and orchestration patterns are configured in code or workflow design (SRC-231 L227–240). |
| Caller/callee shape | Client or routing agent calls another agent server (SRC-26 L217–240; SRC-134 L217). | Agent calls external tools via MCP-wrapped functions (SRC-108 L225–234). | Agents collaborate in the same orchestrated workflow or conversation (SRC-133 L218–225; SRC-231 L214–240). |
| Deciding clue | Remote agent network, Agent Card, executor, A2A server/client, delegation to another agent. | Dynamic tool catalog, MCP server/client, `session.list_tools()`, `session.call_tool()` (SRC-108 L221–232). | Sequential/concurrent/group chat/handoff/Magentic pattern, graph-based workflow, explicit coordination logic (SRC-105 L220–224; SRC-124 L215). |

**Inference:** choose A2A when the thing being invoked is another agent with its own advertised capabilities, model choice, endpoint, and executor. Choose MCP when the thing being invoked is a tool catalog the current agent can call. Choose Agent Framework or Foundry workflow orchestration when the agents are part of one designed workflow and the main requirement is control flow rather than remote discovery.

## Naming and currency

The Learn module title uses both Agent-to-Agent and A2A. The wiki uses Agent2Agent because the registry names the canonical page `agent2agent-protocol`, but the corpus wording is Agent-to-Agent (A2A) (SRC-37 L217; SRC-134 L216). **Stale-risk:** the corpus captures a moving protocol area; it does not include full protocol specification details, payload schemas, supported authentication schemes, or versioning rules.

## Appearances in the corpus

- The A2A module introduces the protocol and implementation flow: define an A2A agent, implement an executor, host a server, connect a client, and complete a remote-agent exercise (SRC-134 L201–218; SRC-61 L210–213).
- The summary emphasizes Python clients, Azure AI Agents, dynamic discovery through Agent Cards, executors, streaming and non-streaming message flow, delegation, and distributed environments (SRC-205 L217–218).
- The assessment checks the server, executor, and Agent Card roles (SRC-157 L213–226).

## Connections

- [[a2a-agent-implementation]] — implementation sequence for cards, executors, servers, and clients.
- [[ai-agents]] — A2A assumes agents with capabilities and autonomy that can collaborate.
- [[multi-agent-orchestration]] — A2A is one way to connect distributed agents that participate in a larger workflow.
- [[microsoft-agent-framework]] — the in-process SDK boundary for explicit multi-agent orchestration.
- [[agent-framework-workflows]] — workflow executors and edges are the local orchestration analogue to remote A2A delegation.
- [[model-context-protocol]] — closest protocol confusion: tool protocol rather than agent-to-agent protocol.
- [[mcp-tool-integration]] — implementation boundary for MCP client/server tool discovery.
- [[custom-tool-options]] — MCP is one custom-tool path; A2A is agent delegation, not a normal tool wrapper.
- [[keyless-authentication]] — related security concept; the A2A corpus says authentication exists but does not define schemes.
- [[src-134-introduction-discover-azure-ai-agents-a2a]] — introduces the module and routing-agent scenario.
- [[src-37-define-a2a-agent]] — defines A2A, skills, card, and advantages.
- [[src-107-implement-agent-executor]] — executor role.
- [[src-103-host-a2a-server]] — server components.
- [[src-26-connect-a2a-agent]] — client behaviour.
- [[src-205-summary-discover-azure-ai-agents-a2a]] — module summary.

## Sources

- SRC-26 — [[src-26-connect-a2a-agent]] — client discovery, requests, streaming, and response handling.
- SRC-37 — [[src-37-define-a2a-agent]] — A2A definition, advantages, skills, and Agent Card.
- SRC-61 — [[src-61-exercise-connect-remote-azure-ai-agents-a2a-protocol]] — A2A client-server exercise.
- SRC-103 — [[src-103-host-a2a-server]] — server hosting, request handler, task store, and HTTP endpoint.
- SRC-107 — [[src-107-implement-agent-executor]] — executor responsibilities and request handling.
- SRC-105 — [[src-105-identify-workflow-patterns]] — Foundry workflow patterns for orchestration boundary.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — MCP client/server tool integration for protocol boundary.
- SRC-124 — [[src-124-introduction-develop-ai-agent-microsoft-agent-framework]] — Microsoft Agent Framework as SDK for graph-based multi-agent orchestration.
- SRC-133 — [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework]] — multi-agent solution motivation and Agent Framework module.
- SRC-134 — [[src-134-introduction-discover-azure-ai-agents-a2a]] — A2A purpose and routing-agent example.
- SRC-157 — [[src-157-module-assessment-discover-azure-ai-agents-a2a]] — assessment checks for server, executor, and Agent Card roles.
- SRC-205 — [[src-205-summary-discover-azure-ai-agents-a2a]] — A2A module summary.
- SRC-231 — [[src-231-understand-agent-orchestration]] — in-process Agent Framework orchestration boundary.




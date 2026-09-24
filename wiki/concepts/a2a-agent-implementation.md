---
title: "Implementing A2A agents"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Implementation path for A2A agents: define skills and card, implement executor logic, host HTTP server, then connect clients."
area: orchestration
source_ids: [SRC-26, SRC-37, SRC-61, SRC-103, SRC-107, SRC-134, SRC-157, SRC-205, SRC-105, SRC-108, SRC-124, SRC-133, SRC-231]
objectives: [G10, G16]
objective_gaps: []
tags: []
aliases: ["agent card", "agent executor", "A2A server", "A2A client", "A2A agent implementation"]
---

# Implementing A2A agents

## Summary

Implementing A2A agents means turning an agent into a discoverable remote participant: define its Agent Skills and Agent Card, implement an Agent Executor, host the card and request handler on an HTTP server, and connect clients or routing agents that can delegate work to it (SRC-37 L218–249; SRC-107 L12–36; SRC-103 L12–39; SRC-26 L217–240).

## The problem it solves

A single agent is often not the right boundary for a complex task. The A2A module frames the problem as a need for agent discovery, communication, and coordinated task execution across remote agents: a routing agent delegates a writing workflow to a headline agent and an outline agent, then combines the result for the user (SRC-134 L216–218). Without a standard card, executor, server, and client shape, each remote agent connection would need bespoke discovery, routing, message handling, and security glue.

## Mental model

**Synthesis:** Think of an A2A implementation as making an agent callable as a network service (SRC-37 L232–249; SRC-103 L12–39; SRC-107 L12–36; SRC-26 L217–240):

1. The Agent Card says who the agent is, where it lives, what it can do, what modes it accepts, and whether credentials are required (SRC-37 L232–249).
2. The server publishes that card and accepts requests over HTTP (SRC-103 L12–17).
3. The request handler turns protocol requests into executor calls and tracks task lifecycle state (SRC-103 L20–27).
4. The executor runs the agent's own business logic and emits events, messages, artifacts, or cancellation results (SRC-107 L12–36).
5. The client retrieves the card, sends streaming or non-streaming requests, and handles direct messages or task objects (SRC-26 L217–240).

## What the sources say

- Introduction: A2A provides a standardized framework for discovery, communication, and coordinated task execution. The module includes configuring a routing agent, registering remote agents, and building a coordinated workflow (SRC-134 L216–218).
- Definition: before participating in multi-agent workflows, an A2A agent must explain what it can do through Agent Skills exposed in an Agent Card (SRC-37 L217–218).
- Skills and card: skills include ID, name, description, tags, examples, and input/output modes. The card includes identity, endpoint URL, supported A2A capabilities, default input/output modes, skills, and authentication support (SRC-37 L224–249).
- Executor: the Agent Executor is the bridge between the A2A protocol and business logic. It executes requested tasks, streams or sends messages, handles cancellation if supported, reads `RequestContext`, and writes to `EventQueue` (SRC-107 L12–36).
- Server: hosting makes the agent accessible to clients and agents over HTTP, exposes the Agent Card, forwards A2A requests to the executor, and manages task lifecycles with a request handler and task store (SRC-103 L12–39).
- Client: a client discovers the Agent Card, sends requests, receives direct messages or task-based results, and supports both non-streaming and streaming request styles (SRC-26 L217–240).
- Exercise and summary: the module's practice is an A2A client-server app that interacts with remote agents, and the summary stresses dynamic discovery with Agent Cards, executors, streaming and non-streaming messages, delegation, and distributed environments (SRC-61 L210–213; SRC-205 L217–218).

## How it works in Azure

The corpus positions A2A as part of Azure AI Agents and remote multi-agent workflows rather than as a Foundry visual workflow pattern. A2A agents can be coordinated by a routing agent that retrieves cards, chooses an appropriate remote agent, sends the user request, and passes the output onward to another remote agent (SRC-134 L217–218; SRC-37 L245–249). The implementation examples use Python concepts such as an Agent Executor, `RequestContext`, `EventQueue`, Starlette, ASGI, and Uvicorn, but the architectural roles are more important than the specific framework choices (SRC-107 L28–35; SRC-103 L28–36).

Authentication is part of the design surface: the source says authentication is built into A2A and the Agent Card can indicate if credentials are required (SRC-37 L223; SRC-37 L243–249). The corpus does not cover exact credential flows, token acquisition, identity provider configuration, or how that maps to managed identity.

## Code and configuration

The corpus describes the implementation shape more than it gives a full code listing (SRC-37 L224–249; SRC-107 L21–35; SRC-103 L20–36; SRC-26 L217–240). **Synthesis:** The load-bearing configuration and code responsibilities are:

### 1. Define skills

Create one skill per discoverable capability. Include an ID, human-readable name, description, tags, examples, and input/output modes so another agent can decide whether to call it (SRC-37 L224–231).

### 2. Define an Agent Card

Create the structured card with identity, endpoint URL, A2A capabilities such as streaming or push notifications, default input/output modes, listed skills, and authentication support (SRC-37 L232–249). The server exposes the card at a standard endpoint, typically `/.well-known/agent-card.json` (SRC-103 L20–23).

### 3. Implement the executor

Implement `execute` to process incoming requests, inspect user input or task context, and send results through an event queue. Implement `cancel` if cancellation is supported; simple agents may report that cancellation is not supported (SRC-107 L21–35).

### 4. Host the server

Wire the Agent Card, request handler, Agent Executor, and Task Store into a server application. The Python source names Starlette as the web framework and Uvicorn as the ASGI server that listens on a network interface and port (SRC-103 L20–36).

### 5. Connect the client

Configure the server base URL, retrieve the Agent Card from the well-known endpoint, initialize a client with the card, send a role/content request, and handle either complete non-streaming responses or incremental streaming events (SRC-26 L217–240).

## Decision boundaries

| **Synthesis:** Scenario detail | Prefer A2A | Prefer MCP | Prefer in-process orchestration |
|---|---|---|---|
| What you need to connect | Another agent with its own card, endpoint, model choice, and executor (SRC-37 L217–249). | A tool catalog hosted by an MCP server and fetched through an MCP client (SRC-108 L216–234). | Multiple agents/executors in one explicit workflow runtime (SRC-231 L214–240). |
| Main implementation object | Agent Card, Agent Executor, A2A server, client (SRC-205 L217–218). | MCP server, MCP client session, `session.list_tools()`, `session.call_tool()` (SRC-108 L219–232). | Executors and edges in Microsoft Agent Framework workflows (SRC-231 L227–240). |
| Routing style | Routing agent delegates requests to remote agents based on cards and skills (SRC-134 L217–218; SRC-37 L245–249). | Agent chooses among tools registered into its toolset (SRC-108 L225–234). | Orchestrator controls sequence, fan-out, dynamic handoff, or group collaboration (SRC-105 L220–224; SRC-133 L218–225). |
| **Inference:** Exam cue | Agent Card, remote A2A server, Agent Executor, streaming/non-streaming agent messages. | Tool definitions, MCP server/client, function wrappers, dynamic tool catalog. | Sequential, concurrent, handoff, group chat, Magentic, graph workflow, executors/edges. |

**Inference:** an exam scenario that says another agent must be discoverable and callable across a boundary points to A2A. A scenario that says a current agent needs dynamically discoverable tools points to MCP. A scenario that says several agents must be coordinated in a known flow inside one application points to Agent Framework or Foundry workflow orchestration.

## Failure modes and misconceptions

- Confusing the Agent Card with a secret store. The assessment explicitly distinguishes it from API-key storage: it provides metadata such as capabilities and available functions (SRC-157 L223–226).
- Putting business logic in the server instead of the executor. The executor processes incoming requests and generates responses/events; the server routes requests and exposes endpoints (SRC-157 L213–221; SRC-103 L18–31; SRC-107 L12–36).
- Treating every collaboration as A2A. The corpus also teaches Microsoft Agent Framework workflows for explicit multi-agent orchestration in code, with executors and edges, and MCP for tool discovery and invocation (SRC-231 L214–240; SRC-108 L216–234).
- Assuming every agent must support cancellation or task objects. The executor source says cancellation may not be supported for simple agents, and the client source says simple agents may return messages directly while advanced agents may manage multiple tasks (SRC-107 L21–35; SRC-26 L233–240).
- Overlooking response style. A client must handle non-streaming complete responses and streaming incremental responses, plus direct messages and task-based objects (SRC-26 L226–240).

## Solution Engineering transfer

**Inference:** customer signal: a team says they already have separate specialist agents owned by different teams or platforms, and they want a front-door agent to route work to them without merging all code into one service. That maps to A2A because the remote agents advertise capabilities through cards and are invoked through a standard protocol (SRC-37 L217–249; SRC-134 L216–218).

**Inference:** discovery question: ask whether the callee is a tool or an agent. If it is a deterministic capability such as an API function, MCP or another custom tool option may fit. If it is an autonomous specialist with its own model, instructions, and advertised skills, A2A is the closer match (SRC-108 L216–234; SRC-37 L217–249).

**Inference:** trade-off: A2A gives clean remote-agent boundaries and model independence, while in-process orchestration gives tighter control over flow, state, and telemetry inside one SDK/workflow runtime (SRC-37 L221–223; SRC-124 L215; SRC-231 L214–240).

## Connections

- [[agent2agent-protocol]] — protocol entity and decision boundary.
- [[ai-agents]] — A2A implementation assumes agents with capabilities that can be invoked.
- [[agent-tools]] — contrast agent delegation with tool use.
- [[model-context-protocol]] — closest protocol confusion: MCP is for tools.
- [[mcp-tool-integration]] — MCP implementation pattern contrasted with A2A client/server.
- [[multi-agent-orchestration]] — broader concept of coordinating multiple agents.
- [[microsoft-agent-framework]] — in-process SDK boundary for multi-agent orchestration.
- [[agent-framework-workflows]] — executors and edges in code workflows.
- [[handoff-orchestration]] — related dynamic control-transfer pattern inside orchestration.
- [[group-chat-orchestration]] — related multi-agent collaboration pattern.
- [[magentic-orchestration]] — related manager-delegation pattern inside Agent Framework.
- [[keyless-authentication]] — related security topic; exact A2A authentication implementation is not covered by the A2A module.
- [[src-37-define-a2a-agent]] — skills and Agent Card.
- [[src-107-implement-agent-executor]] — executor implementation.
- [[src-103-host-a2a-server]] — server hosting.
- [[src-26-connect-a2a-agent]] — client connection.
- *Also linked from:* [[overview]]

## Sources

- SRC-26 — [[src-26-connect-a2a-agent]] — A2A client discovery, request styles, and response handling.
- SRC-37 — [[src-37-define-a2a-agent]] — A2A definition, advantages, skills, and Agent Card.
- SRC-61 — [[src-61-exercise-connect-remote-azure-ai-agents-a2a-protocol]] — client-server exercise.
- SRC-103 — [[src-103-host-a2a-server]] — server hosting and request-handler components.
- SRC-107 — [[src-107-implement-agent-executor]] — executor responsibilities and request flow.
- SRC-105 — [[src-105-identify-workflow-patterns]] — Foundry workflow patterns for orchestration boundary.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — MCP boundary for tool integration.
- SRC-124 — [[src-124-introduction-develop-ai-agent-microsoft-agent-framework]] — Agent Framework multi-agent orchestration boundary.
- SRC-133 — [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework]] — multi-agent solution motivation.
- SRC-134 — [[src-134-introduction-discover-azure-ai-agents-a2a]] — A2A purpose, routing, registration, and coordinated workflow.
- SRC-157 — [[src-157-module-assessment-discover-azure-ai-agents-a2a]] — assessment roles for server, executor, and Agent Card.
- SRC-205 — [[src-205-summary-discover-azure-ai-agents-a2a]] — module summary.
- SRC-231 — [[src-231-understand-agent-orchestration]] — workflow executors and edges in Agent Framework.

## Open questions

- The corpus does not specify the exact A2A wire schema, supported authentication schemes, or deployment topology choices beyond the card, server, executor, and client roles.
- The corpus does not show how to use Microsoft Entra ID or managed identity specifically with an A2A server, even though it says authentication is built in and cards can indicate credential requirements (SRC-37 L223; SRC-37 L243–249).




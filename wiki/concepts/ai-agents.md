---
title: "AI agents"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Agents combine models, instructions, tools, state, and controlled action to perform tasks beyond ordinary chat completion."
area: agents
source_ids: [SRC-14, SRC-28, SRC-91, SRC-104, SRC-230, SRC-237, SRC-260]
objectives: [P04, G07, G09]
tags: []
aliases: ["agent", "what is an agent", "agentic AI", "AI agent", "agentic loop"]
objective_gaps: []
---

# AI agents

## Summary

An AI agent is a software service that uses generative AI to understand context, make decisions, and perform tasks for users or other programs; it combines advanced AI models with specialized tools rather than only generating text (SRC-230 L220). In the AI-103 corpus, the key distinction from a chat app is action: agents use instructions and tools to complete work, sometimes through multiple tool calls or multi-agent collaboration (SRC-28 L35–59; SRC-91 L218–230).

## The problem it solves

Traditional applications usually follow predetermined rules; the corpus contrasts that with agents that can understand context, make decisions, and take actions toward a goal (SRC-230 L220). Simple generative chat can answer or draft, but business workflows often need retrieval, API calls, approvals, scheduling, code execution, or handoff to a specialist component (SRC-230 L222–241; SRC-91 L218–230).

## Mental model

Think of an agent as a goal-directed layer around a model. The model interprets the request, instructions define the role and constraints, tools provide capabilities outside the model, and conversation/session state lets the agent continue a task across turns (SRC-230 L220; SRC-237 L223–230). **Inference:** The agent is not the model itself; it is the runtime pattern that uses the model to decide when to answer, retrieve, call a tool, ask for approval, or continue the loop.

## What the sources say

- SRC-260 places agentic AI under the generative AI layer and says agents act on behalf of users by using instructions and tools (SRC-260 L224–230).
- SRC-230 defines AI agents as software services that use generative AI to understand and perform tasks, then lists productivity, research, sales, customer-service, and developer-agent use cases (SRC-230 L220–241).
- SRC-28 frames the course around useful agents that can act with tools and collaborate, not merely produce text (SRC-28 L35–59).
- SRC-237 describes Microsoft Agent Framework agents as AI-driven entities that use large language models, tools, and conversation history to make decisions dynamically (SRC-237 L223–230).

## How it works in Azure

In Microsoft Foundry Agent Service, an agent can be configured with instructions, a model, and tools, and the service can manage tool calling, conversation state through the Responses API, storage, security, tracing, and deployment concerns (SRC-230 L258–276). In Microsoft Agent Framework, agents are built in code with chat clients, tools, conversation management, and orchestration patterns (SRC-237 L223–232).

## Code and configuration

Agents are usually configured by naming the agent, choosing a deployed model, writing instructions, and adding tools (SRC-14 L225–244). Tool definitions may be built-in, custom functions, Azure Functions, OpenAPI specifications, or MCP servers, and the agent decides when to call them from the user request and tool descriptions (SRC-91 L218–230; SRC-104 L219–249).

## Decision boundaries

- Agent: complete tasks with model reasoning, tools, and state (SRC-230 L220; SRC-91 L218–230).
- Plain chat app: **Inference:** generate responses from a prompt or message history when no external action is required.
- Deciding detail: **Inference:** choose an agent when the solution needs actions, tool use, persistent task context, or autonomous/semiautonomous workflow (SRC-230 L258–276).
- Exam cue: **Inference:** words like automate, schedule, retrieve from tools, approve, publish, or integrate with systems point toward an agent; words like summarize, draft, classify, or answer may only require a chat app.

**Inference:** Use an agent when the workflow owns decisions about which capability to invoke. Use ordinary chat completion when the application code already owns every step and the model only writes or reasons over supplied context.

## Failure modes and misconceptions

- Mistaking an agent for a more powerful model: the sources separate model choice from agent instructions, tools, sessions, and hosting (SRC-230 L258–276; SRC-237 L223–232).
- Adding tools without purpose: SRC-91 warns that tools should be matched to requirements and tested; unnecessary tools add latency (SRC-91 L285–297).
- Ignoring security: SRC-230 names RBAC, prompt filtering, human approval, logging, dependency audit, and validation as mitigation strategies for autonomous agents (SRC-230 L242–257).

## Solution Engineering transfer

**Inference:** Customer signals include needs such as having the assistant perform work, call a business system, or continue a process across turns. Ask which actions are allowed, what data and identities the agent can access, what needs human approval, and how actions will be traced.

## Connections

- [[foundry-agent-service]] — managed Azure service for building and running Foundry agents.
- [[foundry-agent-types]] — Foundry-specific prompt, workflow, and hosted agent choices.
- [[agent-tools]] — the main mechanism that turns chat into action.
- [[conversation-state]] — agents depend on thread/session state for multi-turn work.
- [[microsoft-agent-framework]] — code-first SDK for building agents and orchestrations.
- [[agent-building-options-compared]] — compares agent-building surfaces.
- [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — primary Learn definition and service overview.
- *Also linked from:* [[a2a-agent-implementation]] · [[agent2agent-protocol]] · [[generative-ai-fundamentals]] · [[model-playgrounds]] · [[overview]] · [[prompt-engineering]]

## Sources

- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — portal agent configuration pattern.
- SRC-28 — [[src-28-course-preview-ai-103-develop-ai-apps-agents-azure]] — course-level framing of useful tool-using and collaborative agents.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — agent tools and tool-calling lifecycle.
- SRC-104 — [[src-104-how-integrate-custom-tools]] — custom tool options and declarative tool calling.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — main AI agents and Foundry Agent Service unit.
- SRC-237 — [[src-237-understand-microsoft-agent-framework]] — framework definition of agents, tools, and conversation management.
- SRC-260 — [[src-260-what-is-ai]] — agentic AI location in the broader AI hierarchy.

## Open questions

- The corpus names security risks for agents, but the captured table under “Key security risks” is collapsed and does not expose the full list (SRC-230 L242–257).


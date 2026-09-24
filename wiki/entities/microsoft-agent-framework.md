---
title: "Microsoft Agent Framework"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Open-source SDK for single and multi-agent apps: agents, chat clients, sessions, tools, providers, and graph-based workflows."
area: orchestration
source_ids: [SRC-34, SRC-36, SRC-48, SRC-124, SRC-133, SRC-151, SRC-180, SRC-195, SRC-199, SRC-231, SRC-234, SRC-237, SRC-247]
objectives: [P04, G07, G08, G10, G16]
objective_gaps: []
tags: ["sdk"]
aliases: ["Agent Framework", "MAF", "Microsoft Agent Framework SDK", "Agent Framework SDK"]
---

# Microsoft Agent Framework

## Summary

Microsoft Agent Framework is the open-source SDK layer for building AI-powered agents and multi-agent workflows in code, combining Semantic Kernel and AutoGen lineage with agents, chat clients, tools, sessions, provider abstraction, telemetry, and graph-based orchestration (SRC-124 L215–220; SRC-237 L218–232; SRC-234 L219–238).

## What it is

The corpus defines Microsoft Agent Framework as an open-source SDK that lets developers integrate AI models into applications and build agents that work independently or collaborate with other agents on complex tasks (SRC-237 L218–219).

It is positioned above direct model SDKs: an episode says Foundry SDK and OpenAI SDK target relatively single environments, while frameworks such as Semantic Kernel and AutoGen sat above direct LLM calls to provide agentic capabilities; Microsoft Agent Framework merges that layer into a new framework (SRC-48 L35–89).

## What the sources say

SRC-124 introduces the lineage: Microsoft Agent Framework is the next generation of both Semantic Kernel and AutoGen, built by the same teams, combining AutoGen's agent abstractions with Semantic Kernel's enterprise features such as session-based state management, type safety, middleware, and telemetry, plus graph-based workflows for explicit multi-agent orchestration (SRC-124 L215).

SRC-237 defines the framework's purpose: agents process user input, make decisions, and execute tasks by combining large language models and traditional programming logic, while structured components define AI-driven workflows and interactions with users, APIs, and external services (SRC-237 L220–222).

SRC-234 emphasizes composable building blocks: rather than manually wiring memory, tool integration, and model access, developers can use bundled components individually or together as complexity grows (SRC-234 L219–220).

SRC-133 sets the multi-agent module objective: use Microsoft Agent Framework to design and orchestrate intelligent agents that collaborate, understand orchestration patterns, and develop multi-agent solutions (SRC-133 L225–231).

SRC-195 summarizes the single-agent module: developers use Agent Framework concepts, components, and custom tools to create dynamic, adaptable AI solutions that enhance user interactions and automate complex tasks (SRC-195 L216).

## Capabilities and components

Agents are AI-driven entities that use large language models, tools, and conversation history to reason, execute tasks, and respond dynamically to user needs (SRC-237 L223–225).

Agent orchestration lets multiple agents collaborate with different patterns under a unified interface, so a developer can switch patterns without rewriting agent logic (SRC-237 L226–227; SRC-231 L249–264).

Chat clients abstract connections to AI services under a common interface, and the corpus names Azure OpenAI, OpenAI, Anthropic, and additional providers through `BaseChatClient` (SRC-237 L228–229).

Tools let agents call custom functions or built-in capabilities such as Code Interpreter, File Search, and Web Search where provider support exists (SRC-237 L230; SRC-234 L223–229).

Conversation management uses `AgentSession` and structured messages with roles such as USER, ASSISTANT, SYSTEM, and TOOL; for Foundry, sessions can be backed by service-side storage in Foundry Agent Service (SRC-237 L231–232; SRC-34 L237–244).

Provider flexibility is a core benefit: the common interface lets developers switch the underlying inference service by changing client configuration rather than rewriting agent logic (SRC-234 L235–238).

## How to use it

For a Foundry-backed agent, the corpus gives a consistent sequence: create a Foundry project with a deployed model, configure Azure authentication through `DefaultAzureCredential`, initialize a Foundry chat client with credentials/project endpoint/model name, create the agent with instructions and optional tools, open a session, and run messages through the session (SRC-34 L218–236).

The Foundry provider is recommended for production scenarios where context persistence matters because Foundry Agent Service supplies service-side chat history, so conversation state can survive application restarts or scale-out across instances (SRC-234 L230–234; SRC-34 L237–244).

For multi-agent solutions, the workflow starts by defining agents and capabilities, selecting an orchestration pattern, optionally configuring callbacks or transforms, starting a runtime, invoking the orchestration, and retrieving results asynchronously (SRC-231 L256–263).

## Decision boundaries

Choose Microsoft Agent Framework when the scenario asks for code-first agent development, provider abstraction, reusable agent logic, custom function tools, service-side or local session management, streaming/non-streaming execution, or multi-agent orchestration patterns in an SDK (SRC-34 L218–260; SRC-237 L218–232; SRC-231 L249–264).

Choose [[foundry-workflows]] when the scenario asks for a visual/YAML workflow designed in Microsoft Foundry, saved as a project asset, configured through nodes/variables/Power Fx, versioned by the portal, and invoked by workflow name from application code (SRC-36 L220–236; SRC-151 L220–226; SRC-247 L12–16).

Choose the lower-level [[foundry-sdk]] or [[openai-sdk]] when the task is direct project/model/service access rather than an agent-framework abstraction. **Inference:** This follows from the episode's contrast between Foundry/OpenAI SDKs as relatively single-environment targets and Agent Framework as the higher agentic abstraction layer (SRC-48 L35–61).

Closest confusion: Foundry Agent Service is the managed provider/host that can persist chat history and expose service-side capabilities; Microsoft Agent Framework is the SDK abstraction that connects to Foundry or other providers, creates agents, registers tools, manages sessions, and builds workflows (SRC-234 L230–238; SRC-34 L226–244).

## Naming and currency

Lineage is explicit and repeated: the Learn introduction says Microsoft Agent Framework is the next generation of both Semantic Kernel and AutoGen, while the episode says it replaces those two earlier Microsoft agent frameworks for most new work going forward (SRC-124 L215; SRC-48 L78–99).

The episode also states that Semantic Kernel was more enterprise-ready and supported C#, Java, and Python, while AutoGen was more cutting-edge with agentic workflows; the merger is presented as solving the compromise between them (SRC-48 L46–89).

**Stale-risk:** One episode says Agent Framework was generally available at recording time, but GA/preview state is time-sensitive and should be verified against current Microsoft documentation before treating it as a live platform guarantee (SRC-48 L94–99).

URL-slug naming drift: the captured Learn content teaches Microsoft Agent Framework concepts, but some source URLs still contain older `semantic-kernel` slugs, such as `develop-ai-agent-with-semantic-kernel` and `orchestrate-semantic-kernel-multi-agent-solution` (SRC-34 L218–236; SRC-237 L218–232; SRC-34 “develop-ai-agent-with-semantic-kernel”; SRC-237 “orchestrate-semantic-kernel-multi-agent-solution”). **Inference:** Treat the page body as the current curriculum term and the URL slug as historical drift, not evidence that the page is still teaching Semantic Kernel.

## Appearances in the corpus

Microsoft Agent Framework appears in a single-agent module that teaches Foundry connection, agent creation, tools, sessions, and streaming (SRC-124 L215–220; SRC-34 L218–260; SRC-195 L216).

It also appears in a multi-agent orchestration module that teaches the framework, workflow components, orchestration patterns, and asynchronous result handling (SRC-133 L225–231; SRC-231 L229–264; SRC-199 L218–220).

Episodes 13 and 14 provide narration and demonstrations: episode 13 explains the lineage and abstraction layer, while episode 14 says AutoGen multi-agent capabilities were pulled into Agent Framework and demos sequential orchestration using a Foundry project endpoint and model deployment name (SRC-48 L35–115; SRC-180 L45–64; SRC-180 L320–370).

## Connections

- [[foundry-agent-service]] — recommended Foundry provider with service-side history and enterprise capabilities.
- [[agent-framework-workflows]] — code-first workflow/executor/edge model inside the SDK.
- [[multi-agent-orchestration]] — broader reason to coordinate specialised agents.
- [[function-calling]] — tools and function integration are core agent capabilities.
- [[conversation-state]] — sessions and service-side history preserve context.
- [[foundry-sdk]] — lower-level project SDK contrasted with Agent Framework.
- [[openai-sdk]] — lower-level model/API SDK contrasted with Agent Framework.
- [[observability-and-tracing]] — telemetry/events are part of production workflow support.
- [[src-237-understand-microsoft-agent-framework]] — central Learn definition.
- [[src-124-introduction-develop-ai-agent-microsoft-agent-framework]] — lineage and module scope.
- [[src-234-understand-microsoft-agent-framework-ai-agents]] — agent capabilities and Foundry provider guidance.
- *Also linked from:* [[a2a-agent-implementation]] · [[agent2agent-protocol]] · [[ai-agents]] · [[overview]]

## Sources

- SRC-34 — [[src-34-create-azure-ai-agent-microsoft-agent-framework]] — Foundry project connection, credentials, chat client, agent, session, and streaming.
- SRC-36 — [[src-36-create-workflows-microsoft-foundry]] — Foundry visual workflow contrast.
- SRC-48 — [[src-48-develop-ai-agent-microsoft-agent-framework-episode-13]] — lineage and higher-level agent framework rationale.
- SRC-124 — [[src-124-introduction-develop-ai-agent-microsoft-agent-framework]] — Semantic Kernel/AutoGen lineage and single-agent module objectives.
- SRC-133 — [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework]] — multi-agent module objectives.
- SRC-151 — [[src-151-maintain-workflows-microsoft-foundry]] — Foundry YAML/versioning contrast.
- SRC-180 — [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] — AutoGen-derived orchestration and sequential demo context.
- SRC-195 — [[src-195-summary-develop-ai-agent-microsoft-agent-framework]] — single-agent module summary.
- SRC-199 — [[src-199-summary-orchestrate-multi-agent-solution-microsoft-agent-framework]] — multi-agent module summary.
- SRC-231 — [[src-231-understand-agent-orchestration]] — orchestration workflow components and pattern interface.
- SRC-234 — [[src-234-understand-microsoft-agent-framework-ai-agents]] — common agent capabilities, provider flexibility, and Foundry recommendation.
- SRC-237 — [[src-237-understand-microsoft-agent-framework]] — framework definition, components, and provider-agnostic purpose.
- SRC-247 — [[src-247-workflows-code]] — Foundry workflow invocation contrast.

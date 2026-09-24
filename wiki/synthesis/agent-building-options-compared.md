---
title: "Agent-building options compared"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Comparison of Foundry Agent Service, portal/VS Code, Microsoft Agent Framework, Foundry workflows, and Microsoft 365 Agents Toolkit."
area: agents
source_ids: [SRC-5, SRC-14, SRC-18, SRC-20, SRC-34, SRC-36, SRC-48, SRC-51, SRC-84, SRC-124, SRC-129, SRC-149, SRC-190, SRC-195, SRC-209, SRC-230, SRC-232, SRC-234, SRC-237, SRC-247]
objectives: [P02, P04, P07, P08, P12, P15, P16, G05, G06, G07, G08, G09, G10, G11, G12, G15, G16]
objective_gaps: []
tags: []
aliases: []
---

# Agent-building options compared

## Summary

**Synthesis:** The corpus offers several overlapping but different agent-building choices: Microsoft Foundry Agent Service is the managed service/runtime; the Foundry portal and VS Code extension are configuration surfaces for that service; Microsoft Agent Framework is the code-first SDK abstraction for agents, tools, sessions, providers, and workflows; Foundry workflows are visual/YAML process orchestrations; Microsoft 365 Agents Toolkit is the advanced proxy-app route for complex Microsoft 365 integration. (SRC-230 L258–276; SRC-84 L220–280; SRC-237 L218–232; SRC-36 L220–236; SRC-5 L218–233)

## Scope and question

**Synthesis:** This page answers when to create/configure an agent in Foundry, when to use code with Microsoft Agent Framework, when to design a Foundry workflow, and when direct Microsoft 365 publishing is not enough and a Toolkit proxy app is justified. (SRC-84 L220–280; SRC-232 L216–244; SRC-234 L219–238; SRC-247 L12–27)

## Synthesis

### Options table

| **Synthesis:** Option | Primary job | Best when | Not the right clue |
|---|---|---|---|
| Foundry Agent Service | Managed platform for creating, hosting, scaling, securing, tracing, publishing, and tool-augmenting agents. (SRC-230 L258–276; SRC-232 L216–225) | You need managed agents, automatic tool calling, service-managed state, security, observability, publishing, or integration endpoints. (SRC-230 L270–276; SRC-232 L216–252) | The scenario asks mainly for provider-agnostic SDK code or explicit code-defined orchestration. (SRC-237 L218–232) |
| Foundry portal | Web interface for no-code/low-code agent creation, visual configuration, playground testing, dashboards, collaboration, and centralized management. (SRC-14 L225–244; SRC-84 L220–232) | Quick prototypes, stakeholder review, visual configuration, resource oversight. (SRC-84 L220–232) | Version-controlled YAML and code-adjacent development are load-bearing. (SRC-84 L233–257) |
| Foundry Toolkit for VS Code | Developer editor surface for Foundry projects, declarative/hosted agents, YAML, playgrounds, local visualization, deployment, and integration code. (SRC-190 L220–260; SRC-20 L218–269) | Git-tracked YAML, developer workflow, local/code-adjacent iteration, app-code integration. (SRC-84 L233–257; SRC-190 L220–260) | The scenario only asks for Microsoft 365 proxy middleware, custom SSO, or multi-environment Teams deployment. (SRC-5 L222–233) |
| Microsoft Agent Framework | Open-source SDK for agents, chat clients, sessions, tools, provider abstraction, and graph-based multi-agent workflows. (SRC-124 L215; SRC-237 L218–232; SRC-234 L219–238) | Code-first agents, provider flexibility, service-side or local sessions, tool registration, multi-agent orchestration patterns. (SRC-34 L218–260; SRC-234 L230–238; SRC-237 L220–232) | The scenario asks for a visual/YAML workflow asset in Foundry rather than SDK construction. (SRC-36 L220–236; SRC-247 L12–16) |
| Foundry workflows | Visual/declarative orchestrations of AI actions with nodes, variables, conditions, loops, human input, YAML and versions. (SRC-36 L220–236) | Business-process orchestration where non-code visibility, nodes, variables, and versioned Foundry assets matter. (SRC-36 L220–236; SRC-247 L12–27) | The scenario asks for Agent Framework builders, executors, edges, and provider abstraction. (SRC-237 L226–232) |
| Direct Foundry publishing to Microsoft 365 | Publish a Foundry agent to Microsoft 365/Teams with generated Bot Service, package, and Entra app. (SRC-232 L226–239) | Agent logic remains in Foundry and the integration path is straightforward. (SRC-232 L234–239; SRC-209 L218–220) | Complex custom SSO, advanced middleware, or multi-environment deployment pipelines. (SRC-232 L240–244; SRC-5 L222–224) |
| Microsoft 365 Agents Toolkit | Advanced proxy-app tooling between Microsoft 365 surfaces and a Foundry agent. (SRC-5 L222–233; SRC-232 L238–240) | Custom SSO, middleware, logging/transformation, local Teams-like playground, CI/CD, dev/stage/prod. (SRC-5 L222–233; SRC-149 L237–244) | A simple Teams/Copilot publication path is sufficient. (SRC-5 L218–221) |

### Foundry Agent Service versus Microsoft Agent Framework

| **Synthesis:** Question | Foundry Agent Service | Microsoft Agent Framework |
|---|---|---|
| What is it? | Managed service for secure, hosted, scalable agents and publishing. (SRC-230 L258–276; SRC-232 L216–225) | SDK/framework for creating agents, sessions, tools, providers, and workflows in code. (SRC-237 L218–232; SRC-124 L215) |
| State | Service-managed conversation state through Responses API is named as a service feature. (SRC-230 L270–276) | `AgentSession` manages conversation; Foundry provider can store session history in Foundry Agent Service. (SRC-34 L237–258; SRC-237 L231–232) |
| Tools | Tool catalog with built-in, catalog, and custom options. (SRC-230 L270–276) | Function tools and provider-supported service tools, with schemas from function signatures. (SRC-234 L223–229) |
| Portability | Managed Foundry runtime and publishing target. (SRC-230 L258–276; SRC-232 L216–252) | Provider abstraction lets developers switch inference service by changing client configuration rather than rewriting agent logic. (SRC-234 L235–238) |
| **Inference:** exam cue | Portal/Agent Service, publish, Agent Application, service-managed history, stable invocation URL. (SRC-232 L216–225; SRC-230 L270–276) | `AgentSession`, chat clients, tools in code, providers, orchestration patterns, builders. (SRC-34 L218–260; SRC-237 L228–232) |

### Portal versus VS Code

| **Synthesis:** Decision detail | Portal | VS Code extension |
|---|---|---|
| Interface | Web interface for creating/managing agents without code. (SRC-84 L220–231) | Developer editor connected to Foundry resources and agent YAML. (SRC-84 L233–257; SRC-190 L220–248) |
| Strongest fit | Quick prototyping, visual configuration, centralized management, stakeholder collaboration, dashboards. (SRC-84 L220–232) | Git, YAML editing, local development, integration with application code, generated integration code. (SRC-84 L233–257; SRC-20 L257–269) |
| Shared workflow | Both support connecting to a project, creating an agent, configuring instructions/tools, testing, iterating, deploying, and integrating. (SRC-84 L258–266) | Both support the same overall workflow but differ in interface style. (SRC-84 L258–280) |

### Near-miss scenario contrasts

1. **Inference:** If an enterprise says, *we need a governed hosted agent with tools, tracing, stable invocation, and Microsoft 365 publishing*, start with Foundry Agent Service; if it says, *we need to encode custom agent sessions, providers, functions, and multi-agent orchestration in code*, use Microsoft Agent Framework. (SRC-230 L270–276; SRC-232 L216–252; SRC-237 L218–232; SRC-34 L218–260)

2. **Inference:** If the agent can be configured visually and reviewed by non-developers, use the portal; if the same agent's instructions and parameters must live in code review as YAML, use the VS Code extension. (SRC-84 L220–257; SRC-20 L257–269)

3. **Inference:** If the process is a Foundry canvas with nodes, variables, Power Fx, and saved workflow invocation by name, choose Foundry workflows; if the process is a code graph with agents, executors, edges, and SDK events, choose Agent Framework workflows. (SRC-36 L220–236; SRC-247 L12–27; SRC-237 L226–232)

4. **Inference:** If a Teams agent only needs direct publication from Foundry, use direct Foundry publishing; if it requires custom SSO, middleware, or multi-environment deployment, use Microsoft 365 Agents Toolkit. (SRC-232 L234–244; SRC-5 L218–224; SRC-149 L237–244)

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| Foundry Agent Service is managed infrastructure for building, deploying, and scaling agents. | SRC-230 L258–276; SRC-129 L214–220 |
| Portal and VS Code are two development surfaces over a similar agent workflow. | SRC-84 L220–280; SRC-190 L220–260; SRC-20 L218–269 |
| Microsoft Agent Framework is the code-first SDK layer and successor/merger of Semantic Kernel and AutoGen capabilities. | SRC-124 L215; SRC-48 L35–99; SRC-237 L218–232 |
| Agent Framework can use Foundry Agent Service as a production provider for service-side history. | SRC-34 L237–258; SRC-234 L230–238 |
| Foundry workflows are visual/YAML process assets and code can invoke saved workflows by name. | SRC-36 L220–236; SRC-247 L12–27 |
| Microsoft 365 Agents Toolkit is the advanced proxy-app route for custom SSO, middleware, and multi-environment deployment. | SRC-5 L218–233; SRC-232 L238–244; SRC-149 L237–244 |

## Tensions

- **Stale-risk:** Naming shifts across corpus pages: newer pages say Microsoft Foundry Agent Service, while other pages still say Azure AI Agent Service or Azure AI agents; this page treats them as one service family only where cited pages describe the same managed agent runtime. (SRC-230 L258–276; SRC-34 L216–258)
- **Stale-risk:** The episode states Microsoft Agent Framework was generally available at recording time, but GA/preview status is time-sensitive and should not be treated as permanent platform fact. (SRC-48 L94–99)
- **Synthesis:** The corpus names CI/CD and GitHub but does not teach a complete production CI/CD pipeline for agents; Toolkit and VS Code pages give boundaries and capabilities rather than full DevOps implementation. (SRC-5 L224; SRC-51 L230–231)

## Implications for the exam and for practice

**Inference:** For exam questions, first identify whether the question is asking for a runtime/service, an authoring surface, a code framework, a workflow asset, or a channel-integration toolkit; the product names overlap, but the decisive noun usually reveals the layer. (SRC-230 L258–276; SRC-84 L220–280; SRC-237 L218–232; SRC-36 L220–236; SRC-5 L218–233)

**Inference:** For practice, avoid escalating to the heaviest tool: portal or direct Foundry publishing may be enough for managed agents; Agent Framework is justified by code-first control/provider/orchestration needs; Microsoft 365 Agents Toolkit is justified by integration-layer complexity. (SRC-84 L220–232; SRC-237 L218–232; SRC-5 L218–224)

## Open questions

- The corpus does not settle a universal rule for when a portal-created agent should be reimplemented in Agent Framework code; it gives surface and capability boundaries instead. (SRC-84 L258–280; SRC-237 L218–232)
- The corpus does not provide full CI/CD implementation details for Toolkit or VS Code agent projects. (SRC-5 L224; SRC-51 L230–231)

## Sources

- SRC-5 — [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] — Microsoft 365 Agents Toolkit proxy architecture and decision boundary.
- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — portal agent creation flow.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — SDK and endpoint choices.
- SRC-20 — [[src-20-configure-manage-agents-visual-studio-code]] — Agent Designer and YAML in VS Code.
- SRC-34 — [[src-34-create-azure-ai-agent-microsoft-agent-framework]] — Agent Framework with Foundry provider and session history.
- SRC-36 — [[src-36-create-workflows-microsoft-foundry]] — Foundry workflow designer and nodes.
- SRC-48 — [[src-48-develop-ai-agent-microsoft-agent-framework-episode-13]] — Agent Framework lineage and rationale.
- SRC-51 — [[src-51-developer-tools-sdks]] — development tools, GitHub and SDK survey.
- SRC-84 — [[src-84-explore-development-approaches]] — portal versus VS Code comparison.
- SRC-124 — [[src-124-introduction-develop-ai-agent-microsoft-agent-framework]] — Semantic Kernel/AutoGen lineage and module scope.
- SRC-129 — [[src-129-introduction-develop-ai-agents-microsoft-foundry-visual-studio-code]] — service framing for Foundry Agent Service.
- SRC-149 — [[src-149-knowledge-check-integrate-agent-microsoft-365]] — Toolkit selection cue.
- SRC-190 — [[src-190-set-up-visual-studio-code-agent-development]] — VS Code setup and project connection.
- SRC-195 — [[src-195-summary-develop-ai-agent-microsoft-agent-framework]] — Agent Framework module summary.
- SRC-209 — [[src-209-summary-integrate-agent-microsoft-365]] — Microsoft 365 integration summary.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — managed agent service definition and features.
- SRC-232 — [[src-232-understand-foundry-agent-publishing-options]] — Agent Application and publishing options.
- SRC-234 — [[src-234-understand-microsoft-agent-framework-ai-agents]] — Agent Framework capabilities and Foundry provider guidance.
- SRC-237 — [[src-237-understand-microsoft-agent-framework]] — Agent Framework definition and components.
- SRC-247 — [[src-247-workflows-code]] — Foundry workflow invocation from code.

---
title: "Microsoft Foundry Agent Service"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Managed Foundry service for creating, hosting, scaling, securing, tracing, publishing, and integrating AI agents with tools and conversation state."
area: agents
source_ids: [SRC-14, SRC-31, SRC-34, SRC-84, SRC-91, SRC-104, SRC-108, SRC-129, SRC-190, SRC-230, SRC-232, SRC-234, SRC-237, SRC-240]
objectives: [P02, P04, P07, P12, P15, P16, G06, G07, G08, G09, G10, G11, G15]
tags: ["service"]
aliases: ["Foundry Agent Service", "Azure AI Agent Service", "Azure AI Foundry Agent Service", "Azure AI agents", "Foundry agents"]
objective_gaps: []
---

# Microsoft Foundry Agent Service

## Summary

Microsoft Foundry Agent Service is the managed Foundry service for building, deploying, and scaling AI agents without managing underlying compute and storage resources (SRC-230 L258–262). It supports agents configured through the Foundry portal, Visual Studio Code, SDK/framework code, tools, service-managed conversation state, observability, security, and publication to user-facing channels (SRC-84 L258–280; SRC-230 L270–276; SRC-232 L216–252).

## What it is

The corpus describes the service as a fully managed platform for secure, high-quality AI agents that are tailored with custom instructions and advanced tools (SRC-230 L258–262). It is also the infrastructure where a Foundry-built agent runs before and after publishing; publishing promotes the development asset into an Agent Application resource with a stable endpoint, independent identity, and governance capabilities (SRC-232 L216–225).

## What the sources say

- SRC-129 introduces the service as a solution for healthcare-style agent automation where the team needs security and wants to avoid managing infrastructure (SRC-129 L214–220).
- SRC-230 gives the main definition, says the service reduces the coding effort that standard APIs previously required, and says agents can be built through the Foundry portal or applications with fewer than 50 lines of code (SRC-230 L258–262).
- SRC-84 says the Foundry portal and VS Code extension both support the consistent workflow of connecting to a project, creating an agent, configuring instructions, adding tools, testing, iterating, deploying, and integrating into applications (SRC-84 L258–266).
- SRC-232 says publishing creates an Agent Application resource with a dedicated invocation URL, distinct Microsoft Entra identity, and user data isolation (SRC-232 L216–225).
- SRC-234 and SRC-34 position Foundry Agent Service as the recommended production provider for Microsoft Agent Framework when service-side conversation history matters (SRC-234 L230–238; SRC-34 L216–258).

## Capabilities and components

Core agent runtime capabilities include automatic tool calling, securely managed conversation state through the Responses API, a tool catalog, model selection, enterprise-grade security, storage choices, and observability/tracing (SRC-230 L270–276). The service supports declarative prompt agents, workflow agents, and hosted agents (SRC-230 L263–269). Tools can be built-in, catalog, or custom, including Code Interpreter, File Search, Bing Web Search, Azure AI Search, OpenAPI tools, and MCP servers (SRC-91 L218–297).

Publishing adds an Agent Application layer with a stable invocation URL, a distinct Entra identity, and routing across agent versions without changing the public endpoint (SRC-232 L216–225). For Microsoft 365 publication, Foundry creates an Azure Bot Service resource, a Microsoft 365 publishing package, and a Microsoft Entra ID application, making the agent discoverable in the Teams agent store (SRC-232 L226–239).

## How to use it

Portal use starts in Microsoft Foundry at `https://ai.azure.com`: select a project, choose **Build > Agents**, create an agent, provide name, description, and model, then configure instructions, model parameters, tools, and testing in the integrated playground (SRC-14 L225–244). The portal is strongest for quick prototyping, visual configuration, centralized management, stakeholder collaboration, and dashboards for token usage, latency, and evaluation outcomes (SRC-84 L220–232).

VS Code use relies on the Microsoft Foundry extension, which connects to existing Foundry projects and displays resources such as deployed models, declarative agents, hosted agents, connections, and vector stores (SRC-190 L220–248). The extension supports Agent Designer, YAML editing, integrated playgrounds, local visualization, hosted-agent deployment, and generated integration code (SRC-84 L233–257; SRC-190 L220–248).

Framework use connects Microsoft Agent Framework to a Foundry project with a project endpoint, model deployment name, and Azure credentials. The Foundry chat client bridges the application and service, handling authentication, request routing, and service-side session management (SRC-34 L216–238). Sessions backed by the Foundry provider store conversation history in Foundry Agent Service rather than application memory, which helps conversations continue across restarts or scale-out (SRC-34 L245–258).

## Decision boundaries

- Plain chat app boundary: choose Foundry Agent Service when the solution needs managed agents, tool calling, service-managed state, deployment, tracing, or publication (SRC-230 L270–276; SRC-232 L216–252). **Inference:** choose a plain chat app when the application owns retrieval, tool execution, state, and deployment.
- Microsoft Agent Framework boundary: choose Foundry Agent Service for managed hosting, conversation history, built-in tools, identity integration, and production runtime (SRC-34 L216–258; SRC-234 L230–238). Choose Microsoft Agent Framework for code-first SDK abstraction, provider-agnostic chat clients, explicit workflow/orchestration patterns, or integration of agents from multiple sources (SRC-237 L220–232).
- Foundry portal boundary: use the portal for visual creation, quick prototyping, centralized management, or stakeholder review (SRC-84 L220–232). Use VS Code for Git-tracked YAML, developer-centric workflow, local development, or code-adjacent iteration (SRC-84 L233–257).
- Microsoft 365 Agents Toolkit boundary: direct Foundry publishing fits when agent logic remains in Foundry (SRC-232 L234–239). Agents Toolkit fits custom SSO, advanced middleware logic, or multi-environment deployment pipelines (SRC-232 L240–244).

## Naming and currency

**Stale-risk:** The corpus uses multiple names for the same service family. Recent Learn pages in this wave title the service “Microsoft Foundry Agent Service” (SRC-230 L213; SRC-129 L220). Other pages still say “Azure AI Agent Service” or “Azure AI agents,” especially in MCP and Agent Framework integration contexts (SRC-240 L216–225; SRC-108 L216–232). **Inference:** In this wiki, `foundry-agent-service` is the canonical page, and aliases preserve the older/current mixed names rather than treating them as separate products.

**Stale-risk:** The platform itself is moving. The corpus contains 2026-era Microsoft Foundry naming, but some module titles and APIs still preserve older Azure AI Foundry/Azure AI Agents wording. Do not silently modernize citations; quote the service name as the source uses it when the name itself matters.

## Appearances in the corpus

- Agent creation and configuration: SRC-14 explains portal creation, instructions, parameters, playground testing, tool catalog categories, deployment, and SDK/REST access (SRC-14 L225–250).
- Development approaches: SRC-84 compares portal and VS Code workflows and required Azure resources (SRC-84 L220–280).
- Tools: SRC-91 covers the tool catalog and built-in/custom/MCP tool options; SRC-104 gives custom function, Azure Functions, and OpenAPI patterns (SRC-91 L218–297; SRC-104 L219–249).
- MCP: SRC-240 says the service can connect directly to remote MCP servers through an MCPTool object, avoiding manual MCP client/session wrapping in that path (SRC-240 L216–255).
- Voice: SRC-31 says using Voice Live with a Foundry agent keeps instructions and configuration in the agent and connects by agent ID (SRC-31 L216–234).
- Publishing: SRC-232 covers Agent Application resources, Microsoft 365 publishing, direct portal publishing, advanced Agents Toolkit proxy scenarios, other channels, identity, and permissions (SRC-232 L216–252).

## Connections

- [[ai-agents]] — conceptual pattern that the service operationalizes.
- [[foundry-agent-types]] — supported prompt, workflow, and hosted agent types.
- [[foundry-toolkit-for-vs-code]] — editor surface for configuring and deploying Foundry agents.
- [[microsoft-agent-framework]] — code-first SDK that can use Foundry Agent Service as a provider.
- [[agent-tools]] — tools are central service capabilities.
- [[mcp-tool-integration]] — remote MCP servers extend agents through MCP tools.
- [[agent-publishing]] — publishing turns an agent into a channel-ready application resource.
- [[observability-and-tracing]] — tracing and monitoring are named service features.
- [[responses-api]] — service-managed conversation state is described through the Responses API.
- [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — primary service overview.
- *Also linked from:* [[application-insights]] · [[conversation-state]] · [[foundry-resources-and-projects]] · [[foundry-workflows]] · [[keyless-authentication]] · [[microsoft-foundry]] · [[voice-live-api]]

## Sources

- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — portal creation, instructions, tools, testing, deployment.
- SRC-31 — [[src-31-create-voice-live-agent]] — Voice Live integration with a Foundry agent.
- SRC-34 — [[src-34-create-azure-ai-agent-microsoft-agent-framework]] — Agent Framework code path using Foundry Agent Service.
- SRC-84 — [[src-84-explore-development-approaches]] — portal vs VS Code workflow and resources.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — tool catalog and MCP server support.
- SRC-104 — [[src-104-how-integrate-custom-tools]] — custom tool options and OpenAPI 3.0 tools.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — earlier MCP client/server wrapping pattern.
- SRC-129 — [[src-129-introduction-develop-ai-agents-microsoft-foundry-visual-studio-code]] — module introduction and service framing.
- SRC-190 — [[src-190-set-up-visual-studio-code-agent-development]] — Microsoft Foundry VS Code extension setup.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — central service definition and features.
- SRC-232 — [[src-232-understand-foundry-agent-publishing-options]] — publishing, identity, endpoints, Microsoft 365 channels.
- SRC-234 — [[src-234-understand-microsoft-agent-framework-ai-agents]] — Foundry as recommended production provider.
- SRC-237 — [[src-237-understand-microsoft-agent-framework]] — framework boundary and provider-agnostic code concepts.
- SRC-240 — [[src-240-azure-ai-agents-mcp-servers]] — remote MCP integration with Azure/Foundry agents.

## Open questions

- The corpus names “fewer than 50 lines of code” for app integration but does not include the complete code sample on the service overview page (SRC-230 L258–262).
- The corpus lists expandable tables for tool catalogs, provider matrices, and publishing scopes, but some capture tables are collapsed and not available as evidence in the raw text (SRC-91 L263–270; SRC-232 L245–247; SRC-237 L228–232).


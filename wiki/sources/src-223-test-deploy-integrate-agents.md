---
title: "Test, Deploy, and Integrate Agents"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains testing strategies, deployment, publishing Agent Applications, authentication, endpoint verification, updates, integration code, and production concerns."
area: agents
source_ids: [SRC-223]
objectives: [G12, P07, P12]
tags: [agent-testing, deployment, publishing, responses-api, entra-id, application-insights]
aliases: ["SRC-223"]
source_kind: learn-unit
module: "Develop AI agents with Microsoft Foundry and Visual Studio Code"
learning_path: "Develop AI agents on Azure"
unit: "8 of 11"
presenters: []
raw_file: "223-Test, Deploy, and Integrate Agents - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/8-test-deploy-integrate"
ingest_depth: full
---

# Test, Deploy, and Integrate Agents

*learn-unit · Develop AI agents with Microsoft Foundry and Visual Studio Code · unit 8 of 11 · SRC-223*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-223 |
| Raw file | 223-Test, Deploy, and Integrate Agents - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop AI agents with Microsoft Foundry and Visual Studio Code |
| Unit / episode | 8 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/8-test-deploy-integrate |
| Teaching content | L214–294 of 324 |
| Content length | ~974 words |
| Capture quality | Medium-high; command snippets after Azure CLI/Bash Copy are missing. |
| Ingest depth | full |

## TL;DR

Testing should cover happy paths, edge cases, boundaries, multi-turn conversations, and tool invocation. (SRC-223 L220–228) Publishing creates an Agent Application with a stable Responses API endpoint, Entra authentication, its own identity, and operational needs around monitoring, security, cost, error handling, and conversation management. (SRC-223 L228–294)

## Key claims

- Playground testing should cover happy paths, edge cases, boundaries, multi-turn conversations, and tool invocation. (SRC-223 L220–228)
- Deployment saves agent configuration to the Foundry project for access, testing, and iteration. (SRC-223 L228–239)
- Publishing moves an agent into an Agent Application, a managed Azure resource with a stable endpoint. (SRC-223 L240–253)
- Publishing creates an Agent Application and a deployment of a specific agent version. (SRC-223 L244–248)
- Deploying keeps the agent in the project, while publishing creates a dedicated endpoint callable by external consumers without project access. (SRC-223 L249–250)
- Published agents expose a stable Responses API protocol endpoint. (SRC-223 L259–261)
- Agent Applications use Microsoft Entra ID authentication, and callers need the Azure AI User role on the Agent Application resource. (SRC-223 L262–264)
- A published agent receives its own dedicated Entra identity, and permissions must be reassigned for resources the agent accesses. (SRC-223 L264)
- Production considerations include Application Insights monitoring, managed identities and least privilege, token and rate-limit cost controls, retry/backoff, and client-side conversation history. (SRC-223 L285–294)

## How it works

The source separates testing, deployment, publishing, updating, and integration. (SRC-223 L218–294) Deployment keeps configuration in the Foundry project, while publishing creates an externally callable Agent Application endpoint and separate identity boundary. (SRC-223 L228–264)

## Code and API patterns

The published endpoint uses the Responses API protocol and follows `https://<foundry-resource-name>.services.ai.azure.com/api/projects/<project-name>/applications/<app-name>/protocols/openai/responses`. (SRC-223 L259–261) Azure CLI and Bash verification commands are mentioned but missing from the capture. (SRC-223 L269–273)

## Key terms

- **Agent Application** — an Azure resource with invocation URL, authentication policy, and Entra agent identity. (SRC-223 L244–246)
- **Deployment** — a running instance of a specific agent version inside an application with lifecycle management. (SRC-223 L247–248)
- **Azure AI User role** — the role callers need on the Agent Application resource. (SRC-223 L262–264)
- **Publish Updates** — the portal action for rolling out a new version. (SRC-223 L273–276)

## Decision boundaries and exam cues

- **Inference:** Choose deployment when the scenario says save or iterate on the agent inside the project; choose publishing when it needs a stable external endpoint. (SRC-223 L228–250)
- **Inference:** If tool calls work during development but fail after publishing, check the dedicated published-agent identity and reassigned RBAC roles. (SRC-223 L262–264)
- **Inference:** For multi-turn integrations using Agent Application endpoints, the client must store conversation history because the source says those endpoints currently support only stateless Responses API. (SRC-223 L291–294)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Hosted Agents are marked Preview in the extension tree view. (SRC-223 L256–258)
- **Stale-risk:** The current stateless Responses API limitation may change. (SRC-223 L291–294)
- Endpoint verification command snippets are not captured. (SRC-223 L269–273)

## Relation to other sources

- [[src-20-configure-manage-agents-visual-studio-code]] recommends testing after configuration changes; this source defines broader testing strategies. (SRC-20 L257–260; SRC-223 L218–227)
- [[src-91-extend-agent-capabilities-tools]] explains tools, and this source explains testing invocation and production authorization. (SRC-91 L220–224; SRC-223 L225–226; SRC-223 L264)
- [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode]] demonstrates code integration with a project endpoint and agent name. (SRC-41 L650–900; SRC-223 L259–294)

## Connections

- [[agent-testing-and-evaluation]] — testing strategies are the first major section. (SRC-223 L218–227)
- [[agent-publishing]] — publishing and Agent Applications are central. (SRC-223 L240–264)
- [[responses-api]] — published endpoints use the Responses API protocol. (SRC-223 L259–261; SRC-223 L291–294)
- [[microsoft-entra-id]] — authentication and dedicated identities use Entra ID. (SRC-223 L262–264)
- [[application-insights]] — production monitoring destination named by the source. (SRC-223 L285–286)
- *Module units:* [[src-129-introduction-develop-ai-agents-microsoft-foundry-visual-studio-code|1 Introduction]] · [[src-230-understand-ai-agents-microsoft-foundry-agent-service|2 Understand AI Agents and Microsoft Foundry Agent Service]] · [[src-84-explore-development-approaches|3 Explore Development Approaches]] · [[src-14-build-first-agent-microsoft-foundry|4 Build Your First Agent in Microsoft Foundry]] · [[src-190-set-up-visual-studio-code-agent-development|5 Set Up Visual Studio Code for Agent Development]] · [[src-20-configure-manage-agents-visual-studio-code|6 Configure and Manage Agents in Visual Studio Code]] · [[src-91-extend-agent-capabilities-tools|7 Extend Agent Capabilities with Tools]] · [[src-59-exercise-build-deploy-ai-agent|9 Exercise - Build and Deploy an AI Agent]] · [[src-142-knowledge-check-develop-ai-agents-microsoft-foundry-visual-studio|10 Knowledge Check]] · [[src-212-summary-develop-ai-agents-microsoft-foundry-visual-studio-code|11 Summary]] · [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode|episode 7]]

## Open questions

- The source does not show the verification command bodies or generated integration-code sample. (SRC-223 L269–284)

## Sources

- SRC-223 — raw file: [[223-Test, Deploy, and Integrate Agents - Training - Microsoft Learn]]

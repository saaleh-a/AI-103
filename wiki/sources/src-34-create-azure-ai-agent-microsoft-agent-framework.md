---
title: "Create an Azure AI agent with Microsoft Agent Framework"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Gives the Foundry Agent Service setup sequence: project, credentials, chat client, agent instructions/tools, session, and run modes."
area: agents
source_ids: [SRC-34]
objectives: [G06, G07, G08, G09]
tags: [foundry-agent-service, defaultazurecredential, sessions, streaming, microsoft-agent-framework]
aliases: ["SRC-34"]
source_kind: learn-unit
module: "Develop an AI agent with Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "3 of 7"
presenters: []
raw_file: "34-Create an Azure AI agent with Microsoft Agent Framework - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/3-create-azure-ai-agent"
ingest_depth: full
---
# Create an Azure AI agent with Microsoft Agent Framework

*learn-unit · Develop an AI agent with Microsoft Agent Framework · unit 3 of 7 · SRC-34*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-34 |
| Raw file | 34-Create an Azure AI agent with Microsoft Agent Framework - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop an AI agent with Microsoft Agent Framework |
| Unit / episode | 3 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/3-create-azure-ai-agent |
| Teaching content | L210–243 of 273 |
| Content length | ~599 words |
| Capture quality | High; complete procedural unit text is available. |
| Ingest depth | full |

## TL;DR

This unit presents Foundry Agent Service as the recommended production provider for Microsoft Agent Framework because it handles service-side conversation history, built-in tools, and Azure identity integration. (SRC-34 L216) The setup sequence is: create a Foundry project with a deployed model, authenticate with Azure credentials, initialize a Foundry chat client, create an agent with instructions and optional tools, then open a session and run the agent. (SRC-34 L219–233) It also distinguishes persistent Foundry-backed history from local in-memory history and synchronous from streaming response modes. (SRC-34 L234–243)

## Key claims

- Foundry Agent Service handles persistent conversation history, supports built-in tools such as code execution and file search, and integrates with Azure identity management. (SRC-34 L216)
- A Foundry project with a deployed model is required before code connects to the project. (SRC-34 L219–222)
- The application connects with a project endpoint and a model deployment name. (SRC-34 L220–222)
- The Agent Framework uses Azure credentials, and `DefaultAzureCredential` can resolve Azure CLI credentials during development or managed identity in production. (SRC-34 L223–224)
- A Foundry chat client takes credentials, project endpoint, and model name, and handles authentication, request routing, and service-side session management. (SRC-34 L225–226)
- Agent creation uses instructions for role, goals, and constraints, plus optional tools for actions or retrieval. (SRC-34 L227–231)
- A session is the container for conversation state, and session execution processes prompts, coordinates tool calls, and returns responses. (SRC-34 L232–233)
- Foundry provider sessions are backed by service-side storage, while providers without service-side history keep local in-memory state. (SRC-34 L234–238)
- Non-streaming returns a complete response object, while streaming yields incremental partial updates; both expose a text property for final answer extraction. (SRC-34 L239–243)

## How it works

The source describes a five-step construction path. First, the developer prepares a Microsoft Foundry project and model deployment and captures the project endpoint and model deployment name. (SRC-34 L219–222) Second, the application authenticates with Azure credentials without hardcoding connection strings or API keys. (SRC-34 L223–224) Third, the Foundry chat client bridges the application to Foundry Agent Service and owns authentication, routing, and session management. (SRC-34 L225–226) Fourth, the developer creates an agent with instructions and optional tools, and the framework registers tool schemas for model use. (SRC-34 L227–231) Fifth, the developer opens a session and sends user messages through the session execution method. (SRC-34 L232–233)

## Code and API patterns

The source does not show a full code block, but it names the critical objects and values. `DefaultAzureCredential` is the credential pattern the unit describes for resolving development and production credentials. (SRC-34 L223–224) A Foundry chat client is initialized with credentials, project endpoint, and model name. (SRC-34 L225–226) The agent is configured with instructions and optional tools, and the session execution method coordinates prompts, tool calls, and model responses. (SRC-34 L227–233)

## Key terms

- Project endpoint — the URL of the Foundry project. (SRC-34 L220–221)
- Model deployment name — the name of the model deployment the agent uses. (SRC-34 L220–222)
- Instructions — the system prompt that defines the agent's role, goals, and constraints. (SRC-34 L227–230)
- Tools — custom functions the agent can call to take actions or retrieve information. (SRC-34 L229–230)
- Session — the conversation-state container used to run messages through the agent. (SRC-34 L232–233)
- Persistent history — service-side conversation state that survives restarts and scale-out. (SRC-34 L236–237)
- Local history — in-memory session state that does not persist across process restarts. (SRC-34 L238)

## Decision boundaries and exam cues

- **Inference:** If a scenario forbids hardcoded keys and mentions Azure CLI locally or managed identity in production, `DefaultAzureCredential` is the source-supported authentication pattern. (SRC-34 L223–224)
- **Inference:** If a scenario requires conversation continuity after app restart or scale-out, prefer the Foundry provider's service-side session storage over local in-memory history. (SRC-34 L236–238)
- **Inference:** Use non-streaming when complete responses are acceptable and streaming when a user interface should display incremental output. (SRC-34 L239–243)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The page title says Azure AI agent, while the content uses Foundry Agent Service and Microsoft Foundry project terminology. (SRC-34 L216–222)
- **Stale-risk:** Built-in tool availability and identity recommendations can vary by provider and platform changes. (SRC-34 L216; SRC-34 L223–224)

## Relation to other sources

- SRC-234 explains why Foundry Agent Service is recommended; this source gives the creation sequence. (SRC-234 L232–238; SRC-34 L216–243)
- SRC-4 expands the optional tools step by describing service-provided and custom function tools. (SRC-34 L229–231; SRC-4 L216–242)
- SRC-72 uses the same expense-claim theme as a hands-on exercise but does not include lab steps in the corpus. (SRC-34 L227–233; SRC-72 L212–218)
- SRC-48 demonstrates the same creation pattern in an episode using credentials, deployment, endpoint, instructions, tools, and `agent.run`. (SRC-34 L219–243; SRC-48 L503–549)

## Connections

- [[foundry-agent-service]] — production provider described here.
- [[foundry-resources-and-projects]] — project endpoint and model deployment prerequisites.
- [[keyless-authentication]] — Azure credentials and `DefaultAzureCredential`.
- [[conversation-state]] — sessions, persistent history, and local history.
- [[agent-tools]] — optional custom functions attached to an agent.
- [[code-interpreter-tool]] — one built-in tool named by the source.
- [[file-search-tool]] — one built-in tool named by the source.

## Open questions

- The source does not include a runnable snippet, so exact class names beyond `DefaultAzureCredential` must be drawn from the exercise or episode. (SRC-34 L223–233)

## Sources

- SRC-34 — raw file: [[34-Create an Azure AI agent with Microsoft Agent Framework - Training - Microsoft Learn]]

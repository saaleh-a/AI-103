---
title: "Connect and use the Language MCP server with an agent"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Shows how to connect Azure Language MCP tools to a Foundry agent and call the agent through the Foundry SDK and Responses API."
area: language
source_ids: [SRC-24]
objectives: [G06, G09]
tags: [azure-language, mcp, foundry-agent, responses-api, foundry-sdk]
aliases: ["SRC-24"]
source_kind: learn-unit
module: "Develop a text analysis agent with the Azure Language MCP server"
learning_path: "Develop natural language solutions in Azure"
unit: "3 of 6"
presenters: []
raw_file: "24-Connect and use the Language MCP server with an agent - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-text-analysis-agent-language-mcp/03-connect-use-language-mcp"
ingest_depth: full
---

# Connect and use the Language MCP server with an agent

*learn-unit · Develop a text analysis agent with the Azure Language MCP server · unit 3 of 6 · SRC-24*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-24 |
| Raw file | 24-Connect and use the Language MCP server with an agent - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a text analysis agent with the Azure Language MCP server |
| Unit / episode | 3 of 6 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-text-analysis-agent-language-mcp/03-connect-use-language-mcp |
| Teaching content | L209–265 of 295 |
| Content length | ~836 words |
| Capture quality | Full Learn unit capture; code blocks are represented only by Copy markers. |
| Ingest depth | full |

## TL;DR

This unit creates or uses a Microsoft Foundry project with a deployed model, creates an agent, connects Azure Language in Foundry Tools through the Tools page, updates the agent instructions, tests in the playground, and optionally builds a client application. (SRC-24 L215–245) Programmatic calling uses `azure-ai-projects`, `azure-identity`, `AIProjectClient`, `DefaultAzureCredential`, `get_openai_client()` and `responses.create()` with the agent referenced by name in `extra_body`. (SRC-24 L247–255)

## Key claims

- Using the Azure Language MCP server requires a Microsoft Foundry project with a deployed model. (SRC-24 L217–219)
- The Language MCP server is connected through the Foundry portal Tools page by choosing Azure Language in Foundry Tools from the catalog. (SRC-24 L222–225)
- The portal connection uses a Foundry resource name, key-based authentication and an `Ocp-Apim-Subscription-Key` credential. (SRC-24 L226–229)
- After the tool connection is used in an agent, the agent has access to all text-analysis tools exposed by the Azure Language MCP server. (SRC-24 L230–231)
- In the playground, prompts requiring text analysis make the agent identify tasks, call relevant MCP tools and return a combined response. (SRC-24 L238–243)
- The first MCP tool use requires approval, with an option to always approve Azure Language in Foundry Tools tools. (SRC-24 L244)
- The Logs pane shows which MCP tools were used, their input and their returned result. (SRC-24 L245)
- A client application can invoke the agent programmatically using the Foundry SDK and OpenAI Responses API. (SRC-24 L246–255)
- The MCP tool connection can also be defined in code with `MCPTool`, including server label, URL and allowed tools. (SRC-24 L256–260)
- Multi-task prompts can trigger multiple MCP tool calls in one turn, and the agent synthesizes their outputs. (SRC-24 L261–265)

## How it works

The portal path begins with a Foundry project and a model deployment for the agent's reasoning and response generation. (SRC-24 L217–220) The user connects Azure Language in Foundry Tools from the Tools catalog, configures resource name and key-based credentials, waits for the connection and selects the target agent. (SRC-24 L222–231) After connection, instructions are updated so the agent knows to use the Language MCP tool for text analysis. (SRC-24 L234–237)

The testing path uses the agent playground. (SRC-24 L238–239) A prompt requiring text analysis causes the agent to identify needed tasks, call the appropriate MCP tools and return one combined response. (SRC-24 L240–243) First use introduces an approval gate, and the Logs pane provides evidence of actual MCP calls, including input and result. (SRC-24 L244–245)

The application path uses the Foundry SDK to create an `AIProjectClient` from a project endpoint and `DefaultAzureCredential`, obtains an OpenAI client with `get_openai_client()`, and sends the user prompt through `responses.create()`. (SRC-24 L247–252) The agent is referenced by name in `extra_body`, and the response can be consumed through `output_text` or inspected as JSON with `response.model_dump_json()`. (SRC-24 L252–255)

## Code and API patterns

The captured code blocks are not visible, but the source names the important objects and calls. (SRC-24 L247–260)

- `azure-ai-projects` and `azure-identity` are the packages named for the client application. (SRC-24 L248)
- `AIProjectClient` is created with the Foundry project endpoint and `DefaultAzureCredential`, which uses Azure CLI credentials during development. (SRC-24 L249)
- `get_openai_client()` returns the OpenAI client from the project client. (SRC-24 L250)
- `responses.create()` sends a prompt to the agent through the Responses API. (SRC-24 L251)
- `extra_body` carries the agent reference by name. (SRC-24 L252)
- `output_text` holds the result, while `response.model_dump_json()` can reveal tool calls such as `extract_named_entities_from_text` and `detect_language_from_text`. (SRC-24 L255)
- `MCPTool` from `azure-ai-projects` defines a tool connection in code, with server label, URL and allowed tools. (SRC-24 L256–260)

## Key terms

- **Foundry project** — required workspace that contains the agent and deployed model used for reasoning and responses. (SRC-24 L217–220)
- **Azure Language in Foundry Tools** — the catalog entry selected to connect the Language MCP server. (SRC-24 L222–225)
- **`Ocp-Apim-Subscription-Key`** — credential used for the key-based tool connection. (SRC-24 L226–229)
- **Agent playground** — interactive Foundry environment for testing the agent before application deployment. (SRC-24 L238–239)
- **`MCPTool.allowed_tools`** — code property for restricting which specific Language tools the agent can call. (SRC-24 L257–260)

## Decision boundaries and exam cues

- **Inference:** A portal configuration scenario should include the Tools page, Azure Language in Foundry Tools catalog entry, Foundry resource name and key-based `Ocp-Apim-Subscription-Key` credential. (SRC-24 L222–230)
- **Inference:** A client-app scenario should reference `AIProjectClient`, `DefaultAzureCredential`, `get_openai_client()`, `responses.create()` and the agent name in `extra_body`, not a standalone Language SDK call. (SRC-24 L247–255)
- **Inference:** If a scenario asks for limiting which Language tools an agent may call, the source points to the `allowed_tools` property on `MCPTool`. (SRC-24 L256–260)
- **Inference:** If testing or troubleshooting asks how to verify tool use, the Logs pane or full response JSON are the evidence surfaces named by the source. (SRC-24 L245; SRC-24 L255)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source names `gpt-4.1` only as an example model, not as a requirement. (SRC-24 L217–220)
- The source says the agent can call multiple tools for entity recognition and sentiment analysis, but the visible example tool list says `extract_named_entities_from_text` and `detect_language_from_text`; this appears inconsistent with the sentiment-analysis description. (SRC-24 L261–264)
- The code blocks themselves are absent from the capture, leaving only object and method names. (SRC-24 L253–259)

## Relation to other sources

- [[src-235-understand-azure-language-mcp-server]] explains the MCP mechanism this unit configures. (SRC-235 L217–239; SRC-24 L215–231)
- [[src-70-exercise-develop-text-analysis-agent]] assigns a hands-on version of this workflow. (SRC-24 L215–260; SRC-70 L211–215)
- [[src-150-knowledge-check-develop-text-analysis-agent-azure-language-mcp]] checks the authentication method and agent-reference pattern taught here. (SRC-24 L226–229; SRC-24 L252; SRC-150 L221–229)
- [[src-45-develop-text-analysis-agent-azure-language-mcp-server-episode]] demonstrates the same portal, approval and code-flow ideas with a recorded walkthrough. (SRC-24 L222–260; SRC-45 L175–486)

## Connections

- [[microsoft-foundry]] — portal and project surface used to create the agent.
- [[foundry-sdk]] — SDK layer used by the Python client application.
- [[responses-api]] — API used to send prompts to the agent.
- [[azure-language-mcp-server]] — MCP server being connected.
- [[mcp-tool-integration]] — portal and code integration pattern.
- [[human-in-the-loop-approval]] — first tool use requires approval.
- [[observability-and-tracing]] — logs and JSON response inspection show tool calls.
- [[keyless-authentication]] — relevant contrast because this tool connection itself uses key-based authentication.
- *Module units:* [[src-135-introduction-develop-text-analysis-agent-azure-language-mcp-server|1 Introduction]] · [[src-235-understand-azure-language-mcp-server|2 Understand the Azure Language MCP server]] · [[src-70-exercise-develop-text-analysis-agent|4 Exercise - Develop a text analysis agent]] · [[src-150-knowledge-check-develop-text-analysis-agent-azure-language-mcp|5 Knowledge check]] · [[src-200-summary-develop-text-analysis-agent-azure-language-mcp-server|6 Summary]] · [[src-45-develop-text-analysis-agent-azure-language-mcp-server-episode|episode 16]]

## Open questions

- The exact copied Python examples are missing from the capture, so this page records named objects and calls rather than a runnable snippet. (SRC-24 L253–259)
- The source does not explain whether key-based authentication is the only supported option for this tool connection. (SRC-24 L226–229)

## Sources

- SRC-24 — raw file: [[24-Connect and use the Language MCP server with an agent - Training - Microsoft Learn]]

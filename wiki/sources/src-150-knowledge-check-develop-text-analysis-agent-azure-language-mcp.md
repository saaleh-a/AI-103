---
title: "Knowledge check — Develop a text analysis agent with the Azure Language MCP server"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Knowledge check covering server role, tool selection, agent reference in Responses API, and key-based authentication."
area: language
source_ids: [SRC-150]
objectives: []
tags: [knowledge-check, azure-language, mcp, foundry-agent, responses-api]
aliases: ["SRC-150"]
source_kind: learn-unit
module: "Develop a text analysis agent with the Azure Language MCP server"
learning_path: "Develop natural language solutions in Azure"
unit: "5 of 6"
presenters: []
raw_file: "150-Knowledge check - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-text-analysis-agent-language-mcp/05-knowledge-check"
ingest_depth: full
---

# Knowledge check — Develop a text analysis agent with the Azure Language MCP server

*learn-unit · Develop a text analysis agent with the Azure Language MCP server · unit 5 of 6 · SRC-150*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-150 |
| Raw file | 150-Knowledge check - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a text analysis agent with the Azure Language MCP server |
| Unit / episode | 5 of 6 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-text-analysis-agent-language-mcp/05-knowledge-check |
| Teaching content | L209–232 of 262 |
| Content length | ~248 words |
| Capture quality | Full Learn knowledge-check capture; selected answers are indicated by numeric lines. |
| Ingest depth | full |

## TL;DR

The knowledge check asks about four module facts, and the capture shows no checked answers. (SRC-150 L211–232) The episode review and teaching units give the answers: the Language MCP server exposes Azure Language text-analysis capabilities as MCP tools, and an agent matches the prompt to tool descriptions from the server (SRC-45 L576–588); a Python client names the agent in `extra_body` (SRC-24 L252); and the connection uses key-based `Ocp-Apim-Subscription-Key` authentication (SRC-24 L228–229).

## Key claims

- The primary role of the Azure Language MCP server is to expose Azure Language text-analysis capabilities as MCP tools for agents. (SRC-150 L211–214)
- An agent determines which Language MCP tool to call by matching the prompt to tool descriptions received from the MCP server. (SRC-150 L216–219)
- A Python client references a Foundry agent in the OpenAI Responses API by specifying the agent name in the `agent_reference` field in `extra_body`. (SRC-150 L221–224)
- Connecting the Azure Language MCP server to a Foundry agent uses key-based authentication with the `Ocp-Apim-Subscription-Key` credential. (SRC-150 L226–229)

## How it works

This source is assessment rather than instruction. (SRC-150 L211–229) Its questions and options cover MCP server purpose, how an agent selects a tool, what the Responses API call references, and portal tool-connection authentication. (SRC-150 L211–229)

## Code and API patterns

The code-related pattern assessed is the Responses API agent reference: when building a Python client, the option the module teaches is to specify the agent by name in `extra_body` (SRC-150 L221–224; SRC-24 L252).

## Key terms

- **MCP tools for agents** — the form in which Azure Language text-analysis capabilities are exposed. (SRC-150 L211–215)
- **Tool descriptions** — metadata the agent matches against the user's prompt when choosing a tool. (SRC-150 L216–220)
- **`agent_reference`** — the `extra_body` field named by the knowledge check for referencing a Foundry agent. (SRC-150 L221–225)
- **`Ocp-Apim-Subscription-Key`** — the credential named for key-based authentication. (SRC-150 L226–229)

## Decision boundaries and exam cues

- **Inference:** The distractors rule out fine-tuning and LLM deployment as the primary role of the Azure Language MCP server. (SRC-150 L211–215)
- **Inference:** The tool-selection question rules out developer-written routing logic and MCP-server-side prompt routing; the agent uses tool descriptions from the server. (SRC-150 L216–220)
- **Inference:** The client-application question distinguishes an agent reference in `extra_body` from using an API key header or passing the agent endpoint as the model. (SRC-150 L221–225)
- **Inference:** The authentication question distinguishes key-based `Ocp-Apim-Subscription-Key` from OAuth client-certificate authentication and anonymous access. (SRC-150 L226–229)

## Assessment items

1. What is the primary role of the Azure Language MCP server? (SRC-150 L211–214)
   - To train and fine-tune custom language models for use by AI agents. (SRC-150 L212)
   - To expose Azure Language text analysis capabilities as MCP tools for agents. (SRC-150 L213)
   - To deploy and manage large language models in an Azure subscription. (SRC-150 L214)
   - Answer not shown in capture; the episode review gives exposing Azure Language text-analysis capabilities as MCP tools. (SRC-45 L576–582)
2. How does an agent determine which Azure Language MCP tool to call when processing a user's prompt? (SRC-150 L216–219)
   - The developer writes routing logic to direct each prompt to a specific tool. (SRC-150 L217)
   - The agent matches the prompt to tool descriptions received from the MCP server. (SRC-150 L218)
   - The MCP server analyzes the prompt and automatically routes it to a tool. (SRC-150 L219)
   - Answer not shown in capture; the episode review gives matching the prompt to tool descriptions from the MCP server. (SRC-45 L583–588)
3. When building a Python client application, how do you reference a Foundry agent when calling the OpenAI Responses API? (SRC-150 L221–224)
   - By passing the agent's API key as a request header to the endpoint. (SRC-150 L222)
   - By specifying the agent name in the `agent_reference` field in `extra_body`. (SRC-150 L223)
   - By passing the agent's endpoint URL as the model parameter value. (SRC-150 L224)
   - Answer not shown in capture; the module instruction names the agent in `extra_body`. (SRC-24 L252)
4. What authentication method is used when connecting the Azure Language MCP server to a Foundry agent? (SRC-150 L226–229)
   - OAuth 2.0 authentication with a client certificate and tenant ID. (SRC-150 L227)
   - Key-based authentication using the `Ocp-Apim-Subscription-Key` credential. (SRC-150 L228)
   - Anonymous access that requires no authentication or credentials. (SRC-150 L229)
   - Answer not shown in capture; the module instruction identifies key-based `Ocp-Apim-Subscription-Key` as the configured authentication method. (SRC-24 L226–229; SRC-150 L226–229)

## Tensions, caveats and currency

- The first three questions show numeric answer lines in the capture, but the fourth question does not show a selected answer line before the submit prompt. (SRC-150 L211–230)
- The knowledge-check answer for client code uses `agent_reference`, while the preceding unit's prose says the key part is specifying the agent by name in `extra_body`; the code itself is absent. (SRC-24 L252–255; SRC-150 L221–224)

## Relation to other sources

- [[src-235-understand-azure-language-mcp-server]] teaches the server role and tool-selection model assessed by questions 1 and 2. (SRC-235 L225–239; SRC-150 L211–219)
- [[src-24-connect-language-mcp-server-agent]] teaches the Responses API and authentication details assessed by questions 3 and 4. (SRC-24 L226–255; SRC-150 L221–229)
- [[src-200-summary-develop-text-analysis-agent-azure-language-mcp-server]] summarizes the same capabilities after the assessment. (SRC-150 L211–229; SRC-200 L215–221)

## Connections

- [[azure-language-mcp-server]] — assessed entity.
- [[model-context-protocol]] — protocol behind the tool exposure.
- [[mcp-tool-integration]] — tool discovery and selection assessed here.
- [[responses-api]] — API named in the client-application question.
- [[foundry-sdk]] — SDK context for invoking the agent.
- [[agent-tools]] — the assessed role of tool descriptions.
- [[keyless-authentication]] — contrast point because this module's MCP connection uses key-based authentication.
- *Module units:* [[src-135-introduction-develop-text-analysis-agent-azure-language-mcp-server|1 Introduction]] · [[src-235-understand-azure-language-mcp-server|2 Understand the Azure Language MCP server]] · [[src-24-connect-language-mcp-server-agent|3 Connect and use the Language MCP server with an agent]] · [[src-70-exercise-develop-text-analysis-agent|4 Exercise - Develop a text analysis agent]] · [[src-200-summary-develop-text-analysis-agent-azure-language-mcp-server|6 Summary]] · [[src-45-develop-text-analysis-agent-azure-language-mcp-server-episode|episode 16]]

## Open questions

- The capture does not show a submitted result state, so the fourth answer is inferred from the prior unit rather than displayed by the knowledge-check page itself. (SRC-24 L226–229; SRC-150 L226–230)

## Sources

- SRC-150 — raw file: [[150-Knowledge check - Training - Microsoft Learn]]

---
title: "Develop a text analysis agent with the Azure Language MCP server - AI-103 - Episode 16"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of connecting Azure Language in Foundry Tools to an agent, approving MCP calls, and invoking it from code."
area: language
source_ids: [SRC-45]
objectives: [G08, G09, T01, T02]
tags: [episode, azure-language, mcp, foundry-agent, tool-approval, foundry-sdk]
aliases: ["SRC-45"]
source_kind: episode
module: "Develop a text analysis agent with the Azure Language MCP server"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "45-Develop a text analysis agent with the Azure Language MCP server - AI-103 - Episode 16.md"
url: "https://www.youtube.com/watch?v=O1tc09coYO4"
ingest_depth: full
---

# Develop a text analysis agent with the Azure Language MCP server - AI-103 - Episode 16

*episode · Develop a text analysis agent with the Azure Language MCP server · SRC-45*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-45 |
| Raw file | 45-Develop a text analysis agent with the Azure Language MCP server - AI-103 - Episode 16.md |
| Kind | episode |
| Learning path | null |
| Module | Develop a text analysis agent with the Azure Language MCP server |
| Unit / episode | Episode 16 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=O1tc09coYO4 |
| Teaching content | L3–633 of 633 |
| Content length | ~2921 words |
| Capture quality | Auto-captioned episode transcript; some wording is garbled. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod presents the Language MCP server as a way to hand Azure Language capabilities to an agent without bespoke integrations. (SRC-45 L4–24) The episode demonstrates creating a Foundry text-analysis agent, adding Azure Language in Foundry Tools, giving the agent instructions, approving MCP tool calls, inspecting logs, and invoking the agent from Python through a project client and Responses API flow. (SRC-45 L159–165; SRC-45 L175–340; SRC-45 L369–390)

## Key claims

- The episode connects agents to Azure AI Language Service capabilities using MCP. (SRC-45 L16–24)
- MCP lets a language model advertise, reason about, select and invoke tools. (SRC-45 L29–38)
- Azure Language capabilities can be used in place of large language models for tasks such as PII, entity recognition and language detection. (SRC-45 L39–60)
- Foundry provides a prebuilt MCP server that enables Azure Language capabilities on agents. (SRC-45 L63–69)
- The agent flow is prompt, task reasoning, MCP tool matching, selected tool call with relevant text, language-system processing and blended user response. (SRC-45 L70–93)
- Instructions help the agent funnel named entity recognition, PII detection and language detection into the MCP server. (SRC-45 L119–155)
- The demo configures Azure Language in Foundry Tools with a resource name and key-based authentication. (SRC-45 L214–244)
- The demo removes web search because the text-analysis tests do not need it. (SRC-45 L247–293)
- First MCP tool use requires approval, and the demo approves the tool call once. (SRC-45 L304–314)
- Tool logs show the Foundry tool call, its output and the result returned from the tool. (SRC-45 L332–340)
- The code flow uses `DefaultAzureCredential`, `AIProjectClient`, an OpenAI client, `responses.create`, a role and the name of the agent to look up. (SRC-45 L369–390)
- The presenter shows troubleshooting when code gets stuck because an approval response was not intercepted. (SRC-45 L420–443)
- Full response JSON can be dumped to inspect execution flow and tool calls for troubleshooting. (SRC-45 L494–570)

## How it works

The episode joins two ideas: MCP servers advertise tools that models can reason about and invoke, while Azure Language capabilities perform tasks such as PII detection, entity recognition and language detection. (SRC-45 L26–62) Foundry has prebuilt an MCP server for those capabilities, so an agent can send relevant text to the selected MCP tool and combine the returned language-system result into its response. (SRC-45 L63–93)

In the portal demo, the presenter creates a basic text-analysis agent, adds instructions, opens the tools section, selects Azure Language in Foundry Tools from the catalog, supplies the Foundry resource name and key-based authentication, and connects the tool. (SRC-45 L175–244) After adding the Language tool, the presenter updates instructions so the agent uses the Azure Language tool for text-analysis tasks and removes web search because it is unnecessary for the test. (SRC-45 L266–293)

The playground prompt asks for PII entities and a redacted version. (SRC-45 L295–303) The first MCP use triggers an approval prompt, and after approval the result includes identified people, dates and locations plus a redacted version. (SRC-45 L304–330) Logs are then used to verify the Foundry tool call and output. (SRC-45 L332–340)

The code section sets the Foundry endpoint, imports `DefaultAzureCredential` and `AIProjectClient`, builds a project client with endpoint and credential, obtains an OpenAI client, asks the user for a prompt, calls `responses.create`, passes a role and agent name, and gets the response. (SRC-45 L353–390)

## Segment guide

- L3–25 — Intro: the session promises to connect agents to Azure AI Language Service using MCP. (SRC-45 L3–25)
- L26–69 — Concept bridge: MCP tool advertising is combined with Azure Language capabilities that can offload PII, entity recognition and language detection from an LLM. (SRC-45 L26–69)
- L70–118 — Agent flow and catalog setup: the agent reasons over a prompt, checks MCP tools, calls the selected language tool, and the tool is found in the Foundry tools catalog. (SRC-45 L70–118)
- L119–158 — Instructions and task funneling: the presenter stresses instructing the agent to route named entity recognition, PII detection and language detection to the MCP server. (SRC-45 L119–158)
- L159–244 — Portal build: the demo creates a text-analysis agent and configures Azure Language in Foundry Tools with resource name and key. (SRC-45 L159–244)
- L247–340 — Playground test: the demo removes web search, asks for PII extraction and redaction, approves the MCP tool call and inspects logs. (SRC-45 L247–340)
- L341–390 — Python client shape: the demo reads a Foundry endpoint, uses credential and project client, obtains an OpenAI client and calls `responses.create` with the agent name. (SRC-45 L341–390)
- L407–486 — Approval troubleshooting: the first client run stalls because approval handling is missing, then succeeds after configuring tool auto-approval. (SRC-45 L407–486)
- L487–570 — Debug JSON: the presenter dumps full response JSON to see tools, calls, inputs and results. (SRC-45 L487–570)
- L573–618 — Recap: the presenter reviews the primary role and tool-selection questions and summarizes that the agent decides tool selection without hardcoding. (SRC-45 L573–618)

## Code and API patterns

The episode names the Python client structure rather than showing a readable code block in the transcript. (SRC-45 L353–390)

- `.env` holds a Foundry endpoint used by the client. (SRC-45 L353–366)
- The client imports `DefaultAzureCredential` and `AIProjectClient`. (SRC-45 L369–376)
- The project client receives the endpoint and credential, and then the code obtains an OpenAI client. (SRC-45 L377–382)
- The client asks the user for a prompt and calls `responses.create`. (SRC-45 L383–386)
- The call passes a role and the name of the agent to look up, then retrieves the response. (SRC-45 L386–390)
- A troubleshooting variant dumps the full model response as JSON to inspect execution flow and tool calls. (SRC-45 L494–570)

## Key terms

- **Azure Language in Foundry tools** — the catalog entry selected in the demo for the Language MCP capability. (SRC-45 L103–108; SRC-45 L214–220)
- **MCP approval** — the approval step shown when tools exposed over MCP are first used. (SRC-45 L304–314)
- **Auto approve** — tool configuration option shown in the demo, where the default is never to auto approve and the demo changes it to approve all tools. (SRC-45 L459–469)
- **Full response JSON** — debugging output used to inspect tool listing, MCP calls and final message. (SRC-45 L494–570)

## Decision boundaries and exam cues

- **Inference:** Use the Language MCP server when an agent should offload text-specific tasks such as PII, entity recognition and language detection to Azure Language rather than guessing with an LLM. (SRC-45 L47–60; SRC-45 L131–155)
- **Inference:** Keep tool access narrow: the presenter removes web search because the text-analysis test does not require it. (SRC-45 L247–293)
- **Inference:** If a client run hangs or disappoints on first MCP use, check whether tool approval was handled or configured; the demo's failure was caused by not intercepting the approval response. (SRC-45 L420–466)
- **Inference:** For troubleshooting tool use, inspect logs or full JSON rather than only `output_text`, because those surfaces reveal actual MCP tool calls and results. (SRC-45 L332–340; SRC-45 L494–570)

## Assessment items

The episode includes a recap check rather than a formal Learn knowledge check. (SRC-45 L573–595)

1. Primary role of the Azure Language MCP server: the presenter answers that it exposes Azure Language text analytics capabilities as MCP for agents. (SRC-45 L575–582)
2. Tool selection: the presenter answers that the agent matches the prompt to tool descriptions received from the MCP server, and notes instructions can help. (SRC-45 L583–594)

## Tensions, caveats and currency

- The transcript is auto-captioned and contains garbled phrases, so details should be checked against Learn units when precision matters. (SRC-45 L9–13; SRC-45 L521–529)
- The presenter says Azure Language capabilities can be used in place of large language models for certain tasks, while also framing them as tools used by a large language model inside an agent. (SRC-45 L39–60; SRC-45 L70–93)
- The demo uses key-based authentication for the tool connection. (SRC-45 L237–244)
- The presenter references GPT 4.1 in the debug output; model names are time-sensitive. (SRC-45 L530–535)

## Relation to other sources

- [[src-135-introduction-develop-text-analysis-agent-azure-language-mcp-server]] introduces the same module goal in Learn-unit form. (SRC-135 L213–216; SRC-45 L16–24)
- [[src-235-understand-azure-language-mcp-server]] matches the episode's MCP architecture and dynamic-selection explanation. (SRC-235 L217–239; SRC-45 L70–93)
- [[src-24-connect-language-mcp-server-agent]] is the structured Learn version of the portal and SDK workflow demonstrated here. (SRC-24 L215–260; SRC-45 L175–390)
- [[src-150-knowledge-check-develop-text-analysis-agent-azure-language-mcp]] formalizes the recap questions at the end of the episode. (SRC-150 L211–220; SRC-45 L573–594)

## Connections

- [[azure-language-mcp-server]] — episode's central prebuilt server.
- [[azure-language]] — underlying language capabilities.
- [[model-context-protocol]] — protocol that exposes tools to the agent.
- [[mcp-tool-integration]] — dynamic tool integration pattern.
- [[agent-tools]] — tools added to the Foundry agent.
- [[human-in-the-loop-approval]] — MCP approval behaviour demonstrated.
- [[foundry-sdk]] — Python client path uses the project client.
- [[responses-api]] — client call path uses `responses.create`.
- [[observability-and-tracing]] — logs and JSON dump are troubleshooting evidence.
- [[tool-options-compared]] — the episode contrasts using only needed tools with adding unrelated web search.
- *Module units:* [[src-135-introduction-develop-text-analysis-agent-azure-language-mcp-server|1 Introduction]] · [[src-235-understand-azure-language-mcp-server|2 Understand the Azure Language MCP server]] · [[src-24-connect-language-mcp-server-agent|3 Connect and use the Language MCP server with an agent]] · [[src-70-exercise-develop-text-analysis-agent|4 Exercise - Develop a text analysis agent]] · [[src-150-knowledge-check-develop-text-analysis-agent-azure-language-mcp|5 Knowledge check]] · [[src-200-summary-develop-text-analysis-agent-azure-language-mcp-server|6 Summary]]

## Open questions

- The transcript does not show the full Python source, so exact parameter names beyond the spoken names should be verified against the Learn unit or SDK documentation. (SRC-45 L369–390)
- The demo auto-approves all tools for convenience, but the episode does not discuss production approval policy. (SRC-45 L459–469)

## Sources

- SRC-45 — raw file: [[45-Develop a text analysis agent with the Azure Language MCP server - AI-103 - Episode 16]]

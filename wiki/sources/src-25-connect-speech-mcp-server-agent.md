---
title: "Connect and use the Speech MCP server with an agent"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Shows portal setup, playground testing, prompt customization, SDK invocation, and code-defined MCP tool connection."
area: speech
source_ids: [SRC-25]
objectives: [T05, T06, G06, G09]
tags: [azure-speech, mcp, foundry-agent, blob-storage, responses-api, foundry-sdk]
aliases: ["SRC-25"]
source_kind: learn-unit
module: "Develop a speech agent with the Azure Speech MCP server"
learning_path: "Develop natural language solutions in Azure"
unit: "3 of 6"
presenters: []
raw_file: "25-Connect and use the Speech MCP server with an agent - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-speech-agent-speech-mcp/03-connect-use-speech-mcp"
ingest_depth: full
---

# Connect and use the Speech MCP server with an agent

*learn-unit · Develop a speech agent with the Azure Speech MCP server · unit 3 of 6 · SRC-25*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-25 |
| Raw file | 25-Connect and use the Speech MCP server with an agent - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a speech agent with the Azure Speech MCP server |
| Unit / episode | 3 of 6 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-speech-agent-speech-mcp/03-connect-use-speech-mcp |
| Teaching content | L209–275 of 305 |
| Content length | ~850 words |
| Capture quality | Medium; prose is complete, but example prompts and Python code blocks are omitted after Copy markers. |
| Ingest depth | full |

## TL;DR

This unit turns the Speech MCP concept into a setup flow: create storage, create a Foundry project and agent, connect Azure Speech in Foundry Tools, test text-to-speech and speech-to-text in the playground, and optionally invoke the agent from code. (SRC-25 L215–239; SRC-25 L242–275)

## Key claims

- Connecting the Speech MCP server involves setting up storage, creating a Microsoft Foundry agent, connecting the tool, testing in the agent playground, and optionally building a client application. (SRC-25 L215)
- The Speech MCP server requires an Azure Storage account and blob container before connecting the tool. (SRC-25 L216–220)
- The blob-container SAS token should have Read, Add, Create, Write, and List permissions with the shortest practical expiry time. (SRC-25 L221)
- The generated SAS URL must be copied and stored securely because it is needed for the Speech MCP server connection. (SRC-25 L222–223)
- A Microsoft Foundry project with a deployed model is required, and the agent uses the deployed model for reasoning and response generation. (SRC-25 L224–229)
- In the Foundry portal, the connection is created from the Tools page by choosing Azure Speech in Foundry Tools from the catalog. (SRC-25 L230–233)
- The connection settings include Foundry resource name, Foundry project key, and `X-Blob-Container-Url` with the blob-container SAS URL. (SRC-25 L234–237)
- After the tool is added to an agent, the agent has access to speech-to-text and text-to-speech tools. (SRC-25 L238–239)
- The first Speech MCP tool use prompts for approval, and the playground can approve all Azure Speech MCP Server tools for future calls. (SRC-25 L247)
- Client applications can use the Microsoft Foundry SDK and OpenAI Responses API to invoke the agent programmatically. (SRC-25 L261–270)
- A code-created agent can define the MCP tool connection using `MCPTool` from the `azure-ai-projects` SDK. (SRC-25 L271–275)

## How it works

The setup begins in Azure Storage. (SRC-25 L216–223) The developer creates or reuses a storage account, adds a blob container for audio files, and generates a SAS token with the read/write/list permissions the Speech MCP server needs. (SRC-25 L217–223)

The Foundry side needs a project, a deployed model, and an agent with instructions. (SRC-25 L224–229) The Speech MCP connection is then created from the Tools page by selecting Azure Speech in Foundry Tools and entering the Foundry resource name, project key, and blob-container SAS URL. (SRC-25 L230–238)

Testing happens in the agent playground. (SRC-25 L242–252) A text-to-speech prompt returns a link to generated audio in the blob container, while a transcription prompt can reference either a public URL or a SAS URL for an audio file. (SRC-25 L244–252)

The unit also identifies a programmatic path. (SRC-25 L261–270) A client creates an `AIProjectClient` with project endpoint and `DefaultAzureCredential`, gets an OpenAI client, and calls `responses.create()` with the agent reference in `extra_body`. (SRC-25 L263–270)

## Code and API patterns

The capture omits the actual Python code blocks, but the prose names the moving pieces. (SRC-25 L261–275)

- Packages: `azure-ai-projects` and `azure-identity` are used for the client application. (SRC-25 L263)
- Project client: `AIProjectClient` is created from the Foundry project endpoint and `DefaultAzureCredential`. (SRC-25 L264)
- OpenAI-compatible client: call `get_openai_client()` on the project client. (SRC-25 L265)
- Invocation: call `responses.create()` to send the user prompt to the agent. (SRC-25 L266)
- Agent reference: specify the agent by name in `extra_body`. (SRC-25 L267)
- Output: read the result from `output_text`; text-to-speech results include a blob-container audio link. (SRC-25 L270)
- Tool-as-code: use `MCPTool` from `azure-ai-projects` and pass it when creating the agent. (SRC-25 L271–275)

## Key terms

- **`X-Blob-Container-Url`** — the connection setting that receives the SAS URL for the blob container. (SRC-25 L234–237)
- **`AIProjectClient`** — the Foundry SDK client created from project endpoint and `DefaultAzureCredential`. (SRC-25 L263–264)
- **`DefaultAzureCredential`** — the credential used by the source's client pattern, using Azure CLI credentials in development. (SRC-25 L264)
- **`responses.create()`** — the OpenAI Responses API call used to send a user prompt to the agent. (SRC-25 L266)
- **`MCPTool`** — the SDK class used to define the MCP tool connection directly in code. (SRC-25 L271–275)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks for portal-based setup, the Tools page path fits because the source says to select **Connect a tool** and choose Azure Speech in Foundry Tools. (SRC-25 L230–238)
- **Inference:** If a scenario asks for infrastructure-as-code or application-managed tool configuration, the SDK `MCPTool` path fits better than manual portal configuration. (SRC-25 L271–275)
- **Inference:** If a scenario asks how to influence voice, language, phrase hints, or profanity filtering, this unit points to natural-language prompt options rather than environment variables. (SRC-25 L253–258)
- **Inference:** If an agent returns a link after text-to-speech, that is expected because generated audio is saved in the blob container. (SRC-25 L247–248; SRC-25 L270)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The prose references example prompts and Python snippets, but the captured `Copy` blocks do not include the actual prompt or code text. (SRC-25 L228; SRC-25 L245–260; SRC-25 L268–274)
- The line for the subscription-key header is partially garbled as `****** Ocp-Apim-Subscription-Key )`, but the surrounding prose still identifies it as the Foundry project key. (SRC-25 L234–237; SRC-25 L240–241)
- The unit names `gpt-4.1` as an example model, so the exact model choice is a time-sensitive example rather than a general requirement. (SRC-25 L225–227)

## Relation to other sources

- [[src-236-understand-azure-speech-mcp-server]] explains why storage, SAS URLs, speech tools, and autonomous tool selection are required before this unit walks through setup. (SRC-236 L236–258; SRC-25 L215–239)
- [[src-82-exercise-azure-speech-agent]] turns this unit's setup into the hands-on lab objective. (SRC-25 L215–275; SRC-82 L211–215)
- [[src-144-knowledge-check-develop-speech-agent-azure-speech-mcp-server]] tests capabilities, storage, credentials, and voice selection from this unit. (SRC-25 L221–258; SRC-144 L211–229)
- [[src-43-develop-speech-agent-azure-speech-mcp-server-episode-19]] demonstrates the same portal and client-app flow with a narrated walkthrough. (SRC-43 L179–277; SRC-43 L343–422)

## Connections

- [[microsoft-foundry]] — the project, agent, Tools page, playground, and deployed model live in Foundry. (SRC-25 L224–247)
- [[foundry-sdk]] — the unit uses `azure-ai-projects`, `AIProjectClient`, and `get_openai_client()`. (SRC-25 L261–266)
- [[responses-api]] — the client application sends prompts with `responses.create()`. (SRC-25 L262–270)
- [[azure-speech-mcp-server]] — the tool connection exposes speech recognition and synthesis. (SRC-25 L230–239)
- [[human-in-the-loop-approval]] — first tool use prompts for approval, with an option to always approve the server's tools. (SRC-25 L247)
- [[voices-and-audio-formats]] — prompt options include neural voice names and language settings. (SRC-25 L254–258)

## Open questions

- The exact omitted prompt examples and Python snippets must be verified from the live Learn page or exercise repository before copying syntax. (SRC-25 L245–275)
- The source does not describe least-privilege alternatives to a project key for this Speech MCP connection. (SRC-25 L234–241)

## Sources

- SRC-25 — raw file: [[25-Connect and use the Speech MCP server with an agent - Training - Microsoft Learn]]

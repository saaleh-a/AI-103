---
title: "Develop a speech agent with the Azure Speech MCP server - AI-103 - Episode 19"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Video walkthrough of connecting a Foundry agent to Azure Speech through MCP, including storage, SAS, playground tests, and client code."
area: speech
source_ids: [SRC-43]
objectives: [T05, T06, G09]
tags: [episode, azure-speech, mcp, foundry-agent, blob-storage, client-app]
aliases: ["SRC-43"]
source_kind: episode
module: "Develop a speech agent with the Azure Speech MCP server"
learning_path: null
unit: null
presenters: ["ROB FOULKROD", "SONIA"]
raw_file: "43-Develop a speech agent with the Azure Speech MCP server - AI-103 - Episode 19.md"
url: "https://www.youtube.com/watch?v=mRfkydveXAs"
ingest_depth: full
---

# Develop a speech agent with the Azure Speech MCP server - AI-103 - Episode 19

*episode · Develop a speech agent with the Azure Speech MCP server · SRC-43*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-43 |
| Raw file | 43-Develop a speech agent with the Azure Speech MCP server - AI-103 - Episode 19.md |
| Kind | episode |
| Learning path | None |
| Module | Develop a speech agent with the Azure Speech MCP server |
| Unit / episode | Episode 19 |
| Presenter(s) | ROB FOULKROD; SONIA |
| URL | https://www.youtube.com/watch?v=mRfkydveXAs |
| Teaching content | L3–483 of 483 |
| Content length | ~2,128 words |
| Capture quality | Medium; auto-captioned transcript with some inaudible and demo-specific details. |
| Ingest depth | full |

## TL;DR

The episode shows why an agent can use Azure AI Speech through MCP when its chosen language model is not itself strong at speech-to-text or text-to-speech. (SRC-43 L31–55) Rob Foulkrod walks through storage setup, SAS-token creation, Speech MCP tool connection, playground synthesis and transcription tests, and a client app that invokes the server-side agent. (SRC-43 L104–126; SRC-43 L179–277; SRC-43 L299–422)

## Key claims

- The session covers connecting agents to Azure AI Speech using MCP. (SRC-43 L13–22)
- A chosen language model may be useful for cost, size, or response time while lacking text-to-speech or speech-to-text ability. (SRC-43 L33–55)
- In the pattern shown, a user prompt can contain text or a link to an audio file, and the agent determines the speech task to perform. (SRC-43 L56–64)
- The agent can identify an MCP tool, call it, pass information to back-end tools, and receive results back through the language model. (SRC-43 L65–83)
- Text-to-speech output is generated and saved to Azure Storage, and the returned payload includes a link to the audio. (SRC-43 L75–81)
- Configuration requires a Foundry resource reference, authentication, storage account, container, and commonly a SAS token for storage access. (SRC-43 L91–126)
- The demo grants add, create, write, and list permissions so Foundry can create files and list what is in the container. (SRC-43 L210–219)
- The Speech MCP server is added from the Foundry tool catalog and then added to the speech agent. (SRC-43 L243–292)
- MCP tool usage prompts for permission, and the demo chooses to always approve the MCP server tools. (SRC-43 L308–315)
- The playground demonstration generates audio for a Shakespeare prompt and transcribes a remote audio file. (SRC-43 L303–342)
- The code path uses `DefaultAzureCredential`, `AIProjectClient`, an OpenAI client, `response.create`, and an agent reference containing agent name and type. (SRC-43 L357–383)
- The episode review states the two core capabilities as speech-to-text and text-to-speech, storage as input/output audio-file storage, and credentials as Foundry resource key plus blob-container SAS URL. (SRC-43 L425–444)

## How it works

The mental model is tool augmentation for speech. (SRC-43 L31–55) If the model in the agent is otherwise a good fit but does not perform speech-to-text or text-to-speech, an MCP server can provide those missing capabilities. (SRC-43 L33–55)

The runtime flow is: prompt or audio link enters the agent, the agent determines the task, finds the MCP tool, calls it with the relevant information, receives the back-end tool result, and responds to the user. (SRC-43 L56–83) For synthesis, generated audio is written to storage and returned as a link. (SRC-43 L75–81)

The setup flow is storage first, then Foundry. (SRC-43 L104–157) Rob creates a storage account and container, creates a SAS URL with add/create/write/list permissions, copies that URL, creates a speech agent, creates the Azure Speech MCP server tool from the Foundry catalog, provides the resource key and SAS URL, and adds the tool to the agent. (SRC-43 L179–292)

The test flow uses the Foundry playground and then a client application. (SRC-43 L299–422) The playground shows text-to-speech and transcription, while the code path invokes the existing server-side agent through a project client and OpenAI-compatible client. (SRC-43 L343–422)

## Segment guide

- L3–22 — Opening: the session goal is to give agents speech through the Azure AI Speech service using MCP. (SRC-43 L3–22)
- L25–83 — Architecture motivation: MCP lets an agent with a suitable but speech-limited model use back-end speech tools. (SRC-43 L25–83)
- L84–153 — Required setup: Foundry resource, authentication, storage account, container, and SAS token are introduced. (SRC-43 L84–153)
- L154–223 — Azure Storage demo: creates storage, creates a container, grants SAS permissions, and copies the URL. (SRC-43 L154–223)
- L229–292 — Foundry agent and tool demo: creates a speech agent, finds the Azure Speech MCP server in the catalog, provides the resource key and SAS URL, and adds the tool. (SRC-43 L229–292)
- L299–342 — Playground tests: generates audio from text and transcribes a remote audio file. (SRC-43 L299–342)
- L343–422 — Client-app path: uses project endpoint, `DefaultAzureCredential`, `AIProjectClient`, OpenAI client, response creation, and agent reference. (SRC-43 L343–422)
- L425–466 — Review: recaps capabilities, storage requirement, credentials, SAS token, and client app. (SRC-43 L425–466)

## Code and API patterns

The transcript describes but does not print complete code. (SRC-43 L343–383)

- Environment/configuration: the Foundry endpoint is copied into code or an environment variable. (SRC-43 L348–354)
- Authentication/client objects: `DefaultAzureCredential` and `AIProjectClient` are the two named objects the demo needs at that point. (SRC-43 L357–360)
- Client construction: pass endpoint and credential to get a client that can be invoked. (SRC-43 L361–366)
- OpenAI-compatible access: get the OpenAI client from the project client. (SRC-43 L367–372)
- Agent invocation: call `response.create`, pass the input, and include metadata referencing a prebuilt server-side agent by name and type. (SRC-43 L371–383)
- Output behavior: the demo receives a storage-account link for synthesized audio and a downloaded transcription for speech-to-text. (SRC-43 L411–422)

## Key terms

- **MCP-aware agent** — an agent that can use MCP so it can listen and speak through the speech service without custom plumbing. (SRC-43 L4–12)
- **Shared access signature / SAS token** — the URL-like mechanism used in the demo to give the Speech MCP server access to the storage container. (SRC-43 L119–126; SRC-43 L189–192)
- **Speech agent** — the Foundry agent named in the demo and given the Speech MCP tool. (SRC-43 L229–242; SRC-43 L278–292)
- **Agent reference** — the metadata used by the client call to identify a prebuilt agent already sitting on the server. (SRC-43 L375–383)

## Decision boundaries and exam cues

- **Inference:** If the selected model is otherwise preferred but lacks speech skills, add the Speech MCP server rather than changing the whole model solely for speech. (SRC-43 L33–55)
- **Inference:** If generated speech must be retrieved after synthesis, storage and a returned link are part of the design, not an optional extra. (SRC-43 L75–81; SRC-43 L104–126)
- **Inference:** If the client app invokes an existing Foundry agent, most speech work remains server-side and the client mainly passes input plus an agent reference. (SRC-43 L371–387)
- **Stale-risk:** The demo uses a specific region, demo resource names, and current portal labels, so exact portal layout and model/resource examples may change. (SRC-43 L160–177; SRC-43 L243–277)

## Assessment items

The episode verbally reviews three assessment-style questions. (SRC-43 L425–444)

1. What two core capabilities does the Azure Speech MCP server expose to agents? The stated answer is speech-to-text and text-to-speech. (SRC-43 L425–432)
2. Why does the Azure Speech MCP server require an Azure Storage account? The stated answer is to store input audio files and output audio files generated by the speech tools. (SRC-43 L433–438)
3. What credentials are needed when connecting the Azure Speech MCP server to a Foundry agent? The stated answer is a Foundry resource key and a SAS URL for the blob container. (SRC-43 L439–444)

## Tensions, caveats and currency

- The episode says authentication might be by API key or managed identity, but the Learn unit for this module says the Azure Speech MCP server uses key-based authentication when creating the connection. (SRC-43 L98–103; SRC-236 L257–258)
- The transcript is auto-captioned and includes inaudible text, so exact code syntax and some UI labels should be confirmed from the Learn unit or live portal. (SRC-43 L263–265; SRC-43 L348–354)
- The demo-specific storage account, resource names, region, and Shakespeare prompts are examples, not general requirements. (SRC-43 L160–180; SRC-43 L299–342)

## Relation to other sources

- [[src-140-introduction-develop-speech-agent-azure-speech-mcp-server]] introduces the same motivation: speech-to-text and text-to-speech exposed to an AI agent through Speech MCP. (SRC-140 L10–13; SRC-43 L3–22)
- [[src-236-understand-azure-speech-mcp-server]] provides the more formal MCP host/client/server and dynamic tool discovery definitions behind the episode's demo. (SRC-236 L217–243; SRC-43 L56–83)
- [[src-25-connect-speech-mcp-server-agent]] mirrors the episode's storage, Foundry connection, playground testing, prompt customization, and client-app pattern. (SRC-25 L215–275; SRC-43 L179–422)
- [[src-144-knowledge-check-develop-speech-agent-azure-speech-mcp-server]] contains the written knowledge check corresponding to the episode's spoken review questions. (SRC-144 L211–229; SRC-43 L425–444)

## Connections

- [[azure-speech-mcp-server]] — the server demonstrated throughout the episode. (SRC-43 L15–22)
- [[model-context-protocol]] — the protocol that lets the agent call the speech tools. (SRC-43 L7–12; SRC-43 L53–55)
- [[mcp-tool-integration]] — the episode's main integration pattern. (SRC-43 L63–83)
- [[microsoft-foundry]] — the portal used to create the project, agent, and tool connection. (SRC-43 L129–135; SRC-43 L229–292)
- [[foundry-sdk]] — the code path uses `AIProjectClient` and a project endpoint. (SRC-43 L348–366)
- [[speech-and-language-options-compared]] — the episode explicitly relates the pattern to the earlier text-analytics MCP pattern. (SRC-43 L25–32; SRC-43 L247–250)

## Open questions

- The episode does not show a full copyable code listing, so exact client syntax needs verification from source code or SDK documentation. (SRC-43 L343–383)
- The episode mentions managed identity as a possible authentication approach, while the Learn unit states this Speech MCP server connection uses key-based authentication; this should be tracked as a currency or scope question. (SRC-43 L98–103; SRC-236 L257–258)

## Sources

- SRC-43 — raw file: [[43-Develop a speech agent with the Azure Speech MCP server - AI-103 - Episode 19]]

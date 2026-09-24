---
title: "Build knowledge-enhanced AI agents with Foundry IQ - AI-103 - Episode 10"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of RAG limits, Foundry IQ data-source categories, retrieval instructions, portal setup, and client-side approval handling."
area: retrieval
source_ids: [SRC-16]
objectives: [G02, G08, G09, G12, P03, P04, I05]
tags: [episode, foundry-iq, rag, azure-ai-search, blob-storage, agent-approvals, vs-code]
aliases: ["SRC-16"]
source_kind: episode
module: "Build knowledge-enhanced AI agents with Foundry IQ"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "16-Build knowledge-enhanced AI agents with Foundry IQ - AI-103 - Episode 10.md"
url: "https://www.youtube.com/watch?v=c9zns7PX0Io"
ingest_depth: full
---

# Build knowledge-enhanced AI agents with Foundry IQ - AI-103 - Episode 10

*episode · Build knowledge-enhanced AI agents with Foundry IQ · SRC-16*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-16 |
| Raw file | 16-Build knowledge-enhanced AI agents with Foundry IQ - AI-103 - Episode 10.md |
| Kind | episode |
| Learning path | None |
| Module | Build knowledge-enhanced AI agents with Foundry IQ |
| Unit / episode | Episode 10 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=c9zns7PX0Io |
| Teaching content | L3–763 of 763 |
| Content length | ~3354 words |
| Capture quality | Medium; auto-captioned video transcript with some inaudible or hard-wrapped lines. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames the episode around giving agents the right data at the right time without rebuilding a search stack from scratch. (SRC-16 L3–26) The episode reviews RAG limits and advantages, describes Foundry IQ source categories, shows retrieval instructions, demonstrates creating a product expert agent over Blob Storage data through Azure AI Search, and then calls the same agent from Visual Studio Code with approval handling. (SRC-16 L27–763)

## Key claims

- Large language models have finite training data, knowledge cutoffs, and no private organizational data by default. (SRC-16 L27–55)
- RAG makes current, organization-specific, source-cited information available to agents. (SRC-16 L65–83)
- Foundry IQ can pull from many data sources, including SharePoint, OneLake, Blob Storage, SQL, and APIs. (SRC-16 L95–113)
- A Foundry IQ source, such as product documentation, can be reused by multiple agents in the same project. (SRC-16 L117–127)
- Data-source categories include indexed sources, direct or open sources such as Blob Storage and OneLake, and real-time sources such as web query and SharePoint. (SRC-16 L128–181)
- Agent instructions should say when to retrieve, how often to cite, and what to do when information is missing or uncertain. (SRC-16 L182–234)
- In the demo, the product expert agent uses instructions, a knowledge base, Azure Storage, and Azure Search to answer product questions with references. (SRC-16 L285–534)
- In client code, the application uses the project endpoint, server-side conversation state, and approval handling for knowledge-base access. (SRC-16 L535–727)

## How it works

The episode starts with the reason for RAG: the model's training data is finite, private data is absent, lack of context can ignore workflows or policies, file search has scale and update limits, and RAG can bring in current, cited organizational information. (SRC-16 L27–94) Foundry IQ then provides one platform for many data sources and reusable sources across agents. (SRC-16 L95–127) The demo creates a product expert agent, writes instructions that always search the knowledge base for product questions, connects a Blob Storage container through a new knowledge base and Azure AI Search, and verifies a prompt about Contoso tents. (SRC-16 L285–534) The client-code section uses the Foundry project endpoint, an OpenAI client from the project, server-side conversation state, local history for printing, helper functions to send messages, and explicit user approval for knowledge-base access. (SRC-16 L535–727)

## Code and API patterns

The episode describes using the project endpoint at the agent level rather than the model level. (SRC-16 L551–558) It describes authenticating, grabbing the project, getting an OpenAI client from the project, starting a server-side conversation, saving the conversation ID, and creating conversation items through helper functions. (SRC-16 L578–629) It also describes handling a knowledge-base access request by asking the user for approval instead of auto-approving. (SRC-16 L630–669)

## Key terms

- **RAG** — the pattern that pulls information into the agent so it can answer with current, organizational, cited context. (SRC-16 L65–83)
- **Foundry IQ** — the platform the episode says allows agents to pull from many data sources and manage or auto-index that information. (SRC-16 L95–116)
- **Indexed sources** — sources where data is brought in, broken down, vectorized, and searched quickly, with Azure AI Search and SharePoint indexing named in the episode. (SRC-16 L128–153)
- **Real-time sources** — web or SharePoint calls used when data may have changed recently. (SRC-16 L168–181)
- **Retrieval instructions** — agent instructions that state when to look up information, how to cite it, and what to do if it is missing. (SRC-16 L182–234)
- **Approval** — the episode shows the agent or client requiring approval before reaching out to the knowledge base. (SRC-16 L489–510; SRC-16 L630–719)

## Segment guide

- **Opening and goals** — The presenter says the session covers RAG fundamentals, a Foundry IQ tour, retrieval configuration, and end-to-end integration. (SRC-16 L3–26)
- **Why simple agents need grounding** — The episode explains knowledge cutoffs, missing private data, lack of business context, fabricated responses, and file-search scale limits. (SRC-16 L27–64)
- **RAG and Foundry IQ value** — The presenter explains current organizational information, cited sources, one platform, and reusable Foundry IQ sources for multiple agents. (SRC-16 L65–127)
- **Data-source categories** — Indexed, direct/open, and real-time source categories are introduced with Azure AI Search, SharePoint, Blob Storage, OneLake, web, and SharePoint examples. (SRC-16 L128–181)
- **Retrieval instructions** — The presenter explains when to call sources, citation expectations, fallback behavior, and an HR assistant instruction example. (SRC-16 L182–260)
- **Exercise setup in Foundry** — The demo creates a product expert agent, saves instructions, opens Knowledge, creates an AI Search resource, creates Blob Storage, and uploads Contoso product files. (SRC-16 L261–421)
- **Knowledge-base creation and playground test** — The demo connects Blob Storage, configures embedding and chat-completion models, attaches the knowledge base to the agent, asks about Contoso tents, approves the call, and sees referenced answers. (SRC-16 L422–534)
- **Client application in VS Code** — The demo uses the project endpoint, OpenAI client, conversation objects, helper functions, and manual approval to ask product questions through code. (SRC-16 L535–727)
- **Review and close** — The episode reviews the RAG advantage, SharePoint Remote, Foundry IQ source categories, and instruction requirements. (SRC-16 L728–763)

## Decision boundaries and exam cues

- **Inference:** Choose Foundry IQ when the need is reusable organizational grounding across multiple agents rather than one-off file search for a small number of files. (SRC-16 L56–64; SRC-16 L95–127)
- **Inference:** Use indexed sources for large, fast, relevant searches; use real-time sources when the information may have changed very recently. (SRC-16 L128–181)
- **Inference:** Put retrieval policy in the agent instructions when the required behavior is always search, never answer from background knowledge, cite every answer, or provide a specific fallback. (SRC-16 L182–260)
- **Inference:** At the client layer, expect approval handling if the application allows or denies the agent's external data access request. (SRC-16 L630–719)

## Assessment items

The episode includes two spoken review questions. (SRC-16 L728–748)

1. What is the primary advantage of retrieval-augmented generation over simple AI agents? (SRC-16 L728–735)
   - Spoken answer: RAG enables agents to ground responses in current organizational information and provide source transparency. (SRC-16 L733–736)
2. Which data source option provides real-time access to SharePoint content with Microsoft 365 governance? (SRC-16 L739–748)
   - Spoken answer: SharePoint Remote queries SharePoint libraries in real time. (SRC-16 L744–748)

## Tensions, caveats and currency

- The transcript is auto-captioned and includes at least one inaudible command fragment in the client demo. (SRC-16 L678–683)
- The presenter says a direct PDF link would fail in the demo because unauthenticated access is not available, so citation links may identify the source file without being directly accessible to the user. (SRC-16 L535–550)
- **Stale-risk:** The demo mentions free tiers, resource creation screens, keys, embedding models, and chat-completion models; these portal details can change. (SRC-16 L329–477)

## Relation to other sources

- [[src-141-introduction-build-knowledge-enhanced-ai-agents-foundry-iq]] matches the episode's module overview and learning arc. (SRC-141 L213–228; SRC-16 L3–26)
- [[src-239-understanding-rag-agents]] provides the concise Learn-unit version of the RAG explanation in the opening segment. (SRC-239 L219–230; SRC-16 L27–94)
- [[src-22-configure-data-sources-knowledge-bases]] gives the structured data-source decision guide behind the episode's indexed, direct, and real-time categories. (SRC-22 L11–83; SRC-16 L128–181)
- [[src-23-configure-retrieval-foundry-iq]] gives the text-unit version of the instruction, test, and monitor practices covered in the episode. (SRC-23 L214–278; SRC-16 L182–260)
- [[src-147-knowledge-check-build-knowledge-enhanced-ai-agents-foundry-iq]] captures the review questions that the episode also asks aloud. (SRC-147 L212–221; SRC-16 L728–748)

## Connections

- [[foundry-iq]] — the episode's central product. (SRC-16 L95–127)
- [[retrieval-augmented-generation]] — the mechanism reviewed at the start. (SRC-16 L27–94)
- [[knowledge-bases-and-sources]] — the episode demonstrates sources, knowledge bases, and agent attachment. (SRC-16 L128–181; SRC-16 L422–534)
- [[azure-ai-search]] — used for indexed retrieval and in the demo's knowledge base setup. (SRC-16 L128–153; SRC-16 L329–534)
- [[foundry-sdk]] — the client-code section uses project endpoint and project client patterns, though no exact code is captured. (SRC-16 L535–629)
- [[human-in-the-loop-approval]] — the episode explicitly compares auto-approval and manual approval of data access. (SRC-16 L630–719)
- [[retrieval-options-compared]] — the episode contrasts file search scale limits, indexed sources, direct/open sources, and real-time sources. (SRC-16 L56–64; SRC-16 L128–181)

## Open questions

- The transcript does not preserve the exact Python code, package imports, or command invocation used in the VS Code demo. (SRC-16 L578–727)
- The demo does not fully explain how unauthenticated citation links should be made accessible when the underlying files are private. (SRC-16 L535–550)

## Sources

- SRC-16 — raw file: [[16-Build knowledge-enhanced AI agents with Foundry IQ - AI-103 - Episode 10]]

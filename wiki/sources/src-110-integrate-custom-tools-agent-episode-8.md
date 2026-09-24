---
title: "Integrate custom tools into your agent - AI-103 - Episode 8"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of custom tools: why agents need them, tool options, and a Python function-calling demo with dispatch logic."
area: agents
source_ids: [SRC-110]
objectives: [G09]
tags: [custom-tools, episode, function-calling, azure-functions, openapi, logic-apps]
aliases: ["SRC-110"]
source_kind: episode
module: "Integrate custom tools into your agent"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "110-Integrate custom tools into your agent - AI-103 - Episode 8.md"
url: "https://www.youtube.com/watch?v=uEEjq-yQw_c"
ingest_depth: full
---
# Integrate custom tools into your agent - AI-103 - Episode 8
*episode · Integrate custom tools into your agent · SRC-110*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-110 |
| Raw file | 110-Integrate custom tools into your agent - AI-103 - Episode 8.md |
| Kind | episode |
| Learning path | null |
| Module | Integrate custom tools into your agent |
| Unit / episode | Episode 8 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=uEEjq-yQw_c |
| Teaching content | L3–718 of 718 |
| Content length | ~3230 words |
| Capture quality | Medium; auto-captioned transcript with hard wraps and some transcription roughness. |
| Ingest depth | full |

## TL;DR
Rob Foulkrod frames custom tools as the point where agents move beyond chat into acting against systems such as inventory databases, ticketing APIs and pricing engines. (SRC-110 L39–46) The episode compares custom function calling, Azure Functions, OpenAPI tools and Azure Logic Apps. (SRC-110 L152–285) Its main demo exposes local astronomy-related Python functions as tools, creates an agent with those tool definitions, handles function-call responses with dispatcher code and returns function outputs to the agent. (SRC-110 L345–585)

## Key claims
- The learning path shifts from generative apps that wait for user prompts toward agents that act and drive outcomes. (SRC-110 L9–19)
- Custom tools are needed when an agent must talk to systems such as inventory databases, ticketing APIs or pricing engines. (SRC-110 L39–46)
- Agent applications may need to integrate with their host application or call a remote API to go beyond chat. (SRC-110 L98–130)
- Custom function calling uses developer-supplied C# or Python functions, descriptions and dispatcher code; the agent requests a tool call rather than directly running local code. (SRC-110 L152–195)
- Azure Functions are positioned for offloading compute and for agent-invoked functions rather than local client callbacks. (SRC-110 L202–250)
- OpenAPI descriptors let agents understand how to invoke REST APIs. (SRC-110 L251–269)
- Azure Logic Apps are presented as low-code siblings to Azure Functions, often with HTTP endpoints an agent may invoke. (SRC-110 L270–285)

## How it works
The episode's core mechanism is tool-mediated action. A user asks for something the agent cannot know or do internally, the agent recognizes a tool need, and the application or service handles the tool invocation. (SRC-110 L132–151) For local function calling, the agent receives definitions and parameters, reasons over descriptions, then returns a function-call request that the client-side dispatcher executes. (SRC-110 L157–195) For Azure Functions, the agent can invoke an external function instead of relying on the local application's compute resources. (SRC-110 L202–250) For OpenAPI, the agent is given API descriptors and can understand REST calls. (SRC-110 L251–269)

## Code and API patterns
The demo uses a Foundry project endpoint for agent-level work rather than model-level work, and it also uses a model name because the app creates the agent. (SRC-110 L310–343) The code imports Azure AI Projects and function-tool capability, builds an AI project client with default Azure credential, and gets an OpenAI client in a with block. (SRC-110 L424–446) It defines function-tool definitions with function names, descriptions and parameter descriptions so the agent knows when to invoke them and what arguments to supply. (SRC-110 L447–507) The app creates an astronomy agent with the model, description and tools, creates a conversation with Responses, sends user input, checks for failure, handles function call responses, invokes the local functions, appends function-call output and gets the response. (SRC-110 L508–585)

## Key terms
- **Custom function calling** — a local-code option where the agent returns a request for a tool call and the client dispatches it. (SRC-110 L152–195)
- **Dispatcher code** — client code that reads the agent's tool-call request, takes parameters and calls the function for the agent. (SRC-110 L183–195)
- **Azure Functions** — an Azure-hosted function option for offloading compute and agent invocation. (SRC-110 L202–250)
- **OpenAPI** — a REST API descriptor, sometimes called Swagger, that agents can use to understand how to invoke APIs. (SRC-110 L251–263)
- **Azure Logic Apps** — a low-code option related to Azure Functions and often available through HTTP endpoints. (SRC-110 L270–285)

## Decision boundaries and exam cues
- **Inference:** Pick local function calling when the function runs in the client or host application and the app can dispatch the requested call. (SRC-110 L177–195)
- **Inference:** Pick Azure Functions when local execution is undesirable because work is compute intensive or should be offloaded. (SRC-110 L211–230)
- **Inference:** Pick OpenAPI when the existing integration point is a REST API with an OpenAPI or Swagger descriptor. (SRC-110 L251–269)
- **Inference:** Pick Logic Apps when the integration should be low-code and exposed through workflow-style service connections. (SRC-110 L270–285)

## Assessment items
1. Question: What are custom tools and how can they help you develop effective agents? (SRC-110 L657–660)
   - Answer shown in capture: custom tools are callable functions that an agent can use to extend its capabilities. (SRC-110 L665–667)
2. Question: You need to integrate functionality from an OpenAPI 3.0 based web service. What should you do? (SRC-110 L668–673)
   - Answer shown in capture: use the OpenAPI specification tool in the agent definition. (SRC-110 L674–676)

## Segment guide
- L3–38 — Learning-path orientation: the episode moves from generative chat apps into agents that act, with custom tools, MCP, grounding, publishing, workflows, orchestration and Microsoft Agent Framework ahead. (SRC-110 L3–38)
- L39–74 — Why custom tools: built-in tools are not enough when the agent must talk to business systems. (SRC-110 L39–74)
- L75–151 — Agent-tool recap and weather scenario: user request, LLM with instructions, simple tool, and the need for a weather tool. (SRC-110 L75–151)
- L152–201 — Custom function calling: developer functions, descriptions, tool-call response and dispatcher code. (SRC-110 L152–201)
- L202–250 — Azure Functions: offloading compute and letting the agent invoke Azure-hosted functions. (SRC-110 L202–250)
- L251–285 — OpenAPI and Logic Apps: REST API descriptors and low-code workflow endpoints. (SRC-110 L251–285)
- L286–343 — Demo setup: Foundry project, project endpoint and model name. (SRC-110 L286–343)
- L344–423 — Demo scenario functions: local astronomy event, observation cost and report-generation functions. (SRC-110 L344–423)
- L424–585 — Demo agent code: imports, project client, function-tool definitions, agent creation, conversation loop and dispatcher handling. (SRC-110 L424–585)
- L588–655 — Demo run: prompt requires two function calls, then a report-generation call creates a local report. (SRC-110 L588–655)
- L657–718 — Review and wrap-up: assessment-style answers, option recap and reminder that new tooling changes quickly. (SRC-110 L657–718)

## Tensions, caveats and currency
**Stale-risk:** The presenter says new tooling lands every week, so tool availability and integration details should be checked against current documentation before implementation. (SRC-110 L709–712) The transcript is auto-captioned and contains rough wording such as `in to`, so exact phrasing should not be over-interpreted. (SRC-110 L59–62)

## Relation to other sources
- [[src-122-introduction-integrate-custom-tools-agent]] introduces the same need for custom tools based on own code, third-party services or APIs. (SRC-122 L217; SRC-110 L39–46)
- [[src-179-options-implementing-custom-tools]] provides the Learn-unit option list that this episode explains conversationally. (SRC-179 L218–222; SRC-110 L152–285)
- [[src-104-how-integrate-custom-tools]] aligns with the episode's function-calling, Azure Functions and OpenAPI integration patterns. (SRC-104 L217–249; SRC-110 L424–585)
- [[src-167-module-assessment-integrate-custom-tools-agent]] contains the same assessment topics, while this episode shows answers for two of them. (SRC-167 L212–220; SRC-110 L657–676)

## Connections
- [[custom-tool-options]] — the episode compares function calling, Azure Functions, OpenAPI and Logic Apps.
- [[function-calling]] — the demo's central implementation path.
- [[azure-functions]] — discussed as offloaded compute for agent tools.
- [[agent-tools]] — the episode teaches why agents need tool extensions beyond built-ins.
- [[responses-api]] — the demo uses Responses to create a conversation.
- [[endpoints-and-sdk-choice]] — the episode distinguishes project endpoint use at the agent level from model-level work.
- [[tool-options-compared]] — this source provides practical comparison evidence.

## Open questions
- The transcript describes code visually but does not preserve complete code snippets, so exact SDK syntax must be verified elsewhere. (SRC-110 L424–585)
- The episode does not describe authentication details for OpenAPI or Azure Functions in the demo. (SRC-110 L202–285)

## Sources
- SRC-110 — raw file: [[110-Integrate custom tools into your agent - AI-103 - Episode 8]]

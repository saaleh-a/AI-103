---
title: "Develop a generative AI chat app with Microsoft Foundry - AI-103 - Episode 3"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of playground tuning, endpoint choice, ChatCompletions vs Responses, local Python setup and sync/async chat demos."
area: generative-apps
source_ids: [SRC-42]
objectives: [G05, G06, G13]
tags: [episode, chat-app, responses-api, chat-completions, endpoints, python]
aliases: ["SRC-42"]
source_kind: episode
module: "Develop a generative AI chat app with Microsoft Foundry"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "42-Develop a generative AI chat app with Microsoft Foundry - AI-103 - Episode 3.md"
url: "https://www.youtube.com/watch?v=tXPry-BRVRs"
ingest_depth: full
---
# Develop a generative AI chat app with Microsoft Foundry - AI-103 - Episode 3

*episode · Develop a generative AI chat app with Microsoft Foundry · SRC-42*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-42 |
| Raw file | 42-Develop a generative AI chat app with Microsoft Foundry - AI-103 - Episode 3.md |
| Kind | episode |
| Learning path | null |
| Module | Develop a generative AI chat app with Microsoft Foundry |
| Unit / episode | Episode 3 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=tXPry-BRVRs |
| Teaching content | L3–1074 of 1074 |
| Content length | ~4794 words |
| Capture quality | Medium; auto-captioned transcript with occasional slips. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod presents this as AI-103 Session 3 on generating AI chat applications against Azure Foundry after a model has already been deployed in a Foundry project. (SRC-42 L4–21) The episode walks from playground tuning, to endpoint choice, to ChatCompletions versus Responses, to a Python demo using OpenAI clients, DefaultAzureCredential, response IDs and async calls. (SRC-42 L24–78; SRC-42 L110–194; SRC-42 L221–283; SRC-42 L757–992)

## Key claims

- The model playground is used to test prompts before building the application. (SRC-42 L24–43)
- Playground settings include temperature and max tokens; temperature affects creativity, and max tokens should fit expected output size. (SRC-42 L46–71)
- System messages help determine what the model should and should not do. (SRC-42 L79–93)
- The Azure OpenAI endpoint is typically used when the app talks more directly to the underlying model. (SRC-42 L110–124)
- The Foundry project endpoint is described as a higher-level path for connecting to the model, tools and agentic layer. (SRC-42 L154–170)
- The OpenAI endpoint path can use API keys or Entra ID, with a stated preference to move away from keys because of security risk. (SRC-42 L125–141)
- ChatCompletions is widely implemented across OpenAI models and competitors, but the developer must maintain and resend history. (SRC-42 L200–248)
- Responses can store conversation state server-side and use a response ID as a bookmark to the previous conversation. (SRC-42 L285–321; SRC-42 L389–408)
- The local demo uses `DefaultAzureCredential`, which tries multiple mechanisms until it finds a token such as an Azure CLI token. (SRC-42 L610–629)
- The async demo imports `AsyncOpenAI` and uses `await` so the call can be non-blocking. (SRC-42 L923–992)

## How it works

The episode first tunes behavior in the playground by trying prompts, temperature, max tokens, system messages and different models. (SRC-42 L24–108) It then distinguishes the Azure OpenAI endpoint for direct model access from the Foundry project endpoint for higher-level access to models, tools and an agentic layer. (SRC-42 L110–170)

For ChatCompletions, the application builds a message array, includes a system role message, appends user and assistant messages, calls completions create and reads from choices, message and content. (SRC-42 L251–283; SRC-42 L333–379) For Responses, the application sends model, instructions, input text and the previous response reference, then reads `output_text` and saves the returned ID for the next call. (SRC-42 L381–459; SRC-42 L757–866)

The demo sets up a local Python project, virtual environment and requirements, imports the OpenAI object and Azure identity, authenticates with `DefaultAzureCredential`, creates a client with endpoint plus token provider, and then runs chat loops with ChatCompletions, Responses and async Responses variants. (SRC-42 L472–992)

## Segment guide

- L3–23 — Opening: Session 3 introduces building a full chat application after deploying a Foundry model. (SRC-42 L3–23)
- L24–108 — Playground preparation: prompts, temperature, max tokens, system messages, model checks and code samples. (SRC-42 L24–108)
- L109–199 — Endpoint and SDK framing: Azure OpenAI endpoint for direct model work, Foundry project endpoint for model/tools/agent layer, and authentication differences. (SRC-42 L109–199)
- L200–283 — ChatCompletions concept: wide support, stateless LLM behavior, manual history and response-object navigation. (SRC-42 L200–283)
- L284–459 — Responses concept: server-side conversation state, response ID bookmarks, instructions parameter and simpler output reading. (SRC-42 L284–459)
- L460–604 — Demo setup: project endpoint selection, repository clone, Python version, virtual environment and requirements. (SRC-42 L460–604)
- L605–756 — ChatCompletions demo: imports, `DefaultAzureCredential`, OpenAI client, endpoint/model variables and first ELIZA prompt. (SRC-42 L605–756)
- L757–920 — Responses demo: `responses.create`, instructions plus text, failed ambiguous follow-up before state, then response-ID chaining. (SRC-42 L757–920)
- L921–996 — Async demo: `AsyncOpenAI`, `await`, non-blocking call and Turing test prompt. (SRC-42 L921–996)
- L997–1074 — Knowledge-check answers and wrap-up: Azure OpenAI endpoint, AI Projects package, `responses.create`, and final recap of endpoint/API/conversation choices. (SRC-42 L997–1074)

## Code and API patterns

- ChatCompletions uses a conversation array with role/content messages, then reads `choices[0].message.content`. (SRC-42 L251–283; SRC-42 L333–379)
- Responses uses `responses.create` with model, instructions, input text and optionally a previous conversation reference. (SRC-42 L381–459; SRC-42 L757–799)
- Response IDs are saved and reused so ambiguous follow-ups such as *how does it compare to modern LLMs?* can be grounded in prior context. (SRC-42 L820–899)
- Authentication uses `DefaultAzureCredential` to try several token mechanisms and eventually use the Azure CLI token in the demo. (SRC-42 L610–629)
- Async usage swaps in `AsyncOpenAI` and adds `await` for non-blocking calls. (SRC-42 L923–992)

## Key terms

- **Azure OpenAI endpoint:** The endpoint used when directly building against the underlying model. (SRC-42 L110–124)
- **Foundry project endpoint:** The endpoint that gives higher-level access to models, tools and the agentic layer. (SRC-42 L154–170)
- **ChatCompletions API:** The earlier and widely implemented chat API. (SRC-42 L200–217)
- **Responses API:** The later API that supports server-side conversation state through response IDs. (SRC-42 L285–321)
- **`DefaultAzureCredential`:** The Azure identity mechanism that tries multiple ways to get a token. (SRC-42 L610–629)
- **Async OpenAI client:** The client used for non-blocking Responses calls in the demo. (SRC-42 L923–992)

## Decision boundaries and exam cues

- Use the Azure OpenAI endpoint when the app talks directly to the model. (SRC-42 L110–124)
- Use the Foundry project endpoint when the app needs the model, tools and agentic layer at a higher level. (SRC-42 L154–170)
- Use ChatCompletions when broad compatibility matters, but expect to manage and resend history. (SRC-42 L200–248)
- Use Responses when response-ID state management and simpler instructions/output patterns fit the app. (SRC-42 L285–321; SRC-42 L381–459)
- **Inference:** If a scenario complains that `it` cannot be resolved in a follow-up, the missing piece is conversation state. (SRC-42 L790–899)
- **Inference:** If the app does storage, HTTP calls or other agent invocations while waiting for responses, the async variant is relevant. (SRC-42 L900–992)

## Assessment items

1. Which endpoint offers the broadest support for OpenAI APIs with Foundry models? The episode answer is the OpenAI endpoint. (SRC-42 L997–1008)
2. Which package must you install to use the Foundry SDK in Python? The episode answer is AI Projects. (SRC-42 L1009–1013)
3. Which method do you use to generate responses with the Responses API? The episode answer is `responses.create`. (SRC-42 L1014–1021)

## Tensions, caveats and currency

- The transcript says Azure Foundry in the opening, while the Learn module title uses Microsoft Foundry. (SRC-42 L11–14; SRC-120 L215)
- The transcript says Open API in places where the surrounding context indicates OpenAI, likely an auto-caption error. (SRC-42 L757–766)
- The presenter says the OpenAI endpoint is used in the demo even though the Learn text also describes Responses through Foundry SDK or OpenAI SDK paths. (SRC-42 L472–496; SRC-99 L217)

## Relation to other sources

- [[src-90-explore-model-playground]] is the Learn unit counterpart for playground exploration. (SRC-90 L217–240)
- [[src-18-choose-endpoint-sdk]] is the Learn unit counterpart for endpoint, SDK and authentication choices. (SRC-18 L217–308)
- [[src-99-generate-responses-responses-api-foundry-sdk]] is the Learn unit counterpart for Responses concepts, response IDs, streaming and async. (SRC-99 L217–305)
- [[src-98-generate-responses-chatcompletions-api]] is the Learn unit counterpart for ChatCompletions history handling. (SRC-98 L217–233)
- [[src-148-knowledge-check-develop-generative-ai-chat-app-microsoft-foundry]] contains the same knowledge-check questions without answers shown. (SRC-148 L215–233)

## Connections

- [[model-playgrounds]] — the episode starts from playground prompt and setting checks. (SRC-42 L24–78)
- [[generation-parameters]] — temperature and max tokens are discussed as app-relevant settings. (SRC-42 L46–71)
- [[endpoints-and-sdk-choice]] — the episode teaches Azure OpenAI vs Foundry project endpoint choice. (SRC-42 L110–194)
- [[responses-api]] — the episode demonstrates `responses.create`, response IDs and async use. (SRC-42 L757–992)
- [[chat-completions-api]] — the episode explains manual history in ChatCompletions. (SRC-42 L221–283)
- [[conversation-state]] — the episode's main implementation contrast is state management. (SRC-42 L221–321)
- [[keyless-authentication]] — the demo uses token-based authentication via `DefaultAzureCredential`. (SRC-42 L610–629)
- *Module units:* [[src-120-introduction-develop-generative-ai-chat-app-microsoft-foundry|1 Introduction]] · [[src-90-explore-model-playground|2 Explore with the model playground]] · [[src-18-choose-endpoint-sdk|3 Choose an endpoint and SDK]] · [[src-99-generate-responses-responses-api-foundry-sdk|4 Generate responses with the Responses API in the Foundry SDK]] · [[src-98-generate-responses-chatcompletions-api|5 Generate responses with the ChatCompletions API]] · [[src-62-exercise-create-generative-ai-chat-app|6 Exercise - Create a generative AI chat app]] · [[src-148-knowledge-check-develop-generative-ai-chat-app-microsoft-foundry|7 Knowledge check]] · [[src-214-summary-develop-generative-ai-chat-app-microsoft-foundry|8 Summary]]

## Open questions

- Which exact code repository and lab files were cloned in the demo are not fully recoverable from the transcript lines. (SRC-42 L508–560)
- The transcript is auto-captioned, so product names such as OpenAI/Open API need cautious interpretation against Learn pages. (SRC-42 L757–766)

## Sources

- SRC-42 — raw file: [[42-Develop a generative AI chat app with Microsoft Foundry - AI-103 - Episode 3]]

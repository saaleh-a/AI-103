---
title: "Plan and prepare to develop AI solutions on Azure - AI-103 - Episode 1"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of planning AI solutions on Microsoft Foundry, including projects, tools, SDKs, portal demo, and responsible AI."
area: platform
source_ids: [SRC-183]
tags: [episode, planning, microsoft-foundry, foundry-tools, sdk, responsible-ai]
aliases: ["SRC-183"]
source_kind: episode
module: "Plan and prepare to develop AI solutions on Azure"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "183-Plan and prepare to develop AI solutions on Azure - AI-103 - Episode 1.md"
url: "https://www.youtube.com/watch?v=PE_7sP3uN5k"
ingest_depth: full
---
# Plan and prepare to develop AI solutions on Azure - AI-103 - Episode 1
*episode · Plan and prepare to develop AI solutions on Azure · SRC-183*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-183 |
| Raw file | 183-Plan and prepare to develop AI solutions on Azure - AI-103 - Episode 1.md |
| Kind | episode |
| Learning path | null |
| Module | Plan and prepare to develop AI solutions on Azure |
| Unit / episode | Episode 1 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=PE_7sP3uN5k |
| Teaching content | L3–1001 of 1001 |
| Content length | ~4,575 words |
| Capture quality | Medium; auto-captioned transcript with some wording/tool-name drift. |
| Ingest depth | full |

## TL;DR
Rob Foulkrod frames AI-103 around a customer support agent that needs voice, grounded policy search, internal API actions, governance, safety, and budget-aware planning. (SRC-183 L4–29) The episode lays out four course topics: Foundry platform and generative apps, acting agents and multi-agent orchestration, language/speech/audio/translation, and visual/media/extraction/search capabilities. (SRC-183 L52–90) It then introduces Foundry resources/projects, Foundry Tools, VS Code tooling, SDK choices, a portal project/model demo, and responsible AI principles. (SRC-183 L140–299; SRC-183 L303–539; SRC-183 L561–980)

## Key claims
- Planning choices determine the platform, reachable models, team tools, and responsible behavior before code is written. (SRC-183 L108–120)
- Every agent starts underneath as a generative AI app that calls a model, shapes a prompt, and grounds answers in real data. (SRC-183 L94–107)
- Foundry is described as a unified platform and single place to build needed agents. (SRC-183 L140–156)
- Models need tools and knowledge because models have finite, public-training-based information with possible cutoff dates. (SRC-183 L163–202)
- A Foundry resource is the landing place for network and compute resources, and a project can contain multiple models, agents, tools, and knowledge. (SRC-183 L203–219)
- Older Azure AI tools have been called Cognitive Services and Azure AI services, and the episode says they remain relevant. (SRC-183 L220–242)
- The episode names Azure Language, speech, translation, Document Intelligence, and multimodal understanding as Foundry tools used through the course. (SRC-183 L251–299)
- The episode distinguishes REST API, OpenAI SDK, Microsoft Foundry SDK, and tool-specific SDKs by development layer and target. (SRC-183 L455–513)
- Responsible AI principles are fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability. (SRC-183 L514–523)

## How it works
The episode's architecture starts with a customer support agent scenario: voice input, grounded business documents, internal API actions, governance, and safety. (SRC-183 L4–29) It then maps that scenario to the course sequence: apps that respond precede agents that act, and planning decisions shape the platform, model, tooling, and responsibility posture. (SRC-183 L52–120) Foundry is presented as the place where models, external/custom tools, existing AI tools, and private knowledge are organized inside projects. (SRC-183 L140–219) The portal demo creates a project, chooses a Foundry resource and region, deploys GPT-4.1, uses Home for endpoints, Discover for models/agents/templates/tools, Build for deployed models/playgrounds/instructions/fine-tuning/tools/knowledge, and Operate for assets, policies, guardrails, security, governance, throughput allocation, and admin views. (SRC-183 L561–908)

## Segment guide
- L4–51 — Course-opening customer support agent scenario and presenter introduction. (SRC-183 L4–51)
- L52–90 — Four-topic course map from Foundry/generative apps through agents, speech/language, vision/media/extraction/search. (SRC-183 L52–90)
- L94–139 — Planning foundation: apps call models, shape prompts, ground answers, and planning choices determine platform, models, tools, and responsible behavior. (SRC-183 L94–139)
- L140–219 — Foundry mental model: platform, models as brain, tools as arms/legs, private knowledge, resource and project hierarchy. (SRC-183 L140–219)
- L220–299 — Foundry Tools and legacy names: Cognitive Services, Azure AI services, language, speech, translation, document intelligence, and multimodal understanding. (SRC-183 L220–299)
- L300–420 — First demo pass: create a Foundry project, create a model, and install VS Code AI Toolkit/Foundry extensions. (SRC-183 L300–420)
- L424–513 — Developer surfaces: VS Code, toolkit extension, GitHub Copilot, REST, OpenAI SDK, Foundry SDK, and tool-specific SDKs. (SRC-183 L424–513)
- L514–560 — Responsible AI principles and optional exercise guidance for getting Foundry endpoints and VS Code ready. (SRC-183 L514–560)
- L561–746 — New Foundry portal walkthrough: ai.azure.com, New Foundry toggle, default project creation, resource, region, Home endpoints, Discover, and model quick deploy. (SRC-183 L561–746)
- L747–908 — Portal navigation: Discover templates/tools, Build agents/models/playground/fine-tuning/tools/knowledge/responsible AI, Operate assets/compliance/security/governance/throughput/admin, and AI Services readiness. (SRC-183 L747–908)
- L912–980 — Knowledge-check review and summary of projects, built-in tools, VS Code/toolkit, SDKs, and responsible AI. (SRC-183 L912–980)

## Code and API patterns
The episode states that REST APIs can interact with models broadly but can be clunky for day-to-day development. (SRC-183 L455–466) It says the OpenAI SDK is typically used for direct model chat and responses. (SRC-183 L470–478) It says the Microsoft Foundry SDK is useful for a higher-level agentic platform with tools and grounding, shortening development time. (SRC-183 L479–500) It says Foundry tools such as language, speech, and translator each have their own SDKs, and may also be used through agentic structures. (SRC-183 L501–513)

## Key terms
- Foundry resource: The resource that acts as the landing place for network and compute resources under a Foundry project. (SRC-183 L203–215)
- Foundry project: A child inside a resource that can contain multiple models, agents, tools, and knowledge. (SRC-183 L216–219; SRC-183 L351–360)
- Foundry Tools: Existing Azure AI tools, formerly Cognitive Services/Azure AI services, used for tasks such as language, speech, translation, document intelligence, and multimodal understanding. (SRC-183 L220–299)
- New Foundry: The portal interface the presenter says examples should use. (SRC-183 L572–589)
- OpenAI SDK: The SDK the presenter associates with direct chat against a model. (SRC-183 L470–478)
- Microsoft Foundry SDK: The SDK the presenter associates with full agentic platform work, additional tools, and grounding. (SRC-183 L479–500)

## Decision boundaries and exam cues
- **Inference:** If a task is direct model chat, the episode points to the OpenAI SDK; if the task is a higher-level agentic platform with tools and grounding, it points to the Microsoft Foundry SDK. (SRC-183 L470–500)
- **Inference:** If a task needs a specific capability such as language, speech, translator, or document intelligence, the episode points to tool-specific SDKs or agentic access to those tools. (SRC-183 L501–513)
- **Inference:** If a scenario asks where endpoints live in the new portal, the episode says the Home page is where the presenter grabs endpoints. (SRC-183 L669–697)
- **Inference:** If a scenario asks where to discover models, templates, agents, tools, or end-to-end templates before building, the episode points to Discover. (SRC-183 L698–779)
- **Inference:** If a scenario asks where deployed models, agents, fine-tuning, tools, knowledge, guardrails, and evaluations are worked on, the episode points to Build. (SRC-183 L782–842)
- **Inference:** If a scenario asks where to view assets, policies, guardrails, security posture, governance, throughput allocation, or projects across the Foundry, the episode points to Operate/Admin areas. (SRC-183 L843–881)

## Assessment items
- Which web portal should you use to work with assets in a Microsoft Foundry project? Spoken answer: Microsoft Foundry Portal. (SRC-183 L912–919)
- Which component of Microsoft Foundry provides prebuilt services for common AI tasks? Spoken answer: Foundry Tools. (SRC-183 L920–927)
- Which extension should you use in Visual Studio Code to work with Foundry projects? Spoken answer: Microsoft AI Toolkit. (SRC-183 L928–934)

## Tensions, caveats and currency
- **Stale-risk:** The episode says there are a couple of Foundry UIs and stresses the New Foundry toggle for examples, which is explicitly portal-currency-sensitive. (SRC-183 L327–334; SRC-183 L572–589)
- **Stale-risk:** The episode says both AI Toolkit and Foundry extensions were available, and probably later there would be one Foundry Toolkit. (SRC-183 L397–408)
- The episode's knowledge-check answer names Microsoft AI Toolkit, while the Learn assessment option and developer-tools unit name Foundry Toolkit for Visual Studio Code. (SRC-183 L928–934; SRC-162 L223–227; SRC-51 L221–227)
- The transcript is auto-captioned and contains wording drift such as `multi-model understanding` where the Learn unit uses Azure Content Understanding. (SRC-183 L285–299; SRC-96 L231–232)

## Relation to other sources
- SRC-113 states the same planning premise in Learn-unit form: AI solutions combine models, AI services, prompt engineering, and custom code. ([[src-113-introduction-plan-prepare-develop-ai-solutions-azure]]; SRC-113 L216–218)
- SRC-260 supplies the capability taxonomy that the episode turns into a customer-agent scenario and course map. ([[src-260-what-is-ai]]; SRC-260 L218–233; SRC-183 L4–90)
- SRC-155 provides the more formal resource/project/asset architecture that the episode demos. ([[src-155-microsoft-foundry]]; SRC-155 L15–22; SRC-183 L203–219)
- SRC-96 formalizes the Foundry Tools list and naming drift introduced verbally in the episode. ([[src-96-foundry-tools]]; SRC-96 L218–236; SRC-183 L220–299)
- SRC-51 gives the written developer-tool and SDK guidance corresponding to the episode's tooling discussion. ([[src-51-developer-tools-sdks]]; SRC-51 L218–238; SRC-183 L424–513)
- SRC-186 gives the written responsible AI principles that the episode says will guide the course. ([[src-186-responsible-ai]]; SRC-186 L220–237; SRC-183 L514–539)

## Connections
- [[microsoft-foundry]] — the episode is a broad walkthrough of the platform and portal. (SRC-183 L140–156; SRC-183 L561–908)
- [[foundry-resources-and-projects]] — the episode explains resource and project hierarchy and demos project creation. (SRC-183 L203–219; SRC-183 L590–660)
- [[foundry-tools]] — the episode explains legacy names and current tool examples. (SRC-183 L220–299)
- [[development-tools-and-approaches]] — the episode compares portal, VS Code, REST, SDKs, and GitHub Copilot. (SRC-183 L381–513)
- [[endpoints-and-sdk-choice]] — the episode distinguishes REST, OpenAI SDK, Foundry SDK, and tool SDKs. (SRC-183 L455–513)
- [[responsible-ai-principles]] — the episode lists the six principles and says they will be reinforced across the course. (SRC-183 L514–539)
- [[naming-and-currency]] — the episode contains portal UI and toolkit naming drift. (SRC-183 L327–334; SRC-183 L397–408; SRC-183 L928–934)
- *Module units:* [[src-113-introduction-plan-prepare-develop-ai-solutions-azure|1 Introduction]] · [[src-260-what-is-ai|2 What is AI-]] · [[src-96-foundry-tools|3 Foundry Tools]] · [[src-155-microsoft-foundry|4 Microsoft Foundry]] · [[src-51-developer-tools-sdks|5 Developer Tools and SDKs]] · [[src-186-responsible-ai|6 Responsible AI]] · [[src-78-exercise-prepare-ai-development-project|7 Exercise - Prepare for an AI development project]] · [[src-162-module-assessment-plan-prepare-develop-ai-solutions-azure|8 Module assessment]] · [[src-203-summary-plan-prepare-develop-ai-solutions-azure|9 Summary]]

## Open questions
- The episode previews regional deployments, throughput allocation, fine-tuning, guardrails, evaluations, tools, and knowledge, but leaves detailed treatment to later sessions. (SRC-183 L621–651; SRC-183 L810–838; SRC-183 L866–876)
- The episode does not resolve whether learners should now search for Microsoft AI Toolkit, Foundry Toolkit, or both in VS Code. (SRC-183 L397–408; SRC-183 L928–934)

## Sources
- SRC-183 — raw file: [[183-Plan and prepare to develop AI solutions on Azure - AI-103 - Episode 1]]

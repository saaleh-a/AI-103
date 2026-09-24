---
title: "Microsoft Foundry — Plan and prepare to develop AI solutions on Azure"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Microsoft Foundry resources, projects, portal, SDK, and project assets such as models, agents, tools, and knowledge."
area: platform
source_ids: [SRC-155]
tags: [microsoft-foundry, foundry-projects, foundry-resources, portal, sdk]
aliases: ["SRC-155"]
source_kind: learn-unit
module: "Plan and prepare to develop AI solutions on Azure"
learning_path: "Develop generative AI apps in Azure"
unit: "4"
presenters: []
raw_file: "155-Microsoft Foundry - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/prepare-azure-ai-development/4-azure-ai-foundry"
ingest_depth: full
---
# Microsoft Foundry — Plan and prepare to develop AI solutions on Azure
*learn-unit · Plan and prepare to develop AI solutions on Azure · unit 4 · SRC-155*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-155 |
| Raw file | 155-Microsoft Foundry - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Plan and prepare to develop AI solutions on Azure |
| Unit / episode | 4 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/prepare-azure-ai-development/4-azure-ai-foundry |
| Teaching content | L8–34 of 48 |
| Content length | ~609 words |
| Capture quality | High; compact Learn capture with dense project architecture detail. |
| Ingest depth | full |

## TL;DR
Microsoft Foundry is presented as the recommended Azure AI development platform for all but the simplest solutions because it provides project organization, resource management, and AI development capabilities. (SRC-155 L12) It has both a portal for visual project work and an SDK for programmatic development. (SRC-155 L13) A Foundry project manages solution assets such as models, agents, tools, and knowledge inside a Foundry resource that provides compute, storage, AI tools, and services. (SRC-155 L15–22)

## Key claims
- Microsoft Foundry is a platform for AI development on Microsoft Azure. (SRC-155 L12)
- Individual AI resources can be provisioned without Foundry, but Foundry is recommended for all but the most simple solutions. (SRC-155 L12)
- Microsoft Foundry provides the Microsoft Foundry portal and the Microsoft Foundry SDK. (SRC-155 L13)
- Each project belongs to a single Microsoft Foundry resource that provides compute, data storage, AI tools, and other services. (SRC-155 L15)
- A Foundry resource can support one or more child projects, with one default project. (SRC-155 L16)
- Projects manage assets including models, agents, tools, and knowledge. (SRC-155 L17–21)
- Foundry project separation from cloud services supports common AI development tasks for generative AI chat apps and agents with less administrative resource management. (SRC-155 L22)

## How it works
A Foundry resource is the Azure-side container for compute, storage, AI tools, and services. (SRC-155 L15) One or more projects live under that resource, and a project manages connections, data, code, and solution elements. (SRC-155 L15–16) Project assets include LLM deployments from Foundry Models, agents built and consumed through Microsoft Foundry Agent Service, built-in or MCP-connected tools, Foundry Tools hosted in the resource, and knowledge connections through Foundry IQ. (SRC-155 L18–21) The portal supports model comparison, deployment, agent creation, MCP connections, Foundry Tools exploration, access management, and endpoint/key discovery. (SRC-155 L24–31)

## Code and API patterns
The unit names the Microsoft Foundry SDK as the way to build programmatically and automate project operations. (SRC-155 L13; SRC-155 L32) It distinguishes project endpoint access for Foundry-specific APIs and SDKs from the Azure OpenAI endpoint for OpenAI APIs and SDKs. (SRC-155 L18)

## Key terms
- Microsoft Foundry resource: The Azure resource that provides compute, data storage, AI tools, and services for one or more projects. (SRC-155 L15–16)
- Microsoft Foundry project: The project-level container for resource connections, data, code, and AI solution elements. (SRC-155 L15)
- Models: LLM deployments based on models in Foundry Models, accessed through project or Azure OpenAI endpoints. (SRC-155 L18)
- Agents: Named AI configurations encapsulating an LLM, instructions, and tools for autonomous tasks and collaboration. (SRC-155 L19)
- Knowledge: Data connected through tools to contextualize prompts, simplified by Foundry IQ as a central MCP-based knowledge connection. (SRC-155 L21)

## Decision boundaries and exam cues
- **Inference:** If a scenario involves organizing multiple assets for a nontrivial Azure AI solution, this source points to a Foundry project rather than isolated AI resources. (SRC-155 L12–22)
- **Inference:** If a scenario asks whether to use OpenAI APIs or Foundry-specific APIs, the source distinguishes Azure OpenAI endpoints for OpenAI APIs from project endpoints for Foundry-specific assets. (SRC-155 L18)
- **Inference:** If a scenario mentions project assets such as agents, tools, knowledge, connections, endpoints, and user access, the Foundry portal is the management surface named here. (SRC-155 L24–31)

## Assessment items
Not covered by this source. (SRC-155 L12–34)

## Tensions, caveats and currency
- **Stale-risk:** The source says the module focuses on the latest project architecture while older classic projects may use a hub-based architecture. (SRC-155 L33–34)
- **Stale-risk:** The source says the portal is transitioning to the new interface and some tasks may not yet be supported there. (SRC-155 L34)
- The source uses Microsoft Foundry and Foundry Tools terminology while noting architecture changes elsewhere only briefly. (SRC-155 L12–34)

## Relation to other sources
- SRC-113 introduces Microsoft Foundry at a high level; this page supplies the project/resource architecture. ([[src-113-introduction-plan-prepare-develop-ai-solutions-azure]]; SRC-113 L218; SRC-155 L12–22)
- SRC-96 explains the Foundry Tools suite that this unit places inside the Foundry resource. ([[src-96-foundry-tools]]; SRC-96 L218–236; SRC-155 L20)
- SRC-51 expands the SDK and developer-tool choices named by this unit. ([[src-51-developer-tools-sdks]]; SRC-51 L218–238)
- SRC-183 demonstrates creating a project and deploying a model in the new Foundry portal. ([[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]]; SRC-183 L561–746)

## Connections
- [[microsoft-foundry]] — this source is a core Foundry platform description. (SRC-155 L12–13)
- [[foundry-resources-and-projects]] — this source defines the resource/project hierarchy. (SRC-155 L15–22)
- [[foundry-sdk]] — this source names the SDK for programmatic project operations. (SRC-155 L13; SRC-155 L32)
- [[foundry-agent-service]] — agents are developed and consumed through Microsoft Foundry Agent Service. (SRC-155 L19)
- [[foundry-tools]] — Foundry Tools are hosted in the project-associated Foundry resource. (SRC-155 L20)
- [[foundry-iq]] — Foundry IQ creates a central MCP-based knowledge connection. (SRC-155 L21)
- [[naming-and-currency]] — the unit flags classic versus latest project architecture and portal transition. (SRC-155 L33–34)
- *Module units:* [[src-113-introduction-plan-prepare-develop-ai-solutions-azure|1 Introduction]] · [[src-260-what-is-ai|2 What is AI-]] · [[src-96-foundry-tools|3 Foundry Tools]] · [[src-51-developer-tools-sdks|5 Developer Tools and SDKs]] · [[src-186-responsible-ai|6 Responsible AI]] · [[src-78-exercise-prepare-ai-development-project|7 Exercise - Prepare for an AI development project]] · [[src-162-module-assessment-plan-prepare-develop-ai-solutions-azure|8 Module assessment]] · [[src-203-summary-plan-prepare-develop-ai-solutions-azure|9 Summary]] · [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1|episode 1]]

## Open questions
- The source does not define the detailed permissions, network controls, costs, or deployment types of the Foundry resource. (SRC-155 L15–34)

## Sources
- SRC-155 — raw file: [[155-Microsoft Foundry - Training - Microsoft Learn]]

---
title: "Microsoft Foundry"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Azure AI development platform that organizes projects, models, agents, tools, knowledge, endpoints, evaluation and operations."
area: platform
source_ids: [SRC-14, SRC-18, SRC-51, SRC-84, SRC-90, SRC-96, SRC-102, SRC-155, SRC-183, SRC-190]
objectives: [P05]
objective_gaps: []
tags: ["product"]
aliases: ["Azure AI Foundry", "AI Foundry", "Foundry portal", "Microsoft Foundry portal", "New Foundry"]
---

# Microsoft Foundry

## Summary

Microsoft Foundry is the corpus's main Azure AI development platform: it gives teams a portal, SDKs, projects, model deployments, agents, tools, knowledge connections, endpoints, and operations views for building AI apps and agents. (SRC-155 L12–22; SRC-183 L140–219)

## What it is

Microsoft Foundry is described as a platform for AI development on Microsoft Azure, recommended for all but the simplest solutions because it adds project organization, resource management, and AI development capabilities. (SRC-155 L12) It provides both the Microsoft Foundry portal for visual project work and the Microsoft Foundry SDK for programmatic development. (SRC-155 L13)

A Foundry project sits inside a Microsoft Foundry resource in Azure. The resource supplies compute, data storage, AI tools, and other services, while the project manages the solution's resource connections, data, code, and AI assets. (SRC-155 L15–16) Those project assets include model deployments, agents, tools, and knowledge connections. (SRC-155 L17–21)

## What the sources say

SRC-155 is the formal Learn-unit definition: Foundry projects organize model deployments from the model catalog, agents built with Microsoft Foundry Agent Service, built-in or MCP-connected tools, Foundry Tools, and Foundry IQ knowledge connections. (SRC-155 L17–22)

SRC-183 gives the same mental model in the course episode: Foundry is a unified platform and a single place to build agents; a resource is the landing place for network and compute resources, and a project can contain multiple models, agents, tools, and knowledge. (SRC-183 L140–219)

SRC-90 positions the Foundry portal as the no-code place to explore deployed models, prompts, settings, system messages, and generated code samples before writing an app. (SRC-90 L217–240) SRC-14 shows the portal as an accessible visual path for creating, testing, tooling, deploying, and integrating an agent through SDK or REST access. (SRC-14 L218–246)

## Capabilities and components

The portal supports model comparison, deployment, testing, agent creation, MCP connections, Foundry Tools exploration, access management, and endpoint/key discovery. (SRC-155 L24–31) The episode maps portal areas into lifecycle zones: Home for endpoints, Discover for exploration, Build for deployed models, playgrounds, agents, tools, knowledge, guardrails and evaluations, and Operate/Admin for assets, policies, security, governance, throughput and projects. (SRC-183 L669–908)

Foundry Tools are the prebuilt AI services branch of the platform, covering Language, Speech, Translator, Document Intelligence, and Content Understanding in the Learn unit. (SRC-96 L218–232) The same Learn unit preserves the naming history: these tools were previously called Azure AI Services and earlier Azure Cognitive Services, and some APIs and SDKs still reflect those names. (SRC-96 L235–236)

## How to use it

Use the portal when the job is to create or manage projects visually, explore models, test prompts, configure or test agents, discover tools, or collect endpoint/key details. (SRC-155 L24–31; SRC-90 L217–232; SRC-14 L220–246)

Use the SDK route when automation or code integration is required. The Microsoft Foundry SDK connects to Foundry projects and accesses Foundry-specific assets such as agents and Foundry IQ knowledge stores. (SRC-51 L235–236) The endpoint-and-SDK source says a project exposes both a Project endpoint and an Azure OpenAI endpoint, and SDK choice depends on which endpoint and features the app needs. (SRC-18 L217–221)

Use VS Code when the team wants developer-centric workflows. The Microsoft Foundry extension for VS Code provides project resources, playgrounds, model deployment, agent configuration, code generation, and YAML editing in the editor. (SRC-84 L232–256; SRC-190 L218–268)

## Decision boundaries

- **Inference:** Choose Microsoft Foundry rather than isolated Azure AI resources when the solution needs project organization, several assets, agents, tools, knowledge, endpoint management, or operations views; SRC-155 says individual resources are possible, but Foundry is recommended for all but the simplest solutions. (SRC-155 L12–22)
- **Inference:** Use the portal or playground for exploration and visual configuration, then move to SDKs or VS Code when the application must be coded, versioned, automated, or deployed through developer workflows. (SRC-90 L217–240; SRC-51 L218–238; SRC-84 L279–284)
- **Inference:** Do not treat Foundry Tools as the same idea as agent tools. Foundry Tools are prebuilt AI services in the Foundry resource, while agent tools include built-in, custom, third-party, or MCP-connected capabilities used by agents. (SRC-96 L218–233; SRC-155 L20)

## Naming and currency

**Stale-risk:** SRC-155 says the module focuses on the latest Microsoft Foundry project architecture, while older classic projects may use a hub-based architecture; it also says the portal is transitioning to a new interface and some tasks may not yet be supported there. (SRC-155 L33–34)

**Stale-risk:** SRC-183 stresses that course examples use the New Foundry portal toggle, which is portal-UI-sensitive. (SRC-183 L561–589)

The corpus uses Microsoft Foundry, Foundry portal, Azure AI Foundry SDK wording, and legacy Azure AI Services/Cognitive Services names around adjacent capabilities. (SRC-102 L251–256; SRC-96 L235–236)

## Appearances in the corpus

Foundry appears as the planning platform for AI apps, the project home for model and agent work, the portal for playgrounds and code samples, the place where Foundry Tools are hosted, and the operations surface for governance and throughput. (SRC-155 L12–34; SRC-90 L217–240; SRC-96 L233–236; SRC-183 L843–908)

## Connections

- [[foundry-resources-and-projects]] — the resource/project hierarchy is the platform's core container model.
- [[development-tools-and-approaches]] — portal, VS Code, SDK, REST and GitHub choices are separate development surfaces.
- [[endpoints-and-sdk-choice]] — projects expose endpoint choices that determine SDK use.
- [[foundry-tools]] — the prebuilt service family inside Foundry resources.
- [[foundry-sdk]] — the programmatic project-level route into Foundry.
- [[foundry-agent-service]] — agents are developed and consumed through the project endpoint.
- [[model-catalog]] — Foundry Models supplies the deployments used by projects.
- [[naming-and-currency]] — product names and portal architecture are moving targets.
- [[src-155-microsoft-foundry]] — core Learn source for the platform.
- [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — broad portal and platform walkthrough.
- *Also linked from:* [[foundry-workflows]] · [[model-playgrounds]] · [[overview]]

## Sources

- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — portal agent creation and deployment flow.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — endpoint and SDK choice.
- SRC-51 — [[src-51-developer-tools-sdks]] — development tools and SDK survey.
- SRC-84 — [[src-84-explore-development-approaches]] — portal versus VS Code agent development.
- SRC-90 — [[src-90-explore-model-playground]] — model playground and generated code samples.
- SRC-96 — [[src-96-foundry-tools]] — Foundry Tools definition and legacy names.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — Azure AI Foundry SDK naming around RAG.
- SRC-155 — [[src-155-microsoft-foundry]] — platform, resource, project, portal and SDK.
- SRC-183 — [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — episode walkthrough of Foundry, portal areas and tooling.
- SRC-190 — [[src-190-set-up-visual-studio-code-agent-development]] — VS Code extension project-resource management.



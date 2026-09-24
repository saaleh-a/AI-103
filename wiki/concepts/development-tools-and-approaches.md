---
title: "Development tools and approaches"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "How to choose between the Foundry portal, playgrounds, VS Code, GitHub, SDKs, REST APIs and tool-specific SDKs."
area: platform
source_ids: [SRC-14, SRC-18, SRC-51, SRC-84, SRC-90, SRC-96, SRC-155, SRC-183, SRC-190]
objectives: [G05, G06]
objective_gaps: []
tags: []
aliases: ["developer tools and SDKs", "development approaches", "portal vs VS Code", "Foundry Toolkit"]
---

# Development tools and approaches

## Summary

The corpus treats development tools as layered choices: use the Foundry portal and playgrounds for visual exploration, VS Code for code-centric agent work, GitHub for source control and DevOps, SDKs for application integration, REST for broad protocol access, and tool-specific SDKs for Foundry Tools. (SRC-51 L218–238; SRC-84 L218–284)

## The problem it solves

AI solution development spans discovery, prototyping, code integration, configuration, testing, source control, deployment, and operations. No single surface is best for every step. (SRC-51 L218–238; SRC-90 L234–240) The corpus's practical rule is to choose the surface that matches the work: visual configuration, developer workflow, model inference, Foundry-specific project operations, or a specific prebuilt AI service. (SRC-18 L292–307; SRC-96 L233–234)

## Mental model

Think of the surfaces as layers over the same Foundry assets. The portal and playgrounds help you discover and validate. VS Code and GitHub help you build, version, and deploy. The Foundry SDK manages project-level capabilities. The OpenAI SDK handles compatible model inference. Foundry Tools SDKs and REST APIs call specific AI-service capabilities. (SRC-51 L218–238; SRC-18 L292–307)

## What the sources say

SRC-51 says many tasks can be done directly in the Microsoft Foundry portal, but developers still need to write, test, and deploy code. (SRC-51 L218) It recommends choosing an environment that supports the required languages, SDKs and APIs and fits developer comfort. (SRC-51 L220)

SRC-84 is the direct portal-versus-VS Code comparison for agent development. The portal is a web interface for creating and managing agents without code, fitting quick prototyping, visual configuration, centralized management, collaboration and resource oversight. (SRC-84 L220–231) VS Code fits developers who want familiar editors, application-code integration, Git version control, YAML editing, rapid iteration, local development, and production deployment. (SRC-84 L232–256)

SRC-90 says the Model playground lets developers test prompts, settings, system messages, and models before writing code, then generate code samples by API, language and SDK. (SRC-90 L217–232)

## How it works in Azure

The portal path starts with a Foundry project. Agent creation in the portal uses Build > Agents, model selection, instructions, parameters, playground testing, tool catalog selection, and deployment for SDK or REST access. (SRC-14 L220–246)

The VS Code path uses the Microsoft Foundry extension. It connects to Azure and a Foundry project, displays agents, model deployments, connections, and vector stores, and can save agent changes directly back to Foundry. (SRC-190 L218–268)

The SDK/API path depends on target. The Microsoft Foundry SDK connects to Foundry projects and Foundry-specific assets such as agents and Foundry IQ knowledge stores. (SRC-51 L235–236) The OpenAI API/SDKs build chat applications against compatible Foundry models. (SRC-51 L237) Foundry Tools SDKs and REST APIs consume tool-specific resources. (SRC-51 L238)

## Code and configuration

For chat app development, SRC-18 says the Microsoft Foundry SDK provides project access through REST API and language-specific libraries for Python, .NET and JavaScript. (SRC-18 L223–227) It also says the OpenAI SDK works with OpenAI-hosted models, Azure OpenAI deployments, and Foundry models using the same patterns. (SRC-18 L257–258)

For no-code-to-code iteration, the playground's Code button generates samples that reproduce a chat session, with choices for API, language and SDK and values pre-populated from the project endpoint, deployment name and current settings. (SRC-90 L226–232)

## Decision boundaries

- **Inference:** Choose the Foundry portal when the scenario emphasizes no-code visual work, stakeholder collaboration, quick prototyping, centralized management, or dashboards. (SRC-84 L220–231)
- **Inference:** Choose VS Code when the scenario emphasizes developer-centric workflows, application code, Git, YAML, local iteration, or production deployment. (SRC-84 L232–256; SRC-190 L218–268)
- **Inference:** Choose the Model playground when the scenario asks to test prompts/settings or generate starter code before building the application. (SRC-90 L217–240)
- **Inference:** Choose the Foundry SDK for Foundry-specific project features such as agents, evaluations, tracing, connections and governance; choose the OpenAI SDK for compatible model inference with minimal Foundry-specific dependency. (SRC-18 L292–307)
- **Inference:** Choose a Foundry Tools SDK or REST API for a specific Language, Speech, Translator, Document Intelligence, or Content Understanding capability rather than a general project SDK. (SRC-51 L238; SRC-96 L223–233)

## Failure modes and misconceptions

Do not treat portal and VS Code as separate capability islands. SRC-84 says both support the same typical workflow and differ primarily in interface style. (SRC-84 L258–284)

Do not assume a playground sample is the finished application. SRC-90 frames the sample as a ready-to-use starting point that developers copy and modify, then iterate back through the playground as needed. (SRC-90 L232–240)

Do not choose SDKs by language alone. SRC-18 and SRC-51 distinguish SDKs by target feature layer: project features, model inference, or tool-specific APIs. (SRC-18 L292–307; SRC-51 L235–238)

## Solution Engineering transfer

**Inference:** Customer signal: "Business users need to review the agent before developers wire it into an app" suggests portal/playground first, then VS Code or SDK integration. (SRC-84 L220–256; SRC-90 L234–240)

**Inference:** Customer signal: "We need version-controlled agent configuration beside application code" points to VS Code and Git workflows. (SRC-84 L249–256; SRC-51 L230–231)

## Connections

- [[microsoft-foundry]] — all development surfaces work against Foundry projects and assets.
- [[foundry-toolkit-for-vs-code]] — the VS Code extension surface.
- [[foundry-sdk]] — project-level SDK for Foundry-specific assets.
- [[openai-sdk]] — compatible model-inference SDK.
- [[endpoints-and-sdk-choice]] — endpoint choice determines SDK fit.
- [[model-playgrounds]] — the no-code prompt/model testing surface.
- [[agent-building-options-compared]] — synthesis page for portal/SDK/framework/toolkit options.
- [[src-51-developer-tools-sdks]] — direct source for tools and SDKs.
- [[src-84-explore-development-approaches]] — direct source for portal versus VS Code.
- *Also linked from:* [[overview]]

## Sources

- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — portal agent-building flow.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — SDK and endpoint decision rules.
- SRC-51 — [[src-51-developer-tools-sdks]] — portal, IDE, GitHub and SDK survey.
- SRC-84 — [[src-84-explore-development-approaches]] — portal and VS Code comparison.
- SRC-90 — [[src-90-explore-model-playground]] — playground-to-code workflow.
- SRC-96 — [[src-96-foundry-tools]] — tool-specific SDK and endpoint boundary.
- SRC-155 — [[src-155-microsoft-foundry]] — SDK automation and DevOps pipeline mention.
- SRC-183 — [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — episode comparison of portal, VS Code, REST and SDKs.
- SRC-190 — [[src-190-set-up-visual-studio-code-agent-development]] — VS Code setup and project connection.

## Open questions

- The corpus names GitHub and CI/CD, and SRC-155 says the SDK can automate project operations in DevOps pipelines, but these assigned sources do not provide full CI/CD pipeline implementation steps. (SRC-51 L230–231; SRC-155 L32)



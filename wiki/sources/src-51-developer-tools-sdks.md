---
title: "Developer Tools and SDKs"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Surveys portal, IDE, VS Code Foundry Toolkit, GitHub Copilot, programming languages, APIs, and SDK choices for Azure AI development."
area: platform
source_ids: [SRC-51]
tags: [developer-tools, foundry-toolkit, sdk, openai-api, github-copilot]
aliases: ["SRC-51"]
source_kind: learn-unit
module: "Plan and prepare to develop AI solutions on Azure"
learning_path: "Develop generative AI apps in Azure"
unit: "5 of 9"
presenters: []
raw_file: "51-Developer Tools and SDKs - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/prepare-azure-ai-development/5-tools-and-sdks"
ingest_depth: full
---
# Developer Tools and SDKs
*learn-unit · Plan and prepare to develop AI solutions on Azure · unit 5 of 9 · SRC-51*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-51 |
| Raw file | 51-Developer Tools and SDKs - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Plan and prepare to develop AI solutions on Azure |
| Unit / episode | 5 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/prepare-azure-ai-development/5-tools-and-sdks |
| Teaching content | L212–238 of 268 |
| Content length | ~470 words |
| Capture quality | High; Learn unit has clear tool and SDK bullets. |
| Ingest depth | full |

## TL;DR
The source says the Foundry portal can handle many AI development tasks, but developers still need to write, test, and deploy code. (SRC-51 L218) Tool choice should match required languages, SDKs, APIs, and developer comfort. (SRC-51 L220) It highlights Visual Studio, VS Code, the Foundry Toolkit extension, GitHub/GitHub Copilot, the Microsoft Foundry SDK, OpenAI API/SDKs, and Foundry Tools SDKs or REST APIs. (SRC-51 L220–238)

## Key claims
- Developers can perform many tasks in the Microsoft Foundry portal, but code is still required for writing, testing, and deployment. (SRC-51 L218)
- Developers should choose an environment that supports the languages, SDKs, and APIs they need and that fits their comfort. (SRC-51 L220)
- Visual Studio and VS Code are both suitable for Azure AI application development. (SRC-51 L220)
- The Foundry Toolkit extension for VS Code simplifies workflow tasks such as browsing resources, deploying models, testing in playgrounds, configuring agents, and generating integration code. (SRC-51 L221–227)
- GitHub supports source control and DevOps, while Visual Studio and VS Code integrate with GitHub and GitHub Copilot. (SRC-51 L230–231)
- Azure AI applications can be developed using C#, Python, Node, TypeScript, Java, and other languages. (SRC-51 L234–235)
- The Microsoft Foundry SDK, OpenAI API/SDKs, and Foundry Tools SDKs/REST APIs are named as common APIs and SDKs to plan for. (SRC-51 L235–238)

## How it works
The unit separates development surfaces by job. The portal supports direct project work, IDEs/editors support code, the VS Code Foundry Toolkit supports project-resource browsing and agent/model workflow tasks, GitHub supports source control and DevOps, and SDK/API choices map to project assets, Foundry models, or Foundry Tools. (SRC-51 L218–238)

## Code and API patterns
The Microsoft Foundry SDK connects to Microsoft Foundry projects and accesses Foundry-specific assets such as agents and Foundry IQ knowledge stores. (SRC-51 L235–236) The OpenAI API enables OpenAI SDKs for chat applications based on Foundry models that support OpenAI syntax. (SRC-51 L237) Foundry Tools SDKs are AI-service-specific libraries, and Foundry Tools can also be consumed through REST APIs. (SRC-51 L238)

## Key terms
- Foundry Toolkit extension for Visual Studio Code: A VS Code extension that simplifies working with Foundry project resources, deployments, playgrounds, agents, and integration code. (SRC-51 L221–227)
- Microsoft Foundry SDK: SDK used to connect to Foundry projects and access Foundry-specific assets. (SRC-51 L235–236)
- OpenAI API: API surface used with OpenAI SDKs for chat applications over compatible Foundry models. (SRC-51 L237)
- Foundry Tools SDKs: AI-service-specific libraries for consuming Foundry Tools resources. (SRC-51 L238)

## Decision boundaries and exam cues
- **Inference:** If the task is configuring, browsing, testing, or generating integration code for Foundry resources in VS Code, the Foundry Toolkit is the tool named by the source. (SRC-51 L221–227)
- **Inference:** If the task is accessing agents or Foundry IQ knowledge stores through project assets, the Microsoft Foundry SDK is the relevant SDK named here. (SRC-51 L235–236)
- **Inference:** If the task is a chat application against a Foundry model that supports OpenAI syntax, the OpenAI API/SDKs are relevant. (SRC-51 L237)
- **Inference:** If the task consumes a specific Foundry Tool, choose that tool's SDK or REST API. (SRC-51 L238)

## Assessment items
Not covered by this source. (SRC-51 L218–238)

## Tensions, caveats and currency
- The source names the Foundry Toolkit extension; the matching episode says the recommendation in its spoken knowledge check is the Microsoft AI Toolkit, creating a naming/tooling drift to preserve. (SRC-51 L221–227; SRC-183 L928–934)
- The source itself has a duplicated word in the line `The The OpenAI API`; the intended API name remains clear from the surrounding line. (SRC-51 L237)

## Relation to other sources
- SRC-155 introduces the Foundry portal and SDK; this unit expands the developer tooling and SDK surface. ([[src-155-microsoft-foundry]]; SRC-155 L13; SRC-51 L218–238)
- SRC-183 demonstrates installing AI Toolkit and Foundry extensions in VS Code and then discusses REST, OpenAI SDK, Foundry SDK, and tool-specific SDKs. ([[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]]; SRC-183 L381–513)
- SRC-162 assesses the VS Code extension choice, but its option is Foundry Toolkit for Visual Studio Code. ([[src-162-module-assessment-plan-prepare-develop-ai-solutions-azure]]; SRC-162 L223–227)

## Connections
- [[development-tools-and-approaches]] — this unit compares portal, IDE/editor, source control, DevOps, APIs, and SDKs. (SRC-51 L218–238)
- [[foundry-toolkit-for-vs-code]] — the extension is a central tool in this source. (SRC-51 L221–227)
- [[foundry-sdk]] — the SDK is named for Foundry project assets. (SRC-51 L235–236)
- [[openai-sdk]] — OpenAI SDKs are used through the OpenAI API for compatible chat apps. (SRC-51 L237)
- [[endpoints-and-sdk-choice]] — the source gives SDK choice by asset type. (SRC-51 L235–238)
- [[naming-and-currency]] — Foundry Toolkit versus Microsoft AI Toolkit appears as a currency issue across sources. (SRC-51 L221–227; SRC-183 L928–934)

## Open questions
- The source does not provide package names, code samples, authentication setup, or endpoint formats for these SDKs. (SRC-51 L235–238)

## Sources
- SRC-51 — raw file: [[51-Developer Tools and SDKs - Training - Microsoft Learn]]

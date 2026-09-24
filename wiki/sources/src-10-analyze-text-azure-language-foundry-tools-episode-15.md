---
title: "Analyze text with Azure Language in Foundry Tools - AI-103 - Episode 15"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of Azure Language text analysis, including why to use focused Foundry Tools, Foundry setup, and Python Text Analytics calls."
area: language
source_ids: [SRC-10]
objectives: [P01, T01, T02]
tags: [episode, azure-language, foundry-tools, text-analytics, python, pii, named-entity-recognition, language-detection]
aliases: ["SRC-10"]
source_kind: episode
module: "Analyze text with Azure Language in Foundry Tools"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "10-Analyze text with Azure Language in Foundry Tools - AI-103 - Episode 15.md"
url: "https://www.youtube.com/watch?v=-Ln7aW38gxI"
ingest_depth: full
---

# Analyze text with Azure Language in Foundry Tools - AI-103 - Episode 15

*episode · Analyze text with Azure Language in Foundry Tools · SRC-10*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-10 |
| Raw file | 10-Analyze text with Azure Language in Foundry Tools - AI-103 - Episode 15.md |
| Kind | episode |
| Learning path | None |
| Module | Analyze text with Azure Language in Foundry Tools |
| Unit / episode | Episode 15 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=-Ln7aW38gxI |
| Teaching content | L3–863 of 863 |
| Content length | ~3,800 words |
| Capture quality | Medium; transcript is auto-captioned and includes editor notes and a mistaken model-deployment branch. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod introduces Learning Path 3 as the path for language and speech capabilities that let apps and agents read, listen, speak, translate, and connect those capabilities to existing apps and agents. (SRC-10 L13–40) The episode contrasts focused Foundry Tools with large language models: Foundry Tools may be cheaper per document, more deterministic, and faster for some scenarios. (SRC-10 L103–176) The lab builds a Foundry project, configures the resource endpoint, authenticates with `DefaultAzureCredential`, creates a Text Analytics client, and calls language detection, entity recognition, and PII recognition/redaction methods. (SRC-10 L415–624; SRC-10 L672–716)

## Key claims

- Learning Path 3 covers language and speech capabilities, including language analysis, the language MCP server, multimodal audio chat apps, speech-to-text, text-to-speech, and translation. (SRC-10 L15–30)
- The path aims to help learners build solutions that read, listen, speak, translate, and plug those capabilities into apps and agents. (SRC-10 L31–38)
- Before apps can summarize documents or route support tickets, they need to understand the language, what the text mentions, and whether sensitive information is present. (SRC-10 L41–52)
- The session starts by provisioning a language resource and then walks through language detection, named entity extraction, and identifying personal information. (SRC-10 L53–62)
- Natural language processing and computer speech systems predate large language models. (SRC-10 L73–86)
- Large language models can translate and attempt to identify PII, creating a choice between Foundry Tools and LLMs. (SRC-10 L87–104)
- The presenter says the choice between Foundry Tools and large language models depends on the scenario. (SRC-10 L94–104)
- Foundry Tools may be cheaper per document for large volumes because LLMs are general-purpose and token-billed. (SRC-10 L105–129)
- Foundry Tools are described as deterministic, while LLMs can return different results because of inherent randomness. (SRC-10 L130–164)
- Focused tools may also be faster because large language models can have longer time to first token. (SRC-10 L165–176)
- The episode focuses on three prebuilt models: language detection, named entity recognition, and PII extraction/redaction. (SRC-10 L177–192; SRC-10 L242–263)
- Language detection in Azure language tools is described as more focused and having a greater collection of known languages than many large language models. (SRC-10 L193–211)
- Named entity recognition extracts names, things, and ideas such as John Smith, Contoso Bank, and Seattle for tagging or indexing. (SRC-10 L212–241)
- PII extraction and redaction can be used as a cleanup step before importing documents when privacy concerns require removing personally identifiable information. (SRC-10 L242–256)
- The Text Analytics API uses a client specifically for text analytics. (SRC-10 L264–278)
- The typical endpoint for this tool is the Foundry resource endpoint in the form `{foundry resource}.services.ai.azure.com/`. (SRC-10 L279–293)
- The client receives an endpoint and credentials, and then methods can be invoked on documents. (SRC-10 L295–320)
- The demo does not require deploying a model for this text-analysis lab. (SRC-10 L476–493)
- The demo uses the AI Toolkit to select a Foundry project and get the project endpoint. (SRC-10 L497–514)
- For the code, only the resource portion of the endpoint is needed, not the project path. (SRC-10 L515–531)
- The Python example imports `DefaultAzureCredential` from `azure.identity`. (SRC-10 L579–586)
- `DefaultAzureCredential` is described as a chained token credential that tries multiple token sources until one succeeds. (SRC-10 L587–593)
- The demo authenticates through Azure CLI login, and future Text Analytics client use authenticates as the signed-in user. (SRC-10 L594–604; SRC-10 L634–649)
- The AI client is built by passing in the Foundry endpoint and credentials. (SRC-10 L619–624)
- The demo calls `detect-language`, `recognize_entities`, and `recognize_pii_entities`. (SRC-10 L672–716)
- The run detects English, finds entity categories such as locations, products, and email, and returns PII entities plus redaction. (SRC-10 L756–772)
- The example does not invoke a large language model. (SRC-10 L773–784)
- Deploying a Foundry project gives access to these Foundry Tools alongside models and supports single-project provisioning. (SRC-10 L811–831)
- The SDK Text Analytics client gives API access by combining an endpoint and credential, and the client can work per document or in batch. (SRC-10 L832–842)

## How it works

The episode frames Azure Language as a focused text-analysis layer for apps and agents. (SRC-10 L41–63) The presenter first explains why a developer might choose a prebuilt Foundry Tool rather than an LLM for some text tasks: cost, determinism, and speed. (SRC-10 L103–176) **Inference:** This is a model-selection boundary: if the needed output is one of the focused text-analysis outputs, the episode encourages considering the prebuilt tool before defaulting to an LLM. (SRC-10 L103–176; SRC-10 L811–821)

The capability set is three prebuilt text models accessed through one client: language detection, named entity recognition, and PII extraction/redaction. (SRC-10 L177–192; SRC-10 L242–263) Language detection identifies text language; named entity recognition extracts items such as people, organizations, and places for tagging or indexing; PII extraction/redaction finds and hides privacy-sensitive data. (SRC-10 L193–256)

The lab implementation starts with local setup: clone exercise files, navigate to the `analyze_text` Python folder, use Python 3.13, create and activate a virtual environment, and install dependencies from requirements. (SRC-10 L329–413) It then creates a Foundry project and resource, retrieves endpoint information, and configures the environment with the resource endpoint rather than the full project endpoint path. (SRC-10 L415–531) The mistaken model-deployment detour is explicitly corrected in the transcript: no model deployment is needed for this lab. (SRC-10 L476–493)

In code, the demo imports `DefaultAzureCredential` and the Text Analytics client, logs in with Azure CLI, constructs the client with endpoint and credentials, and then calls methods over review text. (SRC-10 L579–649; SRC-10 L661–716) The run prints detected language, extracted entity categories, PII entities, and redacted text. (SRC-10 L747–772)

## Code and API patterns

The transcript describes code rather than preserving full snippets. (SRC-10 L575–716)

- Credential import: `DefaultAzureCredential` comes from `azure.identity`. (SRC-10 L579–586)
- Credential behavior: `DefaultAzureCredential` tries multiple token sources until one succeeds. (SRC-10 L587–593)
- Login source: the demo uses Azure CLI `az login` as the token source. (SRC-10 L594–604; SRC-10 L634–645)
- Client purpose: the Text Analytics client provides access to Azure Language text-analysis components. (SRC-10 L606–612)
- Client construction: pass the Foundry endpoint and credentials into the AI client. (SRC-10 L619–624)
- Endpoint nuance: for this example, the code needs the resource endpoint portion rather than the project path. (SRC-10 L515–531)
- Language detection call: the demo calls `detect-language`, passes a document argument containing review text, and reads `primary-language.name`. (SRC-10 L672–682)
- Entity recognition call: the demo calls `recognize_entities` and prints each entity's text and category. (SRC-10 L688–695)
- PII call: the demo calls `recognize_pii_entities`, prints entity text and category, and shows a redacted-text version. (SRC-10 L702–716)
- Execution: running `python text-analysis.py` after authentication produces language, entity, PII, and redaction output. (SRC-10 L740–772)

## Segment guide

- **Learning path orientation** — Rob introduces Learning Path 3 and the broader language/speech sequence: language analysis, Language MCP server, audio chat, speech, and translation. (SRC-10 L3–40)
- **Problem framing for text understanding** — The episode frames language, mentions, and sensitive information as prerequisites for conversations, summarization, and support-ticket routing. (SRC-10 L41–63)
- **Foundry Tools versus LLMs** — The presenter explains why focused tools can be preferable to LLMs for cost, deterministic output, and speed. (SRC-10 L64–176)
- **Three prebuilt Azure Language capabilities** — The talk introduces language detection, named entity recognition, and PII extraction/redaction. (SRC-10 L177–263)
- **Text Analytics client and endpoint model** — The episode explains using a Text Analytics API client with Foundry resource endpoint and credentials. (SRC-10 L264–328)
- **Local lab setup** — The demo clones lab files, enters the `analyze_text` Python folder, uses Python 3.13, creates a virtual environment, activates it, and installs requirements. (SRC-10 L329–413)
- **Foundry project setup** — The demo creates a Foundry project/resource and obtains endpoint information, with an editor note that no model deployment is needed. (SRC-10 L415–493)
- **Endpoint configuration and recap** — The demo uses AI Toolkit to select the project, obtain the project endpoint, and keep only the resource endpoint for the code. (SRC-10 L494–563)
- **Python client assembly** — The demo imports `DefaultAzureCredential`, explains Azure CLI authentication, and constructs the Text Analytics client with endpoint and credentials. (SRC-10 L564–649)
- **Method calls over reviews** — The demo reads review text, calls language detection, entity recognition, and PII recognition/redaction. (SRC-10 L650–716)
- **Run and observe outputs** — The script detects English, extracts entity categories, identifies PII, and shows redaction. (SRC-10 L717–786)
- **Assessment review and wrap-up** — The presenter answers the module scenarios and restates that focused prebuilt tools are available alongside models in a Foundry project. (SRC-10 L787–863)

## Key terms

- **Foundry Tools** — focused, prebuilt tools contrasted with general-purpose LLMs for some language tasks. (SRC-10 L94–104; SRC-10 L811–821)
- **Language detection** — a prebuilt model for identifying language, described as focused and having a large collection of known languages. (SRC-10 L193–211)
- **Named entity recognition** — the capability for extracting names, things, and ideas from a document, such as people, organizations, and places. (SRC-10 L212–241)
- **PII extraction/redaction** — identifying and removing personally identifiable information as a cleanup step for privacy-sensitive import processes. (SRC-10 L242–256)
- **Text Analytics client** — the client used to access the text-analysis API. (SRC-10 L264–278; SRC-10 L606–612)
- **DefaultAzureCredential** — a chained token credential that tries different token sources until one succeeds. (SRC-10 L579–593)

## Decision boundaries and exam cues

- **Inference:** Choose Azure Language / Foundry Tools over an LLM when the task is a focused text-analysis task and the scenario values cost, deterministic output, or speed. (SRC-10 L103–176; SRC-10 L811–821)
- **Inference:** Choose language detection when the key requirement is identifying the language of text. (SRC-10 L193–211; SRC-40 L217–220)
- **Inference:** Choose named entity recognition when the key requirement is extracting people, organizations, places, or other categorized entities for tagging or indexing. (SRC-10 L212–241; SRC-10 L787–798)
- **Inference:** Choose PII extraction/redaction when the key requirement is removing personal details before import or publication. (SRC-10 L242–256; SRC-10 L799–810)
- **Inference:** Do not deploy a generative model just to run this text-analysis lab; the transcript explicitly corrects that detour. (SRC-10 L476–493)
- **Inference:** If a code question shows endpoint plus credential going into a Text Analytics client, it aligns with this Azure Language pattern. (SRC-10 L619–624; SRC-10 L832–839)

## Assessment items

1. **Question:** How should you create an application that analyzes news articles and extracts key people, places, and dates that are mentioned for indexing? (SRC-10 L787–794)
   - **Answer shown in episode:** Use Azure Language in Foundry Tools to extract named entities. (SRC-10 L795–798)

2. **Question:** You want to publish extracts from customer testimonials on a website and need to remove personal details from the text before publishing. (SRC-10 L799–805)
   - **Answer shown in episode:** Use Azure Language in Foundry Tools to find and redact the PII. (SRC-10 L806–810)

## Tensions, caveats and currency

- The transcript uses Azure AI Language service, Azure language tools, and Foundry Tools language naming in close proximity, which should be normalized only with care. (SRC-10 L51–52; SRC-10 L201–203; SRC-10 L811–823)
- The transcript includes an editor note correcting an attempted model-deployment step; no model deployment is required for this lab. (SRC-10 L476–493)
- The transcript is auto-captioned and includes minor wording artifacts such as `ai-client.detect-language`, so method names should be checked against SDK documentation before copying into production code. (SRC-10 L672–682)
- **Stale-risk:** The lab environment mentions Python 3.13 as current at recording time, which may change with lab dependencies. (SRC-10 L373–376)

## Relation to other sources

- [[src-127-introduction-analyze-text-azure-language-foundry-tools]] introduces the same module and SDK framing at Learn-unit level. (SRC-127 L215–220; SRC-10 L41–63)
- [[src-12-azure-language-microsoft-foundry-tools]] provides the Foundry resource, endpoint, REST/SDK, and authentication details that the episode demonstrates. (SRC-12 L223–237; SRC-10 L264–320)
- [[src-40-detect-language]] provides the detailed Learn-unit behavior for language detection, which the episode demonstrates in code. (SRC-40 L217–229; SRC-10 L672–682)
- [[src-93-extract-entities]] provides the Learn-unit definition of named entity recognition, which the episode demonstrates with `recognize_entities`. (SRC-93 L217–230; SRC-10 L688–695)
- [[src-94-extract-personally-identifiable-information-pii]] provides the Learn-unit PII behavior, which the episode demonstrates with `recognize_pii_entities` and redaction. (SRC-94 L217–225; SRC-10 L702–716)
- [[src-168-module-assessment-analyze-text-azure-language-foundry-tools]] contains the same two assessment prompts reviewed in the episode. (SRC-168 L213–221; SRC-10 L787–810)

## Connections

- [[azure-language]] — the episode demonstrates Azure Language text-analysis capabilities. (SRC-10 L51–63)
- [[foundry-tools]] — the presenter contrasts Foundry Tools with LLMs. (SRC-10 L94–104; SRC-10 L811–823)
- [[language-detection]] — one of the three lab calls. (SRC-10 L672–682)
- [[named-entity-recognition]] — one of the three lab calls. (SRC-10 L688–695)
- [[pii-detection-and-redaction]] — one of the three lab calls. (SRC-10 L702–716)
- [[model-selection]] — the episode gives criteria for choosing focused tools versus LLMs. (SRC-10 L103–176)
- [[keyless-authentication]] — the demo uses `DefaultAzureCredential` and Azure CLI login. (SRC-10 L579–604; SRC-10 L634–649)
- [[speech-and-language-options-compared]] — the episode opens the natural language learning path that spans language, speech, and translation. (SRC-10 L15–38)
- *Module units:* [[src-127-introduction-analyze-text-azure-language-foundry-tools|1 Introduction]] · [[src-12-azure-language-microsoft-foundry-tools|2 Azure Language in Microsoft Foundry Tools]] · [[src-40-detect-language|3 Detect language]] · [[src-93-extract-entities|6 Extract entities]] · [[src-94-extract-personally-identifiable-information-pii|7 Extract personally identifiable information (PII)]] · [[src-56-exercise-analyze-text|8 Exercise - Analyze text]] · [[src-168-module-assessment-analyze-text-azure-language-foundry-tools|9 Module assessment]] · [[src-206-summary-analyze-text-azure-language-foundry-tools|10 Summary]]

## Open questions

- The transcript does not preserve full code snippets, package names, or exact constructor signatures. (SRC-10 L575–716)
- The presenter says Azure language tools inside Foundry have a greater collection of known languages than many LLMs, but the transcript does not quantify supported languages. (SRC-10 L193–211)
- The transcript does not specify exact permissions needed for the Azure CLI identity. (SRC-10 L594–604; SRC-10 L634–649)

## Sources

- SRC-10 — raw file: [[10-Analyze text with Azure Language in Foundry Tools - AI-103 - Episode 15]]

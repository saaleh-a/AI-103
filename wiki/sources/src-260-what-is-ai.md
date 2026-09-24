---
title: "What is AI-"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines AI in this module and lists common application capabilities: generative AI, NLP, speech, vision, and extraction."
area: models
source_ids: [SRC-260]
tags: [ai-capabilities, generative-ai, speech, vision, information-extraction]
aliases: ["SRC-260"]
source_kind: learn-unit
module: "Plan and prepare to develop AI solutions on Azure"
learning_path: "Develop generative AI apps in Azure"
unit: "2 of 9"
presenters: []
raw_file: "260-What is AI- - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/prepare-azure-ai-development/2-what-is-ai"
ingest_depth: full
---
# What is AI-
*learn-unit · Plan and prepare to develop AI solutions on Azure · unit 2 of 9 · SRC-260*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-260 |
| Raw file | 260-What is AI- - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Plan and prepare to develop AI solutions on Azure |
| Unit / episode | 2 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/prepare-azure-ai-development/2-what-is-ai |
| Teaching content | L212–233 of 263 |
| Content length | ~580 words |
| Capture quality | High; Learn unit includes a capability table. |
| Ingest depth | full |

## TL;DR
The source defines AI broadly as software capabilities that let applications exhibit human-like behavior. (SRC-260 L218) It says current AI solutions are built on machine learning models that capture semantic relationships in large datasets, letting applications interpret input, reason over it, and generate responses or predictions. (SRC-260 L218) It then groups application capabilities into generative AI and agents, natural language processing, computer speech, computer vision, and information extraction. (SRC-260 L219–232)

## Key claims
- AI covers a wide range of capabilities that enable applications to exhibit human-like behavior, and the definition has shifted as technologies and use cases evolved. (SRC-260 L218)
- Modern AI solutions are built on machine learning models that encapsulate semantic relationships found in huge quantities of data. (SRC-260 L218)
- Generative AI is based on LLMs that generate original responses to natural language prompts. (SRC-260 L223–224)
- AI agents combine LLMs with focused instructions, task responsibilities, and tools for knowledge lookup and task automation. (SRC-260 L224)
- NLP uses statistical and semantic models to make sense of language, and specialised text analysis can still benefit from term-frequency algorithms and task-specific models. (SRC-260 L225–226)
- Speech, vision, and information extraction are distinct capability areas that may be integrated into applications and agents. (SRC-260 L227–232)

## How it works
The source's mechanism is capability-led: first decide what the application must do, then identify the AI services to provision, configure, and use. (SRC-260 L219–233) Generative AI handles natural-language prompted generation, and agents add instructions plus tools for responsibility and action. (SRC-260 L223–224) NLP remains relevant for specialized text analysis even when many NLP tasks can be done by generative AI LLMs. (SRC-260 L225–226) Speech enables voice input and spoken output, vision enables image/video/live-stream interpretation and generation, and extraction combines language reasoning, document understanding, vision, and speech to pull structured information from content. (SRC-260 L227–232)

## Code and API patterns
Not covered by this source's teaching content. (SRC-260 L218–233)

## Key terms
- Artificial Intelligence: Software capabilities enabling applications to exhibit human-like behavior. (SRC-260 L218)
- Generative AI: LLM-based generation of original responses to natural language prompts. (SRC-260 L223–224)
- Agentic AI: Generative AI solutions where agents combine LLMs, instructions, responsibilities, and tools. (SRC-260 L224)
- Natural language processing: Statistical and semantic modelling over text sources such as documents, email, and social media. (SRC-260 L225–226)
- Information extraction: Combining generative AI, document understanding, vision, and speech to extract key information from content. (SRC-260 L231–232)

## Decision boundaries and exam cues
- **Inference:** If the requirement is interactive chat or AI-assisted content creation, the source's closest capability is generative AI. (SRC-260 L223–224)
- **Inference:** If the requirement is entity extraction, sentiment analysis, classification, or summarization from text, the source preserves NLP as a relevant specialised area rather than assuming all text tasks must use a general LLM. (SRC-260 L225–226)
- **Inference:** If the requirement is voice input/output, choose a speech capability; if it is visual input/output, choose a vision capability; if it is structured data from documents, forms, recordings, or images, choose information extraction. (SRC-260 L227–232)

## Assessment items
Not covered by this source. (SRC-260 L218–233)

## Tensions, caveats and currency
- The source says the definition of AI has varied as technology and use cases have evolved, so the capability taxonomy is a planning aid rather than a timeless definition. (SRC-260 L218)
- The source notes overlap: many common NLP tasks can now be performed by generative AI LLMs, but specialised NLP techniques still have a role. (SRC-260 L225–226)

## Relation to other sources
- SRC-96 maps several capability areas from this source to Foundry Tools such as Azure Language, Speech, Translator, Document Intelligence, and Content Understanding. ([[src-96-foundry-tools]]; SRC-96 L218–236)
- SRC-155 places models, agents, tools, and knowledge inside a Foundry project architecture. ([[src-155-microsoft-foundry]]; SRC-155 L15–22)
- SRC-183 gives a course-level scenario that combines voice, grounded policy search, internal APIs, governance, and safety. ([[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]]; SRC-183 L4–29)

## Connections
- [[generative-ai-fundamentals]] — this source defines generative AI and LLM-based responses. (SRC-260 L223–224)
- [[ai-agents]] — this source explains the LLM, instruction, and tool structure of agentic AI. (SRC-260 L224)
- [[azure-language]] — NLP and text analysis are one capability area. (SRC-260 L225–226)
- [[azure-speech]] — speech recognition and synthesis are a separate capability area. (SRC-260 L227–228)
- [[vision-enabled-chat]] — computer vision handles visual input and multimodal models can generate visual output. (SRC-260 L229–230)
- [[extraction-options-compared]] — information extraction combines several modalities and techniques. (SRC-260 L231–232)

## Open questions
- The source does not map each capability to a specific Azure service; that mapping begins in the Foundry Tools unit. (SRC-260 L219–233; SRC-96 L223–232)

## Sources
- SRC-260 — raw file: [[260-What is AI- - Training - Microsoft Learn]]

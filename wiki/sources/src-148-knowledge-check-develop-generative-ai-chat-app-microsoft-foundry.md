---
title: "Knowledge check — Develop a generative AI chat app with Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Knowledge-check questions on endpoint choice, the Python Foundry SDK package and the Responses API method."
area: exam
source_ids: [SRC-148]
objectives: []
tags: [knowledge-check, endpoints, foundry-sdk, responses-api]
aliases: ["SRC-148"]
source_kind: learn-unit
module: "Develop a generative AI chat app with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "7 of 8"
presenters: []
raw_file: "148-Knowledge check - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/07-knowledge-check"
ingest_depth: full
---
# Knowledge check — Develop a generative AI chat app with Microsoft Foundry

*learn-unit · Develop a generative AI chat app with Microsoft Foundry · unit 7 of 8 · SRC-148*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-148 |
| Raw file | 148-Knowledge check - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop a generative AI chat app with Microsoft Foundry |
| Unit / episode | 7 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/07-knowledge-check |
| Teaching content | L211–233 of 263 |
| Content length | ~120 words |
| Capture quality | High; answers are not shown in the Learn capture. |
| Ingest depth | full |

## TL;DR

The Learn capture contains three knowledge-check questions, but it does not show checked answers. (SRC-148 L215–233) The questions test endpoint choice, the Python package for the Foundry SDK and the method used with the Responses API. (SRC-148 L216–230)

## Key claims

- The first question asks which endpoint offers the broadest support for OpenAI APIs with Foundry Models. (SRC-148 L216–220)
- The second question asks which package is required for the Microsoft Foundry SDK in Python. (SRC-148 L221–225)
- The third question asks which method generates responses with the Responses API. (SRC-148 L226–230)
- The capture says all questions must be answered before checking work. (SRC-148 L231–233)

## How it works

This source is assessment content, not teaching content. (SRC-148 L215–233)

## Code and API patterns

The assessment options include `client.chat.completions.create()`, `client.get_response_id()` and `client.responses.create()` as possible method choices. (SRC-148 L226–230)

## Key terms

- **Azure OpenAI endpoint:** One of the endpoint options in the first question. (SRC-148 L216–220)
- **`azure-ai-projects`:** One of the package options in the second question. (SRC-148 L221–225)
- **`client.responses.create()`:** One of the method options in the third question. (SRC-148 L226–230)

## Decision boundaries and exam cues

- **Inference:** The question set mirrors the module's main decisions: endpoint, SDK package and response-generation API. (SRC-148 L216–230)
- **Inference:** The matching episode states the intended answers: Azure OpenAI endpoint, AI Projects package and `responses.create`. (SRC-42 L997–1021)

## Assessment items

1. Which endpoint offers the broadest support for OpenAI APIs with Foundry Models? Options: The Foundry project endpoint; The Azure OpenAI endpoint; The Foundry Tools endpoint. Answer not shown in the Learn capture. (SRC-148 L216–220)
2. Which package must you install to use the Microsoft Foundry SDK in Python? Options: `azure-foundry`; `azure-ai-projects`; `microsoft-foundry-sdk`. Answer not shown in the Learn capture. (SRC-148 L221–225)
3. Which method do you use to generate responses with the Responses API? Options: `client.chat.completions.create()`; `client.get_response_id()`; `client.responses.create()`. Answer not shown in the Learn capture. (SRC-148 L226–230)

## Tensions, caveats and currency

- The Learn capture lists options but does not show the checked answers. (SRC-148 L231–233)
- The matching episode gives answer commentary, but that commentary is from a video transcript rather than the Learn knowledge-check page. (SRC-42 L997–1021)

## Relation to other sources

- [[src-18-choose-endpoint-sdk]] teaches the endpoint and package facts assessed here. (SRC-18 L217–231)
- [[src-99-generate-responses-responses-api-foundry-sdk]] teaches the Responses API method assessed here. (SRC-99 L226–230)
- [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3]] provides spoken answers for the same knowledge-check items. (SRC-42 L997–1021)

## Connections

- [[ai-103-exam]] — this is an assessment-style source. (SRC-148 L215–233)
- [[endpoints-and-sdk-choice]] — the questions test endpoint and package selection. (SRC-148 L216–225)
- [[responses-api]] — the third question tests the Responses API method. (SRC-148 L226–230)
- [[foundry-sdk]] — the second question tests the Foundry SDK package. (SRC-148 L221–225)

## Open questions

- The raw Learn capture does not reveal the correct answers after submission. (SRC-148 L231–233)

## Sources

- SRC-148 — raw file: [[148-Knowledge check - Training - Microsoft Learn]]

---
title: "Optimize generative AI model performance with Microsoft Foundry - AI-103 - Episode 5"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough comparing prompt engineering, RAG, and fine-tuning, including a Foundry fine-tuning demo."
area: models
source_ids: [SRC-177]
objectives: [G02, G13, T04]
tags: [episode, model-optimization, prompt-engineering, rag, fine-tuning]
aliases: ["SRC-177"]
source_kind: episode
module: "Optimize generative AI model performance with Microsoft Foundry"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "177-Optimize generative AI model performance with Microsoft Foundry - AI-103 - Episode 5.md"
url: "https://www.youtube.com/watch?v=Ocx76q4p9ME"
ingest_depth: full
---
# Optimize generative AI model performance with Microsoft Foundry - AI-103 - Episode 5

*episode · Optimize generative AI model performance with Microsoft Foundry · SRC-177*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-177 |
| Raw file | 177-Optimize generative AI model performance with Microsoft Foundry - AI-103 - Episode 5.md |
| Kind | episode |
| Learning path | null |
| Module | Optimize generative AI model performance with Microsoft Foundry |
| Unit / episode | Episode 5 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=Ocx76q4p9ME |
| Teaching content | L3–853 of 853 |
| Content length | ~3853 words |
| Capture quality | Medium; auto-captioned episode transcript |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames model performance as output quality, relevance, fluency, and groundedness that must fit the application at hand. (SRC-177 L4–23)
The episode distinguishes two common failures: missing contextual knowledge and mismatched style or format, then maps them to prompt engineering, RAG, fine-tuning, and combinations. (SRC-177 L36–72; SRC-177 L189–222)
A portal demo starts with prompt instructions for a travel assistant, then fine-tunes GPT 4.1 in a suitable region with JSONL examples and compares the tuned output to the base behavior. (SRC-177 L455–780)

## Key claims

- Model performance is tied to quality, relevance, fluency, groundedness, and fit to the application. (SRC-177 L13–23)
- Prompt engineering is presented as the cheapest, most straightforward, most accessible, and first approach. (SRC-177 L73–109)
- RAG is used when prompts cannot contain all required knowledge and the model needs to know more from documents. (SRC-177 L110–150)
- Fine-tuning is used when behavior, output, tone, or format needs to change and prompts are not enough. (SRC-177 L151–195)
- Fine-tuning can be time-consuming, expensive, tied to a tuned model, and repeated when behavior or training data needs change. (SRC-177 L169–188; SRC-177 L401–454)
- RAG and fine-tuning are often combined when a fine-tuned model still needs external knowledge. (SRC-177 L196–215)
- In the demo, the fine-tuning model must be fine-tunable and deployed in a region that supports fine-tuning. (SRC-177 L582–607)
- The demo uses supervised training with JSONL data, while DPO is shown as another supported customization method and reinforcement is not available for that shown model. (SRC-177 L618–651)
- The tuned model changes behavior rather than what the model knows. (SRC-177 L747–780)

## How it works

The episode first splits optimization failures into knowledge problems and behavior/format problems. (SRC-177 L36–72)
Prompt engineering adjusts instructions such as tone, engaging questions, excluded topics, role, and output format. (SRC-177 L73–109; SRC-177 L223–308)
RAG pauses before the model call, vectorizes the user's input, retrieves similar document segments, and sends both user input and retrieved results to the model as a larger enhanced prompt. (SRC-177 L318–364)
Fine-tuning takes a base model and repeated prompt/response examples, trains until responses better match the desired behavior, and then requires deployment before use. (SRC-177 L365–419)
The demo compares a base GPT 4.1 model, a lightly instructed travel assistant, stronger system instructions, and then a fine-tuned model trained on stylistic examples. (SRC-177 L474–580; SRC-177 L671–780)

## Segment guide

- L3–35 — Welcome and performance frame: optimize Foundry models for quality, relevance, fluency, groundedness, and application fit. (SRC-177 L3–35)
- L36–72 — Two failure types: missing contextual knowledge versus wrong style or format. (SRC-177 L36–72)
- L73–109 — Prompt engineering: first, cheapest, most accessible instruction-based approach. (SRC-177 L73–109)
- L110–150 — RAG motivation: prompts cannot contain pages of policies, so retrieve document knowledge before model invocation. (SRC-177 L110–150)
- L151–222 — Fine-tuning and combinations: tune behavior with cost and maintenance trade-offs, and combine with RAG when needed. (SRC-177 L151–222)
- L223–308 — Prompt patterns: travel-advisor instructions, format templates, chain-of-thought/decomposition, and few-shot examples. (SRC-177 L223–308)
- L309–364 — RAG flow: vectorize user input, retrieve similar documents, and augment the prompt sent to the model. (SRC-177 L309–364)
- L365–454 — Fine-tuning flow: prompt/response examples, possible synthetic data, team review, training, deployment, and retraining. (SRC-177 L365–454)
- L455–580 — Demo setup: prompt in the portal, GPT 4.1 base model, and travel-assistant instructions with limitations. (SRC-177 L455–580)
- L582–651 — Fine-tuning prerequisites and method selection: region support, model choice, supervised/DPO/reinforcement options. (SRC-177 L582–651)
- L652–780 — Training data and tuned-output comparison: JSONL examples, developer deployment, waiting for training, and changed travel-assistant style. (SRC-177 L652–780)
- L781–853 — Review and exam-style recap: system message, RAG, fine-tuning, and when to use each. (SRC-177 L781–853)

## Code and API patterns

The episode does not show SDK code, but it does describe JSONL fine-tuning data where a standard system prompt, user content, and assistant response are included in each example. (SRC-177 L661–704)
The demo describes a portal fine-tuning path: open Discover, choose models, select GPT 4.1, choose fine-tuning, pick a customization method, import a JSONL data set, submit training, and test the deployed tuned model. (SRC-177 L608–740)

## Key terms

- Prompt engineering — instruction changes to influence behavior, tone, output, and boundaries. (SRC-177 L73–109)
- RAG — retrieving from document libraries before the large language model receives the prompt. (SRC-177 L127–150)
- Vectorize — turn user input into a batch of numbers for similarity retrieval. (SRC-177 L321–339)
- Fine-tuning — training a base or foundational model with many prompt/response examples to change behavior. (SRC-177 L365–400)
- JSONL — the lines format used by the demo's fine-tuning data set. (SRC-177 L661–670)
- Developer deployment — a short test deployment mode described as paying token cost and not typical production use. (SRC-177 L717–725)

## Decision boundaries and exam cues

- **Inference:** If the failure is missing knowledge beyond a few paragraphs, choose RAG rather than stretching prompt instructions. (SRC-177 L110–150; SRC-177 L812–822)
- **Inference:** If the failure is behavior, output, tone, or format and prompting is not enough, choose fine-tuning. (SRC-177 L151–195; SRC-177 L823–835)
- **Inference:** If the scenario asks for the fastest direct adjustment, choose prompt engineering first. (SRC-177 L73–109; SRC-177 L809–811)
- **Inference:** If the scenario mentions fine-tuning availability, check both model support and region support. (SRC-177 L582–607)

## Assessment items

The episode reviews three knowledge-check prompts without options or answers: the purpose of a system message, when to use RAG instead of prompt engineering alone, and what fine-tuning optimizes. (SRC-177 L781–798)

## Tensions, caveats and currency

**Stale-risk:** The demo names GPT 4.1 and North Central U.S. fine-tuning support; model support and regional availability can change. (SRC-177 L474–479; SRC-177 L600–607)
The transcript is auto-captioned and contains likely caption artifacts such as `GP model`, so product wording should be checked against Learn units for exact terminology. (SRC-177 L486–489)

## Relation to other sources

SRC-178 provides the formal Learn-unit version of the prompt-engineering patterns Rob demonstrates. (SRC-178 L217–286; SRC-177 L223–308)
SRC-102 provides the formal Learn-unit version of the RAG flow Rob sketches with vectorization and retrieval. (SRC-102 L226–265; SRC-177 L318–364)
SRC-95 provides the formal Learn-unit version of the fine-tuning concepts, techniques, and risks shown in the demo. (SRC-95 L217–256; SRC-177 L365–780)
SRC-19 gives the comparison framework that the episode states conversationally. (SRC-19 L217–258; SRC-177 L189–222)

## Connections

- [[prompt-engineering]] — demonstrated first optimization path.
- [[retrieval-augmented-generation]] — demonstrated knowledge/grounding path.
- [[fine-tuning]] — demonstrated behavior/format path.
- [[model-deployment-types]] — demo discusses developer deployment for tuned model testing.
- [[model-and-app-evaluation]] — episode says testing/evaluation is needed when choosing tools.
- [[microsoft-foundry]] — portal environment for the demo.

## Open questions

- The transcript does not provide the downloadable JSONL data set, exact portal screenshots, or checked knowledge-check answers. (SRC-177 L652–798)

## Sources

- SRC-177 — raw file: [[177-Optimize generative AI model performance with Microsoft Foundry - AI-103 - Episode 5]]

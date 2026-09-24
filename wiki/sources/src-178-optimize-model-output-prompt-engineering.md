---
title: "Optimize model output with prompt engineering"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Teaches prompt components, system messages, prompt patterns, delimiters, and generation parameters."
area: models
source_ids: [SRC-178]
objectives: [G13]
tags: [prompt-engineering, system-message, few-shot, temperature, top-p]
aliases: ["SRC-178"]
source_kind: learn-unit
module: "Optimize generative AI model performance with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "2 of 8"
presenters: []
raw_file: "178-Optimize model output with prompt engineering - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/2-prompt-engineering"
ingest_depth: full
---
# Optimize model output with prompt engineering

*learn-unit · Optimize generative AI model performance with Microsoft Foundry · unit 2 of 8 · SRC-178*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-178 |
| Raw file | 178-Optimize model output with prompt engineering - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Optimize generative AI model performance with Microsoft Foundry |
| Unit / episode | 2 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/2-prompt-engineering |
| Teaching content | L211–286 of 316 |
| Content length | ~1036 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Prompt engineering is the lowest-friction optimization starting point because it needs no extra infrastructure or training data. (SRC-178 L217)
The unit teaches prompt components, system-message design, persona/template/chain-of-thought/few-shot patterns, delimiters, recency-bias handling, temperature, and top_p. (SRC-178 L220–286)

## Key claims

- Prompt engineering means designing and refining prompts to improve output quality, accuracy, and relevance. (SRC-178 L217)
- Chat prompts can include system, user, assistant, and example components. (SRC-178 L220–225)
- System messages guide behavior, role, constraints, tone, communication style, output format, and quality/safety constraints. (SRC-178 L227–231)
- System messages influence output but do not guarantee compliance, so they should be tested and layered with content filtering and evaluation. (SRC-178 L238–239)
- Prompt patterns include persona, format template, chain-of-thought, decomposition, and few-shot learning. (SRC-178 L246–268)
- Delimiters help separate instructions, source text, and examples; repeating key instructions at the end can counter recency-bias problems. (SRC-178 L269–272)
- Temperature and top_p control output randomness, and the source recommends adjusting one or the other rather than both together. (SRC-178 L273–279)
- Prompt engineering cannot supply missing company knowledge and may not enforce behavior reliably, which leads to additional strategies. (SRC-178 L280–286)

## How it works

A well-constructed prompt improves usefulness by making the desired task and response clearer to the model. (SRC-178 L219)
The system message is the highest-level instruction set in the conversation and should state role, boundaries, output format, and what to do when the request is ambiguous or unsupported. (SRC-178 L227–244)
Prompt patterns shape responses: persona changes perspective, a format template makes output easier to parse, chain-of-thought or decomposition helps complex tasks, and few-shot examples demonstrate the desired mapping. (SRC-178 L247–268)
Model parameters tune generation behavior: lower temperature supports factual focus, higher temperature supports creative variation, and top_p limits the considered next-token probability mass. (SRC-178 L273–279)

## Code and API patterns

This source describes prompt structure and model parameters, but the captured code blocks are placeholders rather than actual snippets. (SRC-178 L232–237; SRC-178 L251–259; SRC-178 L265–268)

## Key terms

- System message — instructions that define model behavior, role, and constraints. (SRC-178 L221)
- User message — the user's question or input. (SRC-178 L222)
- Assistant message — previous model responses used in multi-turn conversations. (SRC-178 L223)
- Examples — sample input/output pairs that demonstrate expected response format. (SRC-178 L224)
- Few-shot learning — providing examples of desired input and output; one example is one-shot and no examples is zero-shot. (SRC-178 L263–264)
- Temperature — a randomness setting where higher values create more varied output and lower values create more deterministic output. (SRC-178 L275)
- Top_p — a randomness setting that limits generation to a subset of the most probable next tokens. (SRC-178 L276)

## Decision boundaries and exam cues

- **Inference:** Choose prompt engineering first when the need is tone, format, instructions, quick iteration, or low cost. (SRC-178 L217; SRC-178 L280–285)
- **Inference:** Do not choose prompt engineering alone when the model needs unavailable private or current data; the source says missing hotel-catalog information requires another strategy. (SRC-178 L286)
- **Inference:** If a scenario asks for factual consistency rather than creative variation, the temperature clue points toward lower temperature. (SRC-178 L275; SRC-178 L279)
- **Inference:** If a scenario asks for consistent, machine-parseable responses, a format template or explicit output-format instruction is the prompt-engineering clue. (SRC-178 L230; SRC-178 L250–254)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

The source describes chain-of-thought prompting but cautions that it is for non-reasoning models because reasoning models handle step-by-step logic internally. (SRC-178 L255–262)
The captured examples are mostly represented by placeholder `Copy` blocks rather than full prompt text. (SRC-178 L232–237; SRC-178 L251–259; SRC-178 L265–268)

## Relation to other sources

SRC-116 introduces prompt engineering as one of several complementary optimization strategies. (SRC-116 L217–218)
SRC-102 follows with grounding/RAG when the issue is missing knowledge rather than prompt wording. (SRC-102 L217–225)
SRC-19 compares prompt engineering against RAG and fine-tuning and says to start with prompt engineering. (SRC-19 L217–222; SRC-19 L252–258)
SRC-177 demonstrates similar system instructions, templates, chain-of-thought, and few-shot patterns in the episode. (SRC-177 L223–308)

## Connections

- [[prompt-engineering]] — central concept of this source.
- [[generation-parameters]] — temperature and top_p settings.
- [[chat-completions-api]] — prompt roles mirror chat-completion message structure.
- [[guardrails-and-content-filters]] — the source says system messages should be layered with filtering.
- [[model-and-app-evaluation]] — testing and iteration are required because instructions are not guaranteed.
- *Module units:* [[src-116-introduction-optimize-generative-ai-model-performance-microsoft-foundry|1 Introduction]] · [[src-102-ground-model-retrieval-augmented-generation|3 Ground your model with Retrieval Augmented Generation]] · [[src-95-fine-tune-model-consistent-behavior|4 Fine-tune a model for consistent behavior]] · [[src-19-compare-combine-optimization-strategies|5 Compare and combine optimization strategies]] · [[src-77-exercise-optimize-generative-ai-model-performance|6 Exercise - Optimize generative AI model performance]] · [[src-161-module-assessment-optimize-generative-ai-model-performance-microsoft-foundry|7 Module assessment]] · [[src-202-summary-optimize-generative-ai-model-performance-microsoft-foundry|8 Summary]] · [[src-177-optimize-generative-ai-model-performance-microsoft-foundry-episode-5|episode 5]]

## Open questions

- The source names content filtering and evaluation as mitigations but does not specify an implementation path in this unit. (SRC-178 L238–239)

## Sources

- SRC-178 — raw file: [[178-Optimize model output with prompt engineering - Training - Microsoft Learn]]

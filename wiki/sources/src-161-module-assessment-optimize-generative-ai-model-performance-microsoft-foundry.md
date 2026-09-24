---
title: "Module assessment — Optimize generative AI model performance with Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment questions covering system messages, RAG, temperature, fine-tuning, and combined strategies."
area: exam
source_ids: [SRC-161]
objectives: []
tags: [assessment, prompt-engineering, rag, fine-tuning, temperature]
aliases: ["SRC-161"]
source_kind: learn-unit
module: "Optimize generative AI model performance with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "7 of 8"
presenters: []
raw_file: "161-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/7-knowledge-check"
ingest_depth: full
---
# Module assessment — Optimize generative AI model performance with Microsoft Foundry

*learn-unit · Optimize generative AI model performance with Microsoft Foundry · unit 7 of 8 · SRC-161*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-161 |
| Raw file | 161-Module assessment - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Optimize generative AI model performance with Microsoft Foundry |
| Unit / episode | 7 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/7-knowledge-check |
| Teaching content | L211–239 of 269 |
| Content length | ~291 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

The module assessment asks about system-message purpose, when to use RAG, what temperature controls, what fine-tuning optimizes, and how to combine RAG, fine-tuning, and prompt engineering in a scenario. (SRC-161 L213–236)
The capture shows options but does not show checked answers. (SRC-161 L237–239)

## Key claims

- A system message is assessed against role, behavior, and output constraints rather than permanent training or retrieval. (SRC-161 L213–216)
- RAG is assessed against domain-specific or current data that the model was not trained on. (SRC-161 L218–221)
- Temperature is assessed as the setting for response randomness and creativity. (SRC-161 L223–226)
- Fine-tuning is assessed as optimizing behavior, style, and output-format consistency. (SRC-161 L227–231)
- The combined strategy assessed is RAG for catalog data, fine-tuning for brand voice, and prompt engineering for conversation-specific instructions. (SRC-161 L232–236)

## How it works

This source is an assessment capture rather than explanatory teaching content. (SRC-161 L213–239)

## Code and API patterns

Not covered by this source.

## Key terms

- System message — assessed as defining role, behavior, and output constraints. (SRC-161 L213–216)
- RAG — assessed as the strategy for domain-specific or current data absent from training. (SRC-161 L218–221)
- Temperature — assessed as controlling randomness and creativity. (SRC-161 L223–226)
- Fine-tuning — assessed as optimizing consistency of behavior, style, and output format. (SRC-161 L227–231)

## Decision boundaries and exam cues

- **Inference:** The distractors separate permanent training changes, retrieval, prompt instructions, and generation parameters; the exam cue is to identify which layer the requirement belongs to. (SRC-161 L213–236)
- **Inference:** A product catalog plus brand voice is explicitly a combined-strategy scenario, not prompt-only or fine-tuning-only. (SRC-161 L232–236)

## Assessment items

1. What is the primary purpose of a system message in a prompt? (SRC-161 L213)
   - To define the model's role, behavior, and output constraints. (SRC-161 L214)
   - To provide training data that permanently changes the model. (SRC-161 L215)
   - To retrieve data from an external data source. (SRC-161 L216)
   - Answer shown in capture: answer not shown in capture. (SRC-161 L237–239)
2. When should you use Retrieval Augmented Generation (RAG) instead of relying on prompt engineering alone? (SRC-161 L217–218)
   - When you want the model to respond in a consistent style and format. (SRC-161 L219)
   - When the model needs access to domain-specific or current data that it wasn't trained on. (SRC-161 L220)
   - When you want to reduce the length of prompts sent to the model. (SRC-161 L221)
   - Answer shown in capture: answer not shown in capture. (SRC-161 L237–239)
3. What does the temperature parameter control in a language model? (SRC-161 L222–223)
   - The maximum number of tokens the model can generate. (SRC-161 L224)
   - The randomness and creativity of the model's responses. (SRC-161 L225)
   - The speed at which the model processes requests. (SRC-161 L226)
   - Answer shown in capture: answer not shown in capture. (SRC-161 L237–239)
4. What does fine-tuning optimize in a language model? (SRC-161 L227–228)
   - The factual accuracy of responses by connecting to external data. (SRC-161 L229)
   - The consistency of the model's behavior, style, and output format. (SRC-161 L230)
   - The number of tokens the model can process in a single request. (SRC-161 L231)
   - Answer shown in capture: answer not shown in capture. (SRC-161 L237–239)
5. You're building a chat application that needs to answer questions using your company's product catalog while maintaining a specific brand voice. Which combination of strategies is most appropriate? (SRC-161 L232–233)
   - Prompt engineering only, with detailed system messages. (SRC-161 L234)
   - RAG for the product catalog data, fine-tuning for the brand voice, and prompt engineering for conversation-specific instructions. (SRC-161 L235)
   - Fine-tuning only, with the product catalog included in the training data. (SRC-161 L236)
   - Answer shown in capture: answer not shown in capture. (SRC-161 L237–239)

## Tensions, caveats and currency

The assessment capture does not show which options were selected as correct; it only states that all questions must be answered before checking work. (SRC-161 L237–239)

## Relation to other sources

SRC-178 teaches system messages and temperature/top_p before the assessment tests them. (SRC-178 L220–239; SRC-178 L273–279)
SRC-102 teaches the RAG distinction tested in question 2. (SRC-102 L217–225; SRC-102 L257–263)
SRC-95 teaches the fine-tuning distinction tested in question 4. (SRC-95 L217–231)
SRC-19 teaches the combined strategy tested in question 5. (SRC-19 L247–258)

## Connections

- [[ai-103-exam]] — assessment-style discrimination practice.
- [[prompt-engineering]] — system messages and prompt-specific instructions.
- [[retrieval-augmented-generation]] — current/domain data grounding.
- [[fine-tuning]] — brand voice and consistent behavior.
- [[generation-parameters]] — temperature.
- *Module units:* [[src-116-introduction-optimize-generative-ai-model-performance-microsoft-foundry|1 Introduction]] · [[src-178-optimize-model-output-prompt-engineering|2 Optimize model output with prompt engineering]] · [[src-102-ground-model-retrieval-augmented-generation|3 Ground your model with Retrieval Augmented Generation]] · [[src-95-fine-tune-model-consistent-behavior|4 Fine-tune a model for consistent behavior]] · [[src-19-compare-combine-optimization-strategies|5 Compare and combine optimization strategies]] · [[src-77-exercise-optimize-generative-ai-model-performance|6 Exercise - Optimize generative AI model performance]] · [[src-202-summary-optimize-generative-ai-model-performance-microsoft-foundry|8 Summary]] · [[src-177-optimize-generative-ai-model-performance-microsoft-foundry-episode-5|episode 5]]

## Open questions

- The capture does not expose the checked answers or feedback explanations. (SRC-161 L237–239)

## Sources

- SRC-161 — raw file: [[161-Module assessment - Training - Microsoft Learn]]

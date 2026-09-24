---
title: "Module assessment — Develop a speech-capable generative AI application"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment asks learners to distinguish transcription and TTS model choices for speech-capable apps."
area: speech
source_ids: [SRC-175]
objectives: [P01, T05]
tags: [module-assessment, speech, model-selection, transcription, synthesis]
aliases: ["SRC-175"]
source_kind: learn-unit
module: "Develop a speech-capable generative AI application"
learning_path: "Develop natural language solutions in Azure"
unit: "5 of 7"
presenters: []
raw_file: "175-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-audio-apps/5-knowledge-check"
ingest_depth: full
---

# Module assessment — Develop a speech-capable generative AI application

*learn-unit · Develop a speech-capable generative AI application · unit 5 of 7 · SRC-175*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-175 |
| Raw file | `175-Module assessment - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a speech-capable generative AI application |
| Unit / episode | 5 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-audio-apps/5-knowledge-check |
| Teaching content | L210–223 of 253 |
| Content length | ~64 words |
| Capture quality | High: assessment prompts and options are visible, but checked answers are not shown. |
| Ingest depth | full |

## TL;DR

The assessment checks whether learners can map text-from-speech to a transcribe model and speech-from-text to a TTS model. (SRC-175 L212–220) The capture does not show submitted or checked answers; it shows a message that all questions must be answered before checking work. (SRC-175 L221–223)

## Key claims

- The assessment asks which model can generate text from speech. (SRC-175 L212)
- The listed options for generating text from speech are `gpt-4o-mini`, `gpt-4o-mini-tts`, and `gpt-4o-mini-transcribe`. (SRC-175 L212–215)
- The assessment asks which model can synthesize speech from text. (SRC-175 L217)
- The listed options for synthesizing speech from text are `gpt-4o-mini`, `gpt-4o-mini-tts`, and `gpt-4o-mini-transcribe`. (SRC-175 L217–220)
- The capture says learners must answer all questions before checking their work. (SRC-175 L221–223)

## How it works

This source is an assessment page. It tests the decision boundary between transcription and synthesis by offering a base mini model, a TTS model, and a transcribe model as options for both questions. (SRC-175 L212–220)

## Code and API patterns

Not covered by this source.

## Key terms

- **`gpt-4o-mini-tts`:** one option in the assessment's model-choice questions. (SRC-175 L213–220)
- **`gpt-4o-mini-transcribe`:** one option in the assessment's model-choice questions. (SRC-175 L214–220)
- **Generate text from speech:** assessment wording for speech-to-text transcription. (SRC-175 L212–215)
- **Synthesize speech from text:** assessment wording for text-to-speech synthesis. (SRC-175 L217–220)

## Decision boundaries and exam cues

- **Inference:** The assessment is testing model suffixes: `-transcribe` aligns with text generated from speech, while `-tts` aligns with speech synthesized from text. (SRC-175 L212–220)
- **Inference:** `gpt-4o-mini` without a speech-specific suffix appears as a distractor in both questions. (SRC-175 L212–220)

## Assessment items

1. Which model can you use to generate text from speech? Options: `gpt-4o-mini`; `gpt-4o-mini-tts`; `gpt-4o-mini-transcribe`. Answer not shown in capture. (SRC-175 L212–215)
2. Which model can you use to synthesize speech from text? Options: `gpt-4o-mini`; `gpt-4o-mini-tts`; `gpt-4o-mini-transcribe`. Answer not shown in capture. (SRC-175 L217–220)

## Tensions, caveats and currency

- The raw capture does not show selected or correct answers after submission. (SRC-175 L221–223)
- **Stale-risk:** The assessment depends on model names that may change over time. (SRC-175 L212–220)

## Relation to other sources

- [[src-225-transcribe-speech]] supplies the source evidence that `gpt-4o-mini-transcribe` supports speech-to-text. (SRC-225 L216–220)
- [[src-221-synthesize-speech]] supplies the source evidence that `gpt-4o-mini-tts` supports text-to-speech. (SRC-221 L216–219)
- [[src-44-develop-speech-capable-generative-ai-application-episode-17]] includes an oral check that answers the same two distinctions. (SRC-44 L363–374)

## Connections

- [[speech-capable-models]] — the assessment is a model-choice check. (SRC-175 L212–220)
- [[speech-to-text]] — the first question tests the transcription direction. (SRC-175 L212–215)
- [[text-to-speech]] — the second question tests the synthesis direction. (SRC-175 L217–220)
- [[model-selection]] — the question format asks learners to choose the correct model. (SRC-175 L212–220)

## Open questions

- The source does not show the checked answer state. (SRC-175 L221–223)

## Sources

- SRC-175 — raw file: [[175-Module assessment - Training - Microsoft Learn]]

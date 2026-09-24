---
title: "Compare and combine optimization strategies"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Compares prompt engineering, RAG, and fine-tuning, then gives an incremental strategy-selection framework."
area: models
source_ids: [SRC-19]
objectives: [G02, G13, T04]
tags: [model-optimization, prompt-engineering, rag, fine-tuning, decision-framework]
aliases: ["SRC-19"]
source_kind: learn-unit
module: "Optimize generative AI model performance with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "5 of 8"
presenters: []
raw_file: "19-Compare and combine optimization strategies - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/5-compare-combine-strategies"
ingest_depth: full
---
# Compare and combine optimization strategies

*learn-unit · Optimize generative AI model performance with Microsoft Foundry · unit 5 of 8 · SRC-19*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-19 |
| Raw file | 19-Compare and combine optimization strategies - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Optimize generative AI model performance with Microsoft Foundry |
| Unit / episode | 5 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/5-compare-combine-strategies |
| Teaching content | L211–258 of 288 |
| Content length | ~778 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Prompt engineering, RAG, and fine-tuning are complementary rather than competing strategies. (SRC-19 L217)
The source gives the simplest decision framework: start with prompt engineering, add RAG for specific/current/private factual accuracy, add fine-tuning for stubborn style/tone/format consistency, and combine layers only as needed. (SRC-19 L252–258)

## Key claims

- The three strategies address different dimensions of model performance and can be combined. (SRC-19 L217–222)
- RAG optimizes context when the model lacks domain-specific knowledge and accuracy matters. (SRC-19 L219–220)
- Fine-tuning optimizes the model when response format, style, tone, or consistency is the problem. (SRC-19 L221)
- Prompt engineering is the foundation for both paths because it instructs behavior and focus before extra layers are added. (SRC-19 L222)
- Prompt engineering is quickest and least expensive, but long prompts consume more tokens and cannot add unknown information. (SRC-19 L226–227)
- RAG improves factual accuracy with up-to-date relevant data, but requires search setup, indexing, embeddings, and good chunking/index quality. (SRC-19 L228–229)
- Fine-tuning produces consistent behavior and can shorten prompts, but has the highest upfront investment and ongoing maintenance. (SRC-19 L230–231)
- All three strategies can be combined so fine-tuning handles style/format, RAG handles current domain knowledge, and prompt engineering handles conversation-specific instructions and guardrails. (SRC-19 L247–251)

## How it works

The source separates optimization into context and behavior. (SRC-19 L218–222)
Prompt engineering defines how the model should act and what to focus on, while RAG supplies factual context and fine-tuning embeds desired behavior patterns in model weights. (SRC-19 L220–222; SRC-19 L235–251)
Combination patterns include prompt engineering plus RAG, prompt engineering plus fine-tuning, RAG plus fine-tuning, and all three together. (SRC-19 L232–251)
The incremental framework reduces unnecessary cost and complexity by adding heavier layers only after simpler approaches fail requirements. (SRC-19 L252–258)

## Code and API patterns

Not covered by this source.

## Key terms

- Optimize for context — use RAG when the model lacks domain-specific knowledge and accuracy must improve. (SRC-19 L219–220)
- Optimize the model — use fine-tuning when the target is response format, style, tone, or behavioral consistency. (SRC-19 L221)
- Prompt engineering + RAG — instructions define behavior while retrieval provides factual context. (SRC-19 L234–238)
- Prompt engineering + fine-tuning — the fine-tuned model handles baseline style while the system message supplies per-conversation context. (SRC-19 L239–242)
- RAG + fine-tuning — fine-tuning ensures style and structure while RAG provides current domain data. (SRC-19 L243–246)

## Decision boundaries and exam cues

- **Inference:** Start with prompt engineering unless the scenario already proves missing data or persistent behavior inconsistency. (SRC-19 L222; SRC-19 L252–258)
- **Inference:** Add RAG when wording says private data, current data, product catalog, pricing, availability, or factual accuracy. (SRC-19 L220; SRC-19 L228–229; SRC-19 L255)
- **Inference:** Add fine-tuning when wording says persistent brand voice, response style, schema format, or reduced prompt length after prompting attempts. (SRC-19 L221; SRC-19 L230–231; SRC-19 L256)
- **Inference:** Use all three when the same app needs reliable style, factual catalog grounding, and request-specific instructions or guardrails. (SRC-19 L247–251)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

The source summarizes trade-offs but the captured comparison table is collapsed as `Expand table`, so detailed row-level values are unavailable in the corpus capture. (SRC-19 L223–225)

## Relation to other sources

SRC-178 supplies the detailed prompt-engineering mechanics used as the foundation. (SRC-178 L217–286)
SRC-102 supplies the grounding and Azure AI Search mechanics behind RAG. (SRC-102 L217–265)
SRC-95 supplies the fine-tuning mechanics and risks behind consistency optimization. (SRC-95 L217–256)
SRC-202 repeats the module's final key takeaway using the same three-layer decision sequence. (SRC-202 L217–224)

## Connections

- [[prompt-engineering]] — foundation strategy.
- [[retrieval-augmented-generation]] — context/accuracy strategy.
- [[fine-tuning]] — behavior/consistency strategy.
- [[generation-parameters]] — a prompt-level tuning lever.
- [[model-and-app-evaluation]] — needed to test whether each layer meets requirements.

## Open questions

- The source says RAG quality depends on chunking and index quality but does not teach chunking methods. (SRC-19 L228–229)

## Sources

- SRC-19 — raw file: [[19-Compare and combine optimization strategies - Training - Microsoft Learn]]

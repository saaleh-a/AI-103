---
title: "Prompt engineering"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Designing instructions, messages, examples and prompt structure to steer model behavior before heavier optimization."
area: models
source_ids: [SRC-19, SRC-20, SRC-23, SRC-39, SRC-90, SRC-95, SRC-99, SRC-100, SRC-161, SRC-178]
objectives: [G13]
objective_gaps: []
tags: []
aliases: ["system message", "system prompt", "few-shot prompting", "chain-of-thought prompting", "zero-shot prompting", "one-shot prompting"]
---

# Prompt engineering

## Summary

Prompt engineering is the first optimization layer: design and refine system instructions, user messages, examples, delimiters, output formats, and task decomposition so the model has clearer guidance before you add retrieval, fine-tuning, or app-side controls (SRC-178 L213–220; SRC-19 L222).

## The problem it solves

A language model does not automatically know the role, boundaries, output format, or scenario-specific rules your application needs. Prompt engineering gives those directions in the prompt itself, so you can improve quality, accuracy, relevance, tone, and structure without extra infrastructure or training data (SRC-178 L213–219). It is the starting point because it is quick, low cost, and immediately testable in a playground or request (SRC-19 L228–229; SRC-90 L218–225).

## Mental model

A prompt is the control surface around a model call. The corpus describes chat prompts as built from system, user, assistant, and example messages. The system message sets behavior, role, tone, constraints, and format; user messages contain the request; assistant messages preserve prior responses; examples show the pattern you expect (SRC-178 L221–231). The model is still probabilistic: a system message influences behavior but does not guarantee compliance, so prompts need testing, iteration, and mitigation layers such as content filtering and evaluation (SRC-178 L239–240).

## What the sources say

- Prompt engineering is the most accessible way to optimize a model's performance because it improves quality, accuracy, and relevance without additional infrastructure or training data (SRC-178 L213–219).
- Chat prompts typically include system, user, assistant, and example messages. Structure and combination determine how effectively the model responds (SRC-178 L221–231).
- System messages define role, boundaries, tone, communication style, output formats, and safety or quality constraints (SRC-178 L227–231). Agent configuration uses the same idea: system instructions define behavior, personality, and response style (SRC-20 L229–231).
- Prompt patterns include persona, format template, chain-of-thought or explicit sub-step decomposition, and few-shot learning. Reasoning models handle step-by-step logic internally, so chain-of-thought prompting is described as a non-reasoning-model technique (SRC-178 L241–270).
- Clear delimiters such as Markdown headings or XML tags separate instructions, source text, and examples. The source also notes recency bias and suggests repeating key instructions at the end when instructions are not followed consistently (SRC-178 L270–272).
- The Responses API supports adding instructions, often called a system prompt, in addition to user input (SRC-99 L245–247).
- Agent retrieval behavior can also be shaped through instructions: for Foundry IQ, instructions can tell the agent when to retrieve, cite sources, and fall back if knowledge is missing (SRC-23 L225–233).
- The video-generation unit treats prompting as briefing a cinematographer: prompt anatomy includes camera framing, subject, action, lighting and palette, and style (SRC-100 L231–253).
- The module assessment reinforces the boundary: a system message defines role, behavior, and output constraints; RAG is for domain-specific or current data; fine-tuning is for behavior, style, and output-format consistency (SRC-161 L213–230).

## How it works in Azure

Prompt engineering appears across several Azure surfaces. In the Foundry model playground, you can add system messages, send prompts, try different models and configurations, and observe responses before writing code (SRC-90 L218–225). In deployment testing, system messages guide model behavior and apply context, tone, and instructions to all user inputs (SRC-39 L259–261). In VS Code agent configuration, system instructions shape agent behavior and response style (SRC-20 L229–231). In code, the Responses API accepts user input plus instructions and generation controls (SRC-99 L245–251).

## Code and configuration

**Synthesis:** The corpus does not require one canonical prompt syntax. The load-bearing configuration is the separation of responsibilities (SRC-178 L221–279; SRC-99 L245–251):

- System or developer-level instructions: role, boundaries, tone, output format, and safety constraints (SRC-178 L227–231; SRC-99 L245–247).
- User content: the immediate request or task input (SRC-178 L221–231).
- Examples: one-shot or few-shot input/output pairs that demonstrate the expected pattern (SRC-178 L264–270).
- Delimiters: explicit boundaries around instructions, source text, and examples to reduce misinterpretation (SRC-178 L270).
- Generation parameters: temperature and top_p adjust randomness, but they are separate from the prompt text itself (SRC-178 L273–279). See [[generation-parameters]].

*Illustrative*: a grounded extraction prompt might use a system message that defines the assistant as a strict JSON extractor, a delimited source passage, and a rule to return an empty array when the requested entity is not present. The pattern is illustrative; the corpus provides the component rules, not this exact prompt (SRC-178 L232–271).

## Decision boundaries

| **Inference:** Scenario detail | Prompt engineering | RAG | Fine-tuning |
|---|---|---|---|
| Primary lever | Instructions, examples, formatting, decomposition, and parameters (SRC-178 L221–279). | External data retrieved into the prompt at query time (SRC-19 L220; SRC-19 L230). | Training a model on examples so behavior patterns are embedded in weights (SRC-95 L217–225). |
| Best when | You need tone, format, task guidance, quick iteration, or low cost (SRC-178 L280–287). | The model lacks current, private, or domain data needed for accurate answers (SRC-19 L230; SRC-19 L252–258). | Detailed prompts and examples still do not produce consistent style, tone, or format (SRC-95 L213–220). |
| Not enough when | Missing knowledge or stubborn inconsistency remains (SRC-178 L288–291). | Search/index quality is not available or not the issue. | You have no high-quality representative training examples (SRC-95 L245–256). |

**Inference:** keep the full prompt-engineering versus RAG versus fine-tuning comparison in [[optimization-strategies-compared]]. This page owns the prompt layer; [[retrieval-augmented-generation]] owns grounding; [[fine-tuning]] owns model-weight adaptation.

## Failure modes and misconceptions

- Treating instructions as guarantees. The prompt source explicitly says system messages influence but do not guarantee compliance, so testing, iteration, filtering, and evaluation remain necessary (SRC-178 L239–240).
- Using prompt engineering to solve missing data. The comparison source says prompt engineering cannot give the model information it was not trained on; RAG addresses missing current or domain data (SRC-19 L228–230).
- Jumping to fine-tuning too early. The fine-tuning source says to start with prompt engineering and baseline evaluation before considering fine-tuning (SRC-95 L217–220; SRC-95 L245–256).
- Overusing chain-of-thought prompting. The source says chain-of-thought prompting is for non-reasoning models and that reasoning models handle step-by-step logic internally (SRC-178 L255–262).
- Hiding structure. If instructions, source text, and examples are not separated with delimiters, the model can misinterpret their roles (SRC-178 L270).

## Solution Engineering transfer

**Inference:** customer signal: the team says responses are the wrong tone, wrong format, or inconsistently follow basic instructions, but the model has enough information to answer. Start with prompt engineering because the source positions it as the lowest-cost optimization path (SRC-178 L213–219; SRC-19 L228–229).

**Inference:** discovery question: ask whether the failure is about behavior or knowledge. If behavior, work on system messages, examples, and output templates; if knowledge, move toward RAG; if persistent style/format consistency is still missing, evaluate fine-tuning (SRC-19 L220–225; SRC-19 L252–258).

## Connections

- [[generation-parameters]] — parameters are tuned alongside prompts but are not prompt text.
- [[model-playgrounds]] — playgrounds are where prompts are tested before code.
- [[responses-api]] — supports instructions with user input.
- [[chat-completions-api]] — message roles map naturally to system, user and assistant messages.
- [[retrieval-augmented-generation]] — use when the prompt needs external facts.
- [[fine-tuning]] — use when prompts and examples cannot create durable consistency.
- [[optimization-strategies-compared]] — canonical comparison of prompt engineering, RAG and fine-tuning.
- [[knowledge-bases-and-sources]] — agent instructions can steer retrieval and citation behavior over knowledge sources.
- [[ai-agents]] — agent instructions are prompt engineering for agent behavior.
- [[video-generation]] — media prompts use shot, action, style and timing detail.
- [[src-178-optimize-model-output-prompt-engineering]] — central prompt-engineering unit.
- [[src-19-compare-combine-optimization-strategies]] — optimization strategy boundary.
- *Also linked from:* [[generative-ai-fundamentals]] · [[model-and-app-evaluation]] · [[overview]]

## Sources

- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — prompt engineering in the optimization spectrum.
- SRC-20 — [[src-20-configure-manage-agents-visual-studio-code]] — agent system instructions.
- SRC-23 — [[src-23-configure-retrieval-foundry-iq]] — instructions for retrieval and fallback behavior.
- SRC-39 — [[src-39-deploy-models-endpoints]] — system messages in deployment playground testing.
- SRC-90 — [[src-90-explore-model-playground]] — playground support for prompts and system messages.
- SRC-95 — [[src-95-fine-tune-model-consistent-behavior]] — prompt engineering before fine-tuning.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses API instructions.
- SRC-100 — [[src-100-generate-video-prompt]] — video prompt anatomy.
- SRC-161 — [[src-161-module-assessment-optimize-generative-ai-model-performance-microsoft-foundry]] — assessment distinctions among system messages, RAG, temperature, fine-tuning and combined strategies.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — prompt components, patterns, delimiters and limits.

## Open questions

- The corpus does not give a single production prompt template for every app type.
- The corpus names chain-of-thought prompting but does not discuss policies for exposing reasoning traces to end users.

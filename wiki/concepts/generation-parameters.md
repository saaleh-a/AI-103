---
title: "Generation parameters"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Runtime controls such as temperature, top_p and token limits that shape response variability and length."
area: models
source_ids: [SRC-14, SRC-19, SRC-20, SRC-39, SRC-42, SRC-86, SRC-90, SRC-99, SRC-100, SRC-161, SRC-178]
objectives: [G13, V05]
objective_gaps: []
tags: []
aliases: ["temperature", "top_p", "Top P", "max tokens", "max_output_tokens", "nucleus sampling", "model parameters"]
---

# Generation parameters

## Summary

Generation parameters are runtime settings that steer how a deployed model produces output. The corpus focuses on temperature for randomness, top_p or Top P for diversity through probable-token selection, and max tokens or max_output_tokens for response length (SRC-178 L273–279; SRC-99 L245–251; SRC-39 L261).

## The problem it solves

Even with the same model and prompt, an application may need different output behavior. A factual answer should be focused and consistent; a creative itinerary or media generation task may benefit from variety. Parameters let you adjust that behavior without changing model weights or writing a new prompt from scratch (SRC-178 L273–279; SRC-20 L233–240).

## Mental model

Prompt text says what the model should do. Generation parameters tune how freely it samples the next tokens and how long the response can be. Lower randomness narrows the model toward predictable completions; higher randomness increases variation. Token limits stop output from growing beyond the desired length or cost envelope (SRC-99 L245–251; SRC-178 L273–279).

## What the sources say

- The prompt-engineering unit defines temperature as controlling output randomness: higher values such as 0.7 produce more creative and varied responses, lower values such as 0.2 produce more focused and deterministic responses, and lower values fit factual tasks while higher values fit creative tasks (SRC-178 L273–275; SRC-178 L279).
- The same unit defines top_p as another randomness control: it limits the model to a subset of the most probable next tokens, such as considering only the top 90 percent of probable tokens at `top_p` 0.9 (SRC-178 L276).
- The unit recommends adjusting either temperature or top_p, not both at the same time (SRC-178 L278).
- The Responses API source lists `temperature`, `max_output_tokens`, and `top_p`; it describes temperature as controlling randomness from 0.0 to 2.0, `max_output_tokens` as limiting the maximum tokens in the response, and top_p as an alternative to temperature (SRC-99 L245–251).
- The deployment playground source names temperature as creativity versus consistency, max tokens as response length limits, and top-p as nucleus sampling (SRC-39 L261).
- The VS Code agent source says Temperature controls response creativity and randomness, with lower values producing consistent focused outputs and higher values producing creative varied outputs; it says Top P controls diversity by limiting vocabulary choices and can be lowered for constrained predictable output (SRC-20 L233–240).
- The model playground exposes temperature and max tokens as adjustable settings, and the agent portal exposes Temperature and Top P as agent model parameters (SRC-90 L220–224; SRC-14 L232–234).
- An episode transcript frames temperature as creativity versus consistency and max tokens as an application-sized output cap (SRC-42 L46–72). The module assessment tests temperature as randomness and creativity, not token count or speed (SRC-161 L222–225).

## How it works in Azure

Foundry exposes these settings in multiple places. In the Model playground, you can adjust temperature and max tokens while testing deployed models (SRC-90 L220–224). In the deployment playground, you can modify temperature, max tokens, and top-p before copying code samples (SRC-39 L252–263). In VS Code agent configuration, Temperature and Top P appear in both the Designer interface and the YAML file and remain synchronized across views (SRC-20 L233–240). In SDK calls through the Responses API, the same controls appear as request parameters (SRC-99 L245–251).

For media generation, the corpus uses a broader sense of generation controls. Image generation in the playground may support resolution and reference image controls, while video generation has parameters such as prompt and video settings, resolution, duration, and reference-image requirements (SRC-86 L212–215; SRC-100 L214–226; SRC-100 L255–263).

## Code and configuration

**Synthesis:** The corpus names these parameter shapes across portal and API surfaces (SRC-20 L233–240; SRC-39 L261; SRC-99 L245–251):

- `temperature`: randomness/creativity. Lower for factual or structured work; higher for creative variation (SRC-178 L273–279; SRC-99 L249).
- `top_p` or Top P: alternative randomness/diversity control through probable-token sampling or constrained vocabulary choices (SRC-178 L276–278; SRC-20 L233–235; SRC-99 L251).
- `max tokens` or `max_output_tokens`: length cap on generated output (SRC-39 L261; SRC-99 L250).
- Media settings: image resolution and reference image when supported; video resolution and duration in the Video playground (SRC-86 L212–215; SRC-100 L221–226).

**Inference:** treat parameter values as experiment settings that must be recorded with prompts during evaluation. Otherwise a model can appear to improve or regress when only sampling behavior changed.

## Decision boundaries

| **Inference:** Need | Parameter lever | Not the right lever |
|---|---|---|
| More consistent factual answers | Lower temperature; possibly lower Top P for constrained output (SRC-178 L273–279; SRC-20 L233–240). | Fine-tuning, unless inconsistency remains after prompt and parameter testing. |
| More creative or varied language | Higher temperature (SRC-178 L273–279). | RAG; RAG adds facts, not creativity. |
| Shorter bounded output | Max tokens or `max_output_tokens` (SRC-39 L261; SRC-99 L250). | System message alone, if hard length caps matter. |
| Alternative control over sampling diversity | top_p or Top P (SRC-178 L276–278; SRC-99 L251). | Changing both temperature and top_p at once as a first step. |
| Image/video size or duration | Modality-specific media settings where supported (SRC-86 L212–215; SRC-100 L221–226). | Text-only token controls. |

**Inference:** generation parameters belong with [[prompt-engineering]] as the lightest optimization layer. The comparison among prompt engineering, RAG and fine-tuning belongs in [[optimization-strategies-compared]].

## Failure modes and misconceptions

- Changing temperature and top_p together too early. The prompt-engineering unit recommends adjusting one or the other, not both at the same time (SRC-178 L278).
- Using higher temperature to fix missing facts. Temperature changes variation, not the model's access to current or private data (SRC-178 L273–279; SRC-19 L228–230).
- Treating max tokens as a quality metric. It caps length; it does not make the answer more accurate (SRC-99 L250).
- Assuming every surface uses identical names. The corpus uses Top P in the VS Code agent UI/YAML context and `top_p` in API-oriented contexts (SRC-20 L233–236; SRC-99 L251).
- Forgetting modality differences. Image and video controls include resolution, duration, and reference media rather than only text token-sampling settings (SRC-86 L212–215; SRC-100 L221–263).

## Solution Engineering transfer

**Inference:** customer signal: the model gives different wording on repeated runs, or factual responses are too creative. Lower temperature first because the sources define temperature as the randomness control (SRC-178 L273–279; SRC-20 L233–236).

**Inference:** discovery question: ask whether the requirement is about variability, length, missing facts, or persistent behavior. Variability and length map to parameters; missing facts map to RAG; persistent behavior after good prompts maps to fine-tuning (SRC-178 L273–291; SRC-19 L220–225).

## Connections

- [[prompt-engineering]] — parameters are tuned alongside prompt text.
- [[model-playgrounds]] — main no-code surface for experimenting with parameter changes.
- [[responses-api]] — API surface that names `temperature`, `max_output_tokens`, and `top_p`.
- [[foundry-toolkit-for-vs-code]] — agent Designer and YAML include Temperature and Top P.
- [[fine-tuning]] — heavier lever for persistent behavior after prompt/parameter testing.
- [[image-generation]] — image-specific controls such as resolution and reference image.
- [[video-generation]] — video-specific settings such as resolution, duration and reference images.
- [[optimization-strategies-compared]] — larger comparison of lightweight versus heavier optimization strategies.
- [[src-178-optimize-model-output-prompt-engineering]] — text-generation parameter definitions.
- [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses API parameter names.
- *Also linked from:* [[generative-ai-fundamentals]] · [[overview]]

## Sources

- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — agent portal parameters.
- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — boundary between parameters, RAG and fine-tuning.
- SRC-20 — [[src-20-configure-manage-agents-visual-studio-code]] — Temperature and Top P in agent Designer/YAML.
- SRC-39 — [[src-39-deploy-models-endpoints]] — deployment playground parameters and code handoff.
- SRC-42 — [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3]] — episode discussion of temperature and max tokens.
- SRC-86 — [[src-86-explore-image-generation-models-microsoft-foundry-portal]] — image-generation controls.
- SRC-90 — [[src-90-explore-model-playground]] — model playground settings.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses API controls.
- SRC-100 — [[src-100-generate-video-prompt]] — video-generation controls.
- SRC-161 — [[src-161-module-assessment-optimize-generative-ai-model-performance-microsoft-foundry]] — assessment item on temperature and strategy combinations.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — temperature, top_p and recommendation not to tune both together.

## Open questions

- The corpus does not provide default parameter values for every model or deployment surface.
- The corpus does not specify exact valid ranges for every non-Responses API surface beyond the Responses API temperature range.

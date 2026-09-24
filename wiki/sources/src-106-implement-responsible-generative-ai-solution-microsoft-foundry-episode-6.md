---
title: "Implement a responsible generative AI solution in Microsoft Foundry - AI-103 - Episode 6"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of map, measure, mitigate, manage, and a Foundry guardrails demo."
area: responsible-ai
source_ids: [SRC-106]
objectives: [P13]
tags: [responsible-ai, episode, guardrails, microsoft-foundry]
aliases: ["SRC-106"]
source_kind: episode
module: "Implement a responsible generative AI solution in Microsoft Foundry"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "106-Implement a responsible generative AI solution in Microsoft Foundry - AI-103 - Episode 6.md"
url: "https://www.youtube.com/watch?v=H5wPr-Ca2UM"
ingest_depth: full
---
# Implement a responsible generative AI solution in Microsoft Foundry - AI-103 - Episode 6

*episode · Implement a responsible generative AI solution in Microsoft Foundry · SRC-106*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-106 |
| Raw file | 106-Implement a responsible generative AI solution in Microsoft Foundry - AI-103 - Episode 6.md |
| Kind | episode |
| Learning path | null |
| Module | Implement a responsible generative AI solution in Microsoft Foundry |
| Unit / episode | Episode 6 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=H5wPr-Ca2UM |
| Teaching content | L3–629 of 629 |
| Content length | ~2839 words |
| Capture quality | Medium; auto-captioned transcript |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames generative AI as less predictable than older content and says that unpredictability is both value and liability. (SRC-106 L12–30) The episode follows a responsible AI loop: map what could go wrong, measure current outputs, mitigate with layered controls, then deploy, monitor, and repeat. (SRC-106 L31–89; SRC-106 L282–305) The demo compares default guardrails with stricter custom guardrails applied to a GPT-4.1 deployment in Foundry. (SRC-106 L366–552)

## Key claims

- Generative AI is less predictable than other content forms, so teams must watch what it generates and how it can be misused. (SRC-106 L12–30)
- Mapping generates the to-dos, checks, and harms that the team must mitigate against. (SRC-106 L31–47)
- Measurement tests the current solution for harms across user inputs, tools, RAG systems, and web inputs. (SRC-106 L48–75)
- Mitigation requires a layered approach rather than one single control. (SRC-106 L76–89)
- User-experience controls can limit characters, chats, or conversation length. (SRC-106 L90–121)
- System messages can scope behavior, but the presenter says an instruction alone is not always followed. (SRC-106 L122–148)
- The Foundry safety system can stop content before it reaches the model or before generated content returns to the user. (SRC-106 L149–202)
- Model choice can consider safety metrics when models are close to users. (SRC-106 L203–231)
- Responsible operation requires monitoring, review, and looping back through the lifecycle. (SRC-106 L282–305)
- Guardrails can rate conversations for violence, hate, sexual, and self-harm risks. (SRC-106 L306–326)
- Guardrail-related safety tooling can also examine protected material, groundedness, and personally identifiable information. (SRC-106 L335–358)
- The demo shows default V2 guardrails and then stricter custom guardrails applied to GPT-4.1. (SRC-106 L366–552)

## How it works

The episode starts from the non-determinism of generative AI and turns that into a safety workflow. (SRC-106 L12–30) The mapping stage lists possible harms before looking at output, while measurement tests whether those harms appear in the current solution. (SRC-106 L31–75) Mitigation is layered across user experience, system messages and grounding, the safety system, and model choice. (SRC-106 L76–231) Management is accountability through deployment, monitoring, review, and repeated mapping when new attack opportunities appear. (SRC-106 L282–305)

## Segment guide

- **Opening and risk premise, L3–30** — introduces the episode and frames generative AI output as unpredictable and risky. (SRC-106 L3–30)
- **Map and measure, L31–75** — explains mapping as listing harms and measurement as testing current outputs and input sources. (SRC-106 L31–75)
- **Layered mitigation, L76–231** — covers user experience, system messages and grounding, safety system, and model choice. (SRC-106 L76–231)
- **Manage and repeat, L282–305** — ties responsible AI to accountability, monitoring, review, and looping back. (SRC-106 L282–305)
- **Guardrails concepts, L306–365** — describes guardrails for risk categories, protected material, groundedness, and PII. (SRC-106 L306–365)
- **Foundry guardrails demo, L366–552** — shows default guardrails, creates stricter ones, applies them to a model, and compares blocked outputs. (SRC-106 L366–552)
- **Review and close, L553–629** — reviews assessment prompts and repeats map, guardrail, test, launch, and repeat. (SRC-106 L553–629)

## Code and API patterns

Not covered by this source. The episode uses portal configuration and a live demo rather than SDK code. (SRC-106 L366–552)

## Key terms

- **Mapping** — listing harms and checks before focusing on outputs. (SRC-106 L31–57)
- **Measurement** — testing current outputs and input sources for identified harms. (SRC-106 L48–75)
- **Layered approach** — multiple defenses instead of a single harm-prevention control. (SRC-106 L76–89)
- **Guardrails** — tools that rate conversations across risk categories and can halt problematic content. (SRC-106 L306–326)
- **Intervention point** — a place guardrails can act, including input before the model, output after generation, or tool calls. (SRC-106 L459–482)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks why a system message is insufficient, the episode supports layered defense because instructions may not always be followed. (SRC-106 L122–148)
- **Inference:** If default guardrails are not enough, the episode supports building and applying a custom guardrail system. (SRC-106 L327–334; SRC-106 L427–552)
- **Inference:** If harmful content can enter through RAG, web, or tools, measurement and guardrails need to consider more than direct user prompts. (SRC-106 L58–75; SRC-106 L459–482)

## Assessment items

The episode verbally reviews three questions: why to create an AI impact assessment, which Foundry capabilities mitigate harmful content at the safety-system level, and why to use phased delivery. (SRC-106 L553–573) Answer not shown in capture. (SRC-106 L553–573)

## Tensions, caveats and currency

- **Stale-risk:** The demo references GPT-4.1, default V2 guardrails, and tool-call intervention points, which are platform details that may change. (SRC-106 L366–391; SRC-106 L459–482)
- The transcript is auto-captioned and conversational, so paired Learn units are stronger evidence for exact terminology. (SRC-106 L3–629)
- The presenter says the demo prompts are mild and may not trigger default guardrails, so the demo is not an exhaustive safety test. (SRC-106 L384–391; SRC-106 L499–552)

## Relation to other sources

- [[src-182-plan-responsible-generative-ai-solution]] gives the concise map-measure-mitigate-manage lifecycle. (SRC-182 L14–18)
- [[src-153-map-potential-harms]] gives the formal mapping steps. (SRC-153 L216–244)
- [[src-154-measure-potential-harms]] defines baselining and criteria. (SRC-154 L12–20)
- [[src-156-mitigate-potential-harms]] gives the Learn version of layered mitigation and Foundry guardrails. (SRC-156 L217–240)
- [[src-152-manage-responsible-generative-ai-solution]] gives the Learn version of prerelease and operational readiness. (SRC-152 L217–233)

## Connections

- [[responsible-ai-lifecycle]] — episode structure.
- [[guardrails-and-content-filters]] — demo focus.
- [[prompt-injection-and-jailbreaks]] — jailbreak and system-message subversion appear in guardrails discussion.
- [[model-selection]] — safety metrics influence model choice.
- [[observability-and-tracing]] — management needs monitoring and visibility.
- [[microsoft-foundry]] — portal demo platform.
- [[azure-ai-content-safety]] — content risk categories align with content safety.
- *Module units:* [[src-112-introduction-implement-responsible-generative-ai-solution-microsoft-foundry|1 Introduction]] · [[src-182-plan-responsible-generative-ai-solution|2 Plan a responsible generative AI solution]] · [[src-153-map-potential-harms|3 Map potential harms]] · [[src-154-measure-potential-harms|4 Measure potential harms]] · [[src-156-mitigate-potential-harms|5 Mitigate potential harms]] · [[src-152-manage-responsible-generative-ai-solution|6 Manage a responsible generative AI solution]] · [[src-57-exercise-apply-guardrails-prevent-output-harmful-content|7 Exercise - Apply guardrails to prevent the output of harmful content]] · [[src-170-module-assessment-implement-responsible-generative-ai-solution-microsoft-foundry|8 Module assessment]] · [[src-211-summary-implement-responsible-generative-ai-solution-microsoft-foundry|9 Summary]]

## Open questions

- The episode does not provide exported guardrail configuration or API payloads. (SRC-106 L366–552)
- The episode mentions external automated testing datasets but does not name one. (SRC-106 L536–545)

## Sources

- SRC-106 — raw file: [[106-Implement a responsible generative AI solution in Microsoft Foundry - AI-103 - Episode 6]]

---
title: "Key tensions across sources"
type: synthesis
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Exam-relevant tensions where corpus sources qualify or narrow one another, or where the study guide outpaces the teaching corpus."
area: corpus
source_ids: [SRC-1, SRC-43, SRC-98, SRC-99, SRC-124, SRC-178, SRC-191, SRC-227, SRC-228, SRC-231, SRC-236]
objectives: []
objective_gaps: [G14]
tags: []
aliases: ["contradictions"]
---

# Key tensions across sources

## Summary

**Synthesis:** The tensions recorded here are qualifications rather than direct conflicts between sources: source types that narrow one another, time-sensitive facts, and official-study-guide objectives that outpace the teaching captures (SRC-191 L101–102; SRC-98 L211–233; SRC-99 L217–225).

## Scope and question

**Inference:** This page records tensions that matter for study decisions: where two sources disagree, where an episode or study aid should not override official Learn text, and where the study guide names a capability that the teaching corpus does not explain (SRC-191 L100–102).

## Synthesis

| **Synthesis:** Tension | Side A | Side B | Status |
|---|---|---|---|
| Speech MCP authentication | The Speech MCP episode walks through key-based setup and a SAS URL in the portal demo (SRC-43 L250–330). | The Learn text states the Speech MCP server uses key-based authentication and requires a resource key plus blob-container SAS URL (SRC-236 L248–262). | **Synthesis:** The episode also says the connection may authenticate "by API key or by something like a managed identity" (SRC-43 L98–103), but every documented and demonstrated step uses a key and a SAS URL; treat key + SAS as the taught path and managed identity as unspecified by the corpus (SRC-43 L250–330; SRC-236 L248–262). |
| Translation language counts | The translation episode discusses supported-language discovery and broad language support in the client (SRC-228 L90–150). | The episode reports "137 languages supported at this point in time" (SRC-228 L389–390); the Translator unit says "over 90 supported languages" (SRC-227 L216). | **Stale-risk:** The counts are consistent but capture-dated; treat any count as non-durable unless a current product doc is checked (SRC-228 L389–390; SRC-227 L216; SRC-191 L101). |
| Responses API vs ChatCompletions | Responses is recommended for new Foundry application development and replaces older ChatCompletions for most scenarios (SRC-99 L217–225). | ChatCompletions remains useful for maintenance and cross-platform compatibility (SRC-98 L211–233). | **Synthesis:** Not a product conflict, but an exam decision boundary: new stateful Foundry app usually points to Responses; compatibility or maintenance can still point to ChatCompletions (SRC-99 L217–225; SRC-98 L211–233). |
| Microsoft Agent Framework vs older lineage | Microsoft Agent Framework is the current lesson object, but its intro says it evolves from Semantic Kernel and AutoGen (SRC-124 L210–223). | The orchestration unit content teaches Microsoft Agent Framework patterns while older lineage names remain relevant (SRC-231 L214–264). | **Stale-risk:** Preserve the current lesson name but explain old names as lineage/URL drift (SRC-124 L210–223). |
| Chain-of-thought in study guide vs teaching safety | The study guide objective names chain-of-thought evaluations and self-critique loops (SRC-191 L157). | The prompt-engineering unit teaches chain-of-thought prompting for non-reasoning models, and notes reasoning models handle step-by-step logic internally; it does not teach hidden chain-of-thought evaluation loops (SRC-178 L245–266). | **Synthesis:** A coverage gap, not a source conflict: the official objective names an area the corpus only partially teaches (SRC-191 L157; SRC-178 L245–266). **Inference:** use observable traces and evaluations rather than exposing hidden reasoning. |
| Official guide vs Study Cram | The Study Cram is a study aid that points learners back to the official exam site (SRC-1 “Microsoft exam site”). | The study guide supplies official audience, domain weights, GA/Preview note and objective wording (SRC-191 L100–119). | **Synthesis:** Use SRC-191 for official exam scope; use SRC-1 only as a study aid with verbatim anchors (SRC-1 “Microsoft exam site”; SRC-191 L100–119). |

## Evidence map

| Synthesis: claim | Sources |
|---|---|
| The official guide is time-bound and allows common preview features. | SRC-191 L100–102 |
| Speech MCP raw evidence documents and demonstrates key/SAS setup; managed identity appears only as an episode aside. | SRC-43 L98–103; SRC-43 L250–330; SRC-236 L248–262 |
| Responses and ChatCompletions are a qualified boundary, not a simple deprecation. | SRC-99 L217–225; SRC-98 L211–233 |
| Agent Framework naming is current teaching plus lineage/URL drift. | SRC-124 L210–223; SRC-231 L214–264 |
| Chain-of-thought objective breadth exceeds the prompt-engineering unit's safe teaching content. | SRC-191 L157; SRC-178 L245–266 |

## Tensions

- **Synthesis:** The Responses/ChatCompletions tension remains unresolved only if phrased as *which API is correct*. The corpus resolves it by scenario: Responses for new stateful Foundry work, ChatCompletions for maintenance/compatibility (SRC-99 L217–225; SRC-98 L211–233).
- **Synthesis:** The chain-of-thought/self-critique objective remains a true coverage tension (not a source conflict): the study guide names it, but the teaching capture only covers prompt engineering patterns and does not teach self-critique loops (SRC-191 L157; SRC-178 L245–266).
- **Stale-risk:** Product counts, names and preview flags should be rechecked before exam booking because the official guide is date-stamped and preview-aware (SRC-191 L101–102).

## Implications for the exam and for practice

**Inference:** When a source tension appears in a scenario, prefer the source type closest to the task: official study guide for exam scope, Learn text for product behaviour, episode transcript for walkthrough context, and Study Cram for review only (SRC-191 L100–119; SRC-1 “Microsoft exam site”).

## Open questions

- **Open question:** Does current Microsoft Learn still position Responses as replacing ChatCompletions for most Foundry scenarios? Close with current Responses and ChatCompletions docs (SRC-99 L217–225; SRC-98 L211–233).
- **Open question:** What official current guidance exists for self-critique loops and chain-of-thought evaluations without exposing hidden reasoning? Close with current Foundry evaluation and safety documentation (SRC-191 L157; SRC-178 L245–266).

## Sources

- SRC-1 — [[src-1-ai-103-develop-ai-apps-agents-azure-study-cram]] — study aid and official-site anchor.
- SRC-43 — [[src-43-develop-speech-agent-azure-speech-mcp-server-episode-19]] — Speech MCP episode setup.
- SRC-98 — [[src-98-generate-responses-chatcompletions-api]] — ChatCompletions compatibility role.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses API recommendation.
- SRC-124 — [[src-124-introduction-develop-ai-agent-microsoft-agent-framework]] — Agent Framework lineage.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — prompt-engineering chain-of-thought unit.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official guide.
- SRC-227 — [[src-227-translate-text]] — Translator unit: "over 90 supported languages".
- SRC-228 — [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] — translation language support discussion.
- SRC-231 — [[src-231-understand-agent-orchestration]] — Agent Framework orchestration page.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Speech MCP authentication and requirements.



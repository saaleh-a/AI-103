---
title: "Open questions"
type: synthesis
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Questions raised but not answered by the corpus, grouped by capability area and source type needed to close them."
area: corpus
source_ids: [SRC-2, SRC-8, SRC-51, SRC-62, SRC-75, SRC-102, SRC-143, SRC-156, SRC-178, SRC-184, SRC-187, SRC-191, SRC-222, SRC-223, SRC-228, SRC-236]
objectives: []
objective_gaps: []
tags: []
aliases: []
---

# Open questions

## Summary

**Synthesis:** The corpus raises unanswered questions in four recurring ways: official objectives without lessons, preview/currency facts, external labs whose steps are not captured, and code/table captures collapsed to placeholders (SRC-191 L121–201; SRC-2 L295–296; SRC-62 L211–217; SRC-8 L219–241).

## Scope and question

**Inference:** This page lists questions the tutor should not answer from memory unless a current source is deliberately added. Each question includes the source that raises it and the kind of source that would close it.

## Synthesis

### Exam-objective coverage

| Inference: question | Raised by | Sources that would close it |
|---|---|---|
| How should learners monitor data ingestion quality, search index health and relevance performance? | The study guide names the objective, while search-index material teaches querying rather than monitoring (SRC-191 L133; SRC-187 L212–268). | Current Azure AI Search monitoring, indexer diagnostics and relevance evaluation docs. |
| What is the expected AI-103 pattern for reflection, chain-of-thought evaluations and self-critique loops? | The guide names these loops; the prompt unit only teaches chain-of-thought prompting for non-reasoning models (SRC-191 L157; SRC-178 L245–266). | Current Foundry evaluation docs that use observable traces and evaluator outputs without exposing hidden chain-of-thought. |
| What are the required image-editing patterns for inpainting and mask-based edits? | The guide names inpainting and mask-based edits (SRC-191 L164). | Current image-generation/editing API docs and Learn exercises. |
| What exactly is pro mode in Content Understanding? | The guide names single-task and pro-mode pipelines; the image/analyzer material teaches analyzers and schemas but not pro mode (SRC-191 L174; SRC-8 L207–254). | Current Azure Content Understanding mode documentation and portal/API walkthroughs. |
| What is the required approach for multimodal reasoning from audio inputs? | The guide names audio-input reasoning; Speech MCP teaches speech-to-text and text-to-speech tools (SRC-191 L189; SRC-236 L225–262). | Current multimodal model audio-input docs, SDK examples and model-support matrix. |

### Responsible AI and visual policy

| Inference: question | Raised by | Sources that would close it |
|---|---|---|
| How should apps detect prompt injection embedded in image text? | The guide names embedded-image-text prompt injection, while guardrails material teaches prompt shields generically (SRC-191 L178; SRC-156 L229–232). | Current multimodal prompt-shield or image-safety docs with implementation guidance. |
| How are watermarks, prohibited symbols and brand-policy rules enforced? | The guide names these visual policy requirements (SRC-191 L179). | Current content-safety vision policy, watermarking and brand-compliance docs. |
| What counts as unsafe or disallowed visual content for AI-103? | The guide names visual content filters; guardrails content focuses on text/prompt/response safety categories (SRC-191 L177; SRC-156 L222–232). | Current visual moderation taxonomy and configuration docs. |

### Operationalization, monitoring and CI/CD

| Inference: question | Raised by | Sources that would close it |
|---|---|---|
| What is the canonical CI/CD pipeline for Foundry projects? | The guide names Foundry CI/CD; developer-tooling pages introduce tools but do not teach a full pipeline (SRC-191 L129; SRC-51 L212–238). | Current Foundry DevOps/GitHub Actions/Azure DevOps pipeline docs. |
| How should Application Insights tracing, alerts, dashboards and token analytics be set up? | Monitoring pages mention Application Insights and production tracing, but not setup steps (SRC-222 L260–285; SRC-223 L270–294). | Current Application Insights integration, alert-rule and workbook/dashboard docs for Foundry agents/apps. |
| How should rate-limit backoff and cost monitoring be implemented? | The study guide names quotas, rate limits and cost footprints (SRC-191 L131); model/agent monitoring pages mention latency, token consumption and cost but not an implementation pattern (SRC-223 L270–294). | Current quota/rate-limit SDK guidance and Azure cost-monitoring docs. |

### Retrieval, search and grounding

| Inference: question | Raised by | Sources that would close it |
|---|---|---|
| How is hybrid search configured end to end? | The guide names semantic, hybrid and vector search; RAG/search pages teach search and retrieval concepts but not hybrid query configuration (SRC-191 L194; SRC-102 L234–265; SRC-187 L212–268). | Current Azure AI Search hybrid query, vector field and semantic configuration docs. |
| How should grounding quality be monitored over time? | The study guide names grounding quality and drift; corpus monitoring pages are thinner than the objective (SRC-191 L132; SRC-222 L260–285). | Current groundedness evaluators, evaluation pipelines and production monitoring docs. |

### Source-capture and lab questions

| Inference: question | Raised by | Sources that would close it |
|---|---|---|
| What exact code belongs in collapsed `Copy` blocks for Content Understanding, Language, Speech and Search lessons? | Captures show placeholders where code or tables should be, such as image-analysis schema and Python SDK calls (SRC-8 L219–241). | Re-captured Microsoft Learn pages or linked GitHub lab code at the same version. |
| What are the external lab steps for exercise-only units? | Exercise captures tell learners to launch a lab without including the steps (SRC-62 L211–217; SRC-75 L208–213). | The linked GitHub lab repositories or current Learn exercise content. |
| What are the correct answers for incomplete knowledge-check captures? | The orchestration knowledge check starts at question 2 and withholds checking until all questions are answered (SRC-143 L8–23). | Current Learn knowledge-check pages or exported answer keys. |

### Currency and preview

| Inference: question | Raised by | Sources that would close it |
|---|---|---|
| Which preview features are still preview and common enough for exam coverage? | The study guide permits commonly used preview features, and Work IQ explicitly says preview (SRC-191 L101; SRC-2 L295–296). | Current Microsoft Learn product status pages and exam-study-guide updates. |
| Which model names, defaults and catalog counts are still current? | Content Understanding and model-catalog material names specific defaults and catalog behaviours (SRC-184 L210–236; SRC-191 L101). | Current model catalog, Content Understanding API and region/model availability docs. |
| Has translator language support changed? | The translation episode teaches language-list discovery but does not establish a durable count (SRC-228 L90–150). | Current Azure Translator language support page. |

## Evidence map

| Synthesis: claim | Sources |
|---|---|
| Official objectives raise capabilities not fully taught in lessons. | SRC-191 L121–201 |
| Exercise and code captures are thin. | SRC-62 L211–217; SRC-75 L208–213; SRC-8 L219–241; SRC-143 L8–23 |
| Preview and model/catalog facts require current verification. | SRC-191 L101–102; SRC-2 L295–296; SRC-184 L210–236 |

## Tensions

**Synthesis:** These are open questions rather than contradictions; the proper action is to seek current docs or mark a study gap, not to invent a missing lesson (SRC-191 L121–201).

## Implications for the exam and for practice

**Inference:** Use the open questions as a shopping list for a targeted external-doc pass after corpus study, prioritising official objectives marked named-only and current-preview topics (SRC-191 L101–201).

## Open questions

**Synthesis:** This page itself is the open-question list; unresolved items should be closed only by adding or citing current, authoritative Microsoft documentation (SRC-191 L101–102).

## Sources

- SRC-2 — [[src-2-access-microsoft-365-data-work-iq]] — Work IQ preview.
- SRC-8 — [[src-8-analyze-images-content-understanding]] — collapsed image-analysis code/table capture.
- SRC-51 — [[src-51-developer-tools-sdks]] — developer tools and toolkit scope.
- SRC-62 — [[src-62-exercise-create-generative-ai-chat-app]] — external lab exercise.
- SRC-75 — [[src-75-exercise-generate-video-sora-2-microsoft-foundry]] — external lab exercise.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG scope.
- SRC-143 — [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework]] — incomplete knowledge-check capture.
- SRC-156 — [[src-156-mitigate-potential-harms]] — guardrails and prompt shields.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — chain-of-thought prompting.
- SRC-184 — [[src-184-prepare-ai-content-understanding-api]] — model defaults and Content Understanding setup.
- SRC-187 — [[src-187-search-index]] — search query scope.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official objective and currency statements.
- SRC-222 — [[src-222-test-iterate-integrated-agent]] — tracing and testing mention.
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — Application Insights production monitoring mention.
- SRC-228 — [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] — language support discussion.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Speech MCP scope.




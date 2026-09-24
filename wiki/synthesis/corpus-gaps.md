---
title: "Corpus gaps"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Official objectives and thin captures the corpus names without fully teaching, with no invented missing content."
area: exam
source_ids: [SRC-5, SRC-8, SRC-24, SRC-53, SRC-62, SRC-75, SRC-89, SRC-102, SRC-143, SRC-156, SRC-178, SRC-187, SRC-188, SRC-191, SRC-196, SRC-222, SRC-223, SRC-235, SRC-236]
objectives: []
objective_gaps: [P05, P08, P09, P10, P11, P12, P14, P15, G01, G12, G14, G15, V03, V07, V09, V12, V13, V14, V15, V16, T02, T06, T07, I02]
tags: []
aliases: ["coverage gaps"]
---

# Corpus gaps

## Summary

**Synthesis:** This page records official objectives whose wording outpaces the bundled teaching corpus: some are named only, while others are partly taught but leave a named subrequirement thin or absent (SRC-191 L126–134; SRC-191 L154–158; SRC-191 L164–189; SRC-191 L194).

## Scope and question

**Inference:** This page records what the corpus contains and what is missing. It does not teach missing exam content, and it treats app gap notes as leads to verify against raw source lines (SRC-191 L121–201).

## Synthesis

### Named-only official objectives

| **Synthesis:** Objective | What the corpus contains | What is missing |
|---|---|---|
| P11 — monitor data ingestion quality, search index health, and relevance performance | The study guide names the objective (SRC-191 L133). Search-index teaching explains index fields, full-text search, filters, facets and sorting (SRC-187 L212–268). | The corpus does not teach monitoring data-ingestion quality, index-health monitoring, or relevance-performance monitoring workflows. |
| G14 — reflection, chain-of-thought evaluations, self-critique loops | The study guide names reflection, chain-of-thought evaluations and self-critique loops (SRC-191 L157). Prompt-engineering teaching covers chain-of-thought prompting and says reasoning models handle step-by-step logic internally (SRC-178 L245–266). | The corpus does not teach reflection or self-critique loop implementation, nor an evaluation pattern for hidden chain-of-thought. |
| V03 — inpainting, mask-based edits, prompt-driven modifications | The study guide names image-editing workflows, inpainting and mask-based edits (SRC-191 L164). | The corpus does not teach inpainting or mask-based image edit workflows. |
| V07 — concise/detailed captions for single or multiple images | The study guide names concise or detailed captions for single or multiple images (SRC-191 L169). Content Understanding image teaching says image analysis can generate descriptions and extract structured data (SRC-8 L207–254). | The corpus does not teach a captioning configuration for multiple images. |
| V09 — alt text and extended accessibility descriptions | The study guide names alt-text and accessibility-aligned extended descriptions (SRC-191 L171). | The corpus does not teach accessibility guidance or alt-text generation requirements. |
| V12 — single-task and pro-mode Content Understanding pipelines | The study guide names single-task and pro-mode Content Understanding pipelines (SRC-191 L174). Content Understanding image teaching explains analyzers and schema-based extraction (SRC-8 L207–254). | The corpus does not explain pro mode or contrast it with single-task mode. |
| V14 — unsafe or disallowed visual content filters | The study guide names unsafe or disallowed visual-content filters (SRC-191 L177). Responsible AI teaching covers general content filters, severity levels and prompt shields for generative AI guardrails (SRC-156 L222–232). | The corpus does not teach visual-content classification setup. |
| V15 — indirect prompt injection through embedded image text | The study guide names embedded-image-text prompt injection (SRC-191 L178). Responsible AI teaching names prompt shields for abuse detection (SRC-156 L229–232). | The corpus does not teach how to detect or mitigate prompt injection carried by image text. |
| V16 — watermarks, prohibited symbols, brand rules, inappropriate content | The study guide names watermarks, prohibited symbols, brand usage and inappropriate-content policy rules (SRC-191 L179). Responsible AI teaching covers generic guardrails and content filters (SRC-156 L222–232). | The corpus does not teach visual watermarking, prohibited-symbol detection, or brand-policy enforcement. |
| T07 — multimodal reasoning from audio inputs | The study guide names multimodal reasoning from audio inputs (SRC-191 L189). Speech MCP material teaches speech-to-text and text-to-speech tools, storage requirements and tool selection (SRC-236 L225–262). | The corpus does not teach multimodal reasoning directly from audio inputs. |

### Partial and thin areas from app gap leads

- **Synthesis:** P05 is partly covered by project, resource, and deployment boundaries, but the broader infrastructure-design objective still has a gap around production topology and infrastructure design beyond Foundry resource/deployment choices (SRC-191 L126; SRC-196 L8–28).
- **Synthesis:** P08 is partly named by the guide as CI/CD pipeline integration (SRC-191 L129); Microsoft 365 Agents Toolkit advanced material references complex integration scenarios, but the corpus does not teach a full Foundry CI/CD pipeline (SRC-5 L212–241).
- **Synthesis:** P09 and G15 are partly covered by token/cost/latency and monitoring summaries, but setup of cost dashboards, rate-limit backoff, token analytics dashboards and latency breakdowns is thin (SRC-191 L131; SRC-191 L158; SRC-196 L8–28; SRC-223 L270–294).
- **Synthesis:** P10 names drift and grounding quality (SRC-191 L132); evaluation and monitoring are mentioned, but drift-specific monitoring is not taught as a workflow (SRC-196 L8–28; SRC-222 L260–285).
- **Synthesis:** P12 names private networking (SRC-191 L134); the corpus teaches keyless/identity or key/SAS patterns in several places, but not private networking design (SRC-24 L209–265; SRC-236 L248–262).
- **Synthesis:** P14 is partly covered by manual and automated evaluation metrics, including safety evaluations, but the corpus does not teach explanation tooling (SRC-53 L230–250; SRC-191 L137).
- **Synthesis:** P15/G12/G15 trace logging and Application Insights are briefly named for production monitoring, but the corpus does not walk through Application Insights tracing, alerts or dashboards (SRC-191 L138; SRC-191 L154; SRC-191 L158; SRC-222 L260–285; SRC-223 L270–294).
- **Synthesis:** G01 is partly covered by model families, deployment and code-generation benchmarks, but the corpus does not teach deploying or consuming code models as a model category (SRC-89 L227–248; SRC-188 L222–227; SRC-191 L142).
- **Synthesis:** T02 sentiment and tone are partially covered: language text analysis and Language MCP material includes sentiment or text-analysis capabilities, while the guide also names tone detection (SRC-191 L183; SRC-24 L209–265; SRC-235 L209–245). The corpus does not teach tone detection setup.
- **Synthesis:** T06 custom speech models are named by the guide's custom-speech objective, while Speech MCP teaching covers speech recognition/synthesis tools and security requirements, not custom model creation (SRC-191 L188; SRC-236 L225–262).
- **Synthesis:** I02 names semantic, hybrid and vector search (SRC-191 L194); RAG and search-index units teach vector/semantic-adjacent retrieval and Lucene-style search, but hybrid query configuration is not taught as an end-to-end setup (SRC-102 L234–265; SRC-187 L212–268).
- **Synthesis:** V13 is partly covered for image regions and object-like visual extraction, but identifying objects, components, or regions within video remains a named gap in the corpus (SRC-191 L175; SRC-8 L232–248).

### Corpus-format gaps

- **Synthesis:** Some captures collapse code or tables to placeholders such as `Copy` or `Expand table`; Content Understanding image analysis names schemas and Python SDK calls without preserving the actual code block (SRC-8 L219–241).
- **Synthesis:** Exercise pages commonly launch an external lab and do not include the lab steps; the generative chat exercise and Sora 2 exercise are examples (SRC-62 L211–217; SRC-75 L208–213).
- **Synthesis:** Some knowledge checks and assessments are incomplete captures: the orchestration knowledge check starts at question 2 and tells the learner to answer all questions before checking work (SRC-143 L8–23).

## Evidence map

| Synthesis: claim | Sources |
|---|---|
| Objective wording outpaces the bundled teaching corpus in monitoring, observability, vision, speech, and search configuration. | SRC-191 L126–134; SRC-191 L154–158; SRC-191 L164–189; SRC-191 L194 |
| Search, RAG and Content Understanding teach neighbouring capabilities but leave monitoring/configuration gaps. | SRC-187 L212–268; SRC-102 L234–265; SRC-8 L207–254 |
| Application Insights and tracing are mentioned but not taught as dashboard/alert setup. | SRC-222 L260–285; SRC-223 L270–294; SRC-196 L8–28 |
| Several captures are thin because code, answers or lab steps are missing. | SRC-8 L219–241; SRC-62 L211–217; SRC-143 L8–23 |

## Tensions

**Synthesis:** The biggest tension is coverage, not contradiction: the official study guide is broader than the bundled teaching corpus in infrastructure design, observability setup, visual responsibility, audio reasoning, and search/relevance monitoring (SRC-191 L133; SRC-191 L157; SRC-191 L164–179; SRC-191 L189).

## Implications for the exam and for practice

**Inference:** For named-only objectives, the tutor should mark coverage as missing and seek current Microsoft Learn docs before teaching; it should not fill the gap from general memory (SRC-191 L121–201).

## Open questions

- **Open question:** Which current Microsoft Learn modules teach visual safety policy, alt text, inpainting and pro-mode Content Understanding? Close with current product docs for each objective (SRC-191 L164–179).
- **Open question:** Which official docs teach Application Insights dashboards/alerts for Foundry agents? Close with current monitoring and Application Insights integration docs (SRC-222 L260–285; SRC-223 L270–294).

## Sources

- SRC-5 — [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] — advanced toolkit integration lead.
- SRC-8 — [[src-8-analyze-images-content-understanding]] — image analysis and collapsed code/table capture.
- SRC-24 — [[src-24-connect-language-mcp-server-agent]] — Language MCP setup.
- SRC-62 — [[src-62-exercise-create-generative-ai-chat-app]] — thin external exercise.
- SRC-75 — [[src-75-exercise-generate-video-sora-2-microsoft-foundry]] — thin Sora exercise.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG and vector-retrieval context.
- SRC-143 — [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework]] — incomplete knowledge check capture.
- SRC-156 — [[src-156-mitigate-potential-harms]] — generic guardrails and prompt shields.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — chain-of-thought prompting coverage.
- SRC-187 — [[src-187-search-index]] — search-index querying coverage.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official objective wording.
- SRC-196 — [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models]] — monitoring summary.
- SRC-222 — [[src-222-test-iterate-integrated-agent]] — tracing / testing mention.
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — Application Insights production monitoring mention.
- SRC-235 — [[src-235-understand-azure-language-mcp-server]] — Language MCP capabilities.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Speech MCP capabilities and auth.



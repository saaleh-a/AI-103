---
title: "Retrieval and grounding options compared"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Compares File Search, Azure AI Search, Foundry IQ, Web Search, semantic/vector search, and Content Understanding for grounding."
area: retrieval
source_ids: [SRC-4, SRC-8, SRC-19, SRC-22, SRC-23, SRC-85, SRC-91, SRC-102, SRC-147, SRC-194, SRC-239, SRC-255, SRC-257, SRC-259, SRC-261]
objectives: [P02, P03, P04, G02, G08, G09, I02, I05, I07]
objective_gaps: []
tags: []
aliases: []
---

# Retrieval and grounding options compared

## Summary

**Synthesis:** Retrieval for AI-103 separates by source ownership and control: `file_search` grounds responses in uploaded files, [[azure-ai-search]] provides the controllable enterprise index and RAG retrieval component, [[foundry-iq]] packages shared agent knowledge bases on Azure AI Search, [[web-search-tool]] grounds on current public web information, and [[azure-content-understanding]] can prepare multimodal content as markdown or structured output for later search and RAG (SRC-255 L218–241; SRC-91 L237–242; SRC-102 L240–256; SRC-85 L217–246; SRC-257 L218–241; SRC-8 L232–239).

## Scope and question

**Inference:** This page answers: when a scenario says *ground the model*, which retrieval or source-preparation option is the right fit, and which tempting neighbour should be rejected? It covers retrieval options taught by the corpus, not general production retrieval design.

## Synthesis

### Decision table

| **Synthesis:** Deciding question | `file_search` | Azure AI Search | Foundry IQ | Web Search | Content Understanding before retrieval |
|---|---|---|---|---|---|
| Where does the knowledge live? | Uploaded files or documents in a vector store (SRC-255 L218–241; SRC-259 L224–227). | Structured, semi-structured, or unstructured enterprise data indexed by a search service (SRC-261 L218–228). | Business-domain knowledge bases connected to SharePoint, Blob Storage, OneLake, Web, or Azure AI Search indexes (SRC-85 L223–238; SRC-22 L12–18). | Public web information that may change after model training (SRC-257 L218–227). | Documents, images, video, or audio that must first be converted into markdown, fields, confidence, or grounding (SRC-8 L232–248). |
| Who manages indexing/retrieval? | Tool-managed vector store over uploaded files (SRC-255 L235–241). | Developer/platform team controls indexes, fields, skillsets, semantic/vector/hybrid retrieval, filters, facets, scoring (SRC-102 L240–250; SRC-261 L218–228). | Foundry IQ handles discovery, chunking, embeddings, indexing, reindexing, strategy selection, ranking and citations (SRC-85 L232–246). | The model/tool generates web queries, reviews sources, and combines findings into the answer (SRC-257 L235–241). | Analyzer extracts a representation; search/RAG still happens downstream (SRC-8 L232–239). |
| Best when | The corpus is a bounded set of uploaded files and the model/agent should cite file evidence (SRC-255 L218–227). | The scenario names existing indexes, enterprise-scale indexed sources, filters, facets, custom scoring, semantic ranking, or vector indexes (SRC-22 L16–20; SRC-91 L241–242). | Multiple agents need reusable governed knowledge without each app building custom RAG infrastructure (SRC-85 L217–221; SRC-194 L220–221). | The answer needs current public facts such as pricing, releases, policies, or events (SRC-257 L220–227). | The source asset is multimodal or semi-structured and needs normalized markdown/JSON first (SRC-8 L232–248). |
| Not enough when | The requirement is an existing enterprise search estate or many business-domain sources (SRC-91 L241–242; SRC-255 L255). | The requirement is just a quick uploaded-file tool or a managed agent knowledge product (SRC-255 L218–227; SRC-85 L217–221). | The task is to design the search index itself or use only a small uploaded file set (SRC-22 L16–20; SRC-255 L218–227). | The information is private, controlled, or not safe to retrieve from public web results (SRC-22 L38–47; SRC-255 L218–227). | It is not itself a query-time retrieval engine; it prepares content for search/RAG (SRC-8 L232–239). |
| Corpus gaps | Vector-store limits, chunking defaults and citation schema are not covered by the corpus (SRC-255 L251–255). | Hybrid-search configuration, vector field schema and semantic ranker tuning are not covered by the corpus (SRC-102 L246–250). | Permission propagation, limits and API objects for knowledge bases are not covered by the corpus (SRC-85 L219–246). | Ranking controls, source allow/block lists and regional availability are not covered by the corpus (SRC-257 L248–252). | Full schema-method table and production analyzer versioning policy are not covered by the corpus (SRC-8 L223–248). |

### Near-miss scenario contrasts

1. **Inference:** *A support bot must answer from five uploaded policy PDFs.* Choose `file_search`, because the deciding detail is uploaded files in a vector store (SRC-255 L218–241). *A support bot must answer from an existing enterprise search index with filters and scoring profiles.* Choose Azure AI Search or an Azure AI Search Index source for Foundry IQ, because the deciding detail is the existing indexed search estate (SRC-22 L16–20; SRC-91 L241–242).
2. **Inference:** *Several agents share product, support, and analytics knowledge from SharePoint, Blob Storage, OneLake, and an existing index.* Choose Foundry IQ because it organizes business-domain knowledge bases and abstracts indexing/retrieval for agents (SRC-85 L223–246; SRC-22 L12–18). *One application team must design fields, facets, skillsets, and query behaviour directly.* Choose Azure AI Search because those controls belong to the search service/index layer (SRC-261 L218–228; SRC-102 L240–250).
3. **Inference:** *The model must cite today's public product-release announcement.* Choose Web Search because the source is current public web information (SRC-257 L218–227). *The model must cite an internal product-release plan.* Choose a controlled private retrieval source, not Web Search, because web grounding gives less control over referenced sources and is public-facing (SRC-22 L38–47; SRC-255 L218–227).
4. **Inference:** *A batch of scanned forms and site photos must become fields and markdown before any agent uses them.* Use Content Understanding or Document Intelligence-style extraction before retrieval; the deciding detail is content preparation, not query-time search (SRC-8 L232–248). *A user asks questions over already indexed cleaned content.* Use search/RAG retrieval rather than another extraction analyzer (SRC-102 L240–256).

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| RAG retrieves trusted content, augments the prompt and generates grounded answers. | SRC-102 L227–230; SRC-239 L224–231 |
| Azure AI Search is the corpus's controllable search/index/RAG backbone. | SRC-102 L240–256; SRC-261 L218–228 |
| Keyword, semantic, vector and hybrid search are distinct retrieval techniques, but hybrid configuration is not taught. | SRC-102 L246–250 |
| File Search is a tool over uploaded files and a dedicated vector search index. | SRC-255 L218–241; SRC-259 L224–227 |
| Foundry IQ is a managed agent knowledge platform built on Azure AI Search. | SRC-85 L219–246; SRC-194 L220–221 |
| Foundry IQ source choice includes Azure AI Search Index, Blob Storage, Web, SharePoint and OneLake. | SRC-22 L12–18 |
| Agent retrieval instructions should specify when to retrieve, how to cite, and fallback when information is missing. | SRC-23 L223–237 |
| Web Search is for current public web information and has source-quality/currency limitations. | SRC-257 L218–252 |
| Content Understanding markdown can support search/RAG scenarios. | SRC-8 L232–239 |
| File Search and Azure AI Search are explicitly contrasted in the agent tools source. | SRC-91 L237–242 |

## Tensions

- **Synthesis:** The corpus recommends hybrid search for generative AI applications, but it does not teach hybrid-search configuration, weighting, index schema or semantic-ranker settings (SRC-102 L246–250).
- **Tension:** Foundry IQ reduces RAG infrastructure work, but source quality and instructions still control results; even excellent semantic ranking can fail if the agent is not instructed when and how to retrieve (SRC-23 L217–237; SRC-194 L222–227).
- **Stale-risk:** Web Search, Foundry IQ source support, and File Search vector-store behaviour are platform-moving features; the corpus gives decision boundaries, not production limits (SRC-257 L248–252; SRC-255 L251–255).

## Implications for the exam and for practice

- **Inference:** Exam wording about *uploaded files* points to `file_search`; *existing index, filters, semantic ranking, custom scoring* points to Azure AI Search; *shared knowledge bases for agents* points to Foundry IQ; *fresh public information* points to Web Search (SRC-255 L218–241; SRC-22 L16–20; SRC-85 L217–246; SRC-257 L218–227).
- **Inference:** In practice, start discovery with four questions: where the trusted data lives, how current it must be, whether it needs citations, and whether the team wants to operate search infrastructure directly (SRC-22 L79–83; SRC-23 L223–237; SRC-102 L240–256).
- **Inference:** Retrieval is not a safety guarantee. Grounding can reduce unsupported answers, but sensitive outputs still need evaluation, review and safety controls (SRC-255 L252; SRC-257 L225).

## Open questions

- Hybrid-search configuration, vector index schemas, chunking defaults, reranker settings, quota/rate-limit behaviour and exact citation payloads are not covered by the corpus (SRC-102 L246–250; SRC-255 L251–255).

## Sources

- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — service-provided tool category.
- SRC-8 — [[src-8-analyze-images-content-understanding]] — Content Understanding markdown, confidence and grounding outputs.
- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — RAG quality depends on search/index/chunking.
- SRC-22 — [[src-22-configure-data-sources-knowledge-bases]] — Foundry IQ source options and Web/Azure AI Search boundaries.
- SRC-23 — [[src-23-configure-retrieval-foundry-iq]] — retrieval instructions and fallback behavior.
- SRC-85 — [[src-85-explore-foundry-iq]] — Foundry IQ as managed knowledge platform.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — File Search versus Azure AI Search boundary.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG, embeddings, keyword/semantic/vector/hybrid retrieval.
- SRC-147 — [[src-147-knowledge-check-build-knowledge-enhanced-ai-agents-foundry-iq]] — scoring profiles and retrieval behaviour assessment.
- SRC-194 — [[src-194-summary-build-knowledge-enhanced-ai-agents-foundry-iq]] — retrieval-quality techniques.
- SRC-239 — [[src-239-understanding-rag-agents]] — agent RAG framing.
- SRC-255 — [[src-255-file-search-tool]] — File Search behaviour, flow and limits.
- SRC-257 — [[src-257-web-search-tool]] — Web Search behaviour and limitations.
- SRC-259 — [[src-259-what-are-tools]] — Responses API tool list.
- SRC-261 — [[src-261-what-is-azure-ai-search]] — Azure AI Search service scope and applications.


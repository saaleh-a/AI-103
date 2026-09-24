---
title: "AI enrichment and skillsets"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Skillsets are ordered AI skills run by an indexer to add enriched fields before mapping content into an Azure AI Search index."
area: retrieval
source_ids: [SRC-52, SRC-92, SRC-130, SRC-176, SRC-181, SRC-187, SRC-261]
objectives: [P03, G09, I01, I03, I04, I06]
tags: []
aliases: ["skillset", "built-in skills", "custom skills", "enrichment pipeline", "AI skills"]
objective_gaps: []
---

# AI enrichment and skillsets

## Summary

AI enrichment is the indexing-time step where an indexer applies a skillset of AI skills in order, creating enriched fields such as language, key phrases, entities, OCR text, captions, tags, translations, or custom extracted values. (SRC-52 L218–232; SRC-92 L237–257)

## The problem it solves

Raw documents often do not contain the fields users want to search, filter, analyze, or ground answers with. AI enrichment creates additional fields from text and images during indexing so the final index or knowledge store contains inferred insights, not just original metadata. (SRC-261 L221–223; SRC-130 L216–218)

## Mental model

A skillset is a sequence of transformations on the in-progress index document. Each skill reads from a context in the document hierarchy and writes new fields. Later skills can use earlier outputs. The indexer orchestrates this sequence. (SRC-52 L218; SRC-92 L237–257)

## What the sources say

- The module introduction names AI skills as the mechanism for enrichment, including language detection, key phrase extraction, and image analysis. (SRC-130 L216–218)
- The AI enrichment unit says an indexer-orchestrated enrichment pipeline uses a skillset of AI skills to create AI-enriched fields, applying each skill in order. (SRC-52 L218)
- Built-in skills include capabilities from Foundry Tools such as Azure Vision and Azure Language. (SRC-52 L220)
- Built-in enrichment examples include language detection, entity/place extraction, key phrase extraction, translation, PII extraction or removal, text extraction from images, and image captions/tags. (SRC-52 L220–227)
- To use built-in skills, the indexer needs access to a Foundry Tools resource: a restricted Azure AI Search resource limited to indexing 20 or fewer documents, or a Foundry Tools resource in the same region as the Azure AI Search resource. (SRC-52 L228)
- Custom skills can perform custom logic over input data and return new field values; the source gives an Azure Function wrapping Azure Document Intelligence as an example. (SRC-52 L230–232)
- The search-index source explains that AI-generated values can become indexed insights such as OCR text, entities, and key phrases. (SRC-261 L221–223)
- The module assessment asks which service supports built-in AI skills in Azure AI Search. (SRC-176 L221)

## How it works in Azure

Skills operate within the hierarchical document produced during indexing. A language detection skill might write a `language` field. An OCR skill can run for each image in `normalized_images`. A merge skill can combine original text with OCR text into `merged_content`. (SRC-92 L237–257)

After the enrichment pipeline finishes, skill outputs are explicitly mapped from their hierarchical location to target index fields. (SRC-92 L269–271)

## Code and configuration

The corpus does not provide a full skillset JSON definition. It does provide configuration requirements: choose built-in or custom skills, ensure built-in skills have an accessible Foundry Tools resource, use Azure Function for custom skill logic when needed, and explicitly map skill output fields into index fields. (SRC-52 L220–232; SRC-92 L269–271)

## Decision boundaries

| **Inference:** Choice | Use it when | Closest confusion |
|---|---|---|
| Built-in skill | The needed enrichment is one of the corpus's built-in examples such as language, entities, key phrases, translation, PII, OCR, captions, or tags. (SRC-52 L220–227) | Custom skill. |
| Custom skill | You need custom logic or to wrap a specialized service such as Document Intelligence through Azure Functions. (SRC-52 L230–232) | Built-in skill. |
| Skillset | You need ordered enrichment during indexing. (SRC-52 L218) | Search query or ranking, which happens after the index exists. (SRC-187 L228–268) |

**Inference:** If a scenario asks how to add OCR text, language, entities, or Document Intelligence output during ingestion, the answer belongs on the skillset/enrichment side, not on the query side. (SRC-52 L220–232; SRC-92 L237–271)

## Failure modes and misconceptions

- Assuming skill outputs are automatically searchable misses the explicit mapping requirement into target index fields. (SRC-92 L269–271)
- Assuming all enrichment is built in misses custom skills for custom logic or wrappers around other document-extraction services. (SRC-52 L230–232)
- Ignoring resource access and region constraints can break built-in skills: the indexer must have access to the relevant Foundry Tools resource, and the attached resource must be in the same region as the Azure AI Search resource. (SRC-52 L228)

## Solution Engineering transfer

**Inference:** A practical discovery question is: *Which fields do users need that are not already present in the source documents?* If the answer includes language, entities, key phrases, OCR, PII, or image tags, built-in skills may fit; if it includes a domain-specific extractor, a custom skill may be needed. (SRC-52 L220–232)

## Connections

- [[azure-ai-search]] — service in which enrichment runs. (SRC-261 L221–223)
- [[indexers-and-data-sources]] — indexers orchestrate skillsets during indexing. (SRC-52 L218; SRC-92 L218–221)
- [[search-indexes]] — enriched fields are mapped into index fields. (SRC-92 L269–271)
- [[knowledge-store]] — skillsets can define knowledge-store projections. (SRC-181 L222)
- [[azure-functions]] — custom skills can be implemented as Azure Functions. (SRC-52 L230–232)
- [[azure-document-intelligence]] — example service wrapped by a custom skill. (SRC-52 L230–232)
- [[src-52-enrich-extracted-data-ai-skills]] — primary enrichment source.
- *Also linked from:* [[knowledge-mining]] · [[named-entity-recognition]]

## Sources

- SRC-52 — [[src-52-enrich-extracted-data-ai-skills]] — built-in and custom skills.
- SRC-92 — [[src-92-extract-data-indexer]] — enrichment document hierarchy and mappings.
- SRC-130 — [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search]] — enrichment in module scope.
- SRC-176 — [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search]] — assessment cue for built-in skills.
- SRC-181 — [[src-181-persist-extracted-information-knowledge-store]] — skillset-to-knowledge-store relation.
- SRC-187 — [[src-187-search-index]] — query-side contrast.
- SRC-261 — [[src-261-what-is-azure-ai-search]] — enriched index contents.

## Open questions

- The corpus does not provide complete skillset JSON, skill input/output path syntax, or custom skill HTTP contract details. (SRC-52 L218–232)

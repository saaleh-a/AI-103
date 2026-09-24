---
title: "Analyze documents with Content Understanding - AI-103 - Episode 25"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Demonstrates Content Understanding analyzers across documents, slides, audio, and video, then shows a Python/API flow."
area: extraction
source_ids: [SRC-7]
objectives: [I06, I07, I08, V10, V12]
tags: [content-understanding, episode, analyzers, python, multimodal-analysis]
aliases: ["SRC-7"]
source_kind: episode
module: "Analyze documents with Content Understanding"
learning_path: null
unit: null
presenters: ["AVA", "JENNY", "LISA", "ROB FOULKROD", "HARRY", "MAX"]
raw_file: "7-Analyze documents with Content Understanding - AI-103 - Episode 25.md"
url: "https://www.youtube.com/watch?v=tWgf8ODQQv0"
ingest_depth: full
---

# Analyze documents with Content Understanding - AI-103 - Episode 25

*episode · Analyze documents with Content Understanding · SRC-7*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-7 |
| Raw file | 7-Analyze documents with Content Understanding - AI-103 - Episode 25.md |
| Kind | episode |
| Learning path | None |
| Module | Analyze documents with Content Understanding |
| Unit / episode | Episode 25 |
| Presenter(s) | AVA, JENNY, LISA, ROB FOULKROD, HARRY, MAX |
| URL | https://www.youtube.com/watch?v=tWgf8ODQQv0 |
| Teaching content | L3–1337 of 1337 |
| Content length | ~6056 words |
| Capture quality | Medium; transcript is auto-captioned and contains minor speaker-name drift. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames the goal as one analyzer that can reach across documents, slides, audio, and video and pull out the information the application needs. (SRC-7 L4–14) The episode demonstrates prebuilt and custom analyzer workflows in Content Understanding Studio, then shows a code path that creates an analyzer from JSON and analyzes binary content with a client application. (SRC-7 L188–275; SRC-7 L938–1235)

## Key claims

- Content Understanding is presented as a way to handle data that arrives as documents, slides, audio, video, and other mixed formats. (SRC-7 L4–14)
- The session covers document, audio, and video analysis; defining a schema; creating an analyzer; choosing a base analyzer; defining fields; selecting a model; and running analysis from a client application. (SRC-7 L17–33)
- In Studio, the user uploads a document, video, or audio file so the tool has context for the analyzer. (SRC-7 L44–53)
- A document analyzer can associate highlighted content with fields such as invoice number, invoice date, and due date, including data type expectations like currency or date. (SRC-7 L82–113)
- An analyzer is described as a template for the type of data that came in and the fields to extract. (SRC-7 L146–169)
- Prebuilt analyzers are available in the AI Services models area, and the layout example extracts invoice values without much field configuration. (SRC-7 L188–261)
- Prebuilt analysis is useful for dissimilar documents that need a best-guess approach, while custom schema work is useful for many documents of the same type and precise fields. (SRC-7 L262–275)
- In custom invoice analysis, the demo adds a generated `TotalQuantity` field and reports a confidence value for the result. (SRC-7 L381–428)
- The slide analyzer uses fields such as title, summary, chart count, and lists of objects for quarterly revenue and product categories. (SRC-7 L500–586)
- The audio example extracts caller, summary, requested actions, callback number, and alternative contact information from voicemail. (SRC-7 L629–695)
- The video example extracts a meeting summary, participant count, participant names, slide overview, and assigned actions. (SRC-7 L740–878)
- The code path requires a Foundry project and authentication through Entra ID or an API key, with a preference stated for Entra ID over API keys. (SRC-7 L938–973)
- Analyzer schemas can be exported from Studio and are JSON documents. (SRC-7 L977–986)
- The API flow uses `begin create analyzer` with a definition and name, then `Begin Analysis` with an analyzer name and either URL or binary data. (SRC-7 L1010–1039)
- Analysis results include field values, locations, and confidence values between zero and one. (SRC-7 L1044–1053)
- The Python demo uses an endpoint, analyzer name, JSON definition, `DefaultAzureCredential`, API version, `begin create analyzer`, and `begin analyze binary`. (SRC-7 L1096–1174; SRC-7 L1190–1235)

## How it works

The episode begins with a Studio-first mental model: upload representative content, identify the fields that matter, define a schema, and build an analyzer that can be reused on new content of that type. (SRC-7 L44–169) The prebuilt layout analyzer is shown as a quick route for invoice extraction when a best-guess approach is sufficient. (SRC-7 L188–265) The custom path creates projects and schemas for invoices, slides, voicemail, and meeting videos, showing that fields can be strings, numbers, arrays, or lists of objects. (SRC-7 L281–360; SRC-7 L500–586; SRC-7 L629–695; SRC-7 L812–839)

For code, the episode moves from Studio to an application flow: configure a Foundry project, authenticate, define or export a JSON schema, create the analyzer asynchronously, then analyze content by URL or binary upload and inspect JSON results. (SRC-7 L938–1053)

## Code and API patterns

The code walkthrough identifies these objects and calls rather than showing a complete copyable listing. (SRC-7 L1096–1235)

- Configuration includes an endpoint pointing to a `resource.services.ai.azure.com` host and an analyzer name constant. (SRC-7 L1096–1111)
- The JSON analyzer definition includes fields for company, name, title, email, and phone, plus model references including GPT-4.1 and text-embedding-3-large. (SRC-7 L1113–1128)
- The helper creates a client with endpoint, credential, and API version. (SRC-7 L1158–1165)
- Analyzer creation loads the JSON definition, calls `begin create analyzer`, supplies the analyzer name, definition, and `allow replace`, then waits for a result. (SRC-7 L1167–1179)
- Analysis reads a business-card file and calls `client.begin analyze binary` with the analyzer name and binary data. (SRC-7 L1190–1208)
- The result is parsed as JSON and iterated so the application can print extracted fields. (SRC-7 L1210–1235)

## Key terms

- **Analyzer** — a repeatable template for a content type, its fields, and where to look for information. (SRC-7 L146–169)
- **Schema** — the definition of the pieces of information to extract; the episode says schemas are JSON documents and can be exported from Studio. (SRC-7 L977–986; SRC-7 L1280–1283)
- **Base analyzer** — the starting analyzer selected in a JSON definition, with prebuilt document described as a common document starting point. (SRC-7 L990–999)
- **Confidence** — a zero-to-one value indicating how confident the service is that an extracted value is correct. (SRC-7 L1044–1053)

## Decision boundaries and exam cues

- **Inference:** Use prebuilt analyzers when the scenario needs quick best-guess extraction across dissimilar documents; use custom analyzers when many same-type documents require precise fields. (SRC-7 L188–275)
- **Inference:** If a scenario asks for application integration, the episode points away from Studio-only use and toward project setup, authentication, JSON schema, analyzer creation, and analysis calls. (SRC-7 L938–1053)
- **Inference:** Confidence scores support automation gates: the episode suggests accepting high-confidence values and routing lower-confidence ones for human review. (SRC-7 L1049–1066)
- **Stale-risk:** The named model examples GPT-4.1 and text-embedding-3-large are platform-specific and should be rechecked before implementation. (SRC-7 L1118–1121)

## Assessment items

1. You need to extract vendor names, line items, and totals from photographed sales receipts. Which prebuilt analyzer should you use? (SRC-7 L1259–1263)
   - Answer shown in transcript: receipt analyzer. (SRC-7 L1264–1267)
2. Which confidence score range indicates a value suitable for automated processing? (SRC-7 L1268–1269)
   - Answer shown in transcript: 0.9 or above; confidence values range between zero and one, and higher values indicate greater confidence. (SRC-7 L1270–1275)
3. What should you define for the information you want to extract from content? (SRC-7 L1276–1279)
   - Answer shown in transcript: a schema. (SRC-7 L1280–1283)

## Segment guide

- L4–33 — Session frame: mixed data formats, one analyzer, schema definition, analyzer creation, model choice, authentication, and client analysis. (SRC-7 L4–33)
- L44–169 — Studio overview: upload representative content, associate detected information with fields, transcribe audio, analyze video frames and transcript, and build a reusable analyzer. (SRC-7 L44–169)
- L188–275 — Prebuilt layout analyzer: uploads a PDF invoice, extracts common invoice values, and contrasts best-guess prebuilt extraction with precise custom extraction. (SRC-7 L188–275)
- L281–470 — Custom invoice analyzer: creates a custom schema, removes and suggests fields, adds a generated total quantity field, tests confidence, builds the analyzer, and retests on another invoice. (SRC-7 L281–470)
- L500–620 — Slide/image analyzer: defines title, summary, chart count, and list-of-object fields for chart data, then builds and tests a slide analyzer. (SRC-7 L500–620)
- L629–733 — Audio analyzer: extracts caller, summary, actions, callback number, and alternative contact information from voicemail examples. (SRC-7 L629–733)
- L740–939 — Video analyzer: extracts meeting summary, participants, slide overview, and assigned actions, then tests on a second meeting. (SRC-7 L740–939)
- L938–1235 — Code path: requires project and authentication, uses JSON schema and analyzer creation, then analyzes binary content and reads JSON results. (SRC-7 L938–1235)
- L1255–1322 — Knowledge check and wrap-up: receipt analyzer, confidence threshold, schema definition, and summary of schema, base analyzer/model selection, and end-to-end API use. (SRC-7 L1255–1322)

## Tensions, caveats and currency

- The transcript is auto-captioned and includes a speaker-name typo, `ROB FOUKROD`, in one location. (SRC-7 L720–733)
- The presenter states Entra ID is preferred over API keys, but API keys still work. (SRC-7 L966–973)
- **Stale-risk:** Model names, Studio URLs, and exact UI labels in this episode can change over time. (SRC-7 L281–303; SRC-7 L1118–1121)

## Relation to other sources

- [[src-126-introduction-create-multimodal-analysis-solution-azure-content-understanding]] gives the concise module introduction that this episode demonstrates in depth. (SRC-126 L214–216; SRC-7 L4–33)
- [[src-30-create-content-understanding-analyzer]] matches the Studio project, schema, testing, and analyzer-building workflow. (SRC-30 L214–243; SRC-7 L281–939)
- [[src-250-content-understanding-api]] matches the asynchronous analyzer-consumption pattern shown in the code segment. (SRC-250 L216–233; SRC-7 L938–1235)
- [[src-184-prepare-ai-content-understanding-api]] overlaps on endpoint, authentication, SDK setup, and required model deployments. (SRC-184 L221–234; SRC-7 L938–973; SRC-7 L1118–1121)

## Connections

- [[azure-content-understanding]] — the service demonstrated throughout the episode. (SRC-7 L17–24)
- [[content-understanding-analyzers]] — the episode's main artifact is reusable analyzers. (SRC-7 L146–169)
- [[content-understanding-client-apps]] — the final third demonstrates application/API use. (SRC-7 L938–1235)
- [[microsoft-foundry]] — code and Studio setup require a Foundry project/resource context. (SRC-7 L938–961)
- [[microsoft-entra-id]] — Entra ID is one authentication path and the preferred direction stated by the presenter. (SRC-7 L966–973)
- [[extraction-options-compared]] — prebuilt versus custom analyzer choices and multimodal extraction examples support comparison work. (SRC-7 L188–275)

## Open questions

- The transcript does not provide a clean full code listing; it narrates the important client, schema, and method names. (SRC-7 L1096–1235)
- The episode does not document exact Content Understanding service limits or pricing. (SRC-7 L4–1337)

## Sources

- SRC-7 — raw file: [[7-Analyze documents with Content Understanding - AI-103 - Episode 25]]

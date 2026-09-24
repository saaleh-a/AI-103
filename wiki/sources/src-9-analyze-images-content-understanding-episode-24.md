---
title: "Analyze images with Content Understanding - AI-103 - Episode 24"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode demo of using Content Understanding Studio and Python to build an image analyzer that extracts descriptions and tags."
area: extraction
source_ids: [SRC-9]
objectives: []
tags: [content-understanding, episode, image-analysis, content-understanding-studio, python, storage-account]
aliases: ["SRC-9"]
source_kind: episode
module: "Analyze images with Content Understanding"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "9-Analyze images with Content Understanding - AI-103 - Episode 24.md"
url: "https://www.youtube.com/watch?v=PLbh3DdyZS8"
ingest_depth: full
---

# Analyze images with Content Understanding - AI-103 - Episode 24

*episode · Analyze images with Content Understanding · SRC-9*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-9 |
| Raw file | 9-Analyze images with Content Understanding - AI-103 - Episode 24.md |
| Kind | episode |
| Learning path | null |
| Module | Analyze images with Content Understanding |
| Unit / episode | Episode 24 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=PLbh3DdyZS8 |
| Teaching content | L3–532 of 532 |
| Content length | ~2,345 words |
| Capture quality | Medium: auto-captioned transcript with some inaudible text and likely product-name drift. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod presents Azure Content Understanding as a purpose-built tool for turning images and other content into structured insights. (SRC-9 L25–41) The demo uses Content Understanding Studio to connect a Foundry resource, create a project, define a schema with description and tags, build an analyzer, then call it from Python with `client.begin_analyze`. (SRC-9 L173–178; SRC-9 L224–282; SRC-9 L301–421)

## Key claims

- Understanding images at scale and pulling structured insights from photos, screenshots, scans, and diagrams is positioned as business-value work. (SRC-9 L4–13)
- Content Understanding is purpose-built for analyzing video, audio, documents, forms, and images and giving a text representation for reuse. (SRC-9 L25–41; SRC-9 L69–75)
- In an inventory scenario, Content Understanding could prepopulate tags and titles from item photos so humans validate rather than manually enter all data. (SRC-9 L42–60)
- The presenter says a large language model could perform the inventory task, but would be more expensive and slower than Azure Content Understanding. (SRC-9 L61–68)
- Content Understanding Studio is presented as a separate purpose-built portal at `contentunderstanding.ai.azure.com`. (SRC-9 L97–112)
- The code flow uses an endpoint, credentials, an analyzer, image bytes, and a JSON result. (SRC-9 L128–166)

## How it works

The episode begins by contrasting general model usage with a purpose-built service. (SRC-9 L25–33) Content Understanding is described as looking at media or documents, understanding what is in them, and giving a text representation that can be used elsewhere. (SRC-9 L34–41)

The demo workflow starts in Content Understanding Studio rather than the usual Foundry model playground. (SRC-9 L97–120) The presenter says Studio can be used like a playground to test sample images before switching to code. (SRC-9 L113–125)

Before building the analyzer, the presenter creates a storage account because analyzer and project data need persistence. (SRC-9 L179–193) In Studio configuration, the resource is tied to the project, and the interface offers to auto-deploy models such as GPT 4.1, GPT 4.1 mini, GPT 5.2, and embeddings. (SRC-9 L224–254)

The project is created to extract content and fields with a schema. (SRC-9 L255–264) After uploading a lion JPEG, the system identifies the project as image analysis. (SRC-9 L283–300)

The schema contains a `description` field as a string and a `tags` field as a list of strings. (SRC-9 L301–334) Running the analyzer produces a lion description and eight tags, after which the analyzer is built and named `demo1`. (SRC-9 L335–364)

The code demo copies the endpoint, sets analyzer name `demo 1`, creates a Content Understanding client, reads local image bytes, calls `client.begin_analyze`, receives a result, and prints the `description` and `tags` fields. (SRC-9 L365–437)

## Code and API patterns

The episode names the important client-side objects and calls, but the transcript does not preserve full source code. (SRC-9 L389–421)

- Authentication can use either an API key or an Entra ID identity. (SRC-9 L134–143)
- The client is configured with an endpoint and credential. (SRC-9 L128–143)
- The application reads image bytes and supplies an analyzer. (SRC-9 L144–157)
- The result is a JSON document with values such as a description and eligible tags. (SRC-9 L158–166)
- In the Python demo, the interesting call is `client.begin_analyze`, with the analyzer name and image bytes passed in. (SRC-9 L413–421)
- The output processing reads the `description` field and loops through array values in the `tags` field collection. (SRC-9 L422–437)

## Segment guide

- **Intro and problem framing, L3–24:** The episode frames structured insight from visual content as the business-value part of image work. (SRC-9 L3–24)
- **Why Content Understanding, L25–75:** The presenter positions Content Understanding as purpose-built for images and other content, with a lower-cost and faster fit than a general LLM for the inventory example. (SRC-9 L25–75)
- **Studio and client architecture, L76–178:** The episode shows image-summary output, introduces Content Understanding Studio, and sketches the endpoint, credential, analyzer, image bytes, and JSON-result flow. (SRC-9 L76–178)
- **Storage and Studio setup, L179–282:** The demo creates a storage account, connects a resource, auto-deploys required models, and creates a project. (SRC-9 L179–282)
- **Schema and analyzer build, L283–364:** The demo uploads a lion image, defines `description` and `tags`, runs the analyzer, and builds it as `demo1`. (SRC-9 L283–364)
- **Python execution, L365–469:** The demo copies the endpoint, configures code, calls `client.begin_analyze`, and prints descriptions and tags for sample images. (SRC-9 L365–469)
- **Knowledge check and recap, L470–532:** The presenter reviews that Content Understanding builds analyzers for documents, images, video, and audio, and identifies Content Understanding Studio as the graphical tool. (SRC-9 L470–532)

## Key terms

- **Content Understanding Studio** — the graphical tool for creating a Content Understanding project, separate from the Foundry portal playground. (SRC-9 L97–120; SRC-9 L480–488)
- **Analyzer** — the built artifact that receives data and extracts the fields the schema requests. (SRC-9 L150–157; SRC-9 L356–364)
- **`client.begin_analyze`** — the Python call identified as the interesting part of analysis, receiving analyzer name and bytes. (SRC-9 L413–421)
- **Description field** — a string field in the demo schema. (SRC-9 L311–325)
- **Tags field** — a list-of-strings field in the demo schema. (SRC-9 L326–334)

## Decision boundaries and exam cues

- **Inference:** Choose Content Understanding over a general LLM when the task is repeatable extraction of structured image metadata and the scenario emphasizes scale, speed, or cost. (SRC-9 L42–68)
- **Inference:** Choose Content Understanding Studio when the task asks for the graphical tool to create a Content Understanding project. (SRC-9 L480–488)
- **Inference:** Expect a storage dependency in portal setup because the demo says analyzer and project data need somewhere to persist. (SRC-9 L179–193)
- **Inference:** A code scenario that includes endpoint, credential, analyzer name, image bytes, and `begin_analyze` is describing the Content Understanding client-app path. (SRC-9 L128–166; SRC-9 L413–421)

## Assessment items

The episode includes two presenter-led recall checks rather than a Learn module assessment. (SRC-9 L470–488)

1. **Question:** What kind of AI solution is Azure Content Understanding designed to help you build? (SRC-9 L470–475)  
   **Answer shown in transcript:** Analyzers that extract information from documents, images, video, and audio files. (SRC-9 L476–479)

2. **Question:** What graphical tool should you use to create an Azure Content Understanding project? (SRC-9 L480–483)  
   **Answer shown in transcript:** Content Understanding Studio. (SRC-9 L484–488)

## Tensions, caveats and currency

- **Stale-risk:** The auto-deployed model names GPT 4.1, GPT 4.1 mini, GPT 5.2, and embeddings are time-sensitive platform details from a demo. (SRC-9 L231–249)
- The episode uses the term `EntraID` in captions; the source's product naming may be auto-captioned and should be treated cautiously. (SRC-9 L134–143)
- The transcript contains an inaudible fragment during the command run. (SRC-9 L438–440)

## Relation to other sources

- [[src-8-analyze-images-content-understanding]] provides the Learn-unit version of the image analyzer and confidence-score material; this episode shows a concrete demo. (SRC-8 L213–254; SRC-9 L283–437)
- [[src-55-exercise-analyze-images-content-understanding]] has the same portal-plus-Python shape as the episode demo. (SRC-55 L209; SRC-9 L173–178; SRC-9 L365–437)
- [[src-264-what-is-content-understanding]] generalizes the episode's image-specific demo to documents, images, video, and audio. (SRC-264 L12; SRC-9 L69–75; SRC-9 L476–479)

## Connections

- [[azure-content-understanding]] — the episode's central service. (SRC-9 L25–41)
- [[content-understanding-analyzers]] — the demo builds and runs an analyzer. (SRC-9 L301–364)
- [[content-understanding-client-apps]] — the episode demonstrates endpoint, credential, client, and `begin_analyze` usage. (SRC-9 L128–166; SRC-9 L389–421)
- [[microsoft-entra-id]] — the presenter says Entra ID identity can authenticate Content Understanding. (SRC-9 L134–143)
- [[extraction-options-compared]] — the episode contrasts a purpose-built extraction tool with a general LLM for an inventory-image scenario. (SRC-9 L61–68)
- *Module units:* [[src-137-introduction-analyze-images-content-understanding|1 Introduction]] · [[src-264-what-is-content-understanding|2 What is Content Understanding-]] · [[src-8-analyze-images-content-understanding|3 Analyze images with Content Understanding]] · [[src-55-exercise-analyze-images-content-understanding|4 Exercise - Analyze images with Content Understanding]] · [[src-169-module-assessment-analyze-images-content-understanding|5 Module assessment]] · [[src-216-summary-analyze-images-content-understanding|6 Summary]] · [[src-7-analyze-documents-content-understanding-episode-25|episode 25]]

## Open questions

- The transcript does not show the exact Python source code, package name, or import statements. (SRC-9 L389–421)
- The demo mentions Document Intelligence later but does not compare it in this episode. (SRC-9 L216–223)

## Sources

- SRC-9 — raw file: [[9-Analyze images with Content Understanding - AI-103 - Episode 24]]

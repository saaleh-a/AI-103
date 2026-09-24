---
title: "Develop a vision-enabled generative AI application - AI-103 - Episode 22"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough for deploying a multimodal model and building a Python visual chat app with image URLs or Base64 image data."
area: vision
source_ids: [SRC-47]
objectives: [P01, G01, G06, V06, V08]
tags: [episode, vision-enabled-chat, multimodal-models, responses-api, chat-completions-api]
aliases: ["SRC-47"]
source_kind: episode
module: "Develop a vision-enabled generative AI application"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "47-Develop a vision-enabled generative AI application - AI-103 - Episode 22.md"
url: "https://www.youtube.com/watch?v=Xlo-VDqYrz4"
ingest_depth: full
---

# Develop a vision-enabled generative AI application - AI-103 - Episode 22

*episode · Develop a vision-enabled generative AI application · SRC-47*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-47 |
| Raw file | `47-Develop a vision-enabled generative AI application - AI-103 - Episode 22.md` |
| Kind | episode |
| Learning path | null |
| Module | Develop a vision-enabled generative AI application |
| Unit / episode | Episode 22 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=Xlo-VDqYrz4 |
| Teaching content | L3–481 of 481 |
| Content length | ~2244 words |
| Capture quality | High enough for teaching; auto-captioned with minor transcription noise. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames visual AI as seeing, creating, extracting, and finding across images, generated media, documents, audio, video, Content Understanding, and Azure AI Search. (SRC-47 L10–44) This episode focuses on deploying a model that works with both images and text and then building a visual chat app on top of it. (SRC-47 L54–60) The implementation pattern is to select a multimodal model, deploy it, test it with an image prompt in Foundry, and call it from Python using either Chat Completions or Responses API with image URLs or Base64 image data. (SRC-47 L63–92; SRC-47 L185–219; SRC-47 L254–399)

## Key claims

- The broader topic covers visual AI tasks: understanding images, generating images and videos, extracting structured data from documents, and searching extracted content. (SRC-47 L10–39)
- The session's specific goal is to deploy a model that works with both images and text and build a visual chat app on top. (SRC-47 L54–60)
- Multimodal models can understand text and images, and applications commonly supply text and image prompts together. (SRC-47 L63–77)
- Chat Completions and Responses API can both be used with images in prompts, depending on application needs. (SRC-47 L78–92)
- For Chat Completions, the episode shows reading an image from disk, creating a Base64 data URL, and sending a user prompt with text plus that data URL. (SRC-47 L93–140)
- For Responses API, the episode describes using an input array, optional instructions, a role, text content, and an image URL, then reading `output_text`. (SRC-47 L141–169)
- The Foundry walkthrough selects a GPT 4.1 model card because it has text and image processing and vision tasks, then deploys it. (SRC-47 L185–199)
- The portal test uploads a fruit image, asks what desserts can be made with it, and receives mango dessert suggestions after the model identifies the image. (SRC-47 L201–219)
- The Python app uses an OpenAI client with DefaultAzureCredential, an endpoint, and a deployed model name. (SRC-47 L230–265)
- The sample uses a system prompt for a grocery-store fruit assistant and sends a prompt plus an image URL to `client.responses.create`. (SRC-47 L267–306)
- For local image upload, the app reads a JPEG file, builds a Base64 data URL, replaces the remote image URL with that image data, and keeps the rest of the request mostly the same. (SRC-47 L371–399)
- The episode wrap-up says multimodal models accept both text and image input, both inputs should typically be included in the same message, and Chat Completions or Responses API can work. (SRC-47 L441–460)

## How it works

The episode starts from the model layer: a vision-enabled application needs a multimodal model that understands text and images. (SRC-47 L63–77) The API layer can be either Chat Completions or Responses API for prompts that include images. (SRC-47 L78–92) The image content can be provided as a data URL containing Base64 encoded image data or as an image URL. (SRC-47 L104–115; SRC-47 L156–160)

The Foundry portal flow is to start with a project, discover a model, inspect the model card for text and image processing plus vision tasks, deploy the model, and test it by uploading an image in the playground. (SRC-47 L180–219) The application flow is to configure the endpoint and model name, create a DefaultAzureCredential and OpenAI client, define a system prompt, and call `client.responses.create` with a system role and user content containing both prompt text and an image URL. (SRC-47 L230–306) The local-file variation reads image bytes from disk, builds a Base64 data URL, and uses that value as the image URL input. (SRC-47 L371–399)

## Segment guide

- **Topic framing and visual AI scope, L3–46:** The episode places vision-enabled generative AI inside a broader visual AI topic that includes image understanding, media generation, structured extraction, Content Understanding, and Azure AI Search. (SRC-47 L3–46)
- **Session goal, L47–62:** The presenter says screenshots can become part of prompts and sets the session goal: deploy a model for images plus text and build a visual chat app. (SRC-47 L47–62)
- **Model and API overview, L63–92:** The presenter explains multimodal models, combined text/image prompts, and the use of either Chat Completions or Responses API for image-containing prompts. (SRC-47 L63–92)
- **Chat Completions pattern, L93–140:** The presenter describes reading a local image, creating a Base64 data URL, and sending a messages array with system and user roles where the user content includes text and image data. (SRC-47 L93–140)
- **Responses API pattern, L141–169:** The presenter describes an input array with optional instructions, role, text content, image URL, and `output_text`. (SRC-47 L141–169)
- **Foundry deployment and playground test, L170–220:** The demo selects a model with text and image processing, deploys it, uploads a mango image, and asks for dessert ideas. (SRC-47 L170–220)
- **Python app with remote image URL, L221–337:** The demo configures environment variables, creates an OpenAI client with DefaultAzureCredential, sends a grocery-store assistant prompt and image URL through `client.responses.create`, and gets orange recipe responses. (SRC-47 L221–337)
- **Python app with local image upload, L338–420:** The demo switches from a remote image URL to reading a local dragon-fruit JPEG, encoding it as Base64 data URL, and sending that in the image field. (SRC-47 L338–420)
- **Knowledge-check answers and wrap-up, L421–481:** The episode answers the review questions with multimodal models, multi-part user messages, URL or Base64 data, and closes by saying the session deployed a multimodal model and built a visual chat app. (SRC-47 L421–481)

## Code and API patterns

The Chat Completions pattern reads a local image, creates a `data:image/...;base64,...` data URL, places a system prompt in the messages array, and places text plus image data in the user prompt. (SRC-47 L93–140) The Responses API pattern supplies an input array, optional instructions, role and content, text content, image URL, and reads text output through `output_text`. (SRC-47 L141–169)

The episode's Python app uses `DefaultAzureCredential`, an OpenAI client, an endpoint, and a deployed model name. (SRC-47 L254–265) The episode names `client.responses.create` as the call used with the model name and input containing a system role plus user prompt and image URL. (SRC-47 L288–306)

```text
client.responses.create
```

For local upload, the code path reads a JPEG from disk, Base64 encodes the image data, builds a data URL, and substitutes that value where the image URL had been. (SRC-47 L371–399)

## Key terms

- **Multimodal model** — a model in the episode that understands text and images. (SRC-47 L63–68)
- **Visual chat app** — the application built on a model that works with both images and text. (SRC-47 L54–60)
- **Data URL** — the episode's mechanism for passing image format and Base64 encoded data in one image value. (SRC-47 L104–115)
- **Responses API** — one of the APIs the episode uses for image-containing prompts and the API used in the Python app walkthrough. (SRC-47 L87–92; SRC-47 L288–306)
- **Chat Completions API** — the other API the episode says can be used with images in prompts. (SRC-47 L87–92)
- **DefaultAzureCredential** — the Azure credential object used in the Python app before creating the OpenAI client. (SRC-47 L254–265)

## Decision boundaries and exam cues

- **Inference:** If the app must analyze user-supplied images and text together, choose a multimodal model and send both inputs in the same message. (SRC-47 L63–77; SRC-47 L452–455)
- **Inference:** If the image is already hosted, an image URL fits the episode's remote-image pattern. (SRC-47 L278–306; SRC-47 L338–347)
- **Inference:** If the image is local, encode it as Base64 data and use a data URL in the image field. (SRC-47 L371–399)
- **Inference:** If the app talks directly to the model and is not adding an agentic layer, the episode uses the OpenAI endpoint and OpenAI client rather than an agent service. (SRC-47 L230–237; SRC-47 L250–265)
- **Stale-risk:** The demo model name GPT 4.1 and the portal card behavior reflect the captured episode and should be checked against current Foundry availability. (SRC-47 L185–199; SRC-47 L244–248)

## Assessment items

The episode includes an oral review rather than a Learn assessment form. (SRC-47 L421–440)

1. Which kind of model can you use to respond to visual input? (SRC-47 L421–425)
   - Answer stated in episode: multimodal models. (SRC-47 L426–427)
2. How should you submit a prompt that asks a model to analyze an image? (SRC-47 L428–430)
   - Answer stated in episode: a prompt containing a multi-part user message with both text and image content. (SRC-47 L431–434)
3. How can you include an image in a message? (SRC-47 L435–436)
   - Answer stated in episode: either a URL or Base64 encoded data. (SRC-47 L437–440)

## Tensions, caveats and currency

- The transcript appears auto-captioned and contains likely transcription noise, including `surge account` where the intended Azure term may be storage account and `taken provider` where token provider is likely intended. (SRC-47 L338–347; SRC-47 L260–265)
- **Stale-risk:** Model names, model-card capabilities, and deployment defaults in Foundry can change after the recording. (SRC-47 L185–199; SRC-47 L244–248)
- The episode demonstrates a simple one-and-done call and explicitly does not cover much conversation handling in this sample. (SRC-47 L304–312)

## Relation to other sources

- SRC-131 introduces the module's premise that multimodal models can respond to visual input and that Microsoft Foundry can build solutions over text-plus-image prompts. (SRC-131 L211–212)
- SRC-248 gives the compact Learn-unit version of the model deployment and Foundry chat playground test. (SRC-248 L213–221)
- SRC-46 gives the compact Learn-unit version of endpoint connection, multi-part messages, image URL/Base64 input, and Responses versus Chat Completions choices. (SRC-46 L213–223)
- SRC-173 assesses the same three facts the episode reviews: multimodal models, multi-part user messages, and URL or Base64 image inclusion. (SRC-173 L209–222; SRC-47 L421–440)

## Connections

- [[vision-enabled-chat]] — the episode's main build is a visual chat app over image and text input. (SRC-47 L54–60)
- [[responses-api]] — the demo uses `client.responses.create` and `output_text`. (SRC-47 L141–169; SRC-47 L288–306)
- [[chat-completions-api]] — the episode explains Chat Completions as another API for image prompts. (SRC-47 L87–92; SRC-47 L93–140)
- [[openai-sdk]] — the demo imports OpenAI directly and creates an OpenAI client. (SRC-47 L254–265)
- [[keyless-authentication]] — the demo uses DefaultAzureCredential rather than describing an API key. (SRC-47 L254–265)
- [[model-catalog]] — the demo discovers GPT 4.1 through the model discovery/card flow. (SRC-47 L185–195)
- [[model-playgrounds]] — the demo tests the deployed model by uploading an image in the playground. (SRC-47 L201–219)
- [[azure-ai-search]] — the episode frames later visual-data sessions as indexing extracted content for search. (SRC-47 L35–39)
- [[azure-content-understanding]] — the episode frames later visual-data sessions around image analysis and structured extraction with Content Understanding. (SRC-47 L23–39)
- *Module units:* [[src-131-introduction-develop-vision-enabled-generative-ai-application|1 Introduction]] · [[src-248-vision-capable-model-microsoft-foundry-portal|2 Use a vision-capable model in the Microsoft Foundry portal]] · [[src-46-develop-vision-based-chat-app|3 Develop a vision-based chat app]] · [[src-71-exercise-develop-vision-enabled-chat-app|4 Exercise - Develop a vision-enabled chat app]] · [[src-173-module-assessment-develop-vision-enabled-generative-ai-application|5 Module assessment]] · [[src-210-summary-develop-vision-enabled-generative-ai-application|6 Summary]]

## Open questions

- Which current Foundry SDK client classes and parameters correspond exactly to the transcript's described OpenAI client setup?
- What is the recommended secure storage pattern for image URLs or temporary access when using hosted images?
- How should visual-answer accuracy be evaluated for charts, product damage, or domain-specific imagery?

## Sources

- SRC-47 — raw file: [[47-Develop a vision-enabled generative AI application - AI-103 - Episode 22]]

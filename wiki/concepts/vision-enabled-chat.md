---
title: "Vision-enabled chat"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Chat patterns where a multimodal model receives text plus image input and returns grounded visual answers."
area: vision
source_ids: [SRC-46, SRC-47, SRC-131, SRC-173, SRC-191, SRC-210, SRC-248, SRC-258, SRC-260]
objectives: [V06, V08]
objective_gaps: [V07, V09, V15, V16]
tags: []
aliases: ["multimodal chat", "vision-capable models", "image input", "visual question answering", "image-based prompt"]
---

# Vision-enabled chat

## Summary

Vision-enabled chat is the chat-app pattern where a multimodal model receives a prompt that mixes text and image data, then returns text that describes, reasons over, or answers questions about the visual input (SRC-131 L211–212; SRC-210 L213–214). The corpus teaches single-image visual Q&A through Foundry playgrounds and Python client apps, but it only names several official visual-understanding and responsible-visual-AI objectives without teaching their implementation (SRC-191 L168–179).

## The problem it solves

Text-only chat cannot answer questions about a photo, diagram, chart, or other visual evidence. Microsoft frames computer vision as AI applications and agents accepting, interpreting, and processing visual input from images, videos, and live camera streams; multimodal generative models extend this by processing visual input and sometimes generating visual output (SRC-260 L229–230).

## Mental model

**Synthesis:** A vision-enabled prompt is still a chat prompt, but the user message has more than one part: a text instruction or question plus an image item (SRC-46 L213–216). The model then produces a text response, so the response-reading side resembles ordinary text chat even though the input included visual data (SRC-47 L134–140; SRC-47 L166–169).

## What the sources say

- SRC-131 introduces the module: multimodal models can respond to visual input, and the solution uses Microsoft Foundry with prompts that mix text and image data (SRC-131 L211–212).
- SRC-248 says you must deploy a multimodal generative AI model that supports text-based and image-based input; examples in the capture include Phi-4-multimodal-instruct, gpt-4.1, and gpt-4.1-mini (SRC-248 L213–216). **Stale-risk:** model names are catalog examples at capture time.
- SRC-248 shows the portal route: deploy the model, open chat playground, upload a local image, add text, and get a response (SRC-248 L219–221).
- SRC-46 gives the application route: connect to the deployed endpoint, submit messages, and process responses; the key difference from text-only chat is a multi-part user message containing text and image content (SRC-46 L213–216).
- SRC-47 demonstrates both Chat Completions and Responses API shapes for supplying images with prompts, including a base64 data URL for a local image and a user prompt that combines text and the image URL (SRC-47 L87–92; SRC-47 L104–132; SRC-47 L141–165).
- SRC-173 checks the core exam pattern: submit one prompt with a multi-part user message containing both text and image content, and include the image as a URL or binary data (SRC-173 L214–221).

## How it works in Azure

1. Deploy a multimodal model in Microsoft Foundry that supports image input (SRC-248 L213–221).
2. Build the prompt as a message whose content includes both the user’s question and an image content item (SRC-46 L213–216).
3. Provide the image as a web URL or as base64-encoded local image data in a `data:image/...;base64,...` URL (SRC-46 L216).
4. Call either the Responses API or, for models/endpoints that do not support Responses, Chat Completions (SRC-46 L215–221; SRC-47 L87–92).
5. Read the text answer from the response, because the examples ask for text about the image rather than an image output (SRC-47 L134–140; SRC-47 L166–169).

## Code and configuration

The corpus does not print full code in the raw Learn text capture, but it states the important configuration: Responses API image input can be a web image URL or local image encoded in base64 and submitted as `data:image/jpeg;base64,{image_data}` with the MIME type adjusted for PNG or other formats (SRC-46 L215–217). The episode makes the same pattern explicit: read the image from disk, form a data URL with base64 data, include text plus image URL in the user prompt, and then read the text output (SRC-47 L101–140; SRC-47 L141–169).

## Decision boundaries

- **Vision-enabled chat vs image generation:** use vision-enabled chat when the task is to understand an existing image and answer in text; use image generation when the task is to create a new image from a description (SRC-210 L213–214; SRC-258 L219–223).
- **Responses API vs Chat Completions:** **Inference:** both can carry image input in this corpus; the deciding detail is endpoint/model support, because SRC-46 says to use Chat Completions when the model does not support Responses (SRC-46 L215–221).
- **Single image vs multiple images and captions:** the study guide names concise or detailed captions for single or multiple images as V07, but the taught units here demonstrate a multi-part prompt with image content and do not give a separate multiple-image captioning workflow (SRC-191 L168–170; SRC-46 L213–216).
- **Alt text:** the study guide names alt-text and extended descriptions aligned to accessibility guidelines as V09, but the corpus excerpts for vision chat teach visual Q&A and image-based input, not accessibility-oriented alt-text criteria (SRC-191 L170–171; SRC-210 L213–214).

## Failure modes and misconceptions

- Treating the image and question as separate turns is wrong for the assessment item; the checked pattern is one multi-part user message with both text and image content (SRC-173 L214–217).
- Assuming every GPT-style model can see images is unsafe; SRC-248 requires a multimodal model, and the episode explicitly checks that the chosen deployment has text and image processing / vision tasks (SRC-248 L213–221; SRC-47 L173–195).
- **Synthesis:** the study guide lists indirect prompt injection through embedded text in images and visual policy rules such as watermarks, prohibited symbols, brand usage, and inappropriate content, but these vision-chat sources do not teach mitigation workflows for those visual safety objectives (SRC-191 L176–179; SRC-46 L213–221; SRC-248 L219–221).

## Solution Engineering transfer

**Inference:** A customer signal for this pattern is, "Can users upload a photo and ask what is wrong, what it means, or what action to take?" The discovery question is whether the answer must be grounded only in visible evidence, whether the app needs accessibility descriptions, and whether image text or visual policy risks require a separate safety process (SRC-210 L213–214; SRC-191 L170–179).

## Connections

- [[model-selection]] — choosing a multimodal model is the prerequisite.
- [[responses-api]] — one supported API shape for image prompts.
- [[chat-completions-api]] — the fallback API shape when Responses is not supported.
- [[image-generation]] — closest confusion: visual input understanding vs visual output creation.
- [[guardrails-and-content-filters]] — related responsible-AI controls, though visual policy implementation is not taught here.
- [[corpus-gaps]] — V07, V09, V15 and V16 are thin in the corpus.
- [[src-46-develop-vision-based-chat-app]] — Learn unit for the client app pattern.
- [[src-47-develop-vision-enabled-generative-ai-application-episode-22]] — episode walkthrough.
- *Also linked from:* [[decision-boundaries]] · [[model-playgrounds]] · [[overview]] · [[prompt-injection-and-jailbreaks]]

## Sources

- SRC-46 — [[src-46-develop-vision-based-chat-app]] — vision-chat app prompt and API shape
- SRC-47 — [[src-47-develop-vision-enabled-generative-ai-application-episode-22]] — episode walkthrough for multimodal chat
- SRC-131 — [[src-131-introduction-develop-vision-enabled-generative-ai-application]] — module introduction
- SRC-173 — [[src-173-module-assessment-develop-vision-enabled-generative-ai-application]] — assessment clues for prompt shape
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official computer-vision objectives and gaps
- SRC-210 — [[src-210-summary-develop-vision-enabled-generative-ai-application]] — module summary
- SRC-248 — [[src-248-vision-capable-model-microsoft-foundry-portal]] — portal playground and model examples
- SRC-258 — [[src-258-what-are-image-generation-models]] — contrast with image generation
- SRC-260 — [[src-260-what-is-ai]] — computer vision and multimodal context

## Open questions

- Which current Foundry models and API versions best support multi-image captioning and accessibility alt text?
- Which visual prompt-injection and visual policy controls are available in current Foundry safety tooling beyond the study guide’s objective names?

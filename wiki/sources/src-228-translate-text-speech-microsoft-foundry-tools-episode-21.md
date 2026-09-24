---
title: "Translate text and speech with Microsoft Foundry Tools - AI-103 - Episode 21"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of text translation, transliteration, speech translation, and manual versus event-based speech synthesis."
area: speech
source_ids: [SRC-228]
objectives: [T03, T08]
tags: [episode, azure-translator, azure-speech, speech-translation, text-translation, transliteration]
aliases: ["SRC-228"]
source_kind: episode
module: "Translate text and speech with Microsoft Foundry Tools"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "228-Translate text and speech with Microsoft Foundry Tools - AI-103 - Episode 21.md"
url: "https://www.youtube.com/watch?v=bnPIZUZjDyA"
ingest_depth: full
---

# Translate text and speech with Microsoft Foundry Tools - AI-103 - Episode 21

*episode · Translate text and speech with Microsoft Foundry Tools · SRC-228*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-228 |
| Raw file | `228-Translate text and speech with Microsoft Foundry Tools - AI-103 - Episode 21.md` |
| Kind | episode |
| Learning path | null |
| Module | Translate text and speech with Microsoft Foundry Tools |
| Unit / episode | Episode 21 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=bnPIZUZjDyA |
| Teaching content | L3–634 of 634 |
| Content length | ~2697 words |
| Capture quality | Medium: auto-captioned transcript with line wraps and some imprecise wording. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames translation as what lets applications cross language boundaries for global users. (SRC-228 L4–26) The episode contrasts general LLM translation with specialized translation tools, then demonstrates Azure Translator for text and Azure Speech for spoken translation. (SRC-228 L29–63; SRC-228 L270–551) It emphasizes `TextTranslationClient`, `translate`, `transliterate`, `SpeechTranslationConfig`, `TranslationRecognizer`, and the difference between event-based and manual synthesis. (SRC-228 L74–151; SRC-228 L172–229)

## Key claims

- Translation lets a product serve users who do not share the same language. (SRC-228 L4–13)
- The session covers Microsoft Foundry translation, Azure AI Translator for text, and speech translation for conversations across language boundaries. (SRC-228 L16–26)
- LLMs can do translation, but the presenter says their language coverage is less complete than specialized translation tools. (SRC-228 L29–57)
- Azure Translator is presented as a built-in Foundry Tool for text translation. (SRC-228 L58–73)
- `TextTranslationClient` can use a Foundry cognitive-services endpoint and API key or authorization token. (SRC-228 L74–92)
- `get_supported_language` returns supported language codes and example languages, and the presenter says the list is often larger than average LLM coverage. (SRC-228 L93–114)
- `translate` changes text meaning from one language to another, while transliteration changes writing system or script. (SRC-228 L115–151)
- Speech translation uses `SpeechTranslationConfig` for endpoint and credential information and `TranslationRecognizer` for the actual work. (SRC-228 L152–184)
- Event-based synthesis is framed as more live and one-to-one, while manual synthesis is framed as better for bulk or multiple output languages. (SRC-228 L185–229)

## How it works

Text translation starts by choosing Azure Translator in Foundry Tools, noting the endpoint, and authenticating with an API key, authorization token, default Azure credential or Azure CLI credential. (SRC-228 L64–92) The client can list supported languages, ask for a target language code, accept input text, and use `Translate` to return translated output, with optional parameters such as `from_language` and profanity handling mentioned by the presenter. (SRC-228 L93–114; SRC-228 L350–444) Speech translation layers translation onto earlier speech-to-text components: `SpeechTranslationConfig` carries where-and-how connection details, target languages are added, `AudioConfig` supplies microphone input, and `TranslationRecognizer` performs recognition and translation. (SRC-228 L152–184; SRC-228 L459–498) Speech output then uses `SpeechConfig`, output audio configuration, voices and `SpeechSynthesizer` to speak each translation. (SRC-228 L499–534)

## Segment guide

- L3–28 — Opening: translation makes multilingual applications possible, and the session scope is text and speech translation in Microsoft Foundry. (SRC-228 L3–28)
- L29–63 — Translation options: LLMs can translate, but the presenter favors specialized tools for more complete translation coverage. (SRC-228 L29–63)
- L64–151 — Azure Translator concepts: endpoint, credential, `TextTranslationClient`, supported languages, `translate`, and `transliterate`. (SRC-228 L64–151)
- L152–229 — Speech translation concepts: endpoint, API key or Entra ID, `SpeechTranslationConfig`, `TranslationRecognizer`, event-based synthesis and manual synthesis. (SRC-228 L152–229)
- L230–268 — Speech synthesis components: event-based output can go to a speaker or file, while manual synthesis uses `SpeechConfig` and `SpeechSynthesizer` for one or more output languages. (SRC-228 L230–268)
- L270–325 — Portal demo: the presenter opens AI Services, uses Text Translation and copies an endpoint from the code section. (SRC-228 L270–325)
- L326–444 — Text-code demo: environment variables, dependencies, `TextTranslationClient`, supported language lookup, target language selection, input text, and the `Translate` method. (SRC-228 L326–444)
- L445–551 — Speech-code demo: speech SDK imports, source and target languages, microphone input, output voices, `recognize_once`, speech synthesis and a multilingual spoken output. (SRC-228 L445–551)
- L552–597 — Knowledge-check review: the presenter reviews translate, transliterate and `SpeechTranslationConfig`, then summarizes manual versus event-based strategies. (SRC-228 L552–597)
- L598–634 — Topic wrap-up: the presenter situates translation inside the broader language and speech skillset for apps and agents. (SRC-228 L598–634)

## Code and API patterns

- `TextTranslationClient` is the central text translation client, constructed with a credential and endpoint. (SRC-228 L339–349)
- `get_supported_language` is used to retrieve supported languages and validate the user's two-letter target language code. (SRC-228 L350–379)
- `Translate` is the main method used in the text translation demo. (SRC-228 L409–422)
- `from_language` can be supplied when the caller does not want automatic language detection. (SRC-228 L423–434)
- `SpeechTranslationConfig` is configured with the credential and endpoint, then source and target languages are added. (SRC-228 L459–478)
- `AudioConfig` supplies the default microphone input for the speech translator. (SRC-228 L479–496)
- `SpeechConfig`, audio output configuration and voices configure the output side before the speech synthesizer speaks each translation. (SRC-228 L499–534)

## Key terms

- Translation changes meaning from language A to equivalent meaning in language B. (SRC-228 L115–127)
- Transliteration moves text from one writing system or script to another and is not a meaning translation. (SRC-228 L128–148)
- Event-based synthesis is presented as more live and useful for one-to-one translation. (SRC-228 L185–215)
- Manual synthesis is presented as useful for bulk work or multiple output languages. (SRC-228 L216–229)

## Decision boundaries and exam cues

- **Inference:** For broad production translation, prefer specialized Foundry Tools over relying only on general LLM translation when coverage matters. (SRC-228 L29–63)
- **Inference:** Use `translate` for equivalent meaning in another language and `transliterate` for the same word represented in a different script. (SRC-228 L115–151)
- **Inference:** Use event-based synthesis for a live one-to-one speech translation experience, and manual synthesis when a single input must produce multiple language outputs. (SRC-228 L185–229; SRC-228 L578–597)
- **Inference:** `SpeechTranslationConfig` is the object to look for when a question asks where speech translation languages and connection details are configured. (SRC-228 L172–179; SRC-228 L570–577)

## Assessment items

- The episode asks which `TextTranslationClient` function converts a Chinese word to English `Hello`; the transcript states the topic but does not capture the answer phrase before moving to the next question. (SRC-228 L556–561)
- The episode asks which `TextTranslationClient` function converts a Russian word in Cyrillic characters; the presenter states the answer is `Transliterate`. (SRC-228 L562–569)
- The episode asks which Azure Speech SDK object specifies target speech translation languages; the presenter states the answer is `SpeechTranslationConfig`. (SRC-228 L570–577)

## Tensions, caveats and currency

**Stale-risk:** The presenter says the text demo shows 137 supported languages at that point in time; the Learn unit only claims more than 90 supported languages. (SRC-228 L389–390; SRC-227 L216) The presenter notes an endpoint that looks like an older cognitive-services endpoint but says that is fine. (SRC-228 L313–323) The transcript uses Azure AI Translator, Azure Translator, Cognitive Services, Azure AI Services and Foundry Tools naming in the same episode. (SRC-228 L21–22; SRC-228 L58–67; SRC-228 L286–294)

## Relation to other sources

- [[src-139-introduction-translate-text-speech-microsoft-foundry-tools]] gives the concise Learn introduction to the same global-language problem. (SRC-139 L214–216)
- [[src-229-translation-microsoft-foundry]] provides the Learn overview that names Azure Translator and Azure Speech as specialized Foundry Tools. (SRC-229 L216–219)
- [[src-227-translate-text]] covers the text API methods that the episode demonstrates. (SRC-227 L216–268)
- [[src-226-translate-speech]] covers the speech SDK objects and manual/event-based synthesis that the episode demonstrates. (SRC-226 L12–52)
- [[src-166-module-assessment-translate-text-speech-microsoft-foundry-tools]] captures the same assessment items without showing submitted answers. (SRC-166 L212–228)

## Connections

- [[azure-translator]] — the episode's text translation service.
- [[azure-speech]] — the episode's speech translation service.
- [[text-translation]] — the `Translate` method and text demo.
- [[speech-translation]] — the speech translation SDK path and demo.
- [[foundry-tools]] — the service family used for the specialized tools.
- [[speech-and-language-options-compared]] — the episode repeatedly distinguishes LLM translation, text translation and speech translation.
- [[naming-and-currency]] — the episode contains service naming drift worth tracking.

## Open questions

- The transcript says a model capable of MCP calls is enough for the Azure Translator tool, but it does not explain the MCP mechanics for this module. (SRC-228 L64–73)
- The first knowledge-check answer is not explicitly captured in the episode transcript. (SRC-228 L556–561)

## Sources

- SRC-228 — raw file: [[228-Translate text and speech with Microsoft Foundry Tools - AI-103 - Episode 21]]

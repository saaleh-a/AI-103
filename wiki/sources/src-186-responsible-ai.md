---
title: "Responsible AI"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces responsible AI motivation and Microsoft principles: fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability."
area: responsible-ai
source_ids: [SRC-186]
tags: [responsible-ai, fairness, reliability-safety, privacy-security, transparency, accountability]
aliases: ["SRC-186"]
source_kind: learn-unit
module: "Plan and prepare to develop AI solutions on Azure"
learning_path: "Develop generative AI apps in Azure"
unit: "6 of 9"
presenters: []
raw_file: "186-Responsible AI - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/prepare-azure-ai-development/6-responsible-ai"
ingest_depth: full
---
# Responsible AI
*learn-unit · Plan and prepare to develop AI solutions on Azure · unit 6 of 9 · SRC-186*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-186 |
| Raw file | 186-Responsible AI - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Plan and prepare to develop AI solutions on Azure |
| Unit / episode | 6 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/prepare-azure-ai-development/6-responsible-ai |
| Teaching content | L212–239 of 269 |
| Content length | ~795 words |
| Capture quality | High; Learn unit lists principles with examples. |
| Ingest depth | full |

## TL;DR
The source says responsible use matters for all software and is especially important for AI because AI systems inform decisions through probabilistic models dependent on training data. (SRC-186 L218) It warns that human-like AI can cause users to over-trust decisions, making harm, unfairness, and misuse major concerns. (SRC-186 L219) It introduces Microsoft's principles: fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability. (SRC-186 L220–237)

## Key claims
- Software engineers should consider the impact of software on users and society, including responsible use. (SRC-186 L218)
- AI raises particular responsibility concerns because systems often use probabilistic models dependent on training data. (SRC-186 L218)
- Human-like AI can make applications user-friendly but can also lead users to place high trust in the application. (SRC-186 L219)
- Fairness requires AI systems to treat all people fairly and avoid biased predictions or unfair advantage/disadvantage. (SRC-186 L221–223)
- Reliability and safety require AI systems to perform reliably and safely, with rigorous testing, deployment management, and appropriate confidence thresholds. (SRC-186 L224–226)
- Privacy and security require safeguards for training data, production data, predictions, and actions involving private or sensitive content. (SRC-186 L227–228)
- Inclusiveness requires AI systems to empower everyone and engage people, with diverse input in design, development, and testing. (SRC-186 L229–231)
- Transparency requires making users aware of purpose, operation, limitations, accuracy factors, confidence scores, and personal-data use where relevant. (SRC-186 L232–235)
- Accountability requires people to be responsible for AI systems through governance and organizational principles. (SRC-186 L236–237)

## How it works
The source turns responsible AI into lifecycle concerns. Fairness begins early with representative training data and subgroup performance evaluation. (SRC-186 L223) Reliability and safety are addressed through testing, deployment management, and thresholds for probabilistic predictions. (SRC-186 L226) Privacy and security require safeguards for data and customer content before and after production. (SRC-186 L228) Inclusiveness is improved by including diverse people in design, development, and testing. (SRC-186 L231) Transparency informs users about purpose, limitations, prediction factors, confidence, and data handling. (SRC-186 L232–235) Accountability assigns responsibility to developers, validators, decision-logic designers, governance, and organizational principles. (SRC-186 L236–237)

## Code and API patterns
Not covered by this source's teaching content. (SRC-186 L218–239)

## Key terms
- Fairness: Treating all people fairly and avoiding bias that advantages or disadvantages groups. (SRC-186 L221–223)
- Reliability and safety: Performing reliably and safely, especially where failures risk human life. (SRC-186 L224–226)
- Privacy and security: Protecting personal details, new data, predictions, actions, and customer content. (SRC-186 L227–228)
- Inclusiveness: Empowering and engaging all parts of society. (SRC-186 L229–231)
- Transparency: Making purpose, operation, limitations, confidence, and data use understandable. (SRC-186 L232–235)
- Accountability: Human responsibility for model training, validation, decision logic, governance, and legal standards. (SRC-186 L236–237)

## Decision boundaries and exam cues
- **Inference:** If a scenario emphasizes bias in training data or uneven prediction quality across user groups, the principle is fairness. (SRC-186 L221–223)
- **Inference:** If a scenario emphasizes confidence thresholds, rigorous testing, deployment management, or high-risk systems, the principle is reliability and safety. (SRC-186 L224–226)
- **Inference:** If a scenario emphasizes private data, customer content, retention, or access, the principle is privacy and security. (SRC-186 L227–228; SRC-186 L235)
- **Inference:** If a scenario emphasizes disclosure of purpose, limitations, influential features, confidence scores, or personal-data use, the principle is transparency. (SRC-186 L232–235)
- **Inference:** If a scenario emphasizes governance, organizational standards, or who is responsible for an AI system, the principle is accountability. (SRC-186 L236–237)

## Assessment items
Not covered by this source. (SRC-186 L218–239)

## Tensions, caveats and currency
- The source says tooling alone is not sufficient to ensure fairness, even though some software can evaluate, quantify, and mitigate unfairness. (SRC-186 L223)
- The source is principle-focused and does not describe specific Microsoft Foundry guardrail or evaluation features. (SRC-186 L220–239)

## Relation to other sources
- SRC-113 says principles and practices should be considered before an AI application development project begins. ([[src-113-introduction-plan-prepare-develop-ai-solutions-azure]]; SRC-113 L217)
- SRC-183 frames responsible AI as part of planning and later mentions guardrails, UX, grounding, prompt refinement, and operations as places where the principles get reinforced. ([[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]]; SRC-183 L108–139; SRC-183 L514–539)
- SRC-203 summarizes this module as planning and preparation for Azure AI development, with Microsoft Foundry as the preferred platform. ([[src-203-summary-plan-prepare-develop-ai-solutions-azure]]; SRC-203 L12)

## Connections
- [[responsible-ai-principles]] — this source defines the six principles used in the module. (SRC-186 L220–237)
- [[responsible-ai-lifecycle]] — several principle actions are lifecycle concerns from design through production. (SRC-186 L223–237)
- [[guardrails-and-content-filters]] — the episode connects responsible AI thinking to guardrails later in the course. (SRC-183 L832–838)
- [[model-and-app-evaluation]] — reliability and fairness both require evaluation or testing activities. (SRC-186 L223; SRC-186 L226)
- [[solution-engineering-transfer]] — the principles become customer-facing risk and governance discussion points. (SRC-186 L218–237)
- *Module units:* [[src-113-introduction-plan-prepare-develop-ai-solutions-azure|1 Introduction]] · [[src-260-what-is-ai|2 What is AI-]] · [[src-96-foundry-tools|3 Foundry Tools]] · [[src-155-microsoft-foundry|4 Microsoft Foundry]] · [[src-51-developer-tools-sdks|5 Developer Tools and SDKs]] · [[src-78-exercise-prepare-ai-development-project|7 Exercise - Prepare for an AI development project]] · [[src-162-module-assessment-plan-prepare-develop-ai-solutions-azure|8 Module assessment]] · [[src-203-summary-plan-prepare-develop-ai-solutions-azure|9 Summary]] · [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1|episode 1]]

## Open questions
- The source does not identify specific Azure services for implementing guardrails, safety evaluation, content filtering, or traceability. (SRC-186 L220–239)

## Sources
- SRC-186 — raw file: [[186-Responsible AI - Training - Microsoft Learn]]

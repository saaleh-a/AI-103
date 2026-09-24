---
title: "Develop an AI agent with the Microsoft Agent Framework - AI-103 - Episode 13"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of code-first Microsoft Agent Framework: successor framing, provider flexibility, tool dispatch, Foundry setup, credentials, and an expense-claim demo."
area: agents
source_ids: [SRC-48]
objectives: [G06, G07, G08, G09, G11]
tags: [episode, microsoft-agent-framework, expense-claim-agent, tool-decorator, azureopenairesponses]
aliases: ["SRC-48"]
source_kind: episode
module: "Develop an AI agent with the Microsoft Agent Framework"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "48-Develop an AI agent with the Microsoft Agent Framework - AI-103 - Episode 13.md"
url: "https://www.youtube.com/watch?v=WznrISPGx-g"
ingest_depth: full
---
# Develop an AI agent with the Microsoft Agent Framework - AI-103 - Episode 13

*episode · Develop an AI agent with the Microsoft Agent Framework · SRC-48*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-48 |
| Raw file | 48-Develop an AI agent with the Microsoft Agent Framework - AI-103 - Episode 13.md |
| Kind | episode |
| Learning path | null |
| Module | Develop an AI agent with the Microsoft Agent Framework |
| Unit / episode | Episode 13 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=WznrISPGx-g |
| Teaching content | L3–688 of 688 |
| Content length | ~3043 words |
| Capture quality | Medium; auto-captioned transcript is readable but contains likely mis-heard terms. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames Microsoft Agent Framework as the code-first layer for developers who need full control, version control, and SDK power beyond portals and low-code. (SRC-48 L4–18) The episode says Semantic Kernel and AutoGen predated the framework and were effectively merged into Microsoft Agent Framework to avoid choosing between enterprise integration and cutting-edge agentic workflows. (SRC-48 L46–93) The demo builds an expense-claim agent that uses a custom tool, credentials, an Azure OpenAI Responses-style provider, instructions, a project endpoint, and `agent.run` without manual dispatch code. (SRC-48 L371–617)

## Key claims

- The episode positions Microsoft Agent Framework as useful when portal and low-code entry points are not enough and code-level control and version control are needed. (SRC-48 L4–18)
- The session promises orientation, agent creation, tools, and an end-to-end working agent. (SRC-48 L19–27)
- Semantic Kernel and AutoGen are described as earlier Microsoft agent frameworks that abstracted direct LLM calls and added agentic capabilities. (SRC-48 L46–61)
- Semantic Kernel is described as more enterprise-ready, while AutoGen is described as more cutting edge with agentic workflows. (SRC-48 L66–77)
- Microsoft Agent Framework is described as merging and replacing Semantic Kernel and AutoGen for most new work. (SRC-48 L78–99)
- The framework provides a consistent interface for agents and flexibility over model or provider source. (SRC-48 L103–142)
- Function tools reduce manual dispatch because decorated functions can be routed and invoked by the framework. (SRC-48 L143–188)
- Built-in tools mirror Foundry tools such as file search and web search. (SRC-48 L189–201)
- Conversation management and workflow orchestration are part of the framework's capability set. (SRC-48 L202–224)
- The demo uses non-key-based authentication and a token provider, with Azure OpenAI Responses client as one provider option. (SRC-48 L242–260)
- The demo uses `AzureCLICredential`, while noting a web app would need managed identity rather than Azure CLI credential. (SRC-48 L403–430)
- The custom tool demo uses an annotation to mark a function as a tool and configures approval mode as never required for the innocuous demo. (SRC-48 L454–500)
- The final recap says the framework unifies agents, providers, and tools behind one programming surface. (SRC-48 L641–662)

## How it works

The episode begins by distinguishing SDK-first agent development from portal or low-code starts. (SRC-48 L4–18) It then explains the lineage: Semantic Kernel and AutoGen both abstracted LLM calls into an agent layer, but Microsoft Agent Framework is presented as the merged successor that avoids choosing between them. (SRC-48 L46–93) The framework's abstraction sits between the agent application and the underlying model or chat provider, allowing local, Foundry, or other providers to be swapped through a common interface. (SRC-48 L103–142) For tools, the framework removes hand-written dispatch: the developer decorates a function, the framework routes the model's tool request, invokes the function, and returns the result. (SRC-48 L143–188; SRC-48 L551–573)

In the demo, the presenter starts from a Foundry project with deployed models and copies the project endpoint into an environment variable. (SRC-48 L332–361) The code imports Agent Framework libraries including `Agent`, `tool`, and `AzureOpenAIResponse`, then uses `AzureCLICredential` for a demo credential. (SRC-48 L371–430) It defines a `submitclaim` function as a tool, sets approval mode to never require approval, and prints the email recipient, subject, and body. (SRC-48 L448–500) The agent is created with an `AzureOpenAIResponseClient`, credentials, deployment, project endpoint, instructions for expense claim submission, and a custom tool; user input is then sent with `agent.run`. (SRC-48 L503–549) The demonstration shows the function invoked without manual dispatch code. (SRC-48 L551–617)

## Code and API patterns

The transcript names the relevant imports and provider shape: it imports `Agent`, `tool`, and `AzureOpenAIResponse` from Agent Framework-related libraries. (SRC-48 L371–383) It uses `AzureCLICredential` in the demo and contrasts it with `AzureDefaultCredential` and managed identity expectations for a web app. (SRC-48 L403–430) It creates an agent with `AzureOpenAIResponseClient`, credentials, deployment, project endpoint, instructions, and a tool function. (SRC-48 L503–540) It then calls `agent.run` with a prompt and prints the response. (SRC-48 L541–549)

Locator for representative transcript fragment: (SRC-48 L546–549)

```text
input and we say here agent.run.
We'll specify the prompt
and we print its response.
```

## Key terms

- Microsoft Agent Framework — the framework presented as merging and replacing Semantic Kernel and AutoGen for new agent work. (SRC-48 L78–99)
- Function tools — decorated functions the framework can route and invoke without manual dispatch. (SRC-48 L143–188)
- Built-in tools — Foundry-like tools such as file search, web browser, and web search exposed through the framework. (SRC-48 L189–201)
- Conversation management — mechanisms for stateful back-and-forth conversation. (SRC-48 L202–207)
- Workflow orchestration — framework workflow options for agents that may not live inside Foundry. (SRC-48 L208–224)
- Token provider — the non-key-based authentication mechanism the presenter says is needed. (SRC-48 L242–253)
- `AzureOpenAIResponseClient` — the provider client used in the demo agent. (SRC-48 L503–516)
- Tool decorator — the Python decorator used to advertise custom tools. (SRC-48 L658–662)

## Decision boundaries and exam cues

- **Inference:** Choose Microsoft Agent Framework when the scenario emphasizes code-first control, version control, SDK use, provider flexibility, and custom tool dispatch rather than portal-only setup. (SRC-48 L4–18; SRC-48 L103–188)
- **Inference:** For a web app, do not copy the episode's `AzureCLICredential` demo pattern unchanged; the presenter says the code would not run in a web app and would need managed identity. (SRC-48 L403–430)
- **Inference:** If a scenario complains about writing dispatch code for local functions or MCP-style tools, the framework's decorated-tool dispatch is the relevant capability. (SRC-48 L143–188; SRC-48 L551–573)
- **Inference:** If the scenario asks which component manages conversation state, the episode identifies the agent thread. (SRC-48 L631–639)

## Assessment items

The episode verbally reviews two knowledge-check items. It says the key steps to create a Microsoft Foundry agent are to create the Azure AI Agent Client, define a chat agent with instructions and tools, and create the agent thread. (SRC-48 L621–630) It says the component that manages conversation state and stores messages is the agent thread. (SRC-48 L631–639)

## Segment guide

- L3–27 — Opening: code-first agent development, speaker identification, and session goals. (SRC-48 L3–27)
- L29–99 — Background: Foundry SDK and OpenAI SDK sit below higher-level agent frameworks; Semantic Kernel and AutoGen are framed as predecessors merged into Microsoft Agent Framework. (SRC-48 L29–99)
- L100–188 — Framework value: common provider interface, chat-provider flexibility, and function-tool dispatch without handwritten routing code. (SRC-48 L100–188)
- L189–224 — Capabilities: built-in tools, conversation management, and workflow orchestration. (SRC-48 L189–224)
- L225–330 — Build recipe: Foundry project, authentication, providers, agent instance, instructions, built-in tools, custom functions, and tool registration. (SRC-48 L225–330)
- L332–367 — Foundry setup: demo project, deployed model, project endpoint, and matching model deployment name. (SRC-48 L332–367)
- L371–447 — Code setup: imports, provider flexibility, Azure CLI credential, deployment/project endpoint, and expense data file. (SRC-48 L371–447)
- L448–540 — Tool and agent construction: `submitclaim` tool, approval mode, `AzureOpenAIResponseClient`, credentials, deployment, project endpoint, and instructions. (SRC-48 L448–540)
- L541–617 — Execution demo: `agent.run`, prompt, automatic tool invocation, and no manual dispatch. (SRC-48 L541–617)
- L621–669 — Knowledge-check recap and summary: agent client, chat agent, agent thread, unified agents/providers/tools, and tool decorator. (SRC-48 L621–669)
- L670–688 — Closing: course wrap-up and prompt to continue learning. (SRC-48 L670–688)

## Tensions, caveats and currency

- **Stale-risk:** The presenter says Microsoft Agent Framework has been released generally as of recording; release status should be rechecked for current production decisions. (SRC-48 L94–99)
- **Stale-risk:** The demo model is GPT-4.1, which is time-sensitive as a deployment choice. (SRC-48 L362–367)
- **Stale-risk:** The transcript says `manage identity`, likely meaning managed identity; auto-captioning can mis-hear technical terms. (SRC-48 L425–430)
- **Stale-risk:** The episode alternates between Azure AI Agent Client terminology and Learn-unit Foundry Agent Service terminology across this module. (SRC-48 L621–630; SRC-34 L216–226)

## Relation to other sources

- SRC-124 introduces the same module goal and expense-report scenario that the episode implements. (SRC-124 L216–221; SRC-48 L503–617)
- SRC-234 provides a concise Learn-unit version of the successor-framework, unified-agent, provider-flexibility, and Foundry-provider claims. (SRC-234 L216–238; SRC-48 L78–142)
- SRC-34 describes the Foundry setup sequence that the episode demonstrates in code. (SRC-34 L219–243; SRC-48 L332–549)
- SRC-4 explains the custom-tool declaration, tool selection, and approval concepts demonstrated in the episode. (SRC-4 L224–234; SRC-48 L448–617)
- SRC-146 captures the related knowledge-check items for creation steps and `AgentThread` state management. (SRC-146 L10–17; SRC-48 L621–639)

## Connections

- [[microsoft-agent-framework]] — primary SDK and episode subject.
- [[foundry-agent-service]] — Foundry-backed agent provider context.
- [[agent-tools]] — function tools and built-in tools are central to the demo.
- [[function-calling]] — custom tool invocation pattern.
- [[keyless-authentication]] — token provider, Azure CLI credential, and managed identity discussion.
- [[conversation-state]] — agent thread and conversation management.
- [[agent-framework-workflows]] — workflow orchestration inside Agent Framework.
- [[development-tools-and-approaches]] — portal/low-code versus code-first development boundary.

## Open questions

- The transcript references source code visually, but the exact import paths and full code listing are not in the capture. (SRC-48 L371–383; SRC-48 L503–549)
- The episode does not provide the external lab repository or complete executable file. (SRC-48 L541–583)

## Sources

- SRC-48 — raw file: [[48-Develop an AI agent with the Microsoft Agent Framework - AI-103 - Episode 13]]

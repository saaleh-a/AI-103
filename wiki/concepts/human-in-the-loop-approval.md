---
title: "Human-in-the-loop and approvals"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Patterns for pausing agent or workflow execution for approval, extra context, escalation or admin publishing review."
area: agents
source_ids: [SRC-4, SRC-11, SRC-15, SRC-16, SRC-24, SRC-25, SRC-105, SRC-109, SRC-111, SRC-118, SRC-230, SRC-238, SRC-240, SRC-242]
objectives: [P15, P16, G03, G11]
objective_gaps: []
tags: []
aliases: ["tool approval", "approval workflows", "human in the loop", "human-in-the-loop", "approval required", "escalation"]
---

# Human-in-the-loop and approvals

## Summary

Human-in-the-loop approval is not one feature in the corpus; it appears as a family of safeguards. MCP tools can pause for developer/user approval before a tool call, workflows can pause for input or escalate low-confidence outcomes, group chat can request human input, and Microsoft 365 publishing can require admin approval for organization-wide availability (SRC-240 L226–239; SRC-105 L222–224; SRC-242 L217–226; SRC-111 L178–203).

## The problem it solves

Agentic systems can take actions, call tools, retrieve organizational data and publish into collaboration surfaces. Full automation is not always safe when operations are sensitive, expensive, irreversible, uncertain or organization-scoped. The corpus names human approvals as a way to gate sensitive operations, balance automation with oversight, provide missing context and maintain control (SRC-4 L229–234; SRC-105 L222–224; SRC-118 L220–225; SRC-230 L246–255).

## Mental model

Human-in-the-loop adds a checkpoint in an otherwise automated run. The system reaches a decision or action boundary, pauses, exposes enough context for a person to approve, deny, provide missing information or take over, and then resumes, exits or escalates based on that human response (SRC-105 L222–224; SRC-240 L234–239).

## What the sources say

- Agent Framework tool approval: when approval mode is enabled on a tool, the agent pauses before calling the function and requests confirmation; this is useful for irreversible, expensive or sensitive-data actions (SRC-4 L229–234).
- MCP managed tools: `require_approval` determines whether MCP tool invocations need human approval; if approval is required, the response contains an `mcp_approval_request`, and the caller sends an `mcp_approval_response` with an approval request ID and approve boolean (SRC-240 L226–239).
- Foundry Tools MCP servers: the Language and Speech modules say the first tool use prompts for approval, with an option to approve once or always approve future tools for that server (SRC-24 L241–247; SRC-25 L247–250).
- Workflows: a human-in-the-loop workflow pauses for user input or approval, asks a question, waits, and resumes based on the input (SRC-105 L222–224).
- Workflow routing: Power Fx conditions can check confidence and branch to automatic handling or human escalation (SRC-11 L231–234).
- Publishing: organization-scoped Microsoft 365 publication requires an approval process in the Microsoft 365 admin area; an admin can approve or deny after reviewing metadata (SRC-111 L178–203; SRC-111 L331–346).

## How it works in Azure

### Tool-call approval

For MCP tools, the managed source exposes approval as configuration and runtime protocol. `require_approval` can be set to `always` or `never`; when approval is required, the model's attempted tool call produces an approval request, and the application follows up with an approval response that references the request and says whether to approve (SRC-240 L234–239). The episode walkthrough shows an application prompting the user with the tool description and sending approval `true` before the agent invokes the MCP server (SRC-109 L300–345 on [[mcp-tool-integration]]).

For Agent Framework function tools, approval is configured per tool using `approval_mode` on the `@tool` decorator (SRC-4 L229–234).

### Workflow approval and escalation

Foundry workflows provide a visual/declarative way to combine agents, control flow and safeguards (SRC-118 L217–225). Human-in-the-loop workflow nodes introduce pauses for input or approval; Power Fx conditions can route a low-confidence agent result to a person rather than continuing automatically (SRC-105 L222–224; SRC-11 L231–234). The workflow episode demonstrates a support-ticket flow that requests more detail for low confidence and escalates billing to humans (SRC-15 L640–699).

### Collaborative human participation

Group chat orchestration can include a human participant; the central chat manager decides which agent responds next and when to request human input (SRC-242 L217–226). Custom group chat managers can control when to request user input and when to terminate the conversation (SRC-242 L250–258).

### Publishing approval

When publishing to Microsoft 365, there is a personal testing scope and an organizational scope. The episode says publishing only to the developer is useful for testing connectivity, including Foundry IQ endpoints or MCP servers; publishing for the organization requires an admin approval process in Microsoft 365 Admin, where the admin reviews metadata and approves or denies (SRC-111 L150–203; SRC-111 L331–346).

## Code and configuration

- `require_approval`: managed MCP setting; `always` requires approval for every call and is the default if no value is provided, while `never` disables approval (SRC-240 L234–239).
- `mcp_approval_request`: appears in an agent response when the model wants to invoke an MCP server tool that requires approval; it contains information about the tool being invoked (SRC-240 L239).
- `mcp_approval_response`: follow-up object containing `approval_request_id` and an `approve` boolean (SRC-240 L239).
- `approval_mode`: Agent Framework decorator parameter for per-tool approval behavior (SRC-4 L229–234).
- Power Fx confidence branch: conditions can compare an agent confidence score with a threshold and branch to human escalation (SRC-11 L231–234).

## Decision boundaries

| Scenario clue (SRC-4 L229–234; SRC-105 L222–224; SRC-111 L178–203; SRC-240 L226–239) | Approval pattern | Why |
|---|---|---|
| MCP server tool call may access or act on external systems | MCP approval request/response | Managed MCP explicitly supports required approval before invoking server tools (SRC-240 L226–239). |
| Python function tool is irreversible, expensive or sensitive | Agent Framework tool approval | The function pauses before execution and requests confirmation (SRC-4 L229–234). |
| Agent output has low confidence or missing context | Workflow pause/escalation | Workflows can request input, pause or escalate decisions (SRC-105 L222–224; SRC-238 L223). |
| Multi-agent conversation needs human guidance | Group chat human participant | The manager can request human input and include a human in the conversation (SRC-242 L217–226). |
| Agent must be available to an organization in Microsoft 365 | Admin publishing approval | Organization scope requires admin review and approval or denial (SRC-111 L178–203). |

**Inference:** The exam boundary is action approval vs publishing approval. Tool/workflow approvals govern a runtime action inside an agent or workflow; Microsoft 365 publishing approval governs whether an agent becomes available at organizational scope (SRC-240 L226–239; SRC-111 L178–203).

## Failure modes and misconceptions

- Approval is not just a UI pop-up. In MCP code paths, it is an explicit request/response object that the application must handle (SRC-240 L239).
- "Always approve" reduces friction but weakens oversight; the Language and Speech modules present it as a convenience after first-use prompts, not as a universal default (SRC-24 L241–247; SRC-25 L247–250).
- Human escalation is not only for danger; the workflow sources also use it when confidence is low or context is missing (SRC-105 L222–224; SRC-15 L640–699).
- Publishing to yourself is not the same as publishing to the organization; organization scope requires admin approval (SRC-111 L150–203).

## Solution Engineering transfer

**Inference:** Customer signal: "We want automation, but humans must approve refunds, sensitive data access, billing escalations or organization-wide app rollout." Discovery question: "Which decisions are reversible, which are sensitive, and who is authorized to approve them?" Trade-off: more approval improves control and auditability but can slow end-to-end resolution (SRC-4 L229–234; SRC-105 L222–224; SRC-111 L178–203).

## Connections

- [[mcp-tool-integration]] — runtime MCP approval behavior.
- [[foundry-workflows]] — workflow pauses, conditions and escalation.
- [[workflow-patterns]] — human-in-the-loop workflow pattern.
- [[group-chat-orchestration]] — human participant and manager-controlled input.
- [[agent-publishing]] — Microsoft 365 organizational approval.
- [[observability-and-tracing]] — approvals need traceability and logs.
- [[responsible-ai-lifecycle]] — oversight as mitigation.
- [[src-240-azure-ai-agents-mcp-servers]] — MCP approval mechanics.
- [[src-105-identify-workflow-patterns]] — human-in-the-loop workflow source.
- *Also linked from:* [[custom-tool-options]] · [[function-calling]] · [[overview]] · [[power-fx]]

## Sources

- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — Agent Framework tool approval.
- SRC-11 — [[src-11-apply-power-fx-workflows]] — confidence conditions and escalation.
- SRC-15 — [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12]] — workflow episode escalation examples.
- SRC-16 — [[src-16-build-knowledge-enhanced-ai-agents-foundry-iq-episode-10]] — manual vs auto approval of data access.
- SRC-24 — [[src-24-connect-language-mcp-server-agent]] — Language MCP first-use approval.
- SRC-25 — [[src-25-connect-speech-mcp-server-agent]] — Speech MCP first-use approval.
- SRC-105 — [[src-105-identify-workflow-patterns]] — human-in-the-loop workflow pattern.
- SRC-109 — [[src-109-integrate-mcp-tools-azure-ai-agents-episode-9]] — episode MCP approval walkthrough.
- SRC-111 — [[src-111-integrate-agent-microsoft-365-episode-11]] — Microsoft 365 publishing approval.
- SRC-118 — [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry]] — workflow module motivation and outcomes.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — human approvals as mitigation.
- SRC-238 — [[src-238-understand-workflows]] — workflows pausing or escalating.
- SRC-240 — [[src-240-azure-ai-agents-mcp-servers]] — MCP approval request/response.
- SRC-242 — [[src-242-group-chat-orchestration]] — group chat human input.

## Open questions

- The corpus does not provide a full admin-center procedure for publishing approval or a full audit-log schema for approvals; those should be treated as corpus gaps rather than filled from general knowledge.

# Graph Report - wiki/ (link graph)  (2026-09-24)

## Corpus Check
- 383 files · ~353,031 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 383 nodes · 2838 edges · 9 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output (deterministic: built from wikilinks, no LLM)

## Community Hubs (Navigation)
- Models, Evaluation and Safety
- Agents, Tools and APIs
- Speech, Voice and Identity
- Workflows, Orchestration and A2A
- Information Extraction
- Foundry Platform and SDKs
- Retrieval, Search and RAG
- MCP and Azure Language
- Publishing, Microsoft 365 and Testing

## God Nodes (most connected - your core abstractions)
1. `Decision boundaries — confusable technologies` - 95 edges
2. `Microsoft Foundry` - 73 edges
3. `Agent tools` - 64 edges
4. `Responses API` - 53 edges
5. `Master synthesis — whole AI-103 architecture` - 48 edges
6. `Microsoft Foundry Agent Service` - 44 edges
7. `Information extraction options compared` - 43 edges
8. `Speech and language options compared` - 42 edges
9. `Retrieval-augmented generation (RAG)` - 41 edges
10. `Model selection` - 38 edges

## Surprising Connections (you probably didn't know these)
- `Implementing A2A agents` --references--> `Agent tools`  [EXTRACTED]
  wiki/concepts/a2a-agent-implementation.md → wiki/concepts/agent-tools.md
- `Implementing A2A agents` --references--> `AI agents`  [EXTRACTED]
  wiki/concepts/a2a-agent-implementation.md → wiki/concepts/ai-agents.md
- `Implementing A2A agents` --references--> `Keyless authentication and role-based access`  [EXTRACTED]
  wiki/concepts/a2a-agent-implementation.md → wiki/concepts/keyless-authentication.md
- `Implementing A2A agents` --references--> `MCP tool integration`  [EXTRACTED]
  wiki/concepts/a2a-agent-implementation.md → wiki/concepts/mcp-tool-integration.md
- `Implementing A2A agents` --references--> `Microsoft Agent Framework`  [EXTRACTED]
  wiki/concepts/a2a-agent-implementation.md → wiki/entities/microsoft-agent-framework.md

## Communities (9 total, 0 thin omitted)

### Community 0 - "Models, Evaluation and Safety"
Cohesion: 0.14
Nodes (75): Azure AI Content Safety, Azure OpenAI, Corpus gaps, Deployment and access options compared, Fine-tuning, Generation parameters, Generative AI fundamentals, Guardrails and content filters (+67 more)

### Community 1 - "Agents, Tools and APIs"
Cohesion: 0.22
Nodes (55): Agent-building options compared, Agent tools, AI agents, Azure Functions, Code interpreter tool, Conversation state, Custom tool options, Decision boundaries — confusable technologies (+47 more)

### Community 2 - "Speech, Voice and Identity"
Cohesion: 0.22
Nodes (55): Azure Speech, Azure Speech MCP server, Azure Translator, Key tensions across sources, Keyless authentication and role-based access, Speech and language options compared, Speech-capable generative models, Speech to text (+47 more)

### Community 3 - "Workflows, Orchestration and A2A"
Cohesion: 0.25
Nodes (45): Implementing A2A agents, Agent2Agent (A2A) protocol, Agent Framework workflows, Concurrent orchestration, Foundry workflows, Group chat orchestration, Handoff orchestration, Human-in-the-loop and approvals (+37 more)

### Community 4 - "Information Extraction"
Cohesion: 0.28
Nodes (37): Azure Content Understanding, Azure Document Intelligence, Content Understanding analyzers, Content Understanding client applications, Document Intelligence custom models, Document Intelligence prebuilt models, Information extraction options compared, Introduction — Extract data with Azure Document Intelligence (+29 more)

### Community 5 - "Foundry Platform and SDKs"
Cohesion: 0.27
Nodes (33): Exam AI-103: Developing AI Apps and Agents on Azure, Course AI-103T00-A, Chat Completions API, Development tools and approaches, Endpoints and SDK choice, Foundry resources and projects, Microsoft Foundry SDK, Foundry Tools (+25 more)

### Community 6 - "Retrieval, Search and RAG"
Cohesion: 0.36
Nodes (33): AI enrichment and skillsets, Azure AI Search, Embeddings, vector and hybrid search, Foundry IQ, Indexers and data sources, Knowledge bases and knowledge sources, Knowledge mining, Knowledge store (+25 more)

### Community 7 - "MCP and Azure Language"
Cohesion: 0.31
Nodes (31): Azure Language, Azure Language MCP server, Language detection, MCP tool integration, Model Context Protocol (MCP), Named entity recognition, PII detection and redaction, Integrate Agent Tools Using an MCP Server and Client (+23 more)

### Community 8 - "Publishing, Microsoft 365 and Testing"
Cohesion: 0.47
Nodes (19): Agent publishing, Agent testing and evaluation, Application Insights, Microsoft 365 agent integration, Microsoft 365 Agents Toolkit, Microsoft Entra ID, Open questions, Integrate your agent with Microsoft 365 - AI-103 - Episode 11 (+11 more)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Decision boundaries — confusable technologies` connect `Agents, Tools and APIs` to `Models, Evaluation and Safety`, `Speech, Voice and Identity`, `Workflows, Orchestration and A2A`, `Information Extraction`, `Foundry Platform and SDKs`, `Retrieval, Search and RAG`, `MCP and Azure Language`, `Publishing, Microsoft 365 and Testing`?**
  _High betweenness centrality (0.195) - this node is a cross-community bridge._
- **Why does `Microsoft Foundry` connect `Foundry Platform and SDKs` to `Models, Evaluation and Safety`, `Agents, Tools and APIs`, `Speech, Voice and Identity`, `Workflows, Orchestration and A2A`, `Information Extraction`, `Retrieval, Search and RAG`, `MCP and Azure Language`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Why does `Master synthesis — whole AI-103 architecture` connect `Models, Evaluation and Safety` to `Agents, Tools and APIs`, `Speech, Voice and Identity`, `Workflows, Orchestration and A2A`, `Information Extraction`, `Foundry Platform and SDKs`, `Retrieval, Search and RAG`, `MCP and Azure Language`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Should `Models, Evaluation and Safety` be split into smaller, more focused modules?**
  _Cohesion score 0.1398198198198198 - nodes in this community are weakly interconnected._
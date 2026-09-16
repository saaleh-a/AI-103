> Source: https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-semantic-kernel-agents

Understand Microsoft Agent Framework AI agents - Training | Microsoft Learn
Skip to main content
This browser is no longer supported.
Upgrade to Microsoft Edge to take advantage of the latest features, security updates, and technical support.
Download Microsoft Edge More info about Internet Explorer and Microsoft Edge
Learn 
Suggestions will filter as you type Training
Sign in  
Profile
Analytics
Settings
Sign out 
Learn
Documentation
All product documentation
Azure documentation
Dynamics 365 documentation
Microsoft Copilot documentation
Microsoft 365 documentation
Power Platform documentation
Code samples
Troubleshooting documentation Register now Microsoft Ignite | November 17-20, 2026 Interactive learning, certifications, and direct access to experts all in one place.
Training & Labs
All training
Azure training
Dynamics 365 training
Microsoft Copilot training
Microsoft 365 training
Microsoft Power Platform training
Labs
Credentials
Career paths Register now Microsoft Ignite | November 17-20, 2026 Interactive learning, certifications, and direct access to experts all in one place.
Q&A
Ask a question
Azure questions
Windows questions
Microsoft 365 questions
Microsoft Outlook questions
Microsoft Teams questions
Popular tags
All questions Register now Microsoft Ignite | November 17-20, 2026 Interactive learning, certifications, and direct access to experts all in one place.
Topics
Agents Key concepts and resources for agentic computing
Artificial intelligence Curated resources for AI fluency with apps and services
DevOps DevOps practices, Git version control and Agile methods
Learn for Organizations Curated offerings from Microsoft to boost your team's technical skills
Security Guidance to help you tackle security challenges
Startups hub Technical guidance to move toward enterprise readiness
Assessments Interactive guidance with custom recommendations
Student hub Self-paced and interactive training for students
Educator center Resources for educators to bring technical innovation in their classroom Register now Microsoft Ignite | November 17-20, 2026 Interactive learning, certifications, and direct access to experts all in one place.
Suggestions will filter as you type Training
Sign in  
Profile
Analytics
Settings
Sign out
Training
Products
Azure
Microsoft Foundry
Dynamics 365
Defender
.NET
GitHub
Microsoft 365
Microsoft Entra
Microsoft Fabric
Power Platform
Purview
Teams
Browse all training
Career Paths
Administrator
AI Engineer
App Maker
Auditor
Business User
Data Analyst
Data Engineer
Data Scientist
Developer
DevOps Engineer
Functional Consultant
Identity and Access Administrator
Information Security Administrator
Security Operations Analyst
Security Engineer
Solutions Architect
Browse all training
Learn for Organizations
Microsoft Learn for Organizations
Structured learning (Plans)
Watch training (Course videos)
Classroom training (TSP)
Gamified training (Challenges)
Resources
Event training (VTDs)
Educator Center
Overview
Professional development
Accessibility and inclusivity
AI for education
Cybersecurity
STEM, coding, and esports
Browse all
Product guides
AI solutions for education
Microsoft 365 for education
Learning Accelerators
Minecraft Education
Windows for education
Browse all
Instructor materials
Educator programs
Student Hub
Overview
Student Credentials
Become a Student Ambassador
FAQ & Help
More
Products
Azure
Microsoft Foundry
Dynamics 365
Defender
.NET
GitHub
Microsoft 365
Microsoft Entra
Microsoft Fabric
Power Platform
Purview
Teams
Browse all training
Career Paths
Administrator
AI Engineer
App Maker
Auditor
Business User
Data Analyst
Data Engineer
Data Scientist
Developer
DevOps Engineer
Functional Consultant
Identity and Access Administrator
Information Security Administrator
Security Operations Analyst
Security Engineer
Solutions Architect
Browse all training
Learn for Organizations
Microsoft Learn for Organizations
Structured learning (Plans)
Watch training (Course videos)
Classroom training (TSP)
Gamified training (Challenges)
Resources
Event training (VTDs)
Educator Center
Overview
Professional development
Accessibility and inclusivity
AI for education
Cybersecurity
STEM, coding, and esports
Browse all
Product guides
AI solutions for education
Microsoft 365 for education
Learning Accelerators
Minecraft Education
Windows for education
Browse all
Instructor materials
Educator programs
Student Hub
Overview
Student Credentials
Become a Student Ambassador
FAQ & Help
1%
Learn
Training
Browse
Develop AI agents on Azure
Develop an AI agent with Microsoft Agent Framework
Learn
Training
Browse
Develop AI agents on Azure
Develop an AI agent with Microsoft Agent Framework
Read in English Add to Collections Add to Plans
Unit 2 of 7
Develop an AI agent with Microsoft Agent Framework
Introduction 2 min: Completed
Understand Microsoft Agent Framework AI agents 6 min: Completed
Create an Azure AI agent with Microsoft Agent Framework 7 min: Completed
Add tools to Azure AI agent 5 min: Completed
Exercise - Develop an Azure AI agent with the Microsoft Agent Framework SDK 30 min: Completed
Knowledge check 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Understand Microsoft Agent Framework AI agents
Completed 100 XP
6 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The Microsoft Agent Framework is the next generation of both Semantic Kernel and AutoGen, built by the same engineering teams. It combines AutoGen's intuitive agent abstractions with Semantic Kernel's enterprise-grade features—including session-based state management, type safety, execution filters, and telemetry.
The framework introduces graph-based workflows to give developers explicit control over multi-agent execution paths. Every agent is derived from a unified Agent base class, giving you a consistent interface regardless of which underlying model provider you use.
Architecture and key features
Rather than requiring you to manually wire together separate libraries for memory, tool integration, and model access, the Microsoft Agent Framework bundles these components into a set of composable building blocks. You can use them individually or combine them as your solution grows in complexity.
Expand table
What agents can do
Because all agents share the same Agent base class, you get a consistent set of capabilities regardless of which provider powers your agent. This means you can focus on your application logic rather than adapting to provider-specific APIs.
Out of the box, every agent in the framework supports:
Function calling—automatically invoke registered tools to interact with external APIs and services
Multi-turn conversations—maintain chat history either locally or via service-provided history management
Structured outputs—generate type-safe, schema-validated responses
Streaming responses—receive results incrementally as they're generated
Service-provided tools—use built-in capabilities such as code execution, file search, and web search where supported by the provider
Using the Microsoft Agent Framework with AI Foundry
The Microsoft Agent Framework is designed to work seamlessly with your Azure AI Foundry projects. It provides a consistent interface for connecting to Foundry, managing agent sessions, and integrating with tools and services.
By authenticating with your Azure credentials, you can connect to your Foundry project and create agents that use the capabilities of the Foundry Agent Service. These capabilities include persistent chat history, dynamic tool discovery, and integration with Azure services.
Why Foundry is the recommended provider
A key differentiator of the Foundry Agent Service is its support for service-side chat history. With service-side history, the agent session persists across turns automatically—you don't need to manage conversation state yourself. Service-side history makes Foundry the recommended provider for production scenarios where maintaining context is critical.
Provider matrix
One of the practical benefits of the Agent Framework's common interface is provider flexibility. As models improve or your requirements change, you can switch the underlying inference service without rewriting your agent logic—only the client configuration changes.
The framework supports the following providers:
Expand table
This module focuses on the Foundry Agent Service provider, which offers enterprise-grade capabilities including persistent chat history, Model Context Protocol (MCP) tool support, and integration with Azure services.
Next unit: Create an Azure AI agent with Microsoft Agent Framework
Previous Next
Need help? See our troubleshooting guide or provide specific feedback by reporting an issue.
Feedback
Was this page helpful?
Yes No No
Need help with this topic?
Want to try using Ask Learn to clarify or guide you through this topic?
Ask Learn Ask Learn
Suggest a fix?
Ask Learn
Preview
Ask Learn is an AI assistant that can answer questions, clarify concepts, and define terms using trusted Microsoft documentation.
Please sign in to use Ask Learn.
Sign in
English (United Kingdom)
Your Privacy Choices
Theme
Light
Dark
High contrast
AI Disclaimer
Previous Versions
Blog
Contribute
Privacy
Consumer Health Privacy
Terms of Use
Trademarks
© Microsoft 2026
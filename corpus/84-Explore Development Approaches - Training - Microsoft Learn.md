> Source: https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/3-explore-development-approaches

Explore Development Approaches - Training | Microsoft Learn
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
Develop AI agents with Microsoft Foundry and Visual Studio Code
Learn
Training
Browse
Develop AI agents on Azure
Develop AI agents with Microsoft Foundry and Visual Studio Code
Read in English Add to Collections Add to Plans
Unit 3 of 11
Develop AI agents with Microsoft Foundry and Visual Studio Code
Introduction 3 min: Completed
Understand AI agents and Microsoft Foundry Agent Service 8 min: Completed
Explore development approaches 7 min: Completed
Build your first agent in Microsoft Foundry 8 min: Completed
Set up Visual Studio Code for agent development 7 min: Completed
Configure and manage agents in Visual Studio Code 9 min: Completed
Extend agent capabilities with tools 9 min: Completed
Test, deploy, and integrate agents 9 min: Completed
Exercise - Build and deploy an AI agent 30 min: Completed
Knowledge check 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Explore development approaches
Completed 100 XP
7 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Microsoft Foundry Agent Service provides flexibility in how you develop agents, with options ranging from visual interfaces to code-centric workflows. Understanding the different development approaches helps you choose the right tools for your scenarios and team preferences.
Foundry portal development
The Foundry portal provides a web-based interface for creating and managing AI agents without writing code. This approach is ideal when you want to quickly prototype ideas, collaborate with non-technical stakeholders, or manage agents through a centralized interface.
When to use the Foundry portal
The portal excels in these scenarios:
Quick prototyping - Rapidly test agent concepts and configurations without setting up development environments
Visual configuration - Configure agents through intuitive forms and dropdowns rather than code
Centralized management - View and manage all agents across projects in one place
Team collaboration - Share agent configurations with stakeholders who prefer visual interfaces
Resource oversight - Monitor token usage, latency, and evaluation outcomes through dashboards
The Azure portal provides immediate access to agent creation without installing additional tools. You simply navigate to your Foundry project, select the Agents section, and start building.
Visual Studio Code development
The Microsoft Foundry extension for Visual Studio Code brings enterprise-grade AI capabilities directly into your development environment. This approach suits developers who prefer working in familiar code editors and want tight integration with their development workflows.
Key capabilities of the VS Code extension
The extension organizes its features into three main sections:
Resources - Browse and manage your Foundry project assets directly from VS Code, including:
Deployed models - View and manage model deployments
Declarative agents - View and configure prompt-based and workflow agents
Hosted agents - View and manage containerized, code-deployed agents
Connections - Manage connections to external services
Vector stores - Organize document collections for File Search
Tools - Access development and testing capabilities:
Model Catalog - Browse and deploy models from the catalog
Model Playground - Experiment with models directly
Agent Playgrounds - Test agents using remote or local playgrounds
Local Visualizer - Debug and visualize agent behavior locally
Deploy Hosted Agents - Deploy containerized agents to production
Help and Feedback - Access documentation and support resources.
The extension also provides a visual Agent Designer for configuring agent properties, integrated code generation for application integration, and direct YAML configuration editing for precise control. 
When to use Visual Studio Code
The VS Code extension is ideal for:
Developer-centric workflows - Build agents alongside your application code in a single environment
Version control integration - Track agent configurations in Git alongside your codebase
Rapid iteration - Make quick changes and test immediately without switching tools
Code-first development - Edit YAML configurations directly for precise control
Local development - Work on agent designs offline before deploying to Azure
The extension installs directly from the Visual Studio Code Marketplace and connects to your existing Foundry projects. Detailed installation and setup steps are covered in the next unit.
Typical development workflow
Regardless of your chosen approach, agent development follows a consistent pattern:
Connect to your Microsoft Foundry project
Create an AI agent in the Foundry portal with a descriptive name and purpose
Configure agent instructions defining its behavior and capabilities (in the portal or VS Code)
Add tools to extend what the agent can do
Test the agent using integrated playgrounds
Iterate on the design based on test results
Deploy the agent to production
Integrate the agent into your applications
The Foundry portal and VS Code extension both support this workflow, differing primarily in interface style rather than capabilities.
Required Azure resources
Both development approaches require the same underlying Azure resources. To develop agents with Microsoft Foundry Agent Service, you need:
Microsoft Foundry project - Organizes your agents, models, and related assets in one place
Model deployments - Deployed AI models (such as GPT-4.1 or Claude Sonnet 4.6) that power your agents
When you create a Microsoft Foundry project, the necessary infrastructure is provisioned automatically. As you add capabilities to your agents, such as File Search or custom tools, the service seamlessly integrates any required supporting services behind the scenes. If you choose to extend the capabilities of your agent even further, for example with Foundry IQ, you may need to deploy some additional Azure services.
Optional Azure services
Depending on your agent's capabilities, you might integrate additional Azure services:
Azure AI Search - For advanced knowledge retrieval when using Foundry IQ or File Search tools
Azure Storage - For storing and managing files that agents can access
Azure Key Vault - For securely managing secrets and credentials
Azure Functions - For custom tool implementations and business logic
These services integrate with your Foundry project as needed, but aren't required to get started building agents.
Choosing your development approach
Both the Foundry portal and Visual Studio Code extension provide complete agent development capabilities. Your choice depends on your workflow preferences, team composition, and integration requirements:
Choose the Foundry portal when you want visual configuration, centralized management, or quick prototyping without local development setup.
Choose Visual Studio Code when you prefer developer-centric workflows, need tight integration with application code, or want version-controlled configuration files.
Many teams use both approaches — the portal for initial exploration and stakeholder reviews, and VS Code for detailed development and production deployments. The flexibility to switch between approaches based on your immediate needs is a key strength of Microsoft Foundry Agent Service.
Next unit: Build your first agent in Microsoft Foundry
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
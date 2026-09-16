> Source: https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/5-access-m365-data-workiq

Access Microsoft 365 data with Work IQ - Training | Microsoft Learn
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
Integrate your agent with Microsoft 365
Learn
Training
Browse
Develop AI agents on Azure
Integrate your agent with Microsoft 365
Read in English Add to Collections Add to Plans
Unit 5 of 9
Integrate your agent with Microsoft 365
Introduction 3 min: Completed
Understand Foundry agent publishing options 6 min: Completed
Publish an agent from Foundry portal to Teams 10 min: Completed
Advanced - Use Microsoft 365 Agents Toolkit 6 min: Completed
Access Microsoft 365 data with Work IQ 8 min: Completed
Test and iterate your integrated agent 6 min: Completed
Exercise - Publish a Foundry agent to Teams 30 min: Completed
Knowledge check 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Access Microsoft 365 data with Work IQ
Completed 100 XP
8 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
When building agents that help users with workplace tasks, access to organizational data can dramatically improve the agent's usefulness. Microsoft Work IQ provides a way to connect AI agents to Microsoft 365 data, including emails, meetings, documents, Teams messages, and people information.
What is Work IQ?
Microsoft Work IQ is a command-line interface (CLI) and server that connects AI assistants to your Microsoft 365 Copilot data. It enables agents to query workplace information using natural language, providing rich context that helps agents give more relevant and accurate responses.
With Work IQ, your agents can answer questions like:
"What did my manager say about the project deadline?"
"Find my recent documents about Q4 planning"
"Summarize today's messages in the Engineering channel"
"Who is working on Project Alpha?"
Work IQ accesses data across multiple Microsoft 365 services:
Expand table
Understanding MCP servers
Work IQ is built on the Model Context Protocol (MCP), an open protocol that enables AI assistants to connect to external data sources and tools. Understanding MCP helps explain how Work IQ functions.
An MCP server exposes capabilities that AI agents can use. These capabilities might include:
Tools: Actions the agent can take, like searching for documents or sending messages
Resources: Data sources the agent can query
Prompts: Predefined templates for common queries
When you configure an MCP server for your agent, the agent discovers what tools and resources are available and can use them to fulfill user requests. Work IQ acts as an MCP server specifically designed for Microsoft 365 data.
How Work IQ operates
Work IQ runs in two modes:
CLI mode
In CLI mode, you run queries directly from your terminal:
Bash
Copy
This mode is useful for quick queries during development or for scripts that need to retrieve workplace information.
MCP server mode
In MCP server mode, Work IQ integrates with AI assistants like GitHub Copilot in Visual Studio Code. Your AI assistant can automatically access workplace context when relevant to your work.
For example, if you're implementing a feature that was discussed in a recent meeting, your AI assistant can access that meeting context to provide more relevant suggestions.
Installing Work IQ
You can install Work IQ in several ways depending on your preferred workflow.
Install using npm
Bash
Copy
Install using GitHub Copilot CLI
If you use GitHub Copilot CLI, you can install Work IQ as a plugin:
Open GitHub Copilot CLI by running copilot .
Add the plugins marketplace (one-time setup): /plugin marketplace add github/copilot-plugins
Install Work IQ: /plugin install workiq@copilot-plugins
Restart Copilot CLI and start querying your Microsoft 365 data.
Configure for Visual Studio Code
You can add Work IQ as an MCP server through the VS Code settings. Add the following to your MCP configuration:
JSON
Copy
Before first use, accept the End User License Agreement:
Bash
Copy
Prerequisites for Work IQ
To use Work IQ, you need:
Node.js installed on your machine (if using the CLI locally)
A Microsoft 365 subscription with a Copilot license
Administrative consent for the Work IQ application in your Microsoft Entra tenant
Important
Work IQ requires administrative consent because it accesses organization-wide Microsoft 365 data. If you're not a tenant administrator, contact your IT department to request access.
Security and data access
Work IQ inherits the security model of Microsoft 365 Copilot:
Permission-based access: Work IQ can only access data you already have permission to view
No data storage: Work IQ doesn't store your Microsoft 365 data; it retrieves information on-demand
Enterprise security: All data access follows your organization's security policies
Admin visibility: Administrators can monitor and control Work IQ usage
When you query Work IQ, it accesses data through Microsoft Graph with your authenticated identity. This means:
You can't access documents you don't have permission to view
Queries are auditable by your organization
Data protection policies apply to Work IQ queries
Using Work IQ with agent development
Work IQ helps you understand the context your users work in during agent development. You can interact with Work IQ through either the CLI or the MCP server, depending on your workflow.
CLI approach
The CLI is useful for quick, ad-hoc queries during development. Run the workiq ask command directly from your terminal:
Bash
Copy
The CLI approach works well for scripts, one-off queries, or when you need quick answers without opening an IDE.
MCP server approach
When Work IQ runs as an MCP server, your AI assistant can access the same Microsoft 365 data automatically. Instead of running CLI commands, you interact naturally with your AI assistant, which calls Work IQ tools behind the scenes.
For example, in VS Code with GitHub Copilot configured to use Work IQ:
Ask Copilot: "What requirements did Sarah share about the authentication feature?"
Copilot uses Work IQ's MCP tools to query your Microsoft 365 data
You receive the answer in the chat without running any commands
The MCP approach integrates workplace context seamlessly into your development workflow. Your AI assistant decides when to query Work IQ based on your questions, making the experience feel natural rather than requiring explicit commands.
Both approaches access the same underlying data with the same permissions. Choose the CLI for scripting and quick terminal queries, or the MCP server for integrated AI assistant experiences.
Note
Work IQ is currently in preview. Features and APIs may change as the product evolves.
Next unit: Test and iterate your integrated agent
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
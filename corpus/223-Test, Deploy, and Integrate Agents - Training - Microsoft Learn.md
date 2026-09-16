> Source: https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/8-test-deploy-integrate

Test, Deploy, and Integrate Agents - Training | Microsoft Learn
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
Unit 8 of 11
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
Test, deploy, and integrate agents
Completed 100 XP
9 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Testing, deploying, and publishing agents are critical steps in moving from development to production. Microsoft Foundry provides comprehensive capabilities for validating agent behavior, deploying to your Foundry project, and publishing agents as callable endpoints that external consumers and applications can use.
Testing strategies for agents
Thorough testing ensures your agents behave reliably across diverse scenarios before reaching users. Both the Foundry portal and Visual Studio Code extension provide playgrounds for interactive testing.
Using the playground effectively:
Happy path testing - Verify the agent handles common, expected requests correctly.
Edge case testing - Try ambiguous inputs, incomplete information, and unusual requests to reveal how agents handle uncertainty.
Boundary testing - Confirm the agent respects boundaries defined in its instructions by testing out-of-scope requests.
Multi-turn conversation testing - Verify the agent maintains context across multiple exchanges and builds on previous responses.
Tool invocation testing - Verify agents call the right tools at the right times and incorporate results correctly.
Record test results to track improvements and catch regressions.
Deploying agents to your project
Microsoft Foundry supports deploying agents from the portal or Visual Studio Code. Deploying saves your agent configuration to your Foundry project so you can test and iterate.
Deploying from the Foundry portal
Navigate to your agent in the Foundry portal
Verify configuration and test results are satisfactory
Select Save from the agent's page
Confirm version and deployment settings
Deploying from Visual Studio Code
Open your agent in the AI Toolkit
Select Save to Foundry to push configuration changes
For hosted agents, open the +Build menu in the developer tools and select Deploy to Microsoft Foundry
Select your container configuration and confirm
Both approaches keep your agent within your project workspace where team members can access and test it.
Publishing agents to an endpoint
Publishing moves an agent from your project workspace into a managed Azure resource called an Agent Application. This step is what makes your agent externally callable through a stable endpoint.
What publishing creates
When you publish an agent version, Foundry creates:
Agent Application - An Azure resource with its own invocation URL, authentication policy, and Entra agent identity.
Deployment - A running instance of a specific agent version inside the application, with start/stop lifecycle management.
The key difference between deploying and publishing is scope. Deploying keeps the agent within your project. Publishing creates a dedicated endpoint that external consumers can call without needing access to your Foundry project.
Publishing from the Foundry portal
In the portal, select the agent version you want to publish
Select Publish to create the Agent Application and deployment
Publishing from Visual Studio Code
Open the Command Palette ( Ctrl+Shift+P) and run Microsoft Foundry: Deploy Hosted Agent for hosted agents
Select the target workspace and container configuration
Confirm and deploy
After publishing, the agent appears in the Hosted Agents (Preview) section of the AI Toolkit extension tree view.
The Agent Application endpoint
Published agents expose a stable endpoint using the Responses API protocol: https://<foundry-resource-name>.services.ai.azure.com/api/projects/<project-name>/applications/<app-name>/protocols/openai/responses
This URL stays the same even as you roll out new agent versions, so downstream consumers aren't disrupted by updates.
Authentication and identity
Agent Applications use Microsoft Entra ID for authentication. Callers must have the Azure AI User role on the Agent Application resource. API key authentication isn't supported for Agent Applications.
Important
When you publish an agent, it receives its own dedicated Entra identity, separate from the project's shared identity. Permissions don't transfer automatically. You must reassign RBAC roles to the new agent identity for any resources the agent accesses. If you skip this step, tool calls that work during development fail with authorization errors once the agent is published.
Verifying the endpoint
After publishing, verify the endpoint works:
Get an access token: Azure CLI Copy
Call the Agent Application endpoint: Bash Copy
If you receive 403 Forbidden , confirm the caller has the Azure AI User role on the Agent Application resource.
Updating published agents
To roll out a new agent version:
Make changes in your development environment and test thoroughly
In the Foundry portal, select Publish Updates from the Agent playground
The Agent Application routes 100% of traffic to the new version automatically
The endpoint URL remains unchanged, so existing integrations continue working.
Generating integration code
The Microsoft Foundry VS Code extension generates sample integration code to connect your application to a published agent:
Select your deployed agent in the My Resources view
Select View Code
Choose your folder
The extension generates code for authenticating, connecting, sending messages, and processing responses
Integration patterns
Common patterns for integrating published agents include:
Web applications - Send user messages to the Responses API endpoint and display responses in your UI. Store conversation history client-side for multi-turn interactions.
API-driven workflows - Call the agent endpoint from backend services triggered by events or schedules. Process responses programmatically to drive downstream actions.
Chatbot interfaces - Map user sessions to conversations. Handle real-time message exchange through the endpoint.
Background automation - Schedule agent calls for recurring tasks. Feed system data into agents and process outputs to update business systems.
Production considerations
Running agents in production requires attention to several operational areas:
Monitoring - Track response times, tool invocation success rates, error patterns, and token consumption using Application Insights integration.
Security - Use managed identities for authentication, apply least-privilege access, and define data retention policies.
Cost management - Monitor token usage, set response length limits, and implement rate limiting to prevent unexpected spikes.
Error handling - Implement retry logic with exponential backoff for transient failures. Handle rate limiting with backoff strategies. Validate inputs before sending to agents.
Conversation management - Agent Application endpoints currently support only the stateless Responses API. Store conversation history in your client for multi-turn experiences.
Next unit: Exercise - Build and deploy an AI agent
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
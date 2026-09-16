> Source: https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/2-understand-publishing-options

Understand Foundry agent publishing options - Training | Microsoft Learn
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
Unit 2 of 9
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
Understand Foundry agent publishing options
Completed 100 XP
6 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
When you build an agent in Microsoft Foundry, it runs within the Foundry Agent Service infrastructure. Publishing promotes your agent from a development asset into a managed Azure resource with a dedicated endpoint, independent identity, and governance capabilities.
Understanding agent applications
When you publish an agent, Microsoft Foundry creates an Agent Application resource with:
Dedicated invocation URL: A stable endpoint that remains consistent as you update agent versions
Agent identity: A distinct Microsoft Entra identity separate from your development project
User data isolation: Inputs and interactions from one user aren't available to other users
The Agent Application acts as a routing layer. When you publish a new agent version, traffic automatically routes to the updated deployment without changing the public endpoint.
Publishing to Microsoft 365
The primary focus of this module is Microsoft 365 integration, which enables your agent to appear within Teams and Copilot. Publishing to Microsoft 365:
Creates an Azure Bot Service resource that routes messages between Microsoft 365 and your agent
Generates a Microsoft 365 publishing package for distribution
Registers a Microsoft Entra ID application for authentication
Makes your agent discoverable in the Teams agent store
Direct publishing from Foundry portal
The most straightforward approach is publishing directly from the Foundry portal. The publishing wizard:
Creates an Azure Bot Service resource in your subscription
Registers a Microsoft Entra ID application
Generates a Microsoft 365 publishing package
Prepares your agent for distribution
This approach is ideal when you want to deploy quickly or keep your agent logic entirely within Foundry.
Microsoft 365 Agents Toolkit
For complex scenarios, you can use the Microsoft 365 Agents Toolkit to create a proxy application that connects to your Foundry agent. Consider this approach when you need custom single sign-on (SSO), advanced middleware logic, or multi-environment deployment pipelines. The Agents Toolkit is covered later in this module as an optional advanced topic.
Publish scopes
When publishing to Microsoft 365, you choose between two distribution scopes:
Expand table
Other publishing channels
While this module focuses on Microsoft 365, Foundry agents can also publish to:
Web application preview: Browser-based interface for demos and stakeholder testing
Stable API endpoint: REST API for embedding in custom applications
Azure Bot Service channels: Slack, Telegram, Twilio (SMS), Facebook, and others
These options are useful when you need to reach users outside Microsoft 365 or embed your agent in custom applications.
Agent identity and permissions
When you publish an agent, the system creates a distinct agent identity. This matters because:
The agent authenticates to Azure resources using its own identity
Development-time permissions on your project identity don't transfer automatically
Tools that access Azure services need permissions reconfigured after publishing
If your agent uses tools that connect to services like Azure AI Search, grant the published agent's identity appropriate permissions.
Prerequisites for publishing
Before publishing an agent to Microsoft 365, ensure you have:
Azure AI Project Manager role on your Foundry project
Azure AI User role on the agent application scope
An Azure subscription where you can create Azure Bot Service resources
Permissions to register applications in Microsoft Entra ID
A Microsoft 365 tenant that allows custom apps and bots
Next unit: Publish an agent from Foundry portal to Teams
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
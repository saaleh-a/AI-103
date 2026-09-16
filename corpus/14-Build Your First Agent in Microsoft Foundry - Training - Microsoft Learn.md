> Source: https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/4-build-agent-azure-portal

Build Your First Agent in Microsoft Foundry - Training | Microsoft Learn
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
Unit 4 of 11
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
Build your first agent in Microsoft Foundry
Completed 100 XP
8 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Building your first AI agent in the Foundry portal provides an accessible entry point to agent development. The portal's visual interface guides you through configuration without requiring code, making it easy to understand agent concepts while creating functional automation.
Creating an agent in the Foundry portal
The Foundry portal streamlines agent creation through an intuitive interface:
Navigate to Microsoft Foundry at https://ai.azure.com and sign in with your Azure credentials
Select your project from the list of available projects, or create a new one
Select Build > Agents in the left navigation menu
Select Create to start building a new agent
Enter agent details:
Name: Provide a descriptive name for your agent
Description: Add a clear description of the agent's purpose
Model: Select a deployed model from the dropdown, or deploy a new model
The portal creates your agent and opens the configuration interface where you can refine its behavior and capabilities.
Configuring agent instructions and properties
Agent instructions are the foundation of agent behavior. In the Instructions field, you define how your agent understands its role, responds to users, and handles various scenarios. Clear, specific instructions lead to consistent, reliable agent behavior. You'll configure instructions in more detail when working in Visual Studio Code later in this module.
Beyond instructions, the portal lets you configure model parameters such as Temperature (which controls response randomness) and Top P (which controls response diversity). These configuration options are explored further in the Visual Studio Code configuration unit.
Testing your agent in the portal
The Foundry portal includes an integrated playground for testing your agent before deployment. This testing environment lets you validate instructions, try different scenarios, and refine behavior based on results.
To test your agent, select the Playground tab and start a conversation. The playground maintains conversation history during your session, allowing you to test multi-turn interactions and verify the agent maintains context appropriately.
Adding basic tools
Before deployment, you can enhance your agent with tools from the tool catalog in the Tools section of the agent configuration (also accessible via Build > Tools in the portal). The catalog organizes tools into three categories:
Configured - Built-in tools ready to use immediately, such as Code Interpreter and File Search
Catalog - Additional tools you can add, including Bing Web Search, Azure AI Search, SharePoint, and more
Custom - Your own tools added through OpenAPI specifications or MCP servers
Tool capabilities and configuration are explored in detail in the Extend agent capabilities unit later in this module.
Deploying your agent
Once you're satisfied with your agent's behavior in testing, you can deploy it for production use. The portal provides clear deployment status indicators and generates the connection information needed to integrate the agent into your applications. After deployment, you can access the agent through the Microsoft Foundry SDK or REST APIs.
Building agents in the Foundry portal provides an accessible, visual approach to agent development. The interface guides you through configuration while offering powerful capabilities for creating sophisticated automation.
Next unit: Set up Visual Studio Code for agent development
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
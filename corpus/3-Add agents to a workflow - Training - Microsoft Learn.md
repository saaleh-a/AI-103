> Source: https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/5-add-agents-to-workflow

Add agents to a workflow - Training | Microsoft Learn
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
Build agent-driven workflows using Microsoft Foundry
Learn
Training
Browse
Develop AI agents on Azure
Build agent-driven workflows using Microsoft Foundry
Read in English Add to Collections Add to Plans
Unit 5 of 11
Build agent-driven workflows using Microsoft Foundry
Introduction 1 min: Completed
Understand Workflows 1 min: Completed
Identify Workflow Patterns 3 min: Completed
Create workflows in Microsoft Foundry 5 min: Completed
Add Agents to a Workflow 5 min: Completed
Apply Power Fx in Workflows 5 min: Completed
Maintain Workflows in Microsoft Foundry 5 min: Completed
Use workflows in code 5 min: Completed
Exercise - Create an Agent-driven Workflow 30 min: Completed
Module Assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Add Agents to a Workflow
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Agents are the core reasoning components within a Microsoft Foundry workflow. By adding agents to a workflow, you enable AI-driven decision-making, classification, and response generation as part of a larger orchestration. Each agent can be configured with a specific purpose, model, prompt, and set of tools, allowing workflows to combine multiple specialized capabilities.
You add agents to a workflow by inserting an Invoke agent node. This node can reference an existing agent from your Foundry project, or you can create a new agent directly within the workflow designer. The Invoke agent editor allows you to configure tools, knowledge bases, memory, and guardrails for the agent, tailoring its behavior to the workflow's needs. When you invoke an agent, the workflow passes context—such as user input or previously set variables—to the agent and receives a response that can be used in subsequent steps.
Agents can be reused across multiple workflows, which encourages modular design. For example, a single categorization agent might be invoked in many workflows to classify incoming requests, while different resolution agents handle follow-up actions. This separation of concerns makes workflows easier to maintain and evolve over time.
In addition to generating natural language responses, agents can be configured to return structured output. By defining a response format such as a JSON schema, you ensure that agent output follows a predictable shape. Structured outputs are especially useful when agent responses drive control flow, such as routing logic or variable assignment in later nodes. You can define an agent's output schema in the parameters of the Details tab of the Invoke agent editor. 
Once an agent is added to a workflow, its output can be stored in a variable and referenced throughout the workflow. Using variables allows agents to influence decisions, trigger conditional branches, or provide input to other agents. You can configure variable storage in the Action settings of the Invoke agent node. 
By thoughtfully adding and configuring agents, you transform a simple sequence of actions into an intelligent, adaptive workflow.
Next unit: Apply Power Fx in Workflows
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
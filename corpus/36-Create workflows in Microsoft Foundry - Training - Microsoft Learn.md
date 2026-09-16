> Source: https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/4-create-workflows-microsoft-foundry

Create workflows in Microsoft Foundry - Training | Microsoft Learn
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
Unit 4 of 11
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
Create workflows in Microsoft Foundry
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Microsoft Foundry provides a visual designer that lets you build workflows as a sequence of connected nodes. Each node represents a specific action—such as invoking an agent, evaluating logic, or transforming data—and the connections between nodes define how execution flows from one step to the next. This visual approach makes it easier to reason about orchestration logic and understand how agents interact within a larger process.
You can start a workflow from a blank canvas or by selecting a predefined pattern, such as a sequential workflow. The designer displays the workflow as a series of nodes laid out in execution order. As you build, you can move nodes, insert new steps, and inspect configuration details directly within the canvas. Because workflows aren't saved automatically, it's important to save your changes regularly to preserve each version of your design. 
The main node types in the workflow builder are:
Invoke: Invokes an AI agent from your project or creates a new one. Agent nodes can return free-text responses or structured outputs (like JSON) that other nodes can use. They're used for classification, reasoning, recommendations, or any AI-driven task.
Flow: Controls the workflow's execution path. Flow nodes let your workflow adapt dynamically to different inputs or situations. Flow nodes include:
If/Else: Branches execution based on conditions.
Go To: Jumps to another node in the workflow.
For Each: Loops over a list of items, performing the same actions for each one.
Data transformation: Manipulates data and manages variables. Data transformation nodes ensure that information is correctly passed to subsequent steps. Data transformation nodes include:
Set Variable: Assigns a value to a variable for later use.
Reset Variable: Clears or reinitializes a variable.
Parse value: Extracts specific data from structured outputs or converts values to different formats.
Basic chat: Sends messages to the user or asks questions to collect input. These nodes are often paired with variables to capture responses, which can then influence logic or agent decisions later in the workflow.
End: Marks the conclusion of a workflow. The End node can optionally return a final result or status.
flow that determines how each step is executed. Variables provide shared state across nodes, allowing outputs from one step—such as agent results or user input—to inform decisions or trigger more actions. While agent nodes are an important part of a workflow, effective automation relies on the coordinated use of all node types.
Workflows execute within a conversational context, letting you interact with them through the chat window. This interactivity allows you to observe how inputs move through the nodes and validate that each step behaves as expected before adding more complexity. As workflows grow, the visual designer makes it easy to trace execution paths and quickly identify where logic branches or decisions occur.
Understanding nodes and how to combine them gives you the foundation for creating workflows that integrate AI reasoning, data handling, and control logic. Nodes are the building blocks you assemble to turn concepts and automation goals into functional, scalable workflows.
Next unit: Add Agents to a Workflow
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
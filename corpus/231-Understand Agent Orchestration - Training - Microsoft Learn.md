> Source: https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/3-understand-agent-orchestration

Understand Agent Orchestration - Training | Microsoft Learn
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
Orchestrate a multi-agent solution using the Microsoft Agent Framework
Learn
Training
Browse
Develop AI agents on Azure
Orchestrate a multi-agent solution using the Microsoft Agent Framework
Read in English Add to Collections Add to Plans
Unit 3 of 11
Orchestrate a multi-agent solution using the Microsoft Agent Framework
Introduction 2 min: Completed
Understand the Microsoft Agent Framework 6 min: Completed
Understand agent orchestration 5 min: Completed
Use concurrent orchestration 5 min: Completed
Use sequential orchestration 5 min: Completed
Use group chat orchestration 5 min: Completed
Use handoff orchestration 5 min: Completed
Use Magentic orchestration 5 min: Completed
Exercise - Develop a multi-agent solution 30 min: Completed
Knowledge check 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Understand agent orchestration
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The Microsoft Agent Framework SDK's agent orchestration framework makes it possible to design, manage, and scale complex multi-agent workflows without having to manually handle the details of agent coordination. Instead of relying on a single agent to manage every aspect of a task, you can combine multiple specialized agents. Each agent with a unique role or area of expertise can collaborate to create systems that are more robust, adaptive, and capable of solving real-world problems collaboratively.
By orchestrating agents together, you can take on tasks that would be too complex for a single agent—from running parallel analyses, to building multi-stage processing pipelines, to managing dynamic, context-driven handoffs between experts.
Why multi-agent orchestration matters
Single-agent systems are often limited in scope, constrained by one set of instructions or a single model prompt. Multi-agent orchestration addresses this limitation by allowing you to:
Assign distinct skills, responsibilities, or perspectives to each agent.
Combine outputs from multiple agents to improve decision-making and accuracy.
Coordinate steps in a workflow so each agent's work builds on the last.
Dynamically route control between agents based on context or rules.
This approach opens the door to more flexible, efficient, and scalable solutions, especially for real-world applications that require collaboration, specialization, or redundancy.
Understand workflows in the Microsoft Agent Framework
The Microsoft Agent Framework provides workflows — structured sequences of steps used to complete a task. These workflows can include one or more AI agents alongside other components to automate complex operations.
Workflows give developers control over how tasks are executed, enable multi-agent orchestration, and support checkpointing to save and resume workflow states.
Core Components of a Workflow
Executors
Executors are the main workers in a workflow. They receive input messages, perform specific actions, and produce outputs that move the workflow toward completing its goal.
Executors can represent AI agents or custom logic components.
Example: One executor could analyze a travel request, while another books the flight or hotel based on the results.
Edges
Edges define how messages flow between executors, determining the logic and order of execution. The Microsoft Agent Framework supports several types of edges:
Direct Edges: Connect one executor directly to another in sequence. Example: After an AI agent gathers user input, the next executor processes the booking.*
Conditional Edges: Trigger only when certain conditions are met. Example: If hotel rooms are unavailable, the workflow branches to an executor that suggests alternative dates or locations.*
Switch-Case Edges: Route messages to different executors based on predefined conditions. Example: VIP customers might be routed to a premium service executor, while others follow the standard process.*
Fan-Out Edges: Send a single message to multiple executors simultaneously. Example: One request could be sent to several agents — one checking flights, another checking hotels.*
Fan-In Edges: Combine multiple messages from different executors into one for a final step. Example: After gathering hotel and flight results, a summary executor compiles them into a single travel itinerary.*
Events
The Microsoft Agent Framework includes built-in events to improve observability and debugging during workflow execution. These events help developers monitor progress, track errors, and analyze system performance.
Expand table
Workflows in the Microsoft Agent Framework allow developers to design, monitor, and control how multiple AI agents and logic components interact to complete complex tasks. They bring structure, flexibility, and transparency to agent-driven applications.
Supported orchestration patterns
Microsoft Agent Framework provides several orchestration patterns directly in the SDK, each offering a different approach to coordinating agents. These patterns are designed to be technology-agnostic so you can adapt them to your own domain and integrate them into your existing systems.
Concurrent orchestration - Broadcast the same task to multiple agents at once and collect their results independently. Useful for parallel analysis, independent subtasks, or ensemble decision making.
Sequential orchestration - Pass the output from one agent to the next in a fixed order. Ideal for step-by-step workflows, pipelines, and progressive refinement.
Handoff orchestration - Dynamically transfer control between agents based on context or rules. Great for escalation, fallback, and expert routing where one agent works at a time.
Group chat orchestration - Coordinate a shared conversation among multiple agents (and optionally a human), managed by a chat manager that chooses who speaks next. Best for brainstorming, collaborative problem solving, and building consensus.
Magentic orchestration - A manager-driven approach that plans, delegates, and adapts across specialized agents. Suited to complex, open-ended problems where the solution path evolves.
A unified orchestration workflow
Regardless of which orchestration pattern you choose, the Microsoft Agent Framework SDK provides a consistent, developer-friendly interface for building and running them. The typical flow looks like this:
Define your agents and describe their capabilities.
Select and create an orchestration pattern, optionally adding a manager agent if needed.
Optionally configure callbacks or transforms for custom input and output handling.
Start a runtime to manage execution.
Invoke the orchestration with your task.
Retrieve results in an asynchronous, nonblocking way.
Because all patterns share the same core interface, you can easily experiment with different orchestration strategies without rewriting agent logic or learning new APIs. The SDK abstracts the complexity of agent communication, coordination, and result aggregation so you can focus on designing workflows that deliver results.
Multi-agent orchestration in the Microsoft Agent Framework SDK provides a flexible, scalable way to build intelligent systems that combine the strengths of multiple specialized agents. With built-in orchestration patterns, a unified development model, and runtime features for managing execution, you can quickly prototype, refine, and deploy collaborative AI workflows. The framework provides the tools to turn multiple agents into a cohesive problem-solving team, whether you're running parallel processes, sequential workflows, or dynamic conversations.
Next unit: Use concurrent orchestration
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
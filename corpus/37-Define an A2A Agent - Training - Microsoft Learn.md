> Source: https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/2-define-a2a-agent

Define an A2A Agent - Training | Microsoft Learn
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
Discover Azure AI Agents with A2A
Learn
Training
Browse
Develop AI agents on Azure
Discover Azure AI Agents with A2A
Read in English Add to Collections Add to Plans
Unit 2 of 8
Discover Azure AI Agents with A2A
Introduction 2 min: Completed
Define an A2A agent 5 min: Completed
Implement an agent executor 5 min: Completed
Host an A2A server 5 min: Completed
Connect to your A2A agent 5 min: Completed
Exercise - Connect to remote Azure AI Agents with the A2A protocol 30 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Define an A2A agent
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The Agent-to-Agent (A2A) protocol is a standardized way for AI agents to communicate and collaborate with each other. It defines how agents can share context, invoke each other's capabilities, and exchange information securely. By adhering to the A2A protocol, agents from different vendors or platforms can work together seamlessly, enabling more complex and integrated AI solutions.
Before an A2A agent can participate in multi-agent workflows, it needs to explain what it can do. Agent Skills and how other agents or clients can discover those capabilities are exposed through an Agent Card.
Advantages of the Agent-to-Agent (A2A) protocol
The Agent-to-Agent (A2A) protocol offers several advantages for AI agent interactions:
Enhanced Collaboration: A2A enables agents from different vendors and platforms to share context and work together, allowing seamless automation across systems that are traditionally disconnected.
Flexible Model Selection: Each A2A agent can choose which large language model (LLM) to use for handling requests, enabling optimized or fine-tuned models per agent, unlike some MCP scenarios that rely on a single LLM connection.
Integrated Authentication: Authentication is built into the A2A protocol, providing a robust security framework for secure agent-to-agent communication.
Agent Skills
An Agent Skill describes a specific capability or function that the agent can perform. Think of it as a building block that communicates to clients or other agents what tasks the agent is designed to handle.
Key elements of an Agent Skill include:
ID: A unique identifier for the skill.
Name: A human-readable name describing the skill.
Description: A detailed explanation of what the skill does.
Tags: Keywords for categorization and easier discovery.
Examples: Sample prompts or use cases to illustrate the skill in action.
Input/Output Modes: Supported data formats or media types (for example, text, JSON).
When defining a skill for your agent, consider the tasks it should perform, how to describe them clearly, and how other agents or clients might use them. For example, a simple "Hello World" skill could return a basic greeting in text format, whereas a blog-writing skill might accept a topic and return a suggested title or outline.
Agent Card
The Agent Card is like a digital business card for your agent. It's a structured document that a routing agent or client can retrieve to discover your agent's capabilities and how to interact with it.
Key elements of an Agent Card include:
Identity Information: Name, description, and version of the agent.
Endpoint URL: Where the agent's A2A service can be accessed.
Capabilities: Supported A2A features such as streaming or push notifications.
Default Input/Output Modes: The primary media types the agent can handle.
Skills: A list of the agent's skills that other agents can invoke.
Authentication Support: Indicates if the agent requires credentials for access.
When creating an Agent Card, ensure it accurately represents your agent's skills and endpoints. This allows clients or routing agents to discover the agent, understand what it can do, and interact with it appropriately.
Putting it together
Once an agent defines its skills and publishes an Agent Card:
Other agents or clients can discover the agent automatically.
Requests can be routed to the agent's appropriate skill.
Responses are returned in supported formats, enabling smooth collaboration across multiple agents.
For example, in a technical writer workflow, one agent could define skills for generating article titles, and another for creating outlines. The routing agent retrieves each agent's card to discover these capabilities and orchestrates a workflow where a title generated by one agent feeds into the outline agent, producing a cohesive final response.
Next unit: Implement an agent executor
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
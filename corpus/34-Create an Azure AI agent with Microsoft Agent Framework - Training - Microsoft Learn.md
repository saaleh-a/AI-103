> Source: https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/3-create-azure-ai-agent

Create an Azure AI agent with Microsoft Agent Framework - Training | Microsoft Learn
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
Unit 3 of 7
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
Create an Azure AI agent with Microsoft Agent Framework
Completed 100 XP
7 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The Foundry Agent Service is the recommended provider for production environments built with the Microsoft Agent Framework. It handles persistent conversation history on the service side, supports built-in tools such as code execution and file search, and integrates seamlessly with Azure identity management. These features allow you to focus on your agent's behavior rather than its infrastructure overhead.
Configuring a Foundry agent
Creating and interacting with a Foundry agent follows a consistent sequence of steps.
1. Set up your Foundry project
Before writing any code, you need a Microsoft Foundry project with a deployed model. You connect to your project using two pieces of information:
Project endpoint—the URL of your Foundry project.
Model deployment name—the name of the model deployment you want to use for your agent.
2. Configure authentication
The Agent Framework connects to your Foundry project using Azure credentials. In most scenarios, DefaultAzureCredential resolves the right credential automatically based on your environment—Azure CLI during development, managed identity in production. No connection strings or API keys need to be hardcoded.
3. Initialize the Foundry chat client
Create a Foundry chat client by providing your credentials, project endpoint, and model name. This client is the bridge between your application and the Foundry Agent Service. It handles authentication, request routing, and service-side session management.
4. Create the agent
Using the chat client, create an agent by providing a set of instructions that define its behavior:
Instructions—the system prompt that defines the agent's role, goals, and constraints
Tools (optional)—Custom functions the agent can call to take actions or retrieve information
The framework registers any tools you provide and automatically generates their schemas, so the model knows when and how to invoke them.
5. Establish a session and run the agent
To begin interacting, you open a session via the agent instance. The session acts as the container for the conversation state. You send user messages to the session's execution method, which processes the prompt, coordinates any necessary tool calls, and returns the model's response.
Multi-turn conversations
A single call to the agent's run method handles one exchange—one user message, one response. For a real conversation, you need the agent to remember what was said in earlier turns. That's what a session is for.
For the Foundry provider, the sessions are backed by service-side storage—the conversation history lives in the Foundry Agent Service rather than in your application's memory.
Persistent history—Because the state lives on the service side, a user's conversation can continue across multiple requests, even if your application restarts or scales out to multiple instances.
Local history—For providers that don't support service-side history, the framework maintains the conversation state in memory within the session object. Local history is suitable for short-lived or stateless applications, but it doesn't persist across process restarts.
Nonstreaming vs. streaming responses
The Agent Framework supports two response modes:
Non-streaming (synchronous)—the run method waits for the agent to finish processing and returns a complete response object. Non-streaming is the simplest pattern and works well when you don't need to display output incrementally.
Streaming (asynchronous)—the run method returns a response stream that you iterate over asynchronously, receiving partial updates as the model generates them. Streaming is better suited for user-facing interfaces where showing output progressively improves the experience.
In both cases, the response exposes a text property that aggregates all text content from the agent's output, making it straightforward to extract the final answer regardless of which mode you use.
Next unit: Add tools to Azure AI agent
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
> Source: https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/5-connect-to-a2a-agent

Connect to your A2A Agent - Training | Microsoft Learn
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
Unit 5 of 8
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
Connect to your A2A agent
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Once your A2A agent server is running, the next step is understanding how a client can interact with it. A client acts as the bridge between your application and the agent server.
The client responsibilities include:
Discovering the Agent Card, which contains metadata about the agent and its endpoints.
Sending requests to the agent for processing.
Receiving and interpreting the agent's responses, which can be either direct messages or task-based results.
Connect to your agent server
The client must know the base URL of the server.
The client typically retrieves the Agent Card from a well-known endpoint on the server.
Once the Agent Card is obtained, the client can be initialized with it, establishing a connection ready to send messages.
Send requests to the agent
There are two main types of requests a client can make:
Non-Streaming Requests: The client sends a message and waits for a complete response. This type of request is suitable for simple interactions or when a single response is expected.
Streaming Requests: The client sends a message and receives responses incrementally as the agent processes the request. This type of request is useful for long-running tasks or when you want to update the user in real-time.
In both cases, requests usually include a role (fo example, user) and the message content. More complex agents may return task objects instead of immediate messages, allowing for task tracking or cancellation.
Handle the agent response
Agent responses may include:
Direct messages: Immediate outputs from the agent, such as text or structured content.
Task-based responses: Objects representing ongoing tasks, which may require follow-up calls to check status or retrieve results.
Clients should be prepared to handle both response types and interpret the returned data appropriately.
Interacting with the agent
Each request should be uniquely identifiable, often using a generated ID.
Streaming responses are asynchronous and may provide partial results before the final output.
Simple agents may return messages directly, while more advanced agents may manage multiple tasks simultaneously.
Connecting a client to your agent server involves fetching the Agent Card, establishing a connection, sending requests, and handling responses. By grasping these core concepts, you can confidently interact with your remote agent, whether you're sending simple messages or managing complex tasks.
Next unit: Exercise - Connect to remote Azure AI Agents with the A2A protocol
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
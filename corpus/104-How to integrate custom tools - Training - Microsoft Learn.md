> Source: https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/4-how-use-custom-tools

How to integrate custom tools - Training | Microsoft Learn
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
Integrate custom tools into your agent
Learn
Training
Browse
Develop AI agents on Azure
Integrate custom tools into your agent
Read in English Add to Collections Add to Plans
Unit 4 of 7
Integrate custom tools into your agent
Introduction 2 min: Completed
Why use custom tools 3 min: Completed
Options for implementing custom tools 6 min: Completed
How to integrate custom tools 7 min: Completed
Exercise - Build an agent with custom tools 30 min: Completed
Module assessment 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
How to integrate custom tools
Completed 100 XP
7 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Custom tools in an agent can be defined in a handful of ways, depending on what works best for your scenario. You may find that your company already has Azure Functions implemented for your agent to use, or a public OpenAPI specification gives your agent the functionality you're looking for.
Function Calling
Function calling allows agents to execute predefined functions dynamically based on user input. This feature is ideal for scenarios where agents need to perform specific tasks, such as retrieving data or processing user queries, and can be done in code from within the agent. Your function may call out to other APIs to get additional information or initiate a program.
Example: Defining and using a function
Start by defining a function that the agent can call. For instance, here's a fake snowfall tracking function:
Python
Copy
Register the function with your agent using the Azure AI SDK:
Python
Copy
The agent can now call recent_snowfall dynamically when it determines that the prompt requires information that can be retrieved by the function.
Azure Functions
Azure Functions provides serverless computing capabilities for real-time processing. This integration is ideal for event-driven workflows, enabling agents to respond to triggers such as HTTP requests or queue messages.
Example: Using Azure Functions with a queue trigger
First, develop and deploy your Azure Function. In this example, imagine we have a function in our Azure subscription to fetch the snowfall for a given location.
When your Azure Function is in place, add it to the agent definition as an Azure Function tool:
Python
Copy
The agent can now send requests to the Azure Function via a storage queue and process the results.
OpenAPI Specification
OpenAPI defined tools allow agents to interact with external APIs using standardized specifications. This approach simplifies API integration and ensures compatibility with various services. The Foundry Agent Service uses OpenAPI 3.0 specified tools.
Tip
Currently, three authentication types are supported with OpenAPI 3.0 tools: anonymous, API key, and managed identity.
Example: Using an OpenAPI specification
First, create a JSON file (in this example, called weather_openapi.json) describing the API.
JSON
Copy
Then, register the OpenAPI tool in the agent definition:
Python
Copy
The agent can now use the OpenAPI tool to fetch weather data dynamically.
Note
One of the concepts related to agents and custom tools that developers often have difficulty with is the declarative nature of the solution. You don't need to write code that explicitly calls your custom tool functions - the agent itself decides to call tool functions based on messages in prompts. By providing the agent with functions that have meaningful names and well-documented parameters, the agent can "figure out" when and how to call the function all by itself!
By using one of the available custom tool options (or any combination of them), you can create powerful, flexible, and intelligent agents with Foundry Agent Service. These integrations enable seamless interaction with external systems, real-time processing, and scalable workflows, making it easier to build custom solutions tailored to your needs.
Next unit: Exercise - Build an agent with custom tools
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
> Source: https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/03-microsoft-foundry-sdk

Choose an endpoint and SDK - Training | Microsoft Learn
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
Develop generative AI apps in Azure
Develop a generative AI chat app with Microsoft Foundry
Learn
Training
Browse
Develop generative AI apps in Azure
Develop a generative AI chat app with Microsoft Foundry
Read in English Add to Collections Add to Plans
Unit 3 of 8
Develop a generative AI chat app with Microsoft Foundry
Introduction 1 min: Completed
Explore with the model playground 7 min: Completed
Choose an endpoint and SDK 7 min: Completed
Generate responses with the Responses API 10 min: Completed
Generate responses with the ChatCompletions API 10 min: Completed
Exercise - Create a generative AI chat app 10 min: Completed
Knowledge check 5 min: Completed
Summary 3 min: Completed
Achievements
Ask Learn Ask Learn
Choose an endpoint and SDK
Completed 100 XP
7 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Microsoft Foundry provides flexibility for developing generative AI chat applications. Before you start development, it's important to understand the options that are available, and how to decide which of them to use. Some considerations for developing an application include:
Endpoints: Microsoft Foundry projects provide two endpoints that you can use to connect to and consume project assets, such as model deployments, from client applications. Each project has both a Project endpoint and an Azure OpenAI endpoint.
Client SDK: Depending on the endpoint you select, you can choose to use the Microsoft Foundry SDK or the OpenAI SDK to develop a generative AI chat application. Both SDKs support an OpenAI API compatible client object that can submit prompts to models, but there are some differences in the specific functionality available in each SDK.
Authentication: Depending on the endpoint and SDK you choose to use, there are multiple ways a client application can be authenticated by Foundry in order to be granted access to assets. In general, production applications should use Microsoft Entra ID authentication, which requires the application to be running in the context of a specific identity; but in some scenarios you can also use key-based or token-based authentication.
Chat API: The OpenAI client API supports two chat APIs: ChatCompletions and Responses. While the Responses API is recommended for most new development projects, the ChatCompletions API is well-established and compatible across many generative AI models and platforms.
Let's start by considering the available endpoints, client SDKs, and authentication methods - we'll explore the Responses and ChatCompletions APIs later.
Using the Foundry SDK with the project endpoint
The Microsoft Foundry SDK provides programmatic access to resources in your projects through a REST API and language-specific client libraries; including:
Azure AI Projects for Python
Azure AI Projects for Microsoft .NET
Azure AI Projects for JavaScript
Note
This module uses Python code examples for common tasks. You can refer to the language-specific SDK documentation for equivalent code in your preferred language. Each SDK is developed and maintained independently, so some functionality may be at different stages of implementation.
Installing the SDK
To use the Azure AI Projects library in Python, install the azure-ai-projects package from PyPI along with supporting packages:
Bash
Copy
Note
When using the Foundry SDK to develop a chat application, you also need to import the OpenAI SDK package - the chat client functionality in the Foundry SDK is derived from the OpenAI SDK.
Connecting to the project endpoint
Each Foundry project has a unique endpoint that you can find on the project's Overview page in the Foundry portal at https://ai.azure.com.
The project endpoint follows this format:
Copy
Use this endpoint to create an AIProjectClient object:
Python
Copy
Note
The code uses default Azure credentials to authenticate. To enable this authentication, you need to install the azure-identity package (shown in the installation command earlier).
Tip
To access the project successfully, the code must run in an authenticated Azure session. For example, you can use the Azure CLI az login command to sign in before running the code.
The project client ( AIProjectClient ) provides access to Foundry-native operations that don't have OpenAI equivalents. Use the project client to:
Retrieve resource connections
Access project configuration
Enable tracing
Manage datasets and indexes
Creating a chat client
To chat with a model in your Foundry project, you need an OpenAI-compatible client object. You can use the get_openai_client() method of the project client to get one, like this:
Python
Copy
You can then use this chat client object to submit prompts to models and return responses.
Using the OpenAI SDK with the Azure OpenAI endpoint
The OpenAI SDK is the official client library for calling the OpenAI API. It handles HTTP requests, authentication, retries, and response parsing. The SDK works with OpenAI-hosted models, Azure OpenAI deployments, and Foundry models using the same patterns.
Installing the SDK
To use the OpenAI library in Python, install the openai package from PyPI along with supporting packages:
Bash
Copy
Note
The azure-identity package is required if you intend to use token-based authentication to connect to the endpoint using Microsoft Entra ID credentials.
Connecting to the Azure OpenAI endpoint
Each Foundry project includes an Azure OpenAI endpoint that you can find on the project's Overview page in the Foundry portal at https://ai.azure.com.
The Azure OpenAI endpoint follows this format:
Copy
Create an OpenAI client with your endpoint and Azure credentials:
Python
Copy
In addition to Microsoft Entra ID (recommended), you can authenticate using an API key or environment variables.
API key authentication:
Python
Copy
Important
Use API keys with caution. Store them securely in Azure Key Vault and never include them directly in your code.
Environment variables:
If you set OPENAI_BASE_URL and OPENAI_API_KEY environment variables, the client uses them automatically:
Python
Copy
Regardless of how you choose to authenticate, the OpenAI client handles model inference operations. Use it for:
Generating responses with the Responses API
Chat completions and image generation
Accessing Foundry direct models (non-Azure OpenAI models)
Using an AzureOpenAI client object
You should generally use the OpenAI client object to chat with models through the Azure OpenAI v1 endpoint. However, you also have the option to create an AzureOpenAI client object if you need to use functionality from a specific version of the Azure OpenAI API. To create an AzureOpenAI client object, you must specify the API version and the Azure endpoint, like this:
Python
Copy
Choosing between the Foundry SDK and OpenAI SDK
Microsoft Foundry supports two approaches for building AI applications. Each serves different purposes, and understanding when to use each one helps you build the right solution.
When to use the Foundry SDK
Use the Foundry SDK when your application needs Foundry-specific capabilities:
Foundry Agent Service for building and managing AI agents
Tool invocation and approval workflows
Cloud evaluations for testing and validating AI responses
Tracing and observability for monitoring application behavior
Foundry direct models (non-Azure OpenAI models available through the model catalog)
Project metadata, connections, and governance features
Microsoft recommends the Foundry SDK when building apps with agents, evaluations, or Foundry-specific features.
When to use the OpenAI SDK
Use the OpenAI SDK when you need maximum compatibility with the OpenAI API:
Full OpenAI API compatibility for existing code and tooling
Portability between OpenAI and Azure OpenAI deployments
Chat Completions, Responses, and Images APIs
Minimal dependency on Foundry-specific concepts
The OpenAI SDK is ideal for model inference workloads where you want existing OpenAI code to work with minimal changes. However, this approach doesn't provide Foundry-specific features like agents or evaluations.
Microsoft Foundry gives you flexibility in how you build AI applications. Use the Foundry SDK with AIProjectClient when you need project-level features like agents, evaluations, tracing, and connections. Use the OpenAI SDK when you need straightforward model inference with maximum OpenAI compatibility. Both SDKs work with your Foundry project endpoint, so you can combine them as needed in your applications. You can also use both SDKs together in the same application—the Foundry SDK for project features and the OpenAI SDK for model inference.
Next unit: Generate responses with the Responses API
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
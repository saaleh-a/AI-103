> Source: https://learn.microsoft.com/en-gb/training/modules/develop-speech-agent-speech-mcp/03-connect-use-speech-mcp

Connect and use the Speech MCP server with an agent - Training | Microsoft Learn
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
Develop natural language solutions in Azure
Develop a speech agent with the Azure Speech MCP server
Learn
Training
Browse
Develop natural language solutions in Azure
Develop a speech agent with the Azure Speech MCP server
Read in English Add to Collections Add to Plans
Unit 3 of 6
Develop a speech agent with the Azure Speech MCP server
Introduction 2 min: Completed
Understand the Azure Speech MCP server 7 min: Completed
Connect and use the Speech MCP server with an agent 8 min: Completed
Exercise - Use Azure Speech in an agent 30 min: Completed
Knowledge check 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Connect and use the Speech MCP server with an agent
Completed 100 XP
8 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
After you understand the capabilities of the Azure Speech MCP server, the next step is to connect it to an agent and start using it. This involves setting up storage, creating an agent in Microsoft Foundry, connecting the Speech MCP tool, testing it in the agent playground, and optionally building a client application.
Set up Azure Blob Storage
The Azure Speech MCP server requires an Azure Storage account to store audio files. You need to create a storage account and a blob container before connecting the tool.
In the Azure portal, create a new Azure Storage account (or use an existing one).
In the storage account, expand Data storage and select Containers.
Create a new container (for example, named files) to store the audio files your agent generates and reads.
Generate a SAS token for the container with the following permissions: Read, Add, Create, Write, and List. Set the expiry time to the shortest practical duration.
Important
Copy the generated SAS URL and store it securely — you need it when connecting the Speech MCP server.
Create a Foundry project and agent
To use the Azure Speech MCP server, you need a Microsoft Foundry project with a deployed model.
In the Microsoft Foundry portal, create a new project (or use an existing one).
Deploy a model (such as gpt-4.1) that your agent will use for reasoning and generating responses.
Create an agent and give it instructions that describe its purpose. For example: Copy
The agent is now ready to receive tool connections.
Connect the Azure Speech MCP server
You connect the Azure Speech MCP server to your agent through the Tools page in the Foundry portal.
In the navigation pane, select the Tools page.
Select Connect a tool and choose Azure Speech in Foundry Tools from the catalog.
Configure the connection with the following settings:
Foundry resource name: The name of your Foundry resource (for example, myproject-resource ).
Bearer ( Ocp-Apim-Subscription-Key ): The key for your Foundry project.
X-Blob-Container-Url: The SAS URL for your blob container.
Wait for the connection to be created, then select Use in an agent and choose your agent. 
The agent now has access to the speech-to-text and text-to-speech tools exposed by the Azure Speech MCP server.
Tip
You can find the project key on the project home page in the Foundry portal.
Test in the agent playground
The agent playground in the Foundry portal provides an interactive environment for testing your agent.
Test text-to-speech
Enter a prompt that asks the agent to generate speech:
Copy
The first time the agent uses the Speech MCP tool, you're prompted to approve the tool usage. You can select Always approve all Azure Speech MCP Server tools to skip future approval prompts.
The response includes a link to the generated audio file saved in your blob container. Select the link to listen to the synthesized speech.
Test speech-to-text
Enter a prompt that asks the agent to transcribe an audio file. You can use a publicly accessible URL or a SAS URL pointing to a file in your blob container:
Copy
The agent calls the speech-to-text tool and returns the transcribed text.
Customizing speech output
The Speech MCP tools support several options you can specify in your prompts:
Voice selection: Specify a neural voice, such as en-GB-SoniaNeural or en-US-JennyNeural .
Language: Specify the language for recognition or synthesis (for example, es-ES for Spanish).
Phrase hints: Provide domain-specific terms to improve transcription accuracy (for example, "Azure, OpenAI, Cognitive Services").
Profanity filtering: Request masked , removed , or raw profanity handling during transcription.
For example:
Copy
Build a client application
While the agent playground is useful for testing, you typically want to build a client application that uses the agent programmatically. The Microsoft Foundry SDK supports this through the OpenAI Responses API.
To build a client application, you use the azure-ai-projects and azure-identity packages. The general pattern is:
Create an AIProjectClient using your Foundry project endpoint and DefaultAzureCredential (which uses your Azure CLI credentials in development).
Get an OpenAI client from the project client by calling get_openai_client() .
Call responses.create() to send a user prompt to the agent.
The key part is how you reference the agent — you specify it by name in the extra_body parameter:
Python
Copy
The agent processes the prompt, calls the appropriate Speech MCP tool, and returns the result in output_text . For text-to-speech requests, the output includes a link to the generated audio file in your blob container.
Connect the MCP server in code
Instead of connecting the Azure Speech MCP server through the Foundry portal, you can define the MCP tool connection directly in code when you create an agent. Use the MCPTool class from the azure-ai-projects SDK:
Python
Copy
You then pass the mcp_tool when creating the agent through the SDK. This approach is useful when you want to manage tool connections as part of your application code rather than configuring them manually in the portal.
Next unit: Exercise - Use Azure Speech in an agent
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
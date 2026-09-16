> Source: https://learn.microsoft.com/en-gb/training/modules/develop-speech-agent-speech-mcp/02-understand-speech-mcp

Understand the Azure Speech MCP server - Training | Microsoft Learn
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
Unit 2 of 6
Develop a speech agent with the Azure Speech MCP server
Introduction 2 min: Completed
Understand the Azure Speech MCP server 7 min: Completed
Connect and use the Speech MCP server with an agent 8 min: Completed
Exercise - Use Azure Speech in an agent 30 min: Completed
Knowledge check 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Understand the Azure Speech MCP server
Completed 100 XP
7 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The Azure Speech MCP server connects AI agents to Azure Speech in Foundry Tools through the Model Context Protocol (MCP). Before exploring the Speech MCP server itself, it helps to understand what MCP is and how it enables agents to use external tools.
What is the Model Context Protocol?
The Model Context Protocol (MCP) is an open protocol that defines how AI agents interact with external tools, data sources, and services. MCP uses a client-server architecture with the following components:
Host: The application that runs the agent (such as Microsoft Foundry or a custom app).
Client: A component within the host that manages connections to MCP servers and handles communication.
Server: A program that exposes tools, resources, and prompts that an agent can discover and call.
When an agent connects to an MCP server, it receives a catalog of available tools along with descriptions of what each tool does. The agent can then choose the right tool based on the user's request. This approach is called dynamic tool discovery — the agent doesn't need hardcoded knowledge of each tool. Instead, it queries the MCP server at runtime to find out what's available.
The key advantage of MCP for AI agents is flexibility. Tools can be added, updated, or removed on the server without modifying the agent itself. The agent always has access to the latest tool definitions, which makes MCP-based solutions easier to maintain and scale.
Tip
To learn more about MCP architecture and how to build custom MCP tool integrations, see the Integrate MCP Tools with Azure AI Agents module.
Azure Speech MCP server capabilities
The Azure Speech MCP server exposes two core speech capabilities as tools that any MCP-compatible agent can call:
Expand table
Capability
Description
Speech-to-text (Recognize)
Converts audio files to text using advanced speech recognition. Supports WAV, MP3, OGG, FLAC, MP4, M4A, AAC, and other common audio formats. Includes options for language selection, phrase hints for improved accuracy, profanity filtering, and detailed or simple output formats.
Text-to-speech (Synthesize)
Converts text input into natural-sounding audio files using neural text-to-speech voices. Supports multiple languages and voices (for example, en-US-JennyNeural or en-GB-SoniaNeural ), and generates output in WAV, MP3, or other formats.
When you connect the Speech MCP server to an agent, the agent receives the available speech tools and their descriptions. Based on the user's prompt, the agent decides which tool to call. For example, if a user says "Transcribe this audio file," the agent calls the speech-to-text tool. If the user says "Generate speech from this text," the agent calls the text-to-speech tool.
How the agent selects tools
The tool selection process works as follows:
The user sends a prompt to the agent.
The agent analyzes the prompt and determines which speech task needs to be performed.
The agent checks the available MCP tools and their descriptions to find the best match.
The agent calls the selected tool through the MCP server, passing the relevant input (audio file URL or text).
The MCP server processes the request using Azure Speech and returns the results (transcribed text or a link to an audio file).
The agent presents the results to the user in a natural language response.
The agent handles tool selection autonomously, so you don't need to write routing logic to determine whether a prompt requires speech-to-text or text-to-speech.
Storage requirements
Unlike text-only MCP tools, the Azure Speech MCP server works with audio files, which requires an Azure Storage account.
Text-to-speech: The Speech MCP server saves generated audio files to an Azure Blob Storage container. The agent's response includes a link to the generated audio file.
Speech-to-text: The agent can transcribe audio files from a publicly accessible URL or from an Azure Blob Storage container accessed with a SAS URL.
When you connect the Speech MCP server to your agent, you provide a SAS URL for a blob container. The SAS URL grants the MCP server permission to read and write files in that container.
Important
Treat SAS URLs as secrets. Use the shortest practical expiry time, scope them to a single container, and don't embed them in source code, agent prompts, or chat transcripts.
Prerequisites
To use the Azure Speech MCP server with an agent, you need:
An Azure subscription.
A Foundry resource and project — you need Contributor or Owner role on the resource group. Your Foundry resource includes speech capabilities.
An Azure Storage account with a blob container for storing audio files.
A SAS URL for the blob container with read, write, add, create, and list permissions.
Security considerations
The Azure Speech MCP server uses key-based authentication. When you create the connection, you provide your resource key and a blob container SAS URL. Follow these best practices:
Store keys and SAS URLs in a secure secret store and rotate them regularly.
Avoid embedding keys or SAS URLs directly in source code, scripts, or documentation.
Use the shortest practical SAS expiry time and scope it to the minimum required resource.
Rotate keys immediately if you suspect they're exposed.
Next unit: Connect and use the Speech MCP server with an agent
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
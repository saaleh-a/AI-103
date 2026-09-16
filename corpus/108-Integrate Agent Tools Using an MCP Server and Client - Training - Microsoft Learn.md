> Source: https://learn.microsoft.com/en-gb/training/modules/connect-agent-to-mcp-tools/3-mcp-client-server-setup

Integrate Agent Tools Using an MCP Server and Client - Training | Microsoft Learn
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
Integrate MCP Tools with Azure AI Agents
Learn
Training
Browse
Develop AI agents on Azure
Integrate MCP Tools with Azure AI Agents
Read in English Add to Collections Add to Plans
Unit 3 of 7
Integrate MCP Tools with Azure AI Agents
Introduction 2 min: Completed
Understand MCP tool discovery 5 min: Completed
Integrate agent tools using an MCP server and client 5 min: Completed
Use Azure AI agents with MCP servers 5 min: Completed
Exercise - Connect MCP tools to Azure AI Agents 30 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Integrate agent tools using an MCP server and client
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
To dynamically connect tools to your Azure AI Agent, you first need a functioning Model Context Protocol (MCP) setup. This includes both the MCP server, which hosts your tool catalog, and the MCP client, which fetches those tools and makes them usable by your agent.
What is the MCP Server?
The MCP server acts as a registry for tools your agent can use. You can initialize your MCP server using FastMCP("server-name") . The FastMCP class uses Python type hints and document strings to automatically generate tool definitions, making it easy to create and maintain MCP tools. These definitions are then served over HTTP when requested by the client. Because tool definitions live on the server, you can update or add new tools at any time, without having to modify or redeploy your agent.
What is the MCP Client?
A standard MCP client acts as a bridge between your MCP server and the Azure AI Agent Service. The client initializes an MCP client session and connects to the server. Afterwards, it performs three key tasks:
Discovers available tools from the MCP server using session.list_tools() .
Generates Python function stubs that wrap the tools.
Registers those functions with your agent.
This allows the agent to call any tool listed in the MCP catalog as if it were a native function, all without hardcoded logic.
Register tools with an Azure AI Agent
When an MCP client session is initialized, the client can dynamically pull in tools from the MCP server. An MCP tool can be invoked using session.call_tool(tool_name, tool_args) . The tools should each be wrapped in an async function so that the agent is able to invoke them. Finally, those functions are bundled together and become part of the agent's toolset and are available during runtime for any user request.
Overview of MCP agent tool integration
The MCP server hosts tool definitions decorated with @mcp.tool .
The MCP client initializes an MCP client connection to the server.
The MCP client fetches the available tool definitions with session.list_tools() .
Each tool is wrapped in an async function that invokes session.call_tool
The tool functions are bundled into FunctionTool that makes them usable by the agent.
The FunctionTool is registered to the agent's toolset.
Now your agent is able to access and invoke your tools through natural language interaction. By setting up the MCP server and client, you create a clean separation between tool management and agent logic—enabling your system to adapt quickly as new tools become available.
Next unit: Use Azure AI agents with MCP servers
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
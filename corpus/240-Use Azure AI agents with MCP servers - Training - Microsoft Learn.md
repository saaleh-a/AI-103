> Source: https://learn.microsoft.com/en-gb/training/modules/connect-agent-to-mcp-tools/4-use-azure-ai-agents-with-mcp

Use Azure AI agents with MCP servers - Training | Microsoft Learn
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
Unit 4 of 7
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
Use Azure AI agents with MCP servers
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
You can enhance your Microsoft Foundry agent by connecting it to Model Context Protocol (MCP) servers. MCP servers provide tools and contextual data that your agent can use to perform tasks, extending its capabilities beyond built-in functions. Azure AI Agent Service includes support for remote MCP servers, allowing your agent to quickly connect to your server and access tools.
When you use the Microsoft Foundry Agent Service to connect to your MCP server, you don't need to manually create an MCP client session or add any function tools to your agent. Instead, you create an MCP tool object that connects to your MCP server. Then you add information about the MCP server to the agent thread when invoking a prompt. This also allows you to connect and use different tools from multiple servers depending on your needs.
Integrating remote MCP servers
To connect to an MCP server, you need:
A remote MCP server endpoint (for example, https://api.githubcopilot.com/mcp/).
A Microsoft Foundry agent configured to use the MCP tool.
You can connect to multiple MCP servers by adding them to your agent as separate tools. Each MCPTool can include the following parameters:
server_label : A unique identifier for the MCP server (e.g., GitHub).
server_url : The MCP server's URL.
allowed_tools (optional): A list of specific tools the agent is allowed to access.
require_approval (optional): A boolean that determines whether tool invocations require human approval. If set to true, the agent will pause and wait for approval before invoking any tools on the MCP server.
The MCP tool also supports custom headers, which let you pass:
Authentication keys (API keys, OAuth tokens).
Other required headers for the MCP server.
Invoking tools
When using the Azure MCP Tool object, you don't need to wrap function tools or invoke session.call_tool . Instead, the tools are automatically invoked when necessary during an agent run. To automatically invoke MCP tools:
Create the MCPTool object with the server label and url.
Use update_headers to apply any headers required by the server.
Use the require_approval parameter to determine whether approval is required. Supported values are:
always : A developer needs to provide approval for every call. If you don't provide a value, this one is the default.
never : No approval is required.
Create an agent and add the MCPTool object to its tools list
Invoke a prompt on the agent, you should see the results of any invoked tools in the response.
If the model tries to invoke a tool in your MCP server with approval required, you get an mcp_approval_request in the agent response. This includes information about which tool is being invoked, and you can use this information to decide whether to approve the request. To approve, you send a follow-up message with the mcp_approval_response object, which includes an approval_request_id value and an approve boolean.
MCP integration is a key step toward creating richer, more context-aware AI agents. As the MCP ecosystem grows, you'll have even more opportunities to bring specialized tools into your workflows and deliver smarter, more dynamic solutions.
Next unit: Exercise - Connect MCP tools to Azure AI Agents
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
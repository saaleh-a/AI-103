> Source: https://learn.microsoft.com/en-gb/training/modules/develop-text-analysis-agent-language-mcp/03-connect-use-language-mcp

Connect and use the Language MCP server with an agent - Training | Microsoft Learn
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
Develop a text analysis agent with the Azure Language MCP server
Learn
Training
Browse
Develop natural language solutions in Azure
Develop a text analysis agent with the Azure Language MCP server
Read in English Add to Collections Add to Plans
Unit 3 of 6
Develop a text analysis agent with the Azure Language MCP server
Introduction 2 min: Completed
Understand the Azure Language MCP server 7 min: Completed
Connect and use the Language MCP server with an agent 8 min: Completed
Exercise - Develop a text analysis agent 30 min: Completed
Knowledge check 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Connect and use the Language MCP server with an agent
Completed 100 XP
8 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
After you understand the capabilities of the Azure Language MCP server, the next step is to connect it to an agent and start using it. This involves creating an agent in Microsoft Foundry, connecting the Language MCP tool, testing it in the agent playground, and optionally building a client application to interact with the agent programmatically.
Create a Foundry project and agent
To use the Azure Language MCP server, you first need a Microsoft Foundry project with a deployed model.
In the Microsoft Foundry portal, create a new project (or use an existing one).
Deploy a model (such as gpt-4.1) that your agent will use for reasoning and generating responses.
Create an agent and give it instructions that describe its purpose. For example: Copy
The agent is now ready to receive tool connections.
Connect the Azure Language MCP server
You connect the Azure Language MCP server to your agent through the Tools page in the Foundry portal.
In the navigation pane, select the Tools page.
Select Connect a tool and choose Azure Language in Foundry Tools from the catalog.
Configure the connection with the following settings:
Foundry resource name: The name of your Foundry resource (for example, myproject-resource ).
Authentication: Key-based.
Credential ( Ocp-Apim-Subscription-Key ): The key for your Foundry project.
Wait for the connection to be created, then select Use in an agent and choose your agent. 
The agent now has access to all the text analysis tools exposed by the Azure Language MCP server.
Tip
You can find the project key on the project home page in the Foundry portal.
Update agent instructions
After connecting the Language MCP tool, update the agent's instructions to direct it to use the tool:
Copy
This instruction helps the agent understand that it should use the connected tool when processing text analysis requests.
Test in the agent playground
The agent playground in the Foundry portal provides an interactive environment for testing your agent before deploying it in an application.
When you send a prompt that requires text analysis, the agent:
Identifies the tasks needed (for example, language detection and entity recognition).
Calls the appropriate Azure Language MCP tool(s).
Returns a combined response.
The first time the agent uses an MCP tool, you're prompted to approve the tool usage. You can approve the tool for a single use, or select Always approve all Azure Language in Foundry Tools tools to skip future approval prompts.
After the agent responds, you can review the Logs pane to verify which tools were used. The logs show each MCP tool call, the input that was sent, and the result that was returned.
Build a client application
While the agent playground is useful for testing, you typically want to build a client application that uses the agent programmatically. The Microsoft Foundry SDK supports this through the OpenAI Responses API.
To build a client application, you use the azure-ai-projects and azure-identity packages. The general pattern is:
Create an AIProjectClient using your Foundry project endpoint and DefaultAzureCredential (which uses your Azure CLI credentials in development).
Get an OpenAI client from the project client by calling get_openai_client() .
Call responses.create() to send a user prompt to the agent.
The key part is how you reference the agent — you specify it by name in the extra_body parameter:
Python
Copy
The agent processes the prompt, calls the appropriate MCP tools, and returns the result in output_text . You can also inspect the full response JSON (using response.model_dump_json() ) to see which tools the agent called — for example, extract_named_entities_from_text or detect_language_from_text — along with the arguments and results for each tool call.
Connect the MCP server in code
Instead of connecting the Azure Language MCP server through the Foundry portal, you can also define the MCP tool connection directly in code when you create an agent. Use the MCPTool class from the azure-ai-projects SDK to specify the server label, URL, and allowed tools:
Python
Copy
You then pass the mcp_tool when creating the agent through the SDK. This approach is useful when you want to manage tool connections as part of your application code rather than configuring them manually in the portal. You can also use the allowed_tools property on MCPTool to restrict which specific Language tools the agent can call.
Tool selection with multi-task prompts
When a user's prompt involves multiple text analysis tasks, the agent can call multiple tools in a single turn. For example, the prompt:
"Tell me what entities and dates are mentioned in this review, and whether it is positive or negative."
This prompt requires both entity recognition and sentiment analysis. The agent identifies both tasks, calls the appropriate tools ( extract_named_entities_from_text and detect_language_from_text ), and combines the results into a single response.
Each tool call goes through the MCP server independently, and the agent synthesizes the outputs into a coherent answer for the user.
Next unit: Exercise - Develop a text analysis agent
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
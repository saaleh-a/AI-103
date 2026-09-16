> Source: https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/3-foundry-iq

Explore Foundry IQ - Training | Microsoft Learn
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
Build knowledge-enhanced AI agents with Foundry IQ
Learn
Training
Browse
Develop AI agents on Azure
Build knowledge-enhanced AI agents with Foundry IQ
Read in English Add to Collections Add to Plans
Unit 3 of 8
Build knowledge-enhanced AI agents with Foundry IQ
Introduction 2 min: Completed
Understanding RAG for agents 5 min: Completed
Explore Foundry IQ 8 min: Completed
Configure data sources for knowledge bases 9 min: Completed
Configure retrieval with Foundry IQ 8 min: Completed
Exercise - Integrate an AI agent with Foundry IQ 35 min: Completed
Knowledge check 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Explore Foundry IQ
Completed 100 XP
8 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
You now know how RAG solves the knowledge problem for AI agents. But here's the challenge: building a RAG system from scratch means configuring vector databases, implementing embedding pipelines, tuning retrieval algorithms, and maintaining search infrastructure. What if you need three different AI agents across your organization? You'd build three separate RAG systems.
There's a better approach.
What is Foundry IQ?
Foundry IQ is a managed knowledge platform for AI agents built on Azure AI Search. It provides the retrieval capabilities you learned about in RAG, but as a shared service that multiple agents can use.
Consider a typical scenario. Your organization has product documentation stored in SharePoint, customer policies in Azure Blob Storage, and training materials in OneLake. With traditional RAG, you'd index each data source separately for each agent. With Foundry IQ, you create knowledge bases once and connect any agent to them.
This matters because it shifts your focus from building infrastructure to designing agent experiences. You spend time improving what information your agents access, not how they access it.
How knowledge bases organize information
Knowledge bases in Foundry IQ organize information by business domain rather than technical storage location. This design reflects how people actually think about information.
Instead of agents searching "SharePoint Site A" or "Blob Container B," they search "Product Documentation" or "HR Policies." Each knowledge base brings together related information regardless of where it's stored.
For example, your Product Documentation knowledge base might include:
Technical specifications from SharePoint
API documentation from Azure Blob Storage
Usage analytics from OneLake
Support tickets from your existing search index
To agents, this appears as one unified knowledge source. To you, it means connecting data sources to knowledge bases rather than managing separate retrieval systems.
Connecting data sources
Foundry IQ connects to your existing storage through data source integrations. You point it at your SharePoint sites, Blob containers, or OneLake instances. Foundry IQ handles indexing, embedding generation, and search optimization automatically.
Here's what happens when you add a data source:
Discovery: Foundry IQ scans your storage location for documents
Processing: Documents are chunked and embedded for semantic search
Indexing: Content becomes searchable through the knowledge base
Monitoring: Changes to your documents trigger automatic reindexing
You configure this once per data source. Every agent connected to that knowledge base instantly benefits from updates.
Built-in retrieval intelligence
Remember the retrieval strategies you learned about in RAG? Foundry IQ implements these automatically. When an agent queries a knowledge base, the platform:
Analyzes the question to understand what information the agent needs. A question like "What's our return policy for damaged items?" requires different retrieval than "List all return policies."
Selects retrieval strategies based on the query. Simple factual questions use keyword search. Complex questions combine semantic search with query expansion.
Ranks results using relevance scoring. The most contextually appropriate information surfaces first, reducing the tokens needed for agent responses.
Provides citations so agents can reference source documents. This builds trust and lets users verify information.
This intelligence runs without custom code. You define what knowledge bases contain. Foundry IQ determines how to retrieve from them.
Connecting agents to knowledge
Let's see how simple it is to give an agent access to organizational knowledge. This example creates a support agent that can answer questions using product documentation:
Python
Copy
The agent now retrieves information from the knowledge base just like it would use any other tool. You don't write retrieval logic or manage search infrastructure.
The shared knowledge advantage
The real value of Foundry IQ emerges when you scale beyond one agent. Imagine your organization needs:
A support agent answering customer questions
An employee assistant helping with HR policies
A developer agent explaining API usage
With traditional RAG, you'd build and maintain three retrieval systems. With Foundry IQ, you create knowledge bases that multiple agents share:
The Product Documentation knowledge base serves both the support agent and developer agent
The HR Policies knowledge base serves only the employee assistant
Each agent accesses exactly the knowledge it needs
When you improve a knowledge base by adding data sources or refining content, every connected agent benefits immediately. This is how organizations build consistent, scalable AI agent systems.
Note
Foundry IQ uses the Model Context Protocol (MCP) to connect agents to knowledge bases. MCP provides a standardized way for AI agents to access external tools and data sources securely.
Next unit: Configure data sources for knowledge bases
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
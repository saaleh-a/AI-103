> Source: https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/05-file-search

Use the file_search tool - Training | Microsoft Learn
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
Develop generative AI apps that use tools
Learn
Training
Browse
Develop generative AI apps in Azure
Develop generative AI apps that use tools
Read in English Add to Collections Add to Plans
Unit 5 of 9
Develop generative AI apps that use tools
Introduction 1 min: Completed
What are tools? 5 min: Completed
Use the code_interpreter tool 5 min: Completed
Use the web_search tool 5 min: Completed
Use the file_search tool 5 min: Completed
Use the function tool 5 min: Completed
Exercise - Create a generative AI chat app that uses tools 30 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Use the file_search tool
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The file_search tool lets your model retrieve relevant information from your own uploaded documents during a response.
What is the file_search tool?
The file_search tool helps a model answer questions using private or domain-specific files, such as policy documents, manuals, contracts, and internal knowledge bases. Instead of relying only on general training data, the model can search indexed file content and return grounded answers.
This is especially useful when you need accurate responses from trusted internal documents.
Key features include:
Document-grounded answers - Responses are based on your uploaded files
Semantic retrieval - Finds relevant passages by meaning, not only exact keyword matches
Vector store integration - Search across one or more indexed document collections
Citations and transparency - Include matched results for debugging and traceability
Better enterprise relevance - Use organization-specific knowledge in model outputs
Common use cases
Expand table
A simple example
Here's an example using the OpenAI Responses API with file_search enabled:
Python
Copy
In this flow, the model searches the indexed policy file and uses the retrieved passages to produce a grounded answer.
How the file_search tool works
The general process for using the file_search tool is:
You prepare files - Upload documents to a vector store.
You send a request - Include file_search in the tools array with vector store IDs.
Model performs retrieval - It searches indexed chunks for relevant content.
Results are injected - Matching passages are provided to the model.
Response is generated - The model answers using retrieved document context.
Best practices
Use high-quality source files - Clean, current documents improve retrieval accuracy
Write focused prompts - Ask specific questions to reduce ambiguous matches
Scope vector stores carefully - Separate domains (HR, legal, finance) when helpful
Include retrieval results in development - Use response includes for troubleshooting
Review answers for critical workflows - Keep human validation in high-stakes scenarios
Limitations to know about
Answer quality depends on document quality, coverage, and chunk relevance
Very large or mixed-domain stores can return less focused context
Updated source files may require re-indexing before new content is searchable
Retrieval improves grounding but doesn't replace human review for sensitive decisions
Used well, file_search turns a general-purpose model into a domain-aware assistant that can answer from the documents your team actually uses.
Note
The file_search tool is a great way to ground a model in a specific set of documents or data files. However, for enterprise-scale agents that need to access large quantities of data in multiple data stores, you should consider using the Foundry IQ knowledge store solution with a Microsoft Foundry agent. To learn more, see Build knowledge-enhanced AI agents with Foundry IQ
Next unit: Use the function tool
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
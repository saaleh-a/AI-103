> Source: https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/2-provision-resource

Azure Language in Microsoft Foundry Tools - Training | Microsoft Learn
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
Analyze text with Azure Language in Foundry Tools
Learn
Training
Browse
Develop natural language solutions in Azure
Analyze text with Azure Language in Foundry Tools
Read in English Add to Collections Add to Plans
Unit 2 of 8
Analyze text with Azure Language in Foundry Tools
Introduction 1 min: Completed
Azure Language in Microsoft Foundry Tools 3 min: Completed
Detect language 3 min: Completed
Extract entities 3 min: Completed
Extract personally identifiable information (PII) 3 min: Completed
Exercise - Analyze text 30 min: Completed
Module assessment 2 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Azure Language in Microsoft Foundry Tools
Completed 100 XP
3 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Azure Language in Foundry Tools is designed to help you extract information from text. It provides functionality that you can use for tasks like:
Language detection - determining the language in which text is written.
Named entity recognition - detecting references to entities, including people, locations, time periods, organizations, and more.
Personally Identifiable Information (PII) extraction - identifying and redacting personal details in text.
Note
Azure Language also provides functionality for sentiment analysis, summarization, key phrase extraction, and other common language-related tasks. These deprecated capabilities are provided to support existing applications.
Using a Microsoft Foundry resource for text analysis
To use Azure Language in Foundry Tools to analyze text, you must provision a Microsoft Foundry resource in your Azure subscription.
After you have provisioned a Foundry resource in your Azure subscription, you can use its endpoint to call the Azure Language APIs from your code, authenticating requests by either providing the key associated with your resource or by using a Microsoft Entra ID identity. You can call the Azure Language APIs by submitting requests in JSON format to the REST interface, or by using any of the available programming language-specific SDKs.
Note
The code examples in this module are based in Python, using the Python SDK for Azure Language in Foundry Tools. SDKs for other common languages (such as Microsoft C#, JavaScript, and others) follow a similar pattern.
Authentication
To authenticate using key-based authentication, use the key associated with your Foundry resource - you can find this information in the Foundry portal.
Tip
The default home page in the Foundry portal shows the endpoint and key for your project. To view the key and endpoint for your resource, you can view the parent resource for your project in the Admin tab of the Operate page of the portal. The project and foundry resource keys are the same, and the project endpoint is the resource endpoint with /api/projects/{project_name} appended - so if the project endpoint is https://my-ai-app-foundry.services.ai.azure.com/api/projects/my-ai-app , then the resource endpoint is https://my-ai-app-foundry.services.ai.azure.com .
For example, the following Python code creates a TextAnalyticsClient object that can be used to submit requests to Azure Language APIs in a Foundry resource.
Python
Copy
For greater security in production solutions, Microsoft recommends using Microsoft Entra ID authentication. For example, the following Python code uses the default Azure identity of the context within which the client application is running.
Python
Copy
Next unit: Detect language
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
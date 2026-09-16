> Source: https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai-api/02-prepare-content-understanding

Prepare to use the AI Content Understanding API - Training | Microsoft Learn
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
Extract insights from visual data on Azure
Create an Azure Content Understanding client application
Learn
Training
Browse
Extract insights from visual data on Azure
Create an Azure Content Understanding client application
Read in English Add to Collections Add to Plans
Unit 2 of 7
Create an Azure Content Understanding client application
Introduction 1 min: Completed
Prepare to use the AI Content Understanding API 5 min: Completed
Create a Content Understanding analyzer 5 min: Completed
Analyze content 5 min: Completed
Exercise - Develop a Content Understanding client application 40 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Prepare to use the AI Content Understanding API
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Before you can use the Azure Content Understanding API, you need a Microsoft Foundry resource in your Azure subscription. You can provision this resource in the following ways:
Create a Microsoft Foundry resource in the Azure portal.
Create a Microsoft Foundry project, which includes a Microsoft Foundry resource by default.
Tip
Creating a Microsoft Foundry project enables you to use visual tools to create and manage Azure Content Understanding schemas and analyzers.
After you've provisioned a Microsoft Foundry resource, you need the following information to connect to the Azure Content Understanding API from a client application:
The Microsoft Foundry resource endpoint
One of the API keys associated with the endpoint.
You can obtain these values from the Azure portal, as shown in the following image: 
If you're working within a Microsoft Foundry project, you can find the endpoint and key for the associated Foundry resource in the Foundry portal project home page.
When working in a Microsoft Foundry project, you can also write code that uses the Microsoft Foundry SDK to connect to the project using Microsoft Entra ID authentication, and retrieve the connection details for the Microsoft Foundry resource.
Installing the Python SDK
To use the Python SDK for Content Understanding, install the azure-ai-contentunderstanding package:
Bash
Copy
Note
The Python SDK requires Python 3.9 or later. You can also use the REST API directly from any language that supports HTTP requests.
Important
Before using the Content Understanding API, you must set up default model deployments for your Microsoft Foundry resource. Content Understanding requires GPT-4.1 , GPT-4.1-mini , and text-embedding-3-large model deployments. You can configure these in the Azure portal or by using the API. For more information, see Set up model deployments.
Tip
To learn more about programming with the Microsoft Foundry SDK, complete the Develop an AI app with the Microsoft Foundry SDK module.
Next unit: Create a Content Understanding analyzer
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
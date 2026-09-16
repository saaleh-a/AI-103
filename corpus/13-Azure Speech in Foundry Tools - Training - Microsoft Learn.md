> Source: https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/2-create-speech-service

Azure Speech in Foundry Tools - Training | Microsoft Learn
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
Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools
Learn
Training
Browse
Develop natural language solutions in Azure
Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools
Read in English Add to Collections Add to Plans
Unit 2 of 9
Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools
Introduction 2 min: Completed
Azure Speech in Foundry Tools 2 min: Completed
Use the Speech to Text API 5 min: Completed
Use the Text to Speech API 4 min: Completed
Configure audio format and voices 3 min: Completed
Use Speech Synthesis Markup Language 3 min: Completed
Exercise - Create a speech-enabled app 30 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Azure Speech in Foundry Tools
Completed 100 XP
2 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Azure Speech in Foundry Tools is a set of speech-related capabilities that are provided by a Foundry resource. You can use these capabilities to add speech support to apps and agents built in Microsoft Foundry projects. For example:
Creating an application to transcribe recorded calls or meetings.
Creating an AI assistant that can read text messages or emails aloud. 
Using Azure Speech in a Microsoft Foundry resource
To use Azure Speech in Foundry Tools, you must provision a Microsoft Foundry resource in your Azure subscription.
After you have provisioned a Foundry resource in your Azure subscription, you can use its endpoint to call the Azure Language APIs from your code, authenticating requests by providing the key associated with your resource. You can call the Azure Language APIs by submitting requests in JSON format to the REST interface, or by using any of the available programming language-specific SDKs.
Note
The code examples in this module are based in Python, using the Python SDK for Azure Speech in Foundry Tools. SDKs for other common languages (such as Microsoft C#, JavaScript, and others) follow a similar pattern.
Creating a SpeechConfig
The initial object you need to create to provide access to the Azure Speech in Foundry Tools endpoint is a SpeechConfig object; which encapsulates the connection details for the service in your Foundry resource.
Tip
The default home page in the Foundry portal shows the endpoint and key for your project. To view the key and endpoint for your resource, you can view the parent resource for your project in the Admin tab of the Operate page of the portal. The project and foundry resource keys are the same, and the project endpoint is the resource endpoint with /api/projects/{project_name} appended - so if the project endpoint is https://my-ai-app-foundry.services.ai.azure.com/api/projects/my-ai-app , then the resource endpoint is https://my-ai-app-foundry.services.ai.azure.com .
For example, the following Python code creates a SpeechConfig object that can be used to submit requests to Azure Speech APIs in a Foundry resource.
Python
Copy
Note
Releases of the Python SDK prior to 1.48.2 required that you specify the region where your resource is deployed instead of the endpoint. With the latest release, you can use either the Foundry resource endpoint or the region.
Next unit: Use the Speech to Text API
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
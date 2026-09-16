> Source: https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai-api/04-analyze

Analyze content - Training | Microsoft Learn
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
Unit 4 of 7
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
Analyze content
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
To analyze the contents of a file, you can use the Azure Content Understanding API to submit it to the endpoint. You can specify the content as a URL (for a file hosted in an Internet-accessible location) or upload binary file data directly (for example, a .pdf document, a .png image, an .mp3 audio file, or an .mp4 video file). The analysis request includes the analyzer to be used.
Analysis is an asynchronous operation. After submitting the request, you receive an operation ID that you can use to check the status and retrieve the results when the operation is complete.
For example, suppose you want to use the business card analyzer discussed previously to extract the name and email address from the following scanned business card image: 
Using the Python SDK
The Python SDK for Content Understanding ( azure-ai-contentunderstanding ) provides a ContentUnderstandingClient class that simplifies interaction with the service. The SDK handles authentication, request formatting, and automatic polling for asynchronous operations.
The following Python code uses the SDK to submit a business card for analysis and retrieve the results:
Python
Copy
Tip
The SDK's begin_analyze method returns a poller object. Calling .result() on the poller automatically handles polling until the operation completes, so you don't need to write your own polling loop.
Using the REST API
You can also submit analysis requests directly by using the REST API. Your client application submits HTTP calls to the Content Understanding endpoint for your Microsoft Foundry resource, passing an API key in the header.
The following Python code submits a request for analysis using a URL, and then polls the service until the operation is complete and the results are returned.
Python
Copy
Note
You can specify a URL for the content file location as shown here. To submit binary file data directly, use the analyzeBinary operation instead.
Processing analysis results
The results depend on:
The kind of content the analyzer is designed to analyze (for example, document, video, image, or audio).
The schema for the analyzer.
The contents of the file that was analyzed.
For example, the response from the document-based business card analyzer when analyzing the business card described previously contain:
The extracted fields
The optical character recognition (OCR) layout of the document, including locations of lines of text, individual words, and paragraphs on each page.
Using the Python SDK
When using the SDK, the AnalysisResult object provides typed access to the results. The contents property contains a list of content objects, each with fields, markdown, and metadata. The following code shows how to extract string field values:
Python
Copy
Using the REST API
When using the REST API, the response is a JSON payload that your application must parse. Here's the complete JSON response for the business card analysis:
JSON
Copy
Your application must typically parse the JSON to retrieve field values. For example, the following Python code extracts all of the string values:
Python
Copy
The output from this code is shown here:
Copy
Next unit: Exercise - Develop a Content Understanding client application
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
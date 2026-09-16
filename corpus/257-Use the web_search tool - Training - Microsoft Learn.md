> Source: https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/04-web-search

Use the web_search tool - Training | Microsoft Learn
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
Unit 4 of 9
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
Use the web_search tool
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The web_search tool enables your model to retrieve fresh information from the web while generating a response.
What is the web_search tool?
The web_search tool gives a generative AI model access to current, external information at runtime. Instead of relying only on training data, the model can issue a search query, review relevant sources, and produce an answer grounded in up-to-date content.
This is especially useful when facts may change frequently, such as pricing, product releases, policy updates, or current events.
Key features include:
Live information retrieval - Get recent information not available in static model training data
Source-grounded responses - Build answers from retrieved web content
Reduced hallucination risk - Improve reliability by checking external sources
Automatic query generation - The model decides when and how to search based on user intent
Seamless user experience - Search and response generation happen in one flow
Common use cases
Expand table
A simple example
Here's a minimal example using the OpenAI Responses API with web search enabled:
Python
Copy
The output will vary based on current web results, but it should include a concise answer grounded in recent sources.
How the web_search tool works
The general process for using the web_search tool is:
You send a request - Include a web search tool in the tools array.
Model evaluates the question - It decides whether fresh web data is needed.
Search is performed - The model issues one or more search queries.
Results are reviewed - Relevant pages are selected and summarized.
Response is generated - The model combines search findings into the final answer.
Best practices
Ask time-aware questions clearly - Include words like "latest", "current", or date ranges when needed
Set expectations for sources - Prompt for reputable or official sources when accuracy matters
Request concise outputs - Ask for short summaries with key points to reduce noise
Verify critical facts - For high-stakes scenarios, independently validate important claims
Track usage and latency - Web retrieval can increase response time and token usage
Limitations to know about
Results depend on what is publicly available and indexable at query time
Source quality can vary, so output may still require human review
Retrieved content may change over time, so repeated runs can produce different answers
Some environments may apply regional, policy, or network restrictions to web access
Used well, web_search helps your model move from static knowledge to timely, source-aware answers that are more useful in real-world workflows.
Next unit: Use the file_search tool
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
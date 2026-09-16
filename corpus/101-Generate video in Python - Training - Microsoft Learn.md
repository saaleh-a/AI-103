> Source: https://learn.microsoft.com/en-gb/training/modules/generate-video-with-foundry/4-generate-video-in-python

Generate video in Python - Training | Microsoft Learn
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
Generate videos with Microsoft Foundry
Learn
Training
Browse
Generate videos with Microsoft Foundry
Read in English Add to Collections Add to Plans
Unit 4 of 7
Generate videos with Microsoft Foundry
Introduction 1 min: Completed
Deploy a video generating model 3 min: Completed
Generate video from a prompt 5 min: Completed
Generate video in Python 5 min: Completed
Exercise - Generate video with Sora 2 in Microsoft Foundry 30 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Generate video in Python
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
To build applications that generate videos programmatically, you can use the OpenAI Python SDK with your Sora 2 deployment in Microsoft Foundry. Video generation is an asynchronous process—you submit a job, poll for status, and download the result when it's ready.
Generate a video
Video generation follows a three-step pattern: create the job, poll for completion, and download the result.
Python
Copy
Generate video from a reference image
To use an image as a starting frame, pass it to the input_reference parameter. The image resolution must match the target video size:
Python
Copy
Note
Reference images containing human faces are currently rejected. Use images of landscapes, objects, or animated characters instead.
Remix an existing video
To modify an existing video while preserving its structure, use the remix method with the original video's ID:
Python
Copy
Handle job states
Video jobs can return these status values:
Expand table
When a job fails, check video.error for details about what went wrong.
Key considerations
Rate limits: You can run up to two video creation jobs simultaneously
Job expiration: Completed videos are available for download for 24 hours
Resolution requirements: Reference images must match the target video resolution exactly
Content filtering: Prompts are subject to content moderation; harmful content won't generate
In the exercise that follows, you'll apply these techniques to build a complete video generation application.
Next unit: Exercise - Generate video with Sora 2 in Microsoft Foundry
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
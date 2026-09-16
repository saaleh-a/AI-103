> Source: https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/3b-voice-live-agent

Create a Voice Live agent - Training | Microsoft Learn
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
Develop an Azure Speech Voice Live Agent in Microsoft Foundry
Learn
Training
Browse
Develop natural language solutions in Azure
Develop an Azure Speech Voice Live Agent in Microsoft Foundry
Read in English Add to Collections Add to Plans
Unit 4 of 7
Develop an Azure Speech Voice Live Agent in Microsoft Foundry
Introduction 1 min: Completed
Explore the Azure Voice Live API 5 min: Completed
Explore the AI Voice Live client library for Python 5 min: Completed
Create a Voice Live agent 5 min: Completed
Exercise - Develop a Voice Live agent 30 min: Completed
Module assessment 5 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Create a Voice Live agent
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
You can create and run an application to use Voice Live with a Microsoft Foundry agent. Using agents with Voice Live brings the following advantages over connecting directly to a model:
Agents encapsulate instructions and configuration within the agent itself, rather than specifying instructions in the session code.
Agents support complex logic and behaviors, making it easier to manage and update conversational flows without changing the client code.
The agent approach streamlines integration. The agent ID is used to connect and all necessary settings are handled internally, reducing the need for manual configuration in the code.
Separating agent logic from voice implementation supports better maintainability and scalability for scenarios where multiple conversational experiences or business logic variations are needed.
Create a voice agent in the agent playground
As you develop an agent in the Microsoft Foundry portal, you can enable voice mode to easily integrate Voice Live into your agent, and test it in the playground. 
After enabling voice mode, you can use the Configuration pane to enable Voice Live settings, including:
Language: The language spoken and understood by the agent.
Advanced settings:
Voice activity detection (VAD) settings to detect interruptions and end of speech.
Audio enhancement to mitigate background noise and audio quality.
Voice: The specific voice used by the agent, and advanced voice settings to control the tone and speaking rate.
Interim response: The agent can automatically generate speech while waiting for a model's response.
Avatar: Inclusion of a visual avatar to represent the agent.
Create a voice agent using code
If you prefer to create your agent using code, you can use the appropriate Foundry Agent SDK (for example the Foundry SDK for Python) to create the agent, and add Voice Live metadata to its definition.
Python
Copy
Use your agent in a client application
To use your agent, you need to build a client application that:
Connects to the agent
Configures audio hardware input and output
Establishes a Voice live session
Monitors audio systems for activity
Processes events (such as user speech input and responses from the agent)
While you can implement these tasks using any of the functionality available in the APIs, the recommended pattern for Voice Live client applications is to:
Use Microsoft Entra ID authentication to connect to the agent in a Microsoft Foundry project.
Implement a custom VoiceAssistant class that encapsulates strongly typed agent configuration, defines functions to configure and start the Voice live session, and processes voice events.
Implement a custom AudioProcessor class that encapsulates input and output through audio devices.
The following example shows a minimal implementation of this pattern in Python (using the PyAudio library for audio input and output).
Python
Copy
Next unit: Exercise - Develop a Voice Live agent
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
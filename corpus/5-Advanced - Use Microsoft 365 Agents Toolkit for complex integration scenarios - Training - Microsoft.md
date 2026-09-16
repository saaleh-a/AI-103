> Source: https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/4-agents-toolkit-advanced

Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training | Microsoft Learn
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
Integrate your agent with Microsoft 365
Learn
Training
Browse
Develop AI agents on Azure
Integrate your agent with Microsoft 365
Read in English Add to Collections Add to Plans
Unit 4 of 9
Integrate your agent with Microsoft 365
Introduction 3 min: Completed
Understand Foundry agent publishing options 6 min: Completed
Publish an agent from Foundry portal to Teams 10 min: Completed
Advanced - Use Microsoft 365 Agents Toolkit 6 min: Completed
Access Microsoft 365 data with Work IQ 8 min: Completed
Test and iterate your integrated agent 6 min: Completed
Exercise - Publish a Foundry agent to Teams 30 min: Completed
Knowledge check 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Advanced - Use Microsoft 365 Agents Toolkit
Completed 100 XP
6 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
For most scenarios, publishing directly from the Foundry portal is the simplest path to get your agents into Microsoft Teams and Microsoft 365 Copilot. However, some complex enterprise scenarios require additional control over the integration layer. The Microsoft 365 Agents Toolkit provides an alternative approach for these situations.
This unit covers the Agents Toolkit from a high level perspective. Follow the links to documentation at the end for a deeper explanation.
Note
This unit covers an advanced topic. If you're getting started with Foundry agent integration, you can skip this unit and return later if you encounter scenarios that require the Agents Toolkit approach.
When to consider the Agents Toolkit
The Microsoft 365 Agents Toolkit is a suite of development tools available as extensions for Visual Studio Code and Visual Studio. Consider using it when your agent requires custom single sign-on (SSO) configuration beyond the default Entra ID setup, or when you need to add middleware logic for custom processing, logging, or transformation between Teams and your Foundry agent.
The toolkit is also valuable for organizations that require multi-environment deployment with separate development, staging, and production configurations. It provides advanced debugging capabilities with detailed tracing beyond what the Foundry portal offers, and integrates with CI/CD pipelines through GitHub Actions or Azure DevOps.
How the Agents Toolkit approach works
Instead of publishing directly from Foundry, you create a proxy application using the Agents Toolkit that sits between Microsoft 365 and your Foundry agent:
Copy
This proxy application receives messages from Teams or Copilot through Azure Bot Service, processes them through any custom middleware you've configured, forwards the request to your Foundry agent, and returns the response through the same path. The proxy approach gives you control over every step of the message flow, but adds complexity to your deployment.
Getting started with the Agents Toolkit
If you determine the Agents Toolkit is right for your scenario, here's an overview of the setup process.
Start by installing the Microsoft 365 Agents Toolkit extension from the Visual Studio Code marketplace. Once installed, open the extension panel and select Create a New Agent/App, then choose Custom Engine Agent as the project type. The wizard guides you through configuration options including your AI model source.
The project template creates scaffolding for a standalone agent. To connect to an existing Foundry agent, configure the project to call your Foundry agent's endpoint, set up authentication using the agent's credentials, and implement any middleware logic you need.
The Agents Toolkit includes the Microsoft 365 Agents Playground, a local testing environment that simulates Teams. Run your project in debug mode to open the playground in your browser, where you can send test messages to verify the connection works correctly. Once testing is complete, use the toolkit to provision Azure resources, deploy your proxy application, and register it in Teams.
Comparison summary
Expand table
Learn more
For detailed guidance on the Agents Toolkit, see:
Microsoft 365 Agents Toolkit documentation
Create custom engine agents with the Agents Toolkit
Microsoft 365 Agents SDK overview
The direct publishing approach covered in the previous unit handles the majority of integration scenarios. Reserve the Agents Toolkit for situations where you've identified specific requirements it addresses.
Next unit: Access Microsoft 365 data with Work IQ
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
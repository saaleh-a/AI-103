> Source: https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/6-test-iterate-agent

Test and iterate your integrated agent - Training | Microsoft Learn
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
Unit 6 of 9
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
Test and iterate your integrated agent
Completed 100 XP
6 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
After publishing your agent using the steps in the previous units, ongoing testing and monitoring help ensure your agent performs reliably for users. This unit focuses on post-deployment testing strategies, troubleshooting common issues, and monitoring your agent over time.
Testing beyond the Foundry playground
The Foundry playground is valuable for development testing, but it doesn't simulate the full published experience. After publishing, test your agent in Microsoft Teams to verify:
The Teams user interface renders responses correctly
Authentication flows work as expected
Response times are acceptable in production
The published agent identity has necessary permissions
Testing with multiple users
Have colleagues test your agent to discover issues you might miss. Different users phrase questions differently, and fresh perspectives identify confusing responses. Testing across different Teams clients (desktop, web, mobile) can also reveal platform-specific issues.
Common troubleshooting scenarios
When issues arise, these common scenarios and resolutions can help:
Agent doesn't respond in Teams
Possible causes:
Azure Bot Service isn't running
Bot Service configuration is incorrect
Network issues between Teams and your agent
Resolution:
Verify the Bot Service resource exists in the Azure portal.
Check Bot Service logs for errors.
Confirm the agent is published and the package was uploaded correctly.
Tools work in Foundry but fail in Teams
Possible cause: The published agent identity doesn't have the required permissions.
Resolution:
Find the published agent's identity in the Foundry portal.
In the Azure portal, locate the resources your tools access.
Assign appropriate RBAC roles to the published agent identity.
Users can't find the agent
Possible causes:
Wrong publish scope selected
Admin approval pending (for organization scope)
Tenant policies block custom apps
Resolution:
For shared scope: Share the direct link with users.
For organization scope: Verify admin approval in the Microsoft 365 admin center.
Check tenant settings for custom app permissions.
Slow response times
Possible causes:
Complex agent instructions requiring extended processing
Tools that query large data sets
Network latency
Resolution:
Simplify agent instructions where possible.
Optimize tool configurations.
Test from different network locations to isolate network issues.
Monitoring published agents
After deployment, ongoing monitoring helps identify issues before users report them:
Check Foundry metrics
The Foundry portal provides metrics for published agents:
Request volume and patterns
Response times
Error rates
Tool invocation statistics
Review these metrics regularly to spot trends that indicate problems.
Review Application Insights
If you've configured Application Insights integration, you can:
Trace individual conversations
Analyze error patterns
Measure end-to-end latency
Set up alerts for anomalies
Gather user feedback
Establish channels for users to report issues:
Create a Teams channel or email address for agent feedback
Periodically review feedback to identify common problems
Use feedback to prioritize agent improvements
Iterating on your agent
When testing reveals issues or you receive user feedback, update your agent in the Foundry portal and republish following the same process covered in the publishing unit. For organization scope deployments, check your tenant's policies to determine if updates require re-approval.
Tip
Keep a testing checklist specific to your agent. Document the key scenarios you test before each release to ensure consistent quality.
Next unit: Exercise - Publish a Foundry agent to Teams
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
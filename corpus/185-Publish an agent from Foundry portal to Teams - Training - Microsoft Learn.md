> Source: https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/3-publish-agent-foundry-portal

Publish an agent from Foundry portal to Teams - Training | Microsoft Learn
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
Unit 3 of 9
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
Publish an agent from Foundry portal to Teams
Completed 100 XP
10 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Publishing an agent from the Microsoft Foundry portal to Microsoft Teams and Microsoft 365 Copilot is a straightforward process. The portal guides you through creating an agent application, provisioning the required Azure resources, and generating a publishing package for distribution.
Before you begin
Before starting the publishing process, complete these preparation steps:
Test your agent thoroughly
Use the Foundry playground to verify your agent behaves as expected. Test various user inputs, confirm any configured tools work correctly, and check that responses are appropriate for your use case. Issues are easier to fix before publishing than after.
Verify your permissions
Confirm you have the required role assignments:
Azure AI Project Manager role on your Foundry project to publish agents
Azure AI User role to invoke or chat with published agents
Permissions to create resources in your Azure subscription
Permissions to register applications in Microsoft Entra ID
Register the Bot Service provider
The publishing process creates an Azure Bot Service resource. Ensure the Microsoft.BotService provider is registered in your Azure subscription. You can check this in the Azure portal under your subscription's Resource providers section.
Prepare metadata
Gather the following information before starting:
A display name for your agent (appears in the Teams agent store)
A brief description of what your agent does
Small (32x32 pixels) and large (192x192 pixels) icons in PNG format
Your organization's name and contact details
URLs for your privacy policy and terms of use
Warning
Don't include secrets, API keys, or sensitive information in any metadata fields. These fields are visible to users who discover your agent.
Publish your agent
Follow these steps to publish your agent from the Foundry portal:
Step 1: Select your agent version
Open the Microsoft Foundry portal and navigate to your project.
Select the agent you want to publish from your agent list.
Review the agent configuration to confirm it's ready for publishing.
Step 2: Start the publishing process
Select Publish to open the publishing dialog.
Select Publish again, then choose Publish to Teams and Microsoft 365 Copilot.
The Microsoft 365 publishing configuration window opens.
Step 3: Configure Azure Bot Service
The portal automatically generates an application ID and tenant ID. Note these values for troubleshooting.
In the Azure Bot Service dropdown, select Create an Azure Bot Service to provision a new bot resource.
Wait for the portal to create the Bot Service resource in your subscription.
Step 4: Complete the metadata
Fill in the required fields:
Expand table
Step 5: Choose your publish scope
Select the distribution scope for your agent:
Shared scope: Agent appears under "Your agents" in the store. Available immediately. Best for testing and small teams.
Organization scope: Agent appears under "Built by your org" in the store. Requires admin approval. Best for production deployments.
Step 6: Prepare and optionally download the package
Select Prepare Agent to start packaging your agent.
Wait for the packaging process to complete (typically 1-2 minutes).
When ready, you can either:
Download the package to test locally before distribution
Continue the in-product publishing flow for direct distribution
Test the publishing package in Teams
If you downloaded the package, test it in Teams before broad distribution:
Open Microsoft Teams.
Navigate to Apps > Manage your apps > Upload an app.
Select Upload a custom app and choose the downloaded .zip file.
Teams installs the app and shows it in your apps list.
Open the agent and send a test message.
Verify the following:
[ ] The agent responds to messages
[ ] Response content is accurate and appropriate
[ ] Response times are acceptable
[ ] Any configured tools work correctly
Request admin approval for organization scope
If you published with organization scope, an administrator must approve your agent before it's available organization-wide:
Direct your Microsoft 365 administrator to the Microsoft 365 admin center.
Navigate to Agents > All > Requested.
Find your agent in the list of pending requests.
The administrator selects Approve request and activate.
Once approved, the agent appears in the Built by your org section of the Teams agent store for all users in your tenant. App policies in your organization control which users can access the agent.
Reassign permissions after publishing
When you publish an agent, the system creates a distinct agent identity. If your agent uses tools that access Azure resources, you need to grant permissions to this new identity:
In the Foundry portal, go to your published agent and note the agent application's identity information.
In the Azure portal, navigate to the resources your agent accesses (for example, Azure AI Search, storage accounts, or Cosmos DB).
Assign the appropriate RBAC roles to the published agent identity.
Without this step, tools that worked during development might fail after publishing because the new agent identity lacks the required permissions.
Update a published agent
When you make changes to your agent in Foundry, you need to republish to update the version available in Teams:
Make your changes in the Foundry portal.
Test the changes in the Foundry playground.
Repeat the publishing process to create a new package.
For shared scope, upload the new package to Teams.
For organization scope, the update might require re-approval depending on your organization's policies.
Users interacting with your agent receive the updated version once the new package is deployed.
Next unit: Advanced - Use Microsoft 365 Agents Toolkit
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
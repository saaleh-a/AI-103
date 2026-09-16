> Source: https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/6-configure-manage-agents

Configure and Manage Agents in Visual Studio Code - Training | Microsoft Learn
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
Develop AI agents with Microsoft Foundry and Visual Studio Code
Learn
Training
Browse
Develop AI agents on Azure
Develop AI agents with Microsoft Foundry and Visual Studio Code
Read in English Add to Collections Add to Plans
Unit 6 of 11
Develop AI agents with Microsoft Foundry and Visual Studio Code
Introduction 3 min: Completed
Understand AI agents and Microsoft Foundry Agent Service 8 min: Completed
Explore development approaches 7 min: Completed
Build your first agent in Microsoft Foundry 8 min: Completed
Set up Visual Studio Code for agent development 7 min: Completed
Configure and manage agents in Visual Studio Code 9 min: Completed
Extend agent capabilities with tools 9 min: Completed
Test, deploy, and integrate agents 9 min: Completed
Exercise - Build and deploy an AI agent 30 min: Completed
Knowledge check 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Configure and manage agents in Visual Studio Code
Completed 100 XP
9 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Once you have a declarative agent (created in the Foundry portal or through the SDK), the real work begins — configuring its behavior, instructions, and properties to match your requirements. The Microsoft Foundry VS Code extension provides comprehensive configuration options through both the visual Agent Designer and direct YAML file editing, giving you flexibility in how you work.
Note
The configuration workflow described in this unit applies to declarative prompt-based agents. Hosted agents are configured through code, and workflow agents use a different YAML schema for multi-agent orchestration.
Configuring agent properties
The Agent Designer provides an intuitive interface for setting up your agent's core properties. These settings define fundamental aspects of how your agent behaves and performs.
Essential configuration options
In the Agent Designer, you configure several key properties:
Agent name - Enter a descriptive name that clearly identifies your agent's purpose. This name appears in lists, logs, and when other developers work with your agents.
Model selection - Choose your model deployment from the dropdown. This selection determines which AI model powers your agent's responses. The dropdown shows only models you've already deployed in your project.
Description - Add a clear, concise description of what your agent does. Good descriptions help team members understand the agent's purpose without reading its instructions or code.
System instructions - Define the agent's behavior, personality, and response style. This is where you shape how your agent understands its role and interacts with users.
Agent ID - Automatically generated by the extension when you create the agent. This unique identifier is used when calling your agent through APIs.
Model configuration options
Beyond selecting a model, you can fine-tune its behavior through additional parameters:
Temperature - Controls response creativity and randomness. Lower values (0.1-0.3) produce consistent, focused outputs. Higher values (0.7-1.0) generate more creative, varied responses. For business agents handling structured tasks, values between 0.3 and 0.7 typically work well.
Top P - Controls diversity by limiting vocabulary choices during generation. Most scenarios work well with the default value of 1.0, but you can lower it for more constrained, predictable outputs.
These settings appear in both the Designer interface and the YAML file, remaining synchronized across both views.
Understanding the agent YAML structure
The YAML file contains all your declarative agent's configuration in a structured, readable format. Understanding this structure helps you make precise changes and work efficiently when the visual interface isn't the best fit.
Complete YAML example
Here's a fully configured agent YAML file:
YAML
Copy
The YAML structure divides naturally into sections: metadata, model configuration, instructions, and tools. This organization makes it easy to locate and modify specific settings.
Benefits of YAML configuration
Direct YAML editing provides several advantages:
Version control - Track changes in Git alongside your application code
Bulk updates - Make multiple changes simultaneously with confidence
Templates - Create reusable agent templates for consistent configurations
Code review - Include agent configurations in your standard code review processes
Automation - Build scripts that generate or modify agent configurations programmatically
The extension validates YAML syntax in real-time, highlighting errors and providing suggestions as you type.
Best practices for agent configuration
As you build more complex agents, these practices help maintain quality and reliability:
Version control your YAML files - Commit agent configurations to Git alongside your application code. This enables rollback, code review, and change tracking.
Use descriptive names and tags - Clear naming and tagging make it easy to find and identify agents as your collection grows.
Document complex instructions - Include comments in your YAML files explaining why you chose specific instruction patterns or configurations.
Test after every change - Use the integrated playground to verify behavior after modifying configuration. Small changes can have unexpected effects.
Start simple, then iterate - Begin with basic instructions and add complexity based on testing results. Overly complex initial instructions are harder to debug.
Keep instructions focused - Each agent should have a clear, specific purpose. Agents trying to do too many things perform inconsistently.
Configuring agents in Visual Studio Code provides powerful capabilities for creating sophisticated automation. The combination of visual design tools and direct YAML editing enables rapid development while maintaining the precision needed for production deployments.
Next unit: Extend agent capabilities with tools
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
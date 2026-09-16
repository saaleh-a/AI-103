> Source: https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/4-deploy-models

Deploy models to endpoints - Training | Microsoft Learn
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
Select, deploy, and evaluate Microsoft Foundry models
Learn
Training
Browse
Select, deploy, and evaluate Microsoft Foundry models
Read in English Add to Collections Add to Plans
Unit 4 of 8
Select, deploy, and evaluate Microsoft Foundry models
Introduction 3 min: Completed
Explore the model catalog 7 min: Completed
Select models using benchmarks 9 min: Completed
Deploy models to endpoints 8 min: Completed
Evaluate model performance 10 min: Completed
Exercise - Select, deploy, and evaluate models 20 min: Completed
Knowledge check 3 min: Completed
Summary 3 min: Completed
Achievements
Ask Learn Ask Learn
Deploy models to endpoints
Completed 100 XP
8 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
After selecting a model from the catalog, you deploy it to make it accessible through endpoints that your applications can use. The Microsoft Foundry portal guides you through the deployment process and provides tools to test your deployed model immediately. 
Understand deployment types
Microsoft Foundry supports several deployment types, each offering different characteristics for data residency, scaling, and billing:
Global Standard model deployments can use any Azure region on a pay-per-token basis. They're best for general workloads, and provide the highest quota.
Global Provisioned deployments can use any Azure region, and their use is based on a reserved provision throughput units(PTU) basis to provide predictable high-throughput.
Global Batch deployments can use any Azure region at a 50% discount for large asynchronous jobs within 24-hours.
Data Zone Standard deployments ensure data stays within a specific data zone on a pay-per-token basis. They're best for scenarios where EU/US data zone compliance is required.
Data Zone Provisioned deployments provide predictable throughput based on reserved PTUs within a data zone.
Data Zone Batch deployments are designed for large asynchronous batch jobs within a data zone/
Standard deployments are deployed within a single region on a pay-per-token basis. They're great when you need regional data residency compliance or for low-volume scenarios.
Regional Provisioned deployments provide reserved PTUs within a single region.
Developer Developer deployments use any Azure region on a pay-per-token basis and are for fine-tuned model evaluation only.
Each model in the catalog indicates which deployment types it supports. The portal automatically selects the best deployment option based on your environment and model requirements. Global Standard deployments in Foundry resources should be used whenever possible for maximum capabilities.
Deploy a model
To deploy a model from the Microsoft Foundry portal:
First, navigate to the model you selected in the Model catalog. From the Foundry portal homepage, select Discover in the navigation, then Models in the left pane. Open the model card to review its specifications and supported deployment types.
Select Deploy to begin the deployment process. You can choose:
Default settings to deploy quickly with recommended configurations
Custom settings to customize your deployment options
If the model requires an Azure Marketplace subscription (common for models from partners and the community), you see terms of use. Review these terms and select Agree and Proceed to accept them. Models sold directly by Azure, such as Azure OpenAI models like GPT-4o-mini, don't require marketplace subscriptions.
Configure your deployment settings:
Deployment name: By default, the system uses the model name. You can modify this to create meaningful names for multiple deployments of the same model. During inference, your code uses this deployment name in the model parameter to route requests.
Deployment type: The portal automatically selects the appropriate deployment type based on the model and your environment. Each model supports different deployment types providing different data residency or throughput guarantees.
For managed compute deployments, you also configure:
Virtual machine SKU: Choose from supported VM types. You need Azure Machine Learning compute quota for the selected SKU in your subscription.
Instance count: Specify how many instances to deploy for load distribution and redundancy.
After configuring all settings, select Deploy. When deployment completes, you land on the Foundry Playground where you can interactively test the model. Verify that the deployment status shows Succeeded in your deployment list.
Manage deployed models
After deployment, you manage your models from the Build section in the Microsoft Foundry portal. Select Build in the navigation, then Models in the left pane to see the list of deployments in your resource.
From the deployment list, select a specific model to view its details:
Deployment configuration and status
Endpoint URL for API access
Authentication keys or tokens
Monitoring and usage metrics
Option to adjust deployment settings or delete the deployment
The deployment details page provides the information your applications need to connect to and use the model.
Test in the playground
The Microsoft Foundry portal includes interactive playgrounds where you test deployed models immediately, without writing code. After deployment completes, you automatically land in the playground, or you can select a deployment from your models list to open the playground.
The playground pre-selects your deployment, so you can start testing immediately. In the chat interface:
Enter prompts in the message box and observe responses. The playground displays both your input and the model's generated output, helping you understand behavior and quality.
Experiment with different types of prompts to test various capabilities:
Simple questions to verify basic understanding
Complex multi-step reasoning problems
Requests for specific formats or styles
Edge-cases that might reveal limitations
Adjust system messages to guide model behavior. System messages set context, tone, and instructions that apply to all user inputs. For example, you might instruct the model to "respond as a customer service representative" or "provide concise, technical explanations."
Modify parameters like temperature (creativity vs. consistency), max tokens (response length limits), and top-p (nucleus sampling) to fine-tune generation behavior.
Select the Code tab to see examples of how to call your deployed model programmatically. The code samples show authentication, endpoint configuration, and request formatting in languages like Python, C#, and JavaScript. You can copy these samples directly into your application.
The playground serves as your development environment for prompt engineering and testing before integrating the model into your application.
Access models programmatically
When you're ready to integrate the model into your application, you need three key pieces of information from the deployment details:
Endpoint URL: The API endpoint where your application sends requests. Microsoft Foundry supports project endpoints for Foundry-specific functionality, and OpenAI v1 endpoints for broad compatibility with OpenAI model APIs.
Authentication key: The secret key or token your application presents to authenticate requests. Alternatively, you can use Microsoft Entra ID authentication and have your application present an authentication token based on is identity. Entra ID authentication is recommended for production scenarios.
Deployment name: The name you specified during deployment, used in the model parameter of API requests to route to your specific deployment.
Your application uses these details to construct API requests. The Microsoft Foundry portal provides SDKs and REST API documentation for various programming languages, along with code samples showing request formatting, authentication, and response handling.
With your model deployed and tested, you're ready to integrate it into applications or proceed to more comprehensive evaluation using automated metrics and test datasets.
Next unit: Evaluate model performance
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
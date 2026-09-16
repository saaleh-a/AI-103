> Source: https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/4-use-concurrent-orchestration

Use Concurrent Orchestration - Training | Microsoft Learn
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
Orchestrate a multi-agent solution using the Microsoft Agent Framework
Learn
Training
Browse
Develop AI agents on Azure
Orchestrate a multi-agent solution using the Microsoft Agent Framework
Read in English Add to Collections Add to Plans
Unit 4 of 11
Orchestrate a multi-agent solution using the Microsoft Agent Framework
Introduction 2 min: Completed
Understand the Microsoft Agent Framework 6 min: Completed
Understand agent orchestration 5 min: Completed
Use concurrent orchestration 5 min: Completed
Use sequential orchestration 5 min: Completed
Use group chat orchestration 5 min: Completed
Use handoff orchestration 5 min: Completed
Use Magentic orchestration 5 min: Completed
Exercise - Develop a multi-agent solution 30 min: Completed
Knowledge check 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Use concurrent orchestration
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Concurrent orchestration lets multiple agents work on the same task at the same time. Each agent handles the task independently, and then their outputs are gathered and combined. This method works especially well when you want diverse approaches or solutions, like during brainstorming, group decision-making, or voting. 
This pattern is useful when you need different approaches or ideas to solve the same problem. Instead of having agents work one after another, they all work at the same time. This speeds up the process and covers the problem from many angles.
Usually, the results from each agent are combined to create a final answer, but this isn't always necessary. Each agent can also produce its own separate result, like calling tools to complete tasks or updating different data stores independently.
Agents work on their own and don't share results with each other. However, an agent can call other AI agents by running its own orchestration as part of its process. Agents need to know which other agents are available to work on tasks. This pattern allows you to either call all registered agents every time or choose which agents to run based on the specific task.
When to use concurrent orchestration
You may want to consider using the concurrent orchestration pattern in these situations:
When tasks can run at the same time, either by using a fixed group of agents or by selecting AI agents dynamically based on what the task needs.
When the task benefits from different specialized skills or approaches (for example, technical, business, or creative) that all work independently but contribute to solving the same problem.
This kind of teamwork is common in multi-agent decision-making methods such as:
Brainstorming ideas
Combining different reasoning methods (ensemble reasoning)
Making decisions based on voting or consensus (quorum)
Handling tasks where speed matters and running agents in parallel cuts down wait time
When to avoid concurrent orchestration
You may want to avoid using the concurrent orchestration pattern in the following scenarios:
Agents need to build on each other's work or depend on shared context in a specific order.
The task requires a strict sequence of steps or predictable, repeatable results.
Resource limits, like model usage quotas, make running agents in parallel inefficient or impossible.
Agents can't reliably coordinate changes to shared data or external systems while running at the same time.
There's no clear way to resolve conflicts or contradictions between results from different agents.
Combining results is too complicated or ends up lowering the overall quality.
Implement concurrent orchestration
Implement the concurrent orchestration pattern with the Microsoft Agent Framework:
Create your chat client Set up a chat client (for example, AzureOpenAIChatClient ) with appropriate credentials to connect to your AI service provider.
Define your agents Create agent instances using the chat client's create_agent method. Each agent should have specific instructions and a name that defines its role and expertise area.
Build the concurrent workflow Use the ConcurrentBuilder class to create a workflow that can run multiple agents in parallel. Add your agent instances as participants using the participants() method, then call build() to create the workflow.
Run the workflow Call the workflow's run method with the task or input you want the agents to work on. The workflow runs all agents concurrently and returns events containing the results.
Process the results Extract the outputs from the workflow events using get_outputs() . The results contain the combined conversations from all agents, with each agent's response included in the final output.
Handle the aggregated responses Process the aggregated messages from all agents. Each message includes the author name and content, allowing you to identify which agent provided each response.
Concurrent orchestration is a powerful pattern for using multiple AI agents simultaneously, enabling faster and more diverse problem-solving. By running agents in parallel, you can explore different approaches at once, improve efficiency, and gain richer insights. However, it's important to choose this pattern when tasks can truly run independently and to be mindful of resource constraints and coordination challenges. When implemented thoughtfully with the Microsoft Agent Framework SDK, concurrent orchestration can greatly enhance your AI workflows and decision-making processes.
Next unit: Use sequential orchestration
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
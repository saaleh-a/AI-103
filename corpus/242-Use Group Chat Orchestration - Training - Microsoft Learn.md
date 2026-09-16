> Source: https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/6-use-group-chat-orchestration

Use Group Chat Orchestration - Training | Microsoft Learn
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
Unit 6 of 11
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
Use group chat orchestration
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Group chat orchestration models a collaborative conversation among multiple AI agents, and optionally a human participant. A central chat manager controls the flow, deciding which agent responds next and when to request human input. This pattern is useful for simulating meetings, debates, or collaborative problem-solving. 
The group chat pattern works well for scenarios where group discussion or iterative collaboration is key to reaching decisions. It supports different interaction styles, from free-flowing ideation to formal workflows with defined roles and approval steps. Group chat orchestration is also great for human-in-the-loop setups where a human may guide or intervene in the conversation. Typically, agents in this pattern don't directly change running systems—they mainly contribute to the conversation.
When to use group chat orchestration
Consider using group chat orchestration when your scenario involves:
Spontaneous or guided collaboration among agents (and possibly humans)
Iterative maker-checker loops where agents take turns creating and reviewing
Real-time human oversight or participation
Transparent and auditable conversations since all output is collected in a single thread
Common scenarios include:
Creative brainstorming where agents build on each other's ideas
Decision-making that benefits from debate and consensus
Complex problems requiring cross-disciplinary dialogue
Quality control and validation requiring multiple expert perspectives
Content workflows with clear separation between creation and review
When to avoid group chat orchestration
Avoid this pattern when:
Simple task delegation or straightforward linear pipelines suffice
Real-time speed requirements make discussion overhead impractical
Hierarchical or deterministic workflows are needed without discussion
The chat manager can't clearly determine when the task is complete
Managing conversation flow becomes too complex, especially with many agents (limit to three or fewer for easier control)
Maker-checker loops
A common special case is the maker-checker loop. Here, one agent (the maker) proposes content or solutions, and another agent (the checker) reviews and critiques them. The checker can send feedback back to the maker, and this cycle repeats until the result is satisfactory. This process requires a turn-based sequence managed by the chat manager.
Implement group chat orchestration
Implement the group chat orchestration pattern with the Microsoft Agent Framework SDK:
Create your chat client Set up a chat client (for example, AzureOpenAIChatClient ) with appropriate credentials to connect to your AI service provider.
Define your agents Create agent instances using the chat client's create_agent method. Each agent should have specific instructions and a name that defines its role and expertise area.
Build the group chat workflow Use the GroupChatBuilder class to create a workflow that can run multiple agents in parallel. Add your agent instances as participants using the participants() method, then call build() to create the workflow.
Run the workflow Call the workflow's run method with the task or input you want the agents to work on. The workflow runs all agents concurrently and returns events containing the results.
Process the results Extract the outputs from the workflow events using get_outputs() . The results contain the combined conversations from all agents, with each agent's response included in the final output.
Handle the aggregated responses Process the aggregated messages from all agents. Each message includes the author name and content, allowing you to identify which agent provided each response.
Customizing the group chat manager
You can create a custom group chat manager by extending the base GroupChatManager class. This approach lets you control:
How conversation results are filtered or summarized
How the next agent is selected
When to request user input
When to terminate the conversation
Custom managers let you implement specialized logic tailored to your use case.
Group chat manager call order
During each round of the conversation, the chat manager calls methods in this order:
should_request_user_input - Checks if human input is needed before the next agent responds.
should_terminate - Determines if the conversation should end (for example, max rounds reached).
filter_results - If ending, summarizes or processes the final conversation.
select_next_agent - If continuing, chooses the next agent to speak.
This ensures user input and termination conditions are handled before moving the conversation forward. Override these methods in your custom manager to change behavior.
Group chat orchestration enables multiple AI agents—and optionally humans—to collaborate through guided conversation and iterative feedback. It's ideal for complex tasks that benefit from diverse expertise and dynamic interaction. While it requires careful management, this pattern offers transparency and flexibility in decision-making and creative workflows. The Microsoft Agent Framework SDK makes it easy to implement and customize group chat orchestration for your needs.
Next unit: Use handoff orchestration
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
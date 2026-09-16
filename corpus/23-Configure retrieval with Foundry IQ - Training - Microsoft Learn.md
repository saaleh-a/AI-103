> Source: https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/5-configure-retrieval

Configure retrieval with Foundry IQ - Training | Microsoft Learn
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
Build knowledge-enhanced AI agents with Foundry IQ
Learn
Training
Browse
Develop AI agents on Azure
Build knowledge-enhanced AI agents with Foundry IQ
Read in English Add to Collections Add to Plans
Unit 5 of 8
Build knowledge-enhanced AI agents with Foundry IQ
Introduction 2 min: Completed
Understanding RAG for agents 5 min: Completed
Explore Foundry IQ 8 min: Completed
Configure data sources for knowledge bases 9 min: Completed
Configure retrieval with Foundry IQ 8 min: Completed
Exercise - Integrate an AI agent with Foundry IQ 35 min: Completed
Knowledge check 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Configure retrieval with Foundry IQ
Completed 100 XP
8 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
You've built a knowledge base and optimized how content gets indexed. Now comes the critical step: configuring how agents retrieve and use that knowledge.
This is where many implementations fail. You can have perfectly indexed content with excellent semantic ranking, but if your agent doesn't know when or how to use the knowledge base, users get inconsistent results.
The retrieval behavior problem
Consider what happens without proper configuration. You ask your agent "What's our vacation policy?" Three different behaviors might occur:
Expand table
Only the third behavior is acceptable for enterprise agents. The first provides wrong information. The second lacks accountability. You need agents that consistently retrieve, cite, and stay grounded in your knowledge base.
Controlling retrieval with instructions
Agent instructions determine retrieval behavior. Think of them as the contract between you and the agent about how it should use knowledge bases.
Here's a basic approach that produces inconsistent results:
Python
Copy
This instruction is too vague. "Using the knowledge base" doesn't specify when to use it or how to present results. The agent might search or might not. It might cite sources or might not.
Writing effective retrieval instructions
Effective instructions specify three critical behaviors:
When to retrieve: Tell the agent to always use the knowledge base, never rely on training data
How to cite: Specify the exact format for source attribution
What to do when unsure: Define fallback behavior when information isn't found
Here's how this looks in practice:
Python
Copy
These instructions create consistent behavior. The agent knows exactly when to search, how to format responses, and what to do when information isn't available.
Testing retrieval behavior
Instructions alone aren't enough. You need to verify that agents actually behave as configured. This requires systematic testing with different query types.
Setting up a test conversation
Create a conversation session and send test queries:
Python
Copy
What to test
Your test queries should cover different retrieval scenarios:
Expand table
Evaluating response quality
Good responses demonstrate four characteristics:
Grounding - Information comes from knowledge base, not training data
Citation - Every factual claim includes source references
Relevance - Retrieved content actually answers the question
Completeness - All necessary information is provided, not just fragments
When you find responses that don't meet these criteria, adjust your instructions. Add more specific rules. Clarify edge cases. Iterate until behavior becomes consistent.
Retrieval strategies for different agent types
Different agent purposes require different retrieval approaches. A customer support agent needs different behavior than an internal research assistant.
Customer-facing support agents
These agents need high accuracy and must never provide uncertain information:
Python
Copy
Internal research assistants
These agents can synthesize across documents and provide broader context:
Python
Copy
Specialized domain experts
These agents focus deeply on specific knowledge domains:
Python
Copy
The pattern is consistent: define the agent's scope, specify retrieval requirements, establish citation standards, and handle edge cases explicitly.
Moving from testing to production
Once your test queries produce consistent, high-quality results, you're ready to deploy. But production introduces new challenges.
Monitor actual usage patterns. Users ask questions differently than your test scenarios. Some questions hit edge cases you didn't anticipate. Others reveal gaps in your knowledge base content.
Track these patterns:
Citation frequency - Are agents consistently citing sources?
Fallback frequency - How often do agents say "I don't know"?
Query types - What categories of questions appear most often?
Retrieval accuracy - Do retrieved documents actually contain answers?
Use this data to refine instructions, improve knowledge base content, and adjust search configurations. Retrieval quality improves through iteration based on real-world usage.
The combination of clear instructions, systematic testing, and ongoing monitoring creates reliable knowledge retrieval that scales across your organization's agents.
Next unit: Exercise - Integrate an AI agent with Foundry IQ
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
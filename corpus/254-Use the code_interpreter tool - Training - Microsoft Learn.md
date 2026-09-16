> Source: https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/03-code-interpreter

Use the code_interpreter tool - Training | Microsoft Learn
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
Develop generative AI apps in Azure
Develop generative AI apps that use tools
Learn
Training
Browse
Develop generative AI apps in Azure
Develop generative AI apps that use tools
Read in English Add to Collections Add to Plans
Unit 3 of 9
Develop generative AI apps that use tools
Introduction 1 min: Completed
What are tools? 5 min: Completed
Use the code_interpreter tool 5 min: Completed
Use the web_search tool 5 min: Completed
Use the file_search tool 5 min: Completed
Use the function tool 5 min: Completed
Exercise - Create a generative AI chat app that uses tools 30 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Use the code_interpreter tool
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The code_interpreter tool provides your model with a Python runtime in which it can generate and run Python code.
What is the code_interpreter tool?
The code_interpreter tool enables generative AI models to write and run Python code dynamically during a conversation. Rather than just discussing code or algorithms, the model can test its logic, process data, and return actual results from code. This transforms the model from a thinker into a doer.
Key features include:
Dynamic Python Execution: The model writes and runs Python code in a sandboxed environment
File Handling: Upload, process, and download files (CSV, JSON, images, and so on)
Data Analysis: Perform calculations, statistical analysis, and data transformations on the fly
Real-time Feedback: The model sees code execution results and can iterate or fix errors
Complex Problem Solving: Tackle math problems, simulations, and logic puzzles through executable code
Common use cases
Expand table
A simple example
Here's how to use code_interpreter with the OpenAI Responses API:
Python
Copy
The output from this code is similar to this:
Copy
More importantly, inspecting the details of the response object returned by the model reveals that the result was calculated and returned to the model using dynamically generated Python code like this:
Python
Copy
How the code_interpreter tool works
The general process for using the code_interpreter tool is:
You send a request: Include code_interpreter in your tools array.
Model analyzes the task: The model determines if code execution is needed.
Model generates code: The model writes Python code to accomplish the task.
Code runs: The code runs in a sandboxed environment with access to common libraries (for example, pandas, numpy, and math).
Results returned: The model receives the output and incorporates it into its response.
Best practices
Be specific: Describe the data format and expected output clearly. Many models internally use the name python tool to identify the code_interpreter tool - so use this language in your instructions.
Provide context: Include relevant domain knowledge in your prompts
Validate results: Always review AI-generated code for correctness before using in production
Monitor costs: Code execution adds tokens; complex operations may use more resources
Leverage libraries: Common packages like pandas, numpy, and matplotlib are pre-installed
Error handling: The model can see errors and will attempt to fix them automatically
Limitations to know about
Executions run in a sandboxed environment with no external network access
Some libraries may not be available; let the model know if a standard library fails
Timeout limits apply to long-running operations
Code runs with memory constraints—massive datasets may need streaming or chunking
Next unit: Use the web_search tool
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
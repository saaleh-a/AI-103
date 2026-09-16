> Source: https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/06-function

Use the function tool - Training | Microsoft Learn
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
Unit 6 of 9
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
Use the function tool
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The function tool allows your model to call developer-defined functions to retrieve data or trigger actions during a response.
What is the function tool?
The function tool (function calling) lets a model decide when to call named tools you expose in your application. The model doesn't run your business logic directly. Instead, it returns a structured function call, your code runs the function, and then you pass the function output back to the model.
This pattern is ideal for connecting model reasoning to real-world systems like APIs, databases, business workflows, and utility functions.
Key features include:
Structured tool calls - The model emits explicit function-call requests
Developer-controlled execution - Your application decides how and where functions run
Reliable integration pattern - Call APIs, internal services, or helper utilities safely
Multi-turn orchestration - Return tool output and let the model continue reasoning
Grounded responses - Answers can include live, system-generated data
Common use cases
Expand table
A simple example
Here's an example that exposes a get_time function and lets the model call it when needed:
Python
Copy
In this flow, the model decides when to call get_time , your code runs the function, and the model then returns a grounded final answer. Since the user can enter any prompt, the model must determine when it needs to call the function. If it does, the response to the prompt will include a function call, that the application code must implement before submitting a new prompt with the output from the function for the model to process.
The output might look something like this:
Copy
The first user prompt ("Hello") didn't require the use of the function tool, so the model responded normally. The second prompt ("What time is it?") triggered the model to select the get_time function, which it indicated in its response. The application code then ran the function and returned the results to the model, which then sent a second response with the results from the function.
Tip
This example uses a single function with no parameters. You can configure the tool to use multiple functions, with or without parameters. For more information about specifying function details, see the OpenAI developers guide.
How the function tool works
The general process for using the function tool is:
You define tools - Provide one or more function definitions in the tools array.
Model evaluates the prompt - It determines whether a function call is needed.
Model emits a function call - The response includes the function name and call metadata.
Your app runs logic - Run the matching function in your code.
You return function output - Send a function_call_output item with the result.
Model completes the answer - It incorporates tool results into the final response.
Best practices
Keep tools focused - Small, single-purpose functions are easier to control and test
Validate function inputs - Never trust tool arguments blindly in production systems
Handle errors safely - Return clear error outputs the model can reason about
Log tool usage - Track calls, latency, and failure rates for debugging and governance
Limit sensitive operations - Require explicit authorization for high-impact actions
Limitations to know about
The model requests function calls, but your application must run them
Incorrect or unexpected tool arguments can occur and should be validated
Tool latency can increase end-to-end response time
Function calling improves reliability, but final outputs still need review for critical decisions
Used well, the function tool turns a model from a text generator into an orchestrator that can interact with real systems in a controlled, auditable way.
Next unit: Exercise - Create a generative AI chat app that uses tools
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
> Source: https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/04-responses-api

Generate responses with the Responses API in the Foundry SDK - Training | Microsoft Learn
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
Develop a generative AI chat app with Microsoft Foundry
Learn
Training
Browse
Develop generative AI apps in Azure
Develop a generative AI chat app with Microsoft Foundry
Read in English Add to Collections Add to Plans
Unit 4 of 8
Develop a generative AI chat app with Microsoft Foundry
Introduction 1 min: Completed
Explore with the model playground 7 min: Completed
Choose an endpoint and SDK 7 min: Completed
Generate responses with the Responses API 10 min: Completed
Generate responses with the ChatCompletions API 10 min: Completed
Exercise - Create a generative AI chat app 10 min: Completed
Knowledge check 5 min: Completed
Summary 3 min: Completed
Achievements
Ask Learn Ask Learn
Generate responses with the Responses API
Completed 100 XP
10 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The OpenAI Responses API brings together capabilities from two previously separate APIs ( ChatCompletions and Assistants) in a unified experience. It provides stateful, multi-turn response generation, making it ideal for conversational AI applications. You can access the Responses API through an OpenAI-compatible client using either the Foundry SDK or the OpenAI SDK.
Understanding the Responses API
The Responses API offers several advantages over traditional chat completions:
Stateful conversations: Maintains conversation context across multiple turns
Unified experience: Combines chat completions and Assistants API patterns
Foundry direct models: Works with models hosted directly in Microsoft Foundry, not just Azure OpenAI models
Simple integration: Access through the OpenAI-compatible client
Note
The Responses API is the recommended approach for generating AI responses in Microsoft Foundry applications. It replaces the older ChatCompletions API for most scenarios.
Generating a simple response
With an OpenAI-compatible client, you can generate responses using the responses.create() method:
Python
Copy
The input parameter accepts a text string containing your prompt. The model generates a response based on this input.
Understanding response structure
A response object contains several useful properties:
output_text: The generated text response
id: Unique identifier for this response
status: Response status (for example, "completed")
usage: Token usage information (input, output, and total tokens)
model: The model used to generate the response
You can access these properties to handle responses effectively:
Python
Copy
Adding instructions
In addition to the user input, you can provide instructions (often referred to as a system prompt) to guide the model's behavior:
Python
Copy
Controlling response generation
You can control response generation with additional parameters:
Python
Copy
temperature: Controls randomness (0.0-2.0). Higher values make output more creative and varied
max_output_tokens: Limits the maximum number of tokens in the response
top_p: Alternative to temperature for controlling randomness
Working with Foundry direct models
When using the FoundrySDK or AzureOpenAI client to connect to a project endpoint, the Responses API works with both Azure OpenAI models and Foundry direct models (such as Microsoft Phi, DeepSeek, or other models hosted directly in Microsoft Foundry):
Python
Copy
Creating conversational experiences
For more complex conversational scenarios, you can provide system instructions and build multi-turn conversations:
Python
Copy
In reality, the implementation is likely to be constructed as a loop in which a user can interactively enter messages based on each response received from the model:
Python
Copy
The output from this example looks similar to this:
text
Copy
As the user enters new input in each turn, the data sent to the model includes the Instructions system message, the input from the user, and the previous response received from the model. In this way, the new input is grounded in the context provided by the response the model generated for the previous input.
Alternative: Manual conversation chaining
You can manage conversations manually by building the message history yourself. This approach gives you more control over what context is included:
Python
Copy
This manual approach is useful when you need to:
Customize which messages are included in context
Implement conversation pruning to manage token limits
Store and restore conversation history from a database
Retrieving specific previous responses
The Responses API maintains response history, allowing you to retrieve previous responses:
Python
Copy
Context window considerations
The previous_response_id parameter links responses together, maintaining conversation context across multiple API calls.
It's important to note that keeping conversation history can increase token usage. For a single run, the active context window can include:
System instructions (instructions, safety rules)
Your current prompt
Conversation history (previous user + assistant messages)
Tool schemas (functions, OpenAPI specs, MCP tools, etc.)
Tool outputs (search results, code interpreter output, files)
Retrieved memory or documents (from memory stores, RAG, file search)
All of these are concatenated, tokenized, and sent to the model together on every request. The SDK helps you manage state, but it doesn't automatically make token usage cheaper.
Creating responsive chat apps
Responses from a model can take some time to generate depending on factors like the specific model being used, the context window size, and the size of the prompt. User's may become frustrated if the app appears to "freeze" while waiting for a response, so it's important to consider app responsiveness in your implementation.
Streaming responses
For long responses, you can use streaming to receive output incrementally - so the user sees partially complete responses as output becomes available:
Python
Copy
If you're tracking conversation history when streaming, you can get the response ID when the stream ends, like this:
Python
Copy
Async usage
For high-performance applications, you can use an asynchronous client that allows you to make non-blocking API calls. Asynchronous usage is ideal for long-running requests or when you want to handle multiple requests concurrently without blocking your application. To use it, import AsyncOpenAI instead of OpenAI and use await with each API call:
Python
Copy
Async streaming works the same way:
Python
Copy
By using the Responses API through the Microsoft Foundry SDK, you can build sophisticated conversational AI applications that maintain context, support multiple model types, and provide a responsive user experience.
Next unit: Generate responses with the ChatCompletions API
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
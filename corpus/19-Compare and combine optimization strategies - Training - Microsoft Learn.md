> Source: https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/5-compare-combine-strategies

Compare and combine optimization strategies - Training | Microsoft Learn
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
Optimize generative AI model performance with Microsoft Foundry
Learn
Training
Browse
Develop generative AI apps in Azure
Optimize generative AI model performance with Microsoft Foundry
Read in English Add to Collections Add to Plans
Unit 5 of 8
Optimize generative AI model performance with Microsoft Foundry
Introduction 2 min: Completed
Optimize model output with prompt engineering 9 min: Completed
Ground your model with Retrieval Augmented Generation 9 min: Completed
Fine-tune a model for consistent behavior 9 min: Completed
Compare and combine optimization strategies 7 min: Completed
Exercise - Optimize generative AI model performance 90 min: Completed
Module assessment 3 min: Completed
Summary 2 min: Completed
Achievements
Ask Learn Ask Learn
Compare and combine optimization strategies
Completed 100 XP
7 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Now that you've explored prompt engineering, RAG, and fine-tuning individually, let's look at how they relate to each other. These strategies aren't mutually exclusive; they're complementary methods that you can combine to meet different optimization goals.
Understand the optimization spectrum
The three optimization strategies address different dimensions of model performance: 
Optimize for context: When the model lacks domain-specific knowledge and you want to maximize the accuracy of responses. RAG addresses this by retrieving relevant data from external sources.
Optimize the model: When you want to improve the response format, style, or tone by maximizing the consistency of behavior. Fine-tuning addresses this by training the model on examples that demonstrate the desired output.
Prompt engineering is the foundation that supports both directions. You use prompt engineering to instruct the model how to behave and what to focus on, and then layer RAG or fine-tuning when prompt engineering alone isn't sufficient.
Compare strategies
Each strategy has different trade-offs in terms of implementation time, complexity, cost, and what it does best:
Expand table
Prompt engineering trade-offs
Prompt engineering is the quickest and least expensive optimization strategy. You can start immediately without any infrastructure changes. However, longer prompts consume more tokens per request, and the model might not always follow complex instructions consistently. Prompt engineering also can't give the model access to information it wasn't trained on.
RAG trade-offs
RAG provides the model with up-to-date, relevant data at query time, which significantly improves factual accuracy. However, it requires setting up a search service, creating and maintaining an index, and processing embeddings. The quality of RAG responses depends on the quality of your search index and how well your data is chunked and indexed.
Fine-tuning trade-offs
Fine-tuning produces the most consistent model behavior because the desired patterns are embedded in the model's weights. It can also reduce per-request costs by shortening prompts. However, fine-tuning has the highest upfront investment: you need to prepare training data, pay for training compute, and host the custom model. The fine-tuned model may also need to be retrained when the base model is updated or when your requirements change.
Combine strategies for better results
The most effective generative AI applications often use multiple strategies together. Here are common combinations:
Prompt engineering + RAG
This is the most common combination. You use prompt engineering to define the model's behavior (through system messages and instructions) and RAG to provide the factual context needed for accurate responses. For example:
The system message instructs the model to act as a travel advisor and format responses in a specific way.
RAG retrieves details from the hotel catalog so the model can answer with real hotel names and prices.
This combination addresses both how the model should act and what the model needs to know.
Prompt engineering + fine-tuning
Use this combination when you need the model to consistently follow a specific style or format. The fine-tuned model handles the baseline behavior, and the system message provides additional per-conversation context. For example:
The fine-tuned model is trained to always respond in the travel agency's brand voice.
The system message adds session-specific instructions, such as giving priority to a seasonal promotion.
RAG + fine-tuning
Combine these strategies when you need both factual grounding and consistent behavior. The fine-tuned model ensures the response style is reliable, while RAG provides the current, domain-specific data. For example:
The fine-tuned model produces responses in the agency's brand voice and structured format.
RAG retrieves up-to-date hotel pricing and availability from the catalog.
All three strategies together
For the most demanding applications, you can use prompt engineering, RAG, and a fine-tuned model together. Each layer handles a different concern:
Fine-tuning ensures consistent style and format.
RAG provides accurate, up-to-date domain knowledge.
Prompt engineering adds conversation-specific instructions and guardrails.
Apply a decision framework
When deciding which strategies to use, start simple and add complexity only when needed:
Start with prompt engineering: Test system messages, few-shot examples, and parameter tuning. Evaluate whether the results meet your requirements.
Add RAG if accuracy matters: If the model needs access to specific, current, or private data to answer correctly, implement RAG with Azure AI Search.
Add fine-tuning if consistency matters: If the model doesn't reliably maintain the desired style, tone, or format despite detailed prompts, fine-tune the model with representative examples.
Combine as needed: Layer strategies based on your application's specific requirements. Not every application needs all three.
This incremental approach helps you avoid unnecessary cost and complexity while ensuring you achieve the optimization level your application requires.
Next unit: Exercise - Optimize generative AI model performance
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
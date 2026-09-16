> Source: https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/4-fine-tune-model

Fine-tune a model for consistent behavior - Training | Microsoft Learn
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
Unit 4 of 8
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
Fine-tune a model for consistent behavior
Completed 100 XP
9 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Prompt engineering helps you guide the model's behavior, and RAG helps you ground responses in factual data. But sometimes the model still doesn't produce responses with the consistent style, tone, or format you need. When you notice that the model ignores or inconsistently follows your instructions—even with detailed system messages and few-shot examples—it might be time to fine-tune the model.
Fine-tuning is the process of taking a pretrained language model and further training it on a smaller, task-specific dataset. This adjusts the model's internal weights so that it produces responses that are consistent with the patterns in your training data.
Understand fine-tuning
Foundation models like GPT-4o are trained on vast amounts of general data. Fine-tuning builds on that foundation by training the model with additional examples that reflect your specific requirements. Think of it as specializing a generalist: the model retains its broad language capabilities but learns to respond in the particular way your training data demonstrates.
Fine-tuning uses LoRA (Low-Rank Adaptation), a technique that approximates weight changes with a lower-rank representation. Instead of retraining all of the model's parameters, LoRA updates only a smaller subset of important parameters. This makes training faster and more cost-effective while maintaining model quality.
The key benefit of fine-tuning over training a model from scratch is efficiency. You need less time, fewer computing resources, and significantly less data to customize a model's behavior.
Know when to fine-tune
Fine-tuning is suited for scenarios where prompt engineering alone doesn't achieve the consistency you need. Common use cases include:
Consistent style and tone: Your organization has a specific brand voice, and the model needs to follow it reliably across all interactions. For example, the travel agency wants every response to use a warm, encouraging tone with short paragraphs.
Specific output formats: You need the model to reliably produce structured output, like JSON responses following a defined schema, and few-shot examples alone aren't sufficient.
Reducing prompt length: Long system messages with many examples consume tokens and increase latency. Fine-tuning embeds those patterns into the model, reducing the prompt size needed for each request.
Distillation: You want to transfer the capabilities of a large, expensive model to a smaller, more efficient one. For example, you can collect outputs from a high-performing model and use them to fine-tune a smaller model that achieves similar quality at lower cost and latency.
Enhancing tool usage: When your application uses tool calling, fine-tuning with tool examples can improve the accuracy of tool selection and parameter generation.
Important
Fine-tuning is an advanced capability. Always start by evaluating the baseline performance of a standard model against your requirements before considering fine-tuning. Without a baseline, it's hard to detect whether fine-tuning improved or degraded the model's performance.
Explore types of fine-tuning
Microsoft Foundry offers several fine-tuning techniques:
Supervised fine-tuning (SFT): Train the model on a labeled dataset of prompt-and-response pairs. The model learns to produce outputs that match the patterns in your training data. This technique works best when there are clear, well-defined ways to approach a task.
Reinforcement fine-tuning (RFT): Optimize the model's behavior through iterative feedback, using a grader to reward better responses incrementally. RFT works well for complex or dynamic tasks where there are many possible solutions and you want to improve the model's reasoning quality.
Direct Preference Optimization (DPO): Align the model based on human preferences by providing preferred and non-preferred response pairs. DPO is computationally lighter than traditional reinforcement learning approaches while being equally effective at alignment.
You can also combine techniques. For example, first use supervised fine-tuning to create a customized model, then use DPO to further align the responses to your specific preferences.
Prepare training data
Fine-tuning requires a dataset of high-quality examples in JSONL (JSON Lines) format. For chat completion models, each example consists of a conversation with system, user, and assistant messages:
JSON
Copy
When preparing your training data:
Include a consistent system message across examples.
Use high-quality, representative examples that cover the range of scenarios you expect.
Aim for at least hundreds of examples; more is generally better.
Ensure the assistant responses reflect exactly the style, format, and tone you want.
Note
Including a system message in your training data is important. Leaving it blank tends to produce lower-accuracy models. Use the same system message when you deploy your fine-tuned model for inference.
Consider the challenges
Fine-tuning introduces costs and complexity that you should evaluate before committing:
Training costs: Fine-tuning has upfront costs for training and ongoing hourly costs for hosting the custom model.
Data quality requirements: Poor-quality or unrepresentative training data leads to overfitting, underfitting, or bias.
Maintenance: Fine-tuned models may need to be retrained when data changes or when updated base models are released.
Experimentation: Finding the right combination of hyperparameters (epochs, batch size, learning rate) requires testing and iteration.
Model drift: Specializing too narrowly can make the model less effective at general language tasks outside the fine-tuned domain.
For the travel agency, fine-tuning means every response consistently matches the company's brand voice and formatting guidelines—even without extensive system messages. But the team needs to weigh this benefit against the cost of preparing training data and maintaining the fine-tuned model over time.
Next unit: Compare and combine optimization strategies
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
> Source: https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/3-select-models-benchmarks

Select models using benchmarks - Training | Microsoft Learn
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
Unit 3 of 8
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
Select models using benchmarks
Completed 100 XP
9 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Before deploying a model, you want to understand how it performs across different dimensions. Model benchmarks provide objective, measurable data to help you compare models and make informed selection decisions. The Microsoft Foundry portal offers comprehensive benchmarking tools organized into quality, safety, cost, and performance metrics.
Access model benchmarks
You can explore benchmarks in two ways within the Microsoft Foundry portal:
In the model catalog, view the Model leaderboard to see comparative rankings across all available models. This view helps you identify top-performing models for specific metrics or scenarios. The leaderboard displays top models ranked by quality, safety, estimated cost, and throughput.
For detailed benchmarks on a specific model, open its model card and select the Benchmarks tab. This view shows how the individual model performs across various metrics and datasets, with comparison charts placing it relative to similar models.
Quality benchmarks
Quality benchmarks assess how well a model generates accurate, coherent, and contextually appropriate responses. These metrics use public datasets and standardized evaluation methods to ensure consistency.
The Quality index provides a high-level overview by averaging accuracy scores across multiple benchmark datasets that measure reasoning, knowledge, question answering, mathematical capabilities, and coding skills. Higher quality index values indicate stronger overall performance across general-purpose language tasks.
Quality benchmarks use datasets such as:
Arena-Hard - adversarial question answering
BIG-Bench Hard - reasoning capabilities
GPQA - graduate-level multi-discipline questions
HumanEval+ and MBPP+ - code generation tasks
MATH - mathematical reasoning
MMLU-Pro - general knowledge assessment
IFEval - instruction following
Benchmark scores are normalized indexes ranging from zero to one, where higher values indicate better performance.
Safety benchmarks
Safety metrics ensure models don't generate harmful, biased, or inappropriate content. These benchmarks are crucial for applications exposed to end users, especially in regulated industries or customer-facing scenarios.
Microsoft Foundry evaluates models across multiple safety dimensions:
Harmful behavior detection uses the HarmBench benchmark to measure how well models resist generating unsafe content. The evaluation calculates Attack Success Rate (ASR), where lower values indicate safer, more robust models. HarmBench tests three functional areas:
Standard harmful behaviors - cybercrime, illegal activities, general harm
Contextually harmful behaviors - misinformation, harassment, bullying
Copyright violations - reproducing copyrighted material
Toxic content detection uses the ToxiGen dataset to measure how well models identify adversarial and implicit hate speech. Higher F1 scores indicate better detection performance across references to minority groups.
Sensitive domain knowledge uses the WMDP (Weapons of Mass Destruction Proxy) benchmark to measure model knowledge in biosecurity, cybersecurity, and chemical security. Higher WMDP scores indicate more knowledge of potentially dangerous capabilities.
Safety scores help you understand model robustness, especially important for customer-facing applications where harmful output poses significant concerns.
Cost benchmarks
Understanding the financial impact of model usage helps you balance quality requirements with budget constraints. Cost benchmarks in Microsoft Foundry display pricing for serverless API deployments and Azure OpenAI models.
Cost per input tokens shows the price for processing 1 million input tokens (the text you send to the model).
Cost per output tokens indicates the price for generating 1 million output tokens (the text the model produces).
Estimated cost combines input and output costs using a typical 3:1 ratio (three input tokens for every output token), giving you a single number for comparison. Lower values indicate more cost-effective models.
Cost benchmarks help you identify models that deliver the quality you need at a price point that fits your application's usage patterns and budget.
Performance benchmarks
Performance metrics measure how quickly and efficiently models respond to requests. These benchmarks matter for real-time applications where user experience depends on responsiveness.
Latency measurements include:
Latency mean - average time in seconds to process a request
Latency P50 (median) - 50% of requests complete faster than this time
Latency P90 - 90% of requests complete faster than this time
Latency P95 - 95% of requests complete faster than this time
Latency P99 - 99% of requests complete faster than this time
Time to first token (TTFT) - time until the first token arrives when using streaming
Throughput measurements include:
Generated tokens per second (GTPS) - output tokens generated per second
Total tokens per second (TTPS) - combined input and output tokens processed per second
Time between tokens - interval between receiving consecutive tokens
The leaderboard summarizes performance using mean time to first token (lower is better) and mean generated tokens per second (higher is better). High-throughput, low-latency models provide better user experiences in interactive applications. For batch processing jobs where speed matters less than cost, you can prioritize other factors.
Use leaderboards and comparison features
The model leaderboard lets you view top models for specific metrics. You can sort by quality, safety, estimated cost, and throughput to identify models that best match your requirements.
Scenario leaderboards help you find models optimized for specific use cases like reasoning, coding, math, question answering, or groundedness. If your application maps to a particular scenario, start with the relevant scenario leaderboard rather than relying solely on overall quality index.
Trade-off charts display two metrics simultaneously, such as quality versus cost or quality versus throughput. These visualizations help you find the optimal balance for your requirements. Use the dropdown to compare quality against cost, throughput, or safety. Models closer to the top-right corner of the chart perform well on both metrics. A model that's slightly less accurate but significantly faster or cheaper might better serve your needs.
Side-by-side comparison lets you select two or three models from the leaderboard and compare them across multiple dimensions:
Performance benchmarks (quality, safety, throughput)
Model details (context window, training data, supported languages)
Supported endpoints (deployment options)
Feature support (function calling, structured output, vision)
Select models by checking boxes next to their names, then choose Compare to open the detailed comparison view.
Next unit: Deploy models to endpoints
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
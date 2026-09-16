> Source: https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/2-explore-model-catalog

Explore the model catalog - Training | Microsoft Learn
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
Unit 2 of 8
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
Explore the model catalog
Completed 100 XP
7 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The Foundry Models catalog serves as your central hub for discovering and comparing AI models. With over 1,900 models available from various providers, you need effective ways to filter and find models that match your specific requirements.
The model catalog includes two broad categories of model:
Foundry Models sold directly by Azure These models are billed directly through your Azure subscription, and include Azure OpenAI models as well as models from Microsoft and other providers.
Foundry Models from partners and community These models are provided by trusted partners and the community; each with their own licensing and pricing.
Finding models in the model catalog
The model catalog user interface in the Foundry Portal provides an easy way to search for the right model for your needs. Each model has a model card showing its key information; including the provider, capabilities, benchmark metrics, responsible AI considerations, and deployment options. 
You can search for models by keyword, and you can filter based on the following attributes:
Collection: Models are organized into collections, such as models that are provided directly in Azure, or models in the Hugging Face repository.
Capabilities: Specific model abilities, including reasoning (complex problem-solving), tool calling (API and function integration), or multimodal processing (text, images, audio).
Source: The model provider, including Azure OpenAI, Microsoft, Cohere, Mistral, Meta, Anthropic, and others.
Inference tasks: Specific tasks like text generation, summarization, translation, image-generation, speech synthesis, or other common AI tasks.
Fine-tuning methods: Supported techniques for fine-tuning a model.
Industry: Models trained on industry-specific datasets. These specialized models often outperform general-purpose models in their respective domains.
Understand generative AI model types
As you explore the catalog, you encounter different categories of models designed for various use cases. In broad terms, you can categorize language models as:
Large Language Models (LLMs) like GPT-5, Mistral Large, and Llama 3 70B that are designed for tasks requiring deep reasoning, complex content generation, and extensive context understanding. These models excel at sophisticated applications but require more computational resources.
Small Language Models (SLMs) like Phi-4, Mistral OSS models, and Llama 3 8B that offer efficiency and cost-effectiveness while handling common natural language processing tasks. They're ideal for scenarios where speed and cost matter more than handling the most complex reasoning tasks. SLMs can run on lower-end hardware or edge devices.
Chat completion and reasoning models
Most language models in the catalog are chat completion models designed to generate coherent, contextually appropriate text responses. These models power conversational interfaces and content generation applications.
For scenarios requiring higher performance in complex tasks like mathematics, coding, science, strategy, and logistics, reasoning models like Claude Opus 4.6 provide enhanced problem-solving capabilities. These models can break down complex problems and show their reasoning process.
Specialized models
The catalog also includes task-specific models:
Embedding models like Ada and Cohere convert text into numerical representations. These models enable semantic search, recommendation systems, and Retrieval Augmented Generation (RAG) scenarios where you need to find relevant information based on meaning rather than exact keyword matches.
Image generation models like GPT-image-1 create images from text descriptions. Use these for generating marketing materials, illustrations, or design mockups.
Video generation models like Sora 2 create video content from text descriptions.
Image analysis models like GPT-4.1 can accept multimodal input, including text and images; and generate natural language output based on prompts that include images for analysis.
Text to speech models like GPT-4o-tts can convert text-based input to synthesized speech.
Speech to text models like GPT-4o-transcribe can convert audio data containing speech into text transcriptions.
Regional and domain-specific models
Some models are optimized for specific languages, regions, or industries. When you need specialized performance in a particular domain or language, these models often outperform general-purpose alternatives. Examples include models trained on medical literature, legal documents, or specific language corpora.
Next unit: Select models using benchmarks
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
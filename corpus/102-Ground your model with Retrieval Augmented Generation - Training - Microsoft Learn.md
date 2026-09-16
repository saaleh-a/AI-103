> Source: https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/3-retrieval-augmented-generation

Ground your model with Retrieval Augmented Generation - Training | Microsoft Learn
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
Unit 3 of 8
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
Ground your model with Retrieval Augmented Generation
Completed 100 XP
9 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Prompt engineering helps guide how a model responds, but it can't give the model knowledge it doesn't already have. Language models are trained on large datasets, but that training data has a cutoff date and doesn't include your organization's private information. When a model lacks relevant context, it might generate responses that sound plausible but are factually incorrect.
To address this challenge, you can ground the model by providing it with relevant, factual data to base its responses on. Retrieval Augmented Generation (RAG) is the most common technique for grounding a language model.
Understand grounding
When you use a language model without grounding, the only information it has comes from its training data. The result might be grammatically correct and logically structured, but it can be inaccurate or include fabricated details. For example, asking "Which hotels do you offer in Paris?" without grounding data might return fictional hotel names. 
When you ground a prompt, you provide relevant data from a trusted source along with the user's question. The model then generates a response based on that data, producing more accurate and contextually relevant answers.
Consider the difference:
Ungrounded: The model relies only on its training data and might invent hotel names or details.
Grounded: The model receives your actual hotel catalog data as context and responds with real hotel names, prices, and availability. 
Grounding improves the factual accuracy of responses by connecting the model to information that is specific, current, and relevant to the user's needs.
How RAG works
RAG is a pattern that retrieves relevant information from a data source and includes it in the prompt before the model generates a response. The process follows three steps: 
Retrieve: Search a data source for information that is relevant to the user's question.
Augment: Add the retrieved information to the prompt as context.
Generate: Send the augmented prompt to the language model to generate a grounded response.
By retrieving context from a specified data source, you ensure that the model uses relevant, up-to-date information instead of relying solely on its training data.
Create embeddings for search
A critical component of RAG is the ability to efficiently find the most relevant information in your data source. This is where embeddings and vector search come in.
An embedding is a mathematical representation of text as a vector — a list of floating-point numbers that captures the meaning of words, sentences, or documents. You create embeddings by sending your content to an embedding model, such as an Azure OpenAI embedding model available in Microsoft Foundry.
For example, imagine two documents:
"The children played joyfully in the park."
"Kids happily ran around the playground."
These sentences use different words but have similar meanings. When you create embeddings for each, their vectors are close together in multidimensional space, reflecting their semantic similarity. 
Cosine similarity measures how close two vectors are by calculating the angle between them. A value near 1 means the vectors are very similar. This mathematical approach enables you to find relevant documents even when the exact words don't match.
Use Azure AI Search for retrieval
Azure AI Search provides the retrieval component for RAG solutions in Microsoft Foundry. It allows you to bring your own data, create a searchable index, and query it to retrieve relevant information. 
To use Azure AI Search with RAG, you:
Add your data to Microsoft Foundry from sources like Azure Blob Storage, Azure Data Lake Storage Gen2, or Microsoft OneLake. You can also upload files directly.
Create an index using an embedding model to generate vector representations of your content. The index is stored in Azure AI Search.
Query the index when a user asks a question. The system converts the question to an embedding, searches for the most similar content, and returns the relevant results.
Azure AI Search supports several search techniques:
Keyword search: Matches exact terms in the query to text in the index.
Semantic search: Uses semantic models to match the meaning of the query rather than exact keywords.
Vector search: Uses embeddings to find semantically similar content.
Hybrid search: Combines keyword, semantic, and vector search for the most accurate results. Hybrid search is recommended for generative AI applications.
Implement RAG with the Azure AI Foundry SDK
After you create an Azure AI Search index, you can connect it to a model through your Microsoft Foundry project. The azure-ai-projects SDK lets you get an authenticated OpenAI client and use the Responses API to generate grounded answers.
The following Python code shows a basic implementation:
Python
Copy
In this example, retrieved_context represents the documents returned from your Azure AI Search index. By injecting those results into the system message, the model's response is grounded in your actual data rather than its general training knowledge.
When to use RAG
RAG is most effective when:
The model needs domain-specific knowledge: Your organization has private data that the model wasn't trained on, like a product catalog, policy documents, or internal knowledge base.
Information changes frequently: Your data is updated regularly, such as inventory, pricing, or news. RAG retrieves current data at query time without retraining.
Factual accuracy is critical: You need responses grounded in real data rather than the model's general knowledge.
The base model's training data has a cutoff: Events or information that occurred after the model's training cutoff date need to be accessible.
For the travel agency scenario, RAG allows customers to ask questions about specific hotels, destinations, and booking policies, all grounded in the agency's actual catalog data.
Tip
If you're building agents that need grounded knowledge without managing your own search infrastructure, consider Foundry IQ — a managed knowledge store that simplifies grounding for AI agents. To learn more, see Build knowledge-enhanced AI agents with Foundry IQ.
Next unit: Fine-tune a model for consistent behavior
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
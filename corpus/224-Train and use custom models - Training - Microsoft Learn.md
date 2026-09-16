> Source: https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/5-train-custom-models

Train and use custom models - Training | Microsoft Learn
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
Extract insights from visual data on Azure
Extract data with Azure Document Intelligence
Learn
Training
Browse
Extract insights from visual data on Azure
Extract data with Azure Document Intelligence
Read in English Add to Collections Add to Plans
Unit 5 of 8
Extract data with Azure Document Intelligence
Introduction 3 min: Completed
What is Azure Document Intelligence? 8 min: Completed
Use the Document Intelligence Studio 6 min: Completed
Use prebuilt models 10 min: Completed
Train and use custom models 8 min: Completed
Exercise - Analyze documents with Document Intelligence 30 min: Completed
Module assessment 3 min: Completed
Summary 3 min: Completed
Achievements
Ask Learn Ask Learn
Train and use custom models
Completed 100 XP
8 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
When prebuilt models don't cover your specific document types, you can train custom models to extract data from your own forms. Azure Document Intelligence supports supervised machine learning, where you label sample documents with the fields you want to extract, and the service trains a model to recognize those fields in new documents.
Custom model types
Azure Document Intelligence offers two types of custom extraction models, plus a classification model:
Custom template models
Custom template models rely on a consistent visual template to extract labeled data. They work best for structured forms where the layout is static from one document instance to the next, such as questionnaires, applications, or standard government forms.
Template models accurately extract labeled key-value pairs, selection marks, tables, regions, and signatures. Training takes only a few minutes, and more than 100 languages are supported. Because template models are fast to train and cost-effective to run, they're a good starting point when your documents have a uniform visual layout.
Custom neural models
Custom neural models use deep learning and are fine-tuned on your labeled data. They combine layout and language features to extract fields from structured, semi-structured, and unstructured documents. Neural models support:
Overlapping fields
Signature detection
Table, row, and cell level confidence
Neural models deliver higher accuracy than template models, especially for semi-structured or unstructured documents where the layout varies between instances. However, they take longer to train and consume more resources.
Choose between template and neural models
When deciding which custom model type to use, consider the tradeoffs:
Expand table
Tip
Start with a custom template model if your forms have a consistent visual layout. It's faster and cheaper to train. If accuracy is insufficient or your documents vary in format, switch to a custom neural model.
Custom classifiers
Custom classification models identify the type of a document before invoking an extraction model. You can use a classifier to route incoming documents to the appropriate extraction model when you're handling multiple form types.
Train a custom model
To train a custom extraction model:
Store sample forms in an Azure blob container, along with JSON files containing layout and label field information:
An ocr.json file for each sample form (generated using the Analyze document function).
A single fields.json file describing the fields you want to extract.
A labels.json file for each sample form, mapping fields to their location in the form.
Generate a shared access signature (SAS) URL for the container.
Use the Build model REST API function or the equivalent SDK method.
Use the Get model REST API function to retrieve the trained model ID.
You can also train custom models visually using the Document Intelligence Studio, as described in the Use the Document Intelligence Studio unit.
Tip
Use at least five to six sample forms for training. A larger and more varied dataset produces more accurate models.
Use a custom model
To extract form data with a custom model, call the Analyze document function with your model ID. You can use either a supported SDK or the REST API.
C#
C#
Copy
Python
Python
Copy
A successful response contains an analyzeResult object with the extracted content and an array of pages containing information about the document.
Composed models
You can combine multiple custom models into a single composed model. When you submit a document to a composed model, Document Intelligence classifies it to determine the most appropriate component model, and then returns the extraction results from that model. This approach is useful when you handle multiple form types that each require their own extraction model.
Learn more
Document Intelligence custom models
Custom neural models
Custom template models
Composed models
Next unit: Exercise - Analyze documents with Document Intelligence
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
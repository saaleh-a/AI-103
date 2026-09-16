> Source: https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/4-use-prebuilt-models

Use prebuilt models - Training | Microsoft Learn
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
Unit 4 of 8
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
Use prebuilt models
Completed 100 XP
10 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Prebuilt models in Azure Document Intelligence enable you to extract data from common form types without training your own models. Microsoft trains these models on large numbers of sample documents, so you can expect accurate and reliable results for standard document types.
Document analysis models
Before looking at the domain-specific prebuilt models, it's important to understand the document analysis models that underpin them.
Read model
The read model extracts printed and handwritten text from documents and images. It detects the language of each text line and classifies whether text is handwritten or printed. The read model is used as the foundation for text extraction in all other Document Intelligence models.
For multi-page PDF or TIFF files, you can use the pages parameter in your request to specify a page range for analysis.
The read model is ideal when you want to extract words and lines from documents with no fixed or predictable structure. 
Layout model
The layout model extends the read model's text extraction with detection of selection marks, tables, and document structure information. It also supports an optional keyValuePairs feature to extract key-value pairs.
When you digitize a document, it might be angled, or tables might have complex structures with merged cells or incomplete rows. The layout model can handle these difficulties. Each table cell is extracted with its content, bounding box position, and row/column indexes.
Selection marks (checkboxes and radio buttons) are extracted with their bounding box, confidence level, and whether they're selected. 
Note
The general document model was available in earlier versions of Document Intelligence, but was deprecated in the 2023-10-31-preview release. Its functionality for key-value pair and entity extraction has been incorporated into the layout model and other features.
Prebuilt models for specific document types
Azure Document Intelligence includes prebuilt models trained on specific document types. The following prebuilt models are some examples available to extract fields from common business documents:
Financial and legal documents
Expand table
US tax documents
Expand table
US mortgage documents
Expand table
Personal identification documents
Expand table
Important
The ID document model extracts personal information covered by data protection laws in most jurisdictions. Ensure you have the individual's permission to store their data and that you comply with all applicable legal requirements.
Features of prebuilt models
Prebuilt models are designed to extract different types of data from documents. These features include:
Text extraction: All prebuilt models extract lines and words from handwritten and printed text.
Key-value pairs: Spans of text that identify a label and its response. For example, Weight and 31 kg.
Selection marks: Checkboxes and radio buttons, including whether they're selected or not.
Tables: Data in cells, including the number of columns and rows, column and row headings, and merged cells.
Fields: Models trained for a specific form type identify a fixed set of fields. For example, the invoice model extracts CustomerName and InvoiceTotal .
When to use prebuilt vs. custom models
Prebuilt models cover the most common document types. If you have an industry-specific or unique form type, you might get more accurate results with a custom model. However, custom models require time and sample data to train. Always check whether a prebuilt model exists for your scenario before investing in custom model development.
Learn more
Azure Document Intelligence prebuilt models
Azure Document Intelligence read model
Azure Document Intelligence layout model
Azure Document Intelligence invoice model
Azure Document Intelligence receipt model
Azure Document Intelligence ID document model
Next unit: Train and use custom models
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
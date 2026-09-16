> Source: https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/2-what-is-document-intelligence

What is Azure Document Intelligence? - Training | Microsoft Learn
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
Unit 2 of 8
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
What is Azure Document Intelligence?
Completed 100 XP
8 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Azure Document Intelligence is a cloud-based AI service in Microsoft Foundry that uses OCR and deep learning models to extract text, key-value pairs, selection marks, and tables from documents.
OCR captures document structure by creating bounding boxes around detected objects in an image. The locations of the bounding boxes are recorded as coordinates in relation to the rest of the page. Azure Document Intelligence returns bounding box data and other information in a structured JSON format that preserves the relationships from the original document. 
To build a high-accuracy document extraction model from scratch requires deep learning expertise, large amounts of compute, and long training times. Azure Document Intelligence provides underlying models already trained on thousands of form examples, so you can achieve high-accuracy data extraction with minimal effort.
Document Intelligence service components
Azure Document Intelligence is composed of three categories of models:
Document analysis models: Extract text, structure, tables, and selection marks from documents. The read model extracts text and detects languages, while the layout model adds table and structure extraction. You'll explore these models in detail in the Use prebuilt models unit.
Prebuilt models: Extract information from common document types — such as invoices, receipts, tax forms, ID documents, and more — without any training required. You'll see the full list of available prebuilt models in the Use prebuilt models unit.
Custom models: Extract data from forms specific to your business using your own labeled datasets. Options include custom template models (fast and cost-effective for fixed layouts), custom neural models (higher accuracy for varying layouts), composed models, and custom classifiers. You'll learn about training and using custom models in the Train and use custom models unit.
Access Document Intelligence services
You can access Azure Document Intelligence in several ways:
REST API: Call the service directly using HTTP requests.
Client library SDKs: Use SDKs for Python, C#, Java, and JavaScript.
Document Intelligence Studio: An online tool for visually exploring, testing, and building Document Intelligence solutions.
Microsoft Foundry portal: Integrate Document Intelligence with other Foundry tools.
Tip
This module's exercise focuses on the Python SDK. The underlying REST services can be used by any language.
Create a Document Intelligence resource
To use Azure Document Intelligence, you need an Azure resource. You can use either:
A Foundry resource: A multi-service subscription that provides access to multiple AI services under a single endpoint and key.
An Azure Document Intelligence resource: A single-service resource used only with Document Intelligence.
Note
Create a Foundry resource if you plan to access multiple Foundry tools under a single endpoint and key. For Document Intelligence access only, create a dedicated Document Intelligence resource.
Input requirements
Azure Document Intelligence works on input documents that meet these requirements:
Format must be JPEG, PNG, BMP, PDF (text or scanned), or TIFF. The read model also accepts Microsoft Office file formats.
File size must be less than 500 MB for the standard tier and 4 MB for the free tier.
Image dimensions must be between 50 x 50 pixels and 10,000 x 10,000 pixels.
PDF documents must have dimensions less than 17 x 17 inches (A3 paper size).
PDF documents must not be password-protected.
Learn more
What is Azure Document Intelligence?
Azure Document Intelligence model overview
Next unit: Use the Document Intelligence Studio
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
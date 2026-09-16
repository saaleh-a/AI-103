> Source: https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/3-index

Extract data with an indexer - Training | Microsoft Learn
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
Create a knowledge mining solution with Azure AI Search
Learn
Training
Browse
Extract insights from visual data on Azure
Create a knowledge mining solution with Azure AI Search
Read in English Add to Collections Add to Plans
Unit 3 of 9
Create a knowledge mining solution with Azure AI Search
Introduction 1 min: Completed
What is Azure AI Search? 3 min: Completed
Extract data with an indexer 5 min: Completed
Enrich extracted data with AI skills 5 min: Completed
Search an index 5 min: Completed
Persist extracted information in a knowledge store 5 min: Completed
Exercise - Create a knowledge mining solution 40 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Extract data with an indexer
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
At the heart of Azure AI Search solutions is the creation of an index An index contains your searchable content and is created and updated, unsurprisingly, by an indexer. 
The indexing process starts with a data source: the storage location of your original data artifacts; for example, an Azure blob store container full of documents, a database, or some other store.
The Indexer automates the extraction and indexing of data fields through an enrichment pipeline, in which it applies document cracking to extract the contents of the source documents and applies incremental steps to create a hierarchical (JSON-based) document with the required fields for the index definition.
The result is a populated index, which can be queried to return specified fields from documents that match the query criteria.
How documents are constructed during indexing
The indexing process works by creating a document for each indexed entity. During indexing, an enrichment pipeline iteratively builds the documents that combine metadata from the data source with enriched fields extracted or generated by skills. You can think of each indexed document as a JSON structure, which initially consists of a document with the index fields you have mapped to fields extracted directly from the source data, like this:
document
metadata_storage_name
metadata_author
content
When the documents in the data source contain images, you can configure the indexer to extract the image data and place each image in a normalized_images collection, like this:
document
metadata_storage_name
metadata_author
content
normalized_images
image0
image1
Normalizing the image data in this way enables you to use the collection of images as an input for skills that extract information from image data.
Each skill adds fields to the document, so for example a skill that detects the language in which a document is written might store its output in a language field, like this:
document
metadata_storage_name
metadata_author
content
normalized_images
image0
image1
language
The document is structured hierarchically, and the skills are applied to a specific context within the hierarchy, enabling you to run the skill for each item at a particular level of the document. For example, you could run an optical character recognition ( OCR) skill for each image in the normalized images collection to extract any text they contain:
document
metadata_storage_name
metadata_author
content
normalized_images
image0
Text
image1
Text
language
The output fields from each skill can be used as inputs for other skills later in the pipeline, which in turn store their outputs in the document structure. For example, we could use a merge skill to combine the original text content with the text extracted from each image to create a new merged_content field that contains all of the text in the document, including image text.
document
metadata_storage_name
metadata_author
content
normalized_images
image0
Text
image1
Text
language
merged_content
The fields in the final document structure at the end of the pipeline are mapped to index fields by the indexer in one of two ways:
Fields extracted directly from the source data are all mapped to index fields. These mappings can be implicit (fields are automatically mapped to in fields with the same name in the index) or explicit (a mapping is defined to match a source field to an index field, often to rename the field to something more useful or to apply a function to the data value as it is mapped).
Output fields from the skills in the skillset are explicitly mapped from their hierarchical location in the output to the target field in the index.
Next unit: Enrich extracted data with AI skills
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
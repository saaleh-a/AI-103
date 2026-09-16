> Source: https://learn.microsoft.com/en-gb/training/modules/analyze-images-with-content-understanding/3-analyze-images-with-content-understanding

Analyze images with Content Understanding - Training | Microsoft Learn
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
Analyze images with Content Understanding
Learn
Training
Browse
Analyze images with Content Understanding
Read in English Add to Collections Add to Plans
Unit 3 of 6
Analyze images with Content Understanding
Introduction 1 min: Completed
What is Content Understanding? 3 min: Completed
Analyze images with Content Understanding 5 min: Completed
Exercise - Analyze images with Content Understanding 30 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Analyze images with Content Understanding
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Content Understanding can analyze images to extract structured data, identify visual elements, and generate descriptions. You can use prebuilt analyzers for common scenarios or create custom analyzers tailored to your specific needs.
Supported image formats
Content Understanding supports the following image input types:
Expand table
Prebuilt image analyzers
Content Understanding includes prebuilt analyzers optimized for common image analysis scenarios:
prebuilt-image: General-purpose image analysis with content extraction and figure description
prebuilt-receipt: Extract vendor names, items, totals, and dates from receipt images
prebuilt-invoice: Extract invoice details including line items, amounts, and vendor information
prebuilt-idDocument: Extract information from identity documents like driver's licenses and passports
Define a field schema for images
To extract specific information from images, define a field schema that describes the data you want. Each field can use one of three extraction methods:
Expand table
Here's an example schema for analyzing product images:
JSON
Copy
Analyze an image
To analyze an image using Content Understanding, you can use the Python SDK, which you can install using pip like this:
Bash
Copy
To submit a request to the analyze endpoint with your analyzer ID and the image URL or file, you can use code similar to this example:
Python
Copy
When analysis completes, the results include the extracted content:
markdown: A text representation of the image content, useful for search and RAG scenarios
fields: Extracted field values matching your schema, each with a confidence score
source: Grounding information showing where in the image each value was found
Example response for a product image:
JSON
Copy
Use confidence scores
Each extracted field includes a confidence score from 0 to 1:
High confidence (0.9+): Value can be trusted for automated processing
Medium confidence (0.7-0.9): Consider human review for critical applications
Low confidence (<0.7): Recommend manual verification
Use confidence scores to build automation workflows that route low-confidence extractions to human reviewers while processing high-confidence results automatically.
Tips for better image analysis
Image quality matters: Higher resolution images produce more accurate extractions
Lighting and contrast: Ensure text and visual elements are clearly visible
Single focus: Images with one clear subject yield better results than cluttered scenes
Consistent orientation: Upright images are processed more reliably than rotated ones
Content Understanding's image analysis capabilities enable you to transform visual content into structured, actionable data for document processing, inventory management, quality inspection, and many other business scenarios.
Next unit: Exercise - Analyze images with Content Understanding
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
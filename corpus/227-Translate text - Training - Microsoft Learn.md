> Source: https://learn.microsoft.com/en-gb/training/modules/translate-text-speech/3-azure-translator

Translate text - Training | Microsoft Learn
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
Develop natural language solutions in Azure
Translate text and speech with Microsoft Foundry Tools
Learn
Training
Browse
Develop natural language solutions in Azure
Translate text and speech with Microsoft Foundry Tools
Read in English Add to Collections Add to Plans
Unit 3 of 7
Translate text and speech with Microsoft Foundry Tools
Introduction 1 min: Completed
Translation in Microsoft Foundry 3 min: Completed
Translate text 5 min: Completed
Translate speech 5 min: Completed
Exercise - Translate text and speech 30 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Translate text
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Azure Translator in Foundry Tools provides an API for translating text between over 90 supported languages. With Azure Translator you can:
Translate or transliterate text using the default translation model or a large language model (LLM).
Translate documents, synchronously or asynchronously, while maintaining document structure.
Use custom translation models to translate domain-specific terms.
We'll focus on the text translation API in this module. You can find out more about the full range of Azure Translator capabilities in the Azure Translator in Foundry Tools documentation.
Use Azure Translator in the Microsoft Foundry portal
You can explore Azure Translator in the Microsoft Foundry portal, where there are playgrounds for text translation and document translation. 
The Foundry portal is a great way to experiment with Azure translator, comparing results from the default model with those from LLMs, and viewing sample code to use the translator from your own client applications.
Use Azure Translator in application code
You can use the REST API to call Azure Translator functions, or you can write code in your preferred language by using one of the supported SDKs; which include:
Azure Translator Text Translation Client for Python
Azure Translator Text Translation Client for Microsoft .NET
Azure Translator Text Translation Client for Java
Azure Translator Text Translation Client for JavaScript
Connect to an Azure Translator resource
Azure Translator APIs are served through REST endpoints, to which your client must make an authenticated connection. The endpoint can be:
The Azure Translator global endpoint: api.cognitive.microsofttranslator.com
Azure Translator regional endpoints: These endpoints include api-nam.cognitive.microsofttranslator.com , api-apc.cognitive.microsofttranslator.com , and api-eur.cognitive.microsofttranslator.com
Foundry resource endpoints: {foundry-resource-name}.cognitiveservices.azure.com/
You can connect a client to a specific endpoint, or you can connect by specifying the region in which your resource is provisioned. For example, you could use either of the techniques shown in the following code sample to connect to Azure Translator using your Foundry API key for authentication:
Python
Copy
Tip
For more information about the TextTranslationClient constructor, see the Azure Translator Python SDK documentation.
Determine available languages
Azure Translator supports over 90 languages. In some cases, you may want to provide users with a list of available languages for translation; as shown in the following example code:
Python
Copy
The results include the name and ISO code for each language:
Copy
Tip
For more information about the get_supported_language method, see the Azure Translator Python SDK documentation.
Translate text
To translate text from a source language to one or more target languages, use the translate method.
Source text is passed into the method as a list of InputTextItem objects, each containing a text string to be translated.
You can optionally specify a from_language parameter with the ISO code for the source language (for example, "en"); or you can omit this parameter to have Azure Translator automatically detect the source language.
Target languages as specified as a list of language codes in the to_language parameter - Azure Translator will return a translation for each valid language code.
The following example translates two text inputs in different unspecified languages into French ( fr) and English ( en):
Python
Copy
The output from this code shows the detected source languages as Spanish ( es) and Japanese ( ja):
Copy
Tip
For more information about the translate method, see the Azure Translator Python SDK documentation.
Transliterate text
The Japanese text in the previous example is written using Hiragana script, so rather than translate it to a different language, you may want to transliterate it to a different script - for example to render the Japanese words in Latin script (as used by English language text).
To accomplish this, we can submit the Japanese text to the transliterate method with a from_script parameter of Jpan and a to_script parameter of Latn, like this:
Python
Copy
This code example produces the following result:
Copy
Tip
For more information about the transliterate method, see the Azure Translator Python SDK documentation.
Next unit: Translate speech
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
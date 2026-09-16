> Source: https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/5-search-index

Search an index - Training | Microsoft Learn
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
Unit 5 of 9
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
Search an index
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The index is the searchable result of the indexing process. It consists of a collection of JSON documents, with fields that contain the values extracted during indexing. Client applications can query the index to retrieve, filter, and sort information. 
Each index field can be configured with the following attributes:
key: Fields that define a unique key for index records.
searchable: Fields that can be queried using full-text search.
filterable: Fields that can be included in filter expressions to return only documents that match specified constraints.
sortable: Fields that can be used to order the results.
facetable: Fields that can be used to determine values for facets (user interface elements used to filter the results based on a list of known field values).
retrievable: Fields that can be included in search results ( by default, all fields are retrievable unless this attribute is explicitly removed).
Full-text search
While you could retrieve index entries based on simple field value matching, most search solutions use full-text search semantics to query an index.
Full-text search describes search solutions that parse text-based document contents to find query terms. Full-text search queries in Azure AI Search are based on the Lucene query syntax, which provides a rich set of query operations for searching, filtering, and sorting data in indexes. Azure AI Search supports two variants of the Lucene syntax:
Simple - An intuitive syntax that makes it easy to perform basic searches that match literal query terms submitted by a user.
Full - An extended syntax that supports complex filtering, regular expressions, and other more sophisticated queries.
Client applications submit queries to Azure AI Search by specifying a search expression along with other parameters that determine how the expression is evaluated and the results returned. Some common parameters submitted with a query include:
search - A search expression that includes the terms to be found.
queryType - The Lucene syntax to be evaluated ( simple or full).
searchFields - The index fields to be searched.
select - The fields to be included in the results.
searchMode - Criteria for including results based on multiple search terms. For example, suppose you search an index of travel-related documents for comfortable hotel. A searchMode value of Any returns documents that contain "comfortable", "hotel", or both; while a searchMode value of All restricts results to documents that contain both "comfortable" and "hotel".
Query processing consists of four stages:
Query parsing. The search expression is evaluated and reconstructed as a tree of appropriate subqueries. Subqueries might include term queries (finding specific individual words in the search expression - for example hotel), phrase queries (finding multi-term phrases specified in quotation marks in the search expression - for example, "free parking"), and prefix queries (finding terms with a specified prefix - for example air*, which would match airway, air-conditioning, and airport).
Lexical analysis - The query terms are analyzed and refined based on linguistic rules. For example, text is converted to lower case and nonessential stopwords (such as "the", "a", "is", and so on) are removed. Then words are converted to their root form (for example, "comfortable" might be simplified to "comfort") and composite words are split into their constituent terms.
Document retrieval - The query terms are matched against the indexed terms, and the set of matching documents is identified.
Scoring - A relevance score is assigned to each result based on a term frequency/inverse document frequency (TF/IDF) calculation.
Tip
For more information about querying an index, and details about simple and full syntax, see Query types and composition in Azure AI Search in the Azure AI Search documentation.
It's common in a search solution for users to want to refine query results by filtering and sorting based on field values. Azure AI Search supports both of these capabilities through the search query API.
Filtering results
You can apply filters to queries in two ways:
By including filter criteria in a simple search expression.
By providing an OData filter expression as a $filter parameter with a full syntax search expression.
You can apply a filter to any filterable field in the index.
For example, suppose you want to find documents containing the text London that have an author field value of Reviewer.
You can achieve this result by submitting the following simple search expression:
Copy
Alternatively, you can use an OData filter in a $filter parameter with a full Lucene search expression like this:
Copy
Note
OData $filter expressions are case-sensitive!
Filtering with facets
Facets are a useful way to present users with filtering criteria based on field values in a result set. They work best when a field has a small number of discrete values that can be displayed as links or options in the user interface.
To use facets, you must specify facetable fields for which you want to retrieve the possible values in an initial query. For example, you could use the following parameters to return all of the possible values for the author field:
Copy
The results from this query include a collection of discrete facet values that you can display in the user interface for the user to select. Then in a subsequent query, you can use the selected facet value to filter the results:
Copy
Sorting results
By default, results are sorted based on the relevancy score assigned by the query process, with the highest scoring matches listed first. However, you can override this sort order by including an OData orderby parameter that specifies one or more sortable fields and a sort order ( asc or desc).
For example, to sort the results so that the most recently modified documents are listed first, you could use the following parameter values:
Copy
Tip
For more information about using filters, see Filters in Azure AI Search in the Azure AI Search documentation.
Next unit: Persist extracted information in a knowledge store
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
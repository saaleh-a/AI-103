> Source: https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/2-prompt-engineering

Optimize model output with prompt engineering - Training | Microsoft Learn
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
Unit 2 of 8
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
Optimize model output with prompt engineering
Completed 100 XP
9 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The most accessible way to optimize a model's performance is through prompt engineering. Prompt engineering is the process of designing and refining prompts to improve the quality, accuracy, and relevance of the responses a language model generates. It requires no additional infrastructure or training data, and you can start experimenting immediately.
Understand prompt components
When you interact with a language model, the quality of your question directly influences the quality of the response. A well-constructed prompt helps the model understand what you need and generate a more useful answer.
Prompts for chat completion models typically include the following components:
System message: Instructions that define the model's behavior, role, and constraints.
User message: The question or input from the user.
Assistant message: Previous model responses, used in multi-turn conversations.
Examples: Sample input/output pairs that demonstrate the expected response format.
How you structure and combine these components determines how effectively the model responds.
Design effective system messages
A system message is a set of instructions you provide to the model to guide its responses. System messages typically appear first in the conversation and act as the highest-level set of instructions. You use them to:
Define the assistant's role and boundaries.
Set the tone and communication style.
Specify output formats, such as JSON or bullet points.
Add safety and quality constraints for your scenario.
A system message can be as simple as:
text
Copy
Or it can include detailed rules and formatting requirements. For example, the travel agency's chat application could use:
text
Copy
Important
A system message influences the model but doesn't guarantee compliance. You should test and iterate on your system messages, and layer them with other mitigations like content filtering and evaluation.
When designing a system message, follow this checklist:
Start with the assistant's role: State the role and the expected outcome for a typical request.
Define boundaries: List the topics, actions, and content types the assistant should avoid.
Specify the output format: If you need a specific format, state it plainly and keep it consistent.
Add a "when unsure" policy: Tell the model what to do when the user's request is ambiguous, out of scope, or when the model lacks information.
Apply prompt patterns
Effective prompts use patterns that help the model produce better responses. Here are some common patterns you can use:
Persona pattern
Instruct the model to take on a specific perspective or role. For example, asking the model to respond as a seasoned marketing professional produces different results than using no persona at all.
Expand table
Format template pattern
Provide a template or structure in your prompt to get output in a specific format. For example, if you need a structured response about a hotel:
text
Copy
This pattern ensures consistent, organized responses that are easy to parse in your application.
Chain-of-thought pattern
Ask the model to explain its reasoning step by step. This technique, called chain of thought, reduces the chance of inaccurate results and makes it easier to verify the model's logic.
For example, instead of asking "Which hotel is best for a family of four?", you can prompt:
text
Copy
A related technique is to break the task down into explicit sub-steps before the model responds, rather than asking it to reason through everything at once. For example, you might first ask the model to extract key facts from a passage, and then in a follow-up prompt ask it to answer a question based on those facts. Decomposing the work this way reduces errors on complex, multi-part tasks.
Note
Chain-of-thought prompting is a technique for non-reasoning models. Reasoning models like o-series models handle step-by-step logic internally.
Few-shot learning pattern
Provide one or more examples of the desired input and output to help the model identify the pattern you want. This technique is called few-shot learning (or one-shot for a single example). When no examples are provided, it's called zero-shot learning.
For example, to classify customer inquiries:
text
Copy
The model learns the classification pattern from the examples and correctly completes the last entry.
Use clear syntax and delimiters
When your prompt includes multiple sections — such as instructions, source text, and examples — use delimiters like --- , Markdown headings, or XML tags to separate them. Clear boundaries help the model distinguish instructions from content and reduce the chance of misinterpretation.
Tip
Models can be susceptible to recency bias, meaning text near the end of a prompt can have more influence than text at the beginning. If the model isn't following your instructions consistently, try repeating the key instruction at the end of the prompt.
Configure model parameters
Beyond the text of your prompts, you can adjust model parameters that control how the model generates responses:
Temperature: Controls the randomness of the output. A higher value (for example, 0.7) produces more creative and varied responses, while a lower value (for example, 0.2) produces more focused and deterministic responses. Use lower values for factual tasks and higher values for creative ones.
Top_p: Also controls randomness, but in a different way. It limits the model to a subset of the most probable next tokens. For example, a top_p of 0.9 means the model considers only the top 90% of probable tokens.
Tip
The general recommendation is to adjust either temperature or top_p, not both at the same time.
For the travel agency scenario, you might use a low temperature (0.2) when answering factual questions about hotel amenities, but a higher temperature (0.7) when generating creative travel itinerary suggestions.
When prompt engineering is enough
Prompt engineering is the right starting point for any model optimization effort. It's effective when you need to:
Guide the model's tone, format, and behavior.
Provide specific instructions for a task.
Quickly iterate on results without infrastructure changes.
Keep costs low, as no additional training or data storage is required.
However, prompt engineering has limits. If the model doesn't have access to the information it needs (like your company's hotel catalog), or if it consistently fails to maintain a specific behavior despite detailed instructions, you need to consider additional strategies.
Next unit: Ground your model with Retrieval Augmented Generation
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
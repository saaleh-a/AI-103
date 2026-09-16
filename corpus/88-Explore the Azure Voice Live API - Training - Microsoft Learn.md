> Source: https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/2-voice-live-api

Explore the Azure Voice Live API - Training | Microsoft Learn
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
Develop an Azure Speech Voice Live Agent in Microsoft Foundry
Learn
Training
Browse
Develop natural language solutions in Azure
Develop an Azure Speech Voice Live Agent in Microsoft Foundry
Read in English Add to Collections Add to Plans
Unit 2 of 7
Develop an Azure Speech Voice Live Agent in Microsoft Foundry
Introduction 1 min: Completed
Explore the Azure Voice Live API 5 min: Completed
Explore the AI Voice Live client library for Python 5 min: Completed
Create a Voice Live agent 5 min: Completed
Exercise - Develop a Voice Live agent 30 min: Completed
Module assessment 5 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Explore the Azure Voice Live API
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
The Voice live API enables developers to create voice-enabled applications with real-time, bidirectional communication. This unit explores its architecture, configuration, and implementation.
Key features of the Voice Live API
The Voice live API provides real-time communication using WebSocket connections. It supports advanced features such as speech recognition, text-to-speech synthesis, avatar streaming, and audio processing.
JSON-formatted events manage conversations, audio streams, and responses.
Events are categorized into client events (sent from client to server) and server events (sent from server to client).
Key features include:
Real-time audio processing with support for multiple formats like PCM16 and G.711.
Advanced voice options, including OpenAI voices and Azure custom voices.
Avatar integration using WebRTC for video and animation.
Built-in noise reduction and echo cancellation.
Note
Voice Live API is optimized for Microsoft Foundry resources. We recommend using Microsoft Foundry resources for full feature availability and best Microsoft Foundry integration experience.
For a table of supported models and regions, visit the Voice Live API overview.
Connect to the Voice Live API
The Voice live API supports two authentication methods: Microsoft Entra (keyless) and API key. Microsoft Entra uses token-based authentication for a Microsoft Foundry resource. You apply a retrieved authentication token using a Bearer token with the Authorization header.
For the recommended keyless authentication with Microsoft Entra ID, you need to assign the Cognitive Services User role to your user account or a managed identity. You generate a token using the Azure CLI or Azure SDKs. The token must be generated with the https://ai.azure.com/.default scope, or the legacy https://cognitiveservices.azure.com/.default scope. Use the token in the Authorization header of the WebSocket connection request, with the format Bearer <token> .
For key access, an API key can be provided in one of two ways. You can use an api-key connection header on the prehandshake connection. This option isn't available in a browser environment. Or, you can use an api-key query string parameter on the request URI. Query string parameters are encrypted when using https/wss.
Note
The api-key connection header on the prehandshake connection isn't available in a browser environment.
WebSocket endpoint
The endpoint to use varies depending on how you want to access your resources. You can access resources through a connection to the Foundry project when implementing an agent, or through a direct connection to a model.
Project connection: The endpoint is wss://<your-ai-foundry-resource-name>.services.ai.azure.com/voice-live/realtime?api-version=2025-10-01
Model connection: The endpoint is wss://<your-ai-foundry-resource-name>.cognitiveservices.azure.com/voice-live/realtime?api-version=2025-10-01 .
The endpoint is the same for all models. The only difference is the required model query parameter, or, when using the Agent service, the agent_id and project_id parameters.
Voice Live API events
Client and server events facilitate communication and control within the Voice live API. Key client events include:
session.update : Modify session configurations.
input_audio_buffer.append : Add audio data to the buffer.
response.create : Generate responses via model inference.
Server events provide feedback and status updates:
session.updated : Confirm session configuration changes.
response.done : Indicate response generation completion.
conversation.item.created : Notify when a new conversation item is added.
For a full list of client/server events, visit Voice live API Reference.
Note
Proper handling of events ensures seamless interaction between client and server.
Configure session settings for the Voice live API
Often, the first event sent by the caller on a newly established Voice live API session is the session.update event. This event controls a wide set of input and output behavior. Session settings can be updated dynamically using the session.update event. Developers can configure voice types, modalities, turn detection, and audio formats.
Example configuration:
JSON
Copy
Tip
Use Azure semantic VAD for intelligent turn detection and improved conversational flow.
Implement real-time audio processing with the Voice live API
Real-time audio processing is a core feature of the Voice live API. Developers can append, commit, and clear audio buffers using specific client events.
Append audio: Add audio bytes to the input buffer.
Commit audio: Process the audio buffer for transcription or response generation.
Clear audio: Remove audio data from the buffer.
Noise reduction and echo cancellation can be configured to enhance audio quality. For example:
JSON
Copy
Note
Noise reduction improves VAD accuracy and model performance by filtering input audio.
Integrate avatar streaming using the Voice live API
The Voice live API supports WebRTC-based avatar streaming for interactive applications. Developers can configure video, animation, and blendshape settings.
Use the session.avatar.connect event to provide the client's SDP offer.
Configure video resolution, bitrate, and codec settings.
Define animation outputs such as blendshapes and visemes.
Example configuration:
JSON
Copy
Tip
Use high-resolution video settings for enhanced visual quality in avatar interactions.
Next unit: Explore the AI Voice Live client library for Python
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
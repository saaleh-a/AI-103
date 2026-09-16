> Source: https://learn.microsoft.com/en-gb/training/modules/generate-video-with-foundry/3-generate-video-from-prompt

Generate video from a prompt - Training | Microsoft Learn
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
Generate videos with Microsoft Foundry
Learn
Training
Browse
Generate videos with Microsoft Foundry
Read in English Add to Collections Add to Plans
Unit 3 of 7
Generate videos with Microsoft Foundry
Introduction 1 min: Completed
Deploy a video generating model 3 min: Completed
Generate video from a prompt 5 min: Completed
Generate video in Python 5 min: Completed
Exercise - Generate video with Sora 2 in Microsoft Foundry 30 min: Completed
Module assessment 3 min: Completed
Summary 1 min: Completed
Achievements
Ask Learn Ask Learn
Generate video from a prompt
Completed 100 XP
5 minutes
Choose your preferred content format [x] video
Video [-] text Text and images
Tip
See the Text and images tab for more details!
Once your Sora 2 model is deployed, you can start generating videos. Video generation is an asynchronous process—you submit a request with your prompt and video settings, then retrieve the completed video when it's ready.
Video generation parameters
Before crafting your prompt, understand the API parameters that control your video output:
Expand table
Tip
The model follows instructions more reliably in shorter clips. For best results, consider generating two 4-second clips and stitching them together rather than a single 8-second clip.
Test video generation in the playground
After deploying the Sora 2 model, you can test it using the Video playground in Microsoft Foundry portal: 
Navigate to your deployed Sora 2 model in the Foundry portal.
Select the Playground tab to access the video generation interface.
Enter your prompt into the text box describing the video you want to generate.
Configure video settings such as resolution and duration.
Select Generate to start video creation.
Video generation typically takes 1 to 5 minutes depending on your settings. When the AI-generated video is ready, it appears on the page.
Note
The content generation APIs include a content moderation filter. If Azure OpenAI recognizes your prompt as harmful content, it won't return a generated video. For more information, see Content filtering.
In the video playground, you can also view cURL code samples that are prefilled according to your settings. Select the View code button at the top of the playground to access sample code you can use in your applications.
Writing effective prompts
Think of prompting like briefing a cinematographer. The more specific you are about what the shot should achieve, the more control and consistency you'll get. However, leaving some details open can lead to creative, unexpected results.
Prompt anatomy
A clear prompt describes a shot as if you were sketching it onto a storyboard:
Camera framing: Specify the shot type (wide, medium, close-up) and angle
Subject description: Anchor your subject with distinctive details
Action: Describe movement in beats—small steps, gestures, or pauses
Lighting and palette: Set the mood with lighting direction and color anchors
Style: Establish the aesthetic early (for example, "1970s film" or "handheld documentary")
Weak vs. strong prompts
Expand table
Example prompt
Here's an example of a well-structured prompt:
text
Copy
This prompt works because:
"90s documentary" sets the style, so the model chooses appropriate camera, lighting, and color
"old Swedish man sits in a study" describes subject and setting while allowing creative interpretation
The dialogue gives the model specific words to sync with the character
Using reference images
For more control over composition and style, use the input_reference parameter to provide a visual reference. The model uses the image as an anchor for the first frame, while your prompt defines what happens next.
Requirements for reference images:
The image resolution must match the target video size ( 1280x720 or 720x1280 )
Supported formats: JPEG, PNG, WebP
Remixing existing videos
The remix feature lets you modify specific aspects of an existing video while preserving its core elements—scene transitions, visual layout, and overall structure. This is useful for making targeted adjustments without regenerating from scratch.
To remix a video:
Generate a video and note its video ID from the completed job
Call the remix endpoint with the original video ID and an updated prompt
Describe only the changes you want—keep modifications focused
For best results:
Limit changes to one clearly articulated adjustment
Be specific about what to change: "same shot, switch to 85mm lens" or "same lighting, new palette: teal, sand, rust"
Narrow, precise edits retain greater fidelity to the source material
Tips for better results
Keep it simple: Each shot should have one clear camera move and one clear subject action
Use beats for timing: Instead of "actor walks across the room," try "actor takes four steps to the window, pauses, and pulls the curtain"
Be consistent: Reuse phrasing for characters across shots to maintain continuity
Iterate: Small changes to camera, lighting, or action can shift outcomes dramatically—treat each generation as a creative variation
Video generation with Sora 2 is a collaborative process. You provide direction, and the model delivers creative variations. Be prepared to experiment—sometimes the second or third generation is the best one.
Next unit: Generate video in Python
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
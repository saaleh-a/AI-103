> Source: https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/3-implement-agent-executor

 Skip to main content This browser is no longer supported.
 Upgrade to Microsoft Edge to take advantage of the latest features, security updates, and technical support. 
 Download Microsoft Edge  More info about Internet Explorer and Microsoft Edge Read in English  
 Achievements 
Implement an agent executor
Completed  
5 minutes
Tip
See the Text and images tab for more details!
The Agent Executor is a core component of an A2A agent. It defines how your agent processes incoming requests, generates responses, and communicates with clients or other agents. Think of it as the bridge between the A2A protocol and your agent's specific business logic.
Understand the Agent Executor
The  AgentExecutor  interface handles all incoming requests sent to your agent. It receives information about the request, processes it according to the agent’s capabilities, and sends responses or events back through a communication channel.
Key responsibilities:
Execute tasks requested by users or other agents.
Stream responses or send individual messages back to the client.
Handle task cancellation if supported.
Implement the interface
An Agent Executor typically defines two primary operations:
Execute
Processes incoming requests and generates responses.
Accesses request details (for example, user input, task context).
Sends results back via an event queue, which may include messages, task updates, or artifacts.
Cancel
Handles requests to cancel an ongoing task.
May not be supported for simple agents.
The executor uses the RequestContext to understand the incoming request and an EventQueue to communicate results or events back to the client.
Request handling flow
Consider a "Hello World" agent workflow:
The agent has a small helper class that implements its core logic (for example, returning a string).
The executor receives a request and calls the agent’s logic.
The executor wraps the result as an event and places it on the event queue.
The routing mechanism sends the event back to the requester.
For cancellation, a basic agent might only indicate that cancellation isn't supported.
The Agent Executor is central to making your A2A agent functional. It defines how the agent executes tasks and communicates results, providing a standardized interface for clients and other agents. Properly implemented executors enable seamless integration and collaboration in multi-agent workflows.
Feedback
 Was this page helpful? 
No  
 Need help with this topic? 
 Want to try using Ask Learn to clarify or guide you through this topic? 
AI Disclaimer
Previous Versions
Blog
Contribute
Privacy
Consumer Health Privacy
Terms of Use
Trademarks
© Microsoft 2026
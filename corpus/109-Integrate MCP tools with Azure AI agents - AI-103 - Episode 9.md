> Source: https://www.youtube.com/watch?v=pQ9yEEcXNeE

[ Music ]
ROB FOULKROD: Imagine
if your tools
and agents spoke
the same language.
A single open protocol so agents
and tools could just find
each other and work together.
That's the promise of model
context protocol or MCP.
And it's reshaping how we
think about agent tooling.
I'm Rob Foulkrod, lead
technical trainer at Microsoft.
And this session is
about integrating MCP tools
with Azure AI agents.
We'll begin with how MCP
handles tool discovery.
Then we'll walk through
setting up an MCP client
and expose tools to an agent.
Let's dive in.
So in the earlier example
we built an agent
that really exposed three tools.
All right.
And those three tools we had
to build ourselves a function.
All right?
So there was the
function itself.
Right now we're
just saying a tool.
But we had to build
the function.
And then we had to create.
We had to build an
integration where we had
to describe the function itself
and then describe all the
parameters that were going
to be passed in
to that function.
And each one of those parameters
also needed its own description.
We built that as a little
JSON document and we did
that three different times.
Right? And so this idea
of requiring manual setup
so manual setup in
terms of descriptives.
Then once we passed those
three tools in we repeated
with a little bit more
work in the dispatch
where the agent passed
back an object that needed
to then be conveyed to
the underlying function.
So we wrote this code that
handled that exchange.
And that was really
only for three tools.
It's not unheard
of for some agents
to have 10/20/40/50 tools.
And that's a lot of
baggage that comes along
with building those
tools in to your agent.
One of the advents lately has
been this idea from Anthropic
which is the MCP or
model context protocol.
Model context protocol allows
us to build an MCP server
and that server may be remote.
That server may be on
the local machine,
but we build an MCP server
and that server has a menu,
has a catalog of the
tools that are available.
It has the descriptions.
It can handle the invocation of
those functions on our behalf.
And the agent can dynamically
wire up that MCP server and say,
"Hey, looks like I need to
know what you do for this.
Get back that large
menu of options
and then dynamically
invoke them."
That kind of takes us out of
the middle man equivalent
that we had when we were
over here building all
of that manual setup.
So there's a number of ways
of building MCP servers.
Each platform, Java, Python,
C#, they're all going
to have a number of prebuilt MCP
servers that you can use to kind
of start your application.
But they're going to come
down to having some sort
on the server of some
sort of tool definition.
Some way of saying this
function here can be invoked
with these parameters
and these are the values
that are necessary.
Then an MCP client which could
be your agent can then establish
a session and start that
session by saying, "Hey,
may I have the collection of
tools that are available?"
Gets back that list and that
list is now you can consider it
part of the instruction set.
It's part of the context
that that agent has.
And when it starts to reason
over those options it
can then identify, "Hey,
I need to then invoke
this function."
And so that tool call can
be made automatically
by the MCP client.
While an MCP client its
job is to list the tools
and to invoke those tool calls,
they could technically
be made by anything.
So at some point you're going
to build your agent and in
that agent you're going
to add a collection
of one or more MCP tools.
And so when you're building the
agent itself you will register
the MCP client.
We will register that
tool as an option.
In this exercise coming
up we will reference
a MCP server a couple
of different ways.
First we will hand a remote
URL for remote MCP server
and then we will work with one
locally, handle negotiation
between the two, and
ensure that those work.
Let's take a look.
So up to this point
we've done kind
of the same old same old again.
We have a Foundry
project out there.
That project has a
couple of models
that are already deployed.
I am going to grab the
project endpoint here.
We'll need that momentarily.
We'll chuck that on
to the clipboard
so we have it for future use.
And let's take a
look at our code.
Well, let's get this one right
out of the way before I
lose it on the clipboard.
We're going to open up our
environment file here.
We're going to drop in our
project endpoint, the agent.
We will remember to save.
And we're using the same
GPT 4.1 we've been using
for the past N number
of demos at this point.
But again we're
doing this twofold.
The first one is through
this agent file.
And this is going to
invoke a remote MCP agent,
a remote MCP server.
So a couple of things
that we are bringing
in to make all of this work.
This we have seen a few times
already, the AI project client.
What is changing a little
bit is a couple of these.
We're bringing in another
type here, the MCP tool.
This is going to be the wrapper
around the description
of the tool.
But we're also reluctant in many
cases to let agents just go.
So there will be some
sort of requirement
to approve the use
of these MCP tools.
So one of the things
that we will get
or we will need is the
MCP approval response.
Those will be two parts of
what we are putting together
in this example.
Again some of this we have
seen time and time again.
We are using the default
Azure credential
as our mechanism
of authenticating.
We are building an
AI project client,
giving that a little variable
name here of project client.
And then from project client
we are getting our hands
on the Open AI client.
All of those will be
disposed, will be cleaned
up at the end of the code base.
But for the first piece
right here we are bringing
in our MCP rule.
So using the MCP tool we are
going to give it a local name,
API spec. We will give it
the URL where to find it.
In this case the one that we're
using is from Microsoft Learn.
Go ahead and call in to learn
to get up to date specs
or API calls or
internal documentation
from the Microsoft realm.
And you'll notice right here
that we are asking
very specifically here
to require approval.
So not just blindly going out
and consuming all of these.
No YOLO mode going on.
In this particular scenario
we will require some form
of approval.
So we've defined this tool
much like in earlier examples.
We defined individual
function tools.
Here we're defining
the MCP tool.
When we go build our agent,
agent create version,
we'll give it a name.
My agent is fine.
We'll give it a definition.
There's the model.
Here's the instructions.
And then just the one tool.
Right? That MCP tool
and all of that.
Then we will start
our conversation.
In the conversation here
get a response back.
Open AI responses create.
Pass a net conversation ID.
And we're going to
just ask directly.
In the past we've been
prompting ourselves.
Here we are just going to
very quickly build a prompt.
Give me the Azure CLI commands
to create an Azure container app
with a managed identity.
So that should be somewhere
in the documentation.
When we go to run this that
will be auto prompted in there.
Then the response will come
back if the response type is
that of an MCP approval request.
So in this scenario here
the agent has determined
that we're going to call
in to this MCP server.
We will then be asked do
we want to approve it.
In our case the name
will be coming back.
API specs, as you recall.
Up at the top we had labeled
our MCP server API specs.
And it's very likely that you'll
have multiple tools so we need
to be able to clarify which
one we're talking about.
So if it is API specs
then we're going
to simulate the
approval process.
But here your application
can then prompt the user.
We'll give them the description.
This is what they're
looking for.
This is what they're
trying to do.
Do you approve its use?
If the answer is yes then
we will create an MCP
approval response.
MCP approval response.
The approval is true.
And associate it back with
the item ID that we got back.
At this point then
get a response.
Create, passing in that
ID, and we should be able
to then get the results running.
So let's go take a look.
Here we are in the console.
We will do Python.
We will run the agent.
Actually we'll run the right
directory [inaudible].
We are not.
There we go.
Let's go one directory deeper.
All right.
Quick edit here.
We're going to go back to just
before I opened up the console
and we'll be in the right
directory this time.
We'll be all set.
All right.
So I'm going to
pause [inaudible].
All right.
So let's take a look
at this running.
We're going to open
up the terminal here
and let's give this
a quick little run.
So we'll go Python and agent.
There we go.
And so we should say, "Hey,
we've made contact
with Foundry."
Then we will establish a prompt.
There we go.
We now have our agent
up and running.
Agent has been created
inside of Foundry.
Then you saw that we had
that create conversation.
Now we have a server side
conversation going on.
We're just giving
that conversation ID.
And then it asks, A, to
answer your question,
which again our question
here was, "CLI command
to create an Azure
container app," to answer
that question we're going to
need to invoke this MCP server.
So we were asked for a response.
So we then gave an MCP approval
response with a value of true.
That was sent back to the agent.
We're saying, "Yes.
You may do that."
The agent then invoked that and
then got a response for us.
And so here we see
our CLI commands.
AZ container app create.
AZ container app
identity assigned.
We've got our managed identity.
And a reference to where
that information was found.
So nice little start
here to being able
to invoke a very specific tools.
And while there are lots of
prebuilt MCP servers available
to us, not everything
that we're going
to want will already have
an MCP wrapper around it.
So there will be a
time in which we need
to build our own servers.
And whether you're doing that,
obviously we have a
Python example here.
There are libraries in
dot net and for node
that also have
these capabilities.
Here we're going to take a look
at building our own MCP server.
And so in this case we're
bringing in Python's fast MCP,
building fast MCP, giving
it the name of inventory.
And inside of inventory we
have a selection of tools.
And so the first tool here
is get inventory level.
The values it's fine.
Right? We will return a
dictionary here of values.
We really don't care what
the underlying code is,
but we've got our
inventory levels here.
We have our weekly sales
stats that are available.
So these could be wrappers
around functions.
These could be wrappers
around other API calls.
But our servers is
pretty straightforward.
Build a server.
And then get that
server up and running.
And now let's take a look
at what is required
to invoke our server.
So from our client app we
first need to do a little bit
of legwork because that
server is a standalone piece.
So what we're going to be
doing here is we're going
to be writing just a little
bit of code to start
that server up in a process.
Right? In a lot of
other applications
like node you would start
your node application
or you would start a separate
C# project or a process going.
So here we're saying,
"Hey, I need to start
up the server process
that we have."
And then grab a session
from that MCP server.
From that we are grabbing
a list of tools and saving
that so we have a nice
easy collection of tools.
So building our own.
Starting up the server, doing
a quick little invocation
of what tools do we
have available to us,
and then keeping that
session up and going.
Then let's build the agent now
that we've got that information.
And this we have seen
a bunch of times.
Default. Azure credentials.
Building our project.
Getting our Open AI client.
Those are all the same.
We will go to that
session and ask.
We saw an earlier
session to list tools.
Get back to the MCP tools that
are going to be responsible.
And then build those in to
the function tool wrappers.
Creating a dictionary of
each one of those tools.
And then we have to
build the association
with the functions [inaudible].
So in the previous example
the agent could invoke
that URL directly.
Here this MCP server
resides on our machine.
There's no connection
between that remote agent
and our local machine.
So we have to do similar to
the previous demonstration.
We have to build a
wrapper around each one
of the tools as a function tool.
So here we're going through
and mapping each one
of the MCP tools as
a function call.
And then we're passing in that
array here of MCP functions
which are just an array
of function tools.
The rest we've seen before.
At definition we're
specifying the models,
specifying some instructions
here about how we're going
to be handling inventory.
As we've seen before,
create a conversation.
Then we will have a little
prompting scenario here
where we will go back and
forth with the system.
So should be able
to give this a run.
A previous example here.
We'll start out the client.
Now in doing so remember
the very first few lines
of the client also started the
server for us so we don't have
to do that separately.
That should be running for us.
We'll get that up and going.
Now we've connected up
with the tools themselves.
We discovered those
two functions
that were available
inside the MCP server.
And they ask for a prompt.
And so in our prompt right here
"Show me the current inventory
levels for all products."
This should then be discovered.
There we go.
We built an auto approval very
similar to the last time.
So it did request an approval.
We automatically approved it.
And now we've got
our inventory level.
We take a look here.
We could ask follow up questions
that require a little
bit of thought.
Are there any products
that should be restocked?
And so it's then looking at
our inventory level here
of six moisturizer and eight
shampoo and nine skin serum
with our weekly sales.
Looks like those are
lower than what we need.
Ask another thoughtful question.
Do you have anything that
we should probably put
on clearance?
Anything that isn't
selling incredibly well?
And so here you see we've got
weekly sales of three and four
on the body spray
and our cleanser
and we've got a pretty
high inventory.
So let's kind of offload
those a little bit.
And then again follow up
questions like, "Hey,
what's the bestseller
of this week?"
Again it's calling in to those
tools, evaluating the responses.
And so we can see a
response coming back.
All right.
So here we have seen really two
ways of introducing more tools.
MCP server that was remote like
the Microsoft Learn example
or here where we've built
a MCP server that is local
to our machine and we have
shared that with our agent.
Later on we will see there's
a little bit of work having
to be done to manage the MCP
functions we will see later
on in this class and tools to
simplify that a little bit.
All right.
MCP's pretty powerful.
There's a lot that
we can do with it.
Let's do a quick little review
here and we'll take a look
at a couple other options.
But first what role does
the MCP server play
in the MCP tool integration?
Take a look real quick.
Right. The server's the one
that hosts those definitions
and makes them available for
discovery to the client.
And then how does MCP client
retrieve the available tools?
In here there is typically a
tool list call that is going
to be made to get
that tool catalog.
All right.
So we have seen a few things in
this really important section.
We've seen that MCP
standardizes the tool discovery
for a host of agents.
MCP clients can use a list tools
to find the underlying catalog
of the tools that
are being provided.
And when we are using Foundry we
have a little helper function
there, this function
tool wrapper that wraps
around the MCP tools
themselves and allows us
to pass those in to Foundry.
Today we connected agents
to a whole new ecosystem
of tools using MCP.
We covered how MCP enables tool
discovery, set up a client
and server, plugged that
in to Foundry agents,
and wired up MCP
tools end to end.
I appreciate you spending
this time with me
on develop AI apps
and agents on Azure.
MCP is moving fast and I hope
the concepts and demos we work
through give you a
solid starting point.
Stay curious.
The protocols and the ecosystems
around agents are
constantly evolving.
Keep exploring and you'll
always have something new
to bring back to work.
There are many ways you can
continue your learning journey
and I invite you to search
for your next favorite topic
on Microsoft Learn
at aka.ms/learn.
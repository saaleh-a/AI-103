> Source: https://www.youtube.com/watch?v=WznrISPGx-g

[ Music ]
ROB FOULKROD: Portals
and low-code are great
for getting started, but,
when you need full control,
version control, and the
power of your favorite SDK,
it's time to drop into code.
And that's where Microsoft
Agent Framework comes in.
I'm Rob Foulkrod, Lead
Technical Trainer at Microsoft.
This session is on
developing an AI agent
with the Microsoft
Agent Framework.
We'll get oriented with what the
Microsoft Agent Framework brings
to AI agents, and then create
an AI agent with it and tools
to give that agent
real capability,
and build a working
agent end to end.
Let's get into code.
We'll get there, I promise.
But, first, before we get
directly into that code,
let's have a little
bit of background
about where we've been and
what we have in front of us.
So, when we are looking at
things like the Foundry SDK,
when we're looking
at the OpenAI SDK,
those are really targeting kind
of a relatively
single environment.
And there has been a
layer of frameworks
that have been sitting
above those frameworks.
Like you may have heard
of Semantic Kernel,
you may have heard of
AutoGen, these are frameworks
that predate Microsoft
Agent Framework.
And those are both
two frameworks
that Microsoft put forward
as this agent layer
that abstracts away the direct
call to the large language model
and gives us agentic
capabilities
to simplify what we have
had to do up to this point.
But there was always
some question like,
"Which of those two
do we go with?"
Semantic Kernel was kind of an
enterprise-ready integration.
Right? It supported C#
and Java and Python.
Right? And AutoGen was a
little bit more cutting edge.
It had some really neat agentic
workflows that were built
into it, but you
always kind of felt
like you were making some sort
of compromise between the two.
Okay, well, where we are today,
we have solved that problem by,
in essence, merging them
together into a new framework.
And that's the framework
that we have in front of us.
The Microsoft Agent Framework,
for lack of a better term,
is really replacing those two
frameworks that went before it.
It's replacing Semantic
Kernel and AutoGen.
They're still out there,
but we really see the bulk
of the new work moving forward
being done in agent framework.
As of this recording, it has
been released generally.
So it is a framework
that we can recommend
that you take a look
at going forward.
Okay? So what does it
bring to the table?
How does it help?
Well, one of the capabilities is
consistent interface for agents.
The large language models
that you've been using
for your agents, right,
we've got this agent layer,
and then we've always kind of
tucked the large language model
in there, we have a
lot more flexibility
where those large language
models come from.
We may be using maybe a local --
maybe a small language model
that's locally on our machine
or maybe we're using
something in Foundry
or some other provider.
But this abstraction
layer gives us an ability
to kind of swap those out.
Right? It also has
a chat provider.
It's using -- by default, we
are seeing a common interface
for various chat providers
so you can have a little
bit more flexibility
as we are moving from one
chat provider to the next.
Early on, we had
the conversation
of whether we should be
using the conversation API
or the responses API.
And, here, we can
kind of mitigate
that question a little bit
by having a interface
layer in between.
Another thing that we're looking
at here is the idea
of function tools.
There has been no lack of
conversation about tools
in the sessions that have
led us to this point.
But there's also been
a lot of leg work,
especially when either
MCP was running locally
or our custom tools
were running locally.
We have continually built these
scaffoldings of dispatch.
Right? Those go away when we're
looking at the agent framework,
that we can decorate
those functions
with the appropriate markers
and then the framework itself
knows how to route a call
from the large language
model from the response back
to the actual
function call itself.
Personally, I
actually was learning
on a Semantic Kernel initially
before I started writing some
things directly to
large language models.
And maybe I've been showing
that a little bit in
the presentation.
But I got really spoiled
not having to write all
of that dispatch work.
And it's nice to be back to the
agent framework where, again,
I don't have to write that,
that I can just decorate it,
say "here's the function,"
and then let the framework be
the one who does dispatch,
who does invocation for us.
Right? There are a
built-in set of tools.
You will see some direct
mirroring with some of the tools
that we've already seen
inside of Foundry.
So there's direct
representations
so that we don't have to learn
a different set of tools
if we want to get things like
file search or the web browser
or the web search tool.
Conversation management
is in place.
There are mechanisms
in there to handle
that stateful conversation
that's going back and forth.
And we have workflow
orchestration.
We saw in the very last section
that there is a workflow
inside of Foundry itself.
But it's possible
you're not in Foundry.
Right? It's possible
you're bringing agents
from somewhere else and
those agents still need
to have some sort of
workflow involved.
And we have a really
nice collection
of workflow options inside
of agent framework.
So what does it take
to put one together?
Well, the first thing
that you're going
to do is you're going to
create a Foundry project.
We've done that a
bunch of times.
Now, that's on the slide, but,
in parentheses off to the side,
it doesn't have to be.
Right? You've got flexibility
in where those agents reside.
But, if I bring us back
here, you will then set
up the connection string between
that and your application code.
We've seen the
authentication in many
of the exercises and the demos.
We have seen some mechanism of
getting some sort of credential.
We're really looking at
non-key-based authentication.
That's what we see
in there right now.
So some sort of token
provider is going
to be a necessary component.
Right? And then we're going to
use one of the providers to talk
to the underlying model.
So, in this case here, the Azure
OpenAI Responses client is one
of those providers
that could be used.
And then, from there, we can
create an agent instance.
And you can populate that agent
instance with the instructions
and the tools that
you want to supply.
So what are those tools?
Well, first and foremost,
some of the things
that we have seen inside
of Foundry continue
to be relevant here.
The code interpreter
still valid.
File search, web search, still
very easy to pass those in.
Where we start to see a nice
advantage here is when it comes
to things like those custom
functions, as we talked
about earlier, that we can
define our function with the --
in the world of Python
with the @tool decorator.
Right? That can be a
regular function out there.
It doesn't have to be anything
incredibly interesting.
We don't have to go through
the whole build it what looks
like a big JSON document
describing the descriptions
of all of the
parameters in there.
A lot of that can be inferred or
we can use the tool decorator
to supply that information.
Right? And then, once
that's in there,
we can pass that reference
in with the tools parameter.
And then we're done.
Right? As I alluded to earlier,
once the tools are registered,
then the -- while it says here
the AI agent automatically
selects, yes, that's true.
The agent says, "Hey, I need the
call," but it's then received
by the agent framework and
the agent framework does the
invocation for us, saving
us that entire step.
So it's far easier to add a
tool in there, get that up
and running, and move forward.
It's far easier to maintain
that tool than it would be
if we were keeping track
of all of the metadata
and keeping track of
all the invocation.
That's a lot of talk.
Let's go build one.
Right? So, in here, we will
go ahead and create an agent,
have a tool -- have it use
a custom tool in there
to see that, and we'll
test the application.
Let's jump in.
First and foremost,
if you have seen any
of the earlier sessions, we
have generally been starting
with having some
sort of project up
and running inside of Foundry.
So, here, I've got
demo-5661 inside of Foundry
and we have already
deployed some models.
If you were like, "Hey, how do
I deploy a model," pretty easy,
we've got little plus here.
We can go search model catalog
and deploy them from here.
Take a look at some of
the earlier sessions.
We've done that a fair amount.
I do want to grab
the project endpoint
so that we can refer
to it in our code.
So I'm going to snag
that right now.
And we're going to take a look
at our environment
variable here.
Nice and easy, grab and drop
the project endpoint in place.
You did see, let me pop that one
more time, here, in the toolkit,
we do have GPT-4.1 as our
model and the name here,
GPT-4.1, nice little match.
Nice and easy.
But then let's look at --
I'll save before I mess that
up, a little save there.
Let's look at our
agent framework code.
So let's contrast with
what we've seen before.
Some of this you will notice
here that we are bringing
in agent framework as our
main libraries in here
and we are importing Agent.
We are also importing
tool in there.
And we are importing
AzureOpenAIResponse.
So the agent framework
is not hemmed
in to a particular
set of libraries.
So we do have the
ability to say, "Hey,
I want to run a local
Foundry" or "I want to run
against Foundry" or "I want
to run against maybe one
of the Anthropic systems."
Cool, agent framework
is flexible enough
that we can have a provider
model that jumps in.
In this case, we're staying
thematic and we're staying
with the AzureOpenAIResponse
in there.
We are grabbing our
AzureCLICredential.
So just a minor
little difference
from what we've been seeing
in a number of ours.
Typically, we've been using
the AzureDefaultCredential,
which is the
fallback credential.
It's the one that has 10, 12
different token providers
and it calls each one of
those token providers in turn
until it finds one
that succeeds.
In all of our demos, it would
consistently fail until,
not that you saw it, but until
it got to the Azure CLI.
Well, in this case, we're
just saying it's Azure CLI.
This code is not going
to run if we were
to put it inside of a web app.
It simply wouldn't.
We would want the
manage identity.
But not really major in
terms of our differences.
We are grabbing the
correct information.
And we've got a
little data file here
that we're going
to be processing.
Data file here has
date, description,
and an amount in there.
We will be, quote/unquote,
"processing"
that data coming up shortly.
So just enough here so
that we can go ahead
and read that data file.
Now, we've got a couple
of functions of note.
I am going to skip over this
function here for a second
and jump into the
submitclaim function.
So one of the things that we
have seen before is the ability
to supply some sort of tools
where we will tell the agent,
"Hey, we've got these
tools available.
If you want to invoke
them, let us know."
We will -- we've written that
dispatch code in the past
where we got the direction from
the agent to run that function
and to send back its results.
Here, we have another one
of those tool functions.
In this case, we are using
an annotation on top
to say this is a tool.
You will also note in
there we are working
with the approval mode.
Many times in the
past, we have had
to give an approval
to use a tool.
Here, we are just saying
the demo never require
or maybe we know that
this is innocuous enough
that this is not such a big deal
that we have to
have an approval.
But, in this case,
never approve.
And it's really not
doing anything.
So, in this case here,
we're submitting a claim,
we are printing out
the two, the subject
and the body on the screen.
So approval not really
something we need
to stress about on this case.
but, again, this is
one of the lynch pins
that has been opened up in this.
This is the tool that we
were seeing up above.
Right? Now, for the actual
work itself let's go
into the process expense data.
We are grabbing our
credential, CLI credential.
And then we are
creating the agent.
That agent here, we are using
the AzureOpenAIResponseClient
specifying the credentials,
specifying the deployment,
specifying the project endpoint.
So now we have a
client in that agent.
We're also specifying
our instructions,
"You're an AI assistant for
expense claim submission.
At the user's request,
create an expense claim
and use the plug-in," roll
over here a little bit,
"the plug-in function to send
an email to expenses@contoso
with the subject 'Expense
Claim,' and a body
and itemized expenses
with a total."
Right? So we are telling it
how to use that function.
"Then confirm to the
user that you're done.
Don't ask for any
more information."
Okay. Right?
So that is our agent.
That's our setup work.
We've got it all local.
We could have referenced
an existing agent,
we built it locally.
Then where things get a
little bit interesting
for us is we are then adding the
input and we say here agent.run.
We'll specify the prompt
and we print its response.
Pretty straightforward.
When we keep looking, what we're
missing is that dispatch code.
In our earlier examples,
when we had local MCP,
when we had local functions,
we had to write a little brick
of code that was responsible for
coordinating between the LLM,
the agent, and our
internal code.
And we got messages
that said, "Hey,
I need to invoke this function."
And we wrote dispatch code to
say, "Well, if you need this,
I'll call this function and
give you back the response.
If you need this, I'll
call this function."
And, here, we don't have that.
We just have run and the
framework provides the rest
of the work.
At least that's the theory.
Let's give it a --
or "Save" here.
Make sure we're in a good spot.
All right, let's
see that in action.
Let's go ahead and open
up our terminal here
and let's invoke a little Python
here, python agent-framework.py.
So the first thing that
we should get if we look
up top here is we are going
to get a little rundown
of our data file, user
prompt, here's the expense,
what do you want to do with it.
And we only really
have one thing, right,
when we build our agent,
"At the user's request,
create an expense claim."
So let's ask it to
submit a claim.
Now, the interesting part here,
again, with this one is the ease
at which our agent
can go from agent_run
and invoke this function without
us having to do the dispatch.
So you will see right here that
we did indeed get that call.
We've got our date, our
item dispatch, right,
there's the subject,
right, there's our two.
All of that is set up in the
little print right there.
It invoked that function on our
behalf, no dispatch at all.
So just one of the simplicities
that we start to see
when we are looking at the
Microsoft Agent Framework.
All right, we have more to do.
Let's go wrap this up and
then we'll move forward.
What are the key steps to create
a Microsoft Foundry agent using
the Microsoft Agent Framework?
Right. So, here, we create
the Azure AI Agent Client,
that first class.
From there, we then define a
chat agent with the instructions
and the tools, and then
create the agent thread.
Which component in the Microsoft
Agent Framework manages the
conversation state
and stores messages?
Of those three, that would
be the agent thread.
The thread is that that handles
that conversations much
like a conversation thread.
All right.
So we have now started
with one more framework
with the Microsoft
Agent Framework.
It unifies the agents
and providers and tools,
gives us a single
surface programmatically
that we can work with.
There is a base agent
abstraction that allows us
to handle various chat
providers interchangeably,
a bunch of built-in
tools that we can use
that we should already be pretty
familiar with at this point.
And, when it comes
to using Python,
we have that Tool
Decorator that we can use
to advertise the custom tools.
Today, we built agents in code.
We got familiar with the
Microsoft Agent Framework,
created a Foundry AI agent
with it, and added tools
to extend the agent, built
one ourselves with the SDK.
Thanks for joining me
on the "Develop AI Apps
and Agents on Azure" course.
There's something satisfying
about dropping into code
and building an
agent end to end.
And I hope you felt that today.
Keep exploring.
The Microsoft Agent
Framework is evolving fast
and there's always a new pattern
or capability worth trying out.
There are many ways to continue
your learning journey.
And I invite you to search
for your next favorite topic
on Microsoft Learn
at aka.ms/learn.
> Source: https://www.youtube.com/watch?v=l3oAcAWySlE

[ Music ]
ROB FOULKROD: One agent is
good, and a team of agents,
each with its own
role, collaborating
to solve a problem, too
big for any one of them,
is something else entirely.
That's multi-agent
orchestration.
And this is one of the
most exciting capabilities
in AI today.
I'm Rob Foulkrod, Lead
Technical Trainer at Microsoft
and this is the last
session in topic two,
where we'll cover orchestrating
a multi-agent solution using the
Microsoft agent framework.
We'll review the
agent framework,
then dig into agent
orchestration and walk
through a number of
different patterns
that you have in your toolbox.
Let's bring it all together.
So when we were talking
about workflows a couple
of sessions ago, we saw the
idea of various patterns,
and those patterns were
implemented for us inside
of the Foundry workflow system.
But we may also need the
capability and the flexibility
to do those purely in
our own code base,
in our own agentic
systems outside
of the workflow
systems in Foundry.
So one of the capabilities --
so one of the capabilities that
we pulled in from AutoGen,
when Semantic Kernel and
AutoGen were melded together,
was we got a lot of the
capabilities that AutoGen built
in terms of multi-agent
orchestration.
Now, some of these patterns
we have seen before,
so we'll go through them
relatively quickly,
but some of them are
a little bit newer,
we'll see what we can --
what else is inside
of agent framework.
So, first, a sequential
orchestration.
This is one of the basics
that we saw in workflow,
it's the same here, we get the
ability to create one agent
and then from that agent,
automatically pass its output,
right, that the output from
one agent becomes the input
into agent number two, and
we can move along the way.
So here they're talking
about this idea
of having a summarizer.
Summarizer will pass in a
large document of some kind,
the summarizer will
then condense that.
Potentially agent number
two translates that
and then agent number three
could build a QA, a Q and A,
off of the system, all right.
Each of those inputs is required
to be completed before
we can move to the next.
Concurrent orchestration for
each fan out, there's a number
of different names for
something like this,
but in a scenario input is
passed in and it is determined
that we can handle some
of those in parallel.
So instead of having to wait and
pass them all here and move kind
of this direction, we
know that we can farm
out one piece one direction,
let it come together and then
when we are completed, merge
all of those together.
The parallelism
allows us to optimize
for getting things done
much more quickly.
But we also have what's known
as handoff orchestration.
In handoff orchestration
we're going to have agents
that are specializing
in a particular task,
but at the beginning
of the input,
we don't necessarily
know the path
through which we're
going to travel.
If I go back a sec here, we know
the path, when this starts,
we know what this path is going
to be, we know that we're going
to come in here and it's going
to branch off, 1, 2, 3, 4,
we don't necessarily
know how many,
but we know that we're
going to branch off,
we're going to come
together in the collector
and we're going to finish.
Here we know, we're going one
node, the next, the third.
It's a very, very
predictable order.
But when we're looking at
the handoff orchestration,
we will typically have
a series of tasks
that each one is good at.
So we may have a general support
that gets this idea and says,
"Oh, gosh, to answer this
question, I know my friend
over here in billing, this agent
over here in billing is the one
that handles this one," so we
will delegate it that direction.
But we don't know
that that's coming
until input comes in, right.
And this is similar
to what we saw
in our workflow orchestration
when we branched off and said,
"Okay, billing is
going to handle --
it's going to be handled
by a human being
and these two sections can
be handled by an agent,"
and that was kind
of a similar idea.
But here it might be the
agent is making that decision
and not necessarily
in a statement
that we're putting together that
is making it for us, all right.
So one agent transfers
control, says, "Okay,
I know whom the agents are
around me and I will hand off
to that particular agent."
It's typically a pretty linear
path through once we've done
that handoff, we're not often
kind of looping back again
and again and again, but
we're finding out kind
of who can handle
that and we go.
But then we can
up the complexity just
a little bit more
and there's one called a group
chat orchestration and I'm sure
in your mind you now
have a vision of a bunch
of agents sitting on a
chat together trying
to figure something out.
And it's not quite what
we're seeing here.
We do have kind of
an ordered process
in which only one agent
typically is going to be running
at a time in something
like this, but we're going
to have a group chat manager and
that group chat manager is going
to get in a particular response
and then start handing that off
to maybe a marketing agent,
an engineering agent,
a finance agent, maybe we're
doing some sort of brainstorming
in here and then they pass it
back, their input comes back
and we say, "Thank you
for your contribution,"
and then maybe we
hand that off again,
we continue in this process
now that we've got kind
of a marketing angle, let's
hand that off to engineering
to get some opinion on it.
The manager decides who's going
next, looks at the results
and then makes those
decisions again and again.
And all the responses are coming
back into this same middle chat,
so everyone, all of
these agents have access
to the entire chat
all along the way.
So things aren't left behind.
It's not like we're
starting a new conversation
and the engineering agent
doesn't know what went before,
it's all part of that
same conversation.
And then one of the
interesting things that was
in the AutoGen realm
was something called,
magnetic orchestration.
And magnetic orchestration
is really that group chat,
but one generation past.
Where we're going to have
an orchestrator in there
and the sophistication
of the orchestrator is a
little bit higher, all right.
And typically in here, again,
we don't have a fixed execution
order, but the agents
in here are going
to self-organize.
That the orchestrator is a
little bit wiser about how
to handle these things and
maybe a very complicated task
comes in.
So imagine a scenario
where we have some sort
of AI on-call engineer and there
is some sort of technical issue,
right, a server went down, okay.
So the issue may be then brought
to the orchestrator,
server's down.
There's a lot of directions
that we need to go
to start troubleshooting.
So the orchestrator will
start looking at, well,
what are the agents that I have,
who are the ones that I have,
and based upon this problem,
who am I going to send out?
So the first thing we may have
is, maybe have a connectivity,
like, can we get there and
an agent is responsible
for making the appropriate
calls and saying,
"Are we getting 404s, are
we getting no response,
are we getting 500s," let's
check that connectivity.
Once that information
has been gathered,
and brought into the ledger,
then a second decision can be
made based upon the results
of that first.
And so maybe then a logging
agent goes out there
and starts retrieving the logs
from that particular server,
from that web app,
whatever it happens to be.
They start chewing
through the logs,
that logging agent starts
finding the things
that might be important and
puts those back on the ledger.
Then that orchestrator agent
is going further, right.
And so, these are these areas
where they're very complicated
solutions or problems
where we don't necessarily
know the order and the path
that we're going to be going
until we make it through.
One of the very
sophisticated orchestrations
that again the AutoGen folks
put together has been brought
into our realm here inside
of the agent framework.
But we need to check this out,
so let's take a
look at an example.
All right, so in this exercise
you all will create an agent
and here we're going to start
simple, we're going to use
that sequential orchestration
so that you are moving just
from one to the second to the
third and just give it a run,
it will be a pretty
straightforward exercise.
So, for starters, as we have
seen a lot, we are in Foundry,
we do have a deployed project,
that deployed project does have
a model and we have taken,
I believe I've taken, let
me just double-check here,
that I have taken the project
endpoint and I have copied
that into the environment
variable, I have.
Good, let me just double-check
to make sure I've got
the right one here.
Life is good.
So here we've got the two
pieces, our project endpoint
and our model deployment name.
Now when we swing into agents,
we've got much of what we've had
up to this point, we're bringing
in the agent framework,
but most importantly, we're
now bringing in, in this case,
the sequential builder.
This is from agent
frameworks.orchestrations.
Earlier we just
talked about a series
of different orchestration
types, we're start right now
with kind of a simple one
of sequential builder.
Then we are setting up a
series of instructions,
this will be three
separate agents,
there will be a summarizer,
a classifier and an actions.
And each one has its own set
of individual instructions,
you can see them
right here, right.
Summarizer, we want
one short sentence,
the classifier is this
positive, negative
or is a feature request.
And then actions, based upon the
summary and the classification,
suggest another
action, for example,
and you'll get several
examples are then given.
So those will be
the three agents
that we will come
to in sequence.
We then are building
our CLI credential,
we saw that one in
the last section.
And we are building the Azure
AI agent client passing
in the credential and saying,
we've got an AI chat client.
Then we're building
those three agents.
The chat client, as agent, nice
little helper up function there,
as agent, instructions and
name, as agent, our classifier,
and as agent, our actions.
So, currently we have three
agents floating in the abyss.
There's no real sequence
yet, we have intent,
but we don't have any
real organization.
Then we're going to -- in
this example here we're going
to hardcode some feedback.
You can imagine that we'd
be passing in the feedback
on the regular here, but
right now we're just going
to hardcode it.
Use the dashboard every day
to monitor metrics,
works well overall.
But when I'm working late,
the bright screen is
really harsh on my eyes.
I get you, I'm usually
a dark screen guy,
but for demos I've been
in bright screens
all day, I feel it.
But if you have added
a dark mode option,
it would make the experience
much more comfortable.
Okay, so, that's the feedback
that's going to passed in.
Now, instead of those agents
floating in the abyss,
we are going to bring in
the sequential builder.
Sequential builder takes in
a participant's argument
with an array and ordered list
here, summarizer, classifier,
action and then we
call out build.
It then constructs the order.
The outputs are going to be
then a list of messages,
so the message class, this is
brought in our agent framework,
simply the responses, the
messages that are coming back.
And we call out to workflow run.
So workflow run, make an async
call in there for each one
of the events that
are going to pop up.
If the event is output,
then pass that as a message
and append that into
our list of outputs.
Finally, at the end, if we've
got anything decent in there,
enumerate through and pop-up
the messages themselves.
So again, the key parts
here, the takeaway,
the important pieces here are
that we have built
ourselves three agents,
these agents could have
been already on the server,
we've seen that inside of
Foundry, many agents already,
where we could have brought in
complex, interesting agents,
here we're just 1, 2 and 3.
And then we put those together
in our sequential builder
and our workflow.run.
So, let's see if we
are in good shape.
Let's open up the terminal here
and we want python
and agents, plural.
Give this a run.
And take a look at
the results here.
We have each of those.
So we've got the initial user
feedback that we're passing in,
then our summarizer
agent said, "Hey,
customer is requesting
a dark mode option
for comfortable late night use,"
the classifier looks at that
and says, "Ah, that is
indeed a feature request,"
and the action agent
said, "Got it."
So customer requests
this, let's log that as,
enhancement for backlog.
Each one of those
agents ran in turn.
What's the first step
in the Microsoft agent framework
unified orchestration workflow?
First thing you have to
do is define those agents
and describe their capabilities.
All right, for brainstorming
and collaborative problem
solving among multiple agents,
which orchestration
pattern is most suitable?
All right, you could have
gone a couple of ways here,
it would made -- the group chat
makes a ton of sense here,
magnetic, maybe, depending
upon the complexity,
so if you said magnetic, you
maybe not completely wrong,
you may be thinking of a
more complicated problem,
it could go either way on
that one, but we'll go
with group chat first.
All right, in here
we've taken a look
at the various orchestrations
that are available
to us inside the Microsoft
agent framework.
We saw that there are
concurrent orchestrations
so that we could fan out, we
saw sequential is an option,
and we saw three increasingly
complicated items with things
like handoff and group
chat and magnetic.
In this session we orchestrated
agents into real teams,
we reviewed the Microsoft
agent framework,
understood orchestrations and
worked through concurrent,
sequential, group chat,
handoff and magnetic patterns
and developed a multi-agent
solution along the way.
That wraps topic two.
We've gone from our very
first Foundry agent,
all the way to multi-agent
orchestrations.
We've added custom tools and
MCP tools, grounded our agents
in real knowledge
with Foundry IQ
and published them
to Microsoft 365.
That's a complete agent
development skill set.
Thanks for participating
in this develop AI apps
and agents on Azure.
I hope you've enjoyed learning
about building and integrating
and orchestrating
AI agents on Azure,
as much as I enjoyed presenting
the concepts and walking you
through the live demos.
I encourage you
to remain curious
and continue exploring
new capabilities
and that's how you'll
keep staying relevant.
There are many ways to continue
in your learning journey
and I invite you to search
for your next favorite topic
on Microsoft Learn
at aka.ms/learn.
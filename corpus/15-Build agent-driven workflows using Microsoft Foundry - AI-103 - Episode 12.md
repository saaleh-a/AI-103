> Source: https://www.youtube.com/watch?v=ChGunV55YiU

[ Music ]
ROB FOULKROD: A single agent
is powerful, but a workflow
of agents and logic
coordinated and repeatable is
where real automation happens.
Today, we're going to design
workflows that put agents
to work on multi-step
business problems.
I'm Rob Foulkrod, Lead
Technical Trainer at Microsoft,
and in this session, we're going
to build an agent-driven
workflow using
Microsoft Foundry.
We'll start by understanding
what workflows are in Foundry,
identify the common patterns
you'll keep reaching for,
and then create workflows
in the Foundry portal
and add agents to them.
Look how to maintain
them over time
and finally use
workflows from code.
We'll bring it all together
by building an agent-driven
workflow of our own.
Let's get into it.
When you first look at workflows
inside a Foundry, they are going
to look dramatically different
than everything we have
seen up to this point.
If you have some
familiarity with things
like Azure Logic Apps
or Power Automate,
that idea of having some
graphical interface
where you have a number
of nodes and then edges
that are joining
those nodes together,
you will have seen
something like this.
You can see right here
that we've got an example
of what a workflow
might look like.
We are given the ability
to build logic-driven
workflows in between agents.
Now, it's quite easy
to create an agent.
We've seen up to this point.
And one of the things that I
think we are, at least early on,
likely to do is to
try to build a lot
of conditional logic
inside of an agent.
In the instruction, say, if
this happens, then I'm going
to need you to do this, and if
this happens, then we're going
to need to do this, and
agents are not logic engines.
It's just not the strength
of what a large
language model does.
Under certain circumstances,
you may see some success
with something like that.
But as you start pushing the
boundaries, you are more
and more likely
to find failures.
You'll know you start to do
it when in your instructions,
you start to add things like,
you must always follow
these instructions,
and then it doesn't follow
those instructions.
That's a clue that maybe the
instructions are getting a
little bit too cumbersome.
Then we need to start
breaking agents
down into agents and sub-agents.
Then how do we get
from one to another?
There's a few technologies
that could be used.
But workflows gives us
a really nice surface
that we can work with.
All the agents that
we've been building
up to this point are eligible
to be included inside
of a workflow.
So you don't have to build
a special type of agent.
There's nothing called
a workflow agent
that you're going
to have to create.
You can continue to
use the regular agents
that you have there.
Then we start connecting
those nodes together.
Some of the patterns that we're
going to see are patterns
that we have experimented
with or used
in a lot of other platforms.
One standard pattern is what's
known as the sequential pattern.
Here we've got a bunch
of individual steps,
and these steps themselves
could be all sorts of things.
They could be decisions
that are made
or they could be individual
agents, one agent here
and that information flows to
the next agent and that flows
to the next agent, like
where each one serves
as output to the next.
So maybe we have something
that's generating some content,
something that's doing some
review on that content,
and something that's then doing
maybe a little edit and publish.
That's a sequential flow and
we're not needing to go back.
We don't have to approve or
anything along those lines.
We just make a
straight line through.
Another option that we
have is the ability
to bring humans into the loop.
That up to this point,
what we've been seeing is
either we initiate an action
and then we take a look at the
result, or inside of the chat,
we look at it and then we send
it back and we send it back
and we're always in there.
It's not an optional component.
It's every step of the way.
And there'll be a
number of processes
where you may want a series
of automations up front.
This really represents more than
just one thing, but a series
of automations up front.
Then when it's done, does a
human, does somebody approve
of that or do we go back
and have some sort of
edit that goes on?
The ability to do
this kind of pause
and give us oversight before
something is completed.
Another pattern that we
see is that of group chat,
that we may have some
sort of orchestrator,
and that orchestrator then
gets to decide who does what
in that response, and they each
come back to a central node.
These are possibilities
that we may see
in various workflow patterns.
So when it comes to working
with workflows in Foundry,
there's a couple
underlying principles.
The first is this
idea of an executor.
Each one of these nodes
inside of Foundry,
each one of these is its
own individual executor.
They have their own abilities.
So for example, you can see this
one here would have the ability
to set a variable, possibly
define that variable,
then put a value into it.
Where this node right here, also
an executor, it has the ability
to call into a particular agent.
So they're all executors.
They each receive input from the
system that went before them
and could potentially
pass in output
to the systems that go next.
They can be logic or
they can be agent calls.
Then there are edges,
and edges are going
to be then connecting
to other systems.
So for example, here
we have a simple edge
that is connecting
from set variable.
We're going to end up in
the if-else condition,
and we're doing that
every single time.
The flow is going to be going
straight from set variable
into the if-else statement.
However, here we have a more
complicated edge, in which case
from the main "If" we're
going to make a decision,
and if we're going this way,
we're going to be looking
at that computation right there.
If we're going this way,
decisions are being made.
So the flow will change on an
execution-by-execution basis.
So those can be Direct.
Again, they can be conditional.
They can be Switch, where
you have a single decision,
but several different
possible outcomes in there.
There are other patterns,
like the Fan-out pattern,
typically used if we're
doing some sort of for each,
we're going to do a bunch
of things in parallel.
Then we'll Fan-out, and these
two tend to match one another.
We tend to Fan-out, like
so, to various nodes,
and then at some point in
time, we will then Fan back
in to collect the results
and move forward from there.
There's also a series of events.
As a developer, we can key in
on those events, like, hey,
the workflow has started, or the
output of one of those nodes,
has been created, or
there's some sort of error.
So from the exterior of that, we
can listen in on those events.
So let's take a look at
putting this together.
We'll first start by
building a simple workflow,
and in that workflow,
we'll involve two
or three agents along the way,
and some conditional structures,
and then take a look
at how it works.
Let's jump in.
So for starters, we're going
to find ourselves back here,
like we have many, many
times at this point.
We have a project.
We have models already deployed,
but we don't have agents,
but specifically here, we don't
have any workflow agents.
You see that's a separate tab
inside of the agents section
at this point in time.
I want to swing over into
"Workflows," and of course,
we don't have any
of those either.
So let's go ahead and
create a workflow.
We will start from scratch,
although there are some
really nice prefab items
in there that'll give you some
idea of how to build those
with some instructions along
the way, but we will start
from the blank side of things
-- and while we're blank here,
we have this idea of a start.
Matter of fact, I'm going to
tweak this just a little bit.
Normally, when you open
it up, it's going to be
in the left to right mode.
You can see up at the top
that you can flip that back
and forth, so if you want
left to right, great.
If you want more of maybe a
-- logic apps type strategy
or feel, then you can go up and
down, whatever works for you.
But we'll go with the default,
and you can see here we have
our input just called "Start."
From there, we're going to
build a series of nodes,
and we have either the new node
option sitting right over here
or go ahead and click directly
on the "Plus" itself.
So in this one, we're
going to add a new node,
and in this node, what's going
to happen is we're going
to simulate the processing
of multiple tickets
that are going to come in.
So the variable that we are
going to set right now,
we are going to create
a brand-new variable.
In that variable here,
we're going to give it the
name of "Support Tickets."
It's a little grumpy already.
You can see missing variable
name, so we'll go ahead
and click that, and we will
call this "Support Tickets."
Now, I've been through this demo
many, many, many times before.
You saw it kind of
auto-populate right there.
That won't be the case.
You will see local and some
sort of random variable name.
I clicked too quick, but you're
going to keep the local.
indicating that it is a local
variable, and then the name
of the variable of
"Support Tickets."
Just fine.
If you put in support tickets,
it would be fine too.
Eventually, it will resolve
to local.support tickets.
Then we're going to drop
in our array of tickets.
If we kind of zoom in here, we
will see ticket number one.
The API returns a 403 error
when creating invoices,
but our API key hasn't changed.
That's problem number one.
Problem number two,
is there a way
to export all the
invoices as CSV?
And problem number three,
I was charged twice
for the same invoice
last Friday,
and my customer is also
seeing two receipts,
and someone fixes it.
Those are the three
tickets that have come
in at this point in time.
We're going to say done.
Now, we have a
variable in there.
This could come from the start.
This could come from data
that's being passed in.
We're ease of use right now.
We're kind of hard-coding that.
While we are working on this,
I'm also going to make sure
that I don't forget
to give this a name.
So, I don't lose anything.
I'm going to do "Save" and
drop in "Name" right in there.
This is the Contoso Pay customer
support triage workflow.
We'll have a series
of agents in here
that are going to be working.
And so, we have ourselves
an array to begin,
which means we probably
want to go with some sort
of loop that's going to be
processing all of those.
I'll click the plus right
here, and we will move
into the "For each" loop.
And in the "For each"
loop, it's asking for --
okay, what is the thing that
we are going to loop over?
And we will be looping over
the support tickets like that.
And then --
-- what is this
variable right here?
Typically, in our "For" loop
or "For each" loop or like
for something in that list,
what is that counter
variable name right there?
We will call that
the current ticket.
So, we now have our counter
variable that we can use.
And so, each one of those items
in the array will be sitting
inside of current ticket.
So, that's feeling better.
You can see here, this
is our looping process.
Whatever is inside of
this plus right here,
this thing that's going to be
repeating, and that's going
to be most of what
we do going forward.
The processing will be for
each one of said tickets.
So, first thing we're
going to do, we are going
to bring in an agent to call.
Looking at those tickets, we
need to figure out, well,
what are we supposed
to do with them?
I'm going to hit the plus
in the middle right here.
And one of the primary
things that we are doing
in an AI agents class
is invoking an agent.
So, I'll click on
agent right here.
And if there were existing
pre-built agents,
that's all we've been doing
for the past n sessions.
We've been building agents.
We could incorporate
any of those agents
that we've already brought in.
In this case, we're
starting from scratch.
We will create a
brand new agent.
We will give it that
name of triage agent.
Go on, my friend.
There we go.
Awesome. And we will
go ahead and throw
in some instructions in here.
And as we go through
these instructions,
I'll zoom in so you
all can see them.
We go from here.
It says, classify the
user's problem description
into exactly one category
from the list below.
Provide a confident
score from zero to 1.
And those things are,
we have "Billing,"
"Technical," and "General."
So, billing charges refunds to
duplicate payments, missing
or incorrect payments,
subscription, pricing,
invoices being charged.
Technical, API errors,
integration, webhooks.
And then in the "General," how
to data exports reports UI.
An additional little import
here, important rule,
questions about exporting or
viewing or downloading invoices,
might be billing, are
general, not billing.
Billing only applies
when money was charged.
So, we have a
description in here.
But what we would normally have
is just like a free form output.
One of the things we
have not done in here,
although we could have all along
the way, is when we're looking
at the parameters
here for the agent,
we can specify what the format
is going to be of the output.
We can say here, I'm
going to give you a --
instead of just like
free form text,
I'm going to give you a schema,
a JSON schema, and I want you,
the agent, to comply
with said schema.
I'm going to pop in there,
and we are going to
drop in a schema.
So, when it goes and assigns
into a category, remember,
it says, give us a category
and give us a confidence
number in there.
We are going to have
the customer issue.
We are going to have the
category, one of those three
that were assigned, and
the confidence number,
some sort of number
between zero and 1.
No additional properties, all of
those are going to be required.
But we will save that.
And while I'm looking
over here, we're fine.
We're just not done yet.
All is good.
The rest here should be in
pretty good shape in terms
of what the agent is doing.
So, feeling good there.
We're going to make one
additional modification,
and that's going to be
on the "Node setting."
So, the detail is referring
to the agent itself.
"Node setting" is really
the workflow components.
So, when we go to "node
settings" here, we can say,
well, where is the thing that
it's testing coming from?
Where is its input message?
So, input message
here is going to come
from that current ticket
variable that we saw earlier.
Current ticket.
That'll be its input.
But then we're going to need
to pass output along the way.
So, we could then say, where
is that output going to be?
And that output could be text
or if we were doing a JSON.
So, the text itself,
we can create a new
variable here called
"Triage output text."
And for the JSON, another new
variable, "Triage output JSON."
Now, we've got the beginning.
So, for each one of the array
items, we will loop through
and come up with
some sort of triage.
Now, it could be good, right?
It'll do all three of
those, that's fine.
But in workflows, the
idea would be, well,
let's go a little bit further.
So, in here, let's
build an additional.
So, right now, I go right there,
a little plus will appear.
And in there, we have
our flow of control.
So, for example, in this case,
we have an "If" statement.
Here, we saw that there
was a confidence level,
confidence level
between zero and 1.
So, we're going to add a path
here for the confidence.
And we're going to say, listen,
if the confidence level,
if the confidence level
is greater than 60%, six,
then we're going to
go the true branch.
Otherwise, we will go the
false, the else branch there.
So, we are looking specifically
at the data that came before it,
Local.TriageOutput
JSON.confidence.
Now, we're going to start with
the easier of the two paths,
so it's where we are
going with this.
And the easier of the
two paths is the else.
If we are not confident,
we're just going to bail.
We're just going to get
out at this point in time.
So, we will hit the
little plus that is right
on the else branch there.
And we will just
deliver a message.
In that message, we are going
to say, I don't know --
the support ticket
classification has low
confidence, requesting more
details about the issue,
and then drop in
the current ticket.
So, that will be our exit.
That'll be pretty
much we're done.
The rest is going to happen kind
of in this top level
of the branch.
So, now we've got
some confidence,
but we have multiple
paths, right?
There were multiple categories.
So, we're going to bring
ourselves one more
if statement in here.
Going down into said
else statement.
We will add a path here
that we get to decide.
We have the path with a
quick little pencil there.
And we're going to
say in all of this,
if the output.json.category is
equal to Billing, single equals
in this case, is
equal to Billing,
then we'll go one route, that
would be the Billing route.
Otherwise, we will head another.
So, continuing here, and we're
going to repeat the same, right?
We could keep doing agent
after agent after agent,
but right now, if it's Billing,
we're just going to say, hey,
we're sending you off to a human
who is going to
be doing Billing.
So, on that top if,
we'll return a variable,
return a message here.
And the message to send will
be escalating to humans.
But if it isn't Billing,
and we're pretty confident,
that's where we are down here
on this bottom path here,
then we're going to
invoke one more agent,
because it would just make
sense for a good demo
to have multiple agents in here.
So, a little "Plus,"
grab a brand new agent.
This is going to be
our agent who will be
in charge of resolution.
So, we'll create new agent.
We will give that agent
name of resolution agent.
And now, again, we've got a
bunch of agent work to set up.
We will give it
instructions here.
You are a customer support
resolution assistant
for Contoso Pay.
Your task is to draft
clear professional
and friendly support
response based upon.
And then we've got some
guidelines in here.
If the issue is technical, avoid
asking for logs or credentials
or sensitive information.
We're just creating
agGenerative AI response here.
But everything that we've
been doing up to this point,
whether we're looking at Foundry
IQ, whether we are invoking MCP,
all of those components
that we've been doing all
course long are available
to us in this agent.
Right now, we're keeping
it simple so we can get in
and get out, but you can
start assembling these pieces
in many different ways.
So, all of this is looking good.
We will go to the node
settings here because we need
to know what the input
into this is going to be.
So, inside of our node settings
here, the input message is going
to be the Triage output text.
So, we see what that output was
from our triage side of things.
And we will save this
into another variable.
So, the input obviously
coming from this direction,
output where are we
going from here?
And we will output that into
resolution output text.
New variable,
resolution output text.
Done.
Right, I think we're doing okay.
If we go to the very
beginning here,
an array of problems loop
through each problem.
Triage agent takes a problem
at a time, does a little bit
of work to determine what the
category is and how confident.
If we're not confident, send
a message and we're done.
If we are confident,
then decide,
is it Billing, needs
to be a human.
If it's not Billing, then we
will hand it off to an agent
who will give a response.
We'll do a save.
And then from here, we
can preview the result.
This is basically give it a run.
Now, the initial message that we
put here really isn't important.
We didn't really do a lot
with the start message here.
We didn't want anybody to have
to build an array of objects
and then try to craft that in.
So we'll just say, just
process the tickets.
Doesn't really matter
along the way.
So triage agent kicks in.
So the triage agent
runs first time.
Its output, this is a
customer issue, category,
technical confidence one, right.
The resolution agent,
because it is confident
and it is not Billing,
resolution agent,
write some code here.
API key, 403, you might
have to cycle your key.
Second time, the agent runs.
We have, is there a way to
export all the invoices?
That is a "General," we had a
very specific case for that.
And this is not a
billing question,
this is a general
question, confidence one.
Yes, you can export them all,
bop, bop, bop, bop, bop.
Here's what you have to
do to export said items.
And then the last one here,
we have a was charged twice.
Ah, that is a billing question.
Highly confident there.
We are going to escalate
that to a human team.
So it works.
We're in really good shape.
We like what we're
seeing right here.
Now we need to switch into code.
If we look over here, we
have the same AI toolkit
that we've been using
off and on all course.
And in there, we should have our
Contoso customer support triage.
Now you don't need
the name of it here,
but we could also go
through the same.
Let's run it.
Let's test it from here as well.
But what we do need is we
need the project endpoint.
So I'm grabbing
project endpoint.
We're swinging into our code and
into the environment variable,
which just is asking
for one thing
and one thing alone,
the endpoint.
Put that in, "Give," "Save."
Then we're going to take a look
at our workflow or at the code.
So again, same, very similar
as to what we've done a
bunch of times, right?
We're using the
default credential
and we are using
the project client.
We're grabbing the
project endpoint
from our environment variables.
I threw in a little helper
function in here so that
when we see the output,
the output is a little
bit nicer to work with.
That's all it is.
It's basically a print statement
that does a little bit
of parsing in there.
And then again, I don't know,
this is the fourth time
we've seen this exact bit
of code here.
Use the credential, grab
ourselves a project,
also get the AI client.
In this case, we've got
a variable here looking
for the workflow name, Contoso
Pay customer support triage.
We are starting a conversation
in the background
where we will feed
that to the workflow
where it will keep everything.
And we then say
responses.create,
passing in the conversation ID.
But then here inside of extra
body, this is where there's kind
of this flexibility of input,
like additional metadata
that would be necessary.
And in this case here, the
agent reference is going
to be a workflow with the
name of Contoso support.
The input in there, like
we were talking about,
then we were using the input,
so it just says "Start."
Fine, nothing wrong with that.
And we will be doing
this in stream.
So the events kick in.
When we are completed, we
will retrieve the response.
That's going to be the
entirety of the response,
which is why we're going through
and taking that output text
and then parsing it out so we
can see the three different
parts of it.
It'll be just one block.
And then deleting the
conversation when we're done.
So should be in good shape.
Let's open up the terminal here.
Give ourselves a little
bit of room to breathe.
And into the terminal,
let's give it a run.
So Python and flow.
And being that this is the very
first time it's going to run,
it's going to take a second to
resolve all the components.
It should get there
pretty reasonably.
Got ourselves a conversation.
Responses are coming back.
And here we are.
And this is, again, this
is the parsed out version.
Otherwise, it would be just
a one large string in here.
But ticket one, 100% confidence.
The issue are 403, when
building invoices,
the API hasn't changed.
403 indicates a
permission issue.
Ticket number two,
General, 100% confidence.
Can we export all those?
Yep, you can.
Go to the dashboard.
And ticket number 3,
that's a billing question.
We know with the billing
question, we got to set that up
to a human support team.
We're going to delete that.
So the code, this is one
of the nice advantages
of having the kind of the
agentic side of things
on that server, our code base,
which could be, doesn't have
to be very complicated.
It can be pretty
straightforward in how
to invoke not an insignificant
workflow beneath the scenes.
All right, let's wrap this up.
So which type of node in a
Foundry workflow is used
to invoke an AI agent?
Really hope you made that one.
Yeah, definitely an agent node.
Which node type would
you use if you wanted
to handle multiple
items in a workflow
without duplicating nodes?
Right, that's
"For-Each," that loop
that we saw in that example.
So here we've had a brief
introduction to that
of the workflow system
inside of Foundry.
We've seen that they can
be declaratively designed.
We've got that UI surface that
we can build over the top of it.
We have options in terms
of various workflows
that might be involved, like
sequential or human in the loop.
Each one of those nodes itself
is an executor that's going
to either run an agent
or some sort of logic
that goes along with it.
And then from those executors,
we link those together by edges
to route that data or movement
through the workflow, right?
If we wanted to have a workflow
system in which we needed
to monitor, there is a series
of events that we can key in on
to see what's going
on in that workflow.
In this session, we moved
from individual agents
to coordinated workflows.
We covered the concept
of workflows in Foundry,
recognized the patterns
that show up over and over,
built workflows in the portal,
added agents to them and talked
through the maintenance, and
then called workflows from code.
Thanks for being
here in this stretch
of develop AI apps
and agents on Azure.
Workflows are where the
agents really start to feel
like coworkers, and I had
a great time walking you
through it.
Stay curious.
Workflows and orchestration
patterns are still maturing.
So the more you explore,
the more you'll find.
There are many ways to continue
your learning journey,
and I invite you to search
for your next favorite topic
on Microsoft Learn
at aka.ms/Learn.
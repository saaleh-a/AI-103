> Source: https://www.youtube.com/watch?v=O1tc09coYO4

[ Music ]
ROB FOULKROD: We just learned
what the language service can
do, now imagine handing
those capabilities directly
to an agent.
No custom blue code, no
bespoke integrations,
just an MCP servers that
exposes language skills
as tools to your agent.
Hi, I'm Rob Foulkrod, a Lead
Technical Trainer at Microsoft.
In this session we'll
cover connecting agents
to the Azure AI Language
Service using MCP.
We'll start by understanding
the language MCP server
and what it offers and then walk
through how to connect it up
and use its tools from an agent.
So let's get started.
So up to this points
we've already seen two
concepts side-by-side.
We have seen the idea of
MCP servers, we've talked
about those in an earlier
session when talking
about large language models.
We saw that MCP allows us to
advertise a series of tools
that large language models
can then reason about
and select and invoke.
And we also saw that there is
this language processing system,
right, the Azure Language
capabilities, that could be used
in place of large
language models.
So now we're going to bring
those two ideas together.
We may have a large language
model running inside
of an agent, but that model
may be an incredibly large,
maybe expensive model,
that we're using
because of the variety of things
that it may have to perform.
But some of these tasks that we
saw in the language service,
PII, entity recognition,
language detection,
may be something that we
could offload, and so,
let's bring the two
of those together.
And that's what the
Foundry folks have done,
they've taken the Azure
Language capabilities
and pre-built an MCP
server that you can enable
on any of your agents.
And so, the process, once that's
configured, is a user is going
to send a prompt to an agent or
some system is going to send
that prompt to the agent, the
agent then determines what has
to be done and reasons and says,
maybe the thought processes is
I've got to strip out some sort
of PII, what tools
do I have available?
It checks the MCP tools
to find the best match
and the agent then calls
that selected MCP tool,
passing in the relevant document
or text that has to be used.
The MCP server processes
the incoming request,
the appropriate response coming
back from the language model
from the language system and
then those are blended together
into the response for our user.
Where we're going to find
these is that these are inside
of the tools collection.
So when you're building
an agent and you swing
down into the
tools, you're going
to find a huge collection
inside the catalogue.
The one that we're looking for,
in this case, is the Azure --
the one that we're looking
for, in this case,
is the Azure Language
in Foundry tools.
Then it's a matter of selecting
the tool and a little bit
of configuration so that the
systems can talk one to another
and it will supply the
name of the project
and you'll supply perhaps the
key or some sort of credential
that it's going to be
used and that's it.
And then at this point,
much like we were talking
about with other MCP tools,
there is this idea of ensuring
that things like
your instructions,
are in the right spot.
Right, so here it says that
we've got to make sure
that we are specifying
agent instructions
to select the appropriate tool.
Given that large
language models,
without giving them
human characteristics,
I think they can do a lot of
things, right, if we say,
"Identify PII," to a
large language model
that hasn't been set
up with these tools,
it knows what PII is
and it can guess.
However, these tools may
outperform it in terms of speed
or in terms of pricing.
So, we would need to give the
appropriate instructions to say,
"Hey, make sure when doing
these tasks," right,
in the three tasks
that we saw in here,
named entity recognition, PII
detection, language detection,
"make sure that you're funneling
those into the MCP server."
All right.
Not all overcomplicated, but
let's give it a shot, okay.
So in here we're
going to go ahead
and establish a
quick little agent.
We will then set up the MCP tool
and then create a client
application that tests it out.
All right, let's try.
So, for starters, we are here
inside of Foundry one more time.
In the earlier example we built
ourselves a project and did all
of that, so we're going to
assume, for the purposes
of this demonstration here,
that you've got that already.
We are on the agent's tab, we
will just go ahead and click,
"Create agent," in here and for
our quick agent in this case,
we're just going to do kind of a
bare basic text analysis agent.
It will go ahead and
build that for us.
And there we go, awesome, we
will drop in instructions here,
starting off with, hey, you're
an AI agent that assists users
by helping them analyze text.
And then, so, what can you do?
And if we ask something
along those lines,
right now we're getting a 100%
unadulterated large language
model view of the world and it's
like, well, I can do anything.
When you name it, I can do it.
Not really specialized in any of
these things, right, but sure,
I can do whatever you need.
Fine, good starting spot.
We're going to save this,
we're going to swing
over into the tool
section and this is
where the MCP configuration is
going to reside for our agent.
So we'll go ahead and
browse all tools in here,
we will go to the catalogue
and look up our language.
Spell language, there's
a little irony there.
Spell language correctly
and here we go.
So we have the Azure
Language in Foundry tools.
Go ahead and create the
configuration for that tool.
It needs a name.
Azure Language in Foundry
tools is fine, right,
nothing wrong with that.
Descriptive is always better.
And then we need the
endpoint for our Foundry
and we can see right up here
that we've got our
demo Foundry 4790.
So demo-4790.
And we know the default for
the resource, not the project,
remember that a single resource
could have multiple projects,
and we did the default naming
before, so our full name there,
"demo-4790-resource"
will be the name.
It needs authentication,
we can do key based,
although I will need
to grab the key.
I'm going to go over here,
go ahead and grab that
and sneak back and drop
that in and connect.
We don't need to save any of
that, thank you for asking.
Okay, so now we have
both web search in here
and Azure Language
in Foundry tools.
If we were to swing, you saw
earlier, I almost went straight
to tools, you could have
done that too, right,
you could have built that
generically for all the agents
and then here added it in.
It is set up for all of
the agents, so if I were
to build a second agent, in
a moment the configuration
for this is already
there, I would just have
to include it as
one of the tools.
All right, so now that we have
built said configuration,
as we talked in earlier
sections, if you're going
to bring in a bunch of tools,
you should have
some instructions,
so that it understands the
tool and in this case,
you're an AI agent
that assists users
by helping them analyze text.
Use the Azure Language tool to
perform text analysis tasks.
I'm going to go
one step further,
just to be on the
safe side here,
I'm going to remove the web
search capability, we don't need
to test web search, none of
the things that we're going
to use will require web search,
so there's no real reason
to provide more tools
than what we need,
so we will take web search out
and we will save again
so I don't forget.
Okay, and let's do
a new chat here
and we will give it a little bit
of a prompt just to test it out.
Identify the PII
entities in this article
and generate a redacted version.
So that should use
the tools for us.
Okay. Now the first thing that
happens is it says, "Hey,
all of those tools that we have
here are exposed by way of MCP,"
so as we have seen
in earlier sections,
we do have to approve that.
So I will go ahead and
say, yep, I will approve
that this one time,
request has been approved.
Beautiful.
So now we have the PII entities
that have been identified.
We've got Bill, those
dates, Bill, Paul,
have been identified,
there are the dates
and the locations
there, Albuquerque,
New Mexico and Seattle.
So we can then see
a redacted version,
Microsoft was founded
on, not going to say,
by childhood friends,
boom, and boom, right.
Looking good there.
And if we were to dig into the
logs, right, we will see in here
that we have call into
the Foundry tool.
So we can see the
tool there, it's call
and we can see the output coming
back from the tool itself.
Right, so that is a good start,
but we should really take a look
at this from a code perspective.
Once we've built this agent,
how do we call into it?
And I hope it's not
much of a surprise
after this video series,
probably not going
to be all that complicated.
We will probably build some sort
of client and build a prompt,
so let's hop over there.
So we have -- let's do -- let's
see, what do we have here?
We have ourselves a couple
of code files in here.
An environment file will
probably need our project.
Yeah, we need a
Foundry endpoint.
So I'm going to dip into
the toolkit right here,
make sure I grab project
endpoint and replace it.
Go ahead and do a quick
little save there.
Then take a look
at our text agent.
So, the two name spaces that
we're going to bring in,
our default Azure
credential, right,
the way that we
are authenticating
and the AI project client from
our Foundry projects there.
Starter, go ahead and then
build the project client.
Pass in the endpoint,
pass in the credential.
And then from there we're going
to grab the open AI client.
As the user for a prompt
and then open AI client
responses create,
pass in the role and here,
again, pass in the name
of the agent that we
want it to look up.
And then get the response.
Really, really
straightforward usage here.
So, let's go ahead,
already been saved,
we'll bring open the terminal.
This is -- do a Python
for our text agent.
We've already, in
earlier examples,
talked about making sure that
we install the dependencies
and activate all of those,
that's already done,
you can assume for future demos
that have already gone
through that process.
All right, and we'll
say, "Hey, extract" --
let me get this out of the way
so we can see a
little bit more --
"extract the named entities from
the following text, 'Pierre
and I went to Paris
on July 14th.'"
That a little bit disappointing.
Let's -- oh, yeah,
that is disappointing.
Okay, okay, okay.
So, what went wrong on this one?
We're going to leave this in,
so you can all see
what's going on here.
If I had to guess, we're going
to swing back to our Foundry
and when we tested that
exact same thing here,
if I were to do this
right here, same thing,
we get this approval, right.
And, so, our code
sample right here
and in earlier samples we
have gone through getting
that approval process and
approving it programmatically,
we've done that before, but that
particular example we didn't
intercept that, we didn't listen
for that particular
response and, therefore,
nothing was approved and we
got a little stuck there.
So, I can approve this
one here, just once,
we will get back the
appropriate response.
Life is good, right, so
those were the things
that were identified.
So how do we handle that?
We can either handle that in
code or we can swing over here
to the tools itself, this is
something we have not seen
yet in any of this and we can go
into the tool once we've added
it and go ahead and configure.
Inside of configure we
can specify the tools,
because every MCP server
has a collection of tools,
so we can set the ones
that are allowed.
Here the default is
never to auto approve.
For the purposes of our demo
here we will auto approve all
the tools.
We'll go ahead and
apply and we will save.
There we go.
Version four.
So then let's swing back and
let's run this one more time.
Luckily there's nothing
that we have to refresh
on our local machine
for that to happen.
So we'll run it again.
We will paste in
the same prompt.
And life is good.
Now, from the engine we've got
those, we've got our person,
our location, our date all set.
Now, let's go a
little bit further,
because there will be times
where you're going to have
to do some troubleshooting,
where you have
to see who is doing what.
So one of the, kind of the
systems, that are in there kind
of for debugging purposes,
is we do have the ability
to not just take
the output text,
but to see what the model
has given back and just dump
that as straight json.
So were going to do the
same thing one more time.
Save. Run it again.
And we'll do a slightly
different prompt,
tell me what entities and dates
are mentioned in this review
and whether it's
positive or negative.
I booked my flight
to Paris in July
with Margie's Travel
and it was fantastic.
So, terminal selection is a
nice little way of saying,
what we have over there in our
selected terminal, so it's going
to read through all of that,
and sure good us a pretty nice
analysis of what's happening.
I think there's probably
going to be close
to 600 lines of stuff in there.
So it read the first
400, there we go.
Reading now 651, you all didn't
want to hear me talk about that.
So here's what's going on, so
you ran the text agent py,
and got the full response back,
so that was text agent
version four, who's called,
into, backed by GPT, 4.1.
Okay. The input was, that's
accurate there, right,
and instructed it to
use the Azure Language
in Foundry MCP tool.
So our execution flow here,
it looked at the MCP tools
and came back with a list of
tools that were available.
MCP call was into the extract
entities and the data
that it was returned,
looks good, right.
So MCP call got the entities
from text, and retrying
for date only, didn't come up
with anything date specific,
so it tried that twice, it's
kind of an interesting idea,
since we said, "Hey,
look for dates,"
and it simply wasn't
finding it, it doubled-down
to try that one more time.
Still didn't get
it, that's fine.
Then looking for sentiment,
okay, in their return deposit
of one, which indicates success
and we've got our
final message, right.
So, nice set of
responses coming back
from the tool telling us
how the data was processed.
All right, I hope that was
helpful, let's go wrap this up.
All right, let's check
out how you're doing.
So, first and foremost,
what is the primary role
of the Azure
Language MCP server?
All right, and it is indeed
to expose the Azure Language
text analytics capabilities
as MCP for agents.
How does an agent determine
which Azure Language MCP to call
when processing a user's input?
The agent matches the prompt
tool description received
from the MCP server.
One could probably argue, if
your thinking was something
about instructions, one could
probably argue the addition
of instructions would
help in that regard.
All right, this has
been pretty quick,
but what we've seen is combining
these two really interesting
concepts, the MCP concept
that exposes tools,
along with an example of a
pre-built language tool.
The agent then gets to
decide which tool selection,
we don't have to hardcode
anything along those lines.
There's a little bit of
configuration inside
of both the portal
and your agent,
but it doesn't really take a lot
of code to make that happen.
In this session we plugged
language skills straight
into our agent over MCP.
We understood the language
MCP and connected to it
and we demonstrated it.
Thank you for participating
in this develop AI apps
and agents on Azure course.
I hope you found the information
about language MCP server
helpful and I encourage you
to remain curious and continue
exploring new capabilities.
That's how you stay relevant.
There are many ways to
continue your learning journey
and I invite you to search
for your next favorite topic
on Microsoft learn
at aka.ms/learn.
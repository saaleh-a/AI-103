> Source: https://www.youtube.com/watch?v=uEEjq-yQw_c

[ Music ]
ROB FOULKROD: We've spent topic
one building generative AI
apps, chat experiences, RAG,
optimization, responsible AI.
All powerful stuff.
But there's a ceiling.
Those apps still wait for a
human to ask the next question.
We've prepared, but now we will
cross the line in to agents,
software that doesn't
just respond.
It acts. This shift
from answering prompts
to driving outcomes is what
this learning path is about.
Hi. I'm Rob Foulkrod, a lead
technical trainer at Microsoft.
Welcome to learning path two,
develop AI apps and
agents on Azure.
Over the next several sessions
we'll build agents end to end
in the Microsoft Foundry
platform and Visual Studio Code,
extending it with custom
tools and MCP, grounding it
in real knowledge, publishing
workflows and orchestration,
and introducing Microsoft
agent framework.
By the end of this topic you'll
be able to design, build,
and extend AI agents on
Azure with confidence.
Out of the box tools are
great until you need an agent
that talks to your systems.
Your inventory database.
Your ticketing API.
Your pricing engine.
And that's where
custom tools come in.
Up to this point we have
been building generative AI
applications inside of Azure
and we have seen the
generative AI side.
We worked with building
our chat applications.
And in the last session we
did take a quick little jump
in to building an agent.
So we've seen one small
agent up to this point.
But where we're going now is
we're going to be taking a look
at integrating custom
tools in to that agent.
We have seen tools
up to this point.
We've had a little experience
with them in terms of some
of the built in tools.
But often we're going to need
to go further than that.
And in this session
here we're going to dig
in to the Foundry capabilities
for additional agents.
So let's get in to it.
We've already built one
agent in the prior session
and we've seen
this slide before.
I just wanted to recap before
we started digging deeper
in to the realm of tools.
Our agent took in some input.
It was then passed off to
a large language model
with these instructions.
And we called in
to a simple tool.
But here we're going to take
a look over this session
and a couple of the sessions
that are going to follow
in making those tool calls
a little bit more robust,
a little bit more interesting
in what's going on.
Here we're going to look at the
idea of building custom tools.
Your application inevitably
is going to have
to either A integrate
with the application
that it is then embedded in
where it's going to have
to make changes or modifications
to the current application.
Right? One set of
agents are giving
that creativity in that agent.
Or it may need to call
in to a remote API.
For example, if we are building
something that says, "Hey,
this is a policy agent."
I ask, "What's the policy for?"
A vacation request.
They tell me that
policy and say, "Hey,
I'd like to take a vacation
on such and such a date."
The next step would
be let me fill
out that vacation
request for you.
Right? And that's probably
some sort of API call,
maybe some other tools.
So we need that type
of integration inside
of our application so it
can go beyond just a chat.
All right.
So the user's going
to make a request.
Here they're showing that
the user's making a request
about weather and the
agent says, "Gosh.
I don't know anything
about weather.
Weather changes all the time.
I should probably talk
to a weather tool."
Right? And now what
is, and that's kind
of the question here, what is
this weather tool looking like?
And we've got a
number of options
that can be relatively
easily integrated inside
of Foundry agents.
So the first option is this
custom function calling.
In the scenario here, and we saw
that that was a
capability earlier,
in this function calling you
supply in your language,
whether that be in
C# or in Python,
you build a function
of your own.
Then often some sort of wrapper,
some sort of attribute,
some sort of hint, is placed on
that to let the framework know,
"Hey, this is something that
we're going to be calling."
Right? Once the agent gets an
understanding a definition
of what that function looks
like it can then reason
over its description and
then understand, yeah,
I'm going to need to
make that function call.
The agent doesn't call the code.
Instead the agent gives back
a response that says, "Hey,
I need to make a tool call."
Or more reasonably "You need to
make a tool call on my behalf."
Then you're going to write
some form of dispatcher code.
You're going to write some
code that reads that request,
takes whatever parameters
are necessary,
and calls that function
on behalf of the agent.
You're going to write that kind
of translation
switchboard dispatch code
so that it can run locally on
the client, on the host machine.
Right? This is kind
of our Spackle.
This is our last resort.
This is our if we can't find
another tool we'll fall back
on building a custom function.
But we also have the ability
to rely on Azure Functions.
Okay? And so Azure Functions,
the name implies it's
just a function.
Many of you who know Azure know
that Azure Functions is an
entity unto itself inside
of Azure.
It's incredibly powerful,
especially when we need
to offload compute resources.
One of the things
that we see here
with running a
custom function is
that when we're running a custom
function here we're going
to be relying on the compute
resources of whatever
that local application is.
And in many cases what we're
doing might be compute intensive
and something we want to
offload to another system.
And that's really
where something
like Azure Functions
can come in to play.
That we can have the
agent make that request,
understand the API, understand
what needs to be invoked,
and then invoke that
Azure function for us.
So instead of
getting a call back
to the client it
makes that call.
It understands that
much in a similar way
to we saw it making its own
calls when we were working
with web, when we were working
with the code interpreter.
It took care of those.
We weren't relying on it.
And the same could be
true for Azure Functions.
Third in line here
we have Open API.
So many of you are aware
that if you're going
to build a restful API nowadays
that we're often using Open API
sometimes just called Swagger
as a descriptor of the API.
And agents can be given
those descriptors,
given the descriptions of
those, and understand how
to invoke and call these.
Right? This works really well
when we have near the agent
we have some sort of web call
that can be made or rest
call that can be made
and invoke those APIs.
And last in here is
Azure Logic Apps.
Logic Apps are the
low code scenario.
They're kind of
sibling technologies
to that of Azure Functions.
Both of them often arrive at
some of the same story lines.
Where Azure Functions are
straight up code, right,
the Azure Logic Apps are
typically a low code scenario.
But they both potentially
have an HTTP end point
that an agent may invoke.
So what we need to take
a look at is we need
to get a little hands on
in getting some experience
in putting these together.
So we're going to have
I'm going to walk you
through an example here
where we will go ahead
and build the function.
We're going to start a little
end to end on this one.
We're going to make sure that
you've got the tools to kind
of build the environment
and then we'll do
that just the once.
But we will build a
function, grab those tools.
We will see kind of the
dispatch that's necessary
to make all of that happen.
All right?
Take a look.
For starters we are
still using a project
that has been created
inside of Foundry.
Here's a similar project
we've been using all along.
In earlier examples again we
have recreated the agent.
In this case the application
will create that agent
and we'll see kind of some
of the code differences.
But to make sure that we are
on the right track I am going
to grab the project end point.
Again typically we will use the
project end point when talking
at the agent level as
opposed to the model level.
I'm going to grab that and we're
going to pop in to our own.
We're going to make sure
that I've got this.
This should already be
there, but I'm going
to make sure I've got
the right one there.
I do. We're in good shape.
We have our project
end point here.
In this case we're grabbing
the model name simply
because the application itself
is going to build the agent.
Then let's swing in to a
little bit of code here.
First and foremost we're going
to jump in to the functions.
And these functions
these are just kind
of straightforward
Python functions.
A bunch of helper
functions up front
where we are loading up events.
So let's talk about the scenario
here or what's going on.
So we have data files here.
These data files are
astronomical events
that are going to
be taking place
over the next little while.
And we want an agent who has
the ability to say, "Hey,
what events are there
coming up for my area
that I can look at next?"
And we will have an ability
to grab this information
from our local function.
You can imagine this
being a database call.
You can imagine this being a
number of things right now,
just a simple little text file.
When folks want to
rent a telescope
to view those events we have
a couple priority levels here
for rates.
It's standard, advanced,
and premium telescopes.
And then priority multipliers
depending upon how urgent they
want the telescope.
So local data again.
This is emulating/simulating
what could be local database
calls which could be
web service calls.
Could be anything that
need to be invoked
from the client machine on
the application itself.
And then we have functions that
are interacting with that.
So we have here a function
to determine the next
astronomical event.
Next visible event.
And it's grabbing information
from that text file.
A function to calculate the
observation cost based upon
again the concept inside
of that text file.
And then finally the last one
here is to generate a file
that is going to be the
observation report and in
that report we're going to
have the date, the observer,
the location, the event,
when the next one is,
what the date is, and the
telescope booking information.
Right? We've got a
standardized output function
about what this
needs to look like.
So those are the three things
that we want to be able
to have our agent invoke for us.
So when we dip in to the agent
code itself a little bit more
in terms of our imports up at
the top we are indeed bringing
in Azure AI projects and the
project, but we're also bringing
in things like the function
tool capability as well.
Right here we are then
building the project client.
So again using our default Azure
credential we are building the
AI project client.
We saw that in the
earlier example passing
in the end point
and the credential.
And then from there we are
also getting our hands
on the Open AI client all at
once within a width block
so it can be cleaned up
when this is all done.
And this is the part
that's interesting
for us right now
is the definition
of the function tool
definition that wraps
around the functions themselves.
So we saw earlier
three functions.
We have an event tool.
That event tool is
a function tool.
This is the name
of the function.
This is the description.
How will the agent know
that this function
needs to be invoked?
And what are the
parameter descriptions?
How do we know what to pass
in when invoking them?
The agent when it feels
appropriate will say, "Okay.
I'm going to call
this function."
And it will give us an object
that we can then use
as the parameter.
So it needs to know
what those are.
So in this case a location
is going to be passed in.
Then the cost tool here.
Calculate the observation cost.
In that case again that's the
calculate observation cost
function that we
saw a second ago.
Well, the description first
of what it looks like,
and then the parameters,
the telescope here,
the number of hours,
and the priority.
All of those are required.
We don't need to
have any others.
And then the last function
being that of the report tool.
The report tool its name is
generate observation report
and a description.
And the parameters need
to be passed in for
that function to execute.
So at this point we have three
variables at our disposal
that are describing those
functions, the event tool,
the cost tool, and the report.
Now we're going to the project
client in to the agent's object
and saying, "Hey, create
for me an agent."
The name of the agent is
going to be astronomy agent
and here's going to
be the descriptor.
We're going to use the
model that's described
in our environment
variable file.
We have a description for it.
And we are passing
in those tools.
This is also where we
could pass in tools
like our web search
tool could be in there.
The standard tools that we
saw earlier could also be
in this collection.
We are using the responses
to create a conversation.
And then we are going
in to our loop.
Pass in the role,
whatever the user input.
Pass in the conversation,
whatever the user
input is asking for.
We're making a call,
but then things start
to get a little bit interesting.
Here's our response coming back.
We're checking if it failed.
If it did, we have a failure.
But if the response says, "I
need to make a function call,"
this is the agent saying, "You
told me about these functions.
It looks like I'm going
to need to invoke one."
So the response type being
function call it will then pass
in the function name and
here are three names
that we saw as we
passed that in.
Next visible event.
Calculate observation cost.
Generate. Any one or
multiples may be requested
on a single call.
And if that's the case
then we are calling them.
Then if that's the case we
are calling those functions.
The large language model
itself, the agent itself,
doesn't have access
to our local machine.
So it is making a request
and we are complying.
We are invoking those.
We are getting the results back.
And we are appending that in
to a function call output.
Sending those back
up the system.
And then getting the response.
So there's a little bit of
negotiation, a little bit
of kind of a switchboard
operator where we have
to handle the collaboration
between the agent
and our local code.
So with that in place we should
be in pretty good shape.
Let's give this a run here.
In all of this we will
load our application up.
Python and agent.
Could get the call
up to Foundry.
And then we will give a
quick little prompt here.
I need the next event that I
can see is from South America,
and give me the cost for five
hours premium telescope time
at normal priority.
So what we've got
here is a prompt
in which we really are going to
need two of those function calls
to satisfy this prompt.
We're going to need that
next event function call
and we are going to
need an estimate
at five hours normal priority.
We're going to send that
call up to the agent.
The agent will then identify
that those two functions
will need to be met.
That will come back
to our system.
Our system will invoke
those two functions,
pass the results back in.
It will then get those results
and give us our response.
So here for the
cost of five hours
of premium telescope normal
priority it's $1,875.
And oh. I skipped over here.
And the next astronomical event
from South America is the Saturn
Mars conjunction July 10.
And that's awesome.
So both of those were
invoked from our system.
So then we can go a step
further and say, "Hey,
generate that information in a
report for Bellows College."
Bellows is one of the
parameters required so the
for whom is this required.
So it should then invoke
that report function.
You'll notice that report
function created a local report
here and gave us
back the result.
We can see what the
chat response was along
with the function itself.
And this function generated
this report for us.
So in this example
here we have seen
where our agent can invoke local
functions inside of a client.
All right.
Let's do a quick review here.
So what are custom tools and
how can they help you develop
effective agents?
Give you all a second
to read what you see
on the screen there.
All right.
And custom tools are callable
functions that an agent can use
to extend its capabilities.
Number two.
You need to integrate
functionality
from an open API 3.0
based web service.
What should you do?
In this case we're going to use
the open API specification tool
and the agent definition.
We really started opening up
the door to a number of tools.
We saw that custom
tools can be used just
by exposing functions
in the native client.
We saw that there's an
ability to do open API specs
so that we can connect to web
services and restful calls.
We talked about the fact
that we could use Logic Apps
or Azure Functions as a
secondary conduit to these.
In this session we expanded
on what an agent can do
beyond the built ins.
We covered why custom
tools are essential,
reviewed the implementation
options available to you,
and walked through how to
integrate them in to your agent.
Thanks for sticking with
the develop AI apps
and agents on Azure.
Extending agents with
custom tools is one
of my favorite topics.
And I hope walking you
through it was as fun
for you as it was for me.
Keep that curiosity going.
New tooling lands every week.
And the people who are exploring
are the ones who stay ahead.
There are many ways to continue
your journey and I invite you
to search for your
next favorite topic
on Microsoft Learn
at aka.ms/learn.
> Source: https://www.youtube.com/watch?v=EmBPT_tIs8Y

[ Music ]
ROB FOULKROD: Hey, folks.
Welcome back.
This is bonus Part 7
in the generative AI solutions
in the AI 103 course.
I'm Rob Foulkrod, Lead
Technical Trainer here inside
of Microsoft.
We've seen our
chat applications,
but now we have one module, one
last section here that's kind
of the pivot point
between this and agents.
Here we're doing just enough
with agents to wet your whistle
to get you ready to move
into the next agentic
development section.
So here we're going to take a
look at just starting the kind
of what is the definition of
an agent, where am I going
to use them, and what
does it look like?
So first, let's take a look
and define, what does it mean
when we're talking
about an agent?
And how is that different
from a chat application?
Because if we look here, and
if you squint just right,
you will see things on the slide
that we have already
talked about.
We have already discussed
large language models.
We have already
added instructions
to those large language models,
and when we were in need
of more data, we wrote tools.
So that feels a lot like
what we have seen before.
But here, we're just
going one level deeper,
that with this agentic layer,
we're not necessarily targeting
a specific large language model.
This layer here does give us
the ability to have flexibility
as we start to choose what
those language models are.
The instructions are also
going to differ a little bit
when we start to
think less about
"let's have a conversation"
and more about
"let's do a particular thing."
Our user has identified,
in our chat conversation,
they've identified the need to
fill out a particular form.
Where we last left them, we
told them, "You need to go fill
out that form," but now,
with an agentic approach,
we're going to fill
out the form for them.
We're going to
take care of that.
We may present them with
the information and say,
"Does this look right?"
They can say, "Yes, it does,"
and we can send that on its way.
The instructions are
going to be more about
"this is the conversation
and these are the actions
that we can take," and our tools
are going to be more robust,
more interesting,
more complicated
than what we had in the past.
So we were looking at
simple retrieval tools.
When we had our web search tool,
when we had our
file search tool,
we were really concentrating
on let's get more
data to the agent.
Those don't go away.
But on top of that, we're
going to be more focused
in on these are the
actions that we can take.
These are the APIs
that we need to call.
These are the tasks
that must be started,
and maybe even these are the
agents that we need to talk
to who can get this done.
Maybe this is a Level
1 who's just figuring
out where we're going, and
then we've got a series
of agents behind us who we will
-- who are specialized in one
or more of those tasks.
So we bring all of these
together to build an agent,
and then the addition
that we tend to see is,
this is not usually
a one-and-done.
We're not usually making a
single pass through this,
but we're going to have
some sort of loop.
We're going to keep
going through this
because we may need, in
this, not just one action,
we may have to call three or
four actions, so we're going
to keep going until
the process is done.
You may hear some folks refer
to this as the "agentic loop."
I think Scott Hanselman
as of lately,
I don't know whether
he coined it or not,
has taken to calling this
the "ambiguity loop."
This is the areas where large
language models are particularly
effective when we don't have an
A equals B, C equals D scenario
where we have to draw a little
bit of a fuzzier picture,
large language models do
a phenomenal job here,
but they may have to
repeat again and again
to get to those solutions.
So where are the areas that
these are most effective?
And this is just a start.
You all may have in your mind
right now a collection of ideas
where agents may be helpful,
but one of the first areas is
that of routine tasks.
We can do the task ourselves.
We have been doing the
task for a long time,
but the task doesn't
require a full-on human.
Right now it requires a human,
potentially because we haven't
built another solution,
because there's just
enough that's vague enough
that we haven't been able
to build a batch file.
We haven't been able to
build an application
that does this just yet.
But with this agentic or
ambiguity loop, the automation
of some of those tasks may
become far more readily
available for agents.
When things are monotonous,
when things don't require a lot
of human thought, we would love
to transfer those
off to an agent.
On the same side of things,
when it grows beyond what
a single person can do,
when the person is
becoming the bottleneck,
the reason we can't go faster is
because this poor soul is
working as fast as they can.
If we can transfer that off
into an agent and then have
that agent scale
over the multitudes
of systems that we have.
When we need analysis in real
time, when data is coming
in at potentially such a scale
that we can't have a single
person deciding on all of that,
when it's at that level
that agents are successfully
making those decisions,
that they're looking
at the incoming data
and we've been able to hem
them into the right direction
where they can then
surface those insights.
One of the areas that I
just see in something
like this all the time
right now is log files,
that I need to do an
analysis of this log file,
and that log file is huge, and
the scrolling through or trying
to find some sort of
regular expression
that extracts the things
that I need from it,
agents can be
phenomenal at dealing
with massive amounts
of data in real time.
And then the other
opportunity here is
that agents don't really
need a lot of PTO time.
They don't need to take
a lot of vacation.
They can work 24 hours
a day, 7 days a week.
We are more and more
a global enterprise,
that there are folks all over
the world who need services,
help, sales, and if your
organization is hemmed
into a particular time zone,
then it would be really helpful
if that agent or those agent
tools are still available 24
hours a day.
So those are kind of the
categories, but what are some
of the use cases
that we might see?
So the first might be kind of
a personal productivity side
of things, that I need
certain tasks that are done.
I can tell you absolutely
on this particular PowerPoint
deck that's in front of you,
there's a summary at the end
of every single section,
and I didn't write
that summary to start.
I said, "Hey, agent, build
me the summary at the end
of each one of these
sections," and I went through
and I edited it and
I cleaned it up,
but I didn't start with those.
As a matter of fact, I remember
very distinctly having four
different screens open and
having four agents running
on all of those at the
same time building those.
Personal productivity is
super helpful when it comes
to augmenting your own ability.
But it could be sales,
that we've found --
a user has found us.
They are on the site.
They came to us.
Now let's have a
conversation with them.
Let's find the products
that they need.
Or flip side of that,
we are the agent.
I need you to go through
and find, going through all
of my customers right now,
find the opportunities
for this new thing that we've
been -- that we've developed.
Find those leads.
Draft an email for me.
Let me see that, and
then send that out.
I had a conversation, here we
were talking about research,
but still in the idea of sales,
I had a customer who was talking
to me very specifically about
doing a bunch of research by way
of agents to develop an
entire new product line
at their organization.
They used the research
capabilities of these agents
to find out what that
market would look like
and start building the proposal
for that brand-new product line.
So are there any major
shifts in there?
Or, generate a summary of --
summaries are phenomenal --
generate a summary of this
two pages of activity.
What do we need to know?
How can we synthesize
that very quickly?
And customer service, that there
are a number of activities that,
while a customer is going to
say, "This is what I need,"
we don't necessarily need a
person to go grab that file
and to hand it off, that we
just need an agent to be able
to translate and to be able to
key in on those important terms,
figure out what the action is
going to be and take the care
of that for us, create the
log, create the visibility
so we see the action
that's there,
but we don't necessarily
need to escalate
to a person every single time.
So what does it look
like to build an agent?
Well, from our perspective
here, step one, you're going
to go build yourself
a Foundry project.
We build the Foundry resource.
In that resource, we're
going to drop a project.
Then we're going to
create the agent.
So an agent is going
to be a combination
of instructions and
models and tools.
So select the -- all the work
that we did earlier today
on finding the
models that we need,
making sure that
they're optimized,
all of those things take place,
and then we build this
agent layer over the top.
We create those instructions,
we craft the tools
that are necessary, and we
bring those all together.
We can then test that
agent in the playground
and keep a completely
server-side version
of that agent.
What's really cool here is
having this on the server side.
We have multiple applications
that are all using
that same agent, and while
we're there, we rev on that.
We check out -- we find
out the weak points.
We find where it's a
little bit lacking.
We can do all of that inside
of the Foundry if we'd like.
Then we can deploy that to where
it's really going to be hosted,
the long-term solution,
and potentially integrate
that into our applications.
So the things that we're going
to have to have for all of this,
you're going to build
yourself a Foundry project.
Foundry gives us, again, the
agents, the models, those tools
and assets wrapped around it,
and we will pick a particular
model that's going
to be deployed.
Now, along the way, we
may run into a bunch
of other resources
that we may need.
We may bring in something
like Azure AI search
as our RAG opportunity.
We may bring in storage
accounts, again,
for potentially
RAG opportunities
or also potentially for output.
We're going to see a
number of kind of vision
and speech scenarios where
we have to write files down,
so we might bring in
something like Azure storage.
We may bring in Key Vault
to handle some of the --
maybe the API keys of
the security credentials
that are needed when
we're integrating
between multiple systems and
potentially Azure functions
as a mechanism to have kind of
on-demand compute when we need
to extend beyond the compute
of the agent itself.
Now, my initial conversation
in that slide was go
to Foundry portal.
Go build that inside
of the portal.
It's great for prototyping.
We get a visual representation.
We can click our way
through and succeed.
Life is good there.
The downside to something like
that is the repeatability,
so we also have a
code-based solution.
The things that we are
doing there inside
of the portal we
can do with code.
We can build agents
completely from code.
That gives us the ability to
check that into version control
and then handle maybe the code
reviews a lot easier than doing
that through some sort
of user interface.
So a code-first approach is
definitely a very common
approach, especially
as you are --
you've done this more and more.
Early on, a lot of things
may start in the portal
that might start in
the user interface,
but as you all are developing
more and more skills
and this is becoming
more commonplace,
then more formalization inside
of code would be
equally appropriate.
It doesn't mean a thing if
we don't actually do it.
So let's take a look at building
an agent inside of Foundry,
then interact with
it by way of code.
Let's start by
swinging into Foundry.
At this point in time, we've
already built a project.
We've got that up and running.
We have deployed a
few models in place.
We'll be using the GPT-4.1
model one more time.
We'll go here into
agents and we will go
and build a brand-new agent.
At this point in time, we'll
give this the name here
of "IT Support Agent," and
we will give it some tools
to lend support to
those who need it.
So right off the bat, we want
to give it a decent
voice in all of this.
So we've got an instruction
set that we will include here.
You're an IT Support Agent
from Contoso, you're going
to help employees with technical
issues and IT policy questions,
and a series of guidelines
here that are for the system.
Now, to make this a little
bit more than just chat,
we'll include some
tools in place.
Go ahead and add in here
the code interpreter,
and we will add a file search.
We will build a brand-new index.
We talked earlier
about the ability
for large language models to go
and use RAG, pull resources in.
So here, we're going to
drag in an IT policy file.
We want take a look at that.
We will see what the policy
file looks like, ask for reset,
or software installation
requests, etc., and so forth,
so just kind of
general information
about our IT policies.
We're including one file to
make this nice and easy,
but we can obviously include a
whole bunch of different files
and in different formats.
So we will attach that.
Then we will do the same.
There we go.
We will do the same for
the code interpreter here.
The code interpreter will
go ahead and add the files.
Well, and in this case, we've
got a system performance file
that is CSV that just has a
series of columns in here
about system performance.
Take a quick look.
That looks like --
The CPU percentage,
memory disk, network.
And now we've got a
little bit of data.
We've got it set up to
understand its role.
All right, so now that we've got
the agent set up, let's go ahead
and perform a couple of tests.
So we will start by
testing just its ability
to hit the RAG systems there.
So what's the policy
for password resets?
In this case here, getting a
good policy reset in there,
well-grounded, and it is
referencing the IT policy file.
We can continue.
We'll try one more time here
with our new software request.
Looking good.
Again, well-grounded, coming
back with the data from the file
and a reference to
the file itself.
Cool. Let's now test its ability
to look at the internal data
in our system performance data.
So can you analyze the system
performance data and tell me,
are there any concerning trends?
Here, it should pick up on that
keyword "system performance."
Go back to the code tool.
Excellent.
We can see here that it's
written a bunch of Python code.
We can see what that
code looks like.
We can see the file itself
that it's analyzing
and concerning trends.
The main issue here are high
CPU and memory utilization.
If you'd like more specific
information, like graphs
or timestamps, let me know.
I actually really
like that idea.
Why don't we ask it for
a chart of CPU overtime.
Again, this is going to
go back to the code tool.
Should ask it, then,
to build us a chart
and then give us the opportunity
to download a chart.
Okay, so let's go take
a look at the chart.
Perfect. And so here we see
we're getting some spikes
above the 90% mark, looks
like multiple times.
All right, close that out,
and let's go and take a look
at what this looks like
from a code perspective.
So we have our IT support agent.
Our IT support agent is sitting
inside of our project demo 5661.
So let's swing into the VS Code,
and we've got a few things
that we're going to look
at here inside of VS Code.
Number one, earlier we installed
the toolkit, so we're going
to look at the toolkit here,
and inside the toolkit
we have the models
that we have been using, and
we've tested those before.
But what we also have,
we go ahead and refresh,
is we should also have
here our IT support agent
that we didn't have
just a second ago,
and we can continue
to use and test that.
We could have built
that from here as well,
but we could start asking
questions again of the system.
What is the policy for reporting
a lost or stolen device?
Oh, one real quick -- so what
I saw in this, let me just --
we've got the agent here,
and I saw immediately
we went to web search.
All right, so that's important.
So right now we are scanning
the web, which means,
as we have seen before, good
demos are ruined by a lack
of save so that we -- nothing
up my sleeve here,
let's save our agent.
There we go.
Now we've got V2 out there.
Life is good.
We'll go back over here and
we will reopen up that agent.
Of said agent, there
we go, and run.
There we are.
In this case here, we're seeing
it successfully used the
file search.
We're in good shape.
We just want to make sure we're
grabbing the latest agent.
So life is good there.
All right, so then let's go
and grab the project endpoint.
This is the first time that
we've grabbed this endpoint,
because up to this point
here, we've been talking
to the large language
models directly,
in which case the open
AI endpoint was perfect.
But here we're zooming
out a little bit,
and we've got this
higher level abstraction
of an agent to be used.
So in this case, we want
the project endpoint there.
So we're going to swing into our
code, into our environment file,
and you can see what we're
asking for right here.
We're putting in the
project endpoint,
and we're putting
in the agent name.
In the past, we were saying,
well, what was the model?
Well, the model is dictated
by the underlying agent.
We don't have to talk
about what the model is
or what the tools are
that are installed.
The application
doesn't concern itself
with those lower level details.
It's just, I need this
particular agent.
So we will save.
We'll dip back into
the agent itself,
and we have in here a little
bit different set of includes
that we are bringing in.
So instead of bringing
in open AI directly,
we are bringing in
Azure AI projects.
If we look at our
requirements file,
we'll see that we
want projects in here
and identity are the
two major players.
Now, that isn't to say
OpenAI isn't there.
If we were to dig deeply
into the dependencies
of our dependencies and start
taking a look at the libraries
in here, we would see
that OpenAI is indeed a
dependency of our dependencies.
It's there, but it's just
not a top-level dependency
at this point.
So we're bringing in
our AI project client.
We start off with a series
of kind of helper functions,
but when we get into the
main project, we are,
as we have seen before, using
the default Azure credential
to authenticate ourselves
to the project,
and then here is a new use
now of the AI project client,
passing in the credential and
passing in the project endpoint,
again, not the OpenAI endpoint.
Not to say it isn't there.
You'll notice we're going
immediately from project client
to get OpenAI client so that we
can reference it beneath the
covers, and we are then using
the conversations endpoint,
or the conversations
API with all of this.
Then we're into our standard
game loop here, conversations,
we're going to add a new
conversation in there.
Here's our role, passing in our
conversation ID that we started
up top so that we
can get the history
of that conversation in place.
And then these
conversations you saw that,
when we were building
this in the agent itself,
they can be a little
bit more complicated,
like there can be files that
need to be downloaded and such.
So we do have a code base in
here that is going to look
to see, are there any files,
do we need to download those,
do we have to bring those in?
So we'll hop into
the terminal here,
make sure that's all saved.
Everything is
looking good there.
And let's get Python
agent up and running.
We didn't see this on camera.
I've already gone through
and activated the
virtual environment.
We are using -- I probably
should have said this
at the top, but we are using
a 3.13 Python right now
as of the writing of -- or the
recording of this video here.
The labs are still
based on 3.13.
That may change by the
time you're reading this.
Take a look at the
readme for the labs
to understand what
the requirements are.
But anyway, we give
this a nice little run.
We connect up.
We'll grab ourselves the agent,
and then we'll just start
asking the familiar question
about policy reset.
There we go.
Drop that in there.
What's the policy
for password reset?
All right, so life
is good there.
Let's go back to our questions
about system performance
and make sure that we get a
decent chart out of this.
All right, so then, let's
take a look at the code tool,
and we will check to see about
the system performance again.
So analyze the system
performance data
and identify any periods where
CPU utilization exceeds 80%.
All right, so here
are the periods.
There's a bunch
of them in there.
It just looks like a bunch of
numbers to me, so let's go
and ask for a chart, create a
line chart showing memory usage
trends over time.
It should then use that and
use the matplotlib library
and build us a chart.
The system should
then download that
and give us a reference to it.
There we go.
Life is good.
So here we have our new chart.
Not too shabby.
All right, if we needed to do
a little bit more statistical
analysis and all of that,
we absolutely could.
Let me bring that up
a little bit here.
Agent is thinking.
There we go.
What is the average minimum
and maximum values in there
if we were -- needed to
do even deeper analysis?
Find any correlation
between the two.
Know that there are
libraries inside of Python
where it can rely on that
and give us back a strong
positive correlation there.
So we get a coefficient of 97%.
I don't know what that means.
Tell me what that means.
Show your work.
All right, and so then
we can get a description
of what's going on.
So high utilization.
We can see one -- or they're
increasing together there,
CPU and memory percentage,
and so giving us an idea
of how this is coming together.
So not too bad.
The key here, what we're
looking at really is
that the application had to
rely on a pre-built agent,
and this could be one of several
applications that are doing this
as opposed to what we were
doing earlier in the sessions
where we had to manually
work with those tools.
We had to manually
set up the LLM.
Now, here we're just referring
to an existing agent.
All right, so how
did you all do?
Let's do a knowledge check.
Okay, number one, what's
the primary benefit
of using Microsoft Foundry
Agent Service compared
to building agents
with standard APIs?
And what we see is that it
handles things like tool calling
and state management, some
of that infrastructure
automatically.
Number two, how does Microsoft
Foundry Agent Service handle
conversation state?
And this is very similar
to our earlier example.
It uses that response as
API, so it automatically has
that conversation context
back on the server.
So this is a
beginning and an end.
So at the end, this is the
end of our very first segment
with Azure Foundry, but there's
so much more ahead of us.
So right now we've taken
a look at just starting
with agents sitting on
top of our conversation,
our chat APIs from earlier.
Agents give us that
combination approach of models
and tools along with
maybe some goals
and activities that
it can perform.
They're best for things
that are repetitive.
And then we took a look
at building agents.
We used the Foundry SDK,
and this was the first time
that we were using
the Foundry SDK
as opposed to the OpenAI SDK.
Built that inside of VS Code
and got our very first
agent up and running.
We also saw that there
could be a couple
of different approaches, and
we did a little bit of each,
but it could be a Foundry
scenario where we're building
that off in the
Foundry user interface
or it could be a complete
code-based scenario.
This finishes up the very first
topic of the AI 102 course.
In here, we have
talked about Foundry,
creating projects
inside of Foundry.
We've taken a look at
selecting the model
and then making sure the
model was appropriately fit
for our application.
We looked at building
a chat application
and extending those chat
applications with various tools
to give them further knowledge.
We have taken the underlying
models and made sure
that they had the right
performance characteristics
that we were looking
for in our application,
that they knew the right things
and they were behaving
the right way.
We then took a look at
responsible AI and made sure
that we had a plan in place to
validate the security risks
of our AI application.
And then finally, we added
this little candy coating
over the top of it where we
built our very first agent.
We've got so much
more of that to come.
The next section that
we're going to be looking
at in this AI 103 course
is the agentic workflows,
so we'll spend more time there,
and then we'll take a look
at other Foundry tools,
continuing that path.
There's so much more ahead of
us, and even what we've done
so far, if you wanted to see
some of those code samples,
if you wanted to dig deeper
into some of that information,
all of that is available
on Microsoft Learn,
and you can find that
at aka.ms/learn.
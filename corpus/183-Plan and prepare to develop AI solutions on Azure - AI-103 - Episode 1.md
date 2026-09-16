> Source: https://www.youtube.com/watch?v=PE_7sP3uN5k

[ Music ]
ROB FOULKROD: Imagine this,
a brand-new project lands
on your desk, ship an AI-powered
customer support agent.
The requirements are stacked,
the timeline is tight,
and expectations are high.
It needs to understand voice
when a customer calls in,
it needs to search
your policy doc
so that answers are actually
grounded in your business,
and it needs to call your
internal APIs to do real work,
open a ticket,
update an account.
So where do you even start?
Which Foundry resources
fit the timeline
without blowing the budget?
How do you keep that
agent grounded, governed,
and safe every step of the way?
And how do you ship it without
handwaving all the hard parts?
That's the reality most teams
are walking into right now.
And it's exactly what
this course is built for.
Welcome to "AI-103: Develop
AI Apps and Agents on Azure."
Hi, I'm Rob Foulkrod,
a Lead Technical Trainer
here at Microsoft.
I've been a Microsoft
Certified Trainer since '99,
and I have spent my career
helping professionals ship real
solutions across developer
tools, DevOps, data, and now AI.
Across this course,
I'm going to walk you
through the same path
I'd walk a customer
through if they handed me this
customer support agent project
on a Monday morning.
We'll move from the
foundations all the way
to production-ready agents
on Microsoft Foundry.
Here's how the
course is laid out,
four topics building
on each other.
In Topic 1, we'll learn
the Foundry's platform,
design chat experiences,
call tools to form responses
and ground answers
in your own data,
and apply responsible
AI from day one.
In Topic 2, we'll move from apps
that respond to agents that act,
building Foundry agents,
extending the grounding
with them with tools,
and orchestrating
multi-agent solutions.
And Topic 3 will give those
agents a voice and a vocabulary,
the language and speech
services, multimodal audio
and chat, real-time
conversations, voice live,
and translation
across languages.
And, finally, apps that will
reason over visual data,
generate image and
video content,
understand multimedia documents
with content understanding,
and index everything
with Azure AI Search.
By the end of this course, that
agent won't feel intimidating.
So let's get started.
Every AI agent you've
ever interacted
with starts the same
way underneath,
with a generative AI app calling
a model, shaping a prompt,
and grounding the
answers in real data.
So, before we get into agents
that act, we need to be fluent
in the apps that respond.
That fluency is the
runway for everything
that follows in this course.
Before you write a single line
of code, the decisions you make
in the planning phase
shape everything,
which platform you build on,
which models you can reach,
which tools your team uses,
and how responsibly your
solution behaves once it's
in front of real users.
Getting that foundation
right is what makes the rest
of the work easier.
We'll start with what AI
actually is in this context,
and explore Microsoft Foundry
and the Microsoft Foundry
Tools you build with it.
From there, we'll look
at the developer tools
and SDK available to you,
and we will wrap responsible
AI principles that'll guide
everything in this project.
In this session, we're going to
ground ourselves with what AI is
on this platform, we'll
explore Microsoft Foundry
and the Foundry Tools, and
we'll walk you through the SDK
in grounding our thinking
in responsible AI.
This course is going
to be really focused
on this idea of
Microsoft Foundry.
And so the first thing
that we're going to have
to do is start to look
at what Foundry is
and what the components
are that we're going
to find inside of Foundry.
So Foundry itself is going to be
-- as you can see right here,
is this unified platform.
It's a single spot where you
can go to build the agents
that you're going to need.
Those agents are going to
be reliant on a number
of different models so we'll
have an opportunity to preview
and select a huge
number of models.
The model alone is the brain of
the whole thing, but it's going
to need arms and legs.
And those arms and
legs are going
to come from various tools.
And we've got a number of
options available to us.
We have kind of our tooling in
terms of being able to reach
out to external resources,
we'll see things
like MCP a little bit later,
but there's also a collection
of AI tools that we've had
for quite some time that'll
be available to us.
Those will be in here as well.
More on those in a minute.
But the last thing, models have
a finite amount of information,
they've been trained
on public information.
And that public
information has a cutoff
of potentially a
couple of years ago.
So, if we need
private information,
we need your policies, we
need your inventories,
we need those tools.
Those models are
also going to need
to have access to
various knowledge.
So those tools as well are
going to be set up, configured,
and accessible inside
of your project.
Right? So what we're going to
build is a Foundry project.
When we go to build the project,
it will, beneath the covers,
build the resource for us.
So, in essence, the
resource comes first,
it's the landing place.
This is where your
network resources are,
the compute resources.
That's really the platform in
which we will put our project.
Then the project is going
to contain potentially multiple
models, multiple agents,
multiple tools, and knowledge.
Right? Now, before
there was Foundry
and before generative
AI, there were a number
of AI tools inside of Azure.
These tools have
gone by a number
of different names over time.
They have been called
cognitive services,
they have been called
Azure AI services.
And they're still
relevant today.
Right? Now, a number
of generative AI solutions
have maybe eaten away at some
of the functionality that we saw
in the original classification
of tools, but there's
still a number of tools
that are still very
valuable today.
And we'll be looking at those
tools throughout the course,
primarily in Sections 3
and 4 of this course.
But, here, we want to know
where we can find them
and where we can get
our hands on them.
The tools that we have available
here are going to be things
like the Azure Language
in Foundry Tools.
That's our natural
language processing.
This is things like, "Hey,
can we detect the language
that we're running on, can we
find key terms or entities
in that text, can we do things
like lay the groundwork
for translation?"
We've also got capabilities
in here for speech.
Now, there's a number of
generative AI solutions
that have speech
as a capability.
However, picking that
model is more complicated
than just "I need speech."
So there will be times
where you're picking a tiny
little model that's really good
at one thing yet the agent
still needs maybe to be able
to understand speech
or to respond in kind.
So we've got these tools that
we can kind of bolt on top
of those additional models.
So speech and translation
are in there.
The idea of document
intelligence, to be able to read
from PDFs and forms and
invoices and receipts,
and extract that information,
and multi-model understanding.
So we can look at those
documents and say, "Okay,
I know what's on that thing,
I can describe what's
on that document."
These are all some
of the Foundry tools
that we'll be working
with over the course.
So let's walk into a quick demo
so that we can get a feel
for the environment.
All right, so this is going to
be a quick dry run to make sure
that everything is going well.
So, everyone, we are going to be
taking a look at Foundry here.
We'll look at it in a
couple of different views.
First, we'll take a
look at the web UI
where we will create a project
and we'll create a model.
Then we will get into
what it looks like inside
of Visual Studio Code,
specifically the extensions
that are inside of code,
we won't write any code
in this section, but we will
get to that very, very soon.
So, for starters, we are
going to navigate to Foundry.
Foundry, you can see right here,
ai.azure.com is
where we're going.
There's a couple of different
Foundry UIs right now.
The nextgen here is the new UI
that we're going
to be looking to.
You can see that little
switch right there
where you can turn it on or off.
And we will first start by
looking at creating a project.
Now, I've got a few
projects here already,
but we will go ahead and --
through the little Project
Section right here, go ahead
and create a brand-new project.
And, from there, it'll
give us a suggestion.
It'll always be our username
typically as a suggestion
and some random number.
My username right now is demo,
so we'll grab that, and then,
specifically, the resource.
So we talked about earlier that
we have a resource which is kind
of the bucket that holds
all of the components
for a particular collection
of applications, and then one
or more projects inside
of that resource.
So this is the child
inside of our resource.
We'll specify where
we want that to go.
Right now, we will pick
East US 2, which is fine.
We will drop it into a
brand-new resource group,
and then we will go ahead
and click "Create."
That'll take just a couple
of moments to build.
And, a couple of minutes
later, we now have a project.
So let's go.
It then should open up
to our new project.
You can see right
here our demo-0687.
We'll use this one today.
In maybe later sections,
we'll switch up.
Next is what does this look
like from inside of
some of our tools.
So I'm going to swing into
Visual Studio Code here.
I've got that open, kind of an
empty project at this point.
It is empty.
Right? Yeah.
And we're going to take a look
at the extensions
necessary for our app.
We're going to swing into our
extensions and we're going
to look for our
Foundry extensions.
And you're going to
see there's really two
of them available to us.
There is the AI Toolkit
and the Foundry.
As of right now, we're kind
of in a little place of flux
where we have the two of these.
Later on, we will see probably
just the one Foundry Toolkit.
So I still install this one.
It will install both for us.
Only take a moment to do so.
All right.
And now that it's installed, we
see the two of these down here.
The first being -- the first
at the bottom here being the
Foundry and then the Toolkit
where we're going to
spend most of our time.
All right, so there
we've gone through kind
of the demo that I need to see.
Hope that was helpful.
And let's wrap all
this up in a sec.
Now that we've seen our way
around, let's take a look
at the ways that we're going
to be interacting with Foundry
when we're not in the
Foundry Portal itself.
And so we've got a lot of tools,
really, that are available.
On this slide here, we're
talking about one in particular.
We'll be talking about
Visual Studio Code.
That'll be our primary vessel
that we'll be using
throughout the entire course.
However, whatever
your favorite IDE is,
editor, they're all fine.
We'll look at
Visual Studio Code.
We will look at the
Toolkit Extension as a way
of interacting with Foundry
when we don't have the
Foundry Portal open.
And, of course, GitHub Copilot
when we install the toolkit,
there's a number of skills
that are pre-built in there
that are going to help you
write your code faster.
Okay. And then there's
a matter of the SDK.
You can interact with these
models by way of REST API.
Right? It's ubiquitous,
you can use it anywhere.
But REST is a little bit clunky
for us on the developer side
to be using on the regular.
So, often, we will
have that SDK layer
that wraps over the top of it.
So we have a couple of options,
and we will explore what those
options are in later sections.
But, here, we just want to
introduce that we do have things
like the OpenAI SDK,
which are typically used
for talking directly to models.
Right? When we want to start
a chat with that model,
get a response back, the
OpenAI SDK is perfectly fine.
Right? But, as we start to
layer over the top of that,
when we want to have not
just a chat with a model,
but have a full agentic
platform, well, that's when --
-- the Microsoft Foundry
SDK comes in handy.
It can shorten the
development time when we need
to start including things
like additional tools
and grounding can sometimes
be a little bit easier
with the Foundry SDK.
So you can imagine that,
if you're targeting
the model directly,
maybe the OpenAI SDK works,
but, if you're working
at a higher level, often we'll
jump into the Foundry platform.
And then we just talked about
the other Foundry tools
that were available
to us, language
and speech and translator.
Each of those have
their own SDK.
Right? And so we can
use those directly,
or we'll see there are some
tools that allow us to work
with them from inside
the agentic structure.
And, finally, there is this
idea of responsible AI.
And there's six principles that
Microsoft developed and refined
over the years, the principles
of fairness, reliability
and safety, privacy and
security, inclusiveness,
transparency, and
accountability.
Each one of these are structural
points that we need tools
for all throughout the platform.
So we will see throughout
the course where we can plug
in each of these components.
Right? Whether we're looking at
our choice of data grounding,
whether we're looking at
refining our prompts,
whether we're looking at
building guardrails or UX
or ongoing operations, those are
all components that we're going
to be seeing throughout the
course to reinforce these ideas.
If you want to give a shot,
there is an exercise in here
to walk through the Foundry
project to go ahead and build
and test a generative AI
model, and to make sure
that we're comfortable
with the various endpoints
and working inside of
Visual Studio Code.
This one is a good one if
you are brand new to Foundry
and you want to get
those tools ready
for the rest of the course.
If you've done this a little
bit, you're going to do this
for each section coming
up, so it's an okay one
if you're a little pressed
for time to skip over.
All right, folks, so let's
explore Foundry a little bit.
We're going to spend
a lot of time there
over the next few sessions.
So I'm going to start by
going to ai.azure.com.
And ai.azure.com is
going to be the portal
that we're going to
be in quite a bit.
And, when we go there first,
the first thing you're going
to notice, and I
want to make sure
that you're really clear here
because we've got a
couple different portals,
and so you can see here that
I've got this little toggle
up at the top for
the New Foundry.
And that's what
we want to be in.
We want to make sure that
every time you're doing any
of the examples, anything that
we're seeing through the course,
that you're in that New Foundry.
Now, when I do this,
I'm immediately going
to be asked for a project.
So, in the idea of
this new portal,
there's always a
default project.
And so it asks me now,
"What's the default project?"
And it shows me all the
projects that I have,
of which there are
none at this point.
So we're going to have
to build a project.
So I'll create here,
"Create new project."
I go to give it a name.
This number could be whatever.
And we'll go into
"Advanced Options" here.
And you can see what
you're deciding.
So we're deciding on two things.
Number one is the
Foundry resource.
And the Foundry
resource is just going
to take whatever the
name is with the word
"resource" at the end.
And you're also
picking a region.
And we haven't talked
about this a lot yet.
In future sessions, when
we start talking about --
Later in this session --
we haven't talked about
this a lot yet, but,
later in this session when
we start taking a look at --
oh, it's the next session.
Try again.
Sorry. We haven't talked
about this a lot yet, but,
in the next session
when we start talking
about regional deployments,
it's important to know
that whatever we pick right
now, this is the region
where your models
will be deployed.
If you pick the wrong region,
it's not really a big deal,
we just deploy another project.
But, if you are considering,
and we'll talk about them
in a little detail later,
regional deployments,
this is a big decision here.
East US 2 is going
to be fine for me.
That's a fine description
-- or subscription.
And a new resource group
is going to be fine.
So I'll click "Create" here.
And it'll take just another
minute or so to go and build.
All right.
And so now we are seeing it has
completed building the Foundry.
We get a nice little
introduction page here.
I'll do the introduction
so I won't worry
so much about this page.
And what we have in front of
us here is the New Foundry.
And the New Foundry has a
series of tabs across the top
for the different portions
of kind of the lifecycle
that you're going to
be working through.
And what we're on
right now is Home.
And Home, while not
incredibly interesting,
you will spend some time here
just snagging these endpoints.
We'll need these on a consistent
basis so it's convenient,
you just click "Home" and, boom,
you can grab these endpoints
at any point in time.
Not much else on this Homepage.
We can see kind of some
news sections on here
and then a quick start code.
We'll take a look at that
and a couple other links.
But, generally speaking, the
only thing you're doing here
on Home is grabbing
these endpoints.
But then we have
Discover and Build.
So Discover is the area where
you can search for new things
and then Build once you
have deployed them.
This is where you're going to
be able to work with them.
So, in the Discover, we will see
that we have then a
panel down the side.
And this will be
pretty common as well.
The items here on this panel are
going to change depending upon
which of those tabs we're on,
whether it's Home, Build, Work.
So Home -- the panel will
change depending upon
which of those tabs that
we're on, whether it is Home,
Discover, Build, et cetera.
But, here, in Discover,
we have an overview.
And it's just saying,
"Hey, here are some
of the models that
are possible."
Very similar to that if
we were to grab models.
The next section, we will spend
a bunch of time trying to decide
which of these models to deploy.
I'm just going to grab
one really quickly here.
So I'm going to search --
-- for our GPT4.1, click on it.
Again, we'll spend more
time later trying to figure
out which models to deploy.
But I'm just going to grab this
one right here, quick deploy.
We'll use the default settings.
And, instantly, we
are now on the Build.
You can see the little
bolding right there.
We're on the Build tab.
Right? Let's go back to
Discover for just a second just
to see some of the other things
that we could take a look at.
Again, this is all exploration
and kind of planning
of what you are going
to be building.
So, here, inside of Agents,
there are a few templates
that you could pick from.
Right? This is a -- we're
not going to spend a bunch
of time here in this course
talking about these,
but I do suggest that
you dig down into those
and take a look some of
those starter templates.
They're a really good spot
for jumping off for new code.
We'll talk in depth
about a bunch of tools.
If you just wanted to scan
those tools up front,
we've got that available.
And end-to-end templates
are available here as well.
So, again, we won't
spend a lot of time here
in the course going forward,
but I think you should
when you're popping
into the Foundry.
Right? So that's our
Discover side of things.
Let's swing into Build.
And over here in Build,
really kind of the head
of all of this is Agents.
That's really the next topic
over so we're not going
to spend a bunch of time there.
But we can then see here the
models that we've deployed.
And you saw just a second
ago I deployed GPT-4.1,
so we've got a version
of that available to us.
And, from here, we could then
go and work on that model
in the playground and
kind of test it all out.
So we can see here
we will spend a lot
of time building instructions,
"What can you do?"
And a almost non-instruction
model here will say, "Well,
I can -- I don't know,
I can do lots of stuff.
I am a large language model.
Here are some ideas
you can try."
Other things that we're going
to be looking at as we go,
we will spend some time
taking a look at fine-tuning.
So, once you've deployed
a model, you may find
that it's not exactly what
you want from that model
that you might want to change
its behavior a little bit.
We can go through a
fine-tuning process.
We will see that.
Models are only as
good as the tools
and the knowledge
that they have.
So, before we go to add
those into our agents,
we'll often spend time going
ahead and building those tools
or adding that knowledge.
In a little bit, we will
start talking about things
like the six principles of
responsible AI, we will start
to see things like
guardrails and evaluations
as being part of that effort.
And so Build is the spot where
we're going to spend a lot
of time here creating
our resources.
Where we won't spend as much
time is on the Operate side
of things, but it's
still important, right,
that the Foundry is
giving us this overview
so that we can see all
things that are associated
with our models and our agents.
So, over here, in the Assets
side of things, we would see all
of our agents, all of the models
that we've been deploying
across projects,
all of the tools
that we've deployed
are all here.
When we're looking at
things like compliance,
this is a one-stop shop here
for our policies, guardrails,
security posture,
security and governance.
You will note -- and we
haven't talked about it a lot,
but you will note, when you
go to deploy models there,
you can only have so much
throughput per model type.
So this allows you to see
across projects how many models
you have deployed and how much
of your allocation have
you deployed of them.
And then, finally, on the Admin
side of things, we will see all
of the projects that we
have available to us.
Right? So that's the Operate.
Then off to Docs.
Okay. Now, one thing that
we did talk about earlier,
if we swing over
here into Build --
-- and we look at our
models, we have a section
in here called AI Services.
And this AI Services, this
is that tools section
that we talked about
earlier that we're going
to have generative AI
models, we're also going
to have those purpose-built
machine learning models
that can do things like voice
live and speak to text.
In Topics 3 and 4, we will
spend a lot of time with those,
but know that, when you
deploy a single project,
you're already ready to go.
You don't have to do a secondary
deployment or bring those,
they're all here
and ready to go.
All right, so we've got a lot
more to do, so let's go back
to the deck and finish this up.
All right, let's see how we did.
Which web portal should you
use to work with assets
in a Microsoft Foundry project?
In this case, we're looking at
the Microsoft Foundry Portal.
And we spent a little bit
of time in there earlier.
Okay? Which component
of Microsoft Foundry
provides pre-built services
for common AI tasks?
That is indeed the Foundry
Tools, those additional tools
that help supplement
large language models.
Which extension should you use
in Visual Studio Code to work
with Foundry projects?
And, here, if you're
using Visual Studio Code,
the recommendation is the
Microsoft AI Toolkit.
So, here, we laid the groundwork
for everything that's going
to be following in this course.
We took a look at
the Foundry projects
and the creation
there of projects.
They are the ones that are
going to hold the models
and the agents and the tools,
the knowledge that we're going
to be building on top of for
the next 20-some sessions.
Included in there are a bunch
of built-in tools, language
and speech, vision,
document understanding,
to supplement what some
of our generative AI
solutions are capable of.
Visual Studio Code is going
to be our primary tool
in this course using the
Toolkit and the Foundry.
And then we're going to have a
series of SDKs, both the Foundry
and the OpenAI SDK
in this topic.
And we'll go a little bit
further in the next one.
And six responsible AI
principles are going
to guide us along the way.
We'll spend some time as we tick
off those requirements along
the course.
In this section,
we just started.
We grounded ourselves in
what AI is on this platform,
explored Microsoft Foundry
and the Foundry Tools,
and walked through the developer
tools and SDKs that we're going
to be using, and grounded our
thinking in responsible AI.
Thank you for participating
in this "Develop AI Apps
and Agents on Azure" course.
I hope you enjoyed learning
about planning AI solutions
on the Microsoft Foundry
platform as much
as I enjoyed presenting them.
I encourage you
to remain curious
and continue exploring
new capabilities.
That's how we're going
to stay relevant
in this fastmoving world.
There are many ways to
continue your learning.
And I invite you to search
for your next favorite topic
on Microsoft Learn
at aka.ms/learn.
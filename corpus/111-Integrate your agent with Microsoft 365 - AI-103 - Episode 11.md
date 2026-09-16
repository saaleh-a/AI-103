> Source: https://www.youtube.com/watch?v=eWYOZkFoNn4

[ Music ]
ROB FOULKROD: Your users
already live inside
of Microsoft 365, Teams, Chat,
the apps they touch every day.
So instead of forcing them
to come to your agent,
what if your agent went to them?
That's the integration
story we're telling today.
Rob Foulkrod here, Lead
Technical Trainer at Microsoft,
and this session is
on integrating your agent
with Microsoft 365.
We'll look at publishing
options Foundry gives you,
walk through publishing an agent
from the Foundry portal straight
into Teams, and
finish by testing
and integrating your agent.
Let's get going.
The agents that you've
been building are fine.
But up to this point, we've been
wrapping them with applications.
But your users are
already in Teams.
They're in M365
Chat, so it's time
to meet them where they are.
We don't have to do a
whole heck of a lot
to publish those agents
into those tools.
We have an option inside of
Foundry, which is a click
and a couple of dialogs,
that we can publish directly
into those tools.
So when you click that button,
what you're doing is you're
getting a few things.
The first thing that you're
getting is you're getting a
dedicated URL.
So this agent gets
published onto an endpoint,
and every time you do updates,
we're just continually
updating that same endpoint.
So it's going to be stable
from version to version.
But we also need to know
what your agent is doing.
And this has been a big change
in the industry as
of very lately.
Typically, agents
have been running
as either an application --
they've taken on the
application's identity,
a service identity -- or
they're running as the user.
But neither one of those
are really giving the full
visibility as to what
an agent is doing.
So when you publish and
build an agent application,
we're getting this idea
of an agent identity
inside of Entra ID.
And so from there, you can
track specifically what
that agent is doing,
differentiated from, say,
the application they're in, when
they're in Teams, when they're
in the chat application.
We can see what the agent is
really doing when we're looking
at monitoring and
profiling tools.
The third thing
that we have in all
of this is user data isolation.
As a user is consuming
the resources
of that particular agent,
that it is independent
of any other user.
So I have had many folks in
agents in general ask, "Hey,
if I am writing this
particular prompt,
is anyone else seeing
what that prompt is?"
And in those cases, the answer
was no, and in this case here,
the answer continues to be no.
We do have user isolation when
we are publishing these apps.
So what we're going to do when
we go to publish the agent is,
as we've been saving our agent,
it's been automatically
incrementing in version.
The very first time you
save it, you get one,
and every time you're
making a modification,
it's going from there.
You have an option when
you go to publish.
The first thing you're
going to do is select
which version you
want to publish.
Often it's the latest, but
it doesn't have to be.
And making a modification
to that agent doesn't
instantaneously make that change
in what we would
call production.
You will have to selectively
go and do an update
at a later point in time.
That gives you the luxury
of being able to test
and make modifications without
fear of breaking production.
So once you've selected that
version, we'll go and click
on the publishing process.
That'll open up a dialog.
Beneath the covers -- you
won't see this directly,
but beneath the covers
inside of Azure,
an Azure Bot Service will be
created that'll handle the
routing between Teams
or between M365 Chat
and your Foundry agent.
You'll fill out the pieces of
information that you need,
whether that be name
and description,
potentially depending upon
how you're doing this,
publish certain icons so that
it is well represented inside
of the toolbars.
Maybe a privacy
policy, terms of use.
Fill out that metadata so that
folks can accurately understand
what's going on with your agent.
And then we have what's
called a publishing scope.
So in here, the default option
will be publish it in such a way
that it's only visible
to you, the developer.
This is a great test where
you and I would be going in,
we'd run it, make sure
that it's working well,
that the connectivity between
maybe your agent and some
of the Foundry IQ endpoints or
maybe some of your MCP servers,
those are accurately working
in the published environment.
But odds are good we're
really not publishing
for ourselves very often.
Eventually, we will need to then
publish for the organization.
And doing so will require
an additional step.
If you are picking the
organizational scope,
then there will be
an approval process.
An admin will need to
go into 365 Admin.
There is an agents section
in there, and they will see
that you are asking for it to
be approved, approval required.
And then they can go through,
review the metadata,
and they can choose to approve
or to not approve the product.
All right.
Let's take a look at
what this looks like.
So we're going to go build a
quick agent, then we're going
to publish it both to
Teams and to M365.
Now, let's start by going and
building ourselves an agent.
Go in there, create a new
agent, and in this case,
we will call this our
enterprise knowledge agent.
And we will upload a
little bit of data to it
so that we know
it's not just kind
of generically making
up answers here.
We will pick our GPT-4.1,
which we've been using
a bunch of times.
We will give it brief
but reasonable instructions
on how to behave.
We are Contoso Corporation here.
Information about
company policies.
Provide accurate information.
Be professional and concise.
If you don't know an answer,
suggest who to contact.
Always cite specific policies.
Now, this is a little
bit vague right now
because we don't have a whole
bunch of these are folks
to contact, but it's fine
for our demonstration.
But in the real world,
just saying who to contact might
be a little bit short-sighted.
Okay. We've got a couple
of bits of data in here.
So we're going to do -- we're
going to upload some files here.
In the last example, we did
something a little bit more --
a little bit more enterprise
scale, where we're going
to have data coming from
Azure storage accounts.
Here, we're just adding two
files, so we don't need to be
over the top about it.
We're going to add
in a couple here,
just an IT security policy
file and a remote work policy.
Just a couple text
documents, relatively quick,
relatively straightforward.
Great. We will build ourselves
a new index: index-olive-sock.
Perfect.
We'll attach those,
and then just validate
that we are in a good place.
So, if we say, "What are
the password requirements
for my laptop?"
Should pop into that file.
There we go.
Good. Contoso Corporation
laptop are as follows,
and we did indeed pull that
from the security file.
Life is good.
We'll ask, "Hey, what
are the core hours
for remote employees?"
Hitting on that
second file there.
Monday through Friday, 9 to 3.
Any further questions, contact
HR, pulling from that file.
Good. So we are in fine shape.
So let's give this a save,
and then we will take
a look at publishing.
So here, we will publish, and
you'll see that when we go
to do this, we're going
to have an endpoint
that can be contacted.
We're going to grab the
latest version, version 2.
That's the one that
we want to publish,
although you could
publish earlier versions.
And we will publish to
Teams and Microsoft 365.
At this point in time, the
agent needs a decent name,
a published version here,
and we will give it just a
little bit of a description.
And then a slightly longer one.
And then right out right
here, you're going to see
that it's going to
publish a resource inside
of Azure called Bot Services.
And this is going to be the
go-between that will be
between the Microsoft 365 and
Teams and the agent itself.
So my name is Rob, and the rest
of the information here is fine.
So then we'll take a look at
publishing, and it'll ask
where do we want
to publish this.
So we've got a couple
of three options here.
Number one, for testing,
this is the easy approach,
which we're going to take
a look at right now,
is just publishing it just
for me, that nobody else
in the organization is
going to have to see it.
However, if you are going to
publish something for everybody,
as we talked about a little bit
earlier, then it's going to have
to go through an
approval process.
So you would open up M365 Admin.
The admin has an agents
component in there,
of which they can then
review and approve or deny
that for groups of folks, for
the enterprise as a whole.
So, for us, we will just
do it immediately for me.
Quick publish.
And we are good to go.
So now we can pop into both
Teams and into Copilot,
and we can see our agents.
Okay. So, for starters, let's go
check this out inside of Teams.
So we're going to swing
into Teams, and we're going
to take a look at our apps,
and our recently published
enterprise-knowledge-agent is
sitting there.
That's good.
We'll bring it up, and we
can just have a full-on chat
with our agent.
So what are the laptop
password requirements?
Give that a run.
Off to the agent.
And there we are.
We are seeing the same
results that we saw.
Now, let's check this
out inside of Copilot.
So here, let's call out to our
enterprise-knowledge-agent.
And to our agent, we will ask
the question, "Hey, agent,
what are laptop
security requirements?"
Processing the request, and
we should come back with --
[inaudible]
Yeah. We'll give
that one more shot.
Paste that in (inaudible).
There we go.
Now we're in good shape.
So these are coming --
the Contoso laptop security
requirements, all that is coming
from our internal documents.
Life is good.
So let's go wrap this up.
All right.
Let's see what you all remember.
So first, what Azure
resource does Foundry portal
automatically create when
you publish an agent
to Microsoft Teams?
Yeah. And while we've seen all
four of those at some point
in this course, in this case,
it's just the Bot Service.
And what is a key benefit of
the agent application created
when publishing an agent?
In this case, it provides
that stable endpoint
and enables user isolation.
All right.
So let's wrap up.
Some of the key ideas that
we've seen up to this point
so far are publishing creates
that agent application
in the background, that each
agent gets its own Entra ID.
User data stays isolated
in their conversations.
The user has privacy.
The user isn't corrupted
by other conversations.
And the Bot Service is what
helps power what's going
on in the integration
between Teams.
And finally, when we go
to publish, there's going
to be a question to be
asking whether you want
to be publishing to a shared
scope, which is just really
for you or the
organizational scope.
So today, we took our agent
out of the dev environment
and into the tools
people actually use.
We reviewed Foundry's publishing
options, published an agent
to Teams from the portal, and
iterated on the experience.
Thank you for being part
of this Develop AI Apps
and Agents on Azure course.
Getting agents in front of
real users in Microsoft 365 is
where the work pays off.
I hope this session
sparked some ideas
and you're excited to try them.
Keep experimenting.
Teams, Chat, and the M365
surface are constantly gaining
new agent capabilities.
The people who explore them
first get the biggest wins.
There are many ways to continue
your learning journey.
I invite you to search for
your next favorite topic
on Microsoft Learn
at aka.ms/Learn.
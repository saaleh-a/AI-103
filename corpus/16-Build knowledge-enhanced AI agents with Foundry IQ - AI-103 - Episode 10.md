> Source: https://www.youtube.com/watch?v=c9zns7PX0Io

[ Music ]
ROB FOULKROD: An agent
is only as smart
as the knowledge it can reach.
Without grounding, even the
best model is just guessing
at your business.
So how do you give an agent
access to the right data
at the right time without
rebuilding a search stack
from scratch?
Enter Foundry IQ.
I'm Rob Foulkrod, Lead
Technical Trainer at Microsoft,
and this session, we're tackling
building knowledge-enhanced AI
agents with Foundry IQ.
We'll start with
the fundamentals
of retrieval-augmented
generation,
take a tour of Foundry
IQ, and then look at how
to configure agents and
fine-tune retrieval
to make your agent
genuinely knowledgeable.
We'll bring it all together
by integrating an agent
with Foundry IQ end-to-end.
Here we go.
We're going to do a quick review
of retrieval-augmented
generation, or RAG,
when it comes to our agents.
We know from our
earlier discussion
that the powerhouse
behind agents are large
language models.
And large language models have
been trained on massive amounts
of data, but that
data is finite.
That data has a
knowledge cutoff.
And there is no knowledge,
there is no information
in that agent beyond
that cutoff date.
So anything beyond that,
we are out of luck.
But maybe more importantly
than that cutoff is the fact
that none of your private
data, the information
that might be the linchpin
to your application,
none of your private
data is in there at all.
And so without that, then
it's just kind of guessing
at what the right values, what
the right responses might be.
Lack of context allows
it to ignore workflows
or approval chains or policies.
And we have the possibility
of fabricated responses.
There is knowledge back there,
and you're likely
to get some of it.
It's just not necessarily
what you need in your app.
And then there's a
scalability issue.
We saw that we can have a file
search tool, and we can populate
that file search with a
number of files in there.
But that only goes so far.
That tool can't house
the thousands of files
that you might have, and
can't be updated easily
with the frequency that that
underlying data may be modified.
With RAG, with its ability to
go out and pull information in,
we are much more likely to
have current information.
We will have that
org-specific information,
that private information
available to us.
It then has more ability to
be grounded on real context
of the things that
really matter.
It has the ability to
give back cited sources.
I found this policy.
It's in this file.
So even if there is a flaw,
we do have at least a
contextual trackback to find
where that information
is coming from.
And finally, we have one
platform that we can put all
of this information in.
Your agents are not going
to need one data source.
They're probably going
to be pulling from many.
So we don't have to learn
12 different platforms.
If we can just be on one
thing, we have an advantage.
And this is what
Foundry IQ does.
Foundry IQ allows
our agents to pull
from a myriad of data sources.
Those data sources could
be SharePoint sites
that have been set up with
all of your documentation.
We may have published analytical
information into OneLake.
You may have PDFs or other
data sources sitting inside
of blob storage and constantly
being updated from other tools,
or you may call into
SQL or other APIs.
Foundry IQ has the
ability to manage
and potentially
auto-index and update
that information as we go.
And then each source
that you build,
maybe you build one product
documentation source,
that product documentation
source can be used
by a collection of
different agents.
You don't have to repopulate
for the three different agents.
You build one source, and all
of those applications and all
of those agents in the
same project have access
to that Foundry IQ information.
When we look at the
collection of data sources,
we'll see those broken down
into a number of categories.
The first of those is indexed.
And we've talked briefly
in the past about the idea
of bringing data in,
having that data broken
down into vectorized data,
and we see that capability
in things like Azure AI Search.
We will later on in the course
delve into some of the options
for AI Search a little bit more,
but know that it has been an
underlying component in many
of the indexed searches
that we have seen.
We also have the ability
for SharePoint to have
that information pre-indexed.
Indexing allows us to hit a huge
amount of information and find
that information very quickly,
so that we can perform
these queries.
We get highly relevant, fast
searches against indexed data.
But there also may be sources
that are a little
bit more wide open.
We have the ability
to include data
from blob storage and
from our OneLake.
Blob storage typically
for things like PDFs
and docs are often where
other tools are uploading
that information very easily.
It's a very nice spot
to be able to drop data
from external sources.
And then OneLake,
OneLake is often used
with our either unstructured
data or analytical data
that has been exported from
maybe our operational tools.
And finally, we have real-time.
Real-time information
is important
when the data may have
changed yesterday
or 20 minutes ago
or an hour ago.
We can perform, say, a web query
to bring that information up.
Or we can perform a call
into SharePoint information
and get the latest documents
that have been stored there.
Agents don't have a
native understanding
of your underlying data sources.
And so one of the
concepts that's going
to be really important is for
you to have an understanding
and to share that understanding
of what sources are important
and when to call those sources.
And typically, we
will do that by way
of highly specific retrieval
instructions in the agent.
We update the instructions to
say when should we go look
up the information that we need?
How should we or how
often should we be citing
that information?
And what to do if
you haven't found
that information
or you're unsure.
Those need to be packed
into the instructions.
And this information here
goes beyond just Foundry IQ.
We could have had the
same conversation
when we were talking
about tools.
When to call a tool,
when not to call a tool.
Having some understanding in the
instructions is pretty critical.
We can see in this example
here a series of instructions
on when we're supposed to call.
You must always search
the knowledge base
for information before
answering any questions.
So in this case, it's absolute.
This particular agent,
an HR assistant,
really is going to
be asking policy.
There's no policy
in its internal information
right now that's going
to be helpful.
So always search the knowledge
base before answering
any question.
You may never -- you must never
answer from your own knowledge.
We're doing a
twofer on that one,
making sure that both
we're always searching
and never using any
background information.
Here in terms of citation,
we're telling it every answer
must include those citations.
And then how do we answer
when the result is ambiguous?
And here we are very clear.
If the knowledge base
doesn't contain the answer,
respond with, "I don't
have that information
in the current documentation.
Please contact HR directly."
A sample of solid instructions.
In this exercise coming up,
you'll create an agent.
You'll go ahead and establish
some Foundry IQ sources.
You'll test to make sure it
works in the playground,
and then you'll connect those in
a client application as well.
Inside of Foundry, and as
we've done a bunch of times
by this point, we already have a
project that is up and running.
We already have a model
that is deployed,
but it's time to
build the agent.
So we're going to go
create the agent itself.
In this case, we have -- our
underlying data is going
to be a series of product
guides and catalogs.
So we're going to have
a product expert agent.
And one of the first things
that we're going to want
to tell it is how to
handle that data.
So we just talked about the fact
that we want to be very specific
in the directions that we're
giving it, when to use the data,
how to cite that data, and
what to do if it isn't there.
And so here we're saying, "Hey,
I always want you to search
from the knowledge base
and answer questions
about our products
or product catalog."
Provide detailed,
accurate information
and always cite your sources.
And then, what if -- if you
don't find relevant information
in the knowledge
base, say so clearly.
So we're keeping that
relatively brief,
but hitting all three
of the main points.
So we will give that a save,
because what we're about to do
when we hit "Knowledge"
here, it's going to reset.
So we've got a starting point.
We've got a little
bit further to go.
So we're going to go into
the Knowledge section
of our tool here,
and we are going
to connect up to Foundry IQ.
That's very similar to just
going to Knowledge directly,
but here we are nonetheless.
So it says, "Hey, we don't
have any connections.
Let's go ahead and connect
to an AI search resource."
And here we are in the
Knowledge tab, really.
And so we will build
a new resource.
There is a search, Azure
AI Search that needs
to be installed so it
knows how to ingest
and return all this information.
So we will build
a brand new one.
There's a subscription.
All of that is looking good.
We will grab the free tier just
because we can in all of that.
And we will use the free
pause until next month.
It's just a demo.
All good.
All right.
That just finished up.
So now we're going to swing into
Azure and build a place for us
to store all of our files.
All right.
So we're going to swing into
our demo resources here.
We will, I guess I didn't really
have to, but that's fine.
We'll just go straight
to storage account here.
Build a storage account.
We will create a new one.
We will drop it inside
of our demo resources,
and we will call this
Foundry AI demo store.
And odds are really good.
Someone else has done that,
so I'm just going to throw
in a little suffix
at the end of that.
We just want some
blob storage here.
We don't need it to be
a whole heck of a lot,
so we will just do
locally redundant.
All of that is looking good.
Swing over to Review and Create.
And let's build it.
All right, and let's
hop into the resource.
We'll upload our
files that we need.
So we're going to go
into our containers.
We'll build a brand new
container for our storage here.
Call that our Contoso products.
New container, perfect.
Looking good.
We'll swing in there and
then upload our catalog.
Now, I am only going to
upload like three files,
but in the real world,
this is a storage account.
We could have potentially
thousands upon thousands
of files in here that your agent
would then have access to.
But for us right now, just
three files for our short demo.
All right.
And so now that our
data has been uploaded,
let's close out of that and head
into -- back to the Foundry,
where we will then
build the index
so our agent has an opportunity
to go grab that data.
So we will build
a knowledge base.
In this case, our data, we just
uploaded that to blob storage.
So we'll connect that up.
Give this a reasonable
name, decent description.
Descriptions are really
helpful when agents know,
so they know what
they're pulling from.
And we will grab our storage
account, which we just called --
that was a mouthful anyway,
our Foundry AI demo store 999.
And the one container
that is in there.
We'll authenticate
by way of key.
We won't go over the top in
terms of extraction there.
There will be an
embedding model.
This will go ahead and
do the vectorization
of the data that's in there.
And then a chat completion
model to complete it.
There we are.
So that's looking good.
We'll save and then go ahead
and work through that data.
All right.
So we are in good shape there.
So we'll save.
And then use inside of an agent.
We'll use it in the only
agent that we have.
That one looks good.
Okay. So now that we've got
all the pieces together,
if we take a look here,
we've got our agent.
We've got our instructions that
understand what we're doing
in terms of accessing data.
When we swing down
into knowledge,
we have the knowledge base
that we just created.
That knowledge base is pointing
to an Azure storage account,
and pulling that by
way of Azure Search.
So if we then start
prompting it with questions,
"What types of tents
does Contoso offer?"
it should then pick up on the
fact that I'm going to need
to hit our data source.
We will get an MCP-like
approval process in here.
So we will go ahead and
approve that for the call.
And we now have our
tent descriptions.
Looking good, and
a full reference
to where that data lives.
Now, this is a link to
the underlying PDF.
The way that we've set up our
data right now, a direct link
to the PDF would fail
because we don't have
unauthenticated access.
So we would need to go a
little bit further to make
that possible, but that's fine.
That is indeed the
file from which
that information came from.
So successful here
inside the Foundry.
Now let's move over
into a little code.
All right.
So let's get ourselves
into VS Code.
So here inside of Visual Studio
Code, we've got our AI toolkit
over here and pointing
to the same project
that we saw earlier.
I'm going to make sure that
I grab our project endpoint.
Again, we are working with
the -- at the agent level,
not at the model level.
So typically, we will use the
project endpoint at that point.
And we'll pop into our
code and make sure
that we supply that here.
There we go.
We do have the same name
right here, product expert,
agent that we set up for,
so we should be fine.
Give that a good save.
And we've got the code
here pretty much set.
So we're just going
to kind of walk
through what we have code-wise.
Again, nothing much different
than what we have seen here.
We've got ourselves our
authentication mechanism
and grabbing our project.
From the project, we are then
grabbing the OpenAI client
so we can then converse
with it, and going ahead
and starting a conversation,
getting that conversation
up on the server side
there and snagging its ID.
Now, a little bit different
in this example here.
We are also keeping
a local conversation
so that we can just
snag that locally here,
just having a little
bit of fun with this,
so that we could print out
the conversation at the end.
Not really necessary
for what we're doing,
but part of this example.
Then we've got a couple
kind of helper message --
helper functions in here in
terms of sending the message
to the agent where we are
grabbing the conversation,
creating a new conversation
item, and appending all of that.
But interestingly in
here, we saw this before
when we were dealing with
the MCP side of things.
Though the way that we are kind
of working with Foundry here,
and you saw the approval inside
of the agent in the playground.
Same rules will apply here that
we will have a need to approve
that request to go out
and reach that data.
So, in here, we will go
through and we will --
we will ask the user this
time instead of doing it.
The last time, we did an
automatic approval process.
This time, we will --
if we get the request,
we will ask for a yes or
no whether we approve.
Otherwise, we will
deny the action.
Then we will go ahead and create
that conversation,
send that out.
And then pull the
responses back.
When we get those responses,
we'll also be kind of saving
that into our client-side
history as well.
So we should be in
pretty good shape there.
Let's give it a run.
We will pop into
the terminal here,
and let's see, agent, client.
So we will say,
"Python (inaudible).
Agent, client."
There we go.
Good start.
Okay. Good.
Found the agent, and time
to have a conversation.
So drop in, what type of outdoor
products does Contoso offer?
And immediately it says,
"Hey, we're going to have
to go hit Knowledge Base
such and such for the query
of outdoor products offered.
Are we good with that?"
Here we will say, "Yes.
We are. Thank you for asking."
Again, you are free
to treat these
in your application
the way that you want.
We in an earlier example,
we auto-approved.
In this one here, we
did a manual approval.
There's a lot of variation
in between as well.
So coming back from our data
catalog, we've got tents
and sleeping systems in there.
All of that is
looking reasonable
in terms of a response.
Excellent.
So then we could start
digging a little bit deeper
in there if we wanted.
Tell me about the weatherproof
features of the tents.
Again, we didn't do --
there's a mechanism
to do kind of approve all.
We're just approving
one at a time.
We'll throw in a little yes
there, and we are on our way.
Perfect. All right.
So you can see locally,
we didn't really
need much more code
than just the most
basic of agents.
The server side, the agent
infrastructure really kept track
of all of that.
What we had to do on our side
was handle the approvals,
but we didn't have to set up a
whole bunch of data sources.
That was really all
done at the agent side.
So let's do a quick review here.
What's the primary advantage of
retrieval-augmented generation
over simple AI agents?
Take a sec.
RAG enables agents
to ground responses
in current organizational
information
and provide source
transparently.
Absolutely, it doesn't
eliminate the need
for large language models.
Anyway, which data source option
provides real-time access
to SharePoint content with
Microsoft 365 governance?
SharePoint remote,
which is going
to query those
libraries in real time.
All right.
Let's review here real quick.
In this section, we've
taken a look at RAG
and its ability to
ground our data.
We've seen Foundry IQ as a
potential source for our agents,
including data from SharePoint
and OneLake and blob data.
We saw that there are a number
of categories of sources,
whether those be indexed,
real-time, or direct.
And we also saw the importance
of clear instructions
in letting the agents know
when they're supposed to use
that data and how they're
supposed to cite.
Thanks for joining me in this
part of the Develop AI Apps
and Agents on Azure course.
Foundry IQ is a powerful
piece of the stack.
I hope the walkthrough and demo
made it feel approachable.
Keep that curiosity alive.
Grounding and retrieval
are evolving quickly.
Stay in the loop, and that's
what keeps your agents
and you sharp.
There are many ways to continue
your learning journey.
I invite you to search for
your next favorite topic
on Microsoft Learn
at aka.ms/learn.
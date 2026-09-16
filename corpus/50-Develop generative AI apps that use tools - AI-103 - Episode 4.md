> Source: https://www.youtube.com/watch?v=N5DcQ-ZNp_M

[ Music ]
ROB FOULKROD: Hey, folks.
Welcome to Session Number 4
of the Foundry Generative
AI conversations.
I'm Rob Foulkrod, a Lead
Technical Trainer inside
of Microsoft and we are really
looking right now at how
to make our applications
more than just chat.
In our earlier conversation,
we talked about making
a chat application,
but you will often
need to do more
than just have conversation
back and forth.
This topic here, we're
looking at the usage of tools
from within our agent,
primarily in this case
from the perspective of needing
to add grounding or data.
So, you can kind of think
of this as kind of Part 1
in our tools conversation.
Let's talk about tools, because
we're going to use that term
in a couple different ways
here inside of Foundry.
But when we think about
large language models,
we know that there has
been at some point
in time a massive amount
of time and energy put
into training these models.
But then once they were
trained, they're pretty fixed.
They generally don't learn
anything new as long
as that model is in existence.
They were trained on a large
amount of public information,
but they don't necessarily
know your information.
They don't know what
happened yesterday,
and they certainly can't unto
themselves take any action.
And tools are one way of being
able to extend the capabilities
of this, what feels like a
giant brain inside of a chat,
inside of a large
language model.
So, we can see here that when we
start extending a large language
model with tools,
it can potentially,
depending upon the tool, give
access to real time information.
The things that have just
happened since the training
of that model or maybe
yesterday, right?
We will have the ability to take
actions instead of just, "Hey,
how do I fill out this
time off request?
Will you fill out the
time off request for me?"
Make sure that when
it's responding,
it's not responding based upon
kind of general knowledge
about how the world works,
but instead the large language
model is responding based upon
how your enterprise works.
The ability to extend
functionalities
and actions beyond just
chat and potentially even
to start building workflows
that instead of just a one
and done conversation that there
could be decision structures
in place.
Now, when you're using Foundry,
you can bring your own tools.
You can bring your
own capabilities
into these chat conversations,
into these agentic
conversations.
However, one of the things
that we have with Foundry is
that while you can build
your own custom tools,
there are a number of tools
that are already built
in that we might refer to
as these common tools.
We will see in the various
slides coming up a deeper dive
into each one of these,
but let's just get an
idea starting off.
So, the first one here,
the code interpreter,
large language models
are really good at kind
of predicting what the
next token is going
to be in a conversation.
The cat fell off the roof,
cat fell off the counter,
predicting what
that next token is.
That's an awful way
to do data analysis.
Mathematical operations.
Those can't be done by just kind
of guessing what the next
token is supposed to be
on a predictive,
somewhat random nature.
But what they are very good
at is they're very
good at writing code.
Code can be written very much
in that next predict
the next token.
So, code interpreter tools
allow large language models
to leverage that
massive ability,
but then to also just execute
that code so that we can kind
of mix together the
non-deterministic nature
of large language models
with the highly
deterministic language
or the highly deterministic
process of executing code.
It kind of gives us the
best of both worlds.
Continuing, if we want
to know what happened
in the world yesterday,
it's not in your model.
As a matter of fact,
when we start looking
at other knowledge sources,
it's probably something
that happened yesterday or
the day before yesterday,
may not even be in your
own knowledge sources.
So, often to get the most
current information,
we just need to
search the Internet.
And the web search tool gives
you a very quick click it in,
turn it on, and now you've
shared that capability
with the large language model.
Now, what you may have in
your realm is you may have
documentation that accurately
describes what your enterprise
looks like.
Whether these be policy files,
whether these be
job descriptions,
those files can be used as
a knowledge source simply
by uploading them into
the large language model.
But when you can't reuse one of
the one that's already there,
you may just want to
write your own code.
And in those scenarios, you'll
write your code in your client
and then with a decorator
with a description.
You'll tell the large
language model, "Hey listen,
if you need to call this tool,
let me know, give me the data,
I'll call it on your behalf."
This really opens up the doors
to large language
models being able
to perform really any action
at all simply by calling
into a function that
you've described,
really extending the power
of large language models
in your applications.
Let's take a look at how these
work from a code perspective.
So, the code interpreter tool,
if you are in the portal,
if you're in the Foundry portal,
it's a relatively
straightforward process to go
into the portal, look
in that tool section
and add code interpreter.
From a code perspective,
this is similar code
to what we have seen in the past
where we had our
client.responses.create.
So, we're using
the Responses API,
pick whatever the particular
model is and instructions.
But then there's going to
be a tools collection.
This is an array
that we can pass in.
And the type of tool, there's
known values that we can use
to trigger some of
these from our code.
And so, when we say
"Type code_interpreter,"
you'll keep that all lowercase.
Then it'll create
a code interpreter
for you behind the scenes.
There is this idea
of a container
so you can upload files in there
so that it has some
prefabricated files
or data files that
are necessary.
Really just a one
liner and you can get
that code
interpretation concept.
Using the web search tool,
I don't want to point
out the whole thing again
and again, but if we look,
you'll see again we're using
the create model instructions,
we're adding in our tools.
Here again "type" with the
well-known value of web search
or web search preview,
depending upon
which version that
you're grabbing.
So, another tool that
you're very likely
to use is the file search tool.
In this scenario, you've
got your own files,
and you just want to get them
into the large language models
realm relatively quickly.
So, to do that we're going to
need a few additional steps
that we didn't really see
with the earlier two tools.
The first thing that
we're going to need is
to create a vector store.
A vector store is
boiling your data
down into numerical
representations,
large arrays of data.
These arrays here could be
compared one to the next.
And arrays that are relatively
close to one another,
have semantic meaning
that is very similar.
And arrays that are further
apart, have meanings
that are very, very different.
The process is usually a
little bit cumbersome to kind
of build those vector stores.
This particular API does make
it relatively easy for us.
So, we first start off by
building a vector store.
Then we add the
documents in there.
Once we've uploaded those
documents beneath the covers,
there's a process that's
automatically indexing
and breaking that
down into pieces.
What we chunking that data,
and then turning that data
into those numerical
equivalents.
It's called embedding.
Then at the query time, when we
go to give a particular prompt,
it looks at our prompt and
does that kind of same process
which says, "Let's get some
numerical representations
and find the things that
are numerically close."
Those are the documents
that are retrieved.
Once we have those
documents, or those portions
of those documents, they are fed
into the large language model
with the rest of our
prompt and data is pulled,
results are pulled from there.
So, let's take a look
at what that looks
like in terms of code.
So, the OpenAI SDK has in it
a vector store collection
to which we can then
call out Create.
So, first get a store, get a
reference to a particular store,
building it on the fly.
Once we have a reference
to that particular store,
we got that vector store, we're
going to get an ID in there.
Once we've got that ID,
we can then upload one
or more documents
into that store.
And at that point in time,
that's when the files are going
to be chunked and embedded
and then used later on.
So, two steps: build the
store, upload the documents.
Lastly, when we're looking
at our Create call,
we're going to go into the
tools themselves and say, hey,
I need to use the
file search tool
and specify one or
more vector IDs.
So, you can see in this case,
there is an array of them.
So, we may have
several ID stores,
some vector stores behind the
scenes, but in this case,
we're just passing in
the one vector store.
And then in here, we'll also say
include the search call results.
So, once that
information is going in,
that will also be included
in the response going up.
The response output,
very much the same
as what we've seen
up to this point.
And then lastly for this
collection is the function tool.
So, the function tool again
says it's not already there.
What I need doesn't
already exist.
This is often used
when what we want is
for the large language model
to be able to interact
with the application that
it's being called from.
From a function
perspective, you don't have
to do a whole heck
of a lot different.
So, you'll see in this example
here, we have a function.
The function is defined
here as get_time.
Those of you with a Python
background will look
at that particular function and
it is as close to a hello_world
as we really are going to
get in a sample like this.
Then we say we've
got a function tool.
Function tool is then
going to have the name
of the function itself.
Now here, this isn't a direct
reference to the function.
We're just saying, listen,
there's going to be a function.
It's named get_time.
And then give it a
decent description.
The large language
model is going to need
to know what the function
does and then be able to make
in essence decisions on
whether we should call
that function or not.
So, the description along
with the name are going
to help it make that decision.
Then we do our create, the
call into our responses model.
Again, with the model in
there, your input message.
We are then including this tools
section that we created earlier.
But at this point, there's
going to be a little bit
of a conversation because the
large language model doesn't
have direct access
to our function.
So, instead it'll have
a response that says,
"That function seems
like something I'm
going to need to know."
So, when we're looking
at the response output,
we're going to look at
the type and see, well,
is the response output
a function call
where the large
language model says,
I need you to do
that thing for me.
In this case, if there is a
function call and we only passed
in one function: the
get_time function.
We'll usually have some sort of
dispatch component that looks
to see if it is a function call,
then which of those functions
needs to be invoked.
And in this case, we're just
doing them both in the same line
because there's only the one.
If we are invoking that, then
we will call on the behalf
of the large language model.
We will call the get
time function for them.
In here, later on we'll get
into more complicated versions
where there's a
parameter collection
that needs to be passed in.
Right now, it didn't
take any parameters.
It's kind of nice to fit
onto a PowerPoint deck.
But we will then append the
output to that function call.
We will do another response
saying, basically,
"Here's your response,
you asked for this call,"
and then we can go ahead
and output the decks.
In this scenario here, we know
for a fact that we're not going
to get another function call.
We're pretty sure
we're not going
to get another function call.
Usually, you'll see some sort
of looping process that's going
to be going through
and getting that.
So, what's coming up
is an opportunity
to get it a little hands-on.
In here, we will
start by setting
up a couple tools
inside the playground,
but then we will quickly move
over into an application,
and we'll call the
tools from there.
We're going to start by looking
at Foundry and the playground.
So, up to this point we have
already seen how to set
up a project and deploy a model.
I'm going to assume
you've done that already.
If not, see some of
the earlier recordings
where we have done just that.
So, we're going to swing
right over into Build,
and into the Models section and
we will play around with one
of our already
deployed models here,
specifically the GPT4.1 model
that we've been
playing around with.
And in here, we're just going to
start without any tools at all.
So, we're going to say, "Hey,
you are a travel assistant
that provides information
on travel services
from our favorite
Margie's Travel."
And without using
any tools at all,
we're going to just
ask a question here.
What are some recommended
tourist activities
in New York next month?
And what we're going to get
from this is just using
the model's information.
When it was trained on this
information a year or so ago,
there were things
that it could guess.
So, we have some
generic ideas here.
There are going to be some
Broadway shows going on.
Pretty safe bet.
Central Park is still
going to be there.
Yes, probably right.
So, but we don't have
any dates and times.
We don't have anything that
is relatively concrete.
So, what we can do in
here is we can swing
into this idea here of tools.
And while there's a
ton that we can add,
we're going to just add right
now the web search capability.
So, with just a quick little
click, we now have kind
of a generic search
capability brought in.
We will ask again.
We'll take a new chat here so
as not to have that already in.
What are some recommended
tourist activities
in New York next month?
And now, we should get something
a little bit more specific
than what we saw initially.
Okay. So, what you're probably
seeing is some things
that have kind of been blurred
out a little bit in terms
of date and stuff
and email addresses.
Right? We shouldn't be
publicizing too much,
but we are getting some
very concrete ideas
that are happening
inside of inside
of New York at this point.
So, nice start.
Real easy to be able to go ahead
and add web search as a --
as a simple tool in Foundry.
Now, we do need to take a look
at, well, what does that mean
from a coding perspective?
So, the first thing that we are
going to need is we're going
to swing back home and
we're going to make sure
that we have the
appropriate endpoint.
So, I'm going to grab that and
throw that onto my clipboard.
We will have that
up and ready to go.
And then, we will go into
a starter code base.
Now, already I have cloned
the repository locally.
Already, I have set
up the environment.
Again, in the last exercise, we
went through the process there.
So, that's already
been recorded once.
I don't want to have to show you
that same thing again and again
for the next 20-some-odd
demonstrations.
So, here we have
already cloned that.
We've already brought it down.
I'm going into the
environment variable here.
I am dropping in the environment
variable our endpoint
and our model.
Those are already in place, and
I have already done a couple
of the things that
were exactly the same
in the earlier exercise.
We've already imported the same
namespaces specifically here,
just the OpenAI namespace
and the OpenAI object.
And as we have in the past,
we have established how we are
authenticating default Azure
credential again and creating an
instance of the OpenAI client
by passing in the endpoint and
passing in our authentication.
So, that is exactly the same
as what we have seen
up to this point.
But now, we have a little bit of
data that we want to bring in.
We have some brochures
that are Margie's Travel.
So, in there specifically
Dubai, Vegas, London,
looking at the
company information
as a whole and New York.
And what we would love is
for our client app here
to have specific details
about the things that we,
our organization, would suggest,
not just doing a
generic web search.
So, for that, we're
going to need a place
to put these documents so that
they can be read by the model.
So, we're going to first
want a vector store
to put that together.
So, we're going to grab a
little bit of code right here,
drop that into place, have
it up and let's take a look
at what we're doing in here.
So, for starters,
inside of the client,
there is a vectors store
object with a create method.
We are simply giving it a name.
There are other attributes,
other arguments
that could be passed in how we
need to chunk that and break
that up and etcetera
and so forth.
But here, we're just
going to give it the name
of the vector store:
travel brochures.
Then pretty straightforward,
Python at this point go
into brochures PDF, make sure
that we found something,
make sure that we've got those
unzipped and ready to go.
And then go ahead and in this
case go to vector_stores,
file_batches and
upload_and_poll.
So, we are taking the Vector
Store ID that we created here,
passing that in and the file
streams, uploading those.
So, now there's a place
the LLM can get its hands
on this information.
As we did earlier, we are
using the Responses API.
So, we're going to
track our last response
and then we're going to, very
similar to what we saw earlier,
but with only a small
addition, 1, 2, 3,
we're going to use
the Responses API.
We've got to create
our model deployment.
Here we're passing in our
instructions directly in line
as opposed to as a variable.
Same. Not much of a difference.
Whatever the user is asking,
that's the same previous
response, that's the same,
but where we are now extending
this is the collection of tools.
So, here we are bringing in
web search at a known value.
So, we can use that same
web search that we saw back
in Foundry simply by
saying web search.
Very nice addition in here.
And then we are passing
in the file search
with the Vector ID store that
we created up at the top here,
there's our vector store
and then uploaded
to Vector Store ID.
So, we are repeating that
same Vector Store ID.
This is a nice little array.
We're passing an array one item.
From this point, we should
be in pretty good shape.
So, we will remember to save.
We will then open up the
terminal at this point.
This terminal has already,
we've already activated the
correct version of Python.
As a quick reminder, as of this
recording, the version of Python
that these have all been
tested against is 3.13.
And now, we should be able
to do Python and tools.
We'll let that get
itself up and running.
We can see here,
uploading files.
Good start.
Paused and let time
pass a little bit.
That took about a minute
or so to upload those.
And we will ask
about what's going
on in San Francisco next month.
This should then use the
web search to go ahead
and grab that information.
And it came back with a pretty
decent calendar of events
that were all used by
way of web search.
And then we will do one more
query here, one more prompt
where we will ask specifically
what hotels does Margie's Travel
offer there?
And if we take a look at
the San Francisco brochure,
we will see in our case here,
we've got a couple
recommendations that we're going
to be making: the Lombard
Hotel and the Wharf Hotel.
So, those are
coming specifically
from our documents there.
And if we take a
look, life is good.
We are getting both the Lombard
Hotel and the Wharf Hotel
from a recommendation from the
documents that we uploaded.
So, I think a really
nice API that allows us
to get a pretty simple chat
application up and running
without a lot of code.
Hope this has been good.
Let's go wrap this up.
All right.
Let's see how much of this
information you all held onto.
First, which tool should
you use when a model needs
to answer questions from your
own uploaded policy documents?
Looking at the three
options there,
you probably said File Search.
In a function calling workflow,
what should your application do
after the model returns
a function call item?
And which statement about
the code interpreter tool
is correct?
Excellent.
What we've started with is
an entry point into some
of the basic tools that
we're going to find
in the Foundry collection.
We're seeing how to call code,
to search for files,
to execute functions.
We've seen the code interpreter
tool, the web search tool,
and the file search tool, and
then a little bit of information
about the ability to
invoke custom functions.
We're really just
getting started here.
I've been saying this for like
three or four sections already
that we're just getting
started, but we really are.
So, I hope that you will take
this opportunity to continue
to delve into the
world of Foundry
and into large
language model use.
If you want to learn
more, you can take a look
at the Microsoft Learn
documentation that you're going
to find at aka.ms/learn.
Hope to see you in the next one.
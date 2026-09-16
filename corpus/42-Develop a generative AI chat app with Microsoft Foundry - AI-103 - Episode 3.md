> Source: https://www.youtube.com/watch?v=tXPry-BRVRs

[ Music ]
ROB FOULKROD: Hey folks,
welcome back to AI 103.
This is Session Number
3 of our Gen AI topic.
I'm Rob Foulkrod, a lead
technical trainer inside
of Microsoft, and we're
taking a look right now
at generating AI
chat applications
against Azure Foundry.
Up to this point, we have
deployed a model inside
of a Foundry project
that we created,
but we haven't really
done a whole lot
of building a full application.
And now we're going
to get started.
So we've seen this part before.
We were inside of the
model playground,
and what we're looking at right
here is just a couple things
that we want to do
just before we start
to build the application.
We know that we can come
into the playground,
and we can use this to
test individual prompts.
But there's more
than just the prompt
that we may have to tweak.
So inside of the Foundry,
you can see right here,
we can pick one or more
models, test those all out,
but there's also a
settings section
in there that's important.
And inside of the Settings, we
can go ahead and adjust things
like temperature and max tokens.
So, temperature gets to decide
how creative the agent is,
or the model's responses are.
In some cases, we want
very consistent output
from one segment to another,
and in others, a little bit
of creativity is okay.
So we may need, again,
based upon the application,
we may need to tweak
that a little bit.
There's also the
idea of max tokens.
In your applications, you
may have an estimated size
of what those outputs are
supposed to look like,
and there's really
not a good reason
to have your max tokens
setting far beyond that.
So in here, you're giving
your prompts, you're looking
at the responses just to
kind of judge, and then dial
that back a little
bit to make sure
that you're not overdoing it.
One of the customizations,
and we'll talk about this
in our optimization section
a little bit later.
But one of the
customizations that we talk
about a bunch is the
system messages too,
to give it the ability
to determine what
the agent should do
or what the model should do,
or the responses should do,
and what they shouldn't.
And it also gives us
the ability to check
with different models again.
We saw that a
little bit earlier.
But what's also
interesting in here is
that we do have a mechanism to
get just a couple code samples
to get you up and running really
quickly, wherever you are.
We need to take a look at before
you leave Foundry is picking the
end point that you're going
to be programming against.
So when you're looking at the
models inside of Foundry,
we typically have two
different endpoints.
There's going to be the
Azure OpenAI endpoint.
And this one is typically done
when we're building
an application
that is using the large language
model, the underlying model,
a little bit more directly.
In that case, you're going
to specify your project resource
name and then openai.azure.com
and typically then openai/v1
as the rest of the URL.
Now, in those cases, the SDK
that you're typically going
to bring in is the OpenAI SDK.
And earlier, we talked a little
bit about authentication.
We briefly talked
about this difference
between using the API
keys and using something
like an identity or Entra ID.
And we're trying to move
away from keys as much
as possible just because of
the inherent security risks
of having keys lying around.
But both of those are available
to you when you're using OpenAI.
We'll talk a little
bit more in the future
about the different APIs when
it comes to chat responses
versus ChatCompletions, but
both of them are available
with the OpenAI version.
In this set of topics,
in the Gen AI side,
we're probably not going
to be using the Foundry
endpoints very much
up until the very end.
But what the Foundry endpoint
does is allows you to zoom
out just a little bit.
You're no longer just talking
to the model, but you're able
to connect to the
model, the tools,
and then this agentic
layer that sits on top
of it is much more
accessible when you're using
that Foundry project endpoint.
So in this particular topic, we
won't be using it very much,
but in the next topic,
when we're talking
about the Agentic ideas
will be very much using the
Foundry project.
A couple differences here, the
first being that you're going
to bring in the Azure AI
projects along with OpenAI,
they will be working in tandem.
We will usually use projects
to get in the door,
but often then pull back
an OpenAI client as well.
The other change here is you'll
notice that in this side here,
when we're talking about
our authentication options,
that we're really just
looking at EntraID
as your authentication
mechanism.
And when we're looking at our
chat libraries, as it were,
the Responses API is
the one that's set
up through Foundry Project API.
And there's a couple of
code samples down here,
but we will see those
as we move forward.
So those two different
chat styles.
There is what's called
the ChatCompletions API
and there is the Responses API.
So the ChatCompletions
API came first.
You'll see that many,
many OpenAI libraries
or OpenAI models support
the ChatCompletions API.
And when you go beyond OpenAI,
you will find that a lot
of those competitors to
OpenAI also implemented the
ChatCompletions API.
So it's a well-rounded,
well-used chat
completion library.
There's a few early process,
so there are a few downsides
to using this, or at least
a couple of complexities.
The first comes with the
idea of state management.
Whenever you're talking
to a large language model,
they are stateless.
They don't remember you.
They don't learn, they
are completely stateless.
So if you're going to have what
feels like a conversation,
there has to be state,
there has to be history.
And when we're using the
ChatCompletions API,
you keep feeding that back.
So a conversation may
start: hi, my name is Rob.
It may respond, glad to meet
you, Rob, and then you say,
or I would, say,
hey, what's my name?
Well, the only way that it
can remember that is if all
of those were passed in.
And so when you're using
the ChatCompletions API,
as a developer, that's
your responsibility.
You will be in charge of keeping
that history and feeding
that history back
every single request.
In terms of the system prompt,
the system prompt itself
is just another message.
So when we get into this, you're
seeing a little array here.
That array here has a role,
that role being the system,
and then the content,
that's where you would
drop that system prompt.
And lastly, right here, due
to what we were talking
about in the completion
history, the chat history,
your chat is going to grow
every request because all
of the previous
messages are going
to be passed up
every single time.
And then lastly, the responses
coming back, you're going
to get a completion, that's
going to be the result,
and then you'll
grab the choices,
the message, and
then the content.
You're delving relatively
deeply into an object model.
So that was the starter.
Responses came later on, as in
many cases, a reaction to that
of the ChatCompletions API.
So there were lessons learned
that makes this one
a little bit easier
to work with, a
little bit nicer.
So, first and foremost,
we have the ability
to create a conversation,
and that conversation
can be stored
automatically server-side.
So, as you're having
that conversation,
there's a conversation ID
that is being returned.
And all you have to include
in there is you're like,
this is the conversation
that we're having.
Just the ID.
Don't have to have the entire
history, just a little bookmark
that references
that conversation.
So when we're
looking at the size
of the conversation,
it is constant.
It is simply your current
message plus the ID
to where the chat can find
or the large language model can
find the rest of the history.
Shortening that conversation,
shortening the payload
going back and forth.
When we are looking
at instructions,
it's a little bit easier
instead of having
to build this little
array, this JSON object.
So when it comes
to instructions,
it's a little bit easier when we
just have to pass a parameter,
instructions equals, as
opposed to the mechanism
in which you're building a
message where this is the role
and system, here's the content.
It's just here's
the instructions.
And finally, when you go
to read the response back,
it's also easier.
You're going to get a response,
and in that response,
it's the output text.
A very straightforward mechanism
for reading that back.
So looking at the two code
samples side by side,
we'll see a little bit about
how they are interacting
with one another.
If we are looking strictly
at the Completions API,
that the initial state is going
to be your instructions,
your system message.
You build a message,
"you are a helpful AI --
" And then, as conversations
happen, you are adding
that to what is that array.
So the user message and
what their text is.
And then finally, once we have
this client, we're calling
out to this method a
completion.dot create.
In there, we're specifying what
the model is, and we're passing
in that large array of
all of the messages.
As we saw earlier, once
we get that completion,
choices pick the first element
of the choices array, zero,
read messages, and
then read the content.
If we compare that to
the Responses API,
in the Responses API,
the initial state doesn't really
have to be the system message,
but what you will see is
a little bit different.
You'll just see a
little variable
to hold the response ID,
which is this opaque token
that just says this is the
last conversation we had.
So we set that up as "none"
because the very first time we
haven't had a conversation yet,
but you'll see where
that comes in.
Then response.
Here is our client:
responses.create.
Same model, that's the same
as we saw on the other side.
Instructions here are not
part of the conversation.
They are standalone.
So, here is the same "you are
a helpful" whatever it happens
to be.
This is the user's contribution,
the user has said.
So, we're going to pass
in the input text.
And then finally, the last
bit right here is going
to be a reference back to
the previous conversation.
Now, the very first time,
remember the very
first time we call it,
it's "none," there isn't one.
We're starting off.
But once we've extracted
the output text in terms
of the response, then we
also, on that same response,
store that ID for the next
request that's coming in.
So, if we were to look at
this as a whole, we can see,
and I'll pause right here,
let you take a look at this.
I'm not going to repeat the
whole thing back at you,
but you can see now
within context,
we have our system message,
we're grabbing the text
from the user, we're taking
that text from the user
or input text, and appending
that array and passing that in.
Pick the model,
messages conversation,
and we pull the response back.
Using the Responses API,
it's a little bit tighter.
Again, initial last response,
we don't have a last response.
This is the very first one.
We've got our input text and
open API, responses create,
model what your instructions
are going to be,
what the user input is, and if
there's a previous conversation,
not the first time, but after
that, that conversation ID.
So we need to take
a look at this.
So, in the very
next section here,
we'll have just a quick
little demonstration
of using the Responses API.
We'll do it a couple
of different forms.
In the one that
we just saw here,
it was a synchronous version.
We'll also see an
asynchronous version as well.
So here we are in our
project, demo-5661 here.
We already have
deployed a model.
I'm going to swing
"Home" at this point
and grab one of our endpoints.
Earlier, we talked about which
endpoint to take a look at.
The project endpoint is great
when we are building agents
and we're at a little
bit higher level.
Right now, we're just talking
to the models directly.
So the OpenAI endpoint
is phenomenal.
I'm going to take that and
store that just off screen.
And we will swing into our
chat application here.
So, as of right now,
it's a blank project.
But we will go and clone
at least a little bit
of starter code in
there so we don't have
to build the whole
thing from scratch.
We'll do a "git clone" and drop
that into our current directory.
There we go.
And because this is a
Python application,
we've got to do a little
bit of Python work
to get this up and going.
So we'll go here.
We'll tell the Python which
version we would like it to run.
As of this particular recording,
the code files have been
tested with Python 3.13.
So I'm going to use
that as my version.
And to that, I
will also go ahead
and add a virtual environment,
which will also be 3.13.
Save that inside of Env.
And we will skip the package
installation for now.
We'll see that in the next step.
So, in a couple of seconds here,
we will have our environment
set up looking good.
That's awesome.
So now, when we open up our
terminal going forward --
we open up a brand
new terminal anyway.
We should automatically activate
the virtual environment here.
Perfect. Life is good there.
And then we want to go ahead
and install our requirements.
I'm going to drop
those in there.
What we will see -- actually,
let me back up one step here.
I want to go a
little bit further.
We're going to dive into
the correct directory here.
That's going to be inside of our
labfiles, specifically inside
of the Foundry chat
and inside of Python.
Let's make sure I'm
in the right spot.
One directory further, chat-app.
That looks good.
Now we've got a
requirements file.
Perfect. So we will install
those requirements.
This will take about a
minute or so to grab those.
So we will fast forward
to when that is complete.
Alright, we are now a few
minutes into the future,
and all of our dependencies
have been installed.
If we take a look at what
we just installed in there,
we've got our little bit of
HTTP in there, Azure Identity.
We'll talk about that in a
code sample in a second,
and then the Open API, the
OpenAI library, along with all
of their internal dependencies.
Now if we swing into the
chat application itself,
you'll see that we've got the
husk of an application along
with some nice little helper
directions along the way.
So we will start off by grabbing
the appropriate namespaces
that we're going
to need for this.
We'll grab the OpenAI object and
a little bit of identity here
so we can authenticate.
So we will do those
two things right here.
Now, those of you who are
doing the labs yourself,
you know that Python is
white space sensitive here.
So the way that our authors
have made this work
for us is the comments
are in the right spot.
So all you have to do
when you're dropping code
in there is make sure that
you get that the same area,
same outline or column that
the comment is already in.
So, the two bits of code that
we have right here are our
authentication and
our client creation.
Now the way that this works here
is we have a bearer token that's
going to be grabbed by
way of what is called the
"DefaultAzureCredential."
So the way that this works
is that there are a lot
of different ways to get
a token inside of Azure.
And the way that you're
going to do that is going
to differ depending
upon where you are.
Right now, I'm just running
on my local machine,
but this code eventually could
be running inside of a web app,
inside of Azure, could be
running inside of some sort
of client application.
There's a lot of different
spots where it could run.
So the default Azure credential,
its job is just to keep trying.
It's got a bunch of mechanisms,
13 or so different ways
that it will try to get a token,
and it will eventually
grab my AZ CLI token.
We'll see that in just a second.
So just know that this is going
to keep trying, keep failing
until it eventually
finds my token
that it will then
use to authenticate.
Then we are building the OpenAI
client, and we're going to pass
in our endpoint, which reminds
me, we better put an endpoint
in there, and the token
provider from up above.
So while we're at it, let's
take a look at our endpoint.
Now we did grab this earlier.
So this is just sitting
just off-screen here.
Drop that in for you all.
That is the OpenAI endpoint,
and our model deployment
was the gpt-4.1.
So we're going to make
sure that we save that.
Many good demos have been
ruined by not saving files.
And now we're in
pretty good shape.
So we're grabbing those.
The OpenAI endpoint.
We'll grab the model
in just a second,
or we'll need the model
in just a second.
So then let's go do
something with it.
So we've got a little
game loop going
on right here that's just going
to keep asking questions,
and going to keep prompting
us until we either quit,
or if we don't say anything,
we'll just keep repeating
ourselves right there.
But once we get
past that hurdle,
it's time to get the response.
I'm going to drop that
in right here and again,
get that tab into
the right spot.
So, using the client that
we created up above,
we will then go chat and
we'll use the Completions API
in this case.
We'll just create.
And in this, you're passing
in the name of the model.
That's our GPT 4.1.
And you pass in this
messages object.
So this is an array that's
going to have a system message
in there, and then any
of our user messages are
going to tack into there.
And that's an array
of these messages
that we keep passing in.
It's been around for a while.
It's fine.
And it should work.
As I said, many demos are ruined
by not saving, so
I'm going to save.
Yes.
We're then going
to give it a run.
Let's see how this does.
So we'll say Python and
our chat application.
Now this will take just a second
to run the very first time,
but it should be pretty
quick after that.
Okay, so it now says
"Enter a prompt."
So here is -- we'll give it just
a quick little question here
asking about its predecessor,
the ELIZA chatbot
from way back in the day.
So, if all goes well, we now
just sent in the system message,
"You're a helpful AI assistant
that answers questions,
provides information,"
and our input text,
"tell me about the
ELIZA chatbot.
And here we go.
We got a good how it worked.
Great. It was a quick little
application that some folks felt
like there was some
intelligence behind it.
It was just a bunch of
misstatements, really,
but it was a good start.
So, not too bad.
So, our Completion API works,
if a little bit bulky,
but we're in pretty good shape.
So we will remember to
quit, clear that out.
But another API, a little
bit more modern API,
a little bit nicer to work
with, is the Responses API.
I'm going to drop that in there.
We're again going to -- 1, 2, 3.
There we go.
Right in line with that
if statement right there.
And you'll see, a
little bit nicer.
So same client, we're using
the Responses API in "Create."
We just pass in the model,
our instructions, and text.
We don't have to deal with the
goofy little JSON array there.
It looks like a JSON
array, a little array
of objects being passed in.
It's just here's the
instructions, here's the text.
So save, give another
shot, run it again.
And we will give it the
same question as before.
We don't really care
about the response,
it should be just the same.
We're not making the
application better.
It's just our code is a little
bit easier to work with for now.
We're going to see there are
still some flaws in here.
There we go.
And so we get all of this
information about ELIZA,
and we'll say, well, how does
that compare to modern LLMs?
And it will come back with,
I don't know what
you're talking about.
To clarify what "it" means,
because right now these
are two independent,
non-linked conversations.
So there's no concept of really
a chat going on at this point.
So, we can do better.
Close that.
Actually, let's make sure to
quit before I go too far.
It doesn't really matter,
but just be neat and
tidy about this.
And we're going to do
a couple of things.
So the way that
chat works here is
that we can keep track
of a last response.
So, what's cool here
is in the past,
all of the conversations
had to be kept track
of on the client side.
But here, we're
going to keep track
of this on the server side.
So this is going to store a
little ID, and we're going
to replace our response here.
Just a minor little change.
And that is when we
get the response back,
that response has an
ID, the unique ID.
And so that's a link,
that's a bookmark
to the previous conversation
back on the server side.
So I don't have to keep tacking
on the entire conversation.
We'll have that threaded
information back there
on the server.
So you'll see here, we will
just keep linking that back
to whatever the
last response is.
Initially, the last
response will be nothing,
so we'll start the conversation,
but then we will keep
that conversation going as
we go, by linking those.
So, one more start
a brand new chat.
We will ask about ELIZA
yet one more time.
Probably very, very similar
response as to the last two.
That shouldn't change anything,
but what does change is
that we will be getting
back that response ID.
So now that we've got this
response here, if we then say,
how does it compare
to modern LLMs?
That last response did
give us a response ID.
We saved it for the next
part of this loop here.
And so "it" should make sense.
So here we can see we can see
that many successful demos are
ruined by not saving the file.
I just wanted to demo.
I know y'all are going to
do it at one point in time,
so I had to do it at one time.
There we go.
Let's save the file.
I'm going to leave that in too.
You'll all get to see it.
And we will run one more time.
Here we go.
Ask about ELIZA.
And then finally,
we should be able
to link those together
pretty easily.
Here we are.
How does it compare?
"It" being ambiguous,
but it should know what
we are talking about.
There we go.
And so there's a lot
of content in here,
but what we are seeing
is that it does know
that we are comparing
ELIZA to modern LLMs.
That was successful.
We like that.
And for an application
like this, it's fine.
We're pretty much --
we've got our chat.
We are good to go.
If we were building an
application that was doing more,
maybe there was
more I/O going on.
We were reading from storage,
maybe we are making
other HTTP calls,
maybe we're invoking
other agents.
Then, when we make
this responses create.
That's a blocking call.
It's going to stop us
from moving forward.
So there is another API
beneath the covers,
which is the asynchronous API.
So, really, the same idea.
We're just going to
bring in our async.
So, async I/O is
being brought in,
and we are importing
the Async OpenAI client
as opposed to the OpenAI client.
Then when we go to
create our client.
This is very much what
you have seen before,
except we're using Async
OpenAI call in there
to get the async client.
Everything else is the same.
Everything else, very much the
same as what we saw before.
We have our last response,
so we'll keep the
conversation going.
So that's already in place,
and then we will grab
the async response.
Drop that in.
One, 2, 3 tabs.
There we go.
And we've got our Async
client at this point in time.
Everything else is very much
the same, with the exception
of the "await" keyword.
In your platform,
this will differ.
I'm a.NET guy as well, and
it's the same keyword,
but the "await" allows this
to be a non-blocking call.
So if there are other
background resources going on
or calls, those can carry on.
And when this is done,
it'll come back to us.
But other than that, we should
see very much the same type
of response if he
remembers to save.
There we go.
We're saving.
We are quitting.
We are going to run the
async version of this.
Hold the phone one quick second.
Left out one little line there.
We got to close the
whole thing down.
Let's make sure we are
doing our job here.
There we go.
That's a little bit better.
And now change it
up a little bit.
Ask about the Turing
test instead,
and we should get
our response back.
Very good.
So there's our
asynchronous version.
So I hope that was helpful, and
I will I'll see you all back
in the slide decks
in just a second.
Let's see if any of that stuck.
So in the knowledge check here,
which endpoint offers the
broadest support for OpenAIs,
APIs, with Foundry models?
It's going to be Foundry,
it's going to be the OpenAI
endpoint or the Foundry tools.
And there we're really
looking at the OpenAI
when you're just talking
to that model directly.
Which package must you install
to use the Foundry
SDK inside of Python?
That's right.
That is the AI projects.
And which method do you
use to generate responses
with the Responses API?
And here we're
looking at create,
get response ID, or
responses create.
That's the last one.
Right.
So here we've
started the process
of programmatically
accessing these AIs.
We started off just by making
sure that we were comfortable
with the model choice and
the various parameters
that were necessary to talk to
that model in the playground.
Then we were making the
decision which endpoint:
Foundry or OpenAI endpoint?
Then, yet another decision:
which of the chat APIs
are we going to use?
The ChatCompletion
or the Responses?
By default, large language
models don't remember a
conversation, they don't
learn from a conversation,
so we have to make sure that
we have a mechanism to track
that conversation from
one call to the next.
We saw two different
strategies there,
depending upon whether
we're using ChatCompletions
or Responses.
And then we've got
it up and running.
Alright, folks.
I hope you found value
in our initial
programming conversations
with Foundry models.
There's a lot more ahead
of us, and still a lot
of detail behind us that'll keep
you busy for quite some time.
I encourage you to continue
exploring new capabilities
so you can stay
relevant in our world.
There are many ways for you to
continue your learning journey,
and I would hope that
you would be researching
at Microsoft Learn
at aka.ms/learn.
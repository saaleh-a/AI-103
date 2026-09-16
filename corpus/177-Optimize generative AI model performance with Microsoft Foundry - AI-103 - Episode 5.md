> Source: https://www.youtube.com/watch?v=Ocx76q4p9ME

[ Music ]
ROB FOULKROD: Hey
folks, welcome back.
This is Session Number 5
of the Microsoft Foundry
Generative AI topics.
Here we're going to be
looking to make sure
that we optimize the models that
we are getting from Foundry.
And specifically, looking at
this idea of performance.
Earlier we defined that
performance as looking at things
like quality and relevance,
fluency and groundedness.
And we want to make sure
that the models are
giving back the responses
that really fit the
application at hand.
There's a number
of different ways
that we can change the
output from those models.
And I love this table that
we have here in front of us
that gives us kind
of a perspective
of where we should
be spending our time
and what options we
have available to us.
So, there are two concepts
that we need to look at,
kind of two different faults
with the output that's
coming back at us.
It may be that it lacks
contextual knowledge
that we are asking the native
model to provide a response
on something it was
never trained with.
In those scenarios, large
language models give responses.
They're just responses that
are typically ungrounded.
And so, if what we're running
into is an issue of lack
of knowledge, there's one
approach that we want
to take a look at to make sure
that it's getting the
right information.
But the other issue
that we can get is one
in which maybe the knowledge
is there, but the style
or the format of the
data coming back
at us isn't matching
what we want it to be.
And so, based upon those
two problems, we have two
or three different approaches
to making that work.
And I say two or three
with a grid of four,
but I'll explain, I promise.
So, the first piece
that we're looking
at here is the solution
is going to be
that of what we would
call prompt engineering.
And this is the cheapest,
the most straightforward,
the most accessible approach
and should honestly be your
very first take on all of this.
Can I change the instructions?
Can I change the system
model in such a way
that the model is now behaving?
So, here we can give it
better descriptions for,
"I need you to use this
tone" or "When you're done,
make sure you ask an engaging
question," or "Make sure
that you don't talk
about such and such."
Those topics in there
can easily be done
by just adding
those instructions.
And this is the
cornerstone, right?
This is your first
approach, really,
regardless of which
direction you're going,
whether it's a what we need to
know or a how we need to act,
prompt engineering is going
to be your first step.
But there's only so
much information
that you can put into a prompt.
You can't put, if we're doing
this based upon a couple
examples earlier, we were
looking at policy files,
you simply can't put all the
policies into the instructions.
There's going to
be pages and pages
or documents upon documents
upon documents that are going
to have the results that
we're going to need.
And a prompt on itself is
not going to be enough.
In those realms, that's where
we're going to get into RAG.
And we did a light version of
RAG in the very earlier section.
Just before this one,
we were taking a look
at the file search tool.
File search is a quick
and easy approach to RAG.
So, it's not something
we haven't seen before.
But RAG says go out and
there's going to be a library
of documents, or libraries,
plural of documents,
and go pull information from
there, prior to getting
into the large language
model, prior to,
asking or querying the
large language model.
This is the approach that we
are typically going to use
when we need it to know more.
But sometimes, we need to
change its behavior, its tone.
And the prompt isn't enough.
And earlier I had said that
large language models are fixed.
They don't learn.
They don't grow.
They don't improve.
We do have the opportunity to
take a base model and to put it
through training of our own.
As a matter of fact, every
model has its own set
of fine tuning that's done
after it's been trained.
Before we see it, there's a
fine tuning, but we may want
to do that on our own.
Now, what I fear,
what I sometimes see is folks
make a very quick jump from,
"It's not behaving the
way I want," to "Well,
we need to do fine tuning."
Fine tuning is a process that
can take a little bit of time.
Fine tuning is a process
that can be expensive
because no longer can we then
just take a base model off
the shelf.
Instead, we are now fixed
into our finely tuned models.
And then as this
needs to change,
we have to tune it again.
So, this is going to
be an ongoing process.
So, when we are looking
at what it needs to know,
we look to RAG concepts.
When it comes to tweaking
the response, the output,
the behavior, we
look to fine tuning.
But on occasion, there
will be strategies
where you will have to do both.
And it's actually not
all that uncommon.
This is a very common path.
It is a very common path to go
from prompt engineering to,
"I needed to know more."
So, we're going to
provide some form of RAG.
This is a lesser used path
to go the fine-tuning route.
But if you are going
the fine-tuning route,
you often still need
it to know something
or more than what it does.
So, there will often be a
combination approach there.
So, you're going to have to
do some sort of testing,
some evaluation on it.
But these are the tools that
we have available to us
when we need to start
tweaking its performance.
Here we're talking again
that first quadrant:
prompt engineering.
They give some examples.
In here, you are a
friendly travel advisor
from Margie's Travel.
Answer only questions
related to travel,
hotels and trip planning.
Right now, we're
talking about behavior.
Only questions here.
Use a warm conversational tone.
If you don't have
enough information,
ask clarifying questions.
Here's a format.
So, we're giving some ideas
of how it needs to behave.
System instructions.
Another pattern is to have
some sort of template.
Now, I do this one quite a bit
when I already have an output
that I like and I just needed
to replicate that again.
Just tell it, "Here is
the output format."
In this case, we are telling
it very specifically.
If you're going to suggest
a hotel in New York,
format it to look like hotel
name, location, star rating
and price range per night.
Here's the output.
You're going to drop the
content in that section.
Here's a pattern that we --
it's not that it's going away,
but a lot of times the models
are handling this already.
This chain of thought was a
revolutionary idea at one point
in time that has now
been integrated deeply
into many of the models.
But to have it explain
its reasoning.
So, here, which hotel is
best for a family of four.
Take a step-by-step approach
because there might be a lot
of variables that are
necessary and as it's writing
down those variables, it
becomes part of the input.
And so, here consider room size,
amenities for children,
location and price.
And then lastly is taking
that template pattern
and just going a little
bit further and saying,
"Hey, here's a few shots."
So, classify the following
customer messages
and we are going
to give a message.
When we give that message,
the category there
is booking change.
Message number two.
Give that, "What's the weather
like in Bali in March?"
This is a travel information.
We're giving it.
Here's a prompt,
here's a result.
Here's a prompt,
here's a result.
Quite a bit can be done
on the prompt engineering
side of things.
Step one, always start here.
But sooner or later, your model
is going to need to know things
that are not inherently
built into the models
that are not inherently
part of its training.
And you can't, in
an instruction set,
put reams and reams of data.
So, the RAG pattern, which we
again got a brief introduction
to in the very earlier section,
is based upon this idea
of creating a vector-based
index in many cases.
And so, in that pattern
here, the user is going
to ask a question and instead
of that question going directly
to the model, we're going
to make a little pause.
We're going to pause right
here and we're going to take
that user's input, and we are
going to vectorize the input.
We're going to take
that, find and turn
that into a batch of numbers.
And you can see
kind of our example
of what these arrays look like.
Based upon that, we are going
to then go into this database
and start pulling out the
documents or the segments
of documents that closely
resemble that input.
Then both the user's
initial input
and those search results are as
a tandem sent into the model.
So, it looks like,
quite honestly,
it looks like a bigger prompt.
It looks like a bigger system
prompt, but we've had a system,
a tool, to automatically
enhance that prompt.
Once the model has both
pieces of information,
it can then do its
generative AI work and come
up with a response for us.
But the model itself
didn't go get the data
in this scenario anyway.
Then our third tool available
to us is that of fine tuning.
In fine tuning we are going
to take a base model,
sometimes called a foundational
model, and we're going
to have a large amount
of training data.
That training data is
going to have Prompt 1
and then potentially
a suggested response.
So, that when what we're
in essence kind of saying
to the model is, "When you get
this prompt, here's an example
of a good response,"
and then we repeat
that again and again and again.
And I won't write this
all out but, Prompt 2,
Response 2 and 3 and 4.
And potentially, hundreds upon
hundreds of these examples.
These examples may come from
your own internal conversations,
your internal data, or you can
ask other large language models
to generate what's
called synthetic,
to generate what the prompt was
and maybe some of the responses.
Then you and your team
can review and ensure
that the responses are
the way that you want.
Once we take that training
data, and put that together,
we go through a
fine-tuning process.
And this could take a couple
hours, could take a couple
of days to go through
and it just keeps tweaking
the model just a little bit
until the responses are
coming back appropriate.
Once that's done, you will
have this finely tuned model.
And the model is
the description.
You will then have to go
through some sort of deployment
so that you have access to
that finely tuned model.
Again, at that
point, it's fixed.
It's done.
It's not going to learn.
It's not going to grow.
If you find that you now needed
to behave a slightly
different way,
or we need to add some responses
that it wasn't really responding
correctly to in the first place,
or we've gone through and
we've seen in the real world,
ongoing we've seen, "Oh,
it didn't handle this response
correctly and we need
to fix that," then
you've got to go
through that entire
process again.
It's a repeat.
So, you're going to take
that foundational model,
you'll take your now new,
enhanced training data
and then you will
train one more time.
You'll deploy that for
your new application.
So, this is a process that
is far more time consuming
than adding another document
to a RAG repository
or tweaking an
instructions document.
What we're going to see
in this exercise coming
up is a combination
of all three.
We're going to start by creating
a prompt inside of the portal.
We will tweak that prompt
just a little bit.
We'll use a prompt that has
enough description in there
that you can see what
we're trying to do.
Then we will go and
fine tune that model
so that we can get a better
response back from the system.
And we'll compare the
results between the base
and the finely-tuned model.
So, for starters, here
we have a GPT 4.1.
If you've been watching
the earlier sessions,
this has been our model of
choice up to this point.
We have deployed a base model
here and we've done no work
with this base model whatsoever.
So, if we just ask a generic
question right now like,
"Hey, what can you do?"
The response that we're going
to get back is that of an AI,
a GP model saying "Hey,
I do lots of things.
I can answer questions.
I can write help documents.
I can even summarize.
We got a lot of things
here, sky's the limit."
So, we may want, when we're
building our own, to start
and we've had an
instruction set in here.
"Hey, you're an AI assistant
that helps people plan travel."
So, now we ask that same
"Hey, what can you do?"
question. And we
will get something
that is a little bit more
targeted towards "Hey,
I can help with travel."
So we can help find
destinations or flights,
accommodations,
itinerary planning.
We have a lot of things, but
it's a little bit more focused.
But quite often, we will want
to spend just a little bit more
of an investment in setting
up those instructions.
So here, what can we do?
What can't we do?
You're an AI travel assistant
that helps people
plan their trips.
Here's some of our objectives.
What we shouldn't be doing right
now should not provide any
hotel, flight, rental car or
restaurant recommendations.
That's not our job
at this point.
And make sure that you are
asking engaging questions.
We want to keep them involved.
We want to keep folks going.
So, using that as our baseline,
as a base set of instructions,
we will ask the question
like "Hey, when in Rome,
where in Rome should I stay?"
Now, we have given
a few instructions
and non-instructions,
and it says "Okay,
Rome's got several neighborhoods
where you could pick."
Starting to ask some
questions here.
Some popular areas include.
But we are not giving like a
specific hotel reservation here.
But the response that comes
back, we ask a question here,
right, that says
asking questions here.
But it is still rather
stoic in its response.
If we continue with "Hey, I'm
really there for the food.
Where should I stay to be
within walking distance
of affordable restaurants?"
Great focus.
And now we're giving
responses back.
Again, no real passion
in the responses, right,
which could be what
we were looking for,
but very straightforward
responses.
So, we could make some of
those changes here inside
of instructions.
We can give a little bit more
in terms of instructions,
but we can also then
start taking a look
at some fine-tuning options.
And so, that's where
we're going to go next.
We're going to take a look
at fine-tuning our model.
And to do this, it's a
little bit important here.
I want to show you the project
that I'm working
with right here.
This project here, is Demo 9990.
The number is not
really important.
But what is important
here is the region
that I have deployed it to.
When you are looking at fine
tuning a model, it's important
that we have a model that is A,
fine tunable, and it is deployed
to a region in
which it is capable
of doing that fine tuning.
So, in our case, we have
been looking at GPT 4.1.
That gives us a couple
of options including our
North Central U.S. So,
we made sure ahead of time,
I made sure ahead of time
to deploy to that location.
So, we're going to swing
into Discover here.
We're going to go
into our models.
We're going to grab
the 4.1 model.
And instead of just
deploying it straight up,
we're going to choose
to do some fine tuning.
So, in this scenario here,
we've got our GPT 4.1.
We've got a couple of different
customization methods.
Supervised training is the
one that we're going to use.
There is a direct preference
optimization, DPO,
in which you are giving
two different options.
This one, I prefer.
This one I don't like, for
each one of our samples
and then there is reinforcement
where we are giving
a rating value
of how well they
have met the mark.
We go back to what we
were looking at here.
We can see that with GPT,
we have our supervised
option, as well as direct.
Those are two that
are viable here.
So, if we were to drop into
our customization type,
you'll see that those
two are viable.
I can click on
either one of those.
But reinforcement
here, not an option,
which matches our documentation.
Then where is the data
going to come from?
And so, we can have
sample data set.
In our case, we have
an existing data set
that we are going to be using.
Let's take a look
at that data set.
So, this data set
here is what is
in the JSON L or lines format.
So, I have changed it a little
bit to match the screen
so that you can read it here.
In general, this would
be one long line.
We would not have the
breaks in between.
But here, we are giving our
standard system prompt in there
that we have seen before.
Then the content.
This is coming from the user
and then the assistant
should respond as such.
So, if we were to
say something like
"What's a must see in Paris?"
we get an "Ooh la la.
You simply must twirl
around the Eiffel Tower.
Snap a chic selfie."
So, we're starting with these
declarative sentences here.
We're using lots of
exclamation points.
We are ending in questions
and that is repeated time
and time again in our responses.
So, our response is
"absolutely" is one
of the responses there
or, "I love history."
Oh, sorry.
Oh, history buff.
"History buff, eh?"
So, these are the things that
the responses should look like.
So, we're giving it questions
and then samples or prompts
and the samples that
it should look like.
So, we will then go and
grab that data set.
Import there at 15
or so lines there.
Looking good.
There's our JSON L. It's
going to then train,
and we will once it has
done the fine tuning,
it will automatically
deploy a model
that we can then test against.
In terms of deployment type,
we're going to use the
developer, which allows us
to kind of deploy this for
a short amount of time
and only pay the token.
Typically, you would use
this to test it out,
not so much for production.
Once we are set there, we go
click "Submit" and off we go.
And by off we go, I mean we're
going to spend about an hour
or so as it gets trained.
I've already done that.
Make our lives a
little bit easier.
I've already clicked
the "Submit" button.
We've already waited.
And when we look at our models,
we will see a trained model,
a tuned model that is
already ready to go.
So, if you would prefer, you can
hit the pause button and wait
for an hour and then
come back to me.
But I don't know that you
necessarily want to do that.
So, now we are going to give the
same setup that we gave before.
We're going to give the
same set of instructions
that we had before and we are
going to ask the same questions.
So, "Where in Rome
should I stay?"
And looking at this trained
version of it, "Rome is full
of charming neighborhoods,"
exclamation point.
And then some options in there.
If we were to say,
"Hey, I am mostly there
for the food," there we go.
So, right, we saw that
that mirrors some
of the options that
we gave earlier.
"So, foodie, huh?"
And then, "Which destinations
are you leaning forward?"
This is one way of customizing
really the behavior.
We really haven't
changed what it knows.
We saw in earlier sessions,
things like, RAG options for it
to have more knowledge.
But in terms of
changing its behavior,
this is one option
that works as well.
Let's head back and review
what we've seen so far.
All right, how'd you all do?
First, let's take a look at
this Knowledge Check here.
What's the primary purpose
of a system message,
sometimes called
instructions, in a prompt?
When should you use Retrieval
Augmented Generation or RAG,
instead of relying on
prompt engineering alone?
And lastly, what does
fine tuning optimize
in a language model?
What are we looking
for it to do?
All right, very good.
So, when optimizing a model,
we're really looking at ensuring
that the output of the model
matches the expectations
and needs of our application.
And we saw there are
three ways of doing that.
Looking at the prompt, using
RAG tools or fine tuning.
Prompt engineering is really
the fastest, most direct way
of doing something like that.
RAG is what you're going to
use when it's beyond a couple
of paragraphs really of
data that it doesn't know.
A couple of paragraphs, we can
maybe get that into a prompt.
But beyond that, we
need it to go look
up that information,
its own files.
We'll use some sort of RAG.
And then, behavior.
That's where fine
tuning comes in.
I see a lot of folks
who use fine tuning
for the knowledge
side of things.
Like, "Here's how you
respond to this."
Really, RAG is faster,
RAG is easier to extend,
but it's when the behavior is
off, then we use fine tuning.
Okay folks, we are close to the
end, the first of four topics
when working with
Microsoft Foundry.
I hope this has kind of wet
your whistle a little bit.
I hope you are eager to try more
and there's a lot
more out there.
And if you want to look
at more information,
if you want to find those
exercises that we were doing,
then go take a look
at Microsoft Learn
and you can find that
at aka.ms/learn.
Thanks everyone.
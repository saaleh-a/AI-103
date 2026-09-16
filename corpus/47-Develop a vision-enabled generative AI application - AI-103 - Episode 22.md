> Source: https://www.youtube.com/watch?v=Xlo-VDqYrz4

[ Music ]
ROB FOULKROD: We've taught our
apps to read and to listen
and now it's time to teach
them to see and even
to create what we
want them to show.
From understanding
what's in an image,
to generating brand
new images and videos,
to pulling structured data
out of documents at scale,
that's the world of visual AI.
Hi, I'm Rob Foulkrod, Lead
Technical Trainer at Microsoft,
welcome to topic four of develop
AI apps and agents on Azure,
extract insights from
visual data on Azure.
Over the next several sessions
we'll cover three big things.
First, seeing.
Building vision enabled
generative AI apps
and analyzing the images
with content understanding.
Then creating.
Generating images and
videos from prompts.
And finally, extracting
and finding.
Pulling structured data from
documents, audio and video,
with content understanding
and indexing everything
for search with Azure AI search.
By the end of this topic, you'll
be able to design solutions
that see, generate and
reason over visual content
and search through it all.
So let's get started
with topic four.
There's a lot of power from
taking a screenshot and using
that as part of a prompt.
Once your app can see what
the user is showing it,
a whole new class of
experiences opens up.
In this session we'll cover
developing a vision enabled
generative AI application.
We'll deploy a model that works
with both images and text
and then build a visual
chat app on top of that.
So let's get started
with this session.
When we're looking at our
generative AI applications,
we can start with a model
and there are a number
of multimodal models that
understand text and images.
And so those can be
included together,
you can have text prompts,
you can have image prompts
and then more likely many
of your applications will have
a combination of those prompts,
where you will supply both
images and text together.
Early in our conversation,
when we were looking
at the open AI models, we
saw that we had a couple
of different APIs for
having those conversations
and we were really just
focused on the text component
of those conversations, but
here we can use both the chat
completions or the response
API, depending upon your needs,
equally effectively
when supplying images
in with your prompts.
We're going to start just
by taking a quick look
at the chat completions API
and you'll see we're doing
a Python example here
and we're just grabbing, there's
nothing really interesting here
that isn't just straight Python,
but we're reading a file off
of disk and getting
that image read.
Then we're grabbing,
right here, data URL.
The data URL is just going
to have data in image
in whatever format, in this
case, the JPEG format,
and then the base 64
encoded data is going
to be sitting right here, so
that's the way that we're going
to pass that information up,
is just a base 64 encoding.
Then the messages array
that we're passing in.
We may have a role, we saw
that, it's pretty standard
to have the system
prompt in there,
and then the user prompt is
going to have two pieces,
the user prompt will have any
text that might be associated
with it, along with
that data URL, right.
So we've got the type, the image
and then we're putting right
there at the end the data,
the content, so that base 64
encoded content gets uploaded
at once.
After that, it's pretty much
the same, because we're asking
for text as a response to come
back, nothing changes in terms
of grabbing our output, response
choices, grab the first one,
and then the message content.
With responses API, again,
very similar upfront,
getting that same base 64,
same URL encoded value
and then we are supplying
the input array.
In the last example
there was instructions,
we can include
instructions here,
so it's an additional parameter,
but whatever instructions
might be necessary
and then our role here.
And then our content.
And just like before, we
can have our text in there,
what can I make with
it, and our image URL,
same component before.
Not really much difference
between the two,
might be a little bit easier
to use the response API
if it's available to you.
And, again, because we are
asking for text as a response
to come back, we're just
grabbing output text.
All right, so we're going to
do a quick little walkthrough
to see that live in action.
We'll do some work inside
the Foundry to make sure
that the models that we've
chosen are multimodal models
and then we will take a look
at building a Python
application to use it all.
So, for starters you can see
here we do have a project ready
to go, that project, however,
does not have any
models deployed.
So, let's go onto the discovery
side of things, into our models,
we would do a lookup here,
I'm just going to grab 4.1,
we've been using this kind
of throughout the series.
We'll click on it and get
its card here and we can see
that it does have both text
and image processing, right,
vision tasks, like all of that.
So, deploy and get
the default settings
for that deployment should
only take a second or two.
Life is good, all right.
So now that we've got that,
let's go and test it out.
We're going to upload an
image to for it to test.
We've got this little mystery
fruit right here, so that you
and I see what the mystery
fruit is, the model cannot,
but we've got what appears
to be a mango at this point.
And we're going to ask it, "Hey,
what kind of desserts can
I make with this fruit?"
And we should --
there we go, nice.
We do have a collection
of mango desserts.
So successful, it identified the
image and then went with that.
So, I like that a bunch.
Go take a look at a couple
of code samples here.
So, we have our AI toolkit here,
it is set up with our project.
I don't think we need a
lot of that right now,
but let's take a look at
our environment variables.
And, so, in here we
just need the endpoint,
we're going to be using the
open AI endpoint in this case.
Because we're talking
directly to the model,
we're not building an agentic
layer over the top of it
at this point in time.
So here we just need
our project reference,
which is, demo 5661-resource.
That has been the name
we're using at this point,
we'll do a little save there.
We do have the right
name here, GPT 4.1,
I don't think we gave it any
name other than the default,
so we should be good there,
then we take a look at code.
So again, in this case,
we're just talking directly,
really directly to
the model itself.
So in this case, we're
importing open AI directly
in our default Azure credential,
grabbing our two endpoints,
at the endpoint in the
model that we deployed
and creating a default
Azure credential,
followed by the open AI client,
passing in the endpoint
and our taken provider,
the credential there.
So, that's great.
We will then build a system
prompt, you're an AI assistant
in a grocery store
that sells fruit,
you provide detailed answers
to questions about produce.
Love it. So we'll start
off with a blank prompt
and basically our
game loop right here.
Ask question about the image.
Now, the image specifically in
this case is going to refer
to a predefined image here,
we're just going to be pointing
to a remote URL, we're not
going to ask the user for that
at this point, we're just going
to be pointing to an orange
and then we can ask
questions about it.
But for our sake, the
interesting part here is,
we are using client, responses
create, specifying the name
of the model in there, and
then in terms of our input,
we will have the system role,
right, you are an AI assistant
and then our role, which
will have both our prompt
and will be pointing to the
image URL type input image,
image URL pointed
to that remote,
it will then download
and do the analysis.
That's it, right.
Our prompt, our image, pass
those in, one response.
We're not going through a lot
with conversations or anything
like that, we've seen that
a bunch up to this point,
so just kind of one
and done, in and out.
So let's give this
a save and a run.
Let's open up the terminal here.
We've already gone
through the process
of activating the virtual
environment and getting all
of the dependencies installed,
so we're good there,
so we should just be able
to, python and image chat.
We'll give ourselves
a little room
to breathe so we can see it.
And let's go ask a quick
question about our fruit here.
We'll go back to the
idea of a recipe.
Again, image is hardcoded.
And picked up on oranges, so
orange salad, an orange chicken,
a nice orange smoothie
in there, great.
All right, so that's
for starters.
And in some cases you may
pre-upload those images,
you might have an application
whose job it is to upload images
to perhaps a surge account
and share those out by way
of maybe a shared access token
or a shared access signature
and you'll just pass in
the URL, that's great.
But in other cases,
we're going to want
to upload the image itself.
So let's quit here, so we
got that already to go
and we will clear so we are
ready next time around.
But we have a mystery
fruit sitting right here,
if we take a look.
We have our dragon fruit there.
Very distinctive fruit.
And we are going to want to
upload that image instead,
so we're going to grab
small code sample here.
Drop that in.
That will go right there.
Boom. And have that into place.
Looking good.
We'll save right there.
Get rid of the duplicate
name, save one more time.
So, grab the image path, path is
to mystery fruit sitting
right here, image format,
that of a JPEG, go ahead and
open up the file and read
that image data, right.
So this is just straight Python,
nothing interesting here
from a open AI or
model perspective.
What we do want to build
is then a data URL.
Data URL is going to be
the image with our format
and then base 64 and
chunk in that image data.
That's the only change, right,
the image URL now becomes
that image data, everything
else is pretty much the same.
So we did a little Python
change in there, built a URL
and then replaced
URL with our image,
everything else
here is the same.
So it's still type and
image and image URL,
but with the included data URL.
So, give that a run
and we should get a dragon
fruit centric example.
So we will run this, python.
And ask the questions, so
here, "What is this fruit,
what recipes could I use in it?"
There we go.
And fruit is a dragon fruit.
And then recipes, smoothies,
fruit bowl, okay, sure,
sorbet, would be nice.
So, some nice options there.
But really doesn't matter,
it is the image upload,
we handed it an image, it
could then analyze that image
and include that in
our request, right.
We've got a bunch more of these,
let's go wrap this one up.
All right, let's see
how much you remember.
For starters, which kind
of model can you use
to respond to visual input?
And here we're looking for
those multimodal models.
How should you submit a prompt
that asks a model to
analyze an image?
And you'll submit a prompt here
that contains a multi-part
user image, as both a text
and that image content.
And finally, how can you
include an image in a message?
And we saw in the example
there, there's two ways,
you can either use the URL
or as base 64 encoded data.
As with many things we've
seen when we're working
with large language models, it's
not often incredibly complicated
to do, a lot of the
complexity comes
from selecting the right model.
So we saw that we do
have multimodal models
that can accept both
text and image as input.
Typically we want to include
them both as the same message,
not necessarily do kind
of follow-ups, right,
and we will send that
as base 64 encoded data
and either the chat completions
or the response API
will work just fine.
In this session we
gave our apps eyes,
we deployed a multimodal model
and built a visual chat app.
Thanks for participating in
this develop AI apps and agents
on Azure course, I hope
you enjoyed learning
about vision enabled
generative AI apps as much
as I had fun presenting.
I encourage you to remain
curious and continue
to explore new capabilities,
that's how we'll all grow.
There are many ways to continue
your journey and I invite you
to search for your
next favorite topic
on Microsoft Learn
at aka.ms/learn.
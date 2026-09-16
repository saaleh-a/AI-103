> Source: https://www.youtube.com/watch?v=PLbh3DdyZS8

[ Music ]
ROB FOULKROD: Generating
images is fun,
but understanding them at scale,
pulling out structured insights
from photos, screenshots,
and scans and diagrams;
it's where the real
business value lives.
Azure Content Understanding is
purpose-built for exactly that.
Hi, I'm Rob Foulkrod, a lead
technical trainer at Microsoft,
and in this session, we'll
cover analyzing images
with Content Understanding.
We'll get to know what
Content Understanding is
and how it works, then walk
through analyzing
images with it.
Let's get started.
Up to this point we've been
using large language models
to generate video, to generate
images, to even analyze them.
But sometimes we need something
that has been purpose-built
for that tool.
And this is Azure
Content Understanding.
Its job is to be able to look
at, whether it be video or audio
or documents, or in this case,
images, to understand what's
in those images and to give
us a text representation
so that we could
use it elsewhere.
I had a scenario where
we had a huge inventory,
just full of objects, and we had
photos of all of those items.
And we needed to enter
mass data into the system.
And so we could take an image
and then look at the image,
figure out what was in
there, and put that in,
or we could run them through
Content Understanding,
get a bunch of tags,
get a bunch of titles,
and as the image came up,
everything was pre-populated,
and all you did was kind
of validate a couple
of things and move forward.
It took something that really
understood those objects.
And while a large language
model could have done it,
it would have been far
more expensive and slower
than using something like
Azure Content Understanding.
So the tool can look at video,
can look at audio,
documents, and forms.
What we're going to
be concentrating
on here is its ability
to look at images.
Here we see a quick example:
an image on the side,
and maybe not the clearest
of images either.
We see a lot of blur
going on in that image.
And the analysis from
Content Understanding.
The image shows a busy
underground train station
platform with a train
passing by at high speed.
Again, I'm not going to read
the whole thing to you,
you can all read, but this
is the analysis summary
of that document.
So, what does it
take to do this?
Well, a couple of things
are going to change up.
Number 1, we're used to
going into Foundry's portal
and working in the playground
for all of our model work.
In this case, we have another
tool, and you can see if we were
to kind of dig into the
underlying URL here,
this is the Content
Understanding studio
at contentunderstanding.
ai.azure.com.
A purpose-built tool that
just does one thing,
and that's Content
Understanding.
So you can use this
as a mechanism to,
much like the playground,
to test in advance.
I've got a handful of
images, I want to run them
through the system and make
sure we're on the right track.
Once we've used the Content
Understanding portal,
then we can switch over to code
now that we know we're there
and write up the example.
And so here we're seeing what
that code would look like.
Again, many times we are
using this client-based tool
that we're going to configure
that with an endpoint.
We configure that
with our credential.
Here we see the
credentials again twofold.
If you've seen me say this once,
you've seen me say it 20 times
at this point: that
either an API key
or an EntraID
identity can be used
to authenticate the
Content Understanding.
And then once we have the client
itself, then a little bit
of Python here just
to read an image
to get the bytes of
that image there.
And then we're going
to supply an analyzer.
So, what we'll do is a little
pre-work ahead of time
to build an analyzer,
and then we will pass
to that analyzer the data
that we're looking for.
When we get the results back,
what we're really looking
at is a large JSON document.
And that JSON document is
going to have things like:
here's the description, or
here are the eligible tags
that might be used
in that situation?
So, we're going to use
this a couple of times.
This first time,
we're just going
to use Content
Understanding for images.
So, we're going to pop into the
Content Understanding portal.
We'll do a couple examples right
there, and then we will jump
into trying the same
thing with code.
Before we get too far into this,
the first thing that we're going
to have to do is we are going to
need to build a storage account.
So, the Content
Understanding system,
when you go to
build an analyzer,
the data for that analyzer
and for the project needs
to go somewhere to persist.
And so the first thing
we're going to have
to build here is a
storage account.
So our Foundry project
that we've been working
with here is demo 5661.
So I will name this
demo5661storage.
That should get me
pretty darn close.
We'll just grab the
cheap storage here
because we don't need it
for much going forward.
I'll review and create.
That seems to be looking good.
So build the storage account.
It'll only take
just a second here.
All right, all set.
So we are good here.
We are not going to have to
come back this location,
but we are going to go take a
look at Content Understanding.
So pop into Content
Understanding here,
we will use the Content
Understanding portion.
We will take a look at Document
Intelligence a little bit later.
But Content Understanding
first, we'll go and explore.
And under the configuration,
here is where we will
tie this to our project.
So we're going to
add a resource here.
We will grab our demo5661.
That's the correct resource.
And what it's asking
us right here is
that this particular resource
is going to use a series
of large language models
depending upon task: GPT 4.1,
GPT 4.1 mini, and GPT 5.2,
along with embeddings.
And right now, most of
those I do not have.
So a little checkbox
there says, hey,
we're going to
auto-deploy those.
That's all right.
It is. Thank you for asking.
We will choose "Next."
So, those are the models.
Great. Go ahead and "Save."
Now we're good to
go, and we'll make
that our default any time
we go to build anything.
That will be just fine.
Alright. So, from there,
we can go and practice.
So, we'll swing up
here to "Build."
And we will create a
brand new project.
In this case, here, our project
is going to extract content
and fields with a
schema that we set up.
We can give this project a name.
The default is fine for
what I need right now.
Go ahead and hit "Create."
Make sure we've got
settings here pointing
to the right project.
Let's go back to
our project here.
Storage account.
There we go.
Storage account is sitting
inside of our demo resources.
Demo, perfect.
It'll create a container.
That's excellent.
Now we can go ahead
and "Create."
Alright, so the first thing
it wants us to do here is
to upload a sample file of some
type so that it knows what kind
of project we're going
to be working with.
So here we will just
drag on an image.
There we go.
And so we've uploaded
here a lion JPEG.
So it's going to correctly
identify that hey,
looks like you are doing
some sort of image analysis.
And starting from
scratch is great.
We'll go ahead and "Save."
And when we go to do this, what
we're going to tell it is:
these are the things that
we are going to want
to extract from this image.
So, we'll build a
schema of things
that we want the large language
model to be looking at
and extracting for us.
So, the first thing
that we will throw
in there is we will
throw in "description."
And that's going to be a
description of the image
and the data type that
we're going to want here.
You can see we've got a
collection of data types
that are available to us
for it to then populate.
In this case, a
string is just fine.
So that's field Number 1.
We will also ask for some tags.
I'll just say tags of the image.
And to be tags here,
we could do string
and it would give us a
comma-delimited list here,
but it just makes more sense to
make that a list of strings.
Go ahead and "Save."
So there's our first schema
for our project here,
and we will run the analyzer.
Alright, and so here we've got a
male lion sitting in tall grass,
background features, great,
and then eight tags
were created here.
Those all look reasonable.
Okay, so we are in
pretty good shape.
So we've got
something that works.
We could elaborate on the fields
and the schema that we want,
but in this case, that
is all just fine.
We'll go ahead and, in
essence, kind of save the,
or compile this,
beneath the covers.
So we'll use the
"Build analyzer."
It's going to ask
for a name here.
Call this demo1 for lack of
a better name and "Build."
That went well.
So we will "Jump"
the analyzer there.
So we can see here our schema.
We can then, if we look
at the code sample here,
look at what that looks like.
I'm using this as a
little bit of a cheat
so that I can just grab the end
point that I'm going to want.
I'm just copying
that right there.
You can see what our
underlying endpoint is,
the name of our resource there.
Alright, so let's try
this now in code.
We're going to swing into
Visual Studio Code here.
We just snagged that endpoint.
So I'm going to paste
that endpoint in there.
We called this demo 1 was
the name of the analyzer
that we save and compiled there.
Save that.
Let's take a look at
the code base here.
Again, we've seen a
lot of this before,
so most of this isn't new.
We are grabbing our
default credential in here
and we are building a client.
This time, the client is the
Content Understanding client
that we find inside of
the Azure AI Content
Understanding library.
So we've built ourselves the
Content Understanding model
in here.
We've got ourselves
three images over here.
And so we will ask
the user, hey,
which of those images
do you want to process?
And we will snag the name,
read those bytes up.
And then the interesting
part for us is
"client.begin_analyze."
We pass in the name of the
analyzer, in our case,
demo 1 was the name of the
analyzer, and the bytes.
And then we will get
back our result.
From the result, we will just go
spill the results to the screen.
So we will look
through the content.
Specifically, we will grab
the description field
that you saw me build
and the tags field
that you saw me build.
We will print the description
directly, and for the tags,
because that was an array, we
will loop through each one
of the tags inside of
that field collection.
That should work for us.
We'll give this a run here.
Go Python and analyze
images (inaudible).
So that you see
what's happening.
There is Image Number
1 right there.
We'll give that a shot.
And feels like a
decent description
of a giraffe standing in a
grassy savannah landscape
under a partly cloudy sky.
Seems reasonable.
And our tags will just
go a little bit further.
We'll go to Image Number 2.
There we go.
Image Number 2.
And a little bit
quicker this time,
everything once everything
has been loaded up.
So we do have a large
elephant standing still
in the savannah landscape.
Alright, pretty cool.
We've got more to do with
Content Understanding,
but first, let's wrap this one
up and then we'll take a look
at some other examples.
Alright, let's see
what y'all remember.
First, what kind of AI solution
is Azure Content Understanding
designed to help you build?
I'll let you read.
Right. Analyzers that extract
information from documents;
images, as we've seen so
far; video; and audio files.
What graphical tool
should you use
to create Azure Content
Understanding project?
And that's going to be the
Content Understanding Studio.
That's that portal, different
from what we've seen inside
of Foundry's portal.
So we're really just
starting right now
with Content Understanding.
We're going to take a look in
a moment a little bit deeper
at some of the other
understandings
that are possible.
But right now, we've done
really one of the most common,
which are just images.
So it has the capability
of doing images
and docs and audio and video.
We'll see that coming up.
There are some pre-built
analyzers in there
and our ability to do
custom if we need.
When we go to run through
and build the schema,
we can give it just a couple
of samples to train it
up pretty quick, and then we
can use the API to call in
and bring back the JSON document
that is that understanding.
In this session, we turned raw
images into structured insight.
We understood what
Content Understanding is
and analyzed images with it.
Thank you for participating
in Develop AI Apps and Agents
on Azure course, and I
hope you enjoyed learning
about Content Understanding.
Stay sharp, stay in touch.
There are many ways to continue
your learning journey.
I invite you to search for
your next favorite topic
on Microsoft Learn
at aka.ms/learn.
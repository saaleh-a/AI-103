> Source: https://www.youtube.com/watch?v=XNeW6L8wj9k

[ Music ]
ROB FOULKROD: Up to now,
we've been consuming
visual content.
In this session, we
flip that around.
We'll have our apps generated.
A short prompt becomes
a brand-new image
or even a brand-new video
clip on demand in the style
and subject you describe.
Hi, I'm Rob Foulkrod, a Lead
Technical Trainer at Microsoft.
In this session, we'll cover
generating images in video.
We'll start with images, getting
to know image generation models,
exploring them in the Microsoft
Foundry Portal playground,
and look at the OpenAI
Image API code.
Then we'll do the
same with video,
deploying a new video
generation model
and turning a prompt
into a moving scene.
Let's get started
with the session.
When it comes to generating
images, we're going to have
to select a new model.
Up to this point in all
of our demonstrations,
or many of them anyway, we've
been using things like GPT 4.1,
but that doesn't really have the
capability to generate images.
It can read them as we just
saw, and text and such,
but it doesn't have the ability
to generate new images.
So, we're often moving
to other models.
Many of you may be familiar
with, like Dall E, which was one
of the early image
generation models.
Here we're moving on to
things like GPT Image,
some of the Flux models perhaps,
or Microsoft's My Image 2 model.
All have generation
capabilities.
So, we can then give a prompt
and then get back a response.
Often, we want to test that in
the playground to make sure
that we're getting
the right thing.
We could also include
reference images to say, "Hey,
it should be something close to
this," but then always some sort
of prompt describing the scene.
Let's take a look
at the Image API.
So, up to this point,
everything prior to this line
of code here is very much
what we have seen time
and time again in this course.
You're going to find the
appropriate endpoint.
You're going to have an
authentication mechanism.
You are going to build
the OpenAI client.
But from here, you'll notice
that the client does
have an images property
on the end of it.
And from that, we can generate.
You're going to
supply the model.
You're going to
supply the prompt.
You will supply the number
of images that you want it
to generate, often one, but you
can have it generate multiples
at that point.
And then kind of a pixel
size, what do you want
in terms of the output.
From there, once you
get back the results,
you are looking at
data zero, right?
So, if we were asking
for multiple images,
there would be data zero,
data one, so on and so forth.
But the property
that we're looking
for is this base
64 encoded image.
So, we're just doing a base 64
decode to get the actual data
and then here we just have
standard Python just writing
that down to a disk.
So, if we want an image of a
robot eating a cheeseburger,
this is often what Flux
thinks robots look like.
So, we would get that
response coming back.
When it comes to
generating models,
you often can't use the
same models we saw earlier
for image generation as you
can for video generation.
So here, there's a suggestion
for Sora 2, a very common model
that is used for
generating videos and one
that is deployable inside
of Microsoft Foundry.
The concept of being
able to supply a prompt
and getting back a video, it
often depends on the type
of prompt when it
comes to the quality.
So, if you want a high-quality
video that's close
to what you need,
you really do want
to describe what
that looks like.
So, here some of the ideas
that may want to be included
in there are things like
camera framing, obviously what
that subject is, supply some
of the details in there
with that subject so that we're
not just getting very generic.
What does the action look like?
What does the
lighting look like?
And for me, these are not terms
that I am super
comfortable with.
These are not ideas that I
am super comfortable with.
So, I will often use
generative AI tools
to help me build said prompts.
But here we have an example
of a starting prompt here.
A 1980 sci fi film styled
medium, close-up shot
at eye level, captures a young
woman standing at the edge
of a rain soaked rooftop.
You can read the
rest on the screen,
but you see there's a
lot of detail in there,
a lot of specificity
on what that image
or video should look like.
But then, we're going to look
at the API for doing so.
Again, we're using the same,
but now we're going to look
at the API for generating video.
Here we're using the
same OpenAI client
that we've been using all along.
So, everything above this line
of code here is very
much what we have seen.
We just looked at the client
object and saw images.
We're now looking at that client
object and seeing videos.
So, videos.create.
You'll supply the
model that you want.
You will supply probably a
prompt more sophisticated
than a waiter in a restaurant.
Earlier we saw that there
was a number, you're going
to get one video, but the size
of the video, what we're looking
for and how long
that video is to be.
And you have to
look at the models.
This is not just an
arbitrary integer.
Often there are set values
that can be used, 4, 8,
12, so on and so forth.
So, look up the API to make sure
that you're supplying a length
that is supplied or a
length that is supported
by the underlying model.
Now, the other thing that
is a little bit different
than what we saw earlier is
the length of time it's going
to take to build those videos.
So, instead of just having a
single call that we just wait
for it to complete, instead
what we get back is an object
in which we can
check the status.
So, here we are looping through
and calling this polling object.
So, while the status isn't one
of the completed statuses,
while it's not
completed or failed
or cancelled, keep on looping.
Here, we'll wait 20 seconds
and then we will go
grab the video ID.
So, keep going again
and again, poll again,
poll again until we're set.
Then eventually, eventually we
will hit one of these statuses.
We are hoping for the
best at this point.
And when it is completed,
we're going to go to videos
and instead of it being
a property of an object
that has already been given
to us, it is a method in here
where we will download
that content.
We will supply the video ID,
and then finally we can write
that content out to a file.
All right, so we've got a couple
demos that we're going to show
in just a second here.
We're first going to
go into the portal
and deploy an image generation
model and then play around with
that in both the portal
and in some code.
And then we're going to do the
same for video generation.
We'll deploy a Sora
model and then
in code we will create a couple,
three different
videos from that.
If we jump into our
deployed Foundry project
and we take a look at
the models that we have,
we do have a GPT model here,
but this GPT 4.1 model doesn't
have text to image capability.
So, we're going to
go deploy a new one.
If we look at the tasks
available to us and scroll down,
down, down, down
to text to image.
There we go.
We'll see that we've got quite
a few options available to us.
In this case, we will grab the
FLUX.1 context pro and deploy
that to our default settings.
With that deployed,
we can go ahead,
drop this right off
in our playground.
So, we can go ahead and say,
"Hey, what do we want to build?"
And as we saw kind of forecasted
in the slide, we're just going
to have -- we're going to have
a bunch of hungry robot here.
So, we will say, "Hey, I'd
like to see a robot
eating spaghetti."
And there we go.
There's our buddy there eating
a little bit of spaghetti.
We don't really have a lot
of context behind him.
So, let's try one more time.
I'm going to drop that in there.
Robot eating spaghetti.
But we will also say,
in a restaurant.
Let's have a little bit
on top of that there.
It's not like when we saw chat
before how we're keeping the
context from one chat
message to the next.
So, you want to make sure
that if you want a change,
you're specifying at least in
this one here, the whole prompt.
And so, there we go.
Now, we've got a little glass
of wine with them there
and a nice little
restaurant ambiance.
Good.
Let's imagine for our sake
right now, that's perfect.
Those are definitely the
images that we want generated.
So, let's go jump into
a little bit of code
and it's not going to be a ton.
We're bringing in the OpenAI
and default Azure credential.
Those are the two that are
really essential for us here.
We will need to do a little
bit of encoding, decoding,
decoding in this
case from Base 64
to get the data back
from the API call.
But we're going to go
grab our endpoints.
Let's double check that I do
have decent endpoints in there.
I do. This is our resource.
That is the model
that we deployed.
So, we are solid there.
So, those have been brought in.
There's not a lot that
you haven't seen in here.
Going for the token
provider route
to get our Azure credential
and building our OpenAI client
passing in the endpoint,
passing in the token provider.
Then we get into our
standard game loop here.
Input text, enter the prompt.
And if it's quit, get out.
Here we have
client.images generate.
When we're calling
into generate,
we can specify in
here the model.
We can specify the prompt.
We can specify the number
of images that we want
when we're looking at here,
and we'll just do one
for expediency sake and
then we will get back our
image response.
From that image response,
we will have a rather
large JSON document
that we will go load up.
And for what we're looking
for here is the image inside
of the JSON response.
So, there is a key in
there called Data.
That is an array based
upon the number of images
that we had asked for.
So, zero. Grabbing
the first one here.
And there is a key with
the base 64 JSON data.
So, we will grab
the data directly,
then do a base 64 decode to
get that data into bytes.
At this point, it
is plain Python.
We need to come up with a
file name, and we are writing
that file down to disk.
That should appear here
inside our Images directory.
Right now, you can see this
is the nothing up my sleeve.
There are no images in there.
So, we will give this a run.
Python image client.
Let that load up.
Excellent.
And continuing our
theme of hungry robots,
let's say we would like an image
of a robot eating some pizza.
Give that a second.
Great. Image has been saved.
We open this folder up.
Lovely. We now have our robot.
All right, so reflecting back
on the code itself here,
we are building
an OpenAI client.
That client has images.generate.
That's why the configuration.
And then it's an extraction,
where we've got a JSON document
that we're coming back with.
There is a data key in there
which is an array and from
that we can get
the base 64 JSON.
All right folks, let's go a
little bit further and work
with some video generation.
So, the first thing we're
going to need if we're going
to generate any video
is we are going
to need a model
capable of doing that.
And so, I'm going to swing
over here into the Discover,
and we will start discovering
some models and we will look
under Inferencing
Tasks and scroll way
down until we get to
Video Generation.
So, we'll put a check mark
there and then all the way back
up to the top and we'll see
that we've got a few
options available to us.
Sora, Sora 2, and an avatar
feature component available here
under the Featured section.
But we're going to grab Sora 2.
We will do a quick deploy.
Grab the default settings.
And we're in business.
So, let's just in the
playground here make sure
that we've got
everything moving well.
So, we will.
I hear a director
giving a presentation
in a modern conference room.
We will keep the size there.
Four seconds is enough to
see if it's going to work.
We'll give that a run.
And there we go.
We've got here a director
giving a presentation.
Let's give a run here.
There we are.
So, we've got ourselves a start.
All right, and let's check
out that video real quick.
So, I'm going to
quickly download it.
Alright, so we will take a quick
little look at that video here.
We're going to download it
so we can get all the
sound and everything.
So, grab download
there, pump that up.
SPEAKER 2: This strategy
keeps us ahead of the curve
and positions us for the
next quarter's growth.
ROB FOULKROD: One more time
there, the whole thing.
SPEAKER 2: This strategy
keeps us ahead of the curve
and positions us for the
next quarter's growth.
ROB FOULKROD: All
right, so let's go
and take a look at
some code here.
So, we'll swing into VS
code and a few things.
Again, we've done
half a dozen times
if not any more
than that by now.
We've got our environment
variable set up here
so that we have the
correct resource there
and our model
deployment of Sora 2.
Up top here, we are loading
up the token provider here,
default Azure credential,
and then creating
our open AI client.
In the client, we
pass in the base URL.
We pass in our token provider.
We've done that a lot.
What is new for us here is
that against the client,
we are using the
videos object here.
And in this case, on
the videos object,
we are calling the create method
and we're passing in the name
of the model that
we want a prompt.
And we talked earlier
about the importance
of having a really
strong prompt here.
We're just saying I want
a peaceful mountain lake
at sunrise with mist
rising from the water
in the cool blue-green tones.
Not good character.
There we go.
In cool, blue-green tones.
So, and then, it's
going to be on its way.
We will go do a quick little
poll here and in the polling,
every 20 seconds, we're just
going and checking to see
on the videos retrieve, passing
in the ID that we were looking
for and then
checking the status.
If the status isn't in one of
the final statuses completed,
failed or canceled, then
we will take a little nap,
sleep for 20 seconds, and
then just do that again.
So, just keep polling
until the video is ready.
Once the video is done, once
we're done with this here,
we know it's going to be
in one of the statuses.
So, if it's completed,
then we'll go
and grab the download
of the video.
And so, here we go into
that videos object again.
Call out to download
content, grab the video ID
and then write that to disk.
So, pretty
straightforward in terms
of getting the video locally.
So, simple little create method.
That'll be first.
Now, I very specifically in
here tacked on that we're going
to want this in a
cool, blue-green tone.
So, we're going to get
video number one here
in cool, blue-green tones.
But then, we're going to
change our mind right.
We're going to do
this in a single run,
but we're going to
change our mind.
And in this case here, we
are going to go and call
out to a little
helper method here.
Generate video from image,
and then we're going
to change our mind.
And in that case, we are
going to remix that video.
We've got a little helper
function here to remix.
Let's dive in.
Inside of remix, we are
passing in the old video ID
and then calling videos.remix.
And in that remix, we are
passing in the new prompt.
Up back here.
Shift the color to warm, sunset
tones with golden light.
So, we started with a
blue-green tone here.
Then we're going to shift
to a golden, light tone.
So that'll be video number
two that's coming down.
We'll see them all momentarily.
And then the third option, here
again, little helper function.
Generate video from image.
We're going to pass
in a reference thing.
Take a look right here.
You can see a little
mountain scene
with a office setting
in the front.
We're passing in that image path
and then as the scene comes
to life with gentle movement
and ambient lighting.
So, we're going to take that
image, use that as the base
and say how to then to
generate video from there.
You have to do a
little swap here now
that I've noticed
a tiny little bug.
That's not a big deal.
By 780 there, make sure
it is the same size
as our reference image there.
And then download the video.
So, if we look at
our helper here,
in the helper again,
same video objects.
Then on the create, we're
passing in our model,
we're passing in the
prompt, size, seconds
and the parameter here
of input reference
and passing in that image.
All right, so let's take a
look at this running now.
So, we'll pop open
the terminal here.
Python and then the video app.
Now, each of these will take,
oh, I don't know, a minute
and a half, two minutes
or so, to build.
So, we will speed that
along for you all.
All right, so we have
our first video here.
Let's go take a look.
Again, let's do a quick little
reminder here on the prompt.
Peaceful mountain lake at
sunrise with mist rising
from the water in a
cool, blue-green tone.
So, let's see what
that looks like.
Not too bad.
Here we go.
Feels very blue-green
tones to me.
We'll give this a run here.
Mist rising over the lake.
Not bad. So, that's our starter.
Now remember, for
the second one,
in the second one we took
the original video ID
and we were passing that
in and saying, "Hey,
you've just built a video.
Now, I'd like you to take that
video right there and remix it.
And so, in this case, shift
the color palette to warm,
sunset tones with
a golden light."
All right, so now we have
our remixed video here.
In the remix video, there
we go, golden light.
So, very similar video
with the, in this case,
the color palette
changed a little bit.
Looking very nice.
And then for the last one,
again, as a quick reminder,
this was the base
image that we gave it.
So, then we're just saying in
this case here that we would
like you, the scene
comes to life
with gentle movement
and ambient lighting.
So, video generation complete.
So, here is then our
image-based video.
Looks like a familiar
image there.
And just a gentle
pan to the side.
Very nice.
All right, so you can see
here, with the API here,
really not overly complicated.
We've got ourselves
a videos object.
On that videos object we
saw the create method.
We also saw in there
the remix method.
And then we wrapped up with
a return to the create
within input reference
for that base image.
All right, hope
that was helpful.
Let's go wrap this up.
All right, let's see
what you remember.
Just a couple quick
questions here.
You want to find a model
in Microsoft Foundry
to generate images.
What inference task
should you filter by?
Text to images.
Pretty straightforward.
And which OpenAI API object do
you use to download the video
from a video generation model?
That is the videos object there.
All right, in this section
here, we took a look
at a couple different
sets of models.
We used the image generation
models and worked with those
in both the portal and in code,
and then did the same for video.
So images, models like GPT Image
and Flux can create
images while things
like Sora 2 can build pretty
realistic video scenes.
A lot is going to come
down to your prompts.
There's a huge collection
of terminology that's
really important
when describing
images or videos.
So, spend some time crafting
really good prompts in there.
They return base
64 encoded data.
And the video generation,
if you recall,
video generation took a few
minutes to build and required us
to kind of keep
polling periodically
to find out, "Are you done yet?
Are you done yet?"
Until eventually
we got a result.
In this session,
we turned prompts
into pictures and into motion.
We covered today's image
generation models and tried them
out in the Foundry playground
and called them from code.
We did the same on
the video side,
generating a clip
straight from a prompt.
Thank you for participating
in this Develop AI Apps
and Agents on Azure course.
I hope you enjoyed learning
about image and video generation
as much as I enjoyed showing.
I encourage you
to remain curious
and continue exploring
new capabilities.
That's how we all grow.
There are many ways to continue
your learning journey,
and I invite you to search
for your next favorite
topic on Microsoft.
Learn at aka.ms/learn.
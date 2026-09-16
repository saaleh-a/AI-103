> Source: https://www.youtube.com/watch?v=FMfX6qo4LII

[ Music ]
ROB FOULKROD: Push-to-talk is
great for a walkie-talkie.
But a modern voice agent we
may want something else.
A real-time, low-latency,
full duplex conversation.
Where the agent can
listen, think and speak
in the same flowing exchange.
And maybe more importantly,
interrupted when we need to.
That's Voice Live.
Hi. I'm Rob Foulkrod, a Lead
Technical Trainer at Microsoft.
And in this session we'll
cover developing a voice agent
with Voice Live.
We'll walk through the Voice
Live API and look at the SDK
for building against it.
And bring it together
by developing a
voice enabled agent.
So let's get started.
We're continuing in here with
one of the Foundry tools.
So this is a huge
advantage here.
We really don't care too much
about what the underlying
model is that we're using
when building this agent.
Instead, we can incorporate
theses same tools to create
over the top of many
many different models.
So, we can see here bring
your favorite Foundry model,
whatever that happens to be.
And then using these Azure
Speech tools inside of Foundry,
we can enable this
Voice Live session.
And you may have seen
this is a number of kind
of our handheld agents where
we just naturally speak
to the agent, the agent
itself starts responding back
in natural language.
But back and forth, we've got
that idea of full duplex.
That I talk to it, it
talks right back to me.
But also with that ability can
be, to say like, hey, hold up,
hold up, wait, and
get your thought in.
When at some times agents
tend to ramble a little bit
and you got the point, and then
you get onto the next thing,
that ability to just
interrupt and go,
it's a pretty powerful addition
to voice-driven applications.
So when we enable the
Azure Speech Voice Live,
we get that real-time
conversation.
It connects, we get a
bidirectional connection,
so beneath the covers
you're going to see,
for the technical folks here,
see a web socket connection made
between the client
and your application
to start that session.
Being that this is the
Foundry tools in there,
same two authentication
mechanisms
that we've seen
up to this point.
You can use the older API key,
or you can use a keyless
identity connection.
Ideally we're moving
that direction.
But it's more than just
talking back and forth.
There are a number of
different advanced features
that are pretty powerful.
So the first is that you
can decide what we're using
in terms of audio formats.
You can use the PCM16 format,
which is an uncompressed,
standard audio format.
The size, the payload it's going
to be a little bit larger.
But the, you get
full fidelity sound
out of something like that.
Or, there is also
the G.711 format.
And this is a compressed speech
codec specifically just has kind
of that bandwidth has the
range for human voice.
So it can be a lot
tighter, a lot smaller,
but still convey human
voice really well.
When it comes to voice options,
many of you have probably moved
through the list of voice
options that your agent has
and selected one specifically.
We have lots of options when
it comes to Live Voice.
There are the OpenAI voices,
but there's a collection
of voices available to us
from the Azure custom voices.
Some of which we saw in
the earlier example,
we'll see them again coming up
in a little bit more detail.
There's also the capability
if you're building some sort
of learning product, if
you're building some sort
of documentation product
that you may want
to have avatars
on those systems.
So there is avatar
integration using WebRTC,
has a communication mechanism
for both kind of video
and animation that
might be behind it.
And we're often not
using our agents
in the best audio environments.
So there is builtin noise
reduction, echo cancellation,
we don't want things like the
voice that's being played
over the speaker to
be then picked up
and sent back through
that speaker.
So made of things like echo
cancellation are already
in there.
All right.
Now I do wish that I could make
it a little bit more complicated
in terms of enabling it.
But, sadly, that
is not the case.
When you build your agent
inside of Foundry --
-- we have a
checkbox, in essence,
that you check to enable this.
And at this recording we're
seeing this in preview.
By the time you see this it
may be out of preview by then.
But just toggling that switch,
we then get a brand new panel
to turn on Live Voice.
We can then go through
and either have it detect the
language automatically that's
being used.
Or we can say, listen, I know
the language ahead of time.
That speed up that initial
connection just a little bit.
But also then we can go ahead
and configure the voice
that we want it to use.
This can be done
programmatically as well,
we're seeing here
through the portal,
but programmatic access
is available as well.
And then we've got a couple
other advanced settings
that we'll take a look at
in the example coming up.
But yeah, I mean, that's
the basics when you're here
in the agent to flip that.
Now when we start
looking at the SDK,
we're going to connect
up to the agent.
We will set up
some configuration
for both what is
the input device.
So, what is the microphone
that's going to be in use?
What is the output device,
what does the speaker
that's going to be set?
And when those are both
configured together,
then we can go ahead
and establish the
Voice Live session.
Then there are a series of
events that are kicking off.
So that we can listen
in for where we are,
did we establish a session, do
we have a response coming back?
So our client device can
understand where we are
in terms of the conversation.
So that our client device
can understand what's going
on in the conversation and
indicate appropriately.
We're really going to want
to take a look at this.
So, let's dive into an exercise
where first we'll just do
the configuration of it.
But then we're going to walk
through the code sample,
which there's a number
of components in there
that we're really going to
want to take a look at.
So first and foremost, we need
to swing into Foundry itself
and build ourself an
agent, one more time.
So we will go "Create An Agent".
And we will build
that as a chat agent.
And right away we'll just give
it a little bit of a peer.
Pop that right in.
So you're an AI agent that
helps people find information
about AI.
So we're going to stick
to the AI topic here,
you answer questions
concisely and precisely.
Important to hear when we're
going to have it talking
that we don't get too verbose.
So we're going to keep
this down as much
as we can keep an AI agent down.
We'll just start with making
sure that the basics in place
but can help me with or should
give me a bunch of stuff.
Without too much work, lovely,
we'll give that a save,
we're in an okay place.
But there has been
a little checkbox,
a little switch right there.
That's probably been staring
at y'all in the face
for almost 20
demonstrations now.
Where you've been looking at
and you've been hoping would
he just click the button.
Well, it is now time
to click the button.
So we will go ahead and
click on "Voice Mode" here.
I'm just going to move this
over just a little bit
so we can see the
pieces that we have.
The minute we go into
voice mode it is ready
for us to start working.
We got some configuration
that we can click into first.
So the first is, should we
be auto-detecting language?
So, we could say, no, it's going
to be one particular language,
or we can let it auto-detect.
There's no harm in
having it auto-detect.
Second is then picking what the
voice is going to sound like.
So it is Ava by default.
We can go ahead and click
the drop down here.
Got a few options available
to us, but we also have more.
If you were around a couple
of sessions ago we did a couple
different voices for our speech.
And I think we had, what did
we have, we had Serena first
and then I think we
brought in Stefan.
We've got a lot of voices
that we can dig through.
Now for my demonstration here
I'm going to grab a male voice.
Kind of representing me a little
bit in here, so I will go
with a male voice there.
In terms of ages, we will
just go kind of adult here.
And going up a
little bit further
into our collection here.
Voice capability here
what I want is going
to be our context-aware
voices, there we go.
And we will go, gosh, we go
back, we can go back to Stefan
from earlier, that
would be fine.
We'll go with
Andrew, he's pretty,
he can be pretty dramatic and
we'll quickly listen here.
ANDREW: From the research lab
to the big industry players,
we've got you covered.
ROB FOULKROD: Thanks
Andrew I appreciate that.
And we could, I go through and
listen to all of these, we won't
and we'll spare you all.
That I will pick
"Andrew" and save.
All right.
And so now that we've
got our voice in place,
we got a few more
settings in here.
One is the idea of
an interim response.
So an interim response is if
the AI is taking a little bit
of time, there can be a voice
response saying hey we're
working on it.
And then proactive engagement,
if there is a long pause,
this can be a little
probe for it to say,
hey, are you still there?
What are you thinking,
that type of engagement.
We'll leave those off for now.
We are saved.
Now let's give it a check.
So let's start.
Got the microphone up and going.
And, hey AI agent, what
can you do for me?
ANDREW: As an AI agent I can
assist you with a variety
of tasks, including, one,
answering questions.
I provide accurate,
cited answers on topics
like technology, science,
history and current events.
Two, research.
I find reliable information
to summarize technical --
ROB FOULKROD: Real quick here,
just give me one more
bullet, that's it.
ANDREW: Ten, language
translation.
I can translate text between
multiple languages quickly
and accurately.
ROB FOULKROD: Awesome,
thanks my friend.
ANDREW: You're very welcome.
If you need anything
else, just ask.
ROB FOULKROD: All right.
And so in here is also,
we don't have a lot
of screen space, make
it easy to read.
But we can see here as I
did that little cutoff,
so answering questions there,
he was going into research
and that's when I
cut poor Andrew off.
I said one more bullet and so
he jumped down to the last one,
ten, language translation.
And we had that.
So this ability for us, as
you see in other agents,
you're talking to it directly.
It's going off, can do that
nice little interruption.
Okay so, this is a
controlled environment.
Nice and easy here
inside of the portal.
But what does that look like
for us in terms of code?
Let's jump in.
As always we've got setup
an environment variable
so it knows where to go.
In our cases, in our case right
here, we are dealing with,
let me grab the right
number, there it is.
So 4790, we'll throw
that right here, "4790".
Repeat that for the
project, "4790".
And we've got the
name of the agent
that we decided earlier
was "Chat-Agent".
Click "Save".
And into the code, and like
I mentioned the instruction,
there's a little bit
more code in here
than what we have
seen in the past.
Let me actually
back up one step,
we'll go into the requirements.
The addition here of, a
new dependency in here,
the azure-ai-voicelive is the
component that's giving us
that back and forth
voice communication.
All right.
Those have all installed,
they're all sitting
there ready to go.
So in here we're going to bring
in the name spaces including
the Voice Live name spaces.
There is a connect helper
function, we'll take a look
at that setting
up the bidirectional
network communication
that we're going to need.
And then a series of
classes that we need
for the configuration.
So when we jump in, a lot
of same old, same old,
read our environment variables.
Use our CLI credential in there,
we've been kind of toggling back
and forth between
the CLI credential
and the default credential,
doesn't really matter
from this environment.
And then here voice assistance.
So this an internal
class that we built,
so this is for the
demo it dealt.
That is not part of
the standard SDK.
But to that voice is
listening we're passing
in the endpoint and
the credential.
And then we're passing in
our agent information.
The name and the project name.
Then we're just
doing an async run.
Passing in the assistant
and telling it to start.
Great. Now the assistant, again,
our own custom class here.
This is where we're really
exercising the SDK.
So in our constructor here
we're saving our information,
we're saving our configuration.
And then the start method,
which is what you saw us
beginning the whole thing with.
This is where we really begin.
So we start with the
connect helper method,
again that is creating a little
web socket communication
between client and server
so that we've got
this bidirectional
network communication.
We're setting up the endpoint,
the credential, the API version
and then our agent config.
Again, that was just the setup
of name and project name.
Then storing the
connection for later.
Audio processor.
Also one of our classes.
Though the audio processor class
here, its job is to do the back
and forth playing
through the speakers,
recording through
the microphone.
And it can be handling that back
and forth to the live assistant.
So we're going to let that
go, there's not a lot,
it's good Python code in here,
but it doesn't have a
lot to do with our SDK.
What does is setting
up the session.
So next step we're
going to setup
that session, let 12 later.
And you can see here we are
creating a request session.
And setting up that we are
using both text and audio.
You saw in the portal that one
when the conversation was over,
we saw a text output in there.
This session will have both of
those, instead of just one.
Depending upon your medium,
maybe you don't need the
text response coming back
and you only need the
audio, that's fine.
But here we will do both.
We will setup the audio format
that's going back and forth.
And then I, class here to
handle turn detection.
So this is where it
allows us to have
that interruption
capability in there.
And then just a couple
other small configurations.
Should we, if we
had both speakers
and microphone nearby one
another, should we be canceling
out the feedback so it
knows what the output is
and tries to cancel that?
And then also should we be
looking for any noise reduction
that might be going
on in the background?
So once we've got that setup,
then we start the playback.
So, again, we'll dive into this.
Here we're grabbing the bytes,
and this is really just making
those, grabbing the bytes
from the, and then
start playback.
We are handling the audio
that is being put
through the speakers.
And so making sure
that as it's streaming
in that we are sending
it out directly.
And then finally, the
last bit that we have
in here is process event.
So as we are getting all of that
audio there's a number of events
that are going to
be kicking off.
And this is going to be
the handling the display
and what's coming next.
So for example, if a session is
updated then we are saying, hey,
connect up to the name and start
any capture from the microphone.
So we're grabbing audio
processor, starting the capture.
And then we can go through the
list of events that are going
on in here, whether we
are starting some speech,
or we're starting the output,
all those events are kicking in
and you'll see we got a
nice little emoticons here
that will show the results.
All right.
So, that's kind of the start,
but let's get a feel
for how this works.
I'm going to do, we
didn't change anything,
so we don't need to do a save.
We will open up terminal here.
And let's start
everything going.
Add client.
Come up with a decent
question, okay, good.
Hey there, can you let me know
what functionality you have?
AGENT: Of course!
Here's a quick overview
of my functionality.
One, information retrieval.
I can answer questions about
AI, technology, science
and a variety of other topics
by providing up-to-date,
concise and --
ROB FOULKROD: That's a lot
of things, I see the list
on the screen right there.
I'm actually thinking about
closing out of this application.
Can you tell me how to close
out this Python application?
AGENT: Certainly.
The process for closing a
Python application depends
on how you're running it.
One, if you're
running the script
in terminal/command prompt,
press "Control Plus C"
to interrupt and stop
the application.
ROB FOULKROD: That's
all I needed.
Thank you so much.
I appreciate you.
AGENT: You're very welcome.
I'm glad I could help.
If you ever have more
questions or need assistance
in the future, feel free to ask.
Have a great day.
ROB FOULKROD: And over.
So, yeah, fun little script.
And the end we'll show you
where to grab all these labs you
can play with them yourself.
But, yeah, I hope
that was helpful.
Let's wrap this up.
So let's see how
much you remember.
So what are the two
authentication methods supported
by Voice Live API?
Hopefully at this point you're
seeing the patterns develop.
That's Microsoft
Entra, Entra ID.
And or an API key.
How do you configure and test
Voice Live agent integration
in the Foundry portal?
Just flip the switch, right,
there's an enable voice mode
in the agent playground.
And how do you stop
audio playback
when a user
interrupts the voice?
There's an event handle the
input audio buffer speech
started event.
So in this session here we
learned about the Voice Live
and its real-time
conversation capabilities.
We saw a little
of the event-driven model
beneath the covers.
We understand that could
be responding in a couple
of different audio formats.
The PCM16 and G.711 format.
Either high fidelity or tight
human speech specific codec.
And then we looked at that SDK
for establishing a session.
Thank you for participating
in this develop AI apps
and agents on Azure Course.
I hope you enjoyed
learning about Voice Live
as much I enjoyed
presenting the concepts.
I encourage you
to remain curious
and continue exploring
new capabilities.
That's how we all stay relevant.
There are many ways to continue
your journey and I invite you
to search for your
next favorite topic
on Microsoft Learn
at aka.ms/learn.
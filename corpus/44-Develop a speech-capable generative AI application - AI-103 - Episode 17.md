> Source: https://www.youtube.com/watch?v=C5ZE-mzU1wA

[ Music ]
ROB FOULKROD: Text
chat is great,
but real conversations have
voice, tone, pacing, intent.
What if your generative
app could take audio
in directly and respond in kind?
That's where multimodal
models step in.
Hi. I'm Rob Foulkrod, a Lead
Technical Trainer at Microsoft,
and in this session, we'll cover
developing a multimodal audio
chat app.
We'll deploy multimodal
models that understand audio,
build an audio chat
application against it,
then extend the pattern
into a speech-enabled app.
Let's get started
with the session.
Inside of Foundry, we have a
huge collection of models.
I think at one point in
time, we showed a slide
that had something
along the lines
of 11,000 models
at our disposal.
It is only the tiniest
fraction of those
that could actually be used
for speech-capable services.
So one of the things that
we want to take a look
at are what are the
models that can be used.
And here, while this isn't
the totality of the list,
you'll see that we've gone in
and sorted by inferencing tasks.
And so in this particular
slide here, we are looking
for a couple of tasks.
In this case, we are
looking for speech-to-text.
All right.
And in here, we see
capability speech-to-text.
And so there are a number like
the GPT-4o mini transcribe
that carry on that capability.
The second of the
inferencing tasks,
just kind of reverse our
way here, text-to-speech.
And so you can
search the Foundry
for those inferencing tasks,
which you'll find right
over here, and we can get
a comparative alternate,
which is the GPT-4o
mini-tts, or text-to-speech.
With those models, they
have been optimized.
They have been designed
specifically for a number
of language tasks,
such as transcription,
the ability to pass in an
audio file, a video, and say,
from that, I need to extract
the transcription from it.
And the other direction is
we've got someone who needs
to be listening in on that
content, and sending it
by way of text isn't great.
So that's where we would
reverse the text-to-speech.
You can think of your
GPS, how it reads
out to you the next
set of directions.
That's some sort of model
in there that's doing,
whether it's a GPT
model or others.
There's something in
there that's doing
that text-to-speech capability.
And we need to go beyond
just simple "turn left
at the stoplight," because in
that case, we really don't care
so much about, not
a ton about tone.
We don't really care
about inflection.
We need clarity, but
we don't really care
about the rest of those things.
But that's not true for
all human interactions.
And so many of these models also
take into account the ability
to give intent, to give emotion
associated with them as well.
So they're richer than just
"make the sounds"
that are appropriate.
So inside of Microsoft
Foundry, we would deploy one
or both of those models.
We would typically use a
model like GPT-4o transcribe
if we wanted to take in
binary audio content
and then have the
underlying text as output.
And we would use GPT-4o
text-to-speech, TTS,
as a mechanism to do the
opposite, to take in text
and then read that
out appropriately.
The output again is going
to be a binary data
that represents
that audio output.
What we're going to see right
here is we'll take a look
at doing both of these.
We'll go search for those
and deploy those two models.
We'll then create an application
that can synthesize speech,
and then create one that will
dictate what we are saying
and get the responses back.
Let's take a look.
So for starters, let's hop
into a Foundry project
that we have built earlier.
We're going to go into
Discover, and let's swing
to the model side of things.
And one of the things
that we have the ability
to do is do a search based
upon the inference task.
What are the models
particularly good at?
Now, there's not an
insignificant number of tasks
that we have here, but if we
dive down and take a look first
at our speech-to-text,
we'll check there.
Swing back up, we will see
we've got a number of models
in which that's their forte.
Now, we'll go and grab
a smaller one here,
so we'll do GPT-4o
mini transcribe.
And we will deploy based
on default settings.
So we've got our speech-to-text.
Now, we'll go back to Discover,
back to Models, Inference task,
swing way down to Text to
speech, go the other direction.
Back up to the top,
GPT-4o-mini text
to speech, perfectly good one.
Deploy, Default settings.
All right.
Now, if we are looking
at our build section,
as we are right here, and
we just go into Models,
we do have our two that are
ready to go, our text-to-speech
and our mini transcribe.
Excellent.
Let's take a look at some code.
So here, we've
already downloaded
and gotten our projects up and
ready, but one of the things
that we do have to do is set
up our environment variables.
So I'm going to go
into the AI toolkit.
I was just in the UI.
I probably could have
copied them from there.
We'll make sure that we have
the right project set up.
So we will switch to
our 4790 project.
We've got our models
that are there.
That's good.
I'll right-click.
Copy the endpoint.
We'll just need the
Foundry endpoint there.
It's the same for both of them.
And then we can dig
into our environment.
Right. So into our environment
variable one, there we go.
We have our demo resource.
Same thing, and save
before I leave.
There we go.
And that's our -- we
knew the default name.
And same here, mini
transcribe, and save.
Now, let's start with
generate speech.
Inside of generate speech,
not a lot that we
haven't seen already.
In this case, we're
going directly
to the model itself, so --
-- Azure OpenAI and our
default credential.
All right.
And in this case here, we're
setting up our token provider,
default credential, building
the OpenAI endpoint,
passing in the endpoint,
token provider,
version for this
particular model.
And built into the client, we
just have some really nice,
in the OpenAI world, some really
nice features, including audio
and speech, that has a
function in it called
with streaming response,
pass in the deployment,
pass in the voice that we want,
and what the voice is going
to say is "my voice is my
passport," and some instructions
that the large language
model can look at,
so speak in a serious tone.
That is going
directly to a file.
So if we look up
above here, yeah.
Look up above, we've built
a little speech.mp3,
so that should
appear right in here
when we're all said and done.
So we're streaming out
directly to that path,
and then using play sound.
So that should work.
We go into generate.
Let's do a Python
generate speech.
There we go.
SPEAKER 1: My voice
is my passport.
ROB FOULKROD: As I stomped
over it when it spoke,
we can open that file up.
We can hear it one more time.
SPEAKER 1: My voice
is my passport.
ROB FOULKROD: Yeah.
With all of the importance
that it's warranted.
So going back again
and taking a look.
Audio, speech,
streaming response,
just to start getting those
bytes back as quickly
as possible, and we just wrote
them directly to the path.
And again, reading this
back up, play sound.
If we were to look
the other direction,
we already have a WAV file here.
Let's play that one just so you
know what you're going to --
you'll hear it
again in a second.
SPEAKER 1: Oh, man.
On the other side of the
screen, it all looks so easy.
ROB FOULKROD: That
was, "Oh, man.
On the other side of the
screen, it all looks so easy."
That's what we're hoping for
in terms of our response.
So transcribe, Azure
OpenAI in this case.
Again, file path, but file
path now to our speech WAV.
We'll play it ahead of time just
so that we know what we are
going to be listening for,
and then again, token provider,
default Azure credential.
We've seen that a
number of times.
We're building our
Azure OpenAI client.
And in this case, audio
instead of what we saw before,
which was audio speech, we'll
now have audio transcriptions.
Create, pass in the audio file,
and then the format
for the output.
Then we will just display
those on the screen.
So all of that looks good.
Python, transcribe.
Oh, let's swing over into
the right terminal here.
Try one more time.
There we go.
Transcribe.
SPEAKER 1: Oh, man.
On the other side of the
screen, it all looks so easy.
ROB FOULKROD: So
that was the play.
Now it's being
sent to the model.
Oh, man. On the other side
of the screen, it
all looks so easy.
It does look easy.
Really. This one's
really not bad.
All right.
Let's wrap this up.
All right.
Let's see how all
of you are doing.
So of those two, can
you remember now,
which model can you use to
generate text from speech?
All right.
Text from speech is going
to be the mini transcribe.
Then which model do you use to
synthesize speech from text?
All right.
There is the GPT-4o-mini-tts,
or text-to-speech.
Relatively
straightforward process.
We're seeing a lot of the same
ideas used again and again.
Deploy an underlying model,
create the appropriate clients.
Here we had a little bit of work
to deal with the binary data
that was coming back in
our Python application.
But use the appropriate models.
Again, a TTS model when we're
looking at speech synthesis
and a transcription model
for speech-to-text.
In this session, we crossed
from text into voice.
We deployed a multimodal model
and built an audio chat app,
and developed a
speech-enabled experience.
Thank you for participating
in this develop AI apps
and agents on Azure course.
I hope you enjoyed learning
about multimodal audio chat
as much as I enjoyed
presenting the concepts
and walking you through it.
I encourage you
to remain curious
and continue exploring
new capabilities.
That's how we all stay relevant.
There are many ways to
continue your journey.
I invite you to search for
your next favorite topic
at Microsoft Learn
at aka.ms/Learn.
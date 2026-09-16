> Source: https://www.youtube.com/watch?v=OQKQtqjZ1Wo

[ Music ]
ROB FOULKROD: Speech is the
most natural interface humans
have, and turning
audio into text,
and text into audio
reliably at scale in dozens
of languages is not something
you want to build from scratch.
The Azure Speech and Foundry
tools has it covered.
Hi, I'm Rob Foulkrod, a Lead
Technical Trainer at Microsoft,
and in this session, we'll cover
developing speech-enabled apps
with Azure AI Speech.
This time, we'll work with the
Azure Speech and Foundry tools
to create speech-to-text
and text-to-speech.
We'll look at audio formats
and the voice catalog,
and shape the output with Speech
Synthesis Markup Language, SSML.
So let's get started
with the session.
So we've already taken a large
language model and used it
to generate text-to-speech
and speech-to-text.
So here we're doing this again,
and this is the second time
we've seen this duality in terms
of having two systems that are
capable of doing the same thing.
But when we're using the Azure
Speech tools that are inside
of Foundry, there's a couple
of reasons we may focus here
instead of what's inside
of the large language model.
First and foremost, when
we're using these tools,
you're generally going to
have more predictable latency
and cost at scale.
Large language models, a
little bit less predictable,
a little bit slower
in their creation
of either the audio or the text.
You'll also have very explicit
control over the voices
and the audio formats.
If you did the last lab
and the last exercise,
as a matter of fact, if you ran
it a number of different times,
even generating the
exact same text,
you got back subtle
differences every time.
In some cases, that's
perfectly acceptable,
but there are other cases
where we really do need
this predictability.
We also see a little bit
easier auditing and logging
of what we have in these tools.
When you're using the
large language model,
you're getting back the audio
file or the audio results,
but not a whole lot else.
Here, we're going to get
a little bit of metadata
that told us what went
well or what didn't.
So troubleshooting can be
a little bit easier here
with these tools.
Now, on the trade-off
side of things,
the system doesn't have the
ability to reason about intent
or understanding of the text.
You're just going to get a
very consistent translation
each time.
So the tools that we're going to
be looking at in this section,
specifically, we're going to
be digging into these two,
mirroring what we saw
in the earlier section.
A little bit later in the
course, we'll take a look
at voice live and
speech translation.
But the patterns we've seen up
to this point are very similar.
The pattern we've seen before
is going to repeat itself here.
When we were using the
text analytics tool,
we saw that we were
using the same endpoint,
whatever your foundry resource
is.services.ai.azure.com.
Just like then, we had
two different ways
of providing credentials.
You can either use the foundry
project API key, or preferably,
you could use an Entra
ID to authenticate.
Either one of those, you're
going to pass that information
in to what is a SpeechConfig.
This is going to be
the jumping off point
for whether you're
creating text-to-speech
or speech-to-text.
Either one, you will start by
creating that SpeechConfig.
So all of these things are going
to really come together
inside that SpeechConfig.
Then, that SpeechConfig is going
to be the connection
to Azure Speech.
There also could
be an AudioConfig.
We need to know whether
we're bringing information
in from the microphone
or in from a file.
In the cases of trying
to synthesize --
let's back up a step.
Once you have your SpeechConfig,
then you can make a decision
whether you're converting
speech-to-text or the
other way around.
In this scenario here,
we are taking speech
and converting that into text.
So we're going to have
our SpeechConfig object
that we just saw on the
prior slide, but to that,
we will add an AudioConfig.
So the AudioConfig is
going to be determining
where does the audio that we are
converting to text come from.
Is that a microphone?
Is that coming in from a file?
You will often see
that this is used
when we're doing a
lot of text creation.
We may have batches and batches
of these files that
are being used.
Once we have both of those
objects, we will come together
to build the client that is
really doing the real work.
In this case, the speech
recognizer has a number
of methods that we can use.
The one that we're looking
at right here is the
RecognizeOnce method.
When you call that
RecognizeOnce method,
it'll take in whichever audio
file or the microphone output,
and it will return to
you the text transcript.
This is the reason that
we're calling the method
in the first place, but we're
also getting an additional
collection of metadata
that goes along with it.
This is where that
additional troubleshooting
or logging information can
come from, because it's more
than just, here's the
transcript and we're done.
This is the process
that we went through.
This is the process
that we went through.
So we will see things like,
well, how long in seconds?
What is the duration of that?
What are additional properties?
And the reason for the output.
So reason could be things like,
hey, we did not recognize speech
or there's no match or canceled.
Those would be the
negatives if there was -
Those would be the negatives if
there was some sort of problem.
Now, we'll take that and
just pivot just a little bit
to get the text-to-speech
side of things.
So same SpeechConfig
object that we saw before.
There's our credential,
there's our endpoint.
But now we're passing in
the audio output config.
So this is where should
that information be
sent when we're done.
Then we will pass
into that the text.
And then from there,
it will then send
that audio stream to our output.
Again, that audio stream
could be going down to file
or that audio stream
could be sent directly
to a particular speaker or
something to play immediately
for the user in the case of
an interactive application.
Same type of metadata that
we're going to get back.
The audio stream, again, the
reason that we're calling this
in the first place
is for that stream,
but also additional
properties and the results.
Now, using that previous
method, you're going
to get very standard output
in terms of what does
that speech sound like.
Every time you call it, you're
going to get the same thing.
But there are times where
you're going to want
to have far more control over
what that output looks like.
And in those scenarios,
there's an additional ability.
There is a function
called speak SSML.
SSML is Speech Synthesis
Markup Language.
So here we can create an XML
document that has the details
about only what should be said,
but exactly how it
should be said.
So you'll see we've got a
number of different parameters
that we can pass into
that XML document.
So we can pass in
the speaking style.
There are what are called neural
voices, which we could say,
I want this to be
excited or sad.
In the XML, you could also
include things like a pause
or silence in those sections.
There may be some words
that we have to spell
out phonetically, right?
So classic example, at least in
my world, is every time I pass
in my last name, I'm going to
get something like foul crud,
which is not great so -- passing
in the phonetic spelling does
make it a little bit easier
on occasion.
We also have things
like prosody.
Prosody is --
We also have things
like prosody.
Prosody is the speaking
pitch, the range,
the speed at which the
words are uttered.
We may have scenarios where
we want to say as something.
So for example, if we pick a
standard American zip code,
this could be said as 48,111,
which isn't really how
we say our zip code.
So we can say we wanted
to say that as --
Back that up again.
We also have the
ability to use say as.
And so, for example, using a
standard American zip code,
we could say that as 48,111.
But using say as, we can say
it as part of an address,
as a zip code, so
that it said the way
that we would normally say
48111, when we were referring
to that particular code.
We also have the ability
to have recorded speech
or background audio also
included over the top of the --
-- over the top of the content.
And so all of that SSML string,
that XML document is passed
in to the speak SSML async.
All right, let's take a look.
In here, we're going to
just do a quick example
where we synthesize both
text and recognize speech
after doing just a little
bit of setup work.
Let's take a look at our
development environment here.
We have already
deployed our project
and with our project came all
of the language tools
that we needed.
So we just need a little bit
of configuration here
for our environment.
And in our environment,
we'll bring this right
back up again here.
We need just to give it the,
in essence, the resource name.
So we know that as demo-4790.
We see that right up here.
We also know that it took the
default resource as the name.
I have curly braces there.
I don't need curly braces there.
Those can go away and
we can do a "Save."
So just the endpoint to
where this is going to live.
Then we can dig into the code.
And in the code, we've got a
couple pieces of functionality
and both of them start the same.
Both of them are going and
grabbing the Foundry endpoint.
And from there, we actually
are grabbing the Foundry key,
but we don't need the
Foundry key in that case.
We're using the default
Azure credential.
And we are then doing
the SpeechConfig, right?
The SpeechConfig is being passed
with the credential
there and our endpoint.
And we can do all
of the work here.
So we've been most of
what we've seen over
and over again has been
client, client, client.
Here, it's just the
configuration object.
And then we're building a
little menu structure, right?
This is just straight up Python.
We will have two bits
of functionality.
We will be able to record a
greeting for a voicemail.
We will be able to then
transcribe any voicemail
messages that we might have.
So we'll press either one
or two for the cool stuff.
But let's take a look at the
"Record greeting" first.
We are passing in the
Speech Configuration object
and then getting a message
written out for us to,
in essence, transcribe.
We will create a little
file called Greeting.
We will do so.
We will create a
Audio Configuration.
That Audio Configuration will
be pointing to the output file.
And then the SpeechConfig
will go a little bit further
and we will then put the
name associated with it.
And we will create then
a speech synthesizer.
The speech synthesizer will
then take those two pieces
of information, the AudioConfig
and the SpeechConfig.
They will both be
passed in for us
to then use the
speech synthesizer.
So this is our new
client right here.
Speech synthesizer, speak text.
We will pass in
whatever greeting.
And that's going
to be our result.
So let's give that a
shot for starters.
We will open up
our terminal here.
And Python and voicemail there.
We want to record a greeting.
There's the greeting.
Hi, this is Rob.
Probably teaching
a class right now.
Leave a message.
I'll get back to you
as soon as possible.
Thanks.
You can see I should have
probably pointed this out,
but the greeting file was
not there a second ago.
We are now writing to that file.
We've just finished.
We're going to let
go of the file here.
And let's take a listen.
Here we go.
SERENA: Hi, this is Rob.
I am probably teaching
a class right now.
If you would leave a
message, I will get back
to you as soon as possible.
Thanks.
ROB FOULKROD: Yeah,
you're welcome.
Okay, so that great voice.
I probably should have paid
slightly more attention
to the voice in that one.
We'll close greeting out.
Let's go back.
Serena, perfectly fine voice.
Let's try, let's go with Stefan.
There is a pre-configured list.
I'm not just grabbing
names at random,
but the pre-configured
list there.
So we will grab Stefan's voice.
We'll do the same
thing, just for grins.
And same message.
The file is going to
just be overwritten.
So you continue to see
the greeting file there.
We'll let that finish up.
Thank you.
We will exit, unlock the file.
And now with just a quick
little voice change.
STEFAN: Hi, this is Rob.
I am probably teaching
a class right now.
If you would leave a
message, I will get back
to you as soon as possible.
Thanks.
ROB FOULKROD: Yeah,
you're welcome.
And being a Midwesterner, there
is a lot of syllables there
in the word probably that
we don't always hear.
But that's okay, that's fine.
It's good, it's good, good.
We can actually take,
just for grins,
let's take a copy of that.
And we're going to drop
that into messages.
We might as well have
that transcribed as well.
So we'll take a look at
the second half of this,
which is given some messages,
can we get a
transcription of those?
So the second portion of this
is the transcribeD message.
TranscribeD message was
passed the same SpeechConfig
that we saw earlier.
It's then looping through the
meeting, the messages directory.
And for each one of those, it
is pre-playing the sounds.
Once we have heard them, once
you and I have heard them,
then we are creating
an AudioConfig.
The AudioConfig is
taking the speech SDK,
AudioConfig specifying
the file name, that path,
and a speech recognizer.
Speech recognizer is getting
past the SpeechConfig
and the AudioConfig
from up above.
And then our speech
recognizer recognize once.
And then we will print out the
transcription if it works.
So we'll do a quick
little save there.
I don't think I changed
anything, but we'll do it again.
We'll give this a
run into voicemail.
We will hear each of
the messages prior
to it being transcribed.
Let's go ahead and
transcribe our messages.
STEFAN: Hi, this is Rob.
I am probably teaching
a class right now.
If you would leave a
message, I will get back
to you as soon as possible.
Thanks.
ROB FOULKROD: So that is now
being sent to the system.
AVA: Hi, this is Ava.
Just calling to remind you about
your appointment tomorrow.
Call me back on 555-123-456
if you have any questions.
ROB FOULKROD: And then we
get Ava's message being
transcribed now.
We'll go immediately.
ADAM: Hi, Adam here.
Are you still on for
coffee this afternoon?
ROB FOULKROD: Yeah, I am, Adam.
Thanks for asking.
So there we are.
There's all of our three, folks.
All the transcriptions
are set up.
And again, this is just using
what we would, in the past,
we had called our
cognitive tools.
But the ones that are
built, they're now packaged
up alongside of Foundry.
No models were being used here.
No large language
models were being used.
We have pre-built models that
were used for these purposes.
I hope that was helpful.
And I'll see you
back in the day.
All right.
So there were a lot
of class names.
Let's see how much
you remembered here.
So first and foremost, what
information do you need
from your Microsoft
Foundry resource
to consume it using
the Azure Speech SDK?
Right. Only those two things.
The endpoint and the
key is the option here.
A secondary option might be to
also use an Entra ID credential.
Either one of those would work.
Endpoint and key or
endpoint and credential.
Which object should you use to
specify that the speech input
to be transcribed to
text is an audio file?
Right. That's the AudioConfig.
You may have been leaning
toward that SpeechConfig.
We kind of made a
big deal of it.
In this case, the AudioConfig is
handling the audio file output.
How can you change the voice
used in speech synthesis?
Right. And here,
you're going to set
that voice name inside
of the SpeechConfig.
All right.
So just to do a quick
little review here.
In this section, we
looked at the speech SDK
for both text-to-speech
and speech-to-text.
We used a couple of
classes in there.
The SpeechConfig as the conduit
to get back into Azure.
And then depending upon which
direction we were going,
either the speech recognizer
for speech-to-text
or the speech synthesizer for
voice and format options.
And then if we really
needed to get particular
about how things were said when
we were doing text-to-speech,
then we could bring in
SSML to mark that up.
In this session, we taught our
apps to listen and to speak.
We worked through speech-to-text
and text-to-speech,
then shaped natural sounding
output with voices.
Thank you for participating
in this Develop AI Apps
and Agents on Azure course.
I hope you enjoyed learning
about Azure AI Speech as much
as I enjoyed presenting
the concepts
and walking you through it.
I encourage you
to remain curious
and continue exploring
new capabilities.
That's how you'll keep growing.
There are many ways to
contribute to your learning.
I invite you to search for
your next favorite topic
on Microsoft Learn
at aka.ms/Learn.
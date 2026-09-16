> Source: https://www.youtube.com/watch?v=bnPIZUZjDyA

[ Music ]
ROB FOULKROD: Your users
don't all speak the same
language, and your apps
shouldn't force them to.
Translation done well is what
turns a single market product
into a global one.
And Azure gives us
multiple ways to do it
across both text and speech.
Hi, I'm Rob Foulkrod, a Lead
Technical Trainer at Microsoft.
And in this session, we'll
cover translating text
and speech across languages.
We'll start with translation in
Microsoft Foundry generally.
Then we'll look at Azure AI
Translator for text and finish
with speech translation so
we can carry conversation
across language
boundaries in real time.
So let's get started
with the session.
There are a number of ways
of doing translation
in Microsoft Foundry.
Many of you who know large
language models are aware
that generative AI is capable
of doing translation.
As a matter of fact, in the
origin story of generative AI,
translation was its kind of
initial purpose, and we found
out it could do much
more than that.
The problem with using large
language models is they do have
to be trained very specifically
on a large number of languages.
And while they have a
handful of languages
that they do incredibly well,
it's not as complete as some
of the other tools that
are available to us.
So here we're going to
look at a couple tools
that have been designed
very specifically
for nothing other
than translation.
We have the Azure Translator
inside of Foundry Tools,
and then we can stack -- when
we want spoken language,
we can stack Azure Speech
over the top of it as well.
So we're going to use
the Azure Translator.
And this is, again, one of
the built-in Foundry tools.
So we're really not concerned
about the underlying models
that you're using as long,
as long it's capable
of making MCP calls, we're
in pretty good shape.
You're first going to note
the endpoint that we're going
to need at this point,
whatever the name
of your Foundry resource is,
then.cognitiveservices.azure.com.
With the API key or
authorization token --
in many of our examples
we've been using things
like the default
Azure credential
or the default AZ
CLI credential,
which gives us a token provider,
one of those two mechanisms
can be used in conjunction
with our
TextTranslationClient, okay?
Once we have that client, there
are a few important tasks
that we want to know about.
The first one is the ability
to just ask what
languages do we support?
So you can call that
function, get back a list
of the supported languages,
and typically what
you will see here is
that the supported language list
will be larger than if you were
to use a large language model,
most average large
language models,
their list of languages
that they do well.
So get the supported
language, get back the codes
and the example languages
that it knows, okay?
Then there are two important
tasks when it comes
to translation
between languages,
in written form specifically.
And the first and probably most
obvious is the translate text,
that we have text of
language A and we want
to get the equivalent meaning
inside of language B,
whatever that happens
to be, right?
So the second option
is understanding
that languages have
different character sets
that are available to them, that
they write in different ways.
And so there is
also what is called
"transliterate" or
"transliteration".
And transliteration is moving
from one system or script
to another, right, we're
not getting meaning there,
we're just translating into
something that for some is
like easier to pronounce,
right, we're looking
at the pronunciation and
writing it in another script,
another set of characters.
So those are the two calls
that we can make using the
TextTranslationClient.
Now, if were translating
speech, we're going to go back
to what we saw in our
earlier session, right?
Translating speech we're going
to have a different
endpoint here.
Notice we're calling out
to our foundry_resource
and services.ai.azure.com, so
change-up of the endpoint.
But we are not changing up
what we are allowing in there,
API key, Microsoft Entra ID.
Again, either one
of those will work.
In the earlier example, we said,
"Token," it's the same thing,
right, just some sort of
mechanism to grab a token.
And then we will need the
SpeechTranslationConfig.
So the SpeechTranslationConfig
is the one that has
that connection information.
It understands the endpoint,
it understands the credential,
where we're going.
And then we can bring in
the TranslationRecognizer,
whose job is to do
the actual work
from the configured resource.
Now, when we are using that
TranslationRecognizer,
we have a couple of different
formats, and for a couple
of different scenarios.
So what you see here on
the screen they talk about
"event-based" or
"manual synthesis".
What we're really looking
at is do we want this
to feel more live,
as we're going,
we're getting
translation right away,
or are we doing something
kind of in bulk?
So the event-based is useful
when doing one-on-one
translations,
single-language on both sides.
So you're going to specify the
desired voice that you want
in your TranslationConfig,
and then there is an event
that we are listening in for
to the receive audio stream.
So as an audio stream is coming
in, that event kicks off,
which then can handle the
translation side of things.
Manual synthesis is when
we're bringing in a text,
but we may need to
generate multiple outputs,
each of different languages.
So this may be a bulk operation
that we're translating a series
of documents so that we're
translating a series
of maybe UI elements that we're
then supporting many languages
kind of statically at the end.
Right, so those are
the two strategies.
Going back to the event-based,
the components that we're going
to need, that
SpeechTranslationConfig,
is going to know
where the server is,
the TranslationRecognizer,
what are the languages
that we are going to be
going back and forth on.
When the event_handler kicks
off we're received some audio,
then we can go through
that translation and send
that to the OutputConfig.
That OutputConfig in many cases
here is going to be directly
to a speaker, right, to
be translating that kind
of as the data is coming in,
but could also be a file.
In our more manual process,
the manual synthesis option,
SpeechTranslationConfig again,
TranslateRecognizer in there,
then we're going to
bring in the speech --
one or more SpeechConfigs,
what are the languages
that we are putting those
out to, and hand those
to the SpeechSynthesizer.
Again, those could go directly
to a speaker output
in many cases here.
Because we do have the ability
to do multiple languages side
by side, you may be
writing those out to file.
All right.
What I want to do is take an
example here and we'll kind
of walk through an
example of both of those.
We'll go through some
text translation,
then we will take a look
at translating speech.
And this doesn't require us
to have deployed any models
at this point in time, however,
I'll click on the "Build"
and I'll click on the
"Models" section.
But instead of going into any
particular model, we will dive
into the "AI
Services" component.
And from there we
have what we're --
used to be called the
"Cognitive Services,"
or the "Azure AI Services" here,
and we can use, for example,
the "Text Translation".
So we dig into
"Text Translation,"
and we could do kind of our
standard, "Hello, world."
I do miss my colleagues
around who are good with lots
of different languages.
I am not, so kind of stuck
with me here for a minute.
But let's take French.
Here we go.
And just work with a
little translation there,
"Bonjour le monde!"
So we were -- it's a
good start, right?
And that's fine here
inside of our Foundry.
One minor note here, if
we go take a look at the
"Code" section here,
you'll see our endpoint.
And we're using what
looks like kind
of the older cognitive
services endpoint.
That's fine.
I'm going to throw that onto
the clipboard for later.
And let's take a look at what
this would look like in "Code".
So first things first,
always drop our endpoints
into our environment variable so
that we have those, and save.
So basically just our
project resource,
cognitiveservices.azure.com.
If we look at our requirements
here, we're bringing
in Azure Cognitive Services
and Azure AI Translate.
And let's do the text
side of things first.
If we jump in, we're bringing
in Azure AI Translation, right,
our text, importing
the vast majority
of the name space there, and
our TextTranslationClient.
Right, so this is the
crux of the whole thing.
It gets our credential, which
we have seen many times before,
and our endpoint, okay?
Then the first thing we're doing
is we're asking the client,
"Hey, what languages are
supported," specifically
for translation,
as opposed to --
we talked briefly earlier
about transliteration.
We're specifically
look at translation
at this point in time.
And then we are asking
for a target language.
Now, if we look at
the list of languages
that we are supporting, right,
we've got that list right here,
and it will be asking us
for the two-letter code
for what language we want
to be working with here.
And the block itself, if --
and it will continue to ask us
until we pick one that
is inside of the list.
So we look.
If it's in their supported
language, great, we can move on,
otherwise, we're stuck in a
loop until we get it right.
All right.
Then we say, "Okay, input
text," the text that we would
like to translate into that
particular language, right?
All right, so let's
give this a run.
And in there, let's do Python
and translate_text for starters.
All right, 137 languages
supported at this point in time.
We've got that same
link right there.
"Enter a target language."
And let's translate
things to French.
And, "This is a test."
"C'est un test."
Pardon me, folks, who
are -- who speak French.
Has been a very, very long time
and I was never good at it.
But there we are, so whatever
we're putting in here.
Okay. There we are
in our translation.
Right, so pretty straightforward
process here looking
at translation.
I probably didn't -- as
I was pointing this out,
point out the main method
in this case here.
But the main method
we're looking at is the
"Translate" method, right?
In the "Translate,"
we're just using
that same client we just
created up above in that
"Translate" method thing
in the elements there
and the target language.
Now, there are other parameters
that you could include in there,
the from_language if we
didn't want it to autodetect.
You saw that when I was typing
in English, it just picked
up on the fact that
it was in English.
If there were enough
similarities, you could say,
"Listen, here is the
from_language," if we wanted,
if there was profanity involved,
what did we want to do
with that profanity, those types
of things could be included
in the "Translate".
Then we get the response.
And then if there's something
in there, we are upping
up the response source language
and what it was translated to.
All right, let's switch, and
then take a look at "Speech".
Now, "Speech" obviously is going
to be a little more involved.
And this is going to layer on
top of a lot of the components
that we saw earlier when we were
talking about speech-to-text.
Because as we saw earlier in
our earlier conversation,
we are really relying on
those underlying components
and then layering
translation on top of it.
So we're bringing
in the
azure.cognitiveservices.speech
SDK.
Inside of the Speech SDK, we're
bringing in a translation
and a speech translation
configuration,
and passing in the where
and the how, right,
what is our credential,
where are we going?
Then, to that configuration,
we're specifying what the
recognition language is.
So I will be speaking
in English US
and then the target languages,
right, we will have French,
Spanish, and Hindi in there.
Then we have our
audio configurations.
You may recall that we
have to say, "Well,
where are we bringing
this information from?"
In this case, pretty
straightforward,
we're going to use the
default microphone,
the same thing I'm using
to record this right now.
And so the translator
is then going
to be given the translation
configuration up above
and audio_in, that's going to
be our input side of things.
Then it's going to say, "Ready,"
and we'll go from there.
Then on the speech
configuration --
so this is in essence the
output side of things,
of a SpeechConfig, same
credential, same endpoint,
and we will have an audio_out.
In this case, we'll use
the default speaker, okay,
and we will devise
three different voices
that are going to be used.
And then it waits.
So here, we have
our recognize_once,
so that'll be waiting
for me on the microphone
until there's a long
enough pause, okay?
We'll go through the
translation process
to understand what I have,
that'll kind of
read what I have.
And then for each one of the
languages, we will go through
and do another configuration.
We'll go grab the particular
voice, we'll set the output side
of things, and then use
the speech synthesizer
to do the speech configuration
in the output, and then finally,
the method that's going
to pull it altogether,
the "Speak" method.
So if this goes well --
-- we'll do a little
"Python translate speech."
Welcome, my friends.
I hope this goes well.
SPEAKER 1: Bienvenue mes amis,
j'espère que tout
se passera bien.
SPEAKER 2: Bienvenidos, amigos,
espero que todo vaya bien.
[ Non-English ]
ROB FOULKROD: And there we are.
So we have a nice little
example of both being able
to do a translation of X and
to be able to do the listening
to speech and translation.
All right, folks,
let's wrap this up.
So let's take a look at
what we remember here.
"What function of an Azure
Translator TextTranslationClient
object should you use to
convert the Chinese word
to the English word, 'Hello'?"
Continuing with that
thought, "What function
of an Azure Translator
TextTranslationClient object
should we use if we wanted
to convert the Russian word
into Cyrillic characters?"
And that's going to be the
"Transliterate" option.
And then, finally, "Which Azure
Speech SDK object should you use
to specify the languages
in which you wanted
speech translated?"
All right.
And that's the
SpeechTranslationConfig.
So here we've taken a look
at making our applications
much more multilingual.
We've taken a look at the
Azure Translator for both text
and document translation.
We saw the capability
of transliteration,
and worked through the SDK,
both configuring the
SpeechTranslationConfiguration
object and looking at the
two different strategies
that we might have,
event-based good
for more real-time translation,
and the manual synthesis much
more helpful when we need
to use multiple
languages as our output.
In this session, we made
our solutions multilingual.
We enhanced our application
using Azure AI Translator
for text and speech translation.
And that wraps Topic 3.
Look at what we've built.
We taught apps and agents to
read text with language service
and its complement MCP server.
We gave them a voice with
multimodal audio chat
in the Speech service, all the
way to real-time conversation
with Voice Live, and
helped them bridge
across multiple languages
with translation.
That's the complete language
and speech skillset.
Your apps and agents can
now read, listen, speak,
and translate, and
that's a huge step
on how we naturally can
interact with people.
I encourage you
to remain curious
and continue exploring
new capabilities.
That's how we'll
all stay relevant.
There are many ways to continue
your learning journey,
and I invite you to search
for your next favorite topic
on microsoftlearn@aka.ms/learn.
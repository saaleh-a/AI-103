> Source: https://www.youtube.com/watch?v=-Ln7aW38gxI

[ Music ]
ROB FOULKROD: We've built
generative AI apps in Topic 1,
and we stepped up to
agents in Topic 2.
Now we'll teach those apps
and agents to understand
and speak human, to read
language, listen, talk back,
and bridge across languages.
Hi. I'm Rob Foulkrod, a Lead
Technical Trainer at Microsoft.
Welcome to Learning Path 3:
Develop Natural Language
Solutions in Azure.
Over the next series of
sessions, we'll work end-to-end
with Azure's language and speech
capabilities, analyzing text
with a language
service, connecting it
through the language MCP server,
build multimodal audio chat
apps, doing speech-to-text
and text-to-speech with the
speech service, and finally,
translating both text and
speech across languages.
By the end of this learning
path, you'll be able to design
and build solutions that read,
listen, speak, and translate,
and plug those
capabilities into the apps
and agents you're
already building.
So let's get started
with Learning Path 3.
Before our apps can have
smart conversations,
summarize a document, or
route a support ticket,
they need to actually understand
the text in front of them:
what language is, who
and what it mentions,
and whether there is
sensitive information inside.
That's exactly what the Azure AI
Language service is built for.
We'll start by provisioning
a language resource,
then walk through the
core text capabilities,
detecting language,
extracting named entities,
and identifying
personal information.
You'll put it all together
in an exercise at the end.
So let's get started with this.
We've seen, up to this
point, that we have moved
through our generative
AI applications.
And now we're really looking
at these two components.
We're looking at the text
and language component
and computer/speech component.
But to understand what's going
on here, we have to zoom back.
It is not common that
when I teach something,
I teach it
historically backward.
But that's what we're
seeing right now,
is that these predate,
the natural language
processing systems
and the computer speech systems,
they predate the large
language models.
And in some cases,
large language models have
the capability to do this.
Large language models
can translate.
Large language models can
attempt to identify PII.
So there's been some
flux lately as to, well,
which of these do I use?
Do I use what we're now
calling the Foundry Tools?
Or do I use the large
language models
that are already
part of my agents?
And the answer is a
resounding, "It depends."
There are a couple advantages
to using the earlier tools.
The first is often that of cost.
Large language models are
general-purpose machines.
They often do a lot of
things really well,
but because of that, they're
often pretty expensive to run.
We're paying them on a
token-by-token basis.
And so the more tokens
that you have to pass in,
like a document, the more
you are paying up front.
These tend to be, the
tools that we have here,
tend to be a little bit cheaper
on a document-by-document basis.
And so there may be, especially
if you're doing large,
large amounts of this, there
may be some advantages
from a cost perspective to
using these Foundry Tools.
The other is a predictability.
When you're looking at these
models, they are deterministic
in nature, meaning that, based
upon the input that you give,
you are going to get the
same output every time.
When you're using a
large language model,
that is not the case.
One of the things that
folks, a lot of my learners,
are coming to me
and they're saying,
we're using this
large language model.
And when we're testing, we're
getting results that we like.
But later on, folks are
getting different results.
And that's the nature of
these large language models,
that there is an
element of randomness
that is inherent in those tools.
And so the two things that
we see here quite often
that may be, depending upon your
realm, that may be advantageous
of using these tools
are going to be, A,
sometimes the cheaper nature
of them, B, that we're going
to get a more
deterministic output.
And then finally,
the last one is
that sometimes
they're just faster.
Large language models, again,
are huge, and the time
to first token back
can be a little while.
And so depending
upon the scenarios,
we may want to use these older,
yet still relevant, tools.
So there's a few tools
that we're going
to be looking at
in this session.
Specifically, we're looking
at the natural language
processing tools,
and we'll be looking at really
three pre-built models.
These are models that
have a single purpose
when we go to grab them.
Now, we'll be able to pull
them from one client,
but we'll be reaching into
these three different models.
The first model is that
of language detection.
That in a lot of large language
models, again, there's going
to be a lot of contrasting
with large language models.
A lot of large language models
know lots of languages.
When we start looking at the
Azure language tools inside
of Foundry, we see that there
is a greater collection
of known languages in
these pre-built models.
They are, relatively speaking,
smaller and more focused,
but they have a
greater vocabulary
of languages available to them.
The second piece
that's available
in these tools is something
called named entity recognition.
So when looking at a large
document, what we may want
to do is to extract
the names, the things,
the ideas inside
of that document.
So here you can see a language,
a little document being
passed into these systems.
And then on the outside
it says, ah, well,
I have found these things.
I have found John Smith.
That's probably a person.
I have found Contoso Bank.
That's probably an organization.
And I have found Seattle.
That's probably
going to be a place.
And so we can then strip out
those ideas, which is phenomenal
when it comes to things like
tagging or being the beginning
of an index that we might need
to create, extract those ideas
that we might find later on.
And then lastly, the
ability to extract
and to redact personally
identifiable information.
So we live in a world
where there's a huge number
of privacy concerns.
And so one step in an import
process may absolutely be,
before we bring all of
these documents in,
we do have to do a
cleanup and remove
that personally
identifiable information.
These three features
are commonly used
in these Azure language --
These three capabilities
are commonly used in the --
These three tools are commonly
used in Foundry's tools.
So the way that we're going
to go about building this is
that there is a Text Analytics
API where we will create,
and we've done this a bunch
of times up to this point,
where we have created client X,
whatever client happens to be.
We've created a client that
we could talk to OpenAI.
And we've created a
client that we can use
to talk to Foundry agents.
And here we're using a client
specifically for text analytics.
Now, what changes a little
bit is we've seen a couple
of different endpoints.
And so here, the endpoint
that we are typically using
with this one is
whatever the name
of your Foundry resource is,
that "{foundry resource}.
services.ai.azure.com/."
That's going to be the endpoint
that we will pass into it
to say, hey, this is my project.
This is my set of
tools that I'm using.
We create that.
And to that endpoint,
we will also pass
in some sort of credentials.
And we've seen a little
bit of varied use
of these credentials
along the way.
We've seen some that take
API key and Entra ID,
and we've seen others
that are just Entra ID.
In this case, the tools
can accept either one
in most configurations.
While the API key can
be disabled in some,
both can be passed in as
a token or as a provider.
So we will have some
sort of mechanism
that does our authentication.
We pass our client
those two things.
And from there, we can invoke
the methods that we're going
to need on those documents.
What you're going to see now is
a simple usage of the tools.
We'll go ahead and
provision environment.
Then we will use it
to detect language,
to extract those entities, and
to extract and redact PII.
So the first thing I need to do
is to get the exercise files
onto my local machine.
So we are going to assume
that you have some
familiarity with Git.
And I am just going to bring
down the lab files here.
We will make sure that you
have a link to those lab files
that I'm going to grab.
So let's get started.
First thing we're going to do
here is we are going to bring
down the exercise files.
And so I'm going to do a
clone of the lab repository
and bring those onto my machine.
We will pop into those.
And we're going to be working
with a series of
Python examples.
So we want to make sure that we
are setting up the right version
of Python that's going to
match with the current version
of the lab files and
their dependencies.
So there is a Labfiles directory
in there, and then for each one
of our exercises that we're
going to be running through,
they are numbered here.
And we're taking a look
at the "analyze_text."
There is a Python
folder in there,
and then from
there, a subfolder.
So we will hop into that.
And the first thing
that we need to do is
to get the right version
of Python up and running.
So these labs, as of
the recording here,
these labs are written
against Python 3.13.
So we will make sure
that we have that.
We will set up a
virtual environment.
This could take
just a second here.
So we will speed through that.
And fast forwarding
a little bit,
we've got a virtual environment
set up for Python 3.13.
Then we will go
and activate that.
So we'll pop into "venv."
We'll pop into "Scripts."
And there should be "ps1"
in there to activate.
Lovely. That's set up.
And then we'll do our
pip, "pip install -r."
There should be a requirements
file sitting that directory.
This also could
take just a second,
so we will do a quick
little fast forward
through this as well.
We have moved through.
Forty seconds later,
we are in business.
We now have a directory with our
virtual environment in here,
and the lab files that
we are going to need
for this particular
demonstration.
So let's hop into VS Code
and work with what we have.
But before we go too far,
we're going to need a
project in Foundry.
So let's swing
into Foundry here.
And I've been doing quite
a bit inside of Foundry,
so I've got a lot of
things already installed.
But we're going to start
by going into Foundry.
We're going to make sure that
we're in the "New Foundry"
for all of these examples.
And we're going to go and
create a brand new project.
So up in the little "Project"
menu there, "new project."
And we will give that some
sort of name in here.
Usually is going to
take your username
and some sort of
number in there.
It's not fixed.
You can do whatever
you need in there.
I'll just take what
I have right there.
And we will look
at the resource.
So projects live inside
of resources themselves.
Resource is a container
for multiple projects.
So it will, by default,
create one that matches
that project name, what region
do we want to deploy to,
and then what resource
group should that live in.
All of those look reasonable.
So I will go ahead and
"Create" from here.
It'll take just a couple of
seconds to put that together.
So then it's all
created, so let's go.
We now have a project endpoint.
There are a couple of
different endpoints.
We've discussed this a number
of times in earlier videos.
But there's the OpenAI endpoint,
typically when you're talking
to a large language
model directly,
and the project endpoint when
you're typically working
at the agent level of things.
We've got those ready to go.
We will need to then
deploy some sort of model.
So I'm going to swing over
into the "Discover" side
of things, inside of "Models."
And we will go grab
a model to deploy.
These labs have all been
tested and worked against.
Okay. Note to the
editor, we don't need
to deploy a model for this one.
So if you could double back
to where I started talking
about deploying a
model and cut that.
And then we will go from there.
Thanks.
So back to our code.
So we've got our
code set up here.
We are using a little tool
throughout the course
that is the "AI Toolkit."
AI Toolkit allows us to then go
ahead and pick what projects
that we're working with.
I am going to switch the project
that we had just created.
So in there we see our "4790."
We can expand out at any
point in time from here.
If we need, we can go grab
the "Project Endpoint"
that we will need momentarily
from the toolkit that was also
on the web user interface that
you just saw seconds ago.
Snagging our "Project Endpoint."
And for our code, we
are typically tucking
that into our environment
file in here.
So in our case, when we're
looking at our endpoint here,
you can see the name of our
project resource right here.
We don't need the rest in the
projects for what we're doing
in this particular example.
I just need that little
portion right there in there.
Of course, that can
cleanly go away.
Just the resource at this point.
And "Save."
So we're just about
to get started.
Let's quickly recap, just
so that everyone is comfortable
with what we've done.
We have gone through and done --
Note to editor, that
was a bad review.
We're going to try that
review one more time.
So before we get started,
let's quickly review what we
have done up to this point.
We have installed our lab files.
We did a little git install
from the correct project,
changed the net directory, and
then into what we're doing
in our current lab right
now, which is text analysis.
Installed the correct
version of Python.
Did an activate, and got all
of our dependencies installed.
That's where we are
inside of our project.
We then built a
project in Foundry
and snagged our
communication mechanism here
through the toolkit.
Okay. So quick recap over.
Let's go and take a
look at our example.
So in here, we are looking
at our text analysis file.
In future labs, I
will, in many cases,
have them already
pre-filled out.
But for the very first one here,
we will go through the motions
of assembling all of this.
When you're looking at
the lab instructions,
I'll give you the code
that you'll throw in.
And the first thing
that we need to bring
in are the namespaces
for our example.
And in this case here, we are
importing from "azure.identity."
We are importing the
"DefaultAzureCredential."
This is a chained token
credential whose job in life is
to try to get tokens
many different ways.
It will try and fail and try
and fail until it finds one
that eventually succeeds.
In our cases, we will
be authenticating
through the AZ CLI.
So the Azure command line
interface will have an az login
that we will use to log
in to get our tokens.
And this will snag that
token as ours and use
that for our
credentialing system.
So we'll get those brought in.
And then the whole purpose of
this example is to take a look
at the Text Analytics client.
This is the client that gives
us the ability to test out
and use some of our
components coming up.
So then we will bring
those two together.
And we will build that endpoint.
So we'll bring those in.
Little tabs will instantiate
our default Azure token.
And then we will use the
AI client by passing
in the Foundry endpoint that
you saw us configure inside
of the environment and
using our credentials.
We'll do a quick little
save right here.
And we're going to
open up the terminal.
And VS Code automatically then
activates our environment,
which we like.
Although it's a little bit ugly,
so I'll get that out of the way.
And then we will use the az
login to ensure that we're going
to be in a good place
when it comes to using
that particular credential.
We're not going to
run this just yet,
but we will do the "az login."
I'm going to take the login
information off screen,
but we will finish that up here.
So we are now logged in.
So any future use that
attempts to use this
"AnalyticsClient" will
authenticate as me.
Okay. So let's take a look
at using our clients.
Specifically, first, we're
going to take a look
at grabbing a language.
So I'm going to drop in just
a little bit of code here.
Get that tab into
the right spot.
And so just above this,
you'll see that we are going
and grabbing some text.
So we've got a couple reviews
that are sitting inside
of the reviews folder.
We're going through, listing
out those reviews folder,
and then grabbing
all of those reviews
and then using them here.
So looping through, getting
the text for review 1.
And then we will go and detect
the language on number 1.
So, "ai-client.detect-language."
Got a little document argument
that we're passing in,
and we are passing in the
text of that first item.
And then, going ahead, we will
get back to "detect-language."
And we will drop
"primary-language.name."
From there, we'll take a look
at extracting the entities.
Same idea, I'm going to
drop some code in here,
make sure that we have that in.
Using that same "ai_client," we
will call this time invoke the
"recognize_entities,"
where we will again pass
in that same text and then loop
through and print out each
of the entities in terms of the
text and the category for those.
And Copilot is getting a little
ahead of us on that one.
Thanks, Copilot.
I appreciate you, my dude.
But we'll drop that
in and again "Tab."
So in this case, we are looking
again at the "ai_client,"
calling out to the
"recognize_pii_entities"
in there.
We'll get back a list
of those entities.
And if there are any
found, we will list
out what the entity text
is and the category,
and also then a version
of the redacted text,
what that would look like if
those PII units were hidden.
So we can see here, in
our setup, we didn't have
to do a whole heck of a lot.
I say that being 15
minutes into a demo.
But we established
the Foundry project.
We then created the
Text Analytics client.
And then we're
really just looking
at method calls along the way.
So it's a pretty
straightforward process.
Make sure that this
is all working.
So let's now take a look
at giving this a run.
We will do a quick little
save here to make sure
that our changes are in place.
Then we will pop
up that terminal.
And we have already
authenticated.
So "python.
text-analysis.py."
I'll make this a little bit
bigger so we can see some
of the content in here.
So, going to Review Number
1, we're seeing the content,
the text of Review
Number 1 first.
Then we should be invoking it.
And there we go.
After the starter,
it's working well.
Let's go take a look.
So when we use the
language detection,
detected that as English.
Seems appropriate.
Our entity extraction
has gone through
and found the various entities
that are represented inside
of that code sample and
given us categories,
whether these are locations or
products, found email in there,
and then found our PII entities
that might have been
referenced in there.
And then given us redaction,
what it looks like.
So there's plenty of opportunity
for this to be used here.
This particular example,
we did not invoke a
large language model.
But in the next example,
we'll see, well,
what if we're already
building an agent,
can we invoke these
tools pretty easily?
We'll see that coming up.
Let's wrap this up, and I'll
see you back in the deck.
Let's see.
How are you doing?
"How should you
create an application
that analyzes news articles and
extracts key people, places,
and dates that are
mentioned for indexing?"
Here, "you should use the Azure
language in Foundry Tools
to extract those
named entities."
"You want to publish extracts
from customer testimonials
on a website.
You need to remove
personal details
from the text before publishing.
What should you use?"
That should be probably
pretty straightforward.
"The Azure Language
in Foundry Tools
to find and redact the PII."
So here we've veered from
our usual up to this point.
Instead of using a
large language model
that can do a little
bit of everything,
we've used some tools that are
focused and pre-built for things
like language detection,
named entity recognition,
and extracting PII.
These are now found
inside of Foundry.
So when you deploy
a Foundry project,
you automatically
will have access
to these tools right
alongside your models.
So you can use a single project
for provisioning there.
And the way that we used it
in our tool was there was
a text analytics client,
along with the SDK, that
gave us our API access.
A combination of bringing in
an endpoint and a credential,
and we were in business.
You can either do
a per document,
or you can do batch as well.
Thank you for participating
in this Develop AI Apps
and Agents on Azure course.
I hope you enjoyed learning
about the Azure AI
Language service as much
as I've enjoyed presenting
you the concepts
and walking you through it.
I encourage you
to remain curious
and continue exploring
new capabilities.
That's how you'll keep
staying relevant.
There are many ways to continue
your learning journey.
I invite you to search for
your next favorite topic
on Microsoft Learn
at aka.ms/Learn.
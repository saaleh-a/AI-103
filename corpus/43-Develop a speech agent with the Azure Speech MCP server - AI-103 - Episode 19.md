> Source: https://www.youtube.com/watch?v=mRfkydveXAs

[ Music ]
ROB FOULKROD: We just
gave our apps a voice.
Now, let's give our agents one.
By exposing the speech
service through MCP,
so any MCP-aware agent
can listen and speak
without you writing
the plumbing.
Hi. I'm Rob Foulkrod, a Lead
Technical Trainer at Microsoft.
In this session, we'll
cover connecting agents
to the Azure AI Speech
service using MCP.
We'll start by understanding
the MCP server and then connect
to its tools and call
it from an agent.
Let's get started.
All right.
We've seen this pattern
before with text analytics.
We started with text analytics
by learning the service
after contrasting it with
a large language model.
Then we saw that we can
bring the two together.
So I want you to
imagine a scenario
where you have a very specific
language model being used
in your agent.
That language model may
not be incredibly good
at speech-to-text
or text-to-speech,
and yet it fits the bill
in many other ways.
Maybe it's very small and
capable of doing just enough.
It's keeping the pricing down,
and it gives us a nice response
time, but it has no real ability
to do text-to-speech
or speech-to-text,
and yet that's still
a requirement.
But as long as it can
contact an MCP server,
we're going to be in good shape.
So here we have a scenario
where a user sends a prompt
to an agent containing text
or a link to an audio file.
And then we're going
to need to go ahead
and use those Foundry tools.
So here the agent determines the
task or tasks to be performed.
It looks through its
toolbox and says, "Ah,
I have an MCP tool
all ready to go."
Then it calls that tool,
passing the information in.
We're using those
back-end tools again.
We send the information back
to the large language model.
In this case, text-to-speech,
the audio is generated and saved
to an Azure storage account,
where it can then be retrieved.
The link to it will be included
in the payload going
back to the client.
The agent responds to the
user with a transcribed link.
So the pattern that we've
seen is very similar
to what we saw before when
we expose an MCP server.
We have a little bit more
legwork that we're going
to need to do ahead of time.
But a couple of things you're
going to include in here.
The first, you're going to
include a reference back
to your Foundry resource.
You just enter that in
this little box here.
And then you're going to access
or add the authentication.
How are we communicating back?
That'll be done potentially
by API key or by something
like a managed identity.
But then you're going to need --
already set up, you are going
to need a storage account.
If we are using something like
text-to-speech, speech is going
to generate a file, and that
file has to be stored somewhere.
So we are often going to use
an Azure storage account
for that particular file.
So we're going to build
the storage account first.
And then in that
storage account,
we'll have to build a container.
Now, the next question will be,
how are we going to authenticate
from the MCP server to
that storage account?
And typically, what we're seeing
is we'll expose that by way
of a shared access
signature or a SAS token.
Let's take a look
at doing just that.
We're going to go into Foundry.
We're going to build a
project that we need.
We'll set up the storage
account in the background.
Then we'll configure all
of these to work together.
So, to give you an idea
of what's going to happen
for the agent itself when we go
to configure the speech tool.
The agent is going to need
a place to write some files
so that they can persist.
We will be given links back to
those files, but we're going
to need some sort of
accessible storage location.
So we'll start by
going into Azure.
We'll build that
storage location.
Then we will double back
in here into agents
and build our first agent there.
So, for starters,
let's go into Azure
and let's go build
a storage account.
Great.
And we will create.
We will drop that into
our demo resources,
the name of our Foundry.
It doesn't have to match, but
I might as well make it match.
Demo-4790.
So we will say demo4790storage,
probably going to be fine.
And we will deploy
that to East US.
This doesn't really matter,
but we'll tell it it's
going to be blob storage.
In terms of redundancy,
we really don't care,
so we'll just grab
the cheapest option
that we have, and
we will go build.
Just need a place,
a bucket in the sky
where we can put all of this.
And create.
Won't take but a second.
Once we get there, we are
going to build a container
where Foundry has access.
So we'll create the
container first,
and then what's called a
shared access signature,
which is basically giving
access with, in essence, a URL.
We'll swing off to
the storage account,
we'll go into containers,
and we can call this
container anything.
It doesn't really matter.
We'll call it "Files"
and "Create."
These don't take
any time at all.
Here we are.
And we will then create a shared
access signature for this.
Signing key.
That's all good.
Good for the day.
Excellent.
We want to give it the ability
to add, create, write,
and list the items
that are there.
Give it the correct permissions
so that Foundry has the ability
to create new files there,
ask what files are there.
That's the permission set
that we just granted.
And create token.
Then we will copy --
We will copy the URL that
has the signature in it.
Now, we can use -- I think
that's all we need here.
If we need, we'll come back,
but I think we're in
pretty good shape.
We'll swing over to Foundry.
We will then go build
a brand new agent.
So this agent here, we'll
give the name "speech-agent."
And we'll just give kind
of default permissions right
there and validate that.
We've got at least
the basics going.
We'll come back and change both
of those, or the instructions.
Yes, that works.
Save. We will be back.
We're going to swing into
the "Tool" section here,
and we are going to
create a new tool.
So, similar to what we saw
earlier with our language,
we're going to do the
same thing with speech.
We're going to the "Catalog"
here and look up the items
that are speech, Azure
Speech MCP server.
Delightful.
Pick that and create.
Then a little bit
of configuration.
So the name of our Foundry
resource right here
is demo-4790-resource.
We'll need to grab
the key for that,
and as I (inaudible) key-based,
so what is -- grab key.
Home tab here.
Grab that.
Boom. And we will
paste in the --
this is that SAS URL that you
saw me build just a second ago
for our storage account.
In that SAS URL is the --
the location of the storage
account is the name
of the container, along with,
in essence, the credentials.
Okay. So we now
have one more tool,
the Azure Speech MCP
server, like that.
And we can head
back to our agents.
We'll look at the speech agent,
and we'll go into the tools.
Again, do we need a web search?
We'll leave it in there for now.
But we will go and add
our tools in here.
Let's grab speech.
There we go.
Speech server, "Add Tool."
As the name implies, this is
an MCP server, so we will have
to give a little bit
of permissions there.
The rest should
be pretty decent.
Let's go to our instructions.
"You're an AI agent that uses
AI speech to transcribe."
Okay. So that's pretty good.
So we will ask it
then to generate.
We'll say, "Hey, do me a favor.
Generate 'To be or not to
be, that is the question.'"
Being MCP, permissions first.
We will approve.
We could -- let's just
-- we'll simplify here.
We will always approve
all the MCP server tools
so that we don't have to
go back and do it again.
Okay. So it should
have generated it,
given us a link to --
SPEAKER 1: To be or not to
be, that is the question.
ROB FOULKROD: Now,
let's go take a look
at the transcription
side of things.
So we're going to swing
back into the Foundry,
and we're going to say,
"Hey, let's go ahead
and grab a transcription."
Here, transcribe a file
that we have remotely.
And perfect.
So "Brevity is the soul of wit."
We can, if we needed proof.
Speaker 2: Brevity
is the soul of wit.
ROB FOULKROD: Here we are.
Lovely. So our agent
is in good shape.
It runs both the ability
to create speech output
and to transcribe.
So now let's just take a
look at some of the code.
And it won't be a lot.
This will be pretty
straightforward.
(Inaudible) I'm here,
let's grab the endpoint.
And we will drop
that into our code.
We've seen that, or into
our environment variable.
We've seen that a bunch before.
And let's take a look
at our codebase.
So default Azure credential,
AI project client.
Only two things we really
need at this point.
This is very similar to
what we have seen before.
Pass in the endpoint.
Pass in the credential.
That gives us a client
that we can invoke.
We're grabbing --
from that client,
we're grabbing the
OpenAI client,
and it is one call:
response, create.
We're passing in
whatever the input is.
And again, that additional
bit of metadata when we want
to call a pre-built agent that's
already sitting on the server.
So it's an agent
reference in there.
We're going to specify the agent
name and type in reference.
And then output.
So that should be it, right?
Very, very simple when most
of the work is being
done on the server.
So let's get into
the terminal here --
-- okay? And everything
is activated already.
We've got all of our
dependencies downloaded,
so we should just be
able to say, "Python
and our speech client."
Once it gets up and running,
we can then go in
and say, "Hey -- "
Give a prompt and ask to
synthesize, "Better a witty fool
than a foolish wit," using
Sonia's neural voice.
If you were here in earlier
examples a little bit ago,
you may recall that
I had neglected
to give all the permissions,
but those should already
be there this time around.
Perfect. Gives us our
storage account here.
We will open that up,
and we should have --
SONIA: Better a witty
fool than a foolish wit.
ROB FOULKROD: Life is good.
And then, again, we
will ask transcribe.
And we have the
transcription downloaded.
"Brevity is the soul of wit."
So that was fun.
Let's go wrap this up.
All right.
Let's review.
What two core capabilities does
the Azure Speech MCP server
expose to agents?
Hope you're getting
this one by now.
Speech-to-text, text-to-speech.
Okay. Why does the Azure Speech
MCP server require an Azure
storage account?
To store input audio files
and output audio files
generated by the speech tools.
And finally, what
credentials are needed
when connecting the Azure Speech
MCP server to a Foundry agent?
Foundry resource key and a SAS
URL for that blob container.
We learned in this one,
the speech MCP server.
It's used for
agent-based audio tasks.
Typically, we will need to go
and create a storage account
and container beneath the
covers to store both the inputs
and the outputs for
those audio files.
The configuration is typically
going to use a SAS token
to share out the container
beneath the covers.
And then we took a look at a
client app so that we can call
into those
speech-enabled agents.
In this session, we put a voice
to our agents via MCP server.
We understood the server
and connected to it.
Thank you for participating
in this Develop AI Apps
and Agents on Azure course.
I hope you enjoyed learning how
to extend the Foundry
agents with voice.
I encourage you
to remain curious
and continue exploring
new capabilities.
That's how we all stay relevant.
There are many ways to continue
your learning journey.
I invite you to search for
your next favorite topic
on Microsoft Learn
at aka.ms/Learn.
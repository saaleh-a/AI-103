> Source: https://www.youtube.com/watch?v=H5wPr-Ca2UM

[ Music ]
ROB FOULKROD: Hey, folks.
This is session number six
of the generative AI topic
of the AI 103 course.
I'm Rob Foulkrod,
a Lead Technical Trainer
here inside of Microsoft.
And here we're taking a look
at responsible
generative AI solutions.
Generative AI is less
predictable than other forms
of content that we're
used to in the past.
And therefore -- and
that's really its charm.
That's its value
and its liability.
So whenever we are
looking at the content
that is being generated from
these solutions, we really have
to be very aware of what it's
generating, how it's generating,
how that can be used
for our application,
and how that can be used
inappropriately in cases
that may be used against us or
may be used to hurt our users.
So the first thing that we
have to do when starting
to build these generative
AI solutions is we have
to plan for responsible use.
And here we've mapped
out an approach
that can help you plan well.
Step number one is what we're
referring to as mapping.
Here we have to take a look at
the list of potential harms.
How could things go badly
in our application?
What are the inputs
and the requests
that could cause the application
to do something harmful?
And the goal right now is
just to generate our to-dos,
to generate our checks,
to generate the things
that we know we have to
be mitigating against.
Once we have that list, that
initial list, the next step is
to then look at measurements.
Look at the outputs.
So earlier in the initial step,
we really weren't even
looking at our outputs yet.
We were just saying
these are the areas
where things could go poorly.
And now we are testing that
against our current solution.
Can we find those harms?
Can we find those
detriments in the outputs?
What are the things
that our users could do
to cause those issues?
Where are our
inputs coming from?
I've said users, but
it's not always users.
We could be pulling text
in from other tools.
We could be pulling things
in from our RAG systems.
We could be pulling
things in from the web.
How could those things
be used against us?
So we then measure.
What are the outputs?
Where are the areas where we are
falling behind in those tools?
Then mitigation.
Now we've identified
the potential things
that could go wrong and then
the actual things that seem
to be going wrong at
this point in time.
Once we have the list of the
things that could go wrong,
along with that compared
against the things that seem
to be going wrong
now, then we need
to take a look at
the mitigations.
So what are the things that we
can do to prevent those harms?
And it's important to recognize
there's not a single thing --
and I have to be
very clear here.
There is not one single
thing that we can do
to prevent these
harms, but a list
and a layered approach
to those defenses.
So the first thing we're going
to look at is at the user --
the first thing we're
going to look at is
at the user experience level.
Here, much like any
defense in depth process,
we're looking initially
at our user inputs.
So this may be things
like we're only going
to give a user a certain
amount of space to work.
The more we give them, the more
we might be potential to attack.
So having a limit to the number
of characters that
could be used.
Having a limit to
the number of chats
or conversations
that they can use.
There have been a
number of attacks
that are based upon getting
further and further away
from our system messages.
So at some point in time,
we may just say, "Listen,
you have maybe a relatively
large number, but maybe 15, 20,
30 chats, but beyond that,
we're going to start
over at that point."
So first, looking at just
the user experience.
Then looking at our system
messages and grounding.
So here we can often tell
the system, "Listen --
" this is in our system
messages; we can tell the model,
"-- you are allowed
to talk about A, B,
and C, but that's it."
And we want to be careful here
because this is not enough.
I would love to say
to you, all you have
to do is write an instruction,
and it will always be followed.
It's just not the
way that it works.
So it is definitely one of the
layers, but we can't just stop
at saying, "Hey, don't
do this bad thing."
Then we can look at
the safety system
that surrounds the model itself.
So we have inside of Foundry
an approach where the data,
as it's going into the model,
can pass through
this safety system.
And we may have a need to say,
based upon what we're seeing,
"Nope, you are not going
any further than that.
We're going to stop this
conversation right here."
But let's assume that
we let that pass.
We had a little conversation
with the model.
It is possible that the
model was still led astray.
And so conversation came out,
and we will review
one more time.
Was that response appropriate?
If not, we have that opportunity
to stop it again before
we get any further.
So the safety system
allows us to tune
and to tweak the conversations
that are going to go in
and out of that model.
And then lastly, in this
mitigation component here,
is the model itself.
One of the things we took
a look at very early
on in our model selection
was that safety metric.
So if there are cases where we
are presenting ourselves much
closer to a user, we may be
far more concerned with safety
than the models that are batch
operations based upon documents
that we have
internally generated.
So picking a model that is a
safer model, that is less likely
to be "led astray" is
an important piece.
So number three, build
those mitigations.
Number four, we've now built the
plan, but now we have to deploy.
We have to monitor.
Part of responsible AI
is being accountable
for the things that
are happening.
And accountability comes with us
monitoring the ongoing process.
So we need visibility and keys
into what is
currently happening.
We need to review those, and
then we need to, in essence,
loop back and do this again.
If we are finding new
opportunities for attack,
then we have to map those out.
We have to then measure what
is our system looking like,
go through those mitigations,
and we're going to be repeating.
One of the tools that we
have available to us,
and this is in those
safety tools that you saw
that I was talking about,
the safety tools that were
on the way in and
on the way out.
There are tools
called guardrails.
And in guardrails, we can look
at a conversation and rate
that conversation on
a series of risks.
Risks of violent
content or hate content
or sexual or self-harm content.
There are metrics involved
that could say, "Listen,
this conversation
could be problematic,"
and therefore call a halt to it.
And this is not a
Boolean checkbox.
This is not a switch,
but we do have an amount
of play within that system.
Now, by default, when you are
using a model inside of Foundry,
there is already a default
set of guardrails in place.
But we could then, going
back to if we were
to double back here a little
bit, if we were going back
to our measurement
and in there seeing
that the default was not
enough, we can go in
and build our own version
of that safety system.
So other things that we may be
looking for in here in terms
of guardrails, that we
may be looking for things
like protected material.
For example, that there
might be open source code
that is being generated.
The world of open source
is a phenomenal place,
but we can't be using
things without attribution.
So are we looking for things
like protected
material for code?
Are we looking for protected
material for text, for users,
or copyrighted material?
Are we measuring
for groundedness?
These are part of our automated
features that we can look for.
Is it really coming back
based upon our reality,
or is it making up, invent
-- does it seemingly --
more random, more
invented content?
And also, does it
include personally
identifiable information?
These are all areas
that we can look at
and mitigate using
those safety tools.
So we probably
should look at that.
So in this next section here,
we're going to do just
a quick little demo
where we will take a look
at an unaltered version
of a Foundry model and then go
apply our own custom guardrails
to that system.
All right.
So here we are
inside of Foundry.
We have our GPT-4.1 deployed.
And this particular model right
now has the default guardrails
in place.
We take a look at the details.
And we scroll on down, we will
see down here, we have --
in terms of model guardrails,
we have the default version
2 guardrail system.
We'll go take a look momentarily
at what that looks like.
But while we're here,
we're going to have
some prompts in here.
And again, these are really mild
and will probably
not trigger anything
with that default
system in place.
But if we have a quick
little chat and say, "Hey,
I'm planning on robbing a bank.
Help me plan the getaway."
It'll say no, more than likely.
That's probably not
something, and this is some
of the fine-tuning that
it's been done with.
"Sorry, can't help with that."
But there isn't anything
that's blocking it
from getting to the model.
It's getting all the
way to the model.
It's getting all
the way back to us.
If we say, "Hey, tell
me an offensive joke,"
it probably will be like, "Hey."
It got there.
"I want to keep things clean."
This is the fine-tuning
coming into play.
"I want to keep things
respectful and positive."
And then lastly here, if
we do something like,
"What should I do
if I cut myself,"
which is alluding a little bit
into the self-harm world there,
we're getting some steps.
We move there.
We move back.
So if we swing over
into guardrails system,
we can take a look at this
default V2 system here.
And in this default V2 system,
we do have some guardrails
in place for things
like jailbreak systems.
And in our content safety,
we have for hate, self-harm,
sexual, and violence prompts.
We have a medium level
of block in place.
So what we will
do at this point,
and so that's what
you were just seeing,
that those prompts made it
past that medium level.
So what I'm going to do here
is we're going to swing up,
and we will build
a brand new one.
When we go to build
these guardrails,
we can pick which systems
we want in place.
And so they're giving
us a default right now.
Jailbreak is in place.
Content safety is in place.
Protected material is in place.
And they are at
the medium level.
So this is pretty -- this
is what we were seeing
in that default V2.
But we can go ahead and
pick other opportunities,
and we can go into, say, those
same levels that we saw,
and we can then bring in a
higher level of blocking.
And you can see what these
intervention points are.
The intervention point as
the user input is coming
in before we make
it to the model.
Once the model has generated
something before it gets back
to us.
Again, we can preview.
And we're seeing now, these
may or may not be in preview
when you're watching
this, but a tool calls.
More and more we are
calling into systems
that we may or may not control.
And therefore blocking
what the responses are
from the tools may
be very appropriate.
I'm going to keep this as the
highest level, and I'm going
to repeat this real quickly
for the rest of them.
So we'll add that one in there.
It'll say, "Hey, we've
already got one.
Do you want to replace that?"
And I'll say, "Yes."
So we've moved that up
to the highest level,
and we will just repeat
that pretty quickly
for the rest of these.
Bring that up.
Bring that up as well.
And finally, violence.
Bringing that up one more time.
So now we've got one in which
we have upped the level here.
And we'll flip into next.
And then we can
start applying those
to our various agents or models.
So I can specify here.
I would like that to be applied
to, say, our GPT-4.1 model.
This will replace the default
that's already there.
And save. Now, this could take
up to 15 minutes or so for it
to completely
replace that model.
So what I have done in advance
is we have done the same thing
over here in another system
inside of another project.
We've got a couple of models
there that we will compare.
I have our 4.1-2.
This is 4.1 number
two, is in there.
And if we swing down to
"Guardrails," we will see
that we have guardrail name,
just a random name there,
but we have upped the level.
So this is exactly what you
saw me build seconds ago,
just already applied, and
we've spent a little bit
of time letting that go.
So that's in place.
We will compare that
against a native 4.1.
And so some of these will
probably be innocuous enough
that they're still
not going to trigger.
If we want to plan a getaway,
we're seeing both of these.
This one, okay, so neither --
they're not triggering there.
If we start looking at some
of the self-harm options,
we are very likely
-- there we go.
We can see that we now have
a block at this point.
That this wasn't allowed to
continue onto the model,
and it was just blocked
and said, okay, self-harm.
This is low.
We're not going to get
any deeper than that.
If I were to say something
like, "To heck with you,"
that is as explicit
as I am going
to get in a video like this.
We should also see that even
that will probably
-- there we go.
We can see here that we
were blocked on that,
that little minor,
minor little attack.
In your world, you should --
there are a number of data sets
so that you don't have to
generate these yourself.
There are a number of data sets
on places like Hugging Face
where you can bring in
some automated testing.
We saw earlier our
evaluation systems.
You would bring in your
various guardrails
and then apply those
evaluations to make sure
that you're getting
what you wanted.
I hope this was helpful.
Let's go review.
All right.
How did things go?
Let's take a look
here real quick.
First, why should you consider
creating an AI impact assessment
when designing a
generative AI solution?
What capabilities of Microsoft
Foundry help mitigate harmful
content generation at
the safety system level?
And why should you consider
a phased delivery plan
for your generative AI solution?
Awesome.
While this section
was incredibly long,
it was really important.
We need to take a
look from day one
in these non-deterministic
systems, these systems
that we can't absolutely
project, predict its output.
We need to have plans
that are making sure
that our applications are safe
for us as an organization
and are safe for our
users who are using it.
We need to go through that
process of mapping those risks.
We need to go through and
looking at the guardrails
that need to be
employed along the way.
And we need to be
testing for harms before
and after the launch
and then repeating
that process as we go on.
I hope this has been
impactful to you.
I hope this has been something
that opens your eyes a little
bit to what is possible,
both good and bad, in
generative AI solutions.
But it's also -- it's
just the beginning.
You're going to want
to spend a little bit
of time reviewing all of this.
The content that
we've taken a look
at here is available on Learn.
The exercises are
available on Learn.
So I would encourage you
to take a look at those.
You can find the Learn
content at aka.ms/Learn.
I'll see you in
the next section.
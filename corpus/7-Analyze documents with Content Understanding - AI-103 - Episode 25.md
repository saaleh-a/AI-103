> Source: https://www.youtube.com/watch?v=tWgf8ODQQv0

[ Music ]
ROB FOULKROD: The world's
data doesn't come
in one neat format.
It's documents, slides, audio,
video, all mixed together.
The real win is one analyzer
that can reach across all
of those formats and pull out
exactly what we care about,
and then an application that
puts that analyzer to work.
Hi, I'm Rob Foulkrod, a Lead
Technical Trainer at Microsoft.
In this session, we'll
cover analyzing documents
with Content Understanding.
We'll look at how Content
Understanding analyzes
documents, audio, video.
We'll define a schema
and create an analyzer,
choosing a base analyzer,
define the fields that need
to be extracted, and
select the model.
We'll wrap it all up with
a client application
that prepares the
content, authenticates,
and runs the analysis.
So let's get started
with the session.
Earlier we saw that Content
Understanding has the ability
to do images, and
now we're diving
into the rest of the collection.
We're going to do this
in a couple of phases.
We'll start with just
kind of an overview,
looking at things inside of
Content Understanding Studio.
Then we'll take a look at
the code version of it.
So here we are with
just a quick overview
of what analyzing
documents looks like.
Typically what you're going to
do in Studio is you're going
to upload something-- you're
going to upload a document,
you're going to upload a video--
just so that it has some context
as to what we're going
to be working with.
In this case here, we uploaded a
quick little document in there,
and it quickly did a scan of
the document to find the things
that might be interesting.
Many times you've seen folks
who are going to have a set
of invoices, and they're going
to spend their time putting
their first invoice up,
typing in all of the
components, extracting all
of that themselves, then
moving on to the next one.
Here, we're just going to be
able to scan all of those in.
And if they all have the
same basic type of format,
we'll be able to say these are
the pieces of data on this form
that I want to pull off.
Here you can see it's
highlighting things like,
this looks like some
piece of information,
probably some sort
of address in here.
These look like pieces
of information in here.
Then on the other side,
we're going to say, well,
what is this particular thing?
So we'll say, okay, this is
going to be an invoice number,
and this is where
this particular piece
of information-- you can see
the color coding, perhaps--
that orange piece of information
there is probably the
invoice date.
Then that green piece of
information right here,
that's going to be the due date.
So you make those associations
between the information
found here is of this type,
and typically you are defining
the data, the location,
and things like the
underlying data type
to expect should this
be something that looks
like numeric data,
like currency,
or should this be something
that looks like a date.
So you'll go through
the document
and then define those fields.
And you can see we're going to
do that same type of thing here
when we're analyzing audio.
You're going to
upload an audio file.
From that audio file, we
do a "Run Analysis" on it,
and it's then going to play
that audio file forward,
create a transcription of
that, and then create things
like a summary and
perhaps extracting pieces
of information
from that summary.
Repeating once again,
if you upload a video
in there, same idea.
It'll do both the extraction
of the transcript
of that video along with
analyzing the images
as they are passing
through time.
So you can run through and get
that analysis to get a feel
for what is being pulled
out of that data.
At the end of any of
those, what you're going
to build is what's
called an analyzer.
That analyzer is the template
for the type of
data that came in.
If you did that invoice, then
you would create an analyzer
that knows, these are the
fields, these are the pieces,
this is where I should be
looking in that document
to extract that information.
Then you can think of
that as the template
that you're going to use.
Every time you pull one of those
invoices out, you would use
that particular analyzer to
extract that information.
We'll do a quick demo here where
we'll show off the capabilities
of Content Understanding Studio.
So we will take a look at kind
of four different samples.
We'll grab a document and
extract some data from that.
We will take a look at if we had
a slide or a series of slides
and needed to pull
information from those.
We'll grab and analyze
audio as well as video.
Let's check it out.
So let's dig into our Content
Understanding section.
And we'll take a look at a few
different ways of doing this.
So for starters, there are some
built-in models that we can use
without a heck of
a lot of effort.
You can find these if we go
into our "Build" segment,
specifically under models, and
dig into the "AI Services."
In the "AI Services," we've
seen this a little bit before,
but if we swing down toward the
bottom, we've got some kind
of pre-built analyzers
that are ready to go.
And so let's just take a look
at one of those for starters.
We'll do the layout example.
I'm just going to click
directly on the link here.
And it's got a couple
of samples in here
that we can play around with.
We're going to grab and upload.
Just like we uploaded an image
before, we're just going
to upload the PDF here.
And if we dig into
this PDF here,
just so you see
what it looks like,
we've got a standard invoice
here, a little header up there.
It's an invoice.
We've got an invoice
number, invoice date.
We've got some
address information,
a bunch of line items that we're
looking for, and some totals
that go along with it, right?
So we're just going to
say "run analysis."
We don't have to do a
whole bunch with fields.
We've already got
some ideas in there.
It's got enough understanding
beneath the covers
that it can make some
pretty educated guesses
about what we're seeing,
and immediately we're
getting a decent collection.
We see here it has indeed found
the invoice and the date,
our customer name
there of John Smith.
If we were to dig in a
little bit deeper here,
you can see indeed we
found our John Smith
and our address information;
all of that looks legit.
We see here, with our items,
our three different items here,
including our
left-handed screwdriver.
Phenomenal.
And then our subtotal, tax,
shipping, and total due.
So a good extraction
without us having
to do a whole heck
of a lot of work.
This is really helpful
if we've got a bunch
of dissimilar documents and we
just need a best-guess approach.
However, if we do have a
whole bunch of documents
of the same type, we also have
the ability to go in and say,
"Listen, I need-- I want to be
very particular on the documents
or the types of the fields
that we're going to extract."
So, pre-built, love it.
Let's go a little bit
deeper into all of this.
So I'm going to go into
Content Understanding.
And this is the Content
Understanding Studio.
Just to pop up the URL one more
time here, contentunderstanding.
ai.azure.com.
And we set up an association
between the studio
and where are the systems
that will do work.
Now, in the previous exercise,
we went through, and we've done
that already for our demo.
If you recall, we needed to do
a couple of things in there.
We needed to set up
a storage account
for our project information,
and we needed to make sure
that the appropriate
models were in place.
And so we did a quick little
add resource right here,
set up all of that
configuration.
We're not going to do
that a second time,
but we've got
ourselves a resource.
So we're going to swing
over into "Build".
And we will create a
brand new project.
In this case here, we're going
to extract content
with a custom schema.
For these here, we will give
individual names along the way
because we're going
to do four of them.
So we might as well give
them decent names in here.
So we'll do an invoice
analysis and "Create."
We're going to upload that
same invoice one more time.
And this time you can see it
picked up on document analysis.
It does a nice job of looking
at the type that's
underneath it there.
You can see that it initially
did document analysis.
We can actually go a little bit
deeper in here because we know
that this is an invoice, so then
we have an initial collection
of fields that are already
there, and we can get rid
of some things that we know
aren't on the invoice itself.
So let's go ahead and
save here real quick.
And then we'll go do an edit.
All right.
So we do have a pretty simple
invoice sitting over here.
So there's certain things
that we don't need.
So I'm going to move
over just a little bit.
Things like BillingAddress.
We're not going to need that
particular field there.
We'll go ahead and save
our changes as we go.
We can also say, "Hey, just
do me a favor to suggest some
of the fields in here."
Right? So look
over what we have.
And in this case, we found
things like LineItems.
So it found our line
items in there.
We have a description, we have
a price, we have a quantity,
and we have an item
total in there.
Something like that.
So yeah, we can add
those in there.
And we can actually add
things where we're going
to put the large language
model to a little bit of work.
So we can see in here--
we'll zoom a little bit;
that will be nicer-- that
we have a quantity here.
And so we've got
two, one, and one.
But total-wise, those are
four individual items.
Well, there isn't a field in
there for four individual items.
But that doesn't mean
we can't ask for it.
So we can say, I would like to
have a total quantity in there.
And we would give
it a description.
So in this case, the total
number of items on the invoice.
And keep that as a string.
Method there is
going to be auto.
Go ahead and do a "Save."
And then let's see
how we're doing.
Let's do a "Run Analysis"
on what we have here.
Right. And so you can see
perhaps there's some color
coding going on here, so you can
see that invoice number there,
red box there with
the little red dot.
Our invoice date right there.
We can see that we're
making that association
if we're looking
for customer name.
I won't do these for all of
them, but customer name,
we're seeing the match there.
So for some folks, that
can be pretty helpful.
But as I am looking for these
as well, I'll put my cursor
over it, and it kind of pops
up over the item itself.
But maybe one of the
more interesting ones--
let's go down to our last added
one there, TotalQuantity.
And so we've got a total
quantity in there.
Value of 4, confidence
about 77.6 on that one
in terms of confidence.
We don't have a direct map to
where that item is, but it did,
again, a total of those
quality items right there.
So as I'm kind of pausing over
them, you can see our quantity
and total quantity in there.
That's not bad.
So I like this.
We can go ahead and build this.
If this is the invoice type that
we're going to be using again
and again and again,
then we would go ahead
and build the analyzer,
give it a decent name here
of invoice analyzer
and a complex
and interesting
description, and "Build."
Now, from our code,
we can then refer to,
or from our application, we can
refer to our analyzer here.
Jump to the analyzer and go
ahead and test this one.
We'll drag on another
invoice, invoice 1, 2, 3, 5.
So we've got our
customer name in there,
our invoice number,
that all matches.
And again, the more
interesting one is if we look
at our quantity here
of three and two,
we should have a total quantity
of five, 87% on that one.
So doing a good job.
That's one type.
We do have several
others that we're going
to want to take a look at.
So for example, I'm going
to swing back in here.
We will go back to
our project list.
You see, we just completed our
invoice project, but we're going
to do another new one here.
So we will again
extract content.
And in this case, we're just
going to drag in a slide.
So let's just do a
quick little zoom here.
You can see we've got a little
Adventure Works going on,
a couple of charts in there.
This is slide number one.
So in here, in
terms of the type,
we will do an image
analysis and "Save."
And so here we're going to have
to bring a little bit
more to the table.
So we're going to add
a series of fields.
We'll throw on here
a new field, title,
looking for slide
title, and summary.
Give me a good summary
of what's going
on on the slide as a whole.
And then for charts, I'm going
to throw in charts here.
I want to say here, in this
case, the number of charts
that we have on the slide.
And so give us a nice
little example here
of pulling another data type.
So we can envision from here
that not every single one
of our slides is going to have
two charts sitting on that one.
So there we've got a
charts collection.
And so here we'll start by
looking at our first chart here,
our revenue by quarter.
So we're going to
create a new field here
called QuarterlyRevenue.
QuarterlyRevenue in there.
And it's going to be revenue
by quarter, but it is going
to be a list of these
underlying objects.
Dig in List of Objects.
And then, because we do have a
couple pieces of information
for each one of those, we can go
break that down even further.
I'm going to click on the
drill-down button there.
And the two pieces of
information that we are going
to want are going
to be a quarter.
Which quarter are
we talking about?
In this case, that's going
to be a string and revenue.
And revenue is going
to be numeric.
There we go.
And then for our second, we'll
have our ProductCategories.
And that is also going
to be a list of objects.
And again, if I went too
quickly the last time,
this is the little
drill-into button.
So in there, we're going to have
what is the product category?
Give it a good description so
things can find what they need,
and a RevenuePercentage.
And that is indeed a number.
All right, back to main, give
this a nice little save.
And before we go too far,
we want to make sure
that we've done a decent job.
So we'll run the
analysis on this one.
Okay. And we've got ourselves
a title, a summary.
This does indeed have
both charts in there.
And then we've got
our QuarterlyRevenue.
QuarterlyRevenue has four
components, quarter one,
quarter two, quarter three,
and in there, quarter four.
Excellent.
And then we've got our
product categories.
Not too bad.
All right.
So we like where
we're going here.
Let's do a build the analyzer.
Go ahead and give this name,
"slide analyzer,"
and a description.
Then we can jump to it.
And if we wanted
to test with a--
and we probably should test
with a secondary chart.
Grab the right one.
Right. So in here,
just the one chart.
In this case, the quarterly
revenue and our results.
Right. So we've done two
document types at this point.
We've done our invoice;
we've just done a kind
of a random image which
we were calling a slide.
But let's switch to
another modality here.
I'm going to close this one out.
Go back to our
project list here,
and we'll build yet another.
We'll do a little voicemail
analysis in this case.
So we're going to take
in an audio file.
So same type here,
extract content.
And in this case, we're going
to drag in a phone call.
So we've got a little MP3 here.
Let me play this so you all
can hear what's going on.
AVA: Hi, this is
Ava from Contoso.
Just calling to follow up
on our meeting last week.
I wanted to let you know
that I've run the numbers
and I think we can meet
your price expectations.
Please call me back on
555-12345 or send me an email
at ava@contoso.com, and
we'll discuss next steps.
Thanks. Bye.
ROB FOULKROD: Okay.
So that's what we're
going to be analyzing.
We've got these voicemail calls.
So let's go ahead and
do an audio analysis.
We've got one specialized
for Call Center,
but here we're just
doing kind of--
this one we're just doing
a quick audio file.
So in here, it doesn't
really know what it needs
to be extracting.
You saw me add a bunch of
fields, so I'm just going
to add a bunch
real quickly here.
So I have added and
saved these fields.
So, just who is the caller?
Give me a summary.
What actions are
requested by the caller?
What's the callback
number in there?
Let me make this a little bit
easier for you all to see.
And what is the alternative
contact information?
So all of those are
strings with the exception
of alternative contacts.
If you give like a phone
number and an email address,
and then we'll have
an array of those.
So that's going to be an array.
So that has been
saved, ready to go.
We will run the analysis
and see if we can extract
that information from
Ava's voicemail.
All right.
So we get the audio here,
all 24 seconds of it,
and then a breakdown of the
transcript of what's coming
from where, and then the
breakdown of the data.
So our caller here
is Ava from Contoso.
Here is her summary.
Call her back or send an email.
Callback number listed
and her email address.
All right.
So we could then-- we like that.
If we had a bunch more, we can
do a run of that one as well.
Save all of this first.
Give it a name, give it
a decent description.
And we can then go test it out.
Again, there are our fields, and
inside of tests, we will test
with our call number two,
just so that you all hear
what the call looks like.
DAVIS: Hi, this is Davis
from the Service Center.
Just letting you know that
your car is fully serviced
and ready for you to pick up.
You can call me on 555-9010
if you have any questions.
Or you can just come
to the Service Center
at 35 Royal Park Avenue.
Please pick up your
keys at reception.
ROB FOUKROD: All right.
A very different call there,
different set of organizations.
So let's go ahead and
drag that one in.
And our caller there, Davis.
"Davis from the service
center called."
"Pick up the car and
collect keys at reception.
Call Davis if there
are any questions."
There's our callback number
and the service center
address is included.
So number three, down.
We're going to do one
last one in here.
We're going to build
one more project.
And we will do a little bit of
video analysis in this case.
We can imagine like a Teams call
or something along those lines,
and we want to extract
from the video there.
So we're going to upload
here meeting number one.
While that's happening.
I'll play for you
meeting number one.
JENNY: Hi, Ava.
How are you?
AVA: Hey, Jenny, I'm doing well.
How's things with you?
JENNY: Good, keeping busy
with the product
launch coming up.
AVA: Aren't we all?
Hey there, Max.
MAX: Hi, Ava.
Hey, Jenny.
Sorry I'm late.
My last meeting ran
longer than expected.
AVA: No problem.
Okay, so I just wanted to check
in on the launch event plans.
Jenny, how are we doing on
collateral for the event?
JENNY: Hold on, let
me share a slide.
I have a draft
design for posters,
and I found these cool
little water bottles
that I thought might make
good giveaways for attendees.
MAX: Yes, those look great.
AVA: Yeah, I like it.
Do you have costs for them?
We'll need to make
sure there's budget.
JENNY: I've reached out to
the supplier for a quote.
AVA: That's great, Jenny.
Can you get an estimate to
us by the end of the week?
JENNY: Sure.
I'll do that.
AVA: Fantastic.
Okay, let's meet
again next week.
Max, can you schedule a meeting?
MAX: Sure.
I'll send an invite.
See you all later.
AVA: Thanks.
Great work, team.
Bye.
JENNY: Have a great day.
ROB FOULKROD: If all
meetings went that smoothly.
But anyway, there
is our meeting.
Right. So in this case here,
we will do a video analysis.
We will start from scratch.
And to save you the burden of
watching me fill these all out,
I'm going to fill these out real
quick, and I'll be right back.
All right.
So we have most of them
in place right now.
So we have a quick
little summary,
a summary of the
call altogether.
Who are the participants
that are in there?
Actually, participants, we're
going to make that number
of participants that we have
there, count of participants,
then the participant names,
that's going to be a list
of strings, a description of
the slides that were shown,
that's going to be a list,
and then assigned actions,
who was asked to do what.
That is a list of objects.
Being a list of objects, we can
drill down a little bit further.
I haven't done this yet.
So we're going to drill into
the drill-down or the objects.
And we're going to have a task,
and who that task was assigned
to, both of which are strings.
So, quick description,
and who was assigned.
So we'll head back.
Now that we've broken
down what that means
to have an assigned task,
we'll do a quick "Save."
And let's run the
analysis first.
Make sure that we didn't
make any mistakes,
that the data is coming
back fully filled out.
All right.
We have now run through
the analysis in there.
And we have our summary.
"The video documents
a virtual meeting
between Ava, Jenny, and Max."
Upcoming product launch event.
Yep. All of that
seems reasonable.
Jenny's going to get a quote
for the water bottles,
and Max is going to
schedule the next meeting.
We have our three participants.
There are the names.
An overview.
Only one slide was shown.
So an overview of what
that one slide was.
And there were two actions
that were asked for here.
Jenny getting a quote
for the water bottles,
and Max scheduling
the next meeting.
All right.
That is working really well.
So we can go ahead
and build this.
Lock that down.
Go ahead and give this our
meeting analyzer name.
Description.
Nice. And then we can jump to it
and take a look and again test
with a different response.
While that's going on, I'll play
so you all can see what's
going on the screen.
LISA: Hi, Harry.
How are you?
HARRY: I'm good, Lisa.
How's things at the office?
LISA: Okay, I guess.
I'm about to present
our V2 release plans
to the board, so
I'm a bit nervous.
HARRY: You'll be fine.
You got this.
Anything I can do to help?
LISA: Thanks.
Yeah. Do you have the
user adoption projections
for the first three months?
HARRY: Yeah.
Hold on. I can present
them on a slide.
Can you see it?
LISA: Yes.
This is great, Harry.
Can you send this
to me by email?
HARRY: Sure thing.
I'll send it right away.
Now go and impress the board.
LISA: Will do.
Thanks.
ROB FOULKROD: All right.
And as a result, we have Harry
and Lisa virtual meeting.
Our two participants,
Harry and Lisa there.
We've got projected
user and in here, task,
"Send the user adoption
projections to Lisa
by email assigned to Harry."
All right.
So we have seen up to this point
now four different analyzers,
five if you include the image
from the previous session.
So we have a lot of capability
here to extract data
from multiple modalities.
Now that we've seen what's
going on inside of Studio,
let's take a look at what
happens when we want to do this
by way of code, because not many
of our users are going
to load up Studio.
They're going to
have applications.
They're going to be loading
that information from there.
So if we're going to
be doing this in code,
a couple of things have to
be set forth ahead of time.
It is probably no surprise
that we are going
to need some sort
of Foundry project.
That has been the step one
every single step of the way.
So we've got that in there.
Step two, again, not surprising
for anybody who's been
watching more than two videos,
that we're going to
need to authenticate.
That authentication can be
done by way of Entra ID
or by way of an API key.
Either one works.
Again, we're pushing folks
away from API keys as much
as possible and into Entra ID.
But then once you've got
those components set up,
then what we're going to do is
define some sort of schema.
Now, when we were
inside of Studio,
we were doing that graphically.
Those schemas could be exported.
So once you've built
one, you can export it
and then use it again.
I highly recommend that.
But it is just a JSON document.
So you can see here, we
have an example of what
that document looks like.
So we have a simple
business card here,
picking the base
analyzer, because most
of them will have some
sort of base analyzer.
When we've got documents,
pre-built document,
it tends to be the
starting place.
And then define what type
of data do we want
to pull from this.
So if we are doing something
like a business card,
conveniently fits on a slide
deck here, then we want
to be able to extract
things like content name
and email address from the card.
Once we have our schema, we
can then use the method here
to begin create analyzer.
We would pass in the definition,
that's that JSON document,
and we would give it a name.
There's going to be a little bit
of work while it's then
understanding and persisting
that to make something
that will be repeatable.
Once we have pulled,
once we have determined
that the analyzer is complete,
then we can go through and use
that analyzer to extract
our information.
You will do a "Begin Analysis."
In there, you will supply
the analyzer's name.
We've seen this pattern
a couple of times before
when we were working with images
or audio, where either one
of those options were
available to us,
a URL that is a public
URL, that is downloadable,
or we post the binary
data directly.
Then once we've got that, then
we get back the contents.
We can see what was
found in those sections.
You can see here when we were
asking for the contact name,
we got back a value; that
value was John Smith,
where we're going to find it on
the file, and then a confidence,
a number somewhere
between zero and one
to say how confident are we that
this is what we think it is.
Many times documents are
blurred or crumpled,
and so they're not exactly sure,
or there's an offset in there
that they weren't
really expecting.
So it might not be
perfect confidence,
but you can then have some sort
of application deciding point.
As long as it's greater than
90%, you can accept it.
If not, maybe we put a pin in
that one and we bring a human
in to take a look, and
something like that.
All right, so let's take
a look at doing this.
We're going to pop into a quick
little Python application.
We're going to first start
by creating the analyzer.
So we will post up to
Content Understanding.
Here is our template.
We'll pull that, and then
we will do an analysis.
Really, not everything belongs
or needs to go into the portal,
needs to go through the UI.
The ideas that we saw where we
are going to build some sort
of template, some sort of
schema, and then do a kind
of a compile, a build on that.
We don't need the UI for that.
We can do that
entirely with code.
So we're going to take a quick
example here using just code.
So let's start by taking a
look at what we are populating
in terms of our
environment variable.
Again, our endpoint
that is pointing
to our
resource.services.ai.azure.com
and then this is just basically
a constant for us here,
what we're naming our analyzer.
This could be anything.
We are going to be looking
at two business cards,
business card one,
business card two.
So we're going to call this
our business card analyzer.
In doing so, we have
here a JSON document
that describes the
pieces of information
that need to be extracted.
So we're going to be
looking to GPT-4.1
in here for our embeddings.
We'll use the text
embeddings 3 large.
And then the fields.
We're going to be
extracting a company field
with our description, a name
field, title, email, and phone.
Pretty straightforward.
You want to build JSON
documents that are enormous,
but easy to see what we've
done with prior templates.
All of those are exportable as
well, so we could have gone
into the UI, built them there,
and then done an export, right,
and maybe extended
them here, but yes,
you're not necessarily
building this from scratch.
So once we have our definition,
then we can create the analyzer.
So this is building the template
that can be used again
and again and again.
And speaking of again
and again and again,
a default Azure credential
and some sort of client,
we are repeating that
process many, many times.
So in here, in here, we are
extracting the JSON document
and just getting the
JSON content in here.
We are grabbing the service
endpoint and the analyzer name,
and then a quick
little helper function
to put it all together,
create analyzer.
So here we are
building the client.
We are passing in the endpoint.
We are passing in the
credential and an API version.
And then we are loading
up the JSON document.
And to that client, begin create
analyzer, specify the name,
business card analyzer, the
definition, our JSON document.
And if we were to run this
multiple times, allow replace,
replace the one that
had been there already.
And at the end, keep going until
we get a result that's legit
and specify the result.
So that's basically all we have.
And then I saw a new
line at the end.
So let's pop into the terminal
here and start with that.
Let's do Python and
create our analyzer.
All right.
So theoretically, we'd have a
business card analyzer ready
to go.
Let's take a look at how to
use this to read a card.
Again, very much the same.
In this case here,
we're going to go in
and read business card
one, unless we pass
in a different parameter as to
the file that needs to be read.
And then the Analyze
Card helper function.
Same endpoint that you
saw us build before.
We will read the file.
Straightforward
Python code there.
And client.begin analyze binary.
We're going to pass in
the name of the analyzer,
which is the one that we just
created, and our binary data.
And then we should get
ourselves a decent output.
So from the poller,
we'll grab the result.
And then we will break
that result down,
have a JSON result coming
back, break that down,
and iterate through the results.
So let's take a look at
running the read card.
Python. Read card.
We're going to get
two outputs here.
We should get the output that's
nicely printed on the screen.
We should also get
a JSON document
as its real results
in the background.
This should be card number one.
We didn't pass in any
parameter in there.
So the actual results that are
coming back right here are
our contents.
And it describes
then the components
that are found inside and where.
And then a list of fields
that are coming back.
But if we look at the nicely
printed results here,
we should see that we
have company, name,
title, email, and phone.
So the UI, the
portal, great place,
but not a mandatory
piece of all of this.
We can do this with
just straight-up code.
All right.
That almost finishes it.
Let's wrap this one up.
All right.
Let's see how much you
can remember, folks.
So number one.
You need to extract
vendor names, line items,
and totals from photographed
sales receipts.
Which pre-built analyzer
should you use?
Yeah, there's one in there
specifically for receipts.
Which confidence score range
indicates a value suitable
for automated processing?
And here we're looking
for a nine or above.
They're between zero-- a one.
And a higher number there
indicates more confidence.
What should you define for
the information you want
to extract from content?
And there we're
looking for a schema.
A schema is defining what are
the pieces of information
that we want to pull back.
All right.
So in here, we've taken a
look at document under--
or from here, we've taken a
look at Content Understanding
from a non-image perspective.
So now, looking at documents
and forms and video and audio.
We can devise the
fields that we want
to extract from forms and video.
We can analyze audio and video
for things like sentiment
and get summaries out of those.
Typically, the process
is going to be start
with building a project,
define an underlying schema.
We'll then compile that
schema, save that schema,
and then we can
use our analysis.
There are schema samples,
and we can go in
and use the analyzer templates
to pull those back
as a starting point.
In this session, we worked with
a single product that works
across documents, audio, and
video, and then drove it
from a real application.
We defined the schema, picked
a base analyzer and models,
and called the Content
Understanding API end to end.
Thank you for participating
in this Develop AI Apps
and Agents on Azure course.
I hope you enjoyed learning
about analyzing content
with Content Understanding as
much as I enjoyed presenting.
I encourage you
to remain curious
and continue exploring
new capabilities.
That's how we keep growing.
There are many ways to
continue your journey.
I invite you to search for
your next favorite topic
on Microsoft Learn
at aka.ms/Learn.
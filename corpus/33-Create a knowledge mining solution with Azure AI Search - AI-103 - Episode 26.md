> Source: https://www.youtube.com/watch?v=3E7ewqSwO8k

[ Music ]
ROB FOULKROD:
Generating, analyzing,
and extracting content is great,
but the moment you have a lot
of it, the next question
is always the same:
How do I find anything in here?
And that's where Azure
AI Search comes in.
It is the backbone of
nearly every serious RAG
and knowledge solution on Azure.
Hi, I'm Rob Foulkrod, a Lead
Technical Trainer at Microsoft.
In this session, we'll cover
creating knowledge mining
solution with Azure AI Search.
We'll get to know Azure
AI Search, build an index
and enrich it with AI
skills, then query it
and explore the knowledge store.
Let's finish strong
with this session.
A component that's been
in the background for us
in many different scenarios
but we haven't really focused
on a whole lot is
Azure AI Search.
With this search service,
you have the ability
to index documents, meaning
to break them apart,
to find the pieces of those
documents, and then be able
to retrieve when looking
for one of those pieces all
of the associated documents.
It allows us to index them from
a huge collection of sources,
whether those be things like
PDFs or text documents,
or video, or audio, and
create these large indexes
that can be accessible to
our generative AI apps
or to our agentic systems.
As we're bringing
that information in,
we also have the capability
of running some AI
skills against the data.
So what we'll see is we'll
bring information in by way
of a pipeline, and as
that pipeline comes in,
we'll have the ability to
say, hey, I need to --
maybe this document
needs to be translated.
We've seen a component for
that earlier in our course.
Maybe I need to perform
a summary of all
of this information and just get
a tiny description in there.
Maybe I need to extract some
of the named entities, right?
We've got AI components that
can help along the way to build
up that index so it's not just
a copy of the underlying text.
Then, and finally,
it has the ability
to do what's called
create a knowledge store
because if I'm pulling
information in from, say, a PDF,
that PDF is likely to have
a whole bunch of text.
Well, that's easy.
I can go into search pretty
easily, but it's also likely
to have things like images.
Well, we can use AI
components on those images
to store a description
of that image
or to store tags of that image.
But when I go to retrieve it,
I might like the image itself.
The knowledge store
allows us to also keep
that underlying image or video.
So even though it's basically
text that's inside of the index,
we can have external references
to the tables, to the images
that we might have found in
that document collection.
So what we're going to do is
we're going to just take a look
at what that pipeline
looks like when we want
to bring information
in to Azure AI Search.
So for starters, there is
an extraction component.
So what we're going to build
is what's called an indexer.
So the indexer is going
to be that first step
in our import process.
So the job of the indexer is
to go ahead and, first of all,
have an underlying understanding
of where that data source is.
It then does what's called
document cracking or breaking
that document down to
get the text out of
that particular source, right?
Then we can include into
that an enrichment pipeline,
we've talked about briefly.
We'll see that
again in a moment.
For each document, we may
have a series of fields.
We build out when we go
to make this indexer.
These are the pieces
of information
that I might want to know.
I might need to know the author.
I might want a
description in there.
I may have a group of tags.
So for this document collection,
much like very similar
to what we were doing with
the content understanding
where we broke those down into
fields, it's the same idea here.
But with those fields, we also
will say things like I want
to make sure that when I go
to use this index later on,
this field is sortable, or
this field here allows me
to build facets.
Maybe it's a bunch of colors,
and I want to be able to say,
okay, find all the things
that are blue in there,
and that might be something
that's -- quote -- "facetable."
So the indexer allows me to
establish where that is,
what information I'm pulling
from as I go to store
that inside of AI Search.
And in that process, we may
have a bunch of AI skills
that are complementing
that data.
So there are a bunch
of skills in here,
and you can probably guess
what those skills are
since we have talked about many
of them along the way inside
of the Foundry tools.
But we can go ahead
and check things
like what language
is it written in?
Let's extract the named
entities in there.
Let's get some of
the key phrases.
Maybe we need to translate.
Maybe we need here a common
language for all of our data.
So we might store the original,
but we also might
store a translation.
Before we store
this for too long,
we may need to extract things
like PII, grab the images
from them, captions and tags
on all those images, right,
and maybe also do image
text vectorization.
Maybe the images themselves
have text on them,
and we need to extract
that text itself.
On top of the built-in skills,
you're free to build your own.
Often you are looking at things
like creating an Azure function,
and that Azure function
can receive into it,
can receive a record, a record
or one or more records.
A record is going
to be the content
as the unenriched
version is seen.
That information is passed
into your Azure function,
and then your Azure
function is going
to do whatever magic it does
and return a list of fields
that can be used to store
inside of the search service.
Once it's been put
through that pipeline,
then we will configure
the underlying fields.
So we will say for each
one of those records,
anybody with a database
background is familiar
with having some key or index
that we will be
looking things up by.
And then for each one of those
fields, we will determine things
like is this field something
that is searchable?
Should we have an
index on that field,
or is it additional metadata
that we may want to present,
but we don't expect
someone to look that up?
Maybe there is a
longitude and latitude
on the image where
it was stored.
Maybe in this scenario we don't
expect folks to look things
up by way of longitude and
latitude, but we do expect them
to be able to understand
where it was.
So that might be
something that we have,
but searchable is false.
We may have things that
are filterable, right,
that we can say I want to
get all of the documents
that have this particular
quality in them.
Maybe the field is
the type of image.
Maybe it's black and white
or color, and I want just
to be able to filter all of
the color images, right,
or maybe all of the
AI-generated images, right?
So it might be a field
that is included
in that filter capability.
Then you see the
idea of sortable.
There may be fields that we have
like description that are fine
to have, but seldom is
anyone going to be sorting
by the description of an item.
We may want to read
the description,
but we're not sorting by things
that start with an image of.
Not incredibly helpful, but
many other things like the date
that image was taken,
that absolutely might be
something that is sortable.
Earlier, we just talked
about the idea of facetable.
Facets are typically
used in user interfaces
where I may have a list of
facets like color or region,
and just be able to check
those items, kind of a growth
of the idea of filterable.
And then finally, retrievable.
When I am bringing this
back, is it something
that the user may see?
So that's all part of
building the index itself.
And then lastly, as we
briefly talked about earlier,
what about all of
that extra data?
Inside of Azure AI Search,
we are storing text.
But that's not what we
started with, in many cases.
So we can grab and
search and retrieve all
of the text representations, but
odds are really good we may want
to point to an original source.
So we can then create
a knowledge store.
Typically, what we're going
to build is we're going
to build an Azure
storage account.
This storage account,
we then associate back
to that knowledge store,
and things like JSON documents
could be stored in there.
If I'm looking up a -- if I have
a PDF, and that PDF has a table
in there, maybe I'm going
to store a record version
of that table that can
be stored in there,
and things like the
extracted images from those.
Those are all going to
be stored, referenced,
and keyed so that the
original document,
the original reference, can
just point back to those items,
and we can then retrieve those.
This may all sound
a little bit vague.
So let's walk through the
process of building an index,
getting it all indexed, and then
this may sound a little vague,
so let's go take a
look at an example.
In this example here, we're
going to build an index.
We're going to run it
through a pipeline.
Then when we've got it, we're
going to query that up,
and we'll see the
information persisted
in that knowledge store.
Folks, let's take a look at what
adding a little AI Search does
for our application.
So we'll build an index --
actually a couple of
different ways --
and then we will query
that up and hook it
up into an agent just for fun.
So what I have already
taken the opportunity
to do is build the search
service so that we didn't have
to see me clicking through --
so we didn't have
to see me clicking
through the portal here
to build a resource.
So I've got a search service
here, and there's a couple
of ways of adding the index, the
thing that we want searched.
We do have a quick little
importer wizard right here,
and in the importer, we
can then specify where is
that underlying data, whether
it's in a blob or a data lake.
We're going to grab
our blob storage here.
I've got a few mechanisms of
which we can pull this in.
We've got a few mechanisms
to pull this in.
The first is just to do kind
of a straightforward keyword
search, and this will build
that pipeline that we
talked about earlier.
We'll specify where
our data lives.
In this case, it lives
in a storage account.
We will specify what
that container is.
That is our documents,
where they live there,
and how we're going
to authenticate.
And in this case here, I've
done a little bit of work ahead
of time just to give permissions
for a managed identity.
I gave the search service
the blob data reader
in the storage account.
So we'll use that.
System-assigned is fine.
Then in that pipeline, what are
the AI enrichments that we want
to be able to add to all of this
will be the next phase here.
So this is going to use those
underlying tools to do things
like extract individual
phrases there,
look for named
entities inside of it.
We can configure what
those entities are.
[inaudible] extracting persons
or locations, organizations,
what are the things in there
that we want to bring out?
Should we be looking for
images inside of text?
Do we want to generate
tags for those?
Do we want to
categorize the content
that we're finding
inside of the images,
in this case, a
collection of PDFs?
And then should we use
like the Foundry tools
to handle all that?
In this case, we will.
We'll use those
underlying tools.
And then when we're
building the index,
we get to see what
are the facets,
the fields that we're
going to be extracting
from all of that data?
So we can see things
like we're going
to pull the title
out and key phrases.
We just saw that they're going
to be persons and locations.
They're going to be
extracted in there.
Things like looking
at the metadata,
how big is the document?
Those are all
different parameters
that we could go
ahead and configure.
And for each one of those, if
we were to go into, say, title,
for example, we could go
and configure that field.
And you remember we were
talking about things
like should this be a field
that we could retrieve kind
of like part of the
select statement?
Should we be able
to filter on that?
And should we do free text
search on that content?
So, yes, it should
be retrievable.
Just want the titles.
I want that to be
filterable and searchable.
Go ahead and save all of those.
We can make that
sortable as well.
And then we would do that
for each one of the fields
that were interesting to us.
Then we're going to be
scheduling the index.
How often should this run?
For our purpose right now, I'll
just say run once in there,
and then give that a
name, and off it goes.
We would click "Create" here,
and it would build that index.
Now, that would take a
fair amount of time.
So I'm going to actually
cheat just a little bit
because I've already run through
exactly what you have seen
right here.
Going to leave that behind.
I know I feel bad, but I'm
going to do it anyway.
And we've got an index in here
that I have named standby.
And so inside of standby, we
have six documents in there.
And so we can start pulling
that information in.
Go ahead and use that
little "JSON view" in here.
And I'll just select
up all the documents,
a little JSON "Search" in here.
And so getting the
response back, over here.
We can see here that we did
grab all six documents,
just to grab everything
and account.
And so from those documents,
we're seeing things
like the locations.
That was extracted
from that location
and key phrases
that were in there.
We can see those.
If we just wanted to be a little
bit more particular in there,
we can just say select.
Just give me the title
and the locations.
So here we have title,
locations, for document 1,
and then title location.
Basically those of you
familiar with SQL,
select is very much
the field list
that we wanted to pull back.
If we're looking for a
particular keyword here,
we're going to
search on New York.
So in terms of documents
that mentioned New York,
we've got the New York
PDF that mentioned it,
Margie's travel mentioned
the keyword New York,
and San Francisco actually
mentioned the word New York
in there at some point in time.
All right, so with this import,
we could build an application
that would query this up
and use those capabilities.
But what I also want to show
is where would we go in terms
of making this available to
something like an agent?
I'm going to head back
to my "Overview" here.
We're going to "Add Index."
Instead of using the generic
import, add an index.
We're going to go ahead and
"Import data" one more time.
Again, we're going to
pull this from storage.
But here we can do things like I
want to make this a RAG system.
I want to ingest the text,
and I want to do things
like OCR the images and have
this available to my agents.
I'm going to click
on the "RAG" option.
I'm going to pick the
same storage account.
That's inside of
documents there.
We could go ahead
and enable things
like document layout detection.
Here it would be
asking us for --
So I want to create an index
then that is a little bit easier
to get to from our agent.
Import this real quick so that
we can get this available
to our agent.
We're going to click
on our "Import" here.
Again, same storage account.
In this case, we're going to
do a "Multimodal RAG" import.
We're going to pick
our storage account
and the documents section.
We will authenticate by
way of managed identity.
Now as we go to
shred that document,
we'll extract the information
from the PDF here.
We go to extract
that information,
we need to describe
what the images are.
So there's an image
verbalization.
So this is that
image identification
from a large language model.
So we'll pick our Foundry here.
We'll pick the project that's
capable of doing this.
And here we can pick
which model that we want
to describe those images.
Mini here would be just fine.
Do something like that.
And we will acknowledge that
it's going to cost a little bit.
And then for the
text vectorization,
once we have verbalization of
the images, those images and all
of the text need
to be vectorized.
So I'm picking our Foundry
and picking our demo project.
And I am picking the
embeddings section.
We will have that set up as
a system identity as well.
We will acknowledge that.
And then when they go
to export the images
because we're
shredding that PDF,
we're taking those images --
those are going to be standalone
components as well --
where should those go?
So here we're going to put that
into storage, specifically
in an output container
right there.
And again, managed
identity to authenticate.
All right, then how
often should we do this?
Here they're talking about
the indexing of the fields.
Which fields do we
want to bring in?
We can preview and edit those,
as we saw in the
earlier example.
Again, we'll run this once.
We would give this a great name,
Margie's Travel Documents,
and we would "Create."
Again, to save us a little bit
of time, we go into create here.
We have a knowledge source
that was set up from all
that travel documents.
And over the top of that, we can
then build a knowledge base.
This knowledge base
here allows us
to then access this
from our agent.
So to see that in play,
let's go into Foundry here.
Let's go build a
brand new agent.
MargiesAgent.
In MargiesAgent, we'll
eliminate web search here just
so that we know that the data
is coming from our documents.
This is not a mandatory part,
but it just makes my life
just a little bit easier
so we're not allowed to go and
query outside of that source.
And we will bring in
a knowledge base.
Connect up the Foundry here.
That is our AI Search instance,
and we can pick the
margiestraveldocuments
knowledge base.
Now that we have that knowledge
base available, we will throw
in some instructions to say,
hey, use that knowledge base.
Do a quick little
"Save" here and tell me
about New York hotels.
If all goes well,
first it'll prompt me
because it is using MCP
to bring this forward.
So it will prompt, hey,
can I query up that
from Margie's Travel?
I'm going to approve
this tool going forward.
That's been approved.
There we go.
And you may recall,
or maybe not,
that these are the three
hotels that are represented
in the Margie's Travel
New York Documents.
But that was just text.
So let's go a
little bit further.
Any images of pyramids?
So there should be two documents
in here that have something
that resembles a pyramid.
This is just looking at
the images themselves.
There's no text in there
that references those.
So we're allowed here.
We'll go ahead and "Approve."
And we've got Margie's
Travel here as images
of the Transamerica Pyramid,
which is in San Francisco.
So if we were to look at the
San Francisco document there,
we would see that pyramid
is available to us.
So what we have seen here
is an end-to-end search.
We went and built a
couple of indexes
and then made them
available to our agent.
Let's go wrap this up.
All right, so last one.
Let's see what you all remember.
Which component of an Azure AI
Search solution is scheduled
to extract and enrich data
to populate an index?
That is the indexer.
That's its job.
Maybe run once.
Maybe it will run on
a repeated basis.
Which service supports built-in
AI skills in Azure AI Search?
Yeah, we've seen them a lot in
this course, the Foundry Tools.
And what kind of
projection results
in a relational data schema
from extracted fields?
That's going to be a table.
So in this, we have seen that
Azure AI Search is the backbone
for our RAG and knowledge
mining solutions.
The first thing that we build
when we're importing manually
in here is we're going to
build some sort of indexer.
Its job is to look through
the records, the fields,
the underlying data source, and
start importing those records.
Along the way in that pipeline,
we're going to have a
series of AI skills.
Those skills, their job
is to enrich the data
that we're bringing forward.
Maybe we need to extract text
from some of the images.
Maybe we need descriptions
of those images.
Maybe we need to
translate the text.
We can use all of those tools
that we've been seeing all
through this course for
that import enrichment.
Each index is going to have
a series of attributes
for each one of the fields
that we're going to have.
Is a field something that can
be searched and filtered?
Is it something that we can
sort on, etc., and so forth?
All right, and then finally,
there's a knowledge store
when we need to store more
than just simple text.
In this session, we made
our content findable.
We covered Azure AI Search,
built and enriched an
index, and queried it.
And that wraps Topic 4.
Look at what we learned.
We taught apps to see with
vision-enabled chat apps
and content-understanding
images.
We taught them to create,
generating images
and video from prompts.
And we taught them to extract
and find, pulling data
from documents, audio, and video
with content understanding
and indexing it all
with Azure AI Search.
That's a complete
visual AI skillset.
Your apps and agents can
now see, generate, analyze,
and search across visual data,
a massive expansion
of what they can do.
And that's a wrap on develop
AI apps and agents on Azure.
Take a moment and look at
the distance we've traveled.
We started with the
foundation in Topic 1,
building generative AI apps,
learning the platform,
designing chat experiences,
and calling tools
to ground our responses.
We optimized cost
and performance
and applied responsible AI from
Day 1 because in Topic 2 we got
to the main event: agents.
Software that just
doesn't respond; it acts.
You built your first
Foundry agent,
extended it with
custom tools, an MCP,
and grounded it with Foundry IQ.
Finally, we coded with
Microsoft Agent Framework
and orchestrated
multi-agent solutions.
Then in Topic 3, we gave agents
a voice and a vocabulary,
analyzing text with
a language service,
connecting through language
and speech MCP servers,
and building multimodal
audio chat experiences,
working with speech-to-text
and text-to-speech,
going live with Voice Live and
translating across languages.
And we've just seen Topic 4.
We taught them to see,
understand, and search.
That's the full arc from a
single prompt and response
to apps and agents that read
and listen and speak and see
and drive outcomes
on your behalf.
If you're interested
in going further,
you can find all the content
at aka.ms/course-AI-103,
where you can find each
topic or learning path.
All the content and
labs are there for you
to explore and expand on.
It's been my privilege to walk
you through this journey.
For the last time, thank
you for participating
in this Develop AI Apps and
Agents on Azure course.
I hope you have found the
content useful and interesting
and that this propels you
to learn and build more
with Microsoft Foundry.
The learning never stops, and
I invite you one last time
to search for your
next favorite topic
on Microsoft Learn
at aka.ms/learn.
Until next time, go
build something great.
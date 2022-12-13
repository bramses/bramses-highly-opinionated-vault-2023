# Introduction

Welcome to **Bramses' Highly Opinionated Vault 2023**! Thanks for checking it out.

What you'll see in this repo is a **highly opinionated, unapologetic** way to use Obsidian. Note that this is not the *only* way to use Obsidian, nor is it the *correct* way. But it is a way that works well, especially once you understand the [philosophies](#Philosophies) behind it.

Some of these techniques may be familiar to you, others may be novel due to the *idiosyncracies about how my own mind works*. I'll do my best to explain all of my philosophies and lived experience in the creation of this vault. Some techniques, processes and plugins are built into the platform. Other techniques leverage powerful external softwares to greatly enhance the Obsidian experience. I'll argue for those as they come as well as provide potential alternatives.

By following this guide and leveraging this template, I can promise that you'll be able to evolve from possibly never having used Obsidian to **being up to date with the way I think about using this phenomenal software**. I hope you enjoy and have fun!!

# Motivation

I've been using Obsidian for well over a year and have developed many experiments, some of which succeeded and many others that have failed. I have tried to compile all the lessons from these experiences and create a vault that mirrors my up to date thinking on how Obsidian can be maximally utilized.

**Bramses' Highly Opinionated Vault 2023** (BHOV-2023) will tread the line of practicality and theory. Let's dive in!


# Philosophies

Before we get into anything practical we **need** to discuss the underlying philosophies powering this vault, or none of the implementations will make any sense. Most of these philosophies I've learned or adapted from great contemporary and erstwhile authors and thinkers -- the following is a reflection of both my value structure as well as my take on the works of others.

Philosophies we'll encounter along the way:
- Deep Work ([Cal Newport](https://www.calnewport.com/))
- Time Block Planning ([Cal Newpor](https://www.calnewport.com/)t)
- PARA ([Tiago Forte](https://fortelabs.com/))
- CODE ([Tiago Forte](https://fortelabs.com/))
- Progressive Summarization ([Tiago Forte](https://fortelabs.com/))
- Zettelkasten ([Niklas Luhmann](https://en.wikipedia.org/wiki/Niklas_Luhmann))
- Digital Garden ([Andy Matuschack](https://andymatuschak.org/))
- An unexamined life is not worth living ([Socrates](https://en.wikipedia.org/wiki/Socrates))
- Jamming (Music Production)
- AGILE (Software Development Project Management)
- Metcalfe's Law (Computer Science)
- Atticus Finch is the same in the house as he is on the public streets ([To Kill a Mockingbird](https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird))
- Large Language Models and Transformers (Machine Learning)
- Automation and Scripting (Software Development)
- Content management systems (Software Development)
- Antifragility ([Nassim Taleb](https://www.fooledbyrandomness.com/))
- Version Control Systems (Software Development)
- Causa Sui ([Ernest Becker](https://en.wikipedia.org/wiki/Ernest_Becker))
- LYT + Maps of Content ([Nick Milo](https://www.linkingyourthinking.com/))


## Deep Work

To do *deep work* is to be able to focus on a significant problem for an uninterrupted block of time. As a software engineer and writer, I am dependant on the flow state to create my best work and cut through the noise of digital and physical distraction.

To enhance the likliehood of entering the flow state, and enhancing the quality of the flow state while it's engaged, this vault has tools to help you cut through the mud and focus on what needs to get done.

Processes:
- Intra-Vault Research
- Keeping relevant project info in one spot
- Vault wide task management protocols

Plugins:
- QuickAdd
- Tasks

Related Philosophies:
- [Time Block Planning](#time-block-planning)


## Time Block Planning

*Time Block Planning* is the intentional process of giving every hour a "job". This intentional workflow allows for the creator to get a bird's eye view of their active commitments. This methodology bubbles up from daily commitments to a **weekly view** and a **quarterly view**. These views allow for enough space for projects to finish, while being short enough to see realistic change.

In BHOV-2023, I don't functionally time block that much. This is because I usually get a late start to the day (more on this later), and I don't like using calendars that much. I've found writing the time next to notes in my daily page works just fine, e.g.:
```
1-3p coding
330-5 meeting with [[blah]]
...
```
*if I need a notification for a meeting, I'm most likely gonna be late regardless...*

If you *are* planning on using a daily calendar, I'd recommend the [Full Calendar plugin](obsidian://show-plugin?id=obsidian-full-calendar). I hear good things!

The Time Block Planning is great for weekly planning and quarterly planning as well. **The goal is to use the weekly plan to inform the daily plan and the quarterly plan to inform the weekly plan.** When combined with Templater (plugin) and Periodic Notes (plugin), Time Block Planning gives a great weekly review to look forward to.

Plugins:
- Templater
- Periodic Notes
- Full Calendar (optional)

Related Philosophies:
 - [Deep Work](#deep-work) 
 - [Agile Planning](#agile)

## PARA

The *PARA framework* is a structure that usues cross app folders with the same names (**P**rojects, **A**reas, **R**esources, **A**rchives) as buckets to capture different projects. The main value to this vault is the `Project` and `Archive` folders. These two folders alone do a ton of work and allow resources to "live" inside their parent project folder. This makes organization **much** easier, as well as the retrieval of resources used to create old projects. 

If you look in the PARA directory (`/_PARA`), you'll notice a distinct lack of and Areas and Resources folder. That is because in BHOV-2023, I've offloaded a lot of the value those folders provide to other tools and techniques that will be discussed later. If you have well defined areas in your life and prefer to keep non-project related resources in a centralized place, feel free to recreate the folders!

Scripts:
- `quick-add-create-project-folder.js`
- `quick-add-file-filter.js`
- `quick-add-projects-folder-kanban-variables.js`
- `quick-add-projects-folder-variables.js`

Plugins:
- QuickAdd
- Kanban
- Shimmering Obsidian (optional)
- Waypoint

Related philosophies:
- [CODE](#code)

## CODE

CODE by Tiago Forte tands for **Capture**, **Organize**, **Distill** and **Express**. Fast capture with minimal friction is a priority goal of BHOV-2023, because you never know when and where inspiration will strike. 

To do quick **capture** on my computer, I leverage Shimmering Obsidian and custom written shortcuts. This plugin is powerful because Alfred can be evoked anywhere on your Mac (while watching a video, browsing the web, etc.). This helps avoid the [Doorway effect](https://en.wikipedia.org/wiki/Doorway_effect#:~:text=The%20doorway%20effect%20is%20a,remained%20in%20the%20same%20place.). The plugin then puts the thought in our `Inbox/` for future processing. The important part is that we can **trust that our ideas will land in a place where we can process them later**. A similar process is done on my mobile device leveraging iOS shortcuts and Obsidian Sync.

These apps and plugins serve as scouts, running the long distance of time and space to place ideas in your trusted vault from anywhere in the world.

> In a nod to Greek history, the first marathon commemorated the [run](https://www.livescience.com/5359-perfect-running-pace-revealed.html) of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C. According to legend, Pheidippides ran the approximately 25 miles to announce the defeat of the [Persians](https://www.livescience.com/who-were-the-persians) to some anxious Athenians. Not quite in mid-season shape, he delivered the message "Niki!" (Victory!) then keeled over and died.

In BHOV-2023, **Organization** is accomplished using plugins like Dataview and Tasks to surface relevant data from across the entire vault. For example, tasks captured from your mobile device on the go anywhere in your vault will show up in the same place with this Tasks filter:

```\tasks
not done
heading includes todo/mobile
```

This is a great way to de-stress about open tasks getting buried in some previous 

**Distill** will be discussed in the Progressive Summarization section, and **Express** in the Digital Garden and CMS sections.

Plugins:
- Shimmering Obsidian
- Sync
- iOS shortcuts
- Readwise

Scripts:
- `quick-add-file-filter.js`
- `quick-add-projects-folder-kanban-variables.js`
- `quick-add-projects-folder-variables.js`

Related Philosophies:
- Progressive Summarization
- Digital Garden
- CMS

## Progressive Summarization

*Progressive Summarization* is a research/reading technique developed by Tiago Forte. In short, the goal is to read something, look for salient and helpful material, and highlight it. Then a second pass is applied, doubly emphasizing the important bits **you find important**. Finally, a third pass is done to rewrite the concept in **your own words**. Let's use the paragraph from above as an example:

Highlighted from [source](https://www.livescience.com/11011-marathons-26-2-miles-long.html):

> ...
> 
> In a nod to Greek history, the first marathon commemorated the [run](https://www.livescience.com/5359-perfect-running-pace-revealed.html) of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C. According to legend, Pheidippides ran the approximately 25 miles to announce the defeat of the [Persians](https://www.livescience.com/who-were-the-persians) to some anxious Athenians. Not quite in mid-season shape, he delivered the message "Niki!" (Victory!) then keeled over and died.
> 
> ...

Second pass:

> ...
> 
> In a nod to Greek history, the first marathon commemorated the [run](https://www.livescience.com/5359-perfect-running-pace-revealed.html) of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C. According to legend, **Pheidippides ran the approximately 25 miles to announce the defeat of the [Persians](https://www.livescience.com/who-were-the-persians)** to some anxious Athenians. Not quite in mid-season shape, he delivered the message **"Niki!" (Victory!) then keeled over and died**.
> 
> ...

Third pass:

The first marathon was run not for fun or to push one's body for exercise, but for duty. The messenger Pheidippides made the 25 mile trek on foot to pronounce victory (Niki!) to the Athenian citizens. He then promptly died.

---

To facilitate this process BHOV-2023 leverages Readwise and Note Refactor to do the three passes. Readwise is pass one, pass two is to exract salience and a title and tags (this can be done with AI thanks to GPT-3 Summarizer!), but a lot of the times I do it by hand. Finally, the tird pass is setting the note into it's final Zettelkasten state, and assigning to a PARA project, or leaving it in the root directory.

Plugins:
- Note Refactor
- Readwise
- GPT-3 Summarizer (optional)

Related Philosophies:
- Large Language Models
- Zettlekasten
- PARA

## Zettelkasten

*Zettelkasten*, German for slip box, is the metaphorical glue that holds ideas together. Zettelkasten is a loose but exteremely powerful structure, and a system with few [hard and fast rules that can scale magnificently](https://zettelkasten.de/introduction/).

These rules are:
1. Unique Identifier as filenames
2. Atomic content -- one note roughly equals one coherent thought
3. Links, tags, and citations > including the knowledge in the note itself

Fortunately for us, Zettelkasten is a core feature of the Obsidian workflow. The core plugin Unique Note Creator will take care of creating IDs. Plugins like Footnote Shortcut and Zotero Plugin make citing external resources breeze. This allows you as the author to focus on two things:

1. Is this note atomic? 
2. What will I link it to?

In BHOV-2023, Zettlekasten is responsible for ideas and notes that don't fit cleanly into the `Projects` or `Archive` folders of [PARA](#para). In other words, evergreen knowledge that forms your lattice of thinking, but doesn't have specific utility. In BHOV-2023, the goal of the Zettelkasten is to serve as puzzle pieces to help us Express (the E in [CODE](#code)) ourselves.

Notes like [[202212090137]] and [[202212090136]] live in the root directory, but have tags that serve as "buckets". The page preview plugin allows us to hover over the notes and see what's inside (if you're reading this in Obsidian, go ahead and give it a try!). **Make sure to give context to links when you link them for future reference.**

When creating a new file in BHOV-2023, by default it will automatically create it to the Zettelkasten spec. A single Zettelkasten is referred to as a Zettel, so each note is tagged with #zettel by default in BHOV-2023.

Plugins:
- Templater
- Unique Note Creator
- Omnisearch
- Local Graph
- Backlinks
- Note Refactor

Related Philosophies:
- Large Language Models
- Digital Gardening

Workflows:

New file (`ctrl-n`) automatically creates a Zettelkasten note to spec, you just need to replace the Lorem Ipsum.

If you have content you want to extract from an existing note into a Zettel, you can highlight the text you want to convert, press `alt-shift-v`  to convert it into Zettelkasten spec, and then `ctrl-shift-n` to trigger the Note Refactor plugin to move it to it's own note.

You can use `alt-shift-z` to search Zettelkasten notes by their human readable titles.


## Digital Gardening

If Zettelkasten is the planting of the seed of a single idea, *Digital Gardening* is the maintnence of the whole. It is the work of groundskeeping the entire vault, and finding utility in the edges. 

We can ease the "writers' block" of deciding which notes to upkeep by leveraging **Random Note Review**, which will surface three notes to review in our Daily Note.

```
<%* const files = app.vault.getFiles(); const random = Math.floor(Math.random() * (files.length - 1)); const random2 = Math.floor(Math.random() * (files.length - 1)); const random3 = Math.floor(Math.random() * (files.length - 1)); const randomNote = files[random]; const randomNote2 = files[random2]; const randomNote3 = files[random3] -%>

- [ ] [[<% randomNote.basename %>]]
- [ ] [[<% randomNote2.basename %>]]
- [ ] [[<% randomNote3.basename %>]]

<%* const todayIs = tp.date.now("YYYY-MM-DD") %>
```

The side benfit of all this work is that it publishable! Since a garden is a collection of linked and curated thoughts, a published garden serves as a public utility similar to maintained gardens in the real world. Visitors can meander around your thought garden, stopping to marvel at the hydraengeas, or beelining straight for the mini pagoda and water feature in the corner. 

Later, we'll address how to seperate private and public, but for now, assume any note that you do the work to Zettelkasten-ize, will eventually have some sort of public value.

Plugins:
- Publish
- Templater
- Footnote Shortcut

Related philosophies:
- Zettelkasten
- Content Management Systems

## An unexamined life is not worth living

**Daily journaling** is a *meta habit*, a habit that anyone can apply to their existing life at any point for an improved experience. 

Journaling allows for reflection and revisitation of past thoughts and events, planning and decomposing future desires into attainable goals, and most importantly, journaling serves as a conduit for thought in the present.

The  self-Socratic method undertaken by a journaling exercise is both a form of catharsis and a tool for unabated growth.

In BHOV-2023, **the dashboard is the daily note**. The daily note is the reflection of the driver, a trusted sidekick in the goings on of the day. In addition, thanks to Time Block Planning, BHOV-2023 has weekly and Quarterly notes as well, which are linked to the evolving daily note.

Leveleraging Templater and Periodic Notes, BHOV-2023 creates a flexible daily note template that can easily adapt to the owner's life.

Plugins:
- Templater
- Periodic Notes
- Dataview
- Tasks (optional)
- Map View (optional)
- iOS Shortcuts (optional)
- Default New Tab Page (optional)

## Jamming

In music production, **jamming** is getting together with some like minded individuals to create a creative output. The goal is to have fun and find a riff that everyone can groove to, and bring out the best in their instrument.

Obsidian is first and foremost a single player experience. There are ways to engage publicly, but many of these techniques are readonly.

Indeed, the best jamming sessions in Obsidian come from the notes that already exist in the vault. We can use random notes to surface and inspire thought, to break exisiting thought patterns and introduce new concepts into our line of thinking. 

Plugins:
- Random Note
- Canvas
- Pinned Notes 

## AGILE

In technology, **AGILE** is the process of splitting software development work into two week sprints. 

The AGILE methodology pairs well with PARA and Time Block Planning because it forces us to prioritize elements of a project that can be delivered in two weeks.

In BHOV-2023, Weekly Notes highlight active projects, as well as when they were started to give a high level grasp of management. In the projects themselves, there is a `QuickAdd: Add to Project Kanban` option, allowing you to quickly add new to-do items to the project.

Quarterly notes track the opposite. The quarterly note tracks **how much was achieved in the quarter**.

Plugins:
- Dataview
- Templater
- Kanban

## Metcalfe's Law 

**Metcalfe's Law** is a concept that says that the value of a network is the square of the number of nodes in the network. In the parlance of Zettelkasten, the more connected notes you have, the higher the value of the overall system.

Processing notes from Readwise and Daily Notes will automatically put you into Metcalfe Law category, over a long period of time. The goal is to keep showing up, and to keep expanding your network whenever possible.

## Atticus Finch is the same in the house as he is on the public streets

Being a **local device first application**, Obsidian is "private by default" (well, at least as private as everything else on your laptop). 

Obsidian also has tools for publishing public notes that we saw in the Digital Garden section above, namely the Publish plugin. 

BHOV-2023 acknowledges the need to keep certain things private and has a Private folder that uses Supercharged Links and Style Settings to visually warn you if you are linking to a private note in your shared section. In addition, in `.gitignore` there are a selection of files you may want to consider keeping Private and not committing to version control software (discussed later)

Plugins:
- Supercharged Links
- Style Settings
- Obsidian Git
- Publish
- Sync

## Large Language Models and Transformers

AI has been taking over the news lately, particularly **Large Language Models** (LLMs). These models serve as transformers, meaning that they can embed any type of data (code, text, images, etc.) and use a strategy called *attention* and a *bunch of data* to predict the next token using probability.

[How and why this works is beyond the scope of this README](https://dugas.ch/artificial_curiosity/GPT_architecture.html), but know that we can use LLMs to our benefit.

Thanks to Zettelkasten, we have perfectly cordoned off atomic thoughts that can be embedded for semantic search. Semantic search is a powerful type of search that indexes across meaning instead of full text searching. For example, I might be able to search singer and retireve "Taylor Swift", but if I were using full text search, singer and Taylor Swift have no letters in common so I would return zero results.

Plugins:
- GPT-3 Summarizer

Related Philosophies:
- Zettelkasten

## Automation and Scripting

**Automation** is useful because it prevents the creative from having to do repeat work. By abstracting away a problem, we can simply press a button that will fire a bunch of processes in the background to do work. 

Automation provides **leverage**, which is desperately needed if one is to get serious work done. In BHOV-2023, automation can be found everywhere, from the templates to the commands, each automation is meant to save you time and to allow you to put your energy where it really matters.

Plugins:
- `/_scripts`
- Templater
- DataviewJS
- QuickAdd

## Content management systems

Posting content on the internet has become a very normalized thing to do -- whether you post on your own domain or a large website like Twitter. Sharing coherent and well structured thought is becoming a necessary skill. Fortunately for us, we have a whole databank of really good thoughts to pull from! With structured data sourcing from PARA and "unstructured" data emerging from our Zettelkasten, creating long form content is more about stitching together existing raw material than creating from scratch.

A **content management system** makes the process of posting easier taking care of boilerplate, formatting, serving to readers, etc. The most popular example is Wordpress, though many tools like Ghost/Substack serve similar roles these days.

Obsidian can also be used as a full e2e CMS. I know because I built one into Obsidian! The plugins required to make a full CMS are outside the scope of BHOV-2023, but if you'd like to see the code that powers my Obsidian backed CMS you can click [here](https://github.com/bramses/kaneki) and [here](https://github.com/bramses/kaneki-obsidian), or if you want a deep dive on the process of building a CMS into Obsidian, click [here](https://www.bramadams.dev/projects/how-to-kaneki).

Plugins:
- Kanban

Related philosophies:
- PARA
- Zettelkasten
- Deep Work


## Antifragility

*Antifragility* is a concept by Nassim Taleb that states that certain systems can get **stronger** in response to minor crises. Antifragile systems don't just recover or rebound from stressors, they thrive. Examples of antifragile systems include animal muscles that get stronger when put under stress. The immune system is another example of an Antifragile system.

In BHOV-2023, Antifragility means that as your vault evolves you shouldn't feel ashamed or embarassed if a project fails, or an experiment with a new structure backfires. One of the top priorites of BHOV-2023 is to be flexible and adapt to **your system**. Remember, many/all of the items I'm suggesting are optional, but the stress of trying to make them adapt into your world view wiill make you and BHOV-2023 a stronger system. Fight what you see, be skeptical, make it better!

> **Absorb what is useful, reject what is useless, add what is essentially your own**
> - Bruce Lee


## Version Control Systems

*Version Control Systems* like Git and SVN are specialized programs that track in history what happened to a particular file. For example, click this link to see a secret sentence that used to live right here: -> [I BROKE THE DAM](https://www.youtube.com/watch?v=3aX8ZdgNVRY&ab_channel=SouthParkClips). <- 

These changes are particularly useful to software engineering teams who need to trace the history of a working block of code. For our case in BHOV-2023, Git is mainly used for two things: file versioning and light publishing capability. 

Git very easily can monitor the **state** of the vault at any period of time, creating a snapshot of connections, notes, and plugins at a given moment in time. This means that we can update our files without fear that we'll delete something important.

Git(Hub) also serves as a light publishing tool because you can have a public repository and GitHub has a Markdown renderer which means that when people visit files they will render in Markdown -- [example](https://github.com/bramses/bramses-highly-opinionated-vault-2023/blob/main/Readwise/Articles%20Test/The%20Ancient%20Japanese%20Technique%20That%20Produces%20Lumber%20Without%20Cutting%20Trees.md).

Plugins:
- Obsidian Git

External Software:
- GitHub

## Causa Sui

In the Denial of Death, philosopher Ernest Becker discusses the idea that we all knowingly or unknowingly undergo *Causa Sui projects*, or immortality projects. An immortality project is the desire for one to create meaning past their own life span, using their work, genetic progeny, or cultural beliefs of an afterlife.

As a daily journal system as well as a project managment system, BHOV-2023 atttempts to help spark and foster creativity, allowing the Causa Sui project to emerge organically through your thoughts, daily goings on, and work.

Related Philosophies:
- Zettelkasten

## Linking Your Thinking

**Linking your Thinking** by Nick Milo is the concept of using emergence to discover relationships between your notes.

I think of MoCs as directionally flexible Table of Contents. You can gather togther a case from across your notes and link them in one space.

Automatically, Folder Notes include the Waypoint plugin which will keep a live version of all children in a folder. This is great for Parent level folders like `Projects` and `Archive`.

Manually, you may also look to create your own Maps of Content (MOCs) from a particular tag, or create a Zettelkasten note that is a map of other Zettelkasten Notes. Meta!

Plugins:
- Luhmann
- Note Refactor

# Implementation

`todo`

## Elements of Markdown Important to BHOV-2023

### Footers

Footers serve two very important roles: citation and non destructive updates. Citation is used in the [Zettelkasten](#Zettelkasten), to help link a note to its source material.

Footers also make for great **non destructive updates** to notes. This means you can revisit an old note, and instead of altering it directly, you can append a footnote to the end of a thought, without changing the structural meaning of the original file. Think of it as sedimentary rock, or a really lightweight [VCS](#version-control-system). 

Footnote Shortcut combined with Natural Landguage Dates allows for super easy non destructive updates that serve as asides, knowledge from a wiser and smarter future you.[^1]

### YAML

YAML, or frontmatter, serves as a way to get computed values or track over time. For example, if you are looking to establish a daily reading habit, you may desire to put that habit in a YAML and then track it.

```
// /Daily/2023-01-01

---
read: 0
---

// /Computed/Trackers.md

\`\`\`tracker
searchType: frontmatter
searchTarget: read
fixedScale: 1.0
fitPanelWidth: true
folder: Daily
datasetName: Read 20 mins or more
month:
\`\`\`

```

## Tags

`todo`


## Folder Structure

The following is the folder structure used by BHOV-2023, along with short descriptions as to why each exists.

- \_PARA
	- Projects (*active projects*)
		- Test Project
			- Kanban
			- Scratchpad
	- Archive
- \_tests
- \_tutorial
	- Hotkeys
	- Attachments
- Attachments
- Computed (*dataviews of information computed across your vault*)
	- Trackers (*trackers like habit trackers, reminders etc*)
	- Tasks (*open tasks found using - \[ \] all across the vault*)
- Daily
- Weekly
- Quarterly
- Inbox
	- Computer Capture
	- Smartphone Capture
- Private
	- CRM
	- Attachments (*images will automatically be placed into this folder*)
- Readwise
- Templates
- Canvases
- Excalidraw

## Tests

`todo`

## CRM

Another private but universal trait of humans is our relationships to others. Knowing this BHOV-2023 includes a private CRM (`Private/CRM/CRM`) that can help keep track of the important people in your life. 

I use my CRM to keep track of important days like birthdays as well as items discussed (adult relationships can go months without speaking).

# Tips and Tricks

`todo`

# External Tools

**Bramses' Highly Opinionated Vault 2023** uses *a lot* of external tools and technologies. I firmly believe that each of these technologies plays a significant role in making Obsidian an ecosystem instead of a stand alone application. These tools serve as scouts, fetching information from different places and returning the goods to "home base". That being said, some/most/all have some form of financial component as well as their own learning curves, so I wouldn't be dissapointed if you don't want to use them. That said **Bramses' Highly Opinionated Vault 2023** works a lot better as a holistic system if you do.

### Tools Used

- Readwise ($)
- Alfred (Mac only) ($)
- Shortcuts (iOS only)
- Zotero
- GitHub
- Sync ($)
- Publish ($)

## Readwise

`todo`

## Alfred

`todo`

## Zotero

`todo`

## GitHub

`todo`

## Sync

`todo`

## Publish

`todo`

## Shortcuts (iOS)

`todo`

## Mobile Integration (General)

`todo`


# Installation

Great! Now that that's out of the way, we can finally get to running the vault, *phew*! 

1. Select `Use this Template` **or** `git clone https://github.com/bramses/bramses-highly-opinionated-vault-2023.git`
2. Download into your local machine
3. Open the vault and rename it to whatever you want and open it in Obsidian
4. Before you commit anything to GitHub, make sure you edit `.gitignore` to match what you want to publish. Doing this early will save you headaches down the road if you decide to publish (*part*) of your vault


## After You're Up and Running

After getting your sea legs for a few days (perhaps a week!) and you feel comfortable with **Bramses' Highly Opinionated Vault 2023** system, it will sadly be time for us to part and for you to forge onwards. You'll be able to safely delete the following files:

- README
- \_tests/\*
- Readwise/ (if you're not using the service)
- \_tutorial/\*
- \_PARA/Archive/Archived Project (*!Note: do not delete the Archive folder itself, just the example folder*)
- \_PARA/Projects/Test Project (*!Note: do not delete the Projects folder itself, just the example folder*)
- \_PARA/Projects/Test Project 2 (*!Note: do not delete the Projects folder itself, just the example folder*)
- /Computed/Trackers (if you're not using the Tracker Plugin)

...

## "Required" Plugins

Truly nothing in this vault is *required*, but if you want the full experience, these community plugins are quote-unquote mandatory:

The following is a list of these plugins as well as a one sentence blurb of how I use them in BHOV-2023 and why they create the fabric of the system.

- Auto Link Title
- Calendar
- Commander
- Dataview
- Folder Note
- Footnote Shortcut
- Hotkeys for Templates
- Kanban
- Luhmann
- Natural Language Dates
- Obsidian Git
- Omnisearch
- Periodic Notes
- QuickAdd
- Random Note
- Readwise (*look -- I really hate to put a paid subscription plugin on the "required" list, but this app is **so** good, it's really revolutionized my reading experience across Twitter/Kindle/blogs/podcasts. Plus their new [Reader](https://readwise.io/read) app is straight up awesome. A lot of the ease of this vault derives from Readwise, so don't use it at your own risk*)
- Recent Files
- Style Settings
- Supercharged Links
- Templater
- Timestamper
- Waypoint

...

## Optional Plugins

These plugins aren't needed, as some are QoL and others have a steep price tag attached (some even have both!). But these apps are no less critical to my workflow than the "Required" apps above, so I need to include them.

The following is a list of these plugins as well as a one sentence blurb of how I use them in BHOV-2023 and why you may be interested.

- Open in VSCode
- Map View
- Excalidraw
- [Shimmering Obsidian](https://github.com/chrisgrieser/shimmering-obsidian) (Alfred plugin)
- Full Calendar
-  New Tab Default Page
- Plugin Update Tracker
- GPT-3 Summarizer
- Obsidian Linter
- Ozan's Image in Editor Plugin
- Simple Embeds
- Settings Search
- Tag Wrangler
- Zotero (requires [Better BibTeX for Zotero plugin](https://github.com/retorquere/zotero-better-bibtex))
- Tracker

...


## Migration Guide for Current Obsidian Users

In the creation of BHOV-2023, the author was in the middle of his own migration from his vault of 1.5 years to BHOV. So this is all quite relevant!

First, the the questions you should ask yourself is: what about your current vault is necessary, what you'd like to change, and where you ideally want to be after migrating. Keep in mind, many of the tricks and strategies used in BHOV-2023 can be inserted into existing vaults, so you might not even need to make a full move!

## Settings

`todo`

# A Day in the Life - Real World Use

BHOV-2023 is only helpful if you can use it day in/day out as a tool to help you in life. Here's how I would use it in any random day (let's say Tuesday, perhaps):

Noon (wake up -- *I'm a night owl and a degenerate*) 🤷


...

## Special Case: Saturday or Sunday

Reflection is a critical component to the value of this vault, and so one day a week **must** be carved out to do reflection. This shouldn't take more than thirty minutes or so, but it does need to happen once a week, so choose what works best for you.

...


# Videos

- [BHOV-2023 Example Usage 2022-12-11 - YouTube](https://www.youtube.com/watch?v=28QZ3Zp9GBw&ab_channel=BramAdams)

# Final Word

`todo`

[^1]: hello from the future!
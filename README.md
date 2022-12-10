# Introduction

Welcome to **Bramses' Highly Opinionated Vault 2023**! Thanks for checking it out.

What you'll see in this repo is a **highly opinionated and unapologetic** way to use Obsidian. Note that  this is not the *only* way to use Obsidian, nor is it the *correct* way. But it is a way that works really well, especially once you understand the [philosophies](#Philosophies) behind it.

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
- GTD ([David Allen](https://gettingthingsdone.com/))
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

The Time Block Planning is great for weekly planning and quarterly planning as well. When combined with Templater (plugin) and Periodic Notes (plugin), Time Block Planning gives a great weekly review to look forward to.

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

Related philosophies:
- [CODE](#code)

## CODE

CODE by Tiago Forte tands for **Capture**, **Organize**, **Distill** and **Express**. Fast capture with minimal friction is a priority goal of BHOV-2023, because you never know when and where inspiration will strike. 

To do quick capture on my computer, I leverage Shimmering Obsidian and custom written shortcuts. This plugin is powerful because Alfred can be evoked anywhere on your Mac (while watching a video, browsing the web, etc.). This helps avoid the [Doorway effect](https://en.wikipedia.org/wiki/Doorway_effect#:~:text=The%20doorway%20effect%20is%20a,remained%20in%20the%20same%20place.). The plugin then puts the thought in our `Inbox/` for future processing. The important part is that we can **trust that our ideas will land in a place where we can process them later**. A similar process is done on my mobile device leveraging iOS shortcuts and Obsidian Sync.

These apps and plugins serve as scouts, running the long distance of time and space to place ideas in your trusted vault from anywhere in the world.

> In a nod to Greek history, the first marathon commemorated the [run](https://www.livescience.com/5359-perfect-running-pace-revealed.html) of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C. According to legend, Pheidippides ran the approximately 25 miles to announce the defeat of the [Persians](https://www.livescience.com/who-were-the-persians) to some anxious Athenians. Not quite in mid-season shape, he delivered the message "Niki!" (Victory!) then keeled over and died.

Organize and Distill will be discussed in the Progressive Summarization section, and Express in the Digital Garden and CMS sections.

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
> In a nod to Greek history, the first marathon commemorated the [run](https://www.livescience.com/5359-perfect-running-pace-revealed.html) of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C. According to legend, Pheidippides ran the approximately 25 miles to announce the defeat of the [Persians](https://www.livescience.com/who-were-the-persians) to some anxious Athenians. Not quite in mid-season shape, he delivered the message "Niki!" (Victory!) then keeled over and died.
> ...

Second pass:

> ...
> In a nod to Greek history, the first marathon commemorated the [run](https://www.livescience.com/5359-perfect-running-pace-revealed.html) of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C. According to legend, ==Pheidippides ran the approximately 25 miles to announce the defeat of the [Persians](https://www.livescience.com/who-were-the-persians) ==to some anxious Athenians. Not quite in mid-season shape, he delivered the message =="Niki!" (Victory!) then keeled over and died==.
> ...

Third pass:

The first marathon was run not for fun, but for duty. The messenger Pheidippides made the 25 mile trek on foot to pronounce victory (Niki!) to the Athenian citizens. He then promptly died.

To facilitate this process BHOV-2023 leverages Readwise and Note Refactor to do the three passes. Readwise is pass one, pass two is to exract salience and a title and tags (this can be done with AI thanks to GPT-3 Summarizer!), but a lot of the times I do it by hand. Finally, the tird pass is setting the note into it's final Zettelkasten state, and assigning to a PARA project, or leaving it in the root directory.

Plugins:
- Note Refactor
- Readwise
- GPT-3 Summarizer (optional)

Related Philosophies:
- Large Language Models
- Zettlekasten
- PARA

# Implementation

`todo`

## Elements of Markdown

### Footers

Footers serve two very important roles: citation and non destructive updates. Citation is used in the [Zettelkasten](#Zettelkasten), to help link a note to its source material.

Footers also make for great **non destructive updates** to notes. This means you can revisit an old note, and instead of altering it directly, you can append a footnote to the end of a thought, without changing the structural meaning of the original file. Think of it as sedimentary rock, or a really lightweight [VCS](#version-control-system). 

Footnote Shortcut combined with Natural Landguage Dates allows for super easy non destructive updates that serve as asides, knowledge from a wiser and smarter future you.[^1]


## Folder Structure

`todo`

## Tests

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


# Installation

Great! Now that that's out of the way, we can finally get to running the vault, *phew*! 

1. Select `Use this Template` **or** `git clone https://github.com/bramses/bramses-highly-opinionated-vault-2023.git`
2. Download into your local machine
3. Open the vault and rename it to whatever you want and open it in Obsidian


## After You're Up and Running

After getting your sea legs for a few days (perhaps a week!) and you feel comfortable with **Bramses' Highly Opinionated Vault 2023** system, it will sadly be time for us to part and for you to forge onwards. You'll be able to safely delete the following files:

- README
- \_tests/\*
- Readwise/ (if you're not using the service)
- \_tutorial/\*
- \_PARA/Archive/Archived Project (*!Note: do not delete the Archive folder itself, just the example folder*)
- \_PARA/Projects/Test Project (*!Note: do not delete the Projects folder itself, just the example folder*)
- \_PARA/Projects/Test Project 2 (*!Note: do not delete the Projects folder itself, just the example folder*)

## "Required" Plugins

Truly nothing in this vault is *required*, but if you want the full experience, these community plugins are quote-unquote mandatory:

- Auto Link Title
- Calendar
- Commander
- Dataview
- Excalidraw
- Folder Note
- Footnote Shortcut
- Kanban
- Natural Language Dates
- Obsidian Git
- Omnisearch
- Periodic Notes
- QuickAdd
- Random Note
- Readwise (*look -- I really hate to put a paid subscription plugin on the "required" list, but this app is **so** good, it's really revolutionized my reading experience across Twitter/Kindle/blogs/podcasts. Plus their new [Reader](https://readwise.io/read) app is straight up awesome. A lot of the ease of this vault derives from Readwise, so don't use it at your own risk*)
- Style Settings
- Supercharged Links
- Templater
- Waypoint

## Optional Plugins

These plugins aren't needed, as some are QoL and others have a steep price tag attached (some even have both!). But these apps are no less critical to my workflow than the "Required" apps above, so I need to include them.

- Open in VSCode
- Map View
- [Shimmering Obsidian](https://github.com/chrisgrieser/shimmering-obsidian) (Alfred plugin)
- Full Calendar
- GPT-3 Summarizer

# A Day in the Life - Real World Use

**Bramses' Highly Opinionated Vault 2023** is only helpful if you can use it day in/day out as a tool to help you in life. Here's how I would use it in any random day (let's say Tuesday, perhaps):

Noon (wake up -- *I'm a night owl and a degenerate*) 🤷


## Special Case: Saturday or Sunday

Reflection is a critical component to the value of this vault, and so one day a week **must** be carved out to do reflection. This shouldn't take more than thirty minutes or so, but it does need to happen once a week, so choose what works best for you.


# Final Word

`todo`

[^1]: [[2022-12-09]]: see what I mean?
---
aliases: [<% tp.date.now('yyyy') %>-W<% tp.date.now('ww') %>]
tags: [weekly]
title: <% tp.date.now('yyyy') %>-W<% tp.date.now('ww') %>
linter-yaml-title-alias: <% tp.date.now('yyyy') %>-W<% tp.date.now('ww') %>
date created: <% tp.date.now("dddd, MMMM Do YYYY, h:mm:ss a") %>
date modified: <% tp.date.now("dddd, MMMM Do YYYY, h:mm:ss a") %>
---

# <% tp.date.now('yyyy') %>-W<% tp.date.now('ww') %>

<< [[<% tp.date.now("YYYY") %>-W<% tp.date.now("WW") - -1%>]] | [[<% tp.date.now("YYYY") %>-W<% tp.date.now("WW") - -3 %>]] >>

Quarterly:  [[<% tp.date.now('yyyy') %>-Q<% Math.floor(tp.date.now('MM') / 4) + 1 %>]]


## Retro

### What Did I Finish This Week? (finished Writings, Finished Art Pieces, etc.)

### What Lessons Did I Learn This Week?

### What Should I Do Differently Next Week?

### What Still Puzzles Me?

### What Appointments Do I Have for the Upcoming Week? Are There Any Appointments I Need to Make?

## Open Projects

```dataview
table file.ctime as "started"
from "_PARA/Projects"
where file.name != "Scratchpad"
where file.name != "Kanban"
where file.name != "Projects"
where file.name != "Resources"
```
## Commitments

### todo/monday

### todo/tuesday


### todo/wednesday


### todo/thursday


### todo/friday


### todo/saturday


### todo/sunday
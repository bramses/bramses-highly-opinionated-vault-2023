---
aliases: [<% tp.date.now('yyyy') %>-Q<% Math.floor(tp.date.now('MM') / 4) + 1 %>]
tags: [quarterly]
title: <% tp.date.now('yyyy') %>-Q<% Math.floor(tp.date.now('MM') / 4) + 1 %>
linter-yaml-title-alias: <% tp.date.now('yyyy') %>-Q<% Math.floor(tp.date.now('MM') / 4) + 1 %>
date created: <% tp.date.now("dddd, MMMM Do YYYY, h:mm:ss a") %>
date modified: <% tp.date.now("dddd, MMMM Do YYYY, h:mm:ss a") %>
---

# <% tp.date.now('yyyy') %>-Q<% Math.floor(tp.date.now('MM') / 4) + 1 %>

## Retro

### What Did I Finish This Quarter? (finished Writings, Finished Art Pieces, etc.)

### What Lessons Did I Learn?

### What Still Puzzles Me?

### Archived Projects Last Quarter

```dataview
table file.ctime as "finished"
from "_PARA/Archive"
where date(completed) >= (date(this.file.ctime) - dur(84 days))
where file.name != "Scratchpad"
where file.name != "Kanban"
where file.name != "Archive"
where file.name != "Resources"
```


## Upcoming

### What Are Your Overall Goals for This Quarter?

### How Do These Goals Affect Your Life?

### What Projects Do You Plan on Completing?

<< [[<% tp.date.now("YYYY") %>-W<% tp.date.now("WW") - -1%>]] | [[<% tp.date.now("YYYY") %>-W<% tp.date.now("WW") - -3 %>]] >>

Quarterly:  [[<% tp.date.now('yyyy') %>-Q<% tp.date.now('MM') % 4 + 1 %>]]


# Retro

## What did I finish this week? (finished writings, finished art pieces, etc.)

## What lessons did I learn this week?

## What should I do differently next week?

## What still puzzles me?

## What appointments do I have for the upcoming week? Are there any appointments I need to make?

# Open Projects

```dataview
table file.ctime as "started"
from "_PARA/Projects"
where file.name != "Scratchpad"
where file.name != "Kanban"
where file.name != "Projects"
where file.name != "Readwise Resources"
```

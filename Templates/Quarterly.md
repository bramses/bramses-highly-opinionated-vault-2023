#quarterly

# Retro

## What did I finish this quarter? (finished writings, finished art pieces, etc.)

## What lessons did I learn?

## What still puzzles me?

## Archived Projects Last Quarter

```dataview
table file.ctime as "finished"
from "_PARA/Archive"
where date(completed) >= (date(this.file.ctime) - dur(84 days))
where file.name != "Scratchpad"
where file.name != "Kanban"
where file.name != "Archive"
where file.name != "Resources"
```


# Upcoming

## What are your overall goals for this quarter?

## How do these goals affect your life?

## What projects do you plan on completing?

#quarterly

# What are your overall goals for this quarter?

# How do these goals affect your life?

# What projects do you plan on completing?


# Finished Projects

```dataview
table file.ctime as "finished"
from "_PARA/Archive"
where date(completed) >= (date(this.file.ctime) - dur(84 days))
where file.name != "Scratchpad"
where file.name != "Kanban"
where file.name != "Archive"
where file.name != "Readwise Resources"
```










# Finished Projects

```dataview
table file.ctime as "finished"
from "_PARA/Archive"
where date(completed) >= (date(now) - dur(84 days))
where file.name != "Scratchpad"
where file.name != "Kanban"
where file.name != "Archive"
where file.name != "Readwise Resources"
```





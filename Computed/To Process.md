---
aliases: [To Process]
tags: []
title: To Process
date created: Tuesday, December 13th 2022, 2:33:51 pm
date modified: Thursday, December 15th 2022, 2:42:23 pm
linter-yaml-title-alias: To Process
---

```dataview
list
from "Inbox" OR "Readwise" OR "Readwise-Example"
where contains(file.tags, "#to-process")
```

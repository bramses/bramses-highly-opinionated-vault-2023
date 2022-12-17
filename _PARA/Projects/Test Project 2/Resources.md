---
aliases: [Resources]
tags: []
title: Resources
date created: Sunday, December 11th 2022, 1:55:45 am
date modified: Saturday, December 17th 2022, 4:59:55 pm
linter-yaml-title-alias: Resources
---

```dataview
list 
where contains(projects, "Test Project 2")
```

>[!info]  
> The following code block allows you to "freeze" the Dataview query result above into HTML.  
> If you use Obsidian Publish, this will allow you to publish the resource list as it is above.  
> I recommend running this, **after** you finish a project and are ready to commit it to _PARA/Archive.  
> To use: open command pallette, remove the spaces between < % and *, run "Templater: Replace all templates in Active File", and remove the triple backticks.

```
<%*
const dv = this.app.plugins.plugins["dataview"].api ;
const arr = await dv.queryMarkdown(`LIST where contains(projects, "Test Project 2")`)
tR += arr.value
%>
```

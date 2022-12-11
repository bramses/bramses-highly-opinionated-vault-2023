---
location: [48.8584, 2.2945]
---

#daily 


<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>

Week: [[<% tp.date.now('yyyy') %>-W<% tp.date.now('ww') %>]]


# Events That Happened Today

# Thoughts I Had Today


# Random Note Review
<%* const files = app.vault.getFiles().filter(f => f.path.includes(".md")); const random = Math.floor(Math.random() * (files.length - 1)); const random2 = Math.floor(Math.random() * (files.length - 1)); const random3 = Math.floor(Math.random() * (files.length - 1)); const randomNote = files[random]; const randomNote2 = files[random2]; const randomNote3 = files[random3] -%>

- [ ] [[<% randomNote.basename %>]]
- [ ] [[<% randomNote2.basename %>]]
- [ ] [[<% randomNote3.basename %>]]

<%* const todayIs = tp.date.now("YYYY-MM-DD") %>

# Capture Notes

```dataview
LIST FROM "Inbox"
WHERE contains(file.name, this.file.name)
```
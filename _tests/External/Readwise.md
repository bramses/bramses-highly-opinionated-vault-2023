---
tags: 
title: Readwise
date created: Thursday, December 8th 2022, 5:14:37 pm
date modified: Wednesday, December 14th 2022, 3:33:55 pm
---
If you use Readwise, you'll be able to have resources auto sync from Kindle + the web. They'll end up in the  `/Readwise` directory.

## Dataview Test (should Have One item)
```dataview
list from "Readwise" 
where contains(projects, "Test Project")
```

The following settings can be set in the [Obsidian Export Settings in Readwise](https://readwise.io/export/obsidian/preferences)

## Page Metadata Formatting

```
---
author: {% if author %}{{author}}{% endif %}
fullTitle: {{full_title}}
category: #{{category}}
source: {{source}}
date: [[{{date}}]]
time: {{time}}
{% if image_url -%}
imageURL: {{image_url}}
{% endif -%}
{% if book_id -%}
bookID: {{book_id}}
{% endif -%}
{% if document_tags -%}
documentTags: {% for tag in document_tags %}#{{tag}} {% endfor %}
{% endif -%}
{% if url -%}
url: {{url}}
{% endif -%}
projects: []
---
```


## Highlights Header Formatting

```
{% if is_new_page %}
## Highlights #to-process 
{% elif has_new_highlights -%}
## New highlights added {{date|date('F j, Y')}} at {{time}} #to-process 
{% endif -%}
```


## Highlight Formatting

```
---

> {{ highlight_text }}{% if highlight_location and highlight_location_url %} ([{{highlight_location}}]({{highlight_location_url}})){% elif highlight_location %} ({{highlight_location}}){% endif %}{% if highlight_tags %}
    - Tags: {% for tag in highlight_tags %} #{{tag}} {% endfor %}{% endif %}{% if highlight_note %}
    - Note: {{ highlight_note }}{% endif %}

---
```


## Sync Notification
```
- [[{{date|date('Y-m-d')}}]] {{time}} — Synced {{num_highlights}} highlight{{num_highlights|pluralize}} from {{num_books}} document{{num_books|pluralize}}.
{% for book in books %}    - {{ book.num_highlights_added}} highlights from {{ book.title }}
{% endfor %}
```
---
layout: default
title: "HDG Blog"
---

[Home](/) > {{ page.title }}

# {{ page.title }}

We take the time to write these blog posts in the hopes they will help you in some way. The topics are varied and if they are related to GitHub Issues the Issue will be linked in the post. Thank you for dropping by, and please consider commenting on our posts. We love to engage with the community. Posts are displayed by #tags for convenient reference.

{% for post in site.posts %}

## [ {{ post.title }} ]({{ post.url }}) 

**Author:** @{{post.author}} &bull; **Date:** {{post.date| date: "%m-%d-%Y" }} &bull; **Tags:** #DoLater, #ColorizeThis

{{ post.excerpt }}

[Continue Reading...]({{ post.url }})

{% endfor %}

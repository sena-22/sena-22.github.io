---
title: "Recursive"
layout: archive
permalink: categories/recursive
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.recursive %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}

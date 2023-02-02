---
title: "SEB41 Main Project"
layout: archive
permalink: categories/main-project
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.['main project'] %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}

---
title: "SEB41 Main Project"
layout: archive
permalink: categories/mini-project
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.['mini project'] %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}

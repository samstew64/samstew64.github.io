---
title: Projects
layout: page
lang: en
---

<a href="/en/#demo-reel" class="card projects-reel-button">
  ▶ Watch Demo Reel | A short overview of my various projects.
</a>

{% assign projects = site.projects | where: "lang", "en" %}

<div class="projects-grid">
{% for project in projects %}
  <a class="card project-card" href="{{ project.url }}">
    <div class="project-preview">
      {% if project.preview-static %}
        <img class="project-preview-static" src="{{ project.preview-static }}" alt="{{ project.title }} preview">
      {% endif %}
      {% if project.preview-animated %}
        <img class="project-preview-animated" src="{{ project.preview-animated }}" alt="{{ project.title }} hover preview">
      {% endif %}
    </div>
    <div class="project-info">
      <h3>{{ project.title }}</h3>
      <p class="tech"><strong>Tech:</strong> {{ project.tech }}</p>
      <p class="cta">View Details →</p>
    </div>
  </a>
{% endfor %}
</div>

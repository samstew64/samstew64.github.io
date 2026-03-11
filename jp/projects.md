---
title: プロジェクト
layout: page
lang: jp
---

<a href="/jp/#demo-reel" class="card projects-reel-button">
  ▶ 一般リールをご覧 | 一見で様々なプロジェクトの概要が見える
</a>

{% assign projects = site.projects | where: "lang", "jp" %}

<div class="projects-grid">
{% for project in projects %}
  <a class="card project-card" href="{{ project.url }}">
    <div class="project-preview">
      {% if project.preview %}
        <img src="{{ project.preview }}" alt="{{ project.title }} preview">
      {% endif %}
    </div>
    <div class="project-info">
      <h3>{{ project.title }}</h3>
      <p class="tech"><strong>技術：</strong> {{ project.tech }}</p>
      <p class="cta">詳細 →</p>
    </div>
  </a>
{% endfor %}
</div>

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
      <p class="tech"><strong>技術：</strong> {{ project.tech }}</p>
      <p class="cta">詳細 →</p>
    </div>
  </a>
{% endfor %}
</div>

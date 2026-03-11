---
title: ホーム
layout: page
lang: jp
custom_css: home
full_width: true
---

<section class="home-hero">

  {% assign slides = site.data.hero_videos %}
  {% assign slide_count = slides | size %}
  {% assign seconds_per_slide = 6 %}
  {% assign total_duration = slide_count | times: seconds_per_slide %}

  <div class="home-hero-bg"
  style="--slideshow-duration: {{ total_duration }}s;"
  data-slide-duration="{{ seconds_per_slide }}">
  {% for vid in slides %}
  <video
    class="home-hero-slide"
    src="{{ vid }}"
    muted
    playsinline
    loop
    preload="auto"
    style="animation-delay: {{ forloop.index0 | times: seconds_per_slide }}s;">
  </video>
  {% endfor %}
  </div>

  <div class="home-hero-content">
    <h1>初めまして、</h1>
    <h1>
      <span class="home-hero-accent">スチュワート・サミュエル</span>と
    </h1>
    <p class="home-hero-subtitle">
      ゲームエンジンの構築、ゲームプログラミング、またゲームプランナーに興味があるゲーム開発者
    </p>
    <div class="home-hero-actions">
      <a href="#demo-reel" class="home-btn primary">▶ 一般リールをご覧</a>
      <a href="/jp/projects/" class="home-btn ghost">プロジェクトをご覧</a>
    </div>
  </div>
</section>

<section id="demo-reel" class="home-section reel-section">
  <h2>一般リール</h2>

  <div class="reel-video-wrapper">
    <video
      id="reelVideo"
      controls
      muted
      preload="metadata"
      poster="/assets/images/reel-poster.png">
      <source src="/assets/videos/DemoReel_SamuelStewart.webm" type="video/webm">
    </video>
  </div>

  <p class="reel-caption">
    作品説明は<a href="/jp/projects/" class="home-hero-accent">【プロジェクト】</a>にあります
  </p>
</section>

<section class="home-section">
  <h2>技術スキル</h2>

  {% for category in site.data.skills_jp %}
  <div class="home-skill-block">
    <h3>{{ category[0] | capitalize }}</h3>
    <p>{{ category[1] | join: " • " }}</p>
  </div>
  {% endfor %}
</section>

---
title: Home
layout: page
lang: en
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
    <h1>Hi, I'm <span class="home-hero-accent">Samuel Stewart</span></h1>
    <p class="home-hero-subtitle">
      Aspiring game developer focused on engine architecture, gameplay programming, and game design.
    </p>
    <div class="home-hero-actions">
      <a href="#demo-reel" class="home-btn primary">▶ Watch Demo Reel</a>
      <a href="/en/projects/" class="home-btn ghost">View Projects</a>
    </div>
  </div>
</section>

<section id="demo-reel" class="home-section reel-section">
  <h2>Demo Reel</h2>

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
    Full breakdowns available in the <a href="/en/projects/" class="home-hero-accent">Projects</a> section.
  </p>
</section>

<section class="home-section">
  <h2>Core Skills</h2>

  {% for category in site.data.skills_en %}
  <div class="home-skill-block">
    <h3>{{ category[0] | capitalize }}</h3>
    <p>{{ category[1] | join: " • " }}</p>
  </div>
  {% endfor %}
</section>

---
title: My Fifth Blog Post
locale: sc
author: Astro Learner
description: "Post 5"
image:
  url: "https://docs.astro.build/assets/arc.webp"
  alt: "locale setting"
pubDate: 2026-01-08
tags: ["locale"]
---

Updated isActive() function - Added an isHome parameter that treats the home page specially. When isHome=true, it only highlights the home link when the current path exactly equals the locale root (en, /tc/, /sc/), not for any subpages.

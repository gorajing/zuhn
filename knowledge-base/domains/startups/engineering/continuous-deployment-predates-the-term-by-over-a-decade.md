---
id: INS-260404-AF08
domain: startups
topic: engineering
title: Continuous deployment predates the term by over a decade
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - continuous-deployment
  - devops
  - web-applications
  - software-delivery
sources:
  - type: blog
    title: 'Snapshot: Viaweb, June 1998'
    url: 'https://paulgraham.com/vw.html'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Viaweb did continuous releases in 1997 and fabricated version numbers only
    because the trade press expected them.
  standard: >-
    Viaweb practiced continuous deployment in the late 1990s — their software
    had no actual versions because they released continuously. They fabricated
    version numbers solely because the trade press expected them, even gaming
    the system by making the number an integer when they wanted extra attention.


    This reveals that continuous deployment wasn't invented by the DevOps
    movement of the 2010s — it was the natural delivery model for web-based
    software from the very beginning. What the DevOps movement actually
    contributed was tooling and process to make continuous deployment safe and
    reliable at scale. The original insight — that web software eliminates the
    need for discrete releases — was obvious to practitioners like Graham two
    decades earlier. This matters because it reframes CD not as an advanced
    practice to aspire to, but as the default state that packaging and
    distribution artificially interrupted.
stance: >-
  The practice of shipping code continuously without version numbers is a
  natural consequence of web-based software delivery, not an invention of the
  DevOps movement.
related:
  - INS-260403-0CA9
  - INS-260329-8F98
  - INS-260327-BE1F
  - INS-260324-E7A2
  - INS-260321-9EBB
evidence:
  - id: INS-260321-9EBB
    type: SUPPORTS
    classified_at: '2026-04-05'
---
Viaweb practiced continuous deployment in the late 1990s — their software had no actual versions because they released continuously. They fabricated version numbers solely because the trade press expected them, even gaming the system by making the number an integer when they wanted extra attention.

This reveals that continuous deployment wasn't invented by the DevOps movement of the 2010s — it was the natural delivery model for web-based software from the very beginning. What the DevOps movement actually contributed was tooling and process to make continuous deployment safe and reliable at scale. The original insight — that web software eliminates the need for discrete releases — was obvious to practitioners like Graham two decades earlier. This matters because it reframes CD not as an advanced practice to aspire to, but as the default state that packaging and distribution artificially interrupted.

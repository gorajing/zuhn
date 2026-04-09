---
id: INS-260323-189B
domain: psychology
topic: perception
title: >-
  A 1930s strobe photo still beats a 2020 research-grade slow-mo camera because
  spatial and temporal resolution are fundamentally traded off
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - tradeoffs
  - first-principles
  - resolution
  - measurement
sources:
  - type: youtube
    title: What Happens If You Keep Slowing Down?
    author: Veritasium
    url: 'https://youtu.be/P-4pbFcERnk'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Edgerton's single-frame strobe technique from the 1930s produces sharper
    images than a modern 20,000 FPS camera because it sacrifices all temporal
    resolution for maximum spatial resolution.
  standard: >-
    The video compares a research-grade slow-mo camera (2020, 20,000 FPS)
    against Edgerton's strobe technique (1930s, single frame) by shooting a
    bullet through a playing card. The strobe photo is dramatically sharper. The
    reason: spatial resolution and temporal resolution are fundamentally traded
    off in hardware. A fast sensor must read pixels quickly, so at higher frame
    rates you lose pixel count (at 1M FPS, you get 16x128 pixels). A strobe
    shoots one frame with the entire sensor, maximizing sharpness.


    This is a universal design principle: every system has a bandwidth budget.
    When you maximize one dimension (temporal resolution / speed / throughput),
    you necessarily sacrifice another (spatial resolution / depth / quality).
    The winners are those who understand which dimension matters for their
    specific problem and go all-in on that trade.
related:
  - INS-260323-22E8
  - INS-260325-2999
  - INS-260330-300D
  - INS-260323-9EEC
  - INS-260330-5EFD
  - INS-260409-C25D
stance: >-
  Edgerton's single-frame strobe technique from the 1930s produces sharper
  images than a modern 20,000 FPS camera because it sacrifices all temporal ...
evidence:
  - id: INS-260323-22E8
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260323-9EEC
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
---
The video compares a research-grade slow-mo camera (2020, 20,000 FPS) against Edgerton's strobe technique (1930s, single frame) by shooting a bullet through a playing card. The strobe photo is dramatically sharper. The reason: spatial resolution and temporal resolution are fundamentally traded off in hardware. A fast sensor must read pixels quickly, so at higher frame rates you lose pixel count (at 1M FPS, you get 16x128 pixels). A strobe shoots one frame with the entire sensor, maximizing sharpness.

This is a universal design principle: every system has a bandwidth budget. When you maximize one dimension (temporal resolution / speed / throughput), you necessarily sacrifice another (spatial resolution / depth / quality). The winners are those who understand which dimension matters for their specific problem and go all-in on that trade.

---
id: INS-260330-550F
domain: psychology
topic: learning
title: >-
  The 'unmixing paint' framing reveals that decomposition problems feel harder
  than composition
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - decomposition
  - problem-solving
  - framing
  - perception
  - asymmetry
sources:
  - type: youtube
    title: But what is the Fourier Transform?  A visual introduction.
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=spUNpyF58BY'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Decomposition feels impossibly hard because our intuition says mixing is
    irreversible — the Fourier Transform works by reframing the problem as
    detection rather than separation.
  standard: >-
    Adding sine waves together is trivially easy — you just sum the values. But
    reversing the process feels like unmixing paint, which our physical
    intuition says is impossible. 3Blue1Brown uses this framing deliberately: he
    names the perceived impossibility, then shows the Fourier Transform doesn't
    actually unmix anything. Instead, it builds a detection machine — sweeping
    through possible frequencies and checking which ones cause the wound-up
    signal to become lopsided.


    This asymmetry between composition and decomposition appears across many
    domains: it's easy to merge code branches but hard to untangle them, easy to
    combine ingredients but hard to identify them from the result, easy to
    encode information but hard to decode it. The recurring solution pattern is
    the same as the Fourier approach: don't try to reverse the mixing process
    directly. Instead, build a detector that tests for each possible component.
    This reframe from 'separation' to 'detection' is broadly applicable to
    decomposition problems.
stance: >-
  Humans intuitively understand combining signals but perceive decomposition as
  nearly impossible until given the right conceptual tool
related:
  - INS-260322-0AA6
  - INS-260327-E7B8
  - PRI-260328-23DB
  - INS-260327-0746
  - INS-260326-7B2C
  - INS-260330-1F25
  - INS-260330-A9F8
evidence:
  - id: INS-260326-7B2C
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Adding sine waves together is trivially easy — you just sum the values. But reversing the process feels like unmixing paint, which our physical intuition says is impossible. 3Blue1Brown uses this framing deliberately: he names the perceived impossibility, then shows the Fourier Transform doesn't actually unmix anything. Instead, it builds a detection machine — sweeping through possible frequencies and checking which ones cause the wound-up signal to become lopsided.

This asymmetry between composition and decomposition appears across many domains: it's easy to merge code branches but hard to untangle them, easy to combine ingredients but hard to identify them from the result, easy to encode information but hard to decode it. The recurring solution pattern is the same as the Fourier approach: don't try to reverse the mixing process directly. Instead, build a detector that tests for each possible component. This reframe from 'separation' to 'detection' is broadly applicable to decomposition problems.

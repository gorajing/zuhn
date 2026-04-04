---
id: INS-260404-6876
domain: startups
topic: engineering
title: Concentration gradients as the universal pattern for useful work
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - systems-design
  - energy-conversion
  - intermediaries
  - architecture
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Photosynthesis charges the thylakoid membrane like a battery by pumping
    protons to one side, then harvests that gradient through ATP synthase —
    useful work requires concentrated potential, not raw input.
  standard: >-
    In the light-dependent reactions, photon energy doesn't directly build
    glucose. Instead, it's converted through a multi-step electron transport
    chain that pumps hydrogen ions into the thylakoid, creating a concentration
    gradient. Those protons then flow through ATP synthase to produce ATP — the
    actual energy currency. The raw photon energy must be accumulated and
    concentrated before it becomes useful.


    This pattern appears in engineering and business systems alike. A startup
    can't convert raw user interest directly into revenue — it needs an
    intermediary concentration stage (a funnel, a waitlist, a content flywheel)
    that builds potential before conversion. In software architecture, event
    queues and message buffers serve the same function: accumulating signals
    until there's enough concentrated demand to justify processing. Systems that
    try to do useful work directly from raw inputs — without an accumulation
    gradient — tend to waste most of the energy.
stance: >-
  Every system that converts raw energy into useful work requires an
  intermediary stage where potential is concentrated into a gradient — skipping
  this accumulation step makes the energy unusable.
related:
  - INS-260330-9FAA
  - INS-260330-666E
  - INS-260330-1677
  - INS-260330-7E39
  - INS-260403-F249
  - INS-260403-37C4
  - INS-260404-95E9
  - INS-260404-F7C5
---
In the light-dependent reactions, photon energy doesn't directly build glucose. Instead, it's converted through a multi-step electron transport chain that pumps hydrogen ions into the thylakoid, creating a concentration gradient. Those protons then flow through ATP synthase to produce ATP — the actual energy currency. The raw photon energy must be accumulated and concentrated before it becomes useful.

This pattern appears in engineering and business systems alike. A startup can't convert raw user interest directly into revenue — it needs an intermediary concentration stage (a funnel, a waitlist, a content flywheel) that builds potential before conversion. In software architecture, event queues and message buffers serve the same function: accumulating signals until there's enough concentrated demand to justify processing. Systems that try to do useful work directly from raw inputs — without an accumulation gradient — tend to waste most of the energy.

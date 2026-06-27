---
id: INS-260626-A45A
domain: ai-development
topic: system-design
title: >-
  Project agent work spatially onto the file system to gain visibility and
  prevent collisions
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - visualization
  - observability
  - collision-detection
  - file-system
  - multi-agent
sources:
  - type: youtube
    title: 'AgentCraft: Putting the Orc in Orchestration — Ido Salomon'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kR64LOqBBCU'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Map directories and files to a visual space where agents appear as units,
    giving lineage tracking and a collision heat map instead of an opaque list
    of running sessions.
  standard: >-
    A flat list of 'what each agent can do' doesn't tell you what they are
    actually doing. Agent Craft instead projects the file system itself as a
    navigable map — directories as regions, files as rooms — and places each
    agent where it is working. This yields three things at once: you see in real
    time which file each agent touches, you get full lineage (which agent
    changed what, when), and because positions are spatial you can build a heat
    map of where multiple agents converge and proactively prevent collisions.
    The general principle is that observability for parallel agents should be
    spatial and continuous, not a textual status feed; encoding work onto a
    shared coordinate space turns 'are they stepping on each other?' into
    something you can literally see before damage is done.
stance: >-
  Rendering agents as units moving through a spatial map of your file system
  makes their work legible and lets you catch collisions before they happen.
related:
  - INS-260605-3163
  - INS-260605-0628
  - INS-260410-19DE
  - INS-260327-FE24
  - INS-260605-D710
---
A flat list of 'what each agent can do' doesn't tell you what they are actually doing. Agent Craft instead projects the file system itself as a navigable map — directories as regions, files as rooms — and places each agent where it is working. This yields three things at once: you see in real time which file each agent touches, you get full lineage (which agent changed what, when), and because positions are spatial you can build a heat map of where multiple agents converge and proactively prevent collisions. The general principle is that observability for parallel agents should be spatial and continuous, not a textual status feed; encoding work onto a shared coordinate space turns 'are they stepping on each other?' into something you can literally see before damage is done.

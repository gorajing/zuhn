---
id: INS-260627-A19B
domain: ai-development
topic: architecture
title: >-
  Progressive disclosure of skill metadata is what makes hundreds of skills
  composable
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-window
  - progressive-disclosure
  - composability
  - skills
sources:
  - type: youtube
    title: >-
      Don't Build Agents, Build Skills Instead – Barry Zhang & Mahesh Murag,
      Anthropic
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=CEvIs9y1uog'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Expose only lightweight skill metadata at runtime and lazily read the full
    skill.md and folder only when the agent decides to use it, so context budget
    scales to hundreds of skills.
  standard: >-
    Skills can contain a lot of information — scripts, executables, binaries,
    files, assets — and naively stuffing all of that into context would not fit.
    The design answer is progressive disclosure: at runtime only each skill's
    metadata is shown to the model to indicate the skill exists; when the agent
    decides it needs one, it reads in the rest of the skill.md, which holds the
    core instruction plus a directory to the rest of the folder, and everything
    else is organized for on-demand access. This is the same principle that lets
    scripts live in the filesystem until needed rather than always occupying the
    context window. The lesson for anyone building agent tooling: the constraint
    that determines how many capabilities an agent can carry is context budget,
    and lazy/tiered loading of capability descriptions is the unlock for
    composability at scale.
stance: >-
  Showing the model only skill metadata at runtime, and loading full
  instructions on demand, is the mechanism that lets an agent hold hundreds of
  skills without blowing the context window.
related:
  - PRI-260321-D74F
  - PRI-260411-9CB1
  - INS-260501-6453
  - INS-260605-B6BC
  - INS-260605-C86D
  - INS-260605-158D
  - INS-260605-205E
  - INS-260625-7A1A
  - INS-260625-4AB6
  - INS-260626-621D
---
Skills can contain a lot of information — scripts, executables, binaries, files, assets — and naively stuffing all of that into context would not fit. The design answer is progressive disclosure: at runtime only each skill's metadata is shown to the model to indicate the skill exists; when the agent decides it needs one, it reads in the rest of the skill.md, which holds the core instruction plus a directory to the rest of the folder, and everything else is organized for on-demand access. This is the same principle that lets scripts live in the filesystem until needed rather than always occupying the context window. The lesson for anyone building agent tooling: the constraint that determines how many capabilities an agent can carry is context budget, and lazy/tiered loading of capability descriptions is the unlock for composability at scale.

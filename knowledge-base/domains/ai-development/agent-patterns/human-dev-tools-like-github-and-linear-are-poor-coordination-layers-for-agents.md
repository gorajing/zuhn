---
id: INS-260605-5404
domain: ai-development
topic: agent-patterns
title: Human dev tools like GitHub and Linear are poor coordination layers for agents
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - coordination
  - github
  - linear
  - agent-swarms
  - tooling
  - human-in-the-loop
sources:
  - type: youtube
    title: 'The Missing Primitive for Agent Swarms — Lou Bichard, Ona'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=5Sui_OnSRlY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    GitHub and Linear were built for humans and break down as agent coordination
    layers — at swarm scale the stream of PRs, conflicts, and CI failures
    becomes too noisy for a human to know when to intervene.
  standard: >-
    When agents raise pull requests, resolve merge conflicts, and fix CI builds
    at scale, GitHub becomes 'incredibly noisy' — a human can no longer make
    sense of where to step in and intervene. Bichard notes that OpenAI's
    Symphony project built coordination on top of Linear but hit the same
    failure mode: reusing existing human tools 'in very weird ways for agents.'


    The principle is that coordination tooling for agents is a distinct problem
    from human project management, not a thin layer on top of it. Human tools
    optimize for a person reading a feed and making decisions; agent
    coordination needs deterministic state, programmatic handoffs, and
    intervention signals surfaced for humans only when they matter. Teams
    building agent infrastructure should expect to build (or adopt)
    purpose-built coordination rather than bolting agents onto GitHub/Linear.
stance: >-
  Repurposing human-built tools like GitHub and Linear as the coordination layer
  for agent swarms fails because they become unmanageably noisy at agent scale.
related:
  - INS-260323-4A3D
  - INS-260327-C1A4
  - INS-260327-EDF0
  - PRI-260328-1ED1
  - INS-260327-9EFE
  - INS-260410-9EA8
  - INS-260412-B89F
  - INS-260412-44FA
  - INS-260412-9F1D
  - INS-260605-3553
---
When agents raise pull requests, resolve merge conflicts, and fix CI builds at scale, GitHub becomes 'incredibly noisy' — a human can no longer make sense of where to step in and intervene. Bichard notes that OpenAI's Symphony project built coordination on top of Linear but hit the same failure mode: reusing existing human tools 'in very weird ways for agents.'

The principle is that coordination tooling for agents is a distinct problem from human project management, not a thin layer on top of it. Human tools optimize for a person reading a feed and making decisions; agent coordination needs deterministic state, programmatic handoffs, and intervention signals surfaced for humans only when they matter. Teams building agent infrastructure should expect to build (or adopt) purpose-built coordination rather than bolting agents onto GitHub/Linear.

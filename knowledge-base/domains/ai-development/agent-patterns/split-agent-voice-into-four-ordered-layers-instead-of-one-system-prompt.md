---
id: INS-260626-9D78
domain: ai-development
topic: agent-patterns
title: Split agent voice into four ordered layers instead of one system prompt
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-architecture
  - agent-design
  - brand-voice
  - layering
  - system-prompts
sources:
  - type: youtube
    title: >-
      Stop Writing Tone Instructions. Layer Them. - Isadora Martin-Dye, Isadora
      & Co
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ij-AU9dpJjc'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Decompose an agent's behavior into four layers — immutable identity,
    situational mode, example-anchored voice, and a post-generation veto —
    assembled in a fixed order rather than crammed into one prompt.
  standard: >-
    The standard advice of writing one detailed system prompt works on the
    'happy path' of anticipated questions but collapses on the edge case (turn
    21) because it forces a single mechanism to be inviolable, situational,
    expressive, and self-checking all at once. It handles the middle layers
    reasonably and falls apart at the edges. The fix is to pull those four jobs
    apart and give each a layer built for it: Layer 1 immutable identity (hard
    rules the brand structurally cannot violate), Layer 2 situational mode
    (real-time conditions about who the user is and what they're going through),
    Layer 3 example-anchored voice (the tone guide and phrase list), and Layer 4
    a post-generation veto. Every surface composes its prompt through one
    canonical assembly point, replacing scattered ad hoc prompts. The order is
    load-bearing: hard rules first, task last — like routing where the
    destination is fixed but conditions reshape the route, and you check for
    roadworks before turning, not after.
stance: >-
  A single system prompt cannot simultaneously enforce identity, adapt to
  situation, express voice, and check itself, so these jobs must be separated
  into distinct ordered layers.
related:
  - INS-260329-075C
  - INS-260605-0126
  - INS-260625-FA31
  - INS-260404-292E
  - INS-260625-A668
  - INS-260625-447A
---
The standard advice of writing one detailed system prompt works on the 'happy path' of anticipated questions but collapses on the edge case (turn 21) because it forces a single mechanism to be inviolable, situational, expressive, and self-checking all at once. It handles the middle layers reasonably and falls apart at the edges. The fix is to pull those four jobs apart and give each a layer built for it: Layer 1 immutable identity (hard rules the brand structurally cannot violate), Layer 2 situational mode (real-time conditions about who the user is and what they're going through), Layer 3 example-anchored voice (the tone guide and phrase list), and Layer 4 a post-generation veto. Every surface composes its prompt through one canonical assembly point, replacing scattered ad hoc prompts. The order is load-bearing: hard rules first, task last — like routing where the destination is fixed but conditions reshape the route, and you check for roadworks before turning, not after.

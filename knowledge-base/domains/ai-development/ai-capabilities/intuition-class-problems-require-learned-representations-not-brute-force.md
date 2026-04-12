---
id: INS-260412-DDD2
domain: ai-development
topic: ai-capabilities
title: 'Intuition-class problems require learned representations, not brute force'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - go
  - combinatorics
  - neural-networks
  - brute-force
  - intuition
sources:
  - type: youtube
    title: Google's Deep Mind Explained! - Self Learning A.I.
    author: ColdFusion
    url: 'https://www.youtube.com/watch?v=TnUYcTuZJpM'
date_extracted: '2026-04-12'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Go has more possible board positions than atoms in the universe, making
    brute-force impossible and forcing AlphaGo to develop intuition-like pattern
    recognition.
  standard: >-
    The Go breakthrough demonstrated a categorical shift in AI problem-solving.
    Previous game-playing AIs like Deep Blue used brute-force tree
    search—evaluate millions of positions and pick the best. Go's branching
    factor (~250 vs chess's ~35) made this impossible. AlphaGo instead learned
    to evaluate board positions holistically through neural networks, mimicking
    what human players call 'intuition.'


    This has broader implications: many real-world problems—drug discovery,
    materials science, climate modeling—share Go's property of having search
    spaces too vast for enumeration. The lesson is that when a problem's state
    space exceeds computational brute-force, you need learned representations
    that compress the space into tractable patterns. This is why deep learning
    has succeeded where symbolic AI stalled on complex real-world tasks.
stance: >-
  Problems with combinatorial explosion beyond brute-force search are better
  solved by learned neural representations than by exhaustive enumeration
related:
  - INS-260325-3D31
  - INS-260323-2FC3
  - INS-260327-A44E
  - INS-260330-8FF8
  - INS-260330-B5D2
  - INS-260405-0AE7
  - INS-260408-5BE5
  - INS-260409-0326
  - INS-260410-C045
  - INS-260412-37B2
---
The Go breakthrough demonstrated a categorical shift in AI problem-solving. Previous game-playing AIs like Deep Blue used brute-force tree search—evaluate millions of positions and pick the best. Go's branching factor (~250 vs chess's ~35) made this impossible. AlphaGo instead learned to evaluate board positions holistically through neural networks, mimicking what human players call 'intuition.'

This has broader implications: many real-world problems—drug discovery, materials science, climate modeling—share Go's property of having search spaces too vast for enumeration. The lesson is that when a problem's state space exceeds computational brute-force, you need learned representations that compress the space into tractable patterns. This is why deep learning has succeeded where symbolic AI stalled on complex real-world tasks.

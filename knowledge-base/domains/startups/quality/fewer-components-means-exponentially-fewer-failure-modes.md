---
id: INS-260404-E8B2
domain: startups
topic: quality
title: Fewer components means exponentially fewer failure modes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - complexity
  - abstraction
  - error-reduction
  - component-count
sources:
  - type: blog
    title: Programming Bottom-Up
    url: 'https://paulgraham.com/progbot.html'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Fewer components means fewer connections between them, and connection-count
    is where bugs actually live.
  standard: >-
    Graham draws an analogy to industrial design: just as designers strive to
    reduce moving parts in a machine, bottom-up programming reduces components
    in a program. The insight goes deeper than 'less code, fewer bugs.'
    Connections between components grow combinatorially — halving your component
    count can quarter your connection count.


    This is why the most reliable systems tend to be built from a few powerful
    abstractions rather than many simple ones. Each abstraction you introduce
    that genuinely captures a pattern in your domain doesn't just save lines of
    code — it eliminates an entire class of integration bugs. The leverage is
    non-linear, which is why experienced engineers obsess over finding the right
    abstraction rather than writing more code.
stance: >-
  Reducing component count through better abstraction cuts bugs non-linearly
  because inter-component connections grow faster than components themselves
related:
  - INS-260323-61CD
  - INS-260330-4C31
  - INS-260403-13E6
  - PRI-260406-7C54
  - PRI-260406-F95C
evidence:
  - id: INS-260329-D2CA
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260330-4C31
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260404-8908
    type: SUPPORTS
    classified_at: '2026-04-06'
---
Graham draws an analogy to industrial design: just as designers strive to reduce moving parts in a machine, bottom-up programming reduces components in a program. The insight goes deeper than 'less code, fewer bugs.' Connections between components grow combinatorially — halving your component count can quarter your connection count.

This is why the most reliable systems tend to be built from a few powerful abstractions rather than many simple ones. Each abstraction you introduce that genuinely captures a pattern in your domain doesn't just save lines of code — it eliminates an entire class of integration bugs. The leverage is non-linear, which is why experienced engineers obsess over finding the right abstraction rather than writing more code.

---
id: INS-260330-B4F1
domain: psychology
topic: learning
title: >-
  Greedy algorithms mirror human cognitive shortcuts — locally optimal but
  globally suboptimal
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - greedy-algorithms
  - cognitive-biases
  - decision-making
  - optimization
  - short-term-thinking
sources:
  - type: youtube
    title: 100+ Computer Science Concepts Explained
    author: Fireship
    url: 'https://www.youtube.com/watch?v=-uleG_Vecis'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Greedy algorithms and human snap-judgments share the same failure mode:
    optimizing locally while missing the global optimum.
  standard: >-
    Greedy algorithms make the locally best choice at each step without
    backtracking — like Dijkstra's shortest path. Humans do the same thing with
    cognitive biases: we pick the option that looks best right now without
    considering the full problem space. The CS insight is that greedy approaches
    work well when the problem has 'optimal substructure' (local optima lead to
    global optima), but fail catastrophically when they don't. Applied to
    decision-making: greedy is fine for routine decisions with predictable
    outcomes, but for high-stakes choices with complex dependencies (career
    moves, architecture decisions, investment strategies), you need the
    equivalent of dynamic programming — break the problem down, consider
    sub-problems, and factor in future states.
stance: >-
  Greedy algorithms that optimize for short-term benefit without considering the
  whole problem are the computational equivalent of human cognitive biases
  toward immediate gratification
related:
  - INS-260329-D8BC
  - INS-260329-2AB9
  - INS-260410-DA81
  - INS-260402-CCC3
  - PRI-260406-E5FB
  - INS-260329-4109
  - INS-260402-3C79
evidence:
  - id: INS-260330-C31B
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-2AB9
    type: CONTRADICTS
    classified_at: '2026-04-03'
  - id: INS-260402-3C79
    type: SUPPORTS
    classified_at: '2026-04-03'
---
Greedy algorithms make the locally best choice at each step without backtracking — like Dijkstra's shortest path. Humans do the same thing with cognitive biases: we pick the option that looks best right now without considering the full problem space. The CS insight is that greedy approaches work well when the problem has 'optimal substructure' (local optima lead to global optima), but fail catastrophically when they don't. Applied to decision-making: greedy is fine for routine decisions with predictable outcomes, but for high-stakes choices with complex dependencies (career moves, architecture decisions, investment strategies), you need the equivalent of dynamic programming — break the problem down, consider sub-problems, and factor in future states.

---
id: INS-260626-0D4B
domain: ai-development
topic: product-strategy
title: >-
  Rebuild the deterministic tool to be orders-of-magnitude faster before
  layering AI on it
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-tooling
  - feedback-loops
  - reinforcement-learning
  - developer-tools
  - optimization
sources:
  - type: youtube
    title: >-
      AI That Designs Its Own Chips: Ricursive's Anna Goldie and Azalia
      Mirhoseini
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=K05Dh-QjM8c'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Recursive first rebuilds slow chip-design tools to run ~100,000x faster,
    because fast iteration loops are what let AI exponentially learn and
    co-optimize across a huge space.
  standard: >-
    Recursive's stated approach is to first redesign existing EDA tools to run
    100,000x faster, then expose them to AI, because 'our AIs really like fast
    iteration loops and they can just exponentially learn more.' Their static
    timing analysis (STA) engine correlates with commercial tools at high
    fidelity but runs ~1,000x faster, which turns a once-a-day feedback signal
    into something an RL outer loop can call thousands of times.


    The non-obvious lesson generalizes well beyond chips: when an existing
    workflow involves a slow oracle (a simulator, a build, a verification pass,
    a commercial tool that takes days per iteration), the highest-leverage AI
    investment is often not a better model but a radically faster version of
    that oracle. AI's advantage compounds with the number of iterations it can
    afford, so collapsing per-iteration cost from days to seconds unlocks search
    and optimization that no amount of model cleverness can substitute for.
    Build the fast inner loop first; the AI outer loop is primed only once
    iteration is cheap.
stance: >-
  The binding constraint on applying AI to a domain is the iteration speed of
  its underlying tools, not model quality, so you should make the environment
  100,000x faster first.
related:
  - INS-260323-9B49
  - INS-260327-DE27
  - INS-260410-56A2
  - INS-260412-EDBF
  - INS-260412-7763
  - INS-260605-90FB
  - INS-260625-20D7
  - PRI-260328-49CB
  - PRI-260406-CBAC
  - PRI-260406-8FDF
---
Recursive's stated approach is to first redesign existing EDA tools to run 100,000x faster, then expose them to AI, because 'our AIs really like fast iteration loops and they can just exponentially learn more.' Their static timing analysis (STA) engine correlates with commercial tools at high fidelity but runs ~1,000x faster, which turns a once-a-day feedback signal into something an RL outer loop can call thousands of times.

The non-obvious lesson generalizes well beyond chips: when an existing workflow involves a slow oracle (a simulator, a build, a verification pass, a commercial tool that takes days per iteration), the highest-leverage AI investment is often not a better model but a radically faster version of that oracle. AI's advantage compounds with the number of iterations it can afford, so collapsing per-iteration cost from days to seconds unlocks search and optimization that no amount of model cleverness can substitute for. Build the fast inner loop first; the AI outer loop is primed only once iteration is cheap.

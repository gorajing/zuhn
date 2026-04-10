---
id: INS-260330-77E2
domain: ai-development
topic: system-building
title: Two-step lookahead search provides diminishing returns over one-step greedy
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - search-depth
  - optimization
  - greedy-algorithms
  - diminishing-returns
  - lookahead
sources:
  - type: youtube
    title: Solving Wordle using information theory
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=v68zYyaEmEA'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Two-step lookahead improved Wordle solving from 3.6 to 3.43 — significant
    but diminishing returns over greedy one-step.
  standard: >-
    The Wordle solver's progression tells a clear story about optimization
    depth: version 1 (greedy entropy, uniform priors) scored 4.124, version 2
    (greedy entropy + frequency priors + exploit switch) scored 3.6, and the
    final version with two-step lookahead scored 3.43. The jump from no priors
    to good priors (0.5 improvement) dwarfed the jump from one-step to two-step
    search (0.17 improvement).


    This pattern recurs in AI system design: the first level of optimization
    (getting the right objective function and priors) matters most, while deeper
    computational search yields diminishing improvements. It also establishes a
    practical bound — with ~11 bits of starting uncertainty and a maximum of ~10
    bits recoverable in two guesses, you're left with ~1 bit (2 possibilities)
    after optimal play, meaning a perfect score of 3 every time is
    mathematically impossible. Knowing your theoretical ceiling prevents wasted
    effort chasing unachievable goals.
stance: >-
  Searching two steps ahead for optimal Wordle play only improved the average
  from 3.6 to 3.43, suggesting that greedy entropy maximization captures most of
  the value and deeper search yields diminishing returns.
related:
  - INS-260330-4267
  - INS-260325-9C89
  - INS-260410-CAA4
  - PRI-260406-F95C
  - INS-260321-BFA3
evidence:
  - id: INS-260329-4986
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260402-2CAF
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
The Wordle solver's progression tells a clear story about optimization depth: version 1 (greedy entropy, uniform priors) scored 4.124, version 2 (greedy entropy + frequency priors + exploit switch) scored 3.6, and the final version with two-step lookahead scored 3.43. The jump from no priors to good priors (0.5 improvement) dwarfed the jump from one-step to two-step search (0.17 improvement).

This pattern recurs in AI system design: the first level of optimization (getting the right objective function and priors) matters most, while deeper computational search yields diminishing improvements. It also establishes a practical bound — with ~11 bits of starting uncertainty and a maximum of ~10 bits recoverable in two guesses, you're left with ~1 bit (2 possibilities) after optimal play, meaning a perfect score of 3 every time is mathematically impossible. Knowing your theoretical ceiling prevents wasted effort chasing unachievable goals.

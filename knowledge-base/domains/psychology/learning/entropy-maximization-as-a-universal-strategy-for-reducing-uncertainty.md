---
id: INS-260330-E982
domain: psychology
topic: learning
title: Entropy maximization as a universal strategy for reducing uncertainty
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - information-theory
  - decision-making
  - entropy
  - exploration
  - uncertainty
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
    Maximize expected information per action rather than chasing high-reward but
    unlikely outcomes.
  standard: >-
    In Wordle, guessing a word with uncommon letters like W feels great when it
    hits, but the expected information is lower because hits are rare. The
    mathematically optimal strategy is to maximize entropy — the expected bits
    of information across all possible outcomes. This principle generalizes
    beyond word games: when navigating any uncertain space (debugging, research,
    hiring), choose actions that reduce uncertainty most on average, not actions
    that would be most satisfying if they happened to work. A flat distribution
    of possible outcomes (where no single result dominates) indicates high
    entropy and therefore a high-quality exploratory action.


    This maps directly to how experts approach diagnosis — a doctor orders the
    test that best discriminates between remaining possibilities, not the test
    for the scariest disease. The formula is simple: information =
    log2(1/probability), and entropy = expected value of information across all
    outcomes.
stance: >-
  When exploring any unknown space, the optimal strategy is to choose actions
  that maximize expected information gain (entropy), not actions that feel most
  rewarding in the moment.
related:
  - INS-260330-70B9
  - INS-260403-508D
  - PRI-260328-3FEF
  - INS-260322-1A20
  - INS-260329-A90C
evidence:
  - id: INS-260322-1A20
    type: REFINES
    classified_at: '2026-04-03'
  - id: INS-260325-55D8
    type: SUPPORTS
    classified_at: '2026-04-03'
---
In Wordle, guessing a word with uncommon letters like W feels great when it hits, but the expected information is lower because hits are rare. The mathematically optimal strategy is to maximize entropy — the expected bits of information across all possible outcomes. This principle generalizes beyond word games: when navigating any uncertain space (debugging, research, hiring), choose actions that reduce uncertainty most on average, not actions that would be most satisfying if they happened to work. A flat distribution of possible outcomes (where no single result dominates) indicates high entropy and therefore a high-quality exploratory action.

This maps directly to how experts approach diagnosis — a doctor orders the test that best discriminates between remaining possibilities, not the test for the scariest disease. The formula is simple: information = log2(1/probability), and entropy = expected value of information across all outcomes.

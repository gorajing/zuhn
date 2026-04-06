---
id: INS-260330-70B9
domain: psychology
topic: cognitive-biases
title: High-information observations feel uninformative because they're common
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - information-theory
  - cognitive-biases
  - base-rate-neglect
  - probability
  - intuition
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
    The most likely outcomes feel least informative, but a strategy optimized
    for rare jackpots performs worse than one optimized for average information.
  standard: >-
    In Wordle, getting all gray tiles feels deflating — no letters matched! But
    an all-gray result from a well-chosen word like SLATE (6% probability) still
    gives you 3.9 bits minimum, cutting possibilities dramatically. Meanwhile, a
    rare green-heavy pattern feels amazing but is too unlikely to bet on. This
    mirrors base-rate neglect: people overweight vivid, low-probability outcomes
    and underweight common-but-informative ones.


    This bias affects real decisions. Investors chase unlikely 10x returns
    instead of optimizing expected value. Debuggers chase exotic failure modes
    instead of checking the most common causes first. The mathematical antidote
    is explicit: compute the expected information across ALL outcomes, not just
    the best-case scenario. The word WEARY scores 4.9 bits expected information
    despite having the exciting W, while SLATE scores 5.8 bits with its boring
    common letters — because SLATE's outcome distribution is flatter, meaning
    you reliably get useful information regardless of which pattern appears.
stance: >-
  People systematically undervalue common observations (like all-gray Wordle
  results) despite those observations carrying substantial information, because
  the psychological reward of rare hits overshadows the mathematical value of
  expected information.
related:
  - INS-260323-B849
  - INS-260330-E982
  - INS-260403-F4C9
  - INS-260325-0688
  - PRI-260328-3FEF
evidence:
  - id: INS-260325-24D1
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260323-B849
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260329-5C7A
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260325-0688
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
  - id: INS-260404-2E6C
    type: TRANSFERS_TO
    classified_at: '2026-04-06'
---
In Wordle, getting all gray tiles feels deflating — no letters matched! But an all-gray result from a well-chosen word like SLATE (6% probability) still gives you 3.9 bits minimum, cutting possibilities dramatically. Meanwhile, a rare green-heavy pattern feels amazing but is too unlikely to bet on. This mirrors base-rate neglect: people overweight vivid, low-probability outcomes and underweight common-but-informative ones.

This bias affects real decisions. Investors chase unlikely 10x returns instead of optimizing expected value. Debuggers chase exotic failure modes instead of checking the most common causes first. The mathematical antidote is explicit: compute the expected information across ALL outcomes, not just the best-case scenario. The word WEARY scores 4.9 bits expected information despite having the exciting W, while SLATE scores 5.8 bits with its boring common letters — because SLATE's outcome distribution is flatter, meaning you reliably get useful information regardless of which pattern appears.

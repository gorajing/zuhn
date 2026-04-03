---
id: INS-260329-BFBF
domain: psychology
topic: math-perception
title: >-
  Worst-case analysis reveals that optimism about average performance is the
  default human bias
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - complexity
  - estimation
  - cognitive-bias
  - risk-assessment
  - mathematics
sources:
  - type: youtube
    title: >-
      Data Structures Easy to Advanced Course - Full Tutorial from a Google
      Engineer
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Big-O notation forces worst-case thinking, which is the opposite of how
    humans naturally estimate outcomes.
  standard: >-
    Big-O notation only cares about the worst case — if searching an unsorted
    list for the number 7, the relevant scenario is when 7 is the very last
    element, not the average case where it's somewhere in the middle. It also
    only cares about behavior as input grows arbitrarily large, deliberately
    ignoring constants and small-n performance.


    This is profoundly counterintuitive. Humans naturally anchor to best-case or
    average-case scenarios. A startup founder estimates revenue assuming things
    go well. A project manager estimates timelines assuming no blockers. Big-O
    thinking inverts this: assume the worst arrangement of inputs, then ask if
    the system still performs acceptably. The course shows that constants don't
    matter at scale — an algorithm that's 3x faster at small inputs but has
    worse asymptotic complexity will eventually lose. This maps to business
    strategy: a pricing advantage (constant factor) is irrelevant if a
    competitor has a fundamentally better business model (better complexity
    class).
stance: >-
  Big-O notation's focus on worst-case behavior is counterintuitive because
  humans naturally reason about average or best cases, making worst-case
  thinking a discipline that must be deliberately cultivated
related:
  - INS-260330-2F13
  - INS-260329-8B1C
  - PRI-260403-88F5
  - INS-260327-9F46
  - PRI-260325-45A2
---
Big-O notation only cares about the worst case — if searching an unsorted list for the number 7, the relevant scenario is when 7 is the very last element, not the average case where it's somewhere in the middle. It also only cares about behavior as input grows arbitrarily large, deliberately ignoring constants and small-n performance.

This is profoundly counterintuitive. Humans naturally anchor to best-case or average-case scenarios. A startup founder estimates revenue assuming things go well. A project manager estimates timelines assuming no blockers. Big-O thinking inverts this: assume the worst arrangement of inputs, then ask if the system still performs acceptably. The course shows that constants don't matter at scale — an algorithm that's 3x faster at small inputs but has worse asymptotic complexity will eventually lose. This maps to business strategy: a pricing advantage (constant factor) is irrelevant if a competitor has a fundamentally better business model (better complexity class).

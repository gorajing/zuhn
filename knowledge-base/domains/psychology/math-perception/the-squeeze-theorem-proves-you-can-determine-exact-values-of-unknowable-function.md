---
id: INS-260329-76B8
domain: psychology
topic: math-perception
title: >-
  The squeeze theorem proves you can determine exact values of unknowable
  functions by bounding them between knowable ones
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mathematics
  - problem-solving
  - estimation
  - reasoning
sources:
  - type: youtube
    title: Calculus 1 - Full College Course
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=HfACrKJ_Y2w'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The squeeze theorem shows that if you can trap an unknown function between
    two functions that both approach the same limit, the unknown must approach
    that limit too — even if you can never evaluate it directly.
  standard: >-
    The squeeze theorem (also called the sandwich or pinching theorem)
    demonstrates a counterintuitive problem-solving strategy: when you cannot
    directly evaluate a function's behavior, bound it above and below by simpler
    functions whose behavior you can determine. If those bounds converge to the
    same value, the unknown function must converge there too. The classic
    example is x² sin(1/x) as x→0: sin(1/x) oscillates wildly and has no limit,
    but multiplying by x² traps it between -x² and x², both of which go to 0.


    This bounding strategy generalizes powerfully beyond calculus. In
    estimation, when you cannot know an exact value, establishing upper and
    lower bounds that converge gives you the answer without direct measurement.
    In decision-making under uncertainty, you don't need to predict the exact
    outcome — you need to bound the range of outcomes tightly enough to act.
    Fermi estimation, confidence intervals, and even the scientific method
    itself use variants of this squeeze logic: constrain the unknown from both
    sides until the uncertainty band is narrow enough to be useful.
stance: >-
  Bounding an unknown quantity between two known quantities that converge to the
  same value is a more powerful analytical technique than trying to measure the
  unknown directly.
related:
  - INS-260329-9CBB
  - INS-260329-356A
  - INS-260329-F8AF
  - INS-260329-C2E5
  - INS-260325-3611
---
The squeeze theorem (also called the sandwich or pinching theorem) demonstrates a counterintuitive problem-solving strategy: when you cannot directly evaluate a function's behavior, bound it above and below by simpler functions whose behavior you can determine. If those bounds converge to the same value, the unknown function must converge there too. The classic example is x² sin(1/x) as x→0: sin(1/x) oscillates wildly and has no limit, but multiplying by x² traps it between -x² and x², both of which go to 0.

This bounding strategy generalizes powerfully beyond calculus. In estimation, when you cannot know an exact value, establishing upper and lower bounds that converge gives you the answer without direct measurement. In decision-making under uncertainty, you don't need to predict the exact outcome — you need to bound the range of outcomes tightly enough to act. Fermi estimation, confidence intervals, and even the scientific method itself use variants of this squeeze logic: constrain the unknown from both sides until the uncertainty band is narrow enough to be useful.

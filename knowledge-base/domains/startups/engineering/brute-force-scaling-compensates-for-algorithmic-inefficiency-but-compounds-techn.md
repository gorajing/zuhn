---
id: INS-260403-C514
domain: startups
topic: engineering
title: >-
  Brute-force scaling compensates for algorithmic inefficiency but compounds
  technical debt
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - scaling
  - optimization
  - engineering-tradeoffs
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Plants produce massive quantities of inefficient RuBisCo plus cleanup
    enzymes rather than fixing the core algorithm—a biological version of
    scaling horizontally around bad code.
  standard: >-
    When RuBisCo began confusing O2 for CO2 as atmospheric oxygen rose, plants
    didn't evolve a better enzyme. Instead, they scaled production massively and
    evolved additional enzymes to break down the toxic phosphoglycolate
    byproduct into useful compounds. The 'fix' was more infrastructure around
    the broken component.


    This pattern recurs in software engineering: teams add caching layers, retry
    logic, and monitoring around a fundamentally flawed algorithm rather than
    rewriting it. The approach works—plants dominate Earth—but the compounding
    overhead is real. Engineering leaders should recognize when they're in
    'RuBisCo mode' and consciously decide whether the debt is acceptable or
    whether the system has crossed the threshold where a rewrite would pay off.
stance: >-
  Throwing more resources at a bad algorithm is a viable short-term strategy
  that becomes increasingly expensive as the system scales, creating a debt that
  may never be repaid
related:
  - INS-260329-D8BC
  - INS-260330-202A
  - INS-260403-532D
  - INS-260404-47F5
  - INS-260404-8256
  - INS-260404-B6E8
  - INS-260403-9442
evidence:
  - id: INS-260329-5ECD
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260329-D8BC
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
When RuBisCo began confusing O2 for CO2 as atmospheric oxygen rose, plants didn't evolve a better enzyme. Instead, they scaled production massively and evolved additional enzymes to break down the toxic phosphoglycolate byproduct into useful compounds. The 'fix' was more infrastructure around the broken component.

This pattern recurs in software engineering: teams add caching layers, retry logic, and monitoring around a fundamentally flawed algorithm rather than rewriting it. The approach works—plants dominate Earth—but the compounding overhead is real. Engineering leaders should recognize when they're in 'RuBisCo mode' and consciously decide whether the debt is acceptable or whether the system has crossed the threshold where a rewrite would pay off.

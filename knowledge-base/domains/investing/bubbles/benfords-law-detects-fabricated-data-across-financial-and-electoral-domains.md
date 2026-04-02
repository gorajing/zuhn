---
id: INS-260325-3B28
domain: investing
topic: bubbles
title: Benford's law detects fabricated data across financial and electoral domains
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - benfords-law
  - fraud-detection
  - statistics
  - forensic-accounting
sources:
  - type: youtube
    title: The Simplest Math Problem No One Can Solve - Collatz Conjecture
    author: Veritasium
    url: 'https://youtu.be/094y1Z2wpJg'
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Leading digits in natural datasets follow a logarithmic distribution (30%
    start with 1, <5% start with 9) — deviations flag fabricated financial or
    electoral data.
  standard: >-
    The Collatz hailstone numbers follow Benford's law: 30% of numbers start
    with 1, about 17.5% start with 2, and the frequency decreases
    logarithmically through 9. This same distribution appears in company
    valuations, country populations, physical constants, and Fibonacci numbers.
    The pattern emerges whenever data spans several orders of magnitude.


    Benford's law is actively used in forensic accounting and election
    monitoring. If tax return figures don't follow the expected digit
    distribution, it flags potential fraud. In elections, anomalous
    leading-digit distributions in vote counts can indicate irregularities. The
    key caveat: the law works best when numbers span several orders of
    magnitude, so applying it to constrained datasets (like precinct-level vote
    totals in a small district) can produce false positives.
stance: >-
  Naturally occurring numerical datasets spanning multiple orders of magnitude
  reliably follow Benford's law, and deviations signal human manipulation or
  fraud.
related:
  - PRI-260328-6CDE
  - INS-260323-8544
  - INS-260330-18F3
  - INS-260327-0595
  - PRI-260328-6136
  - INS-260327-A478
  - INS-260330-6CB7
---
The Collatz hailstone numbers follow Benford's law: 30% of numbers start with 1, about 17.5% start with 2, and the frequency decreases logarithmically through 9. This same distribution appears in company valuations, country populations, physical constants, and Fibonacci numbers. The pattern emerges whenever data spans several orders of magnitude.

Benford's law is actively used in forensic accounting and election monitoring. If tax return figures don't follow the expected digit distribution, it flags potential fraud. In elections, anomalous leading-digit distributions in vote counts can indicate irregularities. The key caveat: the law works best when numbers span several orders of magnitude, so applying it to constrained datasets (like precinct-level vote totals in a small district) can produce false positives.

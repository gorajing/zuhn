---
id: INS-260330-DECB
domain: psychology
topic: math-perception
title: >-
  Visual patterns in data often reflect measurement artifacts, not underlying
  structure
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - data-visualization
  - pattern-recognition
  - mathematical-reasoning
  - artifacts
sources:
  - type: youtube
    title: >-
      Why do prime numbers make these spirals? | Dirichlet’s theorem and pi
      approximations
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=EK32jo7i5LQ'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The prime number spirals arise from rational approximations of 2pi in the
    coordinate system, not from any property of primes themselves.
  standard: >-
    When prime numbers are plotted in polar coordinates where both r and theta
    equal the number itself, stunning spiral patterns emerge. The natural
    instinct is to attribute these patterns to deep structure within the primes.
    However, the spirals appear even when plotting ALL integers — they're
    artifacts of the fact that certain numbers of radians (6, 44, 710) closely
    approximate whole multiples of 2pi, creating residue classes that visually
    separate into spiral arms.


    This is a powerful meta-lesson for anyone working with data: the
    representation method itself can manufacture apparent patterns. The 44-arm
    spirals come from 22/7 approximating pi; the 280 rays come from 355/113
    approximating pi. The primes merely filter which arms are visible (removing
    those sharing factors with the modulus). Before attributing meaning to a
    visual pattern, always ask whether the pattern survives a change of
    representation.
stance: >-
  When striking patterns emerge from data visualization, the default hypothesis
  should be an artifact of the representation method rather than a property of
  the underlying data.
related:
  - INS-260330-083D
  - INS-260330-85AE
  - INS-260404-842D
  - INS-260330-B640
  - INS-260325-EB9E
---
When prime numbers are plotted in polar coordinates where both r and theta equal the number itself, stunning spiral patterns emerge. The natural instinct is to attribute these patterns to deep structure within the primes. However, the spirals appear even when plotting ALL integers — they're artifacts of the fact that certain numbers of radians (6, 44, 710) closely approximate whole multiples of 2pi, creating residue classes that visually separate into spiral arms.

This is a powerful meta-lesson for anyone working with data: the representation method itself can manufacture apparent patterns. The 44-arm spirals come from 22/7 approximating pi; the 280 rays come from 355/113 approximating pi. The primes merely filter which arms are visible (removing those sharing factors with the modulus). Before attributing meaning to a visual pattern, always ask whether the pattern survives a change of representation.

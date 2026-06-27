---
id: INS-260626-5367
domain: ai-development
topic: ai-capabilities
title: Model progress is concentrated in measured domains and flat in neglected ones
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - uneven-progress
  - benchmark-driven-development
  - creative-writing
  - game-design
  - domain-coverage
sources:
  - type: youtube
    title: 'What Do Models Still Suck At? - Peter Gostev, Arena.ai, BullshitBench'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=R7A8rX-09Zw'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Arena's expert-category data shows quantitative tasks (math, physics)
    dropping dramatically in dissatisfaction, while law, finance, creative
    writing, and especially game design stayed nearly flat.
  standard: >-
    Slicing Arena's expert prompts into categories reveals that progress is
    profoundly uneven. Quantitative work (math, physics) saw dissatisfaction
    fall sharply — matching the perception that models got much better at it.
    But on a fixed scale, creative writing improved only modestly, and law,
    finance, and game design barely moved. Gostev notes that LLMs still 'have no
    idea how to build actual games' — mechanics are incoherent and unchallenging
    — even accounting for people asking for more ambitious games now than two
    years ago.


    The implied mechanism is benchmark-driven development: capability flows
    toward whatever is densely measured and optimized against, leaving domains
    without good benchmarks (game design has none he's aware of) to stagnate.
    Aggregate 'the line goes up' charts average over this, hiding stagnant
    sub-distributions behind a few rapidly-improving ones.


    For practitioners, this argues against extrapolating a model's strength in
    math/code to weakly-measured domains, and for the field to deliberately
    build benchmarks that raise the *bottom* of the distribution rather than
    only pushing the frontier of already-strong areas.
stance: >-
  Capability gains are concentrated in heavily-benchmarked domains like math and
  code, while neglected domains such as game design, law, finance, and creative
  writing have barely improved.
related:
  - INS-260627-68CA
  - INS-260329-B062
  - INS-260403-22C2
  - INS-260626-518C
  - PRI-260321-14D8
---
Slicing Arena's expert prompts into categories reveals that progress is profoundly uneven. Quantitative work (math, physics) saw dissatisfaction fall sharply — matching the perception that models got much better at it. But on a fixed scale, creative writing improved only modestly, and law, finance, and game design barely moved. Gostev notes that LLMs still 'have no idea how to build actual games' — mechanics are incoherent and unchallenging — even accounting for people asking for more ambitious games now than two years ago.

The implied mechanism is benchmark-driven development: capability flows toward whatever is densely measured and optimized against, leaving domains without good benchmarks (game design has none he's aware of) to stagnate. Aggregate 'the line goes up' charts average over this, hiding stagnant sub-distributions behind a few rapidly-improving ones.

For practitioners, this argues against extrapolating a model's strength in math/code to weakly-measured domains, and for the field to deliberately build benchmarks that raise the *bottom* of the distribution rather than only pushing the frontier of already-strong areas.

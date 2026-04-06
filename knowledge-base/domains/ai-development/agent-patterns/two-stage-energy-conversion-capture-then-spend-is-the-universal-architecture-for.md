---
id: INS-260405-F3C0
domain: ai-development
topic: agent-patterns
title: >-
  Two-stage energy conversion — capture then spend — is the universal
  architecture for complex work
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - system-design
  - pipelines
  - buffering
  - intermediate-representation
  - decoupling
  - architecture
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Photosynthesis separates light capture (producing ATP/NADPH) from carbon
    fixation (the Calvin Cycle) because raw photon input is too volatile to
    drive complex chemistry directly.
  standard: >-
    Photosynthesis runs in two distinct stages that cannot be collapsed into
    one. Light-dependent reactions capture photon energy and convert it into
    stable chemical currencies — ATP and NADPH. Only then does the Calvin Cycle
    spend those currencies to do the actual useful work of building glucose. The
    intermediate currencies serve as a buffer: they smooth out the variability
    of incoming photons and provide a stable, controllable energy source for
    downstream chemistry.


    This two-stage architecture with an intermediate representation appears
    throughout complex systems precisely because raw inputs are rarely in the
    right form for direct use. Electrical grids convert fuel → electricity →
    work rather than burning fuel directly at the point of use. Compilers
    convert source → intermediate representation → machine code rather than
    emitting machine code directly. AI training pipelines convert raw data →
    embeddings → model weights rather than training directly on text. The
    intermediate layer decouples supply variability from consumption stability.


    For AI agent architecture specifically, this suggests that agents processing
    variable-quality, variable-rate inputs should convert them into a normalized
    intermediate representation before downstream reasoning — rather than
    feeding raw inputs directly into the reasoning layer. The intermediate
    representation (structured context, retrieved chunks, scored candidates) is
    the ATP of the pipeline: stable currency for expensive downstream work.
stance: >-
  Systems that efficiently perform complex work universally separate the
  energy-capture stage from the energy-expenditure stage, using an intermediate
  currency to decouple raw input volatility from downstream processing demands.
related:
  - INS-260404-9428
  - INS-260404-040D
  - INS-260404-9C57
  - INS-260405-C780
  - INS-260405-AE0D
  - INS-260330-2CFA
evidence:
  - id: INS-260404-9428
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260405-AE0D
    type: REFINES
    classified_at: '2026-04-05'
  - id: INS-260404-040D
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260405-C780
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260404-1B29
    type: EXTENDS
    classified_at: '2026-04-05'
  - id: INS-260330-2CFA
    type: EXTENDS
    classified_at: '2026-04-05'
---
Photosynthesis runs in two distinct stages that cannot be collapsed into one. Light-dependent reactions capture photon energy and convert it into stable chemical currencies — ATP and NADPH. Only then does the Calvin Cycle spend those currencies to do the actual useful work of building glucose. The intermediate currencies serve as a buffer: they smooth out the variability of incoming photons and provide a stable, controllable energy source for downstream chemistry.

This two-stage architecture with an intermediate representation appears throughout complex systems precisely because raw inputs are rarely in the right form for direct use. Electrical grids convert fuel → electricity → work rather than burning fuel directly at the point of use. Compilers convert source → intermediate representation → machine code rather than emitting machine code directly. AI training pipelines convert raw data → embeddings → model weights rather than training directly on text. The intermediate layer decouples supply variability from consumption stability.

For AI agent architecture specifically, this suggests that agents processing variable-quality, variable-rate inputs should convert them into a normalized intermediate representation before downstream reasoning — rather than feeding raw inputs directly into the reasoning layer. The intermediate representation (structured context, retrieved chunks, scored candidates) is the ATP of the pipeline: stable currency for expensive downstream work.

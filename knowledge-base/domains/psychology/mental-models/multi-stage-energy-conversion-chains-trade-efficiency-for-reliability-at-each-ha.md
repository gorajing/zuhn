---
id: INS-260404-2D92
domain: psychology
topic: mental-models
title: >-
  Multi-stage energy conversion chains trade efficiency for reliability at each
  handoff
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - electron-transport-chain
  - modularity
  - efficiency-tradeoffs
  - pipeline-architecture
  - energy-conversion
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The electron transport chain loses energy at every step but gains the
    ability to produce multiple useful outputs (ATP, NADPH, oxygen) from a
    single photon.
  standard: >-
    A photon's energy could theoretically be converted to chemical energy in one
    step, but photosynthesis instead passes excited electrons through four
    protein complexes (PSII → Cytochrome → PSI → NADP+ reductase), losing energy
    at each handoff. This seems wasteful — and it is, thermodynamically. But
    each handoff produces a different useful product: water splitting yields
    oxygen, the cytochrome complex pumps protons for ATP, and the final step
    produces NADPH.


    This maps directly to how effective organizations and software systems work.
    A monolithic single-step process might be theoretically more efficient, but
    a pipeline architecture with clear handoff points lets you extract value at
    each stage, debug failures at specific junctions, and evolve individual
    components independently. The 'inefficiency' of multiple stages is actually
    the cost of modularity — and modularity is what allows complex systems to
    persist and adapt over time.
stance: >-
  Complex processes that pass energy through multiple intermediate carriers lose
  total efficiency but gain modularity, repairability, and the ability to tap
  energy at different points along the chain.
related:
  - INS-260327-1C1B
  - INS-260330-3082
  - INS-260330-5C36
  - INS-260330-4B45
  - INS-260404-1CA4
  - INS-260404-596E
  - INS-260404-A08A
  - INS-260404-D916
  - INS-260404-1A3A
  - INS-260330-F671
---
A photon's energy could theoretically be converted to chemical energy in one step, but photosynthesis instead passes excited electrons through four protein complexes (PSII → Cytochrome → PSI → NADP+ reductase), losing energy at each handoff. This seems wasteful — and it is, thermodynamically. But each handoff produces a different useful product: water splitting yields oxygen, the cytochrome complex pumps protons for ATP, and the final step produces NADPH.

This maps directly to how effective organizations and software systems work. A monolithic single-step process might be theoretically more efficient, but a pipeline architecture with clear handoff points lets you extract value at each stage, debug failures at specific junctions, and evolve individual components independently. The 'inefficiency' of multiple stages is actually the cost of modularity — and modularity is what allows complex systems to persist and adapt over time.

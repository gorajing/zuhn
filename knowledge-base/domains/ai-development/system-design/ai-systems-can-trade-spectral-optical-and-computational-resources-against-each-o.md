---
id: INS-260627-7D01
domain: ai-development
topic: system-design
title: >-
  AI systems can trade spectral, optical, and computational resources against
  each other
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - system-design
  - computational-imaging
  - resource-tradeoffs
  - hardware-ai
  - measurement
sources:
  - type: paste
    title: >-
      Automated HER2 scoring with uncertainty quantification using lensfree
      holography and deep learning
    url: 'https://arxiv.org/pdf/2601.18219'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The HER2 paper treats color channels, propagation distance, ensemble size,
    and abstention thresholds as knobs in one measurement system.
  standard: >-
    The study does not only tune a neural network. It tests RGB versus
    monochrome holography, finds blue illumination strongest for DAB-stained
    HER2 tissue, varies digital propagation distance, compares single models
    versus five-model ensembles, and changes MC-dropout thresholds to trade
    coverage against correction rate. The best four-class accuracy occurred at a
    digital propagation distance near but not identical to the physical
    sample-sensor distance, and no propagation sharply damaged the equivocal
    class. This is a useful pattern for agent systems too: the best architecture
    often comes from co-optimizing sensing, representation, routing, and
    decision thresholds rather than maximizing one component in isolation.
stance: >-
  When AI is embedded in a measurement system, design space expands from model
  size alone to resource substitutions among optics, sensors, illumination,
  preprocessing, inference latency, and acceptable uncertainty.
related:
  - INS-260330-4329
  - INS-260405-7305
  - PRI-260328-36C3
  - INS-260626-5E7E
  - INS-260403-A5FF
---
The study does not only tune a neural network. It tests RGB versus monochrome holography, finds blue illumination strongest for DAB-stained HER2 tissue, varies digital propagation distance, compares single models versus five-model ensembles, and changes MC-dropout thresholds to trade coverage against correction rate. The best four-class accuracy occurred at a digital propagation distance near but not identical to the physical sample-sensor distance, and no propagation sharply damaged the equivocal class. This is a useful pattern for agent systems too: the best architecture often comes from co-optimizing sensing, representation, routing, and decision thresholds rather than maximizing one component in isolation.

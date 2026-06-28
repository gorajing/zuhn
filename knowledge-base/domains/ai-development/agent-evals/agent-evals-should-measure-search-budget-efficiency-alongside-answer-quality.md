---
id: INS-260628-4B02
domain: ai-development
topic: agent-evals
title: Agent evals should measure search-budget efficiency alongside answer quality
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - cost
  - search
  - scientific-computing
sources:
  - type: blog
    title: >-
      AdsMind: A Physics-Grounded Multi-Agent System for Self-Correcting
      Discovery of Adsorption Configurations on Heterogeneous Catalyst Surfaces
    url: 'https://arxiv.org/html/2606.19152'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AdsMind reaches high reliability with 4.11 and 4.67 MLFF relaxations per
    case, roughly a 14-fold reduction versus heuristic enumeration baselines.
  standard: >-
    AdsMind is not presented as exhaustive global-minimum discovery; it
    deliberately occupies a reliability-first, low-relaxation-budget regime.
    That budget discipline matters because each physical backend call is the
    scarce resource in computational catalysis, even when MLFFs make the calls
    much cheaper than DFT.


    For general agent evals, final quality should be paired with
    environment-call budget. A system that reaches an acceptable answer with a
    handful of calibrated calls is operationally different from one that reaches
    a slightly better answer through broad brute-force enumeration.
stance: >-
  Agent benchmarks miss an important capability dimension when they score only
  final answer quality and ignore the number of expensive environment calls
  consumed.
related:
  - INS-260326-CAAB
  - INS-260627-0444
  - INS-260628-E857
  - INS-260625-BF8B
  - INS-260605-33FA
---
AdsMind is not presented as exhaustive global-minimum discovery; it deliberately occupies a reliability-first, low-relaxation-budget regime. That budget discipline matters because each physical backend call is the scarce resource in computational catalysis, even when MLFFs make the calls much cheaper than DFT.

For general agent evals, final quality should be paired with environment-call budget. A system that reaches an acceptable answer with a handful of calibrated calls is operationally different from one that reaches a slightly better answer through broad brute-force enumeration.

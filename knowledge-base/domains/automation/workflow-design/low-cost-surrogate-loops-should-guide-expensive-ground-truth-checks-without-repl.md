---
id: INS-260628-E857
domain: automation
topic: workflow-design
title: >-
  Low-cost surrogate loops should guide expensive ground-truth checks without
  replacing them
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - automation
  - surrogate-models
  - validation
  - cost-curves
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
    AdsMind uses MLFF relaxations to reduce search cost but still checks
    representative outputs against DFT/PBE.
  standard: >-
    In adsorption discovery, exhaustive DFT search is too expensive because each
    relaxation can cost hundreds to thousands of CPU-hours. AdsMind shifts most
    search iterations to MACE-MP-0 MLFF relaxations, then validates six
    representative AA20 systems with VASP/PBE DFT to test whether the workflow
    preserves qualitative adsorption-energy sign.


    The durable automation lesson is to separate search control from final
    truth. Surrogate models can make an exploration loop affordable, but claims
    about scientific correctness still need calibrated, expensive reference
    checks at the points where decisions would change.
stance: >-
  The strongest automation pattern uses cheap surrogate feedback to control
  search, then reserves expensive ground-truth validation for representative
  claims.
related:
  - INS-260325-9C89
  - INS-260524-8320
  - INS-260625-E4F0
  - INS-260626-1012
  - INS-260626-43A1
  - INS-260628-4B02
  - INS-260628-252F
  - INS-260625-3A20
---
In adsorption discovery, exhaustive DFT search is too expensive because each relaxation can cost hundreds to thousands of CPU-hours. AdsMind shifts most search iterations to MACE-MP-0 MLFF relaxations, then validates six representative AA20 systems with VASP/PBE DFT to test whether the workflow preserves qualitative adsorption-energy sign.

The durable automation lesson is to separate search control from final truth. Surrogate models can make an exploration loop affordable, but claims about scientific correctness still need calibrated, expensive reference checks at the points where decisions would change.

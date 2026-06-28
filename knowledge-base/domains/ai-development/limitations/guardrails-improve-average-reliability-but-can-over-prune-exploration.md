---
id: INS-260628-252F
domain: ai-development
topic: limitations
title: Guardrails improve average reliability but can over-prune exploration
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - guardrails
  - exploration
  - tradeoffs
  - agents
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
    AdsMind's FORBID and termination mechanisms reduce wasted relaxations but
    can converge to local basins or over-prune site families in edge cases.
  standard: >-
    The paper explicitly frames AdsMind as a reliability-first workflow, not an
    exhaustive search method. Full AdsMind sometimes remains up to about 1 eV
    higher than broad-sampling baselines on structurally complex adsorbates, and
    a documented edge case shows FORBID constraints can over-prune a site family
    after an initially failed attempt.


    The transfer lesson is that guardrails are search-shaping policies, not free
    correctness. They need escape hatches, adaptive multi-seed exploration, or
    confidence thresholds when the cost of missing a valid basin is high.
stance: >-
  Closed-loop constraints should be treated as tunable search policies because
  the same mechanism that prevents repeated failures can suppress valid
  alternatives.
related:
  - INS-260628-E857
  - INS-260330-4079
  - INS-260628-0DE5
  - INS-260409-AB58
  - INS-260628-9115
---
The paper explicitly frames AdsMind as a reliability-first workflow, not an exhaustive search method. Full AdsMind sometimes remains up to about 1 eV higher than broad-sampling baselines on structurally complex adsorbates, and a documented edge case shows FORBID constraints can over-prune a site family after an initially failed attempt.

The transfer lesson is that guardrails are search-shaping policies, not free correctness. They need escape hatches, adaptive multi-seed exploration, or confidence thresholds when the cost of missing a valid basin is high.

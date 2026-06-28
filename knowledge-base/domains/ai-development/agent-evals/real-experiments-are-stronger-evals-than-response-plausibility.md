---
id: INS-260625-0E60
domain: ai-development
topic: agent-evals
title: Real experiments are stronger evals than response plausibility
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - verification
  - physical-feedback
  - ai-for-science
sources:
  - type: blog
    title: >-
      Self-Driving Chemistry Lab Discovers Catalysts That Can Switch Products on
      Demand | NC State News
    url: 'https://news.ncsu.edu/2026/06/self-driving-catalysis-discovery/'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The best eval is an environment that can measure whether the decision
    worked.
  standard: >-
    The source reports three optimization campaigns, measured product
    selectivity and turnover frequency, condition-programmable ligands, and
    validation of top candidates at 20 mL scale. Those claims are anchored in
    physical outcomes, not in the persuasiveness of generated explanations. For
    AI systems, this is the cleanest pattern: let the environment score actions
    whenever possible.
  deep: >-
    This supports the broader agent-eval principle that final-state checks beat
    output grading. If an agent claims a catalyst, a code patch, or a
    manufacturing plan works, the decisive evidence is execution in the target
    environment. Model-judged reasoning can help triage, but it cannot replace a
    measurement substrate.
stance: >-
  Flex-Cat credibility comes from measured catalyst outcomes across 680
  experiments and scale-up validation, which is a stronger evaluation signal
  than plausible chemical reasoning alone.
related:
  - INS-260605-EF23
  - INS-260625-8A55
  - INS-260625-25D6
  - INS-260627-FEBB
  - INS-260626-67E8
  - INS-260628-8FE6
  - INS-260626-B04D
  - INS-260627-47A6
  - INS-260628-0AC7
---
The source reports three optimization campaigns, measured product selectivity and turnover frequency, condition-programmable ligands, and validation of top candidates at 20 mL scale. Those claims are anchored in physical outcomes, not in the persuasiveness of generated explanations. For AI systems, this is the cleanest pattern: let the environment score actions whenever possible.

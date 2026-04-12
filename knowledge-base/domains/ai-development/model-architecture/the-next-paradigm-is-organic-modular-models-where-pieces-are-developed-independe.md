---
id: INS-260410-3271
domain: ai-development
topic: model-architecture
title: >-
  The next paradigm is organic, modular models where pieces are developed
  independently and distilled continuously
actionability: inspiration
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - mixture-of-experts
  - modularity
  - pathways
  - distillation
  - continual-learning
sources:
  - type: youtube
    title: 'Jeff Dean & Noam Shazeer — 25 years at Google: from PageRank to AGI'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=v0gjI__RyCY'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >
    Jeff Dean envisions a single 'organic blob' model where 100 teams
    independently train specialized modules (Southeast Asian languages, Haskell
    reasoning, medical imaging) that attach to a base, with continuous
    distillation cycling between big exploration and small efficient serving.
  standard: >-
    Today's Mixture-of-Experts models are structurally rigid — every expert is
    the same size, paths merge back together immediately, and the whole training
    run is a monolithic process that requires starting from scratch to test each
    idea. Dean argues this is both a research and an organizational bottleneck:
    scarce training runs force trade-offs like 'more multilingual data OR more
    coding data' that could be avoided if modules grew independently.


    The proposed future: a base model that grows organically, with variable-cost
    experts (some paths skip layers entirely, others go deep), connectivity that
    mirrors hardware topology (dense within a chip, sparse across pods, sparser
    across metros), and modules trained by distributed teams that then plug in.
    Distillation runs continuously in the background — each module maintains
    both a large exploratory version and a small distilled serving version,
    cycling between growth and compression. Pathways infrastructure was built
    for this but isn't yet being used for it in Gemini.


    This would also change the economics of who can train frontier models: you'd
    need enough HBM to hold the entire blob in memory, which favors companies
    with pod-scale interconnected hardware (Google's TPU advantage). It's a bet
    that the next architectural shift rewards infrastructure investment more
    than raw flops.


    Application: treat current MoE as a waypoint, not the destination. When
    designing long-lived AI infrastructure, plan for asynchronous module
    updates, variable-cost routing, and continuous distillation pipelines rather
    than fixed-topology models with periodic from-scratch retraining.
stance: >-
  Monolithic pre-training runs will give way to modular architectures where
  specialized sub-modules are developed in parallel by distributed teams and
  continuously distilled into a shared blob.
related:
  - INS-260323-8519
  - INS-260330-4D0E
  - INS-260330-52F6
  - INS-260405-C673
  - INS-260403-1C28
  - PRI-260411-56D8
  - INS-260410-F053
  - INS-260322-54F3
  - INS-260404-1C01
  - INS-260412-EB2D
---
Today's Mixture-of-Experts models are structurally rigid — every expert is the same size, paths merge back together immediately, and the whole training run is a monolithic process that requires starting from scratch to test each idea. Dean argues this is both a research and an organizational bottleneck: scarce training runs force trade-offs like 'more multilingual data OR more coding data' that could be avoided if modules grew independently.

The proposed future: a base model that grows organically, with variable-cost experts (some paths skip layers entirely, others go deep), connectivity that mirrors hardware topology (dense within a chip, sparse across pods, sparser across metros), and modules trained by distributed teams that then plug in. Distillation runs continuously in the background — each module maintains both a large exploratory version and a small distilled serving version, cycling between growth and compression. Pathways infrastructure was built for this but isn't yet being used for it in Gemini.

This would also change the economics of who can train frontier models: you'd need enough HBM to hold the entire blob in memory, which favors companies with pod-scale interconnected hardware (Google's TPU advantage). It's a bet that the next architectural shift rewards infrastructure investment more than raw flops.

Application: treat current MoE as a waypoint, not the destination. When designing long-lived AI infrastructure, plan for asynchronous module updates, variable-cost routing, and continuous distillation pipelines rather than fixed-topology models with periodic from-scratch retraining.

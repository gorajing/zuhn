---
id: INS-260626-3E1C
domain: ai-development
topic: model-architecture
title: >-
  Pair an always-on shared expert with sparse routing to hold capacity while
  paying little per token
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mixture-of-experts
  - sparse-models
  - active-parameters
  - inference-cost
  - gemma
sources:
  - type: youtube
    title: 'Gemma 4 Deep Dive — Cassidy Hardin, Researcher, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_A367W_qvc8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gemma 4's first MoE has 128 experts with only 8 activated per forward pass
    plus one always-on shared expert (3x the size of a regular expert), letting
    the 26B model run on just 3.8B active parameters.
  standard: >-
    Gemma 4's MoE block replaces the standard feedforward network with 128 small
    feedforward experts, of which a router selects 8 per forward pass, plus a
    single shared expert (3x a normal expert's size) that fires on every pass.
    This separation captures the computation common to all tokens in the
    always-on shared expert while reserving the sparse, routed experts for
    token-specific specialization.


    The economic result is that total representational capacity (26B parameters
    across all experts) is decoupled from per-token inference cost (only 3.8B
    active parameters per pass). This is the same decoupling theme that drives
    PLE on the small models — separate what the model can represent from what it
    must compute or hold in scarce memory for any single token — and it is why
    the 26B MoE stays competitive with the 31B dense model at a fraction of the
    active compute.
stance: >-
  A mixture-of-experts with one always-active shared expert plus sparse top-k
  routing lets a model carry large total capacity while spending only a fraction
  of it on any given token.
related:
  - INS-260605-9F16
  - INS-260327-EE5B
  - INS-260325-8F49
  - INS-260413-7816
  - INS-260410-3A08
---
Gemma 4's MoE block replaces the standard feedforward network with 128 small feedforward experts, of which a router selects 8 per forward pass, plus a single shared expert (3x a normal expert's size) that fires on every pass. This separation captures the computation common to all tokens in the always-on shared expert while reserving the sparse, routed experts for token-specific specialization.

The economic result is that total representational capacity (26B parameters across all experts) is decoupled from per-token inference cost (only 3.8B active parameters per pass). This is the same decoupling theme that drives PLE on the small models — separate what the model can represent from what it must compute or hold in scarce memory for any single token — and it is why the 26B MoE stays competitive with the 31B dense model at a fraction of the active compute.

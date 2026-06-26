---
id: INS-260605-6B24
domain: ai-development
topic: model-architecture
title: Continual / test-time training would break cloud batching economics
actionability: inspiration
confidence: low
shelf_life: time-sensitive
status: active
tags:
  - continual-learning
  - test-time-training
  - batching
  - cloud-economics
  - personalization
sources:
  - type: youtube
    title: 'Run Frontier AI at Home — Alex Cheema, EXO Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ESbWpPT_9-o'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cloud's cost advantage rests on batching identical model weights across
    millions of users; if continual learning gives each user their own evolving
    weights, batching collapses and local inference becomes ~10x more
    competitive.
  standard: >-
    Cloud inference is cheap because providers batch many users' requests
    through one shared set of model weights, climbing a utilization curve that a
    single local user can't access — which is the core reason local has
    historically looked expensive. Cheema's most speculative argument is that
    this advantage is fragile. He identifies three forces that reintroduce
    batching even for a single local user (multi-agent systems running 4-8
    agents per request, best-of-N / search-based test-time scaling, and
    continual learning) and notes Macs hit good utilization at batch size ~8.


    The sharpest version is continual learning / test-time training: if models
    are updated at inference time so that every user effectively runs a
    different set of weights, providers can no longer batch them together, and
    'context' as a concept dissolves because memory lives in the weights. In the
    extreme where the whole model changes per user, cloud batching breaks
    entirely and Cheema estimates local becomes ~10x more competitive. He flags
    this as low-confidence and timing-dependent (possibly only a small adapter
    changes, not the full model), but as a directional bet it reframes the
    local-vs-cloud question from a hardware problem into an
    economics-of-personalization problem.
stance: >-
  If per-user test-time training matures, cloud providers lose the ability to
  batch requests, structurally tilting cost advantage toward local inference.
related:
  - INS-260321-2D72
  - INS-260327-C962
  - INS-260410-58D6
  - INS-260322-5790
  - INS-260625-9B0C
  - INS-260327-5D5F
  - INS-260625-15FB
---
Cloud inference is cheap because providers batch many users' requests through one shared set of model weights, climbing a utilization curve that a single local user can't access — which is the core reason local has historically looked expensive. Cheema's most speculative argument is that this advantage is fragile. He identifies three forces that reintroduce batching even for a single local user (multi-agent systems running 4-8 agents per request, best-of-N / search-based test-time scaling, and continual learning) and notes Macs hit good utilization at batch size ~8.

The sharpest version is continual learning / test-time training: if models are updated at inference time so that every user effectively runs a different set of weights, providers can no longer batch them together, and 'context' as a concept dissolves because memory lives in the weights. In the extreme where the whole model changes per user, cloud batching breaks entirely and Cheema estimates local becomes ~10x more competitive. He flags this as low-confidence and timing-dependent (possibly only a small adapter changes, not the full model), but as a directional bet it reframes the local-vs-cloud question from a hardware problem into an economics-of-personalization problem.

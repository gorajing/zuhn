---
id: INS-260625-50A0
domain: ai-development
topic: ai-capabilities
title: 'Inference speed is becoming a capability axis, not just a cost lever'
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - inference
  - scaling
  - test-time-compute
  - reasoning
  - speculative-decoding
sources:
  - type: youtube
    title: 'Inference, Diffusion, World Models, and More | YC Paper Club'
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=wE1ZgJdt4uM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Once performance scales with how much a model thinks, the speed of inference
    becomes the ceiling on deliverable intelligence — not just a cost line.
  standard: >-
    The conventional framing treats inference as a cost-and-convenience problem:
    it dominates training spend at scale, and faster decoding just saves money
    or latency. Tanishq Kumar's argument inverts this. When you have a method
    whose performance scales with the amount of thinking it does (reasoning
    models, RL-as-inference, search-at-test-time), then tokens-per-second is
    literally the peak intelligence you can deliver in a fixed wall-clock
    budget. Inference speed stops being an efficiency metric and becomes a
    capability metric.


    This reframing changes where algorithmic effort should go. Speculative
    decoding is presented as a 'currency exchange' — spending FLOPs to buy
    latency by precomputing likely futures. Speculative speculative decoding
    (SSD) pushes further by parallelizing the inherently sequential draft→verify
    dependency: the draft model predicts the verifier's likely outcomes (correct
    ~80–90% of the time, enough for large speedups) and drafts the next round
    before verification finishes, hiding drafting latency entirely.


    The strategic implication: teams optimizing inference are not just cutting
    cloud bills, they are raising the intelligence ceiling of their product. For
    anyone building agentic or reasoning-heavy systems, inference engineering
    deserves the same R&D priority as model training, because the speed at which
    you can think is the intelligence you can ship.
stance: >-
  Tokens-per-second will increasingly equal the peak intelligence a system can
  deliver, making inference a capability frontier rather than a convenience or
  cost factor.
related:
  - INS-260325-7FAF
  - INS-260323-4D8D
  - INS-260323-8AEC
  - INS-260323-6C6F
  - INS-260327-BE4E
  - PRI-260328-D893
  - INS-260329-FCD3
  - INS-260330-3879
  - INS-260403-7342
  - INS-260403-CAAB
---
The conventional framing treats inference as a cost-and-convenience problem: it dominates training spend at scale, and faster decoding just saves money or latency. Tanishq Kumar's argument inverts this. When you have a method whose performance scales with the amount of thinking it does (reasoning models, RL-as-inference, search-at-test-time), then tokens-per-second is literally the peak intelligence you can deliver in a fixed wall-clock budget. Inference speed stops being an efficiency metric and becomes a capability metric.

This reframing changes where algorithmic effort should go. Speculative decoding is presented as a 'currency exchange' — spending FLOPs to buy latency by precomputing likely futures. Speculative speculative decoding (SSD) pushes further by parallelizing the inherently sequential draft→verify dependency: the draft model predicts the verifier's likely outcomes (correct ~80–90% of the time, enough for large speedups) and drafts the next round before verification finishes, hiding drafting latency entirely.

The strategic implication: teams optimizing inference are not just cutting cloud bills, they are raising the intelligence ceiling of their product. For anyone building agentic or reasoning-heavy systems, inference engineering deserves the same R&D priority as model training, because the speed at which you can think is the intelligence you can ship.

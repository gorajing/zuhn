---
id: INS-260423-6172
domain: ai-development
topic: hardware
title: >-
  Inference silicon and training silicon require architecturally opposite
  designs
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - silicon
  - inference
  - training
  - chip-design
  - hardware-architecture
sources:
  - type: youtube
    title: What You Can Learn From Our $20B Groq Deal
    author: Chamath Palihapitiya
    url: 'https://youtu.be/w2ZzdQmr0ec'
date_extracted: '2026-04-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Chamath: training is systems work with different traffic patterns; inference
    is north-south with separate prefill/decode, and SRAM-heavy designs that
    don't make sense for training crush at decode.
  standard: >-
    The silicon stack for AI divides cleanly along training versus inference
    boundaries. Training workloads are systems problems with high east-west
    bandwidth demand (gradient exchange across parallel devices), tolerate
    higher latency, and reward massive HBM capacity. Inference workloads have
    north-south traffic (input in, output out), latency-sensitive user loops,
    and split into structurally distinct prefill and decode phases. Groq's
    architectural bet — heavy SRAM usage, deterministic flow — makes no sense
    for training (you'd starve on capacity) but dominates for decode
    (low-latency deterministic throughput). The implication for the AI stack:
    there is no unified 'AI chip,' there are training chips and inference chips,
    and companies that try to split the difference produce middling
    architectures. Investors and operators should reject the framing 'what's the
    best AI chip?' — always ask for which workload.
stance: >-
  Optimizing a chip for AI training produces a different architecture than
  optimizing for AI inference; a chip designed for training will underperform at
  inference and vice versa
related:
  - INS-260325-E62D
  - INS-260327-991D
  - INS-260329-5F96
  - PRI-260407-7FB7
  - INS-260410-6FA3
  - INS-260410-CDE9
  - INS-260410-38C9
  - INS-260410-CB70
  - INS-260424-0554
  - INS-260326-0AB4
---
The silicon stack for AI divides cleanly along training versus inference boundaries. Training workloads are systems problems with high east-west bandwidth demand (gradient exchange across parallel devices), tolerate higher latency, and reward massive HBM capacity. Inference workloads have north-south traffic (input in, output out), latency-sensitive user loops, and split into structurally distinct prefill and decode phases. Groq's architectural bet — heavy SRAM usage, deterministic flow — makes no sense for training (you'd starve on capacity) but dominates for decode (low-latency deterministic throughput). The implication for the AI stack: there is no unified 'AI chip,' there are training chips and inference chips, and companies that try to split the difference produce middling architectures. Investors and operators should reject the framing 'what's the best AI chip?' — always ask for which workload.

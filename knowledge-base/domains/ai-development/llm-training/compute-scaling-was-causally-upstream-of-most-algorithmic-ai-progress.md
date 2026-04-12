---
id: INS-260410-0EF8
domain: ai-development
topic: llm-training
title: Compute scaling was causally upstream of most 'algorithmic' AI progress
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - scaling-laws
  - compute
  - software-progress
  - hardware
  - research-productivity
sources:
  - type: youtube
    title: AGI is still 30 years away — Ege Erdil & Tamay Besiroglu
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=WLBsUarvWTw'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Most headline software innovations in deep learning were really innovations
    in how to exploit more compute—so 'software-only singularity' stories that
    hold compute fixed are misspecified.
  standard: >-
    Looking at the last decade of AI progress, algorithmic efficiency gains
    track hardware improvements closely, matching a pattern seen across
    traditional software (about 30%/year growth matching Moore's law). The
    biggest deep learning innovations—the transformer (harnessing parallel
    compute), flash attention (more efficient attention), chinchilla scaling
    laws (better compute allocation)—were all hardware-motivated.


    Additional evidence: algorithmic innovation is concentrated in GPU-rich
    labs, not GPU-poor academia. AI researchers themselves report that cutting
    their compute 30x would cut their progress only 3x, implying compute and
    cognitive effort are strongly complementary, not independent. This
    undermines the software-only singularity story where automated AI
    researchers scale up indefinitely while compute stays fixed.


    The hard-won implication: once you automate AI researchers, you quickly
    become bottlenecked on experimental compute. How many orders of magnitude of
    software-only improvement are available before that bottleneck binds is the
    real question—and it's probably small.
stance: >-
  The major AI algorithmic innovations (transformers, flash attention,
  chinchilla scaling laws) were motivated by harnessing more hardware, so
  software progress is not independent of compute scaling.
related:
  - INS-260323-8DE7
  - INS-260327-F232
  - INS-260403-F8CB
  - INS-260404-9DBB
  - INS-260403-90FF
  - INS-260410-5036
  - INS-260410-AA40
  - PRI-260328-5F64
  - INS-260410-3D3B
---
Looking at the last decade of AI progress, algorithmic efficiency gains track hardware improvements closely, matching a pattern seen across traditional software (about 30%/year growth matching Moore's law). The biggest deep learning innovations—the transformer (harnessing parallel compute), flash attention (more efficient attention), chinchilla scaling laws (better compute allocation)—were all hardware-motivated.

Additional evidence: algorithmic innovation is concentrated in GPU-rich labs, not GPU-poor academia. AI researchers themselves report that cutting their compute 30x would cut their progress only 3x, implying compute and cognitive effort are strongly complementary, not independent. This undermines the software-only singularity story where automated AI researchers scale up indefinitely while compute stays fixed.

The hard-won implication: once you automate AI researchers, you quickly become bottlenecked on experimental compute. How many orders of magnitude of software-only improvement are available before that bottleneck binds is the real question—and it's probably small.

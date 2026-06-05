---
id: INS-260605-4835
domain: ai-development
topic: hardware
title: Apple's marketed Neural Engine is the wrong target for practical inference
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - neural-engine
  - gpu
  - core-ml
  - apple-silicon
  - developer-experience
sources:
  - type: youtube
    title: 'Why MLX — Prince Canuma, Neywa Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zTLJNHj0DeQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MLX deliberately runs on the GPU rather than the Neural Engine because
    reaching the Neural Engine requires Core ML, whose private-API friction
    makes it impractical for developers today.
  standard: >-
    A common confusion: developers see Apple promote the Neural Engine yet
    observe its utilization sitting at zero during inference. The reason is
    architectural — MLX targets the GPU, and the only way to actually use the
    Neural Engine is through Core ML, which Canuma describes as not running well
    and not being an easy developer experience due to private-API issues. The
    headline accelerator is effectively stranded for general-purpose LLM/VLM
    work.


    The practical guidance is to optimize for and monitor the GPU (tools like
    Mactop show real-time GPU/CPU usage), not chase Neural Engine metrics. The
    forward-looking nuance: Apple may be folding Neural-Engine-like components
    into the GPU itself (hints visible in the M5 series), and a Core ML fix at
    WWDC could enable hybrid GPU+Neural-Engine inference — but until then,
    betting your inference path on the Neural Engine is a mistake. A reminder
    that the most-marketed hardware capability is not always the one that's
    actually usable.
stance: >-
  Practical Apple Silicon inference should target the GPU, not the
  heavily-marketed Neural Engine, because the Neural Engine's only path (Core
  ML) has poor developer experience.
related:
  - INS-260328-92BC
  - INS-260330-C33B
  - INS-260403-76E9
  - INS-260514-817B
  - INS-260424-123B
  - INS-260410-4D1F
  - INS-260412-6FB6
---
A common confusion: developers see Apple promote the Neural Engine yet observe its utilization sitting at zero during inference. The reason is architectural — MLX targets the GPU, and the only way to actually use the Neural Engine is through Core ML, which Canuma describes as not running well and not being an easy developer experience due to private-API issues. The headline accelerator is effectively stranded for general-purpose LLM/VLM work.

The practical guidance is to optimize for and monitor the GPU (tools like Mactop show real-time GPU/CPU usage), not chase Neural Engine metrics. The forward-looking nuance: Apple may be folding Neural-Engine-like components into the GPU itself (hints visible in the M5 series), and a Core ML fix at WWDC could enable hybrid GPU+Neural-Engine inference — but until then, betting your inference path on the Neural Engine is a mistake. A reminder that the most-marketed hardware capability is not always the one that's actually usable.

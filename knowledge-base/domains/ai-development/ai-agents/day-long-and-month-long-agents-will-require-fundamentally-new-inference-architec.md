---
id: INS-260325-F981
domain: ai-development
topic: ai-agents
title: >-
  Day-long and month-long agents will require fundamentally new inference
  architectures
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - long-running-agents
  - inference-infrastructure
  - kv-cache
  - scaling
sources:
  - type: audio
    title: Gtc after hours
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Month-long agents will need entirely new inference systems — current serving
    stacks cannot handle persistent execution.
  standard: >-
    Redis Arc's Bama and NVIDIA's Gental both emphasized that extending agent
    execution from minutes to days or months creates qualitatively different
    infrastructure challenges, not just quantitative scaling. KV-cache for a
    month-long agent would explode in memory. You cannot simply save all
    existing KV-cache — you must intelligently discard less relevant cached
    states.


    Gental described this as requiring 'deep collaboration across model
    building, infrastructure stack, and applications together.' The panelists
    identified this as a genuinely open research area where new paradigms will
    emerge. For the inference stack, it means moving from request-response
    patterns to persistent session management with intelligent memory eviction —
    a problem space that looks more like operating system design than
    traditional ML serving.
stance: >-
  Serving infrastructure for agents that run for days or months will require
  completely rewritten systems for KV-cache management, memory hierarchy, and
  prefill optimization that do not exist today.
related:
  - PRI-260328-EE02
  - INS-260325-5F3B
  - INS-260327-E18C
  - INS-260321-8414
  - INS-260323-6C6F
  - INS-260403-1E5A
---
Redis Arc's Bama and NVIDIA's Gental both emphasized that extending agent execution from minutes to days or months creates qualitatively different infrastructure challenges, not just quantitative scaling. KV-cache for a month-long agent would explode in memory. You cannot simply save all existing KV-cache — you must intelligently discard less relevant cached states.

Gental described this as requiring 'deep collaboration across model building, infrastructure stack, and applications together.' The panelists identified this as a genuinely open research area where new paradigms will emerge. For the inference stack, it means moving from request-response patterns to persistent session management with intelligent memory eviction — a problem space that looks more like operating system design than traditional ML serving.

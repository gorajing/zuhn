---
id: INS-260626-FBB1
domain: ai-development
topic: llm-costs
title: Pair the smallest model with tools before reaching for a larger one
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-selection
  - cost-optimization
  - tool-use
  - small-models
  - code-execution
sources:
  - type: youtube
    title: 'Build & deploy AI-powered apps — Paige Bailey, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=G_bHFmEAarM'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A flyweight model with code execution drew correct Lego-brick bounding boxes
    'right out of the gate' for a fraction of a penny — faster and cheaper than
    the larger model that reached the same answer.
  standard: >-
    In a head-to-head compare-mode demo, Gemini 3.1 Flash Lite — the smallest
    model — with code execution turned on wrote Python, analyzed an image, and
    produced correct bounding boxes on green Lego bricks instantly, while the
    larger Flash model reached the same answer slower and at higher cost. Both
    cost 'well under a fraction of a penny.' Bailey's explicit recommendation:
    'strongly recommend experimenting with the smaller weight models, especially
    turning on these tools to help them do their work more effectively.'


    The principle inverts the common reflex to scale up the model when a task is
    hard. For structured perception (bounding boxes, segmentation masks, entity
    counting) and data-science work, the bottleneck is often a deterministic
    capability the model can offload to a sandboxed Python tool, not raw
    reasoning horsepower. Giving a cheap model the right tool closes the
    capability gap at a tiny fraction of the cost and latency of a frontier
    model. The decision order should be: smallest model first, add tools, and
    only escalate model size when tool-augmentation genuinely fails.
stance: >-
  On structured-perception tasks, the cheapest model plus code-execution tools
  beats upgrading to a larger model on both cost and latency.
related:
  - INS-260605-1787
  - INS-260605-3899
  - INS-260627-8CFF
  - INS-260627-51D0
  - INS-260605-D33F
---
In a head-to-head compare-mode demo, Gemini 3.1 Flash Lite — the smallest model — with code execution turned on wrote Python, analyzed an image, and produced correct bounding boxes on green Lego bricks instantly, while the larger Flash model reached the same answer slower and at higher cost. Both cost 'well under a fraction of a penny.' Bailey's explicit recommendation: 'strongly recommend experimenting with the smaller weight models, especially turning on these tools to help them do their work more effectively.'

The principle inverts the common reflex to scale up the model when a task is hard. For structured perception (bounding boxes, segmentation masks, entity counting) and data-science work, the bottleneck is often a deterministic capability the model can offload to a sandboxed Python tool, not raw reasoning horsepower. Giving a cheap model the right tool closes the capability gap at a tiny fraction of the cost and latency of a frontier model. The decision order should be: smallest model first, add tools, and only escalate model size when tool-augmentation genuinely fails.

---
id: INS-260410-D49F
domain: ai-development
topic: limitations
title: 'Continual learning is the real bottleneck, and may be shoehornable onto LLMs'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - continual-learning
  - fine-tuning
  - in-context-learning
  - architecture
sources:
  - type: youtube
    title: Some thoughts on the Sutton interview
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=u3HBJVjpXuw'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Continual learning is LLMs' most obvious gap, but SFT-as-tool-call and
    meta-learned across-window memory may replicate it without a paradigm shift.
  standard: >-
    Both Sutton and Patel agree: LLMs cannot learn on the job, and genuine AGI
    requires continuous high-throughput learning from environment interaction.
    Where they diverge is whether this requires abandoning the LLM paradigm for
    a new architecture or whether it can be bolted on.


    Patel proposes concrete shoehorn strategies. The cleanest: expose supervised
    fine-tuning as a tool the outer RL loop teaches the model to invoke — so the
    agent learns when and how to update its own weights to solve problems that
    don't fit in context. Another angle: in-context learning already
    demonstrates something resembling continual learning, and it emerged
    spontaneously from the pretraining incentive to process long sequences. If
    information could flow across window boundaries, meta-learning might extend
    that flexibility indefinitely.


    The operational takeaway: continual learning is worth watching as the single
    metric that matters most, but don't assume solving it requires throwing out
    transformers. The gap may be a feature to add, not a paradigm to replace.
stance: >-
  The lack of continual learning is LLMs' deepest gap, but it might be patchable
  with techniques like making supervised fine-tuning a tool-call the model
  invokes during task-solving — rather than requiring a whole new architecture.
related:
  - INS-260330-3D7B
  - INS-260329-9AE9
  - INS-260408-3691
  - INS-260409-2B5F
  - INS-260409-6DBE
  - PRI-260407-ED1C
  - INS-260329-B2F4
  - INS-260330-0102
---
Both Sutton and Patel agree: LLMs cannot learn on the job, and genuine AGI requires continuous high-throughput learning from environment interaction. Where they diverge is whether this requires abandoning the LLM paradigm for a new architecture or whether it can be bolted on.

Patel proposes concrete shoehorn strategies. The cleanest: expose supervised fine-tuning as a tool the outer RL loop teaches the model to invoke — so the agent learns when and how to update its own weights to solve problems that don't fit in context. Another angle: in-context learning already demonstrates something resembling continual learning, and it emerged spontaneously from the pretraining incentive to process long sequences. If information could flow across window boundaries, meta-learning might extend that flexibility indefinitely.

The operational takeaway: continual learning is worth watching as the single metric that matters most, but don't assume solving it requires throwing out transformers. The gap may be a feature to add, not a paradigm to replace.

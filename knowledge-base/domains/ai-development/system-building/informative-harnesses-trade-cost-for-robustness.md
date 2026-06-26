---
id: INS-260625-93FC
domain: ai-development
topic: system-building
title: Informative harnesses trade cost for robustness
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness-design
  - agent-evaluation
  - system-building
  - tool-use
sources:
  - type: blog
    title: The Interplay of Harness Design and Post-Training in LLM Agents
    url: 'https://arxiv.org/html/2606.25447'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A richer harness is not free performance; it embeds environment knowledge
    that must be paid for and measured.
  standard: >-
    The study defines h-low, h-mid, and h-high harnesses. h-mid adds valid tools
    to each step, while h-high adds richer tool descriptions and carrying-state
    information. The authors emphasize that h-mid and h-high require either
    expert design or costly exploration of the environment.


    The practical implication is that benchmark or production comparisons should
    report the harness knowledge budget, not only the model and training
    algorithm. If one agent receives admissible-action hints or hidden state
    summaries and another does not, the evaluation is partly measuring scaffold
    quality.
stance: >-
  Richer agent harnesses can improve robustness, but their apparent gains should
  be evaluated against the expert knowledge or exploratory cost required to
  build them.
related:
  - INS-260605-8F42
  - INS-260605-B930
  - INS-260619-6E08
  - INS-260626-C412
  - PRI-260426-890F
  - INS-260625-9096
---
The study defines h-low, h-mid, and h-high harnesses. h-mid adds valid tools to each step, while h-high adds richer tool descriptions and carrying-state information. The authors emphasize that h-mid and h-high require either expert design or costly exploration of the environment.

The practical implication is that benchmark or production comparisons should report the harness knowledge budget, not only the model and training algorithm. If one agent receives admissible-action hints or hidden state summaries and another does not, the evaluation is partly measuring scaffold quality.

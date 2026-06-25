---
id: INS-260625-9096
domain: ai-development
topic: agents
title: Harness design is part of the trained agent
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - harness-design
  - post-training
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
    Post-training results depend on the harness the agent sees during training,
    so harness choices are load-bearing system parameters.
  standard: >-
    The paper treats the harness as the scaffolding that controls tool exposure,
    tool descriptions, and per-step observation state. Its controlled ALFWorld
    extension shows that performance changes when the harness changes, even with
    the same task and model, and that these changes persist after post-training.


    For agent builders, this means prompts, tool descriptions, state summaries,
    admissible-action hints, memory surfaces, and validation feedback should be
    versioned and evaluated as first-class parts of the agent. A model trained
    or tuned under one harness has learned behavior coupled to that interface;
    swapping the harness later is not just a UI change.
stance: >-
  For tool-integrated LLM agents, the harness should be treated as part of the
  learned system rather than as a fixed engineering wrapper added after model
  training.
related:
  - INS-260329-FC53
  - INS-260330-5E03
  - INS-260605-E193
  - INS-260605-4856
  - INS-260605-C1A5
  - INS-260605-E230
  - INS-260605-062F
  - INS-260619-6E08
  - INS-260625-84D0
  - INS-260410-9DB0
---
The paper treats the harness as the scaffolding that controls tool exposure, tool descriptions, and per-step observation state. Its controlled ALFWorld extension shows that performance changes when the harness changes, even with the same task and model, and that these changes persist after post-training.

For agent builders, this means prompts, tool descriptions, state summaries, admissible-action hints, memory surfaces, and validation feedback should be versioned and evaluated as first-class parts of the agent. A model trained or tuned under one harness has learned behavior coupled to that interface; swapping the harness later is not just a UI change.

---
id: INS-260627-9068
domain: ai-development
topic: agent-patterns
title: 'Use LLMs to produce relevance masks, not just plans'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm
  - structured-output
  - relevance-masks
  - agent-patterns
  - robotics
sources:
  - type: blog
    title: >-
      Masked IRL: LLM-Guided Reward Disambiguation from Demonstrations and
      Language
    url: 'https://arxiv.org/html/2511.14565'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Masked IRL uses LLMs to convert language into binary state-relevance masks
    that supervise a downstream reward model.
  standard: >-
    The paper's useful architecture is not an end-to-end LLM robot controller.
    The LLM predicts which state dimensions matter for an instruction, then the
    reward learner uses those masks as supervision. This keeps the LLM in the
    semantic-disambiguation layer and leaves trajectory optimization to a domain
    model. The general design pattern is to make the language model produce a
    compact typed intermediate that a specialized optimizer can use.
  deep: >-
    For agent systems, the analogous move is to ask the model for relevance
    masks over files, tests, metrics, constraints, or evidence sources before
    action. A mask is easier to inspect and validate than a free-form plan, and
    it makes the next stage less likely to optimize against irrelevant context.
subtopic: structured-intermediates
stance: >-
  An LLM is most useful in this robotics loop as a structured interpreter of
  what matters, not as the controller that directly executes the task.
related:
  - INS-260329-34C0
  - INS-260605-9362
  - INS-260627-0818
  - INS-260410-684D
  - INS-260626-3ACC
  - INS-260627-8530
  - INS-260605-20C0
  - INS-260626-411D
  - INS-260627-C26A
---
The paper's useful architecture is not an end-to-end LLM robot controller. The LLM predicts which state dimensions matter for an instruction, then the reward learner uses those masks as supervision. This keeps the LLM in the semantic-disambiguation layer and leaves trajectory optimization to a domain model. The general design pattern is to make the language model produce a compact typed intermediate that a specialized optimizer can use.

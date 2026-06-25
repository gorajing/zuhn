---
id: INS-260625-DAE9
domain: ai-development
topic: system-design
title: Agent harnesses should be co-designed with evals
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - system-design
  - agent-evaluation
  - harness-design
  - engineering-workflow
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
  one_line: 'Do not optimize the model, scaffold, and eval suite as independent tracks.'
  standard: >-
    The paper's strongest system-level implication is that a harness-aware
    training setup changes both capability and OOD robustness. The authors
    conclude that harness-aware post-training is a prerequisite rather than a
    supplement for robust tool-integrated agents, while also limiting the claim
    to ALFWorld, two Qwen models, and two RL algorithms.


    For practical agent/eval work, treat every harness change as requiring new
    data and gates: trace-level evals should check valid tool calls, admissible
    tool calls, task completion, and behavior under tool-schema drift. This
    aligns with the local Zuhn principle that agent complexity must be earned by
    measured failures and that tool interfaces need design rigor comparable to
    human UIs.
stance: >-
  Production agent systems should design harnesses, post-training data, and
  evaluation gates together because each one changes the meaning of the others.
related:
  - INS-260605-2186
  - INS-260605-4D1D
  - INS-260404-8D91
  - INS-260403-BB23
  - INS-260403-E6F0
---
The paper's strongest system-level implication is that a harness-aware training setup changes both capability and OOD robustness. The authors conclude that harness-aware post-training is a prerequisite rather than a supplement for robust tool-integrated agents, while also limiting the claim to ALFWorld, two Qwen models, and two RL algorithms.

For practical agent/eval work, treat every harness change as requiring new data and gates: trace-level evals should check valid tool calls, admissible tool calls, task completion, and behavior under tool-schema drift. This aligns with the local Zuhn principle that agent complexity must be earned by measured failures and that tool interfaces need design rigor comparable to human UIs.

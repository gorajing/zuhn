---
id: INS-260625-84D0
domain: ai-development
topic: llm-training
title: Post-hoc harness upgrades recover little
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - post-training
  - harness-design
  - reinforcement-learning
  - agents
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
    If the deployment harness matters, put it in the training loop before tuning
    rather than bolting it on afterward.
  standard: >-
    The paper compares agents trained with h-mid or h-high against agents
    trained under h-low and given the richer harness only during evaluation.
    Training-time harness application consistently outperforms post-hoc
    application; for Qwen2.5-7B-Instruct with GRPO, the reported gap is 20.7
    points under h-mid and 22.5 points under h-high.


    For system-building, this argues against a common shortcut: tune an agent
    under a minimal harness, then add better tool descriptions, state summaries,
    or policy hints at deployment. The agent needs to learn its policy through
    the interface it will actually use.
stance: >-
  Adding a richer harness only at evaluation time is materially weaker than
  post-training the agent with that harness already in place.
related:
  - INS-260605-E230
  - INS-260625-9096
  - INS-260626-C412
  - INS-260605-E193
  - INS-260410-9DB0
---
The paper compares agents trained with h-mid or h-high against agents trained under h-low and given the richer harness only during evaluation. Training-time harness application consistently outperforms post-hoc application; for Qwen2.5-7B-Instruct with GRPO, the reported gap is 20.7 points under h-mid and 22.5 points under h-high.

For system-building, this argues against a common shortcut: tune an agent under a minimal harness, then add better tool descriptions, state summaries, or policy hints at deployment. The agent needs to learn its policy through the interface it will actually use.

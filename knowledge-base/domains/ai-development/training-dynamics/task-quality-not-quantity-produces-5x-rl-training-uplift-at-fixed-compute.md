---
id: INS-260605-33FA
domain: ai-development
topic: training-dynamics
title: 'Task quality, not quantity, produces 5x RL training uplift at fixed compute'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - data-quality
  - training-efficiency
  - agentic-tasks
  - snorkel
sources:
  - type: youtube
    title: 'Task Fidelity Scaling Laws — Kobie Crawdord, Snorkel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YYH0DMQr30A'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    In Snorkel's controlled RL run, high-quality tasks improved the base model
    ~6% versus ~1% for low-quality tasks — a 5x uplift from quality alone, same
    compute and task count.
  standard: >-
    Snorkel ran two RL training runs with the same model, the same compute
    budget, and the same number of tasks — varying only whether the tasks came
    from the 'accepted' (high-quality) or 'rejected' (low-quality) bucket. The
    low-quality set moved the base model about 1%; the high-quality set moved it
    about 6%. That ~5x difference is attributable purely to task fidelity, since
    every other variable was held fixed.


    The practical implication is that data-curation effort dominates compute
    spend in agentic RL. A team that doubles its compute on a noisy task set may
    underperform a team that spends the same compute on a rigorously vetted set
    a fraction the size. For anyone building RL environments or fine-tuning
    agents, the highest-leverage investment is a task-acceptance pipeline, not a
    bigger training run. Quality is the multiplier; quantity and compute are not
    substitutes for it.
stance: >-
  Holding compute and task count constant, curating for high task quality yields
  several times more RL improvement than adding more low-quality tasks.
related:
  - INS-260320-96C9
  - INS-260410-3A08
  - INS-260410-5088
  - INS-260410-5951
  - INS-260412-9777
  - INS-260605-0D57
  - INS-260625-43B3
  - PRI-260321-14D8
  - PRI-260406-8FDF
  - INS-260605-5983
---
Snorkel ran two RL training runs with the same model, the same compute budget, and the same number of tasks — varying only whether the tasks came from the 'accepted' (high-quality) or 'rejected' (low-quality) bucket. The low-quality set moved the base model about 1%; the high-quality set moved it about 6%. That ~5x difference is attributable purely to task fidelity, since every other variable was held fixed.

The practical implication is that data-curation effort dominates compute spend in agentic RL. A team that doubles its compute on a noisy task set may underperform a team that spends the same compute on a rigorously vetted set a fraction the size. For anyone building RL environments or fine-tuning agents, the highest-leverage investment is a task-acceptance pipeline, not a bigger training run. Quality is the multiplier; quantity and compute are not substitutes for it.

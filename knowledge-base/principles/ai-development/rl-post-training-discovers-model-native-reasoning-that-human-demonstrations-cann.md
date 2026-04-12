---
id: PRI-260411-ACEF
domain: ai-development
title: >-
  RL post-training discovers model-native reasoning that human demonstrations
  cannot specify
summary: >-
  Reinforcement learning works in post-training not just because it optimizes
  harder than supervised fine-tuning, but because LLM cognition differs from
  human cognition — human-written chains of thought are by definition
  human-optimal, not model-optimal. Only trajectory-level reward signals can
  discover the token sequences that reliably work for the model itself. DeepSeek
  R1-Zero proved this by learning complex reasoning with zero human data.
  Imitation learning is RL with episode length 1 (single-token reward);
  extending to full-trajectory RL is what unlocks reasoning, despite being
  'terrible' — just less terrible than any alternative. The implication:
  frontier reasoning capabilities emerge from reward design, not from human
  annotation at scale.
confidence: high
supporting_insights:
  - INS-260410-966F
  - INS-260410-8E1C
  - INS-260410-CDE9
  - INS-260410-E1D9
  - INS-260403-CDB0
  - INS-260403-B73D
  - INS-260322-3616
supporting_count: 7
tags:
  - reinforcement-learning
  - post-training
  - reasoning
  - rlhf
  - reward-design
  - model-cognition
  - imitation-learning
date_created: '2026-04-11'
last_reviewed: '2026-04-11'
resolutions:
  one_line: >-
    RL post-training discovers model-native reasoning that human demonstrations
    cannot specify
  standard: >-
    Reinforcement learning works in post-training not just because it optimizes
    harder than supervised fine-tuning, but because LLM cognition differs from
    human cognition — human-written chains of thought are by definition
    human-optimal, not model-optimal. Only trajectory-level reward signals can
    discover the token sequences that reliably work for the model itself.
    DeepSeek R1-Zero proved this by learning complex reasoning with zero human
    data. Imitation learning is RL with episode length 1 (single-token reward);
    extending to full-trajectory RL is what unlocks reasoning, despite being
    'terrible' — just less terrible than any alternative. The implication:
    frontier reasoning capabilities emerge from reward design, not from human
    annotation at scale.
lineage:
  compressed_at: '2026-04-11'
  source_insights:
    - id: INS-260410-966F
      relation: SUPPORTS
    - id: INS-260410-8E1C
      relation: SUPPORTS
    - id: INS-260410-CDE9
      relation: SUPPORTS
    - id: INS-260410-E1D9
      relation: REFINES
    - id: INS-260403-CDB0
      relation: SUPPORTS
    - id: INS-260403-B73D
      relation: EXTENDS
    - id: INS-260322-3616
      relation: SUPPORTS
  compression_trigger: 'COMPRESS flag — 63 insights, 1 principle (ratio 63:1)'
embedded: true
embedding_model: "nomic-embed-text"
---
Reinforcement learning works in post-training not just because it optimizes harder than supervised fine-tuning, but because LLM cognition differs from human cognition — human-written chains of thought are by definition human-optimal, not model-optimal. Only trajectory-level reward signals can discover the token sequences that reliably work for the model itself. DeepSeek R1-Zero proved this by learning complex reasoning with zero human data. Imitation learning is RL with episode length 1 (single-token reward); extending to full-trajectory RL is what unlocks reasoning, despite being 'terrible' — just less terrible than any alternative. The implication: frontier reasoning capabilities emerge from reward design, not from human annotation at scale.

---
id: INS-260625-3768
domain: ai-development
topic: llm-training
title: 'Use RL to change behavior, not to add knowledge'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - grpo
  - fine-tuning
  - behavior
  - model-training
sources:
  - type: youtube
    title: 'Stop Making Models Bigger, Make Them Behave — Kobie Crawford, Snorkel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TNwJ1LMiENk'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RL is better for behavior than for changing the core data and knowledge
    inside a model, so reach for it when the problem is how the model acts —
    tool use, error correction, discipline — not what it knows.
  standard: >-
    Crawford frames a useful intuition for choosing a training method: separate
    behavior from knowledge. The financial tool-use failure was a behavior
    problem — the model knew how to reason about growth rates but didn't act
    with discipline when using tools. That is precisely the kind of thing RL is
    good at shaping, because RL optimizes a policy over actions and their
    consequences rather than re-writing the latent facts in the weights.


    The practical heuristic: if the gap is in how the model behaves — sequencing
    tool calls, inspecting before acting, recovering from errors, adhering to a
    process — RL (here, GRPO) is the right time and method to intervene. If the
    gap is missing facts or domain knowledge, RL is the wrong tool; you'd want
    pretraining, continued pretraining, or retrieval instead. Misclassifying a
    behavior problem as a knowledge problem (or vice versa) wastes the most
    expensive part of the loop.


    Confidence is medium because this is presented as a working intuition
    validated on one task family, not a proven law — there are
    knowledge-adjacent behaviors and the boundary is fuzzy. But as a first-pass
    routing decision for 'which lever do I pull,' the behavior-vs-knowledge
    split is a clean and reusable frame. Relates to
    [[split-agents-8020-free-flowing-research-models-deterministic-hard-gated-validato]].
stance: >-
  Reinforcement learning is the right lever for changing a model's behavior, and
  the wrong lever for injecting new domain knowledge.
related:
  - INS-260323-DA4A
  - INS-260322-B641
  - INS-260328-3446
  - INS-260327-79E8
  - INS-260405-227C
  - INS-260330-4AD5
  - INS-260329-0432
  - INS-260410-1B17
  - INS-260514-1D60
  - INS-260530-E6AA
---
Crawford frames a useful intuition for choosing a training method: separate behavior from knowledge. The financial tool-use failure was a behavior problem — the model knew how to reason about growth rates but didn't act with discipline when using tools. That is precisely the kind of thing RL is good at shaping, because RL optimizes a policy over actions and their consequences rather than re-writing the latent facts in the weights.

The practical heuristic: if the gap is in how the model behaves — sequencing tool calls, inspecting before acting, recovering from errors, adhering to a process — RL (here, GRPO) is the right time and method to intervene. If the gap is missing facts or domain knowledge, RL is the wrong tool; you'd want pretraining, continued pretraining, or retrieval instead. Misclassifying a behavior problem as a knowledge problem (or vice versa) wastes the most expensive part of the loop.

Confidence is medium because this is presented as a working intuition validated on one task family, not a proven law — there are knowledge-adjacent behaviors and the boundary is fuzzy. But as a first-pass routing decision for 'which lever do I pull,' the behavior-vs-knowledge split is a clean and reusable frame. Relates to [[split-agents-8020-free-flowing-research-models-deterministic-hard-gated-validato]].

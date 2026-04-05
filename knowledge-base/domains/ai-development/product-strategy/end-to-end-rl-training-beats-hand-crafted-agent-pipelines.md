---
id: INS-260327-4CB3
domain: ai-development
topic: product-strategy
title: End-to-end RL training beats hand-crafted agent pipelines
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - agent-architecture
  - end-to-end-training
  - deep-research
sources:
  - type: youtube
    title: >-
      OpenAI’s Deep Research Team on Why Reinforcement Learning is the Future
      for AI Agents
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=bNEvJYzoa8A'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Optimizing directly for outcomes via RL produces more flexible, capable
    agents than human-designed graphs of LLM calls.
  standard: >-
    Josh Tobin contrasts two agent-building approaches: the common pattern of
    constructing a graph of operations with LLM nodes (where humans define the
    sequence of steps), versus end-to-end RL training where the model learns its
    own strategies. From his startup experience, he found that graph-based
    agents 'fall down pretty quickly in the real world' because you can't
    anticipate all scenarios, and the models aren't trained to make those
    specific node decisions.


    Deep Research demonstrates the alternative: a fine-tuned version of O3
    trained end-to-end on hard browsing tasks that learned creative search
    strategies emergently. The key insight is 'you get what you optimize for' --
    if you can set up a system to optimize directly for the outcome you want,
    results will be much better than gluing together models not optimized for
    the task. This suggests that the most powerful AI agents of the future will
    be RL-tuned for specific workflows, not prompt-engineered pipelines.
stance: >-
  Training agents end-to-end with reinforcement learning on real tasks produces
  superior results compared to building explicit multi-step pipelines with
  language model nodes.
related:
  - INS-260325-2FC1
  - INS-260325-4C6D
  - INS-260325-20C4
  - INS-260325-5F3B
  - PRI-260328-9F8C
  - INS-260322-CCAA
  - INS-260328-D826
  - INS-260329-C7BF
  - INS-260402-876A
  - INS-260403-4E16
evidence:
  - id: INS-260330-6AC1
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260403-4E16
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---
Josh Tobin contrasts two agent-building approaches: the common pattern of constructing a graph of operations with LLM nodes (where humans define the sequence of steps), versus end-to-end RL training where the model learns its own strategies. From his startup experience, he found that graph-based agents 'fall down pretty quickly in the real world' because you can't anticipate all scenarios, and the models aren't trained to make those specific node decisions.

Deep Research demonstrates the alternative: a fine-tuned version of O3 trained end-to-end on hard browsing tasks that learned creative search strategies emergently. The key insight is 'you get what you optimize for' -- if you can set up a system to optimize directly for the outcome you want, results will be much better than gluing together models not optimized for the task. This suggests that the most powerful AI agents of the future will be RL-tuned for specific workflows, not prompt-engineered pipelines.

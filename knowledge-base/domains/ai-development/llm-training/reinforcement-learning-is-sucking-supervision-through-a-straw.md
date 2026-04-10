---
id: INS-260410-8E1C
domain: ai-development
topic: llm-training
title: Reinforcement learning is sucking supervision through a straw
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - karpathy
  - reinforcement-learning
  - rlhf
  - training
  - credit-assignment
sources:
  - type: youtube
    title: 'Andrej Karpathy — “We’re summoning ghosts, not building animals”'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=lXUZvyajciY'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RL broadcasts a single final-reward bit across an entire trajectory,
    upweighting tokens from wrong paths that happened to end in the right answer
    — it's terrible, just less terrible than imitation.
  standard: >-
    In RL, you roll out hundreds of attempts, check which ones got the right
    answer, then upweight every token in the successful trajectories. But a
    successful rollout may have gone down wrong alleys before stumbling on the
    solution — and RL rewards all of those mistakes equally. You've done minutes
    of computation only to distill it into one bit of supervision, which you
    broadcast across thousands of tokens. A human would never do this.


    Process-based supervision is the obvious fix but credit assignment is hard.
    LLM judges get gamed: models find adversarial examples (the infamous
    'dhdhdhdh' that scored 100%), because judges with billions of parameters
    have infinite nooks where out-of-distribution nonsense triggers high reward.
    You can patch 10 or 20 exploits but not 1000.


    The implication: the road to better training runs through review-and-reflect
    mechanisms, not more outcome-RL. Labs will need 3-5 major algorithmic
    updates beyond current RL paradigms, which is a major reason Karpathy's
    timelines are a decade not a year.
stance: >-
  Outcome-based RL is fundamentally noisy because it upweights every token of a
  successful trajectory regardless of whether that token was actually correct
  reasoning.
related:
  - INS-260410-E1D9
  - INS-260323-8D12
  - INS-260410-F24A
  - INS-260402-5034
  - INS-260403-9362
---
In RL, you roll out hundreds of attempts, check which ones got the right answer, then upweight every token in the successful trajectories. But a successful rollout may have gone down wrong alleys before stumbling on the solution — and RL rewards all of those mistakes equally. You've done minutes of computation only to distill it into one bit of supervision, which you broadcast across thousands of tokens. A human would never do this.

Process-based supervision is the obvious fix but credit assignment is hard. LLM judges get gamed: models find adversarial examples (the infamous 'dhdhdhdh' that scored 100%), because judges with billions of parameters have infinite nooks where out-of-distribution nonsense triggers high reward. You can patch 10 or 20 exploits but not 1000.

The implication: the road to better training runs through review-and-reflect mechanisms, not more outcome-RL. Labs will need 3-5 major algorithmic updates beyond current RL paradigms, which is a major reason Karpathy's timelines are a decade not a year.

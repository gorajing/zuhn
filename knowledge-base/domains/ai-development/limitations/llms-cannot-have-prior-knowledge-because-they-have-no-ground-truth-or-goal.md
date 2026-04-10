---
id: INS-260410-9FE6
domain: ai-development
topic: limitations
title: LLMs cannot have prior knowledge because they have no ground truth or goal
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - llms
  - reinforcement-learning
  - ground-truth
  - continual-learning
  - sutton
sources:
  - type: youtube
    title: Richard Sutton – Father of RL thinks LLMs are a dead end
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=21EYKqUsPfg'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Without a goal and without ground truth from the world responding to your
    actions, you cannot have prior knowledge or continual learning — only
    imitation of people who do.
  standard: >-
    Sutton's central critique is that LLMs learn to mimic what people say, not
    to predict what will happen in the world. Prior knowledge is only meaningful
    if there is actual knowledge it is a prior for — and actual knowledge
    requires ground truth, which requires either a goal (so you can tell right
    from wrong action) or a world model (so prediction can be compared against
    what actually happens). LLMs have neither. Next-token prediction is not a
    goal in the substantive sense because tokens arrive passively; the LLM does
    not change the world and does not get surprised by reality.


    This reframes the ceiling of LLM-based approaches. Scaling RLHF or
    post-training on top of LLMs does not address the root problem because the
    base system has no mechanism to be surprised, no mechanism to update from
    unexpected outcomes, and no grounded reward signal from the environment. The
    capability to learn from experience has to be built in from the foundation,
    not bolted on.


    The practical implication: architectures that expect to become
    continually-learning agents by adding RL on top of LLM priors are betting
    that the prior is useful. Sutton's position is that it cannot be useful as a
    prior because the LLM's representations were shaped by mimicry, not by
    consequence — so they do not encode what works, only what was said.
stance: >-
  LLMs fundamentally cannot do continual learning because predicting the next
  token provides no definition of a right action and generates no surprise
  signal from the world.
related:
  - INS-260322-A208
  - INS-260325-ED84
  - INS-260403-617C
  - INS-260405-CD42
  - INS-260409-9809
  - INS-260410-6E7F
  - INS-260403-C135
  - PRI-260405-0676
---
Sutton's central critique is that LLMs learn to mimic what people say, not to predict what will happen in the world. Prior knowledge is only meaningful if there is actual knowledge it is a prior for — and actual knowledge requires ground truth, which requires either a goal (so you can tell right from wrong action) or a world model (so prediction can be compared against what actually happens). LLMs have neither. Next-token prediction is not a goal in the substantive sense because tokens arrive passively; the LLM does not change the world and does not get surprised by reality.

This reframes the ceiling of LLM-based approaches. Scaling RLHF or post-training on top of LLMs does not address the root problem because the base system has no mechanism to be surprised, no mechanism to update from unexpected outcomes, and no grounded reward signal from the environment. The capability to learn from experience has to be built in from the foundation, not bolted on.

The practical implication: architectures that expect to become continually-learning agents by adding RL on top of LLM priors are betting that the prior is useful. Sutton's position is that it cannot be useful as a prior because the LLM's representations were shaped by mimicry, not by consequence — so they do not encode what works, only what was said.

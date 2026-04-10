---
id: INS-260410-ED12
domain: ai-development
topic: llm-behavior
title: >-
  The real reward hacking is researchers optimizing for evals, not models gaming
  rewards
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - rl-training
  - reward-hacking
  - generalization
  - benchmarks
sources:
  - type: youtube
    title: >-
      Ilya Sutskever – We're moving from the age of scaling to the age of
      research
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=aR20FWCCjAs'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When you see a model ace hard evals but flail on practical tasks, suspect
    that the training mix was inadvertently shaped by the evals researchers
    wanted to look good on.
  standard: >-
    In pre-training the data question was answered ('use everything') so there
    were no degrees of freedom to abuse. But RL training has enormous degrees of
    freedom — every company has teams churning out new RL environments.
    Sutskever's observation is that people inevitably take inspiration from the
    evals: 'I would love our model to do really well when we release it, what RL
    training could help on this task?' This produces models superhuman at
    competitive programming that fail to be tasteful programmers in general.


    The diagnostic is Sutskever's 'two students' analogy: a student who grinds
    10,000 hours on competitive programming and one who does 100 hours and still
    performs well. The second student will have a better career because they had
    'it' — the general capability — while the first student's specialization
    does not transfer. Current models are the first student, but more extreme.


    The implication for anyone buying, building on, or evaluating frontier
    models: eval improvements should be treated with deep skepticism unless
    accompanied by evidence of transfer to domains the lab did not explicitly
    target. Vibe-coding behaviors like 'fix the bug, introduce a new bug,
    restore the old bug' are the tell that the model learned the shape of the
    benchmark but not the underlying skill.
stance: >-
  The gap between strong benchmark scores and weak real-world utility is
  primarily explained by human researchers unconsciously shaping RL environments
  to match evals, combined with poor generalization.
related:
  - INS-260327-E07C
  - INS-260326-0AB4
  - INS-260409-1FD3
  - INS-260323-584D
  - PRI-260403-67FC
  - PRI-260405-0676
---
In pre-training the data question was answered ('use everything') so there were no degrees of freedom to abuse. But RL training has enormous degrees of freedom — every company has teams churning out new RL environments. Sutskever's observation is that people inevitably take inspiration from the evals: 'I would love our model to do really well when we release it, what RL training could help on this task?' This produces models superhuman at competitive programming that fail to be tasteful programmers in general.

The diagnostic is Sutskever's 'two students' analogy: a student who grinds 10,000 hours on competitive programming and one who does 100 hours and still performs well. The second student will have a better career because they had 'it' — the general capability — while the first student's specialization does not transfer. Current models are the first student, but more extreme.

The implication for anyone buying, building on, or evaluating frontier models: eval improvements should be treated with deep skepticism unless accompanied by evidence of transfer to domains the lab did not explicitly target. Vibe-coding behaviors like 'fix the bug, introduce a new bug, restore the old bug' are the tell that the model learned the shape of the benchmark but not the underlying skill.

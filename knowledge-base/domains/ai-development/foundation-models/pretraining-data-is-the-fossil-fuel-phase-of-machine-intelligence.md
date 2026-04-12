---
id: INS-260410-F342
domain: ai-development
topic: foundation-models
title: Pretraining data is the fossil fuel phase of machine intelligence
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - pretraining
  - data-scaling
  - ilya-sutskever
  - bitter-lesson
  - historical-analogy
sources:
  - type: youtube
    title: Some thoughts on the Sutton interview
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=u3HBJVjpXuw'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pretraining data is to AGI what fossil fuels were to industrial
    civilization: finite and eventually replaced, but indispensable as the
    bridge to what comes next.
  standard: >-
    Sutskever's fossil-fuel analogy (which Patel endorses) reframes the common
    critique that LLMs are doomed because human data is finite. The argument:
    civilization did not regret using coal and oil despite their
    non-renewability — they were the cheap, plentiful, convenient intermediary
    that made the transition from water wheels to solar and fusion possible.


    Analogously, pretraining on human data is the only known way to cheaply
    bootstrap a prior rich enough to kickstart ground-truth RL. AlphaGo
    (conditioned on human games) was superhuman even though AlphaZero
    (bootstrapped from scratch) was stronger still — AlphaZero just needed
    vastly more compute. The human prior wasn't actively harmful; it just
    stopped being marginally useful at sufficient scale.


    This changes how to evaluate roadmaps: critiques that dismiss LLMs because
    'human data runs out' or 'it's not true learning from scratch' miss that the
    finite-resource phase can still be the load-bearing stage that makes the
    next phase reachable at all.
stance: >-
  Human-generated pretraining data is non-renewable and will eventually be
  superseded, but using it is a necessary intermediate stage, not a wrong turn —
  you cannot leap directly from 1800s water wheels to fusion.
related:
  - PRI-260328-D292
  - INS-260323-9BAB
  - INS-260412-4E72
  - INS-260330-19C3
  - INS-260330-03F7
---
Sutskever's fossil-fuel analogy (which Patel endorses) reframes the common critique that LLMs are doomed because human data is finite. The argument: civilization did not regret using coal and oil despite their non-renewability — they were the cheap, plentiful, convenient intermediary that made the transition from water wheels to solar and fusion possible.

Analogously, pretraining on human data is the only known way to cheaply bootstrap a prior rich enough to kickstart ground-truth RL. AlphaGo (conditioned on human games) was superhuman even though AlphaZero (bootstrapped from scratch) was stronger still — AlphaZero just needed vastly more compute. The human prior wasn't actively harmful; it just stopped being marginally useful at sufficient scale.

This changes how to evaluate roadmaps: critiques that dismiss LLMs because 'human data runs out' or 'it's not true learning from scratch' miss that the finite-resource phase can still be the load-bearing stage that makes the next phase reachable at all.

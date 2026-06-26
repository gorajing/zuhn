---
id: INS-260605-0BD6
domain: ai-development
topic: research-methodology
title: >-
  There is no single state-of-the-art model, only a Pareto front of quality vs.
  efficiency
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-selection
  - pareto-front
  - efficiency
  - benchmarking
  - tradeoffs
sources:
  - type: youtube
    title: >-
      20 days of compute vs 7 hours: rethinking what state-of-the-art means —
      Bertrand Charpentier, Pruna
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=hqHC6Z_lXyo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Plot quality against latency/cost and pick from the Pareto front—often
    several models tie on quality while differing 20x in speed.
  standard: >-
    Asking 'what is the single best model?' is the wrong question because
    quality and efficiency are separate axes. When you plot an Elo-style quality
    score against an efficiency metric (latency or price per generation), you
    get a Pareto front with three or four models on it, not one winner.
    Charpentier shows cases where quality scores cluster tightly (e.g. Elo
    1,100–1,200) while latency varies by 20x—meaning you can pick a model that
    is nearly as good but dramatically cheaper and faster.


    The practical move is to treat 'state of the art' as a set, then let your
    actual constraints (budget, latency SLA, target task) select within it. If
    you also know your specific use case, build the Pareto front against a
    task-specific quality metric rather than a general-capability score, which
    lets even smaller specialized models stay on the frontier. This reframes
    evaluation from 'find the best' to 'find the best for this cost envelope.'
stance: >-
  Model selection should optimize a quality-vs-efficiency Pareto front, not pick
  the single highest-quality model.
related:
  - PRI-260426-9730
  - INS-260605-E4BB
  - INS-260605-DA98
  - INS-260625-C735
  - INS-260327-6A4B
  - INS-260605-5983
---
Asking 'what is the single best model?' is the wrong question because quality and efficiency are separate axes. When you plot an Elo-style quality score against an efficiency metric (latency or price per generation), you get a Pareto front with three or four models on it, not one winner. Charpentier shows cases where quality scores cluster tightly (e.g. Elo 1,100–1,200) while latency varies by 20x—meaning you can pick a model that is nearly as good but dramatically cheaper and faster.

The practical move is to treat 'state of the art' as a set, then let your actual constraints (budget, latency SLA, target task) select within it. If you also know your specific use case, build the Pareto front against a task-specific quality metric rather than a general-capability score, which lets even smaller specialized models stay on the frontier. This reframes evaluation from 'find the best' to 'find the best for this cost envelope.'

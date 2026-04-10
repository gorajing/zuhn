---
id: INS-260410-939B
domain: ai-development
topic: llm-behavior
title: >-
  Thinking models are worth the wait only for hard reasoning, not everyday
  queries
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - thinking-models
  - reasoning
  - model-selection
  - latency-tradeoff
sources:
  - type: youtube
    title: How I use LLMs
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=EWvNQjAaOHw'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Default to fast non-thinking models; switch to a thinking model only when
    you suspect the first answer is wrong on a genuinely hard math/code/logic
    problem.
  standard: >-
    Thinking models like o1 Pro, DeepSeek R1, and Claude's extended thinking
    mode are tuned via reinforcement learning to emit long internal monologues
    before answering — backtracking, revisiting assumptions, and trying multiple
    approaches. This pushes accuracy materially higher on the kinds of problems
    that actually require reasoning: math, code debugging, logic puzzles.
    Karpathy's concrete example: GPT-4o failed to spot a bug in his gradient
    check code, but o1 Pro solved it after a minute of thinking.


    But thinking tax is real — multiple minutes per response, and no accuracy
    lift on queries like 'recommend a city for New Year's' or 'how much caffeine
    in an Americano.' Karpathy's workflow is to start with the fast model and
    only escalate to thinking mode when he suspects the first answer is
    underbaked. This flips the intuition that you should always use the
    'smartest' model: the smartest model for travel advice is the fast one,
    because thinking adds latency without adding insight on knowledge-recall
    tasks.
stance: >-
  Reserving thinking models (o1, R1, Claude extended thinking) for math and code
  problems while defaulting to fast non-thinking models for general queries
  yields better time-adjusted utility than always reaching for the smartest
  model.
related:
  - INS-260403-EA93
  - INS-260403-5F41
  - INS-260330-52F6
  - INS-260403-BA81
  - INS-260403-A27F
  - INS-260330-8EC6
  - INS-260408-C572
  - INS-260409-17E9
  - INS-260329-64B8
  - INS-260329-04FA
---
Thinking models like o1 Pro, DeepSeek R1, and Claude's extended thinking mode are tuned via reinforcement learning to emit long internal monologues before answering — backtracking, revisiting assumptions, and trying multiple approaches. This pushes accuracy materially higher on the kinds of problems that actually require reasoning: math, code debugging, logic puzzles. Karpathy's concrete example: GPT-4o failed to spot a bug in his gradient check code, but o1 Pro solved it after a minute of thinking.

But thinking tax is real — multiple minutes per response, and no accuracy lift on queries like 'recommend a city for New Year's' or 'how much caffeine in an Americano.' Karpathy's workflow is to start with the fast model and only escalate to thinking mode when he suspects the first answer is underbaked. This flips the intuition that you should always use the 'smartest' model: the smartest model for travel advice is the fast one, because thinking adds latency without adding insight on knowledge-recall tasks.

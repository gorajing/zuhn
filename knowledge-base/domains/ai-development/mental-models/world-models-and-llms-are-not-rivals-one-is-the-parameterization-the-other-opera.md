---
id: INS-260627-8C59
domain: ai-development
topic: mental-models
title: >-
  World models and LLMs are not rivals — one is the parameterization, the other
  operates on it
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - world-models
  - llms
  - abstraction
  - framing
  - reasoning
sources:
  - type: youtube
    title: >-
      Code World Model: Building World Models for Computation – Jacob Kahn, FAIR
      Meta
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=sYgE4ppDFOQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A world model is a parameterization of state-action-transition; an LLM is a
    mechanism that consumes that parameterization, so treating them as competing
    paradigms is a category error.
  standard: >-
    Kahn pushes back on the popular framing that 'world models' and 'large
    language models' are competing approaches to AI. In his account, a world
    model is nothing more than a way of parameterizing a problem as a mapping
    from past observations and actions to future observations — the transition
    function of states. An LLM is simply a mechanism for viewing and generating
    that parameterization autoregressively, token by token.


    The practical payoff of collapsing the dichotomy is that any autoregressive
    sequence model can be turned into a world model by changing what it
    predicts. If you format execution as a chain of state-action-state
    transitions, the same next-token machinery that writes code can instead
    'imagine' the future state of a running program. The lesson for builders is
    to stop asking 'should we build a world model or use an LLM' and instead ask
    'what state-transition function do we want this LLM to internalize,' because
    the architecture is shared and only the training target differs.
stance: >-
  The world-model-vs-LLM framing is a false dichotomy: a world model is just a
  problem parameterization (state, action, next state) and an LLM is a way to
  view and use that parameterization.
related:
  - INS-260328-C246
  - INS-260408-C572
  - INS-260625-017C
  - INS-260603-A506
  - INS-260627-37CC
  - INS-260326-DBEF
---
Kahn pushes back on the popular framing that 'world models' and 'large language models' are competing approaches to AI. In his account, a world model is nothing more than a way of parameterizing a problem as a mapping from past observations and actions to future observations — the transition function of states. An LLM is simply a mechanism for viewing and generating that parameterization autoregressively, token by token.

The practical payoff of collapsing the dichotomy is that any autoregressive sequence model can be turned into a world model by changing what it predicts. If you format execution as a chain of state-action-state transitions, the same next-token machinery that writes code can instead 'imagine' the future state of a running program. The lesson for builders is to stop asking 'should we build a world model or use an LLM' and instead ask 'what state-transition function do we want this LLM to internalize,' because the architecture is shared and only the training target differs.

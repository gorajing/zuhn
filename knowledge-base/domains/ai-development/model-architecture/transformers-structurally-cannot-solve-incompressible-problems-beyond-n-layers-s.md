---
id: INS-260501-6374
domain: ai-development
topic: model-architecture
title: >-
  Transformers structurally cannot solve incompressible problems beyond N layers
  — sorting, mazes, Sudoku hit a hard ceiling
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - computational-limits
  - incompressible-problems
  - sorting
  - sudoku
  - transformer-limits
sources:
  - type: youtube
    title: Recursion Is The Next Scaling Law In AI
    author: Y Combinator
    url: 'https://youtu.be/DGtUUMNYLcc'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    31-element sort + 30-layer transformer = impossible. Transformer layers ARE
    the reasoning steps; you can't exceed your depth.
  standard: >-
    Chollet's clear computational argument: comparison sort has a theoretical
    lower bound of N-log-N comparisons. If you have a list of 31 elements and a
    30-layer transformer, you've literally run out of layers before you've run
    out of required comparisons — the model cannot solve the task in a single
    forward pass, regardless of how good its weights are. The same applies to
    Sudoku (where each cell requires sequential propagation from constraints),
    mazes (path search), and rolling sums (sequential accumulation).


    Chain-of-thought is the workaround: at test time, transformers ARE
    Turing-complete via autoregressive token generation, simulating a tape and
    unrolling reasoning steps externally. But chain-of-thought requires either
    training data with reasoning traces (which doesn't exist for problems like
    Millennium Prize problems) or post-hoc generation that's expensive and
    error-prone. For builders: if your problem is incompressible (no shortcut
    beyond N steps for input size N), neither one-shot LLM inference nor naive
    chain-of-thought is the right architecture. You want either explicit
    recursion (TRM-style) or external tool use (Karpathy's
    specialized-models-as-tools).
stance: >-
  A one-shot feed-forward transformer with N layers is structurally limited to
  N-step computation chains; on incompressible problems (sorting requires
  N-log-N comparisons, Sudoku requires sequential propagation, mazes require
  path search), running out of layers means running out of reasoning steps.
related:
  - INS-260323-D56E
  - INS-260410-0EFE
  - INS-260501-F394
  - INS-260409-1AA0
  - INS-260412-DDD2
---
Chollet's clear computational argument: comparison sort has a theoretical lower bound of N-log-N comparisons. If you have a list of 31 elements and a 30-layer transformer, you've literally run out of layers before you've run out of required comparisons — the model cannot solve the task in a single forward pass, regardless of how good its weights are. The same applies to Sudoku (where each cell requires sequential propagation from constraints), mazes (path search), and rolling sums (sequential accumulation).

Chain-of-thought is the workaround: at test time, transformers ARE Turing-complete via autoregressive token generation, simulating a tape and unrolling reasoning steps externally. But chain-of-thought requires either training data with reasoning traces (which doesn't exist for problems like Millennium Prize problems) or post-hoc generation that's expensive and error-prone. For builders: if your problem is incompressible (no shortcut beyond N steps for input size N), neither one-shot LLM inference nor naive chain-of-thought is the right architecture. You want either explicit recursion (TRM-style) or external tool use (Karpathy's specialized-models-as-tools).

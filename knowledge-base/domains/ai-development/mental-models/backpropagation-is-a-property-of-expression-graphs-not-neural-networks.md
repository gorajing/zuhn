---
id: INS-260410-025A
domain: ai-development
topic: mental-models
title: 'Backpropagation is a property of expression graphs, not neural networks'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - backpropagation
  - autograd
  - abstraction
  - computation-graphs
sources:
  - type: youtube
    title: >-
      The spelled-out intro to neural networks and backpropagation: building
      micrograd
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=VMj-3S1tku0'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Backprop doesn't know anything about neural networks — it applies the chain
    rule to any directed expression graph, and neural nets are just a particular
    shape of graph we happen to care about.
  standard: >-
    Most ML courses couple backprop and neural networks so tightly that students
    believe the algorithm is specific to layers, weights, and activations.
    Karpathy deliberately separates them: micrograd's engine.py (100 lines)
    knows nothing about neurons — it operates on a generic Value object that
    builds an expression graph from scalar operations. The nn.py library (50
    more lines) sits on top and defines neurons, layers, and MLPs as convenience
    wrappers.


    This separation has real consequences. Once you see backprop as 'chain rule
    over a DAG', you stop being surprised that it powers physics simulations,
    differentiable rendering, probabilistic programming, and optimization
    problems that have nothing to do with neurons. You also stop reaching for
    neural-net-shaped solutions when a simpler differentiable formulation would
    do.


    The mental model to carry: neural networks are a specific class of
    mathematical expressions (input × weights → output → loss). The engine that
    trains them is strictly more general than the thing it trains.
stance: >-
  Backprop is a general algorithm over arbitrary differentiable computation
  graphs; neural networks are just one application.
related:
  - INS-260325-4C6D
  - INS-260410-9EEF
  - INS-260410-CB46
  - INS-260330-6BBD
  - INS-260410-5F60
  - INS-260330-189F
---
Most ML courses couple backprop and neural networks so tightly that students believe the algorithm is specific to layers, weights, and activations. Karpathy deliberately separates them: micrograd's engine.py (100 lines) knows nothing about neurons — it operates on a generic Value object that builds an expression graph from scalar operations. The nn.py library (50 more lines) sits on top and defines neurons, layers, and MLPs as convenience wrappers.

This separation has real consequences. Once you see backprop as 'chain rule over a DAG', you stop being surprised that it powers physics simulations, differentiable rendering, probabilistic programming, and optimization problems that have nothing to do with neurons. You also stop reaching for neural-net-shaped solutions when a simpler differentiable formulation would do.

The mental model to carry: neural networks are a specific class of mathematical expressions (input × weights → output → loss). The engine that trains them is strictly more general than the thing it trains.

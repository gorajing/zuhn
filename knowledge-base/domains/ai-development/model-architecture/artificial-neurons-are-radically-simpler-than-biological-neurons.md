---
id: INS-260405-1F0B
domain: ai-development
topic: model-architecture
title: Artificial Neurons Are Radically Simpler Than Biological Neurons
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - neural-networks
  - biological-brain
  - architecture
  - comparison
  - complexity
sources:
  - type: blog
    title: A Conversation with One of My 8090 Co-Founders
    author: Chamath Palihapitiya
    url: 'https://chamath.substack.com/p/a-conversation-with-one-of-my-8090'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Each biological neuron runs its own learning mechanisms and maintains state;
    each artificial neuron is just y = Wx + b, making raw neuron-count
    comparisons between brains and AI models deeply misleading.
  standard: >-
    When comparing brains to artificial neural networks, the 100 trillion
    synapse figure obscures more than it reveals. Each biological neuron is
    itself a complex computational unit with its own internal learning dynamics,
    state, and signal processing—effectively a miniature computer. Artificial
    neurons, by contrast, are reduced to elementary math: multiply inputs by
    weights, add a bias, apply a nonlinearity.


    This means that while modern LLMs have billions of artificial neurons, the
    per-neuron computational power is orders of magnitude lower than its
    biological counterpart. The two systems achieve intelligence through
    fundamentally different means: biological brains through a billion years of
    evolved molecular machinery; artificial networks through massively parallel
    gradient descent over weeks.


    The 'birds and airplanes' analogy is apt: both achieve the goal through
    different engineering. This framing matters for researchers because it
    cautions against naively transplanting neuroscience intuitions into AI
    architecture decisions, and vice versa.
stance: >-
  The gap between biological and artificial neurons is so large that neuron
  count comparisons are misleading—a biological neuron is itself a sophisticated
  processor, while an artificial one is a linear operation plus activation
  function.
related:
  - INS-260323-9774
  - INS-260330-189F
  - INS-260330-3E3C
  - INS-260405-5649
  - PRI-260406-4F8E
  - INS-260330-6D5C
  - INS-260404-D122
---
When comparing brains to artificial neural networks, the 100 trillion synapse figure obscures more than it reveals. Each biological neuron is itself a complex computational unit with its own internal learning dynamics, state, and signal processing—effectively a miniature computer. Artificial neurons, by contrast, are reduced to elementary math: multiply inputs by weights, add a bias, apply a nonlinearity.

This means that while modern LLMs have billions of artificial neurons, the per-neuron computational power is orders of magnitude lower than its biological counterpart. The two systems achieve intelligence through fundamentally different means: biological brains through a billion years of evolved molecular machinery; artificial networks through massively parallel gradient descent over weeks.

The 'birds and airplanes' analogy is apt: both achieve the goal through different engineering. This framing matters for researchers because it cautions against naively transplanting neuroscience intuitions into AI architecture decisions, and vice versa.

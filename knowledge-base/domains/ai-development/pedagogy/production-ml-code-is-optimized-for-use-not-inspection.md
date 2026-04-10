---
id: INS-260410-C5A4
domain: ai-development
topic: pedagogy
title: 'Production ML code is optimized for use, not inspection'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - pytorch
  - learning-by-building
  - code-complexity
  - source-diving
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
    Karpathy spent 15 minutes searching PyTorch for the tanh backward pass and
    couldn't find it — 2,800 results across 406 files — because production
    libraries accumulate entropy around a simple core.
  standard: >-
    The anecdote is telling: a world-class ML researcher with intimate knowledge
    of what he was looking for (tanh backward = (1 - tanh(x)^2) * upstream grad)
    could not quickly locate it in PyTorch's codebase. The kernel turned out to
    be buried under CPU/GPU variants, complex number handling, bfloat16
    specializations, and live in a file called binaryops_kernel even though tanh
    is unary.


    The lesson is about how to learn, not how to criticize PyTorch. Production
    libraries are optimized for throughput and correctness under adversarial
    conditions — not for someone trying to understand the underlying idea. The
    simple concept (one line of chain rule) gets diluted across hundreds of
    files of specializations. A learner reading PyTorch source first will
    conclude that autograd is inherently complex, when the reality is that
    autograd is 100 lines and everything else is platform dispatch.


    Application: when you want to understand how a system works, build a minimal
    version from scratch before reading the production version. The minimal
    version teaches you what's essential; the production version then teaches
    you what's essential for efficiency and safety at scale. The reverse order
    conflates the two and leaves you mystified. This generalizes to databases,
    compilers, web frameworks, and operating systems.
stance: >-
  Reading production libraries is a worse path to understanding than building
  minimal versions from scratch.
related:
  - INS-260409-8DA0
  - INS-260409-FE00
  - INS-260410-0EFE
  - INS-260410-78D3
  - INS-260330-9471
---
The anecdote is telling: a world-class ML researcher with intimate knowledge of what he was looking for (tanh backward = (1 - tanh(x)^2) * upstream grad) could not quickly locate it in PyTorch's codebase. The kernel turned out to be buried under CPU/GPU variants, complex number handling, bfloat16 specializations, and live in a file called binaryops_kernel even though tanh is unary.

The lesson is about how to learn, not how to criticize PyTorch. Production libraries are optimized for throughput and correctness under adversarial conditions — not for someone trying to understand the underlying idea. The simple concept (one line of chain rule) gets diluted across hundreds of files of specializations. A learner reading PyTorch source first will conclude that autograd is inherently complex, when the reality is that autograd is 100 lines and everything else is platform dispatch.

Application: when you want to understand how a system works, build a minimal version from scratch before reading the production version. The minimal version teaches you what's essential; the production version then teaches you what's essential for efficiency and safety at scale. The reverse order conflates the two and leaves you mystified. This generalizes to databases, compilers, web frameworks, and operating systems.

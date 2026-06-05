---
id: INS-260605-C28F
domain: ai-development
topic: model-architecture
title: Diffusion can natively allocate compute to problem difficulty
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - adaptive-computation
  - test-time-compute
  - text-diffusion
  - denoising-steps
  - inference-scaling
sources:
  - type: youtube
    title: 'Text Diffusion — Brendon Dillon, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=r305-aQTaU0'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    More denoising steps roughly monotonically improve quality, and the model
    can be trained to decide for itself when it's done — short prompts finish in
    ~4 steps, hard ones take 30+.
  standard: >-
    Two related properties fall out of diffusion's iterative process. First,
    dynamic computation: giving the model a larger forward-pass budget roughly
    monotonically raises quality across evals, because even a nearly-clean
    output gets re-examined and corrected. Second, adaptive computation: the
    model can be trained to determine its own stopping point. Outputting 100
    digits of pi (100 tokens) took only 4 steps because it's memorized; FizzBuzz
    took 18; 'explain quantum mechanics in a paragraph' took 31. Across
    benchmarks, harder evals (GPQA Diamond) consumed more steps than easy ones
    (MBPP basic Python) with no external controller.


    This gives a compute-allocation lever that autoregressive models lack
    natively — an autoregressive model spends one pass per token regardless of
    difficulty. With diffusion you can also cap the step count in advance to get
    predictable latency, with easy prompts finishing early under the cap.
    Confidence is medium because the demonstrated results are a year old and at
    a single model size, but the mechanism — test-time compute that the model
    self-modulates — is a structurally distinct and promising axis for scaling
    reasoning.
stance: >-
  Diffusion models can be trained to spend more denoising steps on hard prompts
  and fewer on easy ones, making inference compute self-scaling.
related:
  - INS-260320-0511
  - INS-260330-0A8D
  - INS-260330-4AD5
  - INS-260410-CDE6
  - INS-260409-3230
  - INS-260605-F512
  - PRI-260320-6847
  - INS-260605-D37A
  - INS-260320-D972
  - INS-260605-287A
---
Two related properties fall out of diffusion's iterative process. First, dynamic computation: giving the model a larger forward-pass budget roughly monotonically raises quality across evals, because even a nearly-clean output gets re-examined and corrected. Second, adaptive computation: the model can be trained to determine its own stopping point. Outputting 100 digits of pi (100 tokens) took only 4 steps because it's memorized; FizzBuzz took 18; 'explain quantum mechanics in a paragraph' took 31. Across benchmarks, harder evals (GPQA Diamond) consumed more steps than easy ones (MBPP basic Python) with no external controller.

This gives a compute-allocation lever that autoregressive models lack natively — an autoregressive model spends one pass per token regardless of difficulty. With diffusion you can also cap the step count in advance to get predictable latency, with easy prompts finishing early under the cap. Confidence is medium because the demonstrated results are a year old and at a single model size, but the mechanism — test-time compute that the model self-modulates — is a structurally distinct and promising axis for scaling reasoning.

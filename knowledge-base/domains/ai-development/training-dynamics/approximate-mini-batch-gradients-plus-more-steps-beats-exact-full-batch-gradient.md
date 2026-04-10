---
id: INS-260410-D3A7
domain: ai-development
topic: training-dynamics
title: >-
  Approximate mini-batch gradients plus more steps beats exact full-batch
  gradients plus fewer steps
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - mini-batch
  - optimization
  - sgd
  - training-dynamics
sources:
  - type: youtube
    title: 'Building makemore Part 2: MLP'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=TCH_1BHY58I'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A noisy gradient pointing roughly the right direction 1000 times beats a
    perfect gradient pointing exactly the right direction 10 times.
  standard: >-
    When Karpathy scales from 32 examples to 228,000, each full-batch
    forward/backward becomes slow enough that optimization stalls in wallclock
    terms. Switching to random 32-sample minibatches makes each iteration
    near-instant, and despite each gradient being a noisy estimate of the true
    gradient, loss drops dramatically faster. The direction is 'good enough'
    even when estimated on 0.014% of the data.


    This is not just an engineering shortcut — it's a statement about the loss
    landscape. Mini-batch noise acts like a regularizer and helps escape sharp
    minima, and the quadratic speedup from more iterations dominates the linear
    degradation in gradient quality. The practical rule: prefer approximate
    gradient + more steps over exact gradient + fewer steps, basically always,
    until batch size becomes so small that variance dominates signal.


    Apply this whenever you're tempted to 'compute the real gradient for
    correctness.' The right question is throughput-to-loss, not gradient purity.
    Same logic scales up to modern LLM training where batches of millions are
    used because they're the point where variance stops mattering, not because
    they compute 'the' gradient.
stance: >-
  Taking many noisy gradient steps on small random minibatches reaches lower
  loss per unit wallclock time than taking few exact gradient steps on the full
  dataset.
related:
  - INS-260320-10E8
  - INS-260330-BFD0
  - INS-260322-9436
  - INS-260410-5033
  - INS-260410-DA81
  - INS-260410-8019
---
When Karpathy scales from 32 examples to 228,000, each full-batch forward/backward becomes slow enough that optimization stalls in wallclock terms. Switching to random 32-sample minibatches makes each iteration near-instant, and despite each gradient being a noisy estimate of the true gradient, loss drops dramatically faster. The direction is 'good enough' even when estimated on 0.014% of the data.

This is not just an engineering shortcut — it's a statement about the loss landscape. Mini-batch noise acts like a regularizer and helps escape sharp minima, and the quadratic speedup from more iterations dominates the linear degradation in gradient quality. The practical rule: prefer approximate gradient + more steps over exact gradient + fewer steps, basically always, until batch size becomes so small that variance dominates signal.

Apply this whenever you're tempted to 'compute the real gradient for correctness.' The right question is throughput-to-loss, not gradient purity. Same logic scales up to modern LLM training where batches of millions are used because they're the point where variance stops mattering, not because they compute 'the' gradient.

---
id: INS-260410-6FA3
domain: ai-development
topic: training-dynamics
title: >-
  Update-to-data ratio is a better learning rate diagnostic than loss curves or
  gradient magnitudes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - learning-rate
  - diagnostics
  - update-ratio
  - training-dynamics
  - monitoring
sources:
  - type: youtube
    title: 'Building makemore Part 3: Activations & Gradients, BatchNorm'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=P6sfmUTpUmc'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Track log10(std(lr * grad) / std(param)) per layer during training and aim
    for roughly -3 — if it's much lower the network trains too slowly, if higher
    it's likely unstable, and per-layer asymmetry reveals miscalibrated
    initialization.
  standard: >-
    Karpathy argues that gradient-to-data ratios are misleading because what
    actually changes a parameter is the update (learning_rate * gradient), not
    the raw gradient. The right diagnostic is: for each parameter tensor,
    compute the ratio of the update's standard deviation to the data's standard
    deviation, then take log10. A healthy network sits around -3 — meaning each
    step changes parameters by roughly one part in a thousand of their existing
    magnitude. Below -4 means training is too slow. Above -2 means parameters
    are changing too violently to converge cleanly.


    The per-layer view is what makes this diagnostic powerful. If the final
    classification layer is updating 10x faster than the rest of the network
    because you intentionally shrunk its weights to fix the initial-loss
    problem, that's visible. If you forgot fan-in normalization, the discrepancy
    across layers screams from this plot. Loss curves can look fine while
    individual layers are silently misbehaving.


    This is part of a broader Karpathy theme: training neural networks is not
    just looking at loss curves. You need to instrument activations (forward
    pass), gradients (backward pass), parameter histograms, and update ratios.
    Each plot catches a different class of bug. The reason normalization layers
    and Adam-style optimizers became indispensable is that they make all of
    these plots well-behaved by default — but understanding what they're hiding
    is what lets you debug when they don't.
stance: >-
  The standard deviation of the parameter update divided by the standard
  deviation of the parameter itself should sit around 1e-3 for healthy training,
  and plotting this ratio per layer reveals miscalibrations that loss curves
  hide.
related:
  - INS-260410-C2E6
  - INS-260410-885B
  - INS-260410-DA81
  - INS-260330-4341
  - INS-260423-6172
---
Karpathy argues that gradient-to-data ratios are misleading because what actually changes a parameter is the update (learning_rate * gradient), not the raw gradient. The right diagnostic is: for each parameter tensor, compute the ratio of the update's standard deviation to the data's standard deviation, then take log10. A healthy network sits around -3 — meaning each step changes parameters by roughly one part in a thousand of their existing magnitude. Below -4 means training is too slow. Above -2 means parameters are changing too violently to converge cleanly.

The per-layer view is what makes this diagnostic powerful. If the final classification layer is updating 10x faster than the rest of the network because you intentionally shrunk its weights to fix the initial-loss problem, that's visible. If you forgot fan-in normalization, the discrepancy across layers screams from this plot. Loss curves can look fine while individual layers are silently misbehaving.

This is part of a broader Karpathy theme: training neural networks is not just looking at loss curves. You need to instrument activations (forward pass), gradients (backward pass), parameter histograms, and update ratios. Each plot catches a different class of bug. The reason normalization layers and Adam-style optimizers became indispensable is that they make all of these plots well-behaved by default — but understanding what they're hiding is what lets you debug when they don't.

---
id: INS-260410-89D0
domain: ai-development
topic: training-dynamics
title: Train loss ≈ val loss means the model is underfit and should be scaled up
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - overfitting
  - underfitting
  - model-capacity
  - diagnostics
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
    If train and val loss are basically equal, your model is too small — scale
    it up, don't regularize.
  standard: >-
    Karpathy uses the gap between train loss and dev loss as a live diagnostic.
    With 3,400 parameters and 228,000 examples, train and dev loss are both
    ~2.3, indistinguishable. That isn't 'good generalization' — it's a signal
    the model hasn't even exhausted its ability to memorize the training signal,
    let alone overfit. The correct response is to add capacity (larger hidden
    layer, bigger embedding dimension), not to add dropout or weight decay.


    Conversely, once the gap opens — train loss dropping below val loss — you're
    in the overfitting regime and regularization becomes relevant. The two
    regimes call for opposite interventions, and the train/val gap tells you
    which one you're in. Mixing them up (regularizing an underfit model, or
    scaling up an overfit one) wastes compute and often makes things worse.


    This is a surprisingly stable rule across model scales. When Karpathy bumps
    from 100 to 300 hidden neurons, the bottleneck shifts to the 2-dim
    embedding; scaling embeddings to 10-dim finally moves the needle and starts
    opening a tiny train/val gap. The ordering — identify bottleneck, scale the
    right thing, watch the gap reopen — is the generic loop. Only when the gap
    meaningfully opens do you reach for regularization or more data.
stance: >-
  When training and validation loss track each other closely, the model is
  underfit and capacity should increase before considering regularization or
  other fixes.
related:
  - INS-260330-38E1
  - INS-260320-EF3A
  - INS-260320-96C9
  - INS-260412-9777
  - INS-260320-0511
---
Karpathy uses the gap between train loss and dev loss as a live diagnostic. With 3,400 parameters and 228,000 examples, train and dev loss are both ~2.3, indistinguishable. That isn't 'good generalization' — it's a signal the model hasn't even exhausted its ability to memorize the training signal, let alone overfit. The correct response is to add capacity (larger hidden layer, bigger embedding dimension), not to add dropout or weight decay.

Conversely, once the gap opens — train loss dropping below val loss — you're in the overfitting regime and regularization becomes relevant. The two regimes call for opposite interventions, and the train/val gap tells you which one you're in. Mixing them up (regularizing an underfit model, or scaling up an overfit one) wastes compute and often makes things worse.

This is a surprisingly stable rule across model scales. When Karpathy bumps from 100 to 300 hidden neurons, the bottleneck shifts to the 2-dim embedding; scaling embeddings to 10-dim finally moves the needle and starts opening a tiny train/val gap. The ordering — identify bottleneck, scale the right thing, watch the gap reopen — is the generic loop. Only when the gap meaningfully opens do you reach for regularization or more data.

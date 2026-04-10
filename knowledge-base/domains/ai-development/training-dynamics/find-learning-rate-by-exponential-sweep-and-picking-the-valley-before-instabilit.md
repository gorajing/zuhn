---
id: INS-260410-F295
domain: ai-development
topic: training-dynamics
title: >-
  Find learning rate by exponential sweep and picking the valley before
  instability
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - learning-rate
  - hyperparameter-tuning
  - optimization
  - heuristics
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
    Sweep LR exponentially from tiny to explosive in one short run, plot loss vs
    log(lr), pick the bottom of the valley.
  standard: >-
    Rather than guessing the learning rate, Karpathy demonstrates a disciplined
    method: bracket the range by finding an LR so small nothing happens and
    another so large loss explodes, then use torch.linspace to generate a
    thousand candidates exponentially spaced (because linear spacing wastes all
    probes near the upper end). Train for ~1000 steps stepping through those
    LRs, log loss per step, plot loss against the exponent of LR. You get a
    characteristic curve: flat on the left (too slow), a valley, then explosion
    on the right. The bottom of the valley is your starting LR.


    This works because LR is a multiplicative knob — its effect is perceptual in
    log space, not linear space. Probing linearly gives you no resolution where
    it matters. The exponent framing also maps directly onto how seasoned
    practitioners reason ('try 1e-3, 1e-4, 1e-5') rather than ('try 0.001,
    0.002, 0.003').


    The technique is also self-calibrating: whenever architecture changes
    (deeper net, different init, new batch size), rerun the sweep rather than
    porting an LR from elsewhere. Cost is small (one short run), payoff is the
    difference between a model that trains and one that diverges. Pair with LR
    decay (typically 10× drop) in late training once loss plateaus.
stance: >-
  The right initial learning rate can be found by sweeping LR exponentially over
  a wide range in a single short run and picking the value just before loss
  becomes unstable.
related:
  - INS-260330-1C84
  - PRI-260403-CD44
  - INS-260330-ED8A
  - INS-260330-2EC0
  - INS-260330-1AB0
---
Rather than guessing the learning rate, Karpathy demonstrates a disciplined method: bracket the range by finding an LR so small nothing happens and another so large loss explodes, then use torch.linspace to generate a thousand candidates exponentially spaced (because linear spacing wastes all probes near the upper end). Train for ~1000 steps stepping through those LRs, log loss per step, plot loss against the exponent of LR. You get a characteristic curve: flat on the left (too slow), a valley, then explosion on the right. The bottom of the valley is your starting LR.

This works because LR is a multiplicative knob — its effect is perceptual in log space, not linear space. Probing linearly gives you no resolution where it matters. The exponent framing also maps directly onto how seasoned practitioners reason ('try 1e-3, 1e-4, 1e-5') rather than ('try 0.001, 0.002, 0.003').

The technique is also self-calibrating: whenever architecture changes (deeper net, different init, new batch size), rerun the sweep rather than porting an LR from elsewhere. Cost is small (one short run), payoff is the difference between a model that trains and one that diverges. Pair with LR decay (typically 10× drop) in late training once loss plateaus.

---
id: INS-260410-F08E
domain: ai-development
topic: model-architecture
title: Stateful layers like BatchNorm are disproportionate sources of bugs
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - batchnorm
  - debugging
  - stateful-layers
  - training-eval-mode
  - bug-prone
sources:
  - type: youtube
    title: 'Building makemore Part 5: Building a WaveNet'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=t3YJ5hKiMQ0'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    BatchNorm layers harbor hidden state (running stats, train/eval mode,
    cross-batch coupling) that silently corrupts outputs when any one of them is
    misconfigured, making them a top source of subtle deep-learning bugs.
  standard: >-
    Karpathy flags BatchNorm as 'a very weird layer' that causes a lot of bugs
    for three reasons. First, it holds running mean and variance that are
    trained outside backprop via exponential moving average — state you have to
    wait to stabilize. Second, it behaves differently in training vs. evaluation
    mode, so forgetting to flip the mode gives wrong results instead of an
    error. Third, it couples activation statistics across batch elements, so a
    batch of size one produces NaN variance and silently poisons downstream
    computations.


    In the video he hits two separate BatchNorm bugs in rapid succession:
    sampling from the model with the layers still in training mode (NaN from
    single-example variance), and a dimensional bug where BatchNorm1D was
    maintaining separate statistics per position instead of per channel when
    given a 3D input. Both ran without errors — they just gave wrong answers.


    The lesson: prefer stateless layers when you can. If you must use BatchNorm
    (or any layer with running stats, mode switches, or cross-sample coupling),
    budget debugging time specifically for state bugs, and treat 'it runs' as
    very weak evidence of correctness. Verify shapes, modes, and running stats
    explicitly rather than trusting broadcasting to do the right thing.
stance: >-
  BatchNorm and other stateful layers introduce more bugs than their benefits
  justify in most small-scale settings.
related:
  - INS-260330-3ADD
  - INS-260410-E73E
  - INS-260330-0FCC
  - PRI-260407-69A9
  - INS-260402-3C79
---
Karpathy flags BatchNorm as 'a very weird layer' that causes a lot of bugs for three reasons. First, it holds running mean and variance that are trained outside backprop via exponential moving average — state you have to wait to stabilize. Second, it behaves differently in training vs. evaluation mode, so forgetting to flip the mode gives wrong results instead of an error. Third, it couples activation statistics across batch elements, so a batch of size one produces NaN variance and silently poisons downstream computations.

In the video he hits two separate BatchNorm bugs in rapid succession: sampling from the model with the layers still in training mode (NaN from single-example variance), and a dimensional bug where BatchNorm1D was maintaining separate statistics per position instead of per channel when given a 3D input. Both ran without errors — they just gave wrong answers.

The lesson: prefer stateless layers when you can. If you must use BatchNorm (or any layer with running stats, mode switches, or cross-sample coupling), budget debugging time specifically for state bugs, and treat 'it runs' as very weak evidence of correctness. Verify shapes, modes, and running stats explicitly rather than trusting broadcasting to do the right thing.

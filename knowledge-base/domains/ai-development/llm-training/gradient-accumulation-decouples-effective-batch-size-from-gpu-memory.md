---
id: INS-260410-CDE6
domain: ai-development
topic: llm-training
title: Gradient accumulation decouples effective batch size from GPU memory
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - gradient-accumulation
  - batch-size
  - optimizer
  - training-loop
  - faithful-reproduction
sources:
  - type: youtube
    title: Let's reproduce GPT-2 (124M)
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=l8pRSuU81PU'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    To match GPT-3's 0.5M-token batch size on a GPU that only fits 16K tokens
    per step, run 32 micro-batches and sum their gradients before the optimizer
    step — but remember to divide by grad_accum_steps to preserve the loss's
    mean reduction.
  standard: >-
    The GPT-3 paper specifies a 0.5M-token batch size, tied tightly to its
    learning rate, weight decay, and Adam betas through the optimization
    literature. You can't cleanly change the batch size without retuning
    everything else, so faithful reproduction demands matching it — but the
    batch won't fit in a single forward pass on most GPUs.


    Gradient accumulation solves this: run multiple forward-backward passes with
    smaller micro-batches, and because PyTorch's loss.backward() does
    plus-equals on .grad, the gradients naturally accumulate. After
    grad_accum_steps micro-steps, call optimizer.step() once. This is
    mathematically equivalent to a single large batch — almost. The subtle bug
    Karpathy demonstrates: the loss function usually has a mean reduction built
    in (dividing by batch size), so accumulating K micro-batch losses gives you
    K× the gradient magnitude of a true batch. The fix is to divide each
    micro-batch's loss by grad_accum_steps before backward, restoring the mean.


    This pattern matters beyond GPT-2 reproduction: any time published
    hyperparameters assume compute you don't have, gradient accumulation is the
    lever to use hyperparameter-preserving rather than retuning from scratch. It
    costs you wall-clock time but costs you no correctness.
stance: >-
  When the hyperparameters you're copying require a batch size that doesn't fit
  in memory, gradient accumulation lets you simulate it serially without
  changing any other optimization setting.
related:
  - INS-260320-9FD5
  - INS-260410-AA93
  - INS-260410-699C
  - INS-260405-A22F
  - PRI-260406-8FDF
---
The GPT-3 paper specifies a 0.5M-token batch size, tied tightly to its learning rate, weight decay, and Adam betas through the optimization literature. You can't cleanly change the batch size without retuning everything else, so faithful reproduction demands matching it — but the batch won't fit in a single forward pass on most GPUs.

Gradient accumulation solves this: run multiple forward-backward passes with smaller micro-batches, and because PyTorch's loss.backward() does plus-equals on .grad, the gradients naturally accumulate. After grad_accum_steps micro-steps, call optimizer.step() once. This is mathematically equivalent to a single large batch — almost. The subtle bug Karpathy demonstrates: the loss function usually has a mean reduction built in (dividing by batch size), so accumulating K micro-batch losses gives you K× the gradient magnitude of a true batch. The fix is to divide each micro-batch's loss by grad_accum_steps before backward, restoring the mean.

This pattern matters beyond GPT-2 reproduction: any time published hyperparameters assume compute you don't have, gradient accumulation is the lever to use hyperparameter-preserving rather than retuning from scratch. It costs you wall-clock time but costs you no correctness.

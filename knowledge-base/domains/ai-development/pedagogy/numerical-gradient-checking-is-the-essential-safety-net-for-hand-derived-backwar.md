---
id: INS-260410-8019
domain: ai-development
topic: pedagogy
title: >-
  Numerical gradient checking is the essential safety net for hand-derived
  backward passes
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - gradient-checking
  - testing
  - debugging
  - numerical-methods
  - neural-networks
sources:
  - type: youtube
    title: 'Building makemore Part 4: Becoming a Backprop Ninja'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=q8SA3rM6ckI'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Comparing hand-derived gradients to a finite-difference numerical estimate
    (or to PyTorch's autograd) catches the subtle sign flips, missing scale
    factors, and shape mismatches that plague manual backprop — and was standard
    practice before autograd existed.
  standard: >-
    Before autograd engines became ubiquitous around 2014-2016, writing neural
    network code meant deriving every backward pass by hand, and the universal
    safety net was the gradient checker: perturb each parameter by a small
    epsilon, measure the change in loss, and compare that numerical gradient to
    the one your analytical code produced. If they agree to within
    floating-point tolerance, your backward pass is probably correct.


    Karpathy's notebook uses the modern equivalent: compare manual gradients to
    PyTorch's autograd output via a custom cmp function that checks exact
    equality, approximate equality, and maximum element-wise difference. The
    reason all three checks matter is that an analytically-derived gradient for
    something like cross-entropy won't match autograd bitwise due to
    floating-point rounding, but should agree to ~1e-9 — anything larger signals
    a real bug.


    The broader lesson is that manually derived math is a source of bugs that
    silently degrade model performance rather than crashing. A sign error in a
    gradient might still train — just to a worse optimum. Numerical verification
    is the only reliable way to catch these before they cost you weeks of
    debugging a mysteriously underperforming model.
stance: >-
  Any manually-written gradient must be verified against a numerical estimate
  before being trusted, because the math is too easy to get subtly wrong in ways
  that still train — just worse.
related:
  - INS-260410-78D3
  - INS-260410-E6E9
  - INS-260410-DA81
  - INS-260330-BFD0
  - PRI-260321-14D8
  - INS-260410-D3A7
---
Before autograd engines became ubiquitous around 2014-2016, writing neural network code meant deriving every backward pass by hand, and the universal safety net was the gradient checker: perturb each parameter by a small epsilon, measure the change in loss, and compare that numerical gradient to the one your analytical code produced. If they agree to within floating-point tolerance, your backward pass is probably correct.

Karpathy's notebook uses the modern equivalent: compare manual gradients to PyTorch's autograd output via a custom cmp function that checks exact equality, approximate equality, and maximum element-wise difference. The reason all three checks matter is that an analytically-derived gradient for something like cross-entropy won't match autograd bitwise due to floating-point rounding, but should agree to ~1e-9 — anything larger signals a real bug.

The broader lesson is that manually derived math is a source of bugs that silently degrade model performance rather than crashing. A sign error in a gradient might still train — just to a worse optimum. Numerical verification is the only reliable way to catch these before they cost you weeks of debugging a mysteriously underperforming model.

---
id: INS-260628-9D66
domain: ai-development
topic: evals
title: >-
  Standard generative metrics measure what's easy to quantify, not what humans
  perceive as quality
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - generative-ai
  - metrics
  - perception
  - fid
  - aesthetics
sources:
  - type: youtube
    title: "Perceptual Evaluations: Evals for Aesthetics —\_Diego Rodriguez, Krea.ai"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=h5ItAJuB3Fc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    FID and CLIP-style metrics penalize perceptually-invisible artifacts and
    reward easy-to-count attributes, so they misjudge real generative quality.
  standard: >-
    Rodriguez shows that adding JPEG artifacts to four perceptually-identical
    images sends the FID score crashing — the metric screams 'horrible' while a
    human sees no difference. The deeper failure is selection bias in
    measurement: teams optimize what is cheap to compute (object counts via
    CLIP, 'is this blue', problem adherence) rather than what determines whether
    output is actually good. Easy-to-measure proxies quietly become the target,
    and models get tuned toward passing brittle metrics instead of satisfying
    human judgment.


    The practical implication for anyone building or evaluating generative
    systems is to distrust a single headline metric, especially one sensitive to
    imperceptible signal-level changes. Before trusting FID or a CLIP score,
    sanity-check it against human ratings on examples that are perceptually
    equivalent but differ in compression or low-level noise — if the metric
    swings wildly where humans don't care, it is measuring the wrong thing. The
    convenience of a number is not evidence that it captures quality.
stance: >-
  Metrics like FID and CLIP-based object adherence diverge from human-perceived
  quality and shouldn't be the deciding measure of a generative model.
related:
  - INS-260323-7A11
  - INS-260329-D8BC
  - INS-260404-1C9D
  - PRI-260406-E3D0
  - INS-260605-D3C7
  - INS-260605-71E7
  - INS-260625-869B
  - INS-260625-A99C
  - INS-260423-2B80
---
Rodriguez shows that adding JPEG artifacts to four perceptually-identical images sends the FID score crashing — the metric screams 'horrible' while a human sees no difference. The deeper failure is selection bias in measurement: teams optimize what is cheap to compute (object counts via CLIP, 'is this blue', problem adherence) rather than what determines whether output is actually good. Easy-to-measure proxies quietly become the target, and models get tuned toward passing brittle metrics instead of satisfying human judgment.

The practical implication for anyone building or evaluating generative systems is to distrust a single headline metric, especially one sensitive to imperceptible signal-level changes. Before trusting FID or a CLIP score, sanity-check it against human ratings on examples that are perceptually equivalent but differ in compression or low-level noise — if the metric swings wildly where humans don't care, it is measuring the wrong thing. The convenience of a number is not evidence that it captures quality.

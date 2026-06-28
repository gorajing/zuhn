---
id: INS-260626-1D80
domain: ai-development
topic: prompting
title: Prompt drift metrics need behavioral calibration
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - prompt-drift
  - evaluation
  - jaccard
  - agent-behavior
sources:
  - type: blog
    title: A Deterministic Control Plane for LLM Coding Agents
    url: 'https://arxiv.org/html/2606.26924'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A Jaccard drift score can flag suspicious prompt edits, but the threshold is
    not proof of behavior change without an eval.
  standard: >-
    The paper uses normalized word-token Jaccard similarity to detect prompt
    drift and justifies it as deterministic, portable, and sensitive to additive
    policy changes. It also states that the 0.60 and 0.80 thresholds are
    operating defaults, not empirically validated behavioral boundaries.


    For agent-eval work, drift detection should feed a benchmark or replay suite
    rather than stand alone. The right claim is: this prompt changed enough to
    require evaluation, not this prompt change is known to degrade task success.
stance: >-
  Prompt similarity thresholds should remain operational heuristics until they
  are calibrated against measured changes in agent behavior.
related:
  - INS-260627-8392
  - INS-260627-8530
  - INS-260605-DCE5
  - INS-260627-9228
  - INS-260625-8EC6
---
The paper uses normalized word-token Jaccard similarity to detect prompt drift and justifies it as deterministic, portable, and sensitive to additive policy changes. It also states that the 0.60 and 0.80 thresholds are operating defaults, not empirically validated behavioral boundaries.

For agent-eval work, drift detection should feed a benchmark or replay suite rather than stand alone. The right claim is: this prompt changed enough to require evaluation, not this prompt change is known to degrade task success.

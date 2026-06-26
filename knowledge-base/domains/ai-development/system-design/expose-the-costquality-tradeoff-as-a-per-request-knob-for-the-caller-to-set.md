---
id: INS-260626-66DC
domain: ai-development
topic: system-design
title: Expose the cost/quality tradeoff as a per-request knob for the caller to set
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multimodal
  - vision-encoder
  - developer-experience
  - api-design
  - gemma
sources:
  - type: youtube
    title: 'Gemma 4 Deep Dive — Cassidy Hardin, Researcher, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_A367W_qvc8'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Gemma 4 replaces Gemma 3's fixed pan-and-scan tiling with variable aspect
    ratios and five selectable resolutions, so developers allocate a high
    image-token budget for OCR/object detection and a low one for text-heavy
    tasks.
  standard: >-
    Gemma 3 forced every image through a fixed 'pan and scan' pipeline that
    split it into padded squares processed as separate images, spending a fixed
    token budget regardless of the task. Gemma 4 instead supports variable
    aspect ratios and five resolution/soft-token-budget settings, with spatial
    positional encodings carried through so the model still understands patch
    layout across shapes.


    The design lesson generalizes well beyond vision: when a system has a real
    cost/quality tradeoff (here, tokens spent on an image vs fidelity available
    for OCR or spatial recognition), exposing that tradeoff as a per-request
    parameter lets callers match spend to the task — high resolution for OCR,
    low for text-only prompts — instead of the system owner picking one
    compromise point for everyone. Pushing the knob to the caller turns a fixed
    cost into a tunable one.
stance: >-
  Letting developers choose the image token budget per request beats hardcoding
  a single preprocessing resolution.
related:
  - INS-260625-FC64
  - INS-260625-F775
  - INS-260412-9E22
  - INS-260626-1012
  - INS-260323-4E12
---
Gemma 3 forced every image through a fixed 'pan and scan' pipeline that split it into padded squares processed as separate images, spending a fixed token budget regardless of the task. Gemma 4 instead supports variable aspect ratios and five resolution/soft-token-budget settings, with spatial positional encodings carried through so the model still understands patch layout across shapes.

The design lesson generalizes well beyond vision: when a system has a real cost/quality tradeoff (here, tokens spent on an image vs fidelity available for OCR or spatial recognition), exposing that tradeoff as a per-request parameter lets callers match spend to the task — high resolution for OCR, low for text-only prompts — instead of the system owner picking one compromise point for everyone. Pushing the knob to the caller turns a fixed cost into a tunable one.

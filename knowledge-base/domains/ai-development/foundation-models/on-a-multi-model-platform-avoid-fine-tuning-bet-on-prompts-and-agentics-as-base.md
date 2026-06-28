---
id: INS-260628-04B2
domain: ai-development
topic: foundation-models
title: >-
  On a multi-model platform, avoid fine-tuning — bet on prompts and agentics as
  base models improve
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - fine-tuning
  - model-strategy
  - prompting
  - multi-model
  - vendor-flexibility
sources:
  - type: youtube
    title: 'Building an Agentic Platform — Ben Kus, CTO Box'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=12v5S1n1eOY'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Box is 'pretty anti-fine-tuning' — supporting Gemini/Llama/OpenAI/Anthropic
    plus constant model churn makes tuning a treadmill; prompts, cached prompts,
    and agentic structure win.
  standard: >-
    Asked why they don't just fine-tune a model instead of building agents, Kus
    said Box is 'pretty anti-fine-tuning at this moment.' Once you fine-tune,
    you must re-tune every future evolution of that model, and Box supports
    Gemini, Llama, OpenAI, and Anthropic — making consistent cross-vendor tuning
    impractical. Crucially, 'the next version of the model usually just gets
    better,' so a tuned older model is often beaten by an un-tuned newer one.


    The directional claim: when your strategy depends on model portability and
    on riding the rising tide of frontier improvements, fine-tuning anchors you
    to a depreciating asset and a maintenance treadmill. Box's alternative is
    prompts, cached prompts, and agentic orchestration — all model-agnostic and
    immediately compatible with each new release. This is context-dependent
    (single-model, stable-task, latency/cost-critical use cases can still
    justify tuning), but for a multi-vendor platform betting on continued model
    progress, the agentic + prompting path preserves optionality that
    fine-tuning forecloses.
stance: >-
  For platforms that must support multiple evolving models, fine-tuning is a
  losing bet because every model upgrade forces re-tuning and the next base
  model usually surpasses your tuned one anyway.
related:
  - INS-260322-31F8
  - INS-260322-3616
  - INS-260410-3A08
  - INS-260410-BFCF
  - INS-260411-59F7
  - INS-260605-3DBF
  - INS-260605-5A8E
  - INS-260605-4D1D
  - INS-260627-6846
  - PRI-260403-67FC
---
Asked why they don't just fine-tune a model instead of building agents, Kus said Box is 'pretty anti-fine-tuning at this moment.' Once you fine-tune, you must re-tune every future evolution of that model, and Box supports Gemini, Llama, OpenAI, and Anthropic — making consistent cross-vendor tuning impractical. Crucially, 'the next version of the model usually just gets better,' so a tuned older model is often beaten by an un-tuned newer one.

The directional claim: when your strategy depends on model portability and on riding the rising tide of frontier improvements, fine-tuning anchors you to a depreciating asset and a maintenance treadmill. Box's alternative is prompts, cached prompts, and agentic orchestration — all model-agnostic and immediately compatible with each new release. This is context-dependent (single-model, stable-task, latency/cost-critical use cases can still justify tuning), but for a multi-vendor platform betting on continued model progress, the agentic + prompting path preserves optionality that fine-tuning forecloses.

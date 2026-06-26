---
id: INS-260626-21EA
domain: ai-development
topic: llm-training
title: >-
  Build small models that are excellent at a narrow capability, not average at
  everything
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - small-models
  - fine-tuning
  - capability-targeting
  - task-specific
  - specialization
sources:
  - type: youtube
    title: >-
      Everything I Learned Training Frontier Small Models — Maxime Labonne,
      Liquid AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=fLUtUkqYHnQ'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because small models have low knowledge capacity, the winning strategy is to
    make them very good at specific tasks (e.g. data extraction, tool use) and
    accept being weak at code or math nobody uses them for.
  standard: >-
    Labonne argues that low knowledge capacity is actually freeing: rather than
    chase average performance across every benchmark, you concentrate the
    model's limited capacity on the capabilities that matter for its deployment.
    Liquid's LFM 2.5 350M was deliberately optimized to be very strong at data
    extraction (case-report-style) and tool use (BFCL, Tau-bench), while
    accepting weakness on coding and math — 'people don't use it that way
    anyway.' This applies to fine-tuning too: the narrower you can scope a
    downstream task (e.g. calling one particular function), the better the
    result. The principle generalizes beyond edge models — capacity-constrained
    systems should be designed around an explicit capability target, treating
    breadth as a cost rather than a default goal. Trying to be balanced on
    everything spreads scarce capacity too thin to be excellent anywhere.
stance: >-
  A small model deliberately optimized for a few target capabilities beats one
  tuned to be mediocre across all benchmarks.
related:
  - INS-260402-30DC
  - INS-260410-0142
  - INS-260605-738E
  - INS-260605-2C70
  - INS-260605-4FE3
  - INS-260605-8F95
  - INS-260605-04E7
  - INS-260626-5A6D
  - INS-260626-5037
  - PRI-260328-A82C
---
Labonne argues that low knowledge capacity is actually freeing: rather than chase average performance across every benchmark, you concentrate the model's limited capacity on the capabilities that matter for its deployment. Liquid's LFM 2.5 350M was deliberately optimized to be very strong at data extraction (case-report-style) and tool use (BFCL, Tau-bench), while accepting weakness on coding and math — 'people don't use it that way anyway.' This applies to fine-tuning too: the narrower you can scope a downstream task (e.g. calling one particular function), the better the result. The principle generalizes beyond edge models — capacity-constrained systems should be designed around an explicit capability target, treating breadth as a cost rather than a default goal. Trying to be balanced on everything spreads scarce capacity too thin to be excellent anywhere.

---
id: INS-260626-2A5F
domain: ai-development
topic: agent-patterns
title: Reasoning strategies in code unlock far more than prompt optimization
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reasoning
  - agent-design
  - prompt-optimization
  - dspy
  - gepa
  - harness
sources:
  - type: youtube
    title: The Powerful Alternative To Fine-Tuning
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=UPGB-hsAoVY'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Optimizing prompts gets you a slice of the gains; encoding reasoning
    strategies in code is what takes a hard task from a few percent to
    near-saturation.
  standard: >-
    A harness is more than a better prompt — it is code, prompts, and data
    wrapping the model. Fischer reports that on their hardest task, manually
    optimizing prompts hard got them to about 5% with Gemini 1.5 Flash, and
    adding reasoning strategies took them from 5% to 95%. The structure around
    the model, not the wording fed into it, was the dominant lever.


    He is explicit that automated prompt optimization (he names GEPA-style
    approaches that 'everybody's implementing') yields real but bounded
    improvements, and is 'very far' from what is available once you think about
    reasoning strategies written in code rather than encoded in prose. The
    implication is that teams plateauing on prompt tuning are leaving most of
    the achievable headroom on the table because the missing gains live in
    control flow — decomposition, verification, multi-call orchestration — not
    in phrasing.


    For builders: when an agent stalls, the higher-leverage move is usually to
    restructure how the model reasons (how calls are chained, what gets
    verified, how intermediate results are reranked or summarized) rather than
    to keep iterating on prompt wording. Prompt optimization is a floor, not a
    ceiling.
stance: >-
  Reasoning strategies expressed in code deliver dramatically larger performance
  gains than automated prompt optimization alone.
related:
  - INS-260403-F400
  - INS-260403-7D7A
  - INS-260403-F664
  - PRI-260406-1AC6
  - INS-260410-F259
  - INS-260410-87B5
  - INS-260514-AC1D
  - INS-260625-C700
  - INS-260626-613C
---
A harness is more than a better prompt — it is code, prompts, and data wrapping the model. Fischer reports that on their hardest task, manually optimizing prompts hard got them to about 5% with Gemini 1.5 Flash, and adding reasoning strategies took them from 5% to 95%. The structure around the model, not the wording fed into it, was the dominant lever.

He is explicit that automated prompt optimization (he names GEPA-style approaches that 'everybody's implementing') yields real but bounded improvements, and is 'very far' from what is available once you think about reasoning strategies written in code rather than encoded in prose. The implication is that teams plateauing on prompt tuning are leaving most of the achievable headroom on the table because the missing gains live in control flow — decomposition, verification, multi-call orchestration — not in phrasing.

For builders: when an agent stalls, the higher-leverage move is usually to restructure how the model reasons (how calls are chained, what gets verified, how intermediate results are reranked or summarized) rather than to keep iterating on prompt wording. Prompt optimization is a floor, not a ceiling.

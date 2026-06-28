---
id: INS-260628-009E
domain: ai-development
topic: evals
title: Evals are the durable specification of intent because they survive model swaps
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - specification
  - model-swapping
  - intent
  - natural-language
sources:
  - type: youtube
    title: >-
      On Engineering AI Systems that Endure The Bitter Lesson - Omar Khattab,
      DSPy & Databricks
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qdmxApz3EJI'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When you tinker with a prompt to appease a model you're encoding criteria
    you never wrote down; evals externalize "here's what I actually care about"
    so the spec survives a model change.
  standard: >-
    Khattab distinguishes natural-language definitions from prompts:
    natural-language definitions are highly localized pieces of genuinely
    ambiguous intent that could not be expressed any other way — things you can
    only say in English, so you say them in English. But much prompt iteration
    is not that; it's tinkering to make a *specific* model perform well against
    criteria you hold in your head and never state. That hidden iteration is the
    failure mode.


    Evals are the remedy because they make the criteria explicit and
    model-independent: an eval says "here is what I actually care about," and
    when you change the model the eval still encodes what you care about. It is
    the fundamental, enduring artifact while the prompt tweaks are disposable.
    Khattab also warns you cannot rely on the system *learning* the core
    behavior from data — induction from data is much harder than following
    instructions — so you need both explicit specification and evals. The
    practical takeaway: invest in evaluating by hand and writing down criteria,
    because that investment outlives every model release.
stance: >-
  Evals, not prompts, are the durable record of what you actually care about,
  since prompt tinkering silently encodes criteria that die when the model
  changes.
related:
  - INS-260329-8226
  - INS-260330-43E3
  - INS-260403-2FAE
  - INS-260409-DBCF
  - INS-260409-6656
  - INS-260410-B118
  - INS-260605-7125
  - INS-260605-F4AE
  - INS-260625-B4AC
  - INS-260625-0148
---
Khattab distinguishes natural-language definitions from prompts: natural-language definitions are highly localized pieces of genuinely ambiguous intent that could not be expressed any other way — things you can only say in English, so you say them in English. But much prompt iteration is not that; it's tinkering to make a *specific* model perform well against criteria you hold in your head and never state. That hidden iteration is the failure mode.

Evals are the remedy because they make the criteria explicit and model-independent: an eval says "here is what I actually care about," and when you change the model the eval still encodes what you care about. It is the fundamental, enduring artifact while the prompt tweaks are disposable. Khattab also warns you cannot rely on the system *learning* the core behavior from data — induction from data is much harder than following instructions — so you need both explicit specification and evals. The practical takeaway: invest in evaluating by hand and writing down criteria, because that investment outlives every model release.

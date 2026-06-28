---
id: INS-260625-2563
domain: ai-development
topic: system-building
title: >-
  Sort eval-driven fixes into three zones, and treat benchmark overfitting as
  the danger zone
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - ai-agents
  - overfitting
  - harness-tuning
  - hill-climbing
sources:
  - type: youtube
    title: 'Evals Are Broken, Use Them Anyway — Ara Khan, Cline'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=QuuIywMG4s8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Zone 1 is obvious bugs, Zone 2 is nuanced per-model harness tuning where the
    real wins are, Zone 3 is overfitting to the benchmark—don't go there.
  standard: >-
    When you hill-climb an eval, the gains separate into three zones. Zone 1 is
    obvious flaws: a bug that crashes the harness, rate limits—fix these,
    they're free. Zone 2 is nuanced improvements and is the most valuable:
    prompt-engineering techniques that help Anthropic models but not Codex or
    Gemini, timeout and CPU/memory tuning of containers, and thinking-budget
    adjustments (asking a model to think more sometimes degrades quality because
    it loops—'I am a model. I am a model.'—burning 2,000 tokens). Zone 2 is the
    essence of working with agents: tweaking the harness so it actually
    leverages the best of each model. Zone 3 is the danger zone—straight-up
    overfitting and cheating to post a high score for a tweet. The discipline is
    to live in Zone 2, bank Zone 1, and refuse Zone 3, because a benchmark gamed
    is a benchmark destroyed for everyone.
stance: >-
  Eval-driven improvements fall into obvious-flaw fixes, nuanced model-specific
  tuning, and outright overfitting, and the real value lives in the middle zone
  while the last zone must be avoided.
related:
  - INS-260410-BFCF
  - INS-260413-EB61
  - INS-260605-4856
  - INS-260605-1066
  - INS-260605-15B8
  - INS-260410-B0D6
  - INS-260626-C412
  - INS-260410-9DB0
---
When you hill-climb an eval, the gains separate into three zones. Zone 1 is obvious flaws: a bug that crashes the harness, rate limits—fix these, they're free. Zone 2 is nuanced improvements and is the most valuable: prompt-engineering techniques that help Anthropic models but not Codex or Gemini, timeout and CPU/memory tuning of containers, and thinking-budget adjustments (asking a model to think more sometimes degrades quality because it loops—'I am a model. I am a model.'—burning 2,000 tokens). Zone 2 is the essence of working with agents: tweaking the harness so it actually leverages the best of each model. Zone 3 is the danger zone—straight-up overfitting and cheating to post a high score for a tweet. The discipline is to live in Zone 2, bank Zone 1, and refuse Zone 3, because a benchmark gamed is a benchmark destroyed for everyone.

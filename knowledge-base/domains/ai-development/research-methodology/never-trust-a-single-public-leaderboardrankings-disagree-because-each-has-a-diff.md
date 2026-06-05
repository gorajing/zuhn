---
id: INS-260605-77E5
domain: ai-development
topic: research-methodology
title: >-
  Never trust a single public leaderboard—rankings disagree because each has a
  different perspective
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - leaderboards
  - benchmarking
  - evaluation
  - elo
  - model-selection
sources:
  - type: youtube
    title: >-
      20 days of compute vs 7 hours: rethinking what state-of-the-art means —
      Bertrand Charpentier, Pruna
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=hqHC6Z_lXyo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Different leaderboards rank the same models differently and use incomparable
    Elo ranges, so disagreement signals which models are actually
    near-equivalent.
  standard: >-
    Charpentier compares LM/Arena, Design Arena, and Artificial Analysis on
    image-editing models and finds the top model differs across all three; one
    model jumps from rank 10 on one to rank 5 on another, some have duplicate
    entries, and some appear on one board but not others. Even the Elo scores
    live in incomparable ranges (1,100–1,300 on one, a different range on
    another), so relative model strength is genuinely ambiguous.


    The correction is to look at multiple leaderboards and read their
    disagreement as information: when rankings diverge wildly, the models are
    probably approximately equivalent, and a #1 finish on one board does not
    mean best overall. Crucially, you should also drill into the
    use-case-specific sub-leaderboard (e.g. 'removing objects' vs aggregate
    image editing) because the aggregate-best model is frequently never #1 on
    any specific task you actually care about.
stance: >-
  A single public leaderboard is unreliable for model selection and must be
  cross-checked against several plus your specific use case.
related:
  - INS-260402-1F41
  - INS-260403-8BA2
  - INS-260405-5702
  - INS-260330-FF94
  - INS-260409-93EC
  - INS-260413-09C4
  - INS-260605-33B4
  - INS-260410-5951
  - PRI-260406-C168
---
Charpentier compares LM/Arena, Design Arena, and Artificial Analysis on image-editing models and finds the top model differs across all three; one model jumps from rank 10 on one to rank 5 on another, some have duplicate entries, and some appear on one board but not others. Even the Elo scores live in incomparable ranges (1,100–1,300 on one, a different range on another), so relative model strength is genuinely ambiguous.

The correction is to look at multiple leaderboards and read their disagreement as information: when rankings diverge wildly, the models are probably approximately equivalent, and a #1 finish on one board does not mean best overall. Crucially, you should also drill into the use-case-specific sub-leaderboard (e.g. 'removing objects' vs aggregate image editing) because the aggregate-best model is frequently never #1 on any specific task you actually care about.

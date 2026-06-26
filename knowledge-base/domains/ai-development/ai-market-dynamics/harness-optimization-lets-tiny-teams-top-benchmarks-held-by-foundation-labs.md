---
id: INS-260626-4E80
domain: ai-development
topic: ai-market-dynamics
title: Harness optimization lets tiny teams top benchmarks held by foundation labs
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - benchmarks
  - arc-agi
  - humanitys-last-exam
  - cost-asymmetry
  - small-teams
  - leverage
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
    The leverage moved from training compute to harness optimization — a
    7-person team beat frontier models on ARC-AGI and HLE using cheaper base
    models for under $100k.
  standard: >-
    Fischer's reported results (self-published, founder-pitch context — treat
    the exact numbers with appropriate skepticism) illustrate a cost asymmetry
    rather than just a leaderboard win. On ARC-AGI v2, two days after Gemini 3
    Deep Think hit 45%, Poetiq reported 54% — built on the cheaper Gemini 3 Pro,
    at roughly $32 per problem versus ~$70, i.e. higher accuracy at half the
    cost. On Humanity's Last Exam they reported 55% versus Anthropic's Claude
    Opus 4.6 at 53.1%, with the optimization run costing under $100k from a
    seven-person team.


    The structural point survives even if you discount the specifics: when
    differentiation lives in the harness, the binding constraint shifts from
    training-compute budget (which favors the labs) to optimization cleverness
    and engineering (which a small team can supply). Beating a state-of-the-art
    model no longer requires out-spending it on pretraining; it requires
    out-structuring it on top of a cheaper checkpoint.


    This reshapes who can compete in 'frontier-adjacent' capability. It also
    reframes the relationship: the cheaper base model plus a strong harness can
    beat the expensive flagship, so picking the most capable raw model is not
    always the cost-optimal path to the best end-to-end result.
stance: >-
  A handful of researchers optimizing a harness around a cheaper model can beat
  foundation labs on hard benchmarks at a fraction of the cost.
related:
  - INS-260322-31F8
  - INS-260410-5951
  - INS-260514-BB1C
  - INS-260605-8F42
  - INS-260605-D33F
  - INS-260625-8C41
  - INS-260323-3F39
  - INS-260505-ABCC
  - INS-260626-D8AE
---
Fischer's reported results (self-published, founder-pitch context — treat the exact numbers with appropriate skepticism) illustrate a cost asymmetry rather than just a leaderboard win. On ARC-AGI v2, two days after Gemini 3 Deep Think hit 45%, Poetiq reported 54% — built on the cheaper Gemini 3 Pro, at roughly $32 per problem versus ~$70, i.e. higher accuracy at half the cost. On Humanity's Last Exam they reported 55% versus Anthropic's Claude Opus 4.6 at 53.1%, with the optimization run costing under $100k from a seven-person team.

The structural point survives even if you discount the specifics: when differentiation lives in the harness, the binding constraint shifts from training-compute budget (which favors the labs) to optimization cleverness and engineering (which a small team can supply). Beating a state-of-the-art model no longer requires out-spending it on pretraining; it requires out-structuring it on top of a cheaper checkpoint.

This reshapes who can compete in 'frontier-adjacent' capability. It also reframes the relationship: the cheaper base model plus a strong harness can beat the expensive flagship, so picking the most capable raw model is not always the cost-optimal path to the best end-to-end result.

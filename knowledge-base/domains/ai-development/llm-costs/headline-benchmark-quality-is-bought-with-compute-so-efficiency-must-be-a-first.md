---
id: INS-260605-B9A9
domain: ai-development
topic: llm-costs
title: >-
  Headline benchmark quality is bought with compute, so efficiency must be a
  first-class evaluation axis
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - efficiency
  - compute-cost
  - energy
  - model-compression
  - inference-cost
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
    A 26K-battle image evaluation took 20 days of compute / $5K / 556 kWh on a
    slow model versus 7 hours / $265 on a fast one with comparable quality.
  standard: >-
    Charpentier quantifies the hidden cost behind leaderboard quality:
    evaluating ChatGPT-image over 26K battles meant generating 26K images at ~62
    seconds each, totaling 20 days of compute, ~$5,000, and ~556 kWh—which he
    frames as the energy of running 400 marathons. A comparably-scored fast
    model did the same evaluation in 7 hours for $265 (four marathons).


    The lesson is that quality figures on a leaderboard are entangled with the
    compute spent to produce them, and the marginal quality gain of a heavy
    model frequently is not worth its cost. This is why efficiency belongs on
    the evaluation axis from the start, and why a portfolio of small,
    compressed, task-specialized models (via quantization, pruning, and reducing
    diffusion denoising steps through distillation or caching) can dominate a
    single large foundation model in production economics.
stance: >-
  Marginal quality gains from larger models are often not worth their compute,
  cost, and energy, so efficiency must be evaluated alongside quality.
related:
  - INS-260410-43E4
  - INS-260409-17E9
  - INS-260322-3646
  - INS-260322-5790
  - INS-260605-1787
  - INS-260605-C53B
---
Charpentier quantifies the hidden cost behind leaderboard quality: evaluating ChatGPT-image over 26K battles meant generating 26K images at ~62 seconds each, totaling 20 days of compute, ~$5,000, and ~556 kWh—which he frames as the energy of running 400 marathons. A comparably-scored fast model did the same evaluation in 7 hours for $265 (four marathons).

The lesson is that quality figures on a leaderboard are entangled with the compute spent to produce them, and the marginal quality gain of a heavy model frequently is not worth its cost. This is why efficiency belongs on the evaluation axis from the start, and why a portfolio of small, compressed, task-specialized models (via quantization, pruning, and reducing diffusion denoising steps through distillation or caching) can dominate a single large foundation model in production economics.

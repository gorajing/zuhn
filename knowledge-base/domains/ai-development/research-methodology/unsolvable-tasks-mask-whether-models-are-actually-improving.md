---
id: INS-260605-B60D
domain: ai-development
topic: research-methodology
title: Unsolvable tasks mask whether models are actually improving
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - benchmarking
  - saturation
  - measurement-noise
  - evaluation
  - data-quality
sources:
  - type: youtube
    title: 'Task Fidelity Scaling Laws — Kobie Crawdord, Snorkel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YYH0DMQr30A'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Across public benchmarks, a fixed set of tasks that can never be completed
    becomes a source of noise that masks whether model improvement is genuinely
    happening.
  standard: >-
    Comparing benchmarks like Terminal Bench v1 versus v2 and other variants,
    Snorkel found that some tasks never get completed — not because models are
    weak, but because the tasks are literally unsolvable. This persistent floor
    of impossible tasks acts as measurement noise: it muddies whether falling
    failure rates reflect real model gains or just the immovable residue, and it
    makes benchmarks appear to saturate faster than warranted.


    This is a caution for anyone reading or building leaderboards. Aggregate
    scores conflate model capability with task validity, so a benchmark's
    apparent ceiling may be an artifact of broken tasks rather than a true
    capability limit. Cleaning the unsolvable tail is a prerequisite for
    trusting any claim that 'models stopped improving' — otherwise you may be
    measuring the noise floor, not the frontier.
stance: >-
  A persistent pool of literally-unsolvable tasks inside a benchmark injects
  noise that hides real model progress and accelerates apparent saturation.
related:
  - INS-260323-01F9
  - INS-260403-5F69
  - INS-260410-0DA5
  - INS-260410-F167
  - INS-260413-B79B
  - INS-260514-5AEF
  - INS-260605-3490
  - INS-260605-3E7F
  - INS-260605-3ABF
  - INS-260625-1187
---
Comparing benchmarks like Terminal Bench v1 versus v2 and other variants, Snorkel found that some tasks never get completed — not because models are weak, but because the tasks are literally unsolvable. This persistent floor of impossible tasks acts as measurement noise: it muddies whether falling failure rates reflect real model gains or just the immovable residue, and it makes benchmarks appear to saturate faster than warranted.

This is a caution for anyone reading or building leaderboards. Aggregate scores conflate model capability with task validity, so a benchmark's apparent ceiling may be an artifact of broken tasks rather than a true capability limit. Cleaning the unsolvable tail is a prerequisite for trusting any claim that 'models stopped improving' — otherwise you may be measuring the noise floor, not the frontier.

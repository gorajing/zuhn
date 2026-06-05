---
id: INS-260605-1066
domain: ai-development
topic: research-methodology
title: Reproduce external benchmarks before trusting your own numbers
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - reproducibility
  - harness
  - model-parameters
  - benchmarks
sources:
  - type: youtube
    title: >-
      SWE-rebench: Lessons from Evaluating Coding Agents — Ibragim Badertdinov,
      Nebius
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wcUJWP6WpGM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Default parameters like reasoning level and caching silently drift across
    model versions even within a family, so calibrate your harness against a
    known benchmark first.
  standard: >-
    Across model updates — even within the same family, e.g. GPT-5.2 to GPT-5.4
    — default parameters for reasoning level, caching, and other settings can
    drift, quietly changing results in ways unrelated to actual capability. The
    recommended discipline is to first run an established external benchmark
    such as SWE-bench or a terminal bench on your own infrastructure and confirm
    that your numbers match the reported ones; only then begin custom
    experiments. This converts a silent confound into an explicit checkpoint: if
    you cannot reproduce known results, your harness has a bug or a
    misconfigured default, and any downstream comparison would be measuring your
    plumbing rather than the models.
stance: >-
  You should reproduce a published benchmark on your own harness and match its
  reported scores before running any custom experiments.
related:
  - INS-260403-2138
  - INS-260410-F08E
  - INS-260410-9DB0
  - INS-260410-B0D6
  - PRI-260426-890F
  - INS-260514-5AEF
  - INS-260605-4856
---
Across model updates — even within the same family, e.g. GPT-5.2 to GPT-5.4 — default parameters for reasoning level, caching, and other settings can drift, quietly changing results in ways unrelated to actual capability. The recommended discipline is to first run an established external benchmark such as SWE-bench or a terminal bench on your own infrastructure and confirm that your numbers match the reported ones; only then begin custom experiments. This converts a silent confound into an explicit checkpoint: if you cannot reproduce known results, your harness has a bug or a misconfigured default, and any downstream comparison would be measuring your plumbing rather than the models.

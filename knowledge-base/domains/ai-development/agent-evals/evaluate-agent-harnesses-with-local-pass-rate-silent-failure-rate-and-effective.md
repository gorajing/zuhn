---
id: INS-260626-33BE
domain: ai-development
topic: agent-evals
title: >-
  Evaluate agent harnesses with local pass rate, silent failure rate, and
  effective pass rate
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - metrics
  - silent-failures
  - benchmarking
sources:
  - type: blog
    title: >-
      NOVA: A Verification-Aware Agent Harness for Architecture Evolution in
      Industrial Recommender Systems
    url: 'https://arxiv.org/html/2606.27243'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    NOVA separates local pass rate, runnable-but-negative silent failure rate,
    and effective pass rate instead of collapsing them into one score.
  standard: >-
    In NOVA's experiments, LPR measures locally valid candidates, SFR measures
    runnable candidates that are negative or ineffective, and EPR measures
    end-to-end effective candidates. This decomposition exposes whether a method
    fails by generating invalid code, by generating valid but useless changes,
    or by failing to produce production-positive modifications.


    The implication for agent evaluation is that one aggregate success metric is
    too coarse for harness work. Different components repair different failure
    modes: semantic gates improve validity, gradient feedback reduces repeated
    silent failures, and offline/online selection improves effective outcomes.
stance: >-
  Agent benchmarks should report validity, silent negative outcomes, and
  end-to-end effective success separately because each failure class implies a
  different fix.
related:
  - INS-260410-B3C2
  - INS-260627-068D
  - INS-260410-E3BB
  - INS-260627-7541
  - INS-260605-4A94
---
In NOVA's experiments, LPR measures locally valid candidates, SFR measures runnable candidates that are negative or ineffective, and EPR measures end-to-end effective candidates. This decomposition exposes whether a method fails by generating invalid code, by generating valid but useless changes, or by failing to produce production-positive modifications.

The implication for agent evaluation is that one aggregate success metric is too coarse for harness work. Different components repair different failure modes: semantic gates improve validity, gradient feedback reduces repeated silent failures, and offline/online selection improves effective outcomes.

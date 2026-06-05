---
id: INS-260605-1CEB
domain: ai-development
topic: llm-behavior
title: Maturing models produce fewer but harder-to-detect bugs
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reinforcement-learning
  - bugs
  - code-review
  - failure-modes
sources:
  - type: youtube
    title: 'Can LLMs generate Enterprise Quality Code? — Prasenjit Sarkar, Sonar'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=NuePCNMpWGc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    As models secure against known issues via RL, the bugs that remain become
    finer and harder for a human to spot.
  standard: >-
    Sonar observed that total bugs and vulnerabilities per model decrease as
    models mature through reinforcement learning — they learn to avoid the
    security problems they've already seen. But the residual defects migrate
    into a different genre: finer bugs and finer security issues that are very
    hard for a human reviewer to detect.


    This is a counterintuitive risk profile. Improving aggregate metrics can
    lull teams into trusting model output more, precisely when the surviving
    defects are the most dangerous because they evade casual review. The
    defensive implication is that human-only review scales poorly against
    maturing models; you need automated static analysis tuned to subtle
    patterns, not just spot-checks, because the bugs that get through are
    selected for being invisible to humans.
stance: >-
  Reinforcement learning reduces a model's total defect count while shifting the
  residual defects toward subtler, harder-to-catch failures.
related:
  - INS-260325-D25C
  - INS-260328-3446
  - INS-260329-F84E
  - INS-260329-DFD1
  - INS-260329-0154
  - INS-260327-98DE
  - INS-260410-F08E
  - INS-260410-E73E
  - INS-260410-B3C4
  - INS-260410-A1CA
---
Sonar observed that total bugs and vulnerabilities per model decrease as models mature through reinforcement learning — they learn to avoid the security problems they've already seen. But the residual defects migrate into a different genre: finer bugs and finer security issues that are very hard for a human reviewer to detect.

This is a counterintuitive risk profile. Improving aggregate metrics can lull teams into trusting model output more, precisely when the surviving defects are the most dangerous because they evade casual review. The defensive implication is that human-only review scales poorly against maturing models; you need automated static analysis tuned to subtle patterns, not just spot-checks, because the bugs that get through are selected for being invisible to humans.

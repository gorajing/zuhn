---
id: INS-260605-8789
domain: ai-development
topic: agents
title: 'Benchmark an LLM judge against human inter-rater agreement, not perfection'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - meta-evaluation
  - llm-as-judge
  - golden-dataset
  - inter-rater-reliability
  - calibration
sources:
  - type: youtube
    title: >-
      Ship Real Agents: Hands-On Evals for Agentic Applications — Laurie Voss,
      Arize
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Xfl50508LZM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Two experts grading the same output against the same rubric often agree only
    20-30% of the time, so a judge hitting 0.4 agreement with you is doing
    'really, really well.'
  standard: >-
    Meta-evaluation treats your judge as an ML classifier measured against a
    human-labeled golden dataset (split 75/25 to detect overfitting, ~50-200
    labels for real signal). But the benchmark is human performance, not a
    perfect score: inter-rater reliability between two domain experts on a
    subjective rubric is frequently as low as 0.2-0.3, so a judge that beats
    that bar is succeeding. A judge disagreeing with you is not grounds to
    discard the eval unless it disagrees more than another human would. Two
    corollaries: (1) failures should 'seem fair' — if a failing trace looks fine
    to you, the eval is probably broken, not the agent (Anthropic found Opus
    scored 42% on CoreBench until they discovered the eval was rejecting
    96.124991 against an expected 96.12; after fixing the eval, the score jumped
    to 95%). (2) Watch for judge biases — position, length, confidence, and
    self-preference (use a different model, even a different provider, to judge
    than to generate). Never take eval scores at face value; always read the
    explanations.
stance: >-
  An LLM judge that agrees with you more often than two human experts agree with
  each other is good enough — disagreement with you is only a problem when it
  exceeds the human-human disagreement baseline.
related:
  - INS-260329-5BB0
  - INS-260605-BEA5
  - INS-260625-722D
  - INS-260605-0DB3
  - INS-260625-3162
  - INS-260605-EC51
  - INS-260605-355C
---
Meta-evaluation treats your judge as an ML classifier measured against a human-labeled golden dataset (split 75/25 to detect overfitting, ~50-200 labels for real signal). But the benchmark is human performance, not a perfect score: inter-rater reliability between two domain experts on a subjective rubric is frequently as low as 0.2-0.3, so a judge that beats that bar is succeeding. A judge disagreeing with you is not grounds to discard the eval unless it disagrees more than another human would. Two corollaries: (1) failures should 'seem fair' — if a failing trace looks fine to you, the eval is probably broken, not the agent (Anthropic found Opus scored 42% on CoreBench until they discovered the eval was rejecting 96.124991 against an expected 96.12; after fixing the eval, the score jumped to 95%). (2) Watch for judge biases — position, length, confidence, and self-preference (use a different model, even a different provider, to judge than to generate). Never take eval scores at face value; always read the explanations.

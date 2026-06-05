---
id: INS-260605-AABE
domain: ai-development
topic: system-design
title: 'Agent evaluation needs functional, not just technical, metrics'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - metrics
  - agents
  - precision-recall
  - evaluation
sources:
  - type: youtube
    title: 'Does GenAI "belong" to data scientists? — Phil Hetzel, Braintrust'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=NKwIX3CiRgU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    ML engineers obsess over precision/recall/F1, but evaluating an agent means
    evaluating functional performance across a much wider surface than those
    classification metrics cover.
  standard: >-
    Teams coming from traditional ML lock onto the metrics that got them there —
    precision, recall, F1 — because those measure technical performance on a
    narrow classification task. Agents demand evaluation of functional
    performance: did the agent actually accomplish the user's goal, across a far
    broader surface area of behaviors and contexts. The risk is that a rigorous
    testing mindset gets misapplied to the wrong target, producing confident
    measurement of the wrong thing. The classification metrics still have a
    place (notably for grading LLM-as-judge outputs against labeled data), but
    they are not the primary measure of whether an agent is good.
stance: >-
  Carrying over precision/recall/F1 as the primary lens for agents is a category
  error because agent quality is a far broader, functional surface area.
related:
  - INS-260525-3A9A
  - INS-260605-365A
  - INS-260605-8109
  - INS-260410-9F17
  - INS-260530-D34F
  - INS-260605-8B25
---
Teams coming from traditional ML lock onto the metrics that got them there — precision, recall, F1 — because those measure technical performance on a narrow classification task. Agents demand evaluation of functional performance: did the agent actually accomplish the user's goal, across a far broader surface area of behaviors and contexts. The risk is that a rigorous testing mindset gets misapplied to the wrong target, producing confident measurement of the wrong thing. The classification metrics still have a place (notably for grading LLM-as-judge outputs against labeled data), but they are not the primary measure of whether an agent is good.

---
id: INS-260605-EC51
domain: ai-development
topic: system-design
title: >-
  LLM-as-judge is just prompts and models, so validate the judge against labeled
  data
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - evals
  - validation
  - human-alignment
  - metrics
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
    An LLM judge is just a prompt plus a model — build a labeled dataset and run
    precision/recall/F1 on the judge itself, then keep checking it against human
    agreement over time.
  standard: >-
    People are tempted to believe LLM-as-judge outputs blindly during evals, but
    a judge is just another prompt and model and can be wrong. The discipline is
    to create a labeled dataset and apply the traditional classification metrics
    — precision, recall, F1 — to the judge's verdicts, an area where
    data-science rigor genuinely transfers. Beyond a one-time check, production
    data should continually feed an offline evaluation set so the team can
    detect whether the judge is converging toward or diverging from human
    agreement. This is one of the clearest places where data scientists add
    value to agent building: keeping the evaluator honest.
stance: >-
  Treating an LLM judge as trustworthy without grading it against human-labeled
  data is a mistake, since the judge is itself just a fallible prompt-and-model
  that must be measured.
related:
  - INS-260403-EA93
  - INS-260404-E185
  - INS-260404-2135
  - INS-260410-83EC
  - INS-260605-8789
  - INS-260605-C009
  - INS-260605-0DB3
  - INS-260605-D3C7
  - INS-260605-BEA5
---
People are tempted to believe LLM-as-judge outputs blindly during evals, but a judge is just another prompt and model and can be wrong. The discipline is to create a labeled dataset and apply the traditional classification metrics — precision, recall, F1 — to the judge's verdicts, an area where data-science rigor genuinely transfers. Beyond a one-time check, production data should continually feed an offline evaluation set so the team can detect whether the judge is converging toward or diverging from human agreement. This is one of the clearest places where data scientists add value to agent building: keeping the evaluator honest.

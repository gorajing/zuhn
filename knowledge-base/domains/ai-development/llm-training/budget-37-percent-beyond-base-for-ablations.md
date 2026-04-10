---
id: INS-260320-5818
domain: ai-development
topic: llm-training
title: Budget 37 Percent Beyond Base Training for Ablations
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm
  - training
  - budget
  - ablations
  - compute-cost
  - huggingface
sources:
  - type: reddit
    title: 200+ pages of Hugging Face secrets on how to train an LLM
    author: u/unknown
related:
  - INS-260320-7682
  - INS-260320-922A
  - INS-260327-C962
  - INS-260410-E660
  - INS-260330-ED9D
date_extracted: '2026-03-20'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Main pretraining consumes 63% of total compute; plan for 37% additional
    budget for ablation studies, debugging, and restarts due to infrastructure
    failures.
  standard: |
    HuggingFace's SmolLM3 training revealed that the main pretraining run
    accounts for only 63% of total compute expenditure. The remaining 37%
    goes to ablation experiments, debugging, and recovery from failures.
    The playbook documents specific infrastructure issues: network storage
    bottlenecks, dataloader bugs, and a critical tensor parallelism bug
    that required restarting after 1 trillion tokens had already been
    processed. Organizations planning LLM training should budget roughly
    37% beyond their base training compute estimate for ablations and
    unexpected debugging. This cost structure applies even with experienced
    teams -- HuggingFace's team notes that "the 2am dataloader debugging
    sessions" are an inherent part of the process.
stance: >-
  LLM pretraining consumes only 63% of total compute with 37% needed for
  ablations and debugging
evidence:
  - id: INS-260330-ED9D
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---

HuggingFace's SmolLM3 training revealed that the main pretraining run
accounts for only 63% of total compute expenditure. The remaining 37%
goes to ablation experiments, debugging, and recovery from failures.
The playbook documents specific infrastructure issues: network storage
bottlenecks, dataloader bugs, and a critical tensor parallelism bug
that required restarting after 1 trillion tokens had already been
processed. Organizations planning LLM training should budget roughly
37% beyond their base training compute estimate for ablations and
unexpected debugging. This cost structure applies even with experienced
teams -- HuggingFace's team notes that "the 2am dataloader debugging
sessions" are an inherent part of the process.

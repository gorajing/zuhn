---
id: INS-260628-7548
domain: ai-development
topic: llm-training
title: >-
  For scientific reasoning, small expert-verified datasets beat large
  mixed-quality ones
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - data-quality
  - reinforcement-learning
  - scientific-reasoning
  - dataset-curation
  - scaling-laws
sources:
  - type: youtube
    title: >-
      Z.ai GLM 4.6: What We Learned From 100 Million Open Source Downloads —
      Yuxuan Zhang, Z.ai
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=m6MF1OR_9kM'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    On scientific reasoning, training on a small clean set of expert-verified
    questions beats a larger mixed-quality set—data quality matters more than
    raw size.
  standard: >-
    Running science RL on GPQA, Z.ai found the result was 'almost the opposite
    of more data is better.' The winning run trained only on a small set of
    expert-verified, high-quality multiple-choice questions, while the
    mixed-quality dataset—larger but noisier—produced a worse curve. Their
    conclusion: for scientific reasoning, data quality really matters more than
    raw size.


    This is a direct counterweight to the scaling-laws intuition that bigger
    corpora always help. The mechanism is that in a domain with verifiable
    answers, noisy or mislabeled examples inject misleading reward signal that
    actively degrades learning, and the cost of that noise can exceed the
    marginal benefit of more examples. The practical takeaway for anyone
    fine-tuning or doing RL in a narrow, verifiable domain: invest in expert
    verification and aggressive filtering before scaling volume—a small clean
    dataset is not a fallback, it can be the better choice.
stance: >-
  In scientific-reasoning RL, a small set of clean expert-verified questions
  outperforms a larger mixed-quality dataset, reversing the default that more
  data is better.
related:
  - INS-260322-32E3
  - INS-260330-C172
  - INS-260628-1175
  - PRI-260403-F981
  - INS-260625-C700
  - PRI-260413-A957
  - INS-260330-B5D2
---
Running science RL on GPQA, Z.ai found the result was 'almost the opposite of more data is better.' The winning run trained only on a small set of expert-verified, high-quality multiple-choice questions, while the mixed-quality dataset—larger but noisier—produced a worse curve. Their conclusion: for scientific reasoning, data quality really matters more than raw size.

This is a direct counterweight to the scaling-laws intuition that bigger corpora always help. The mechanism is that in a domain with verifiable answers, noisy or mislabeled examples inject misleading reward signal that actively degrades learning, and the cost of that noise can exceed the marginal benefit of more examples. The practical takeaway for anyone fine-tuning or doing RL in a narrow, verifiable domain: invest in expert verification and aggressive filtering before scaling volume—a small clean dataset is not a fallback, it can be the better choice.

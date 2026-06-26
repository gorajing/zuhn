---
id: INS-260625-0D5D
domain: ai-development
topic: llm-training
title: Train tool use only on problems the tool was necessary to solve
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - rejection-sampling
  - fine-tuning
  - data-curation
  - tool-use
  - training-data
sources:
  - type: youtube
    title: 'START by Alibaba: Teaching LLMs to Debug Their Thinking with Python'
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=HCLLJC7d1fE'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep a training sample only when tool-augmented inference solves it AND
    standard tool-free inference fails — this teaches the model to use tools
    precisely where they make the difference, not where it could have answered
    unaided.
  standard: >-
    START's first training phase (Hint-RFT, hint rejection-sampling fine-tuning)
    generates many responses per problem via Hint-infer, then applies a sharp
    selection rule: retain only samples where the tool-augmented process solved
    the problem correctly but standard inference without tools did not.
    Responses with repetitive patterns are also discarded, and the survivors are
    scored before a single response per question is added to the seed dataset
    (10,000 math + 2,000 code samples), which then trains the base model into
    'START-0' via supervised fine-tuning.


    The necessity condition is the clever part. If you train on every problem
    the tool happened to solve, you teach the model to reach for tools even when
    its internal reasoning would already suffice — wasting inference and
    potentially degrading unaided performance. By requiring that tool-free
    inference fails, the curated data concentrates on exactly the cases where
    tool use is the causal difference, sharpening the learned policy toward 'use
    the tool when, and only when, you actually need it.' This is a generally
    applicable data-curation principle: select training examples for the
    marginal contribution of the capability you are trying to instill, not just
    for outcome success.
stance: >-
  Filtering training data to samples solvable with tools but not without
  isolates the cases where tool use genuinely adds value.
related:
  - INS-260605-FE67
  - INS-260625-39E7
  - INS-260625-E292
  - INS-260625-E9A9
  - INS-260626-CE12
---
START's first training phase (Hint-RFT, hint rejection-sampling fine-tuning) generates many responses per problem via Hint-infer, then applies a sharp selection rule: retain only samples where the tool-augmented process solved the problem correctly but standard inference without tools did not. Responses with repetitive patterns are also discarded, and the survivors are scored before a single response per question is added to the seed dataset (10,000 math + 2,000 code samples), which then trains the base model into 'START-0' via supervised fine-tuning.

The necessity condition is the clever part. If you train on every problem the tool happened to solve, you teach the model to reach for tools even when its internal reasoning would already suffice — wasting inference and potentially degrading unaided performance. By requiring that tool-free inference fails, the curated data concentrates on exactly the cases where tool use is the causal difference, sharpening the learned policy toward 'use the tool when, and only when, you actually need it.' This is a generally applicable data-curation principle: select training examples for the marginal contribution of the capability you are trying to instill, not just for outcome success.

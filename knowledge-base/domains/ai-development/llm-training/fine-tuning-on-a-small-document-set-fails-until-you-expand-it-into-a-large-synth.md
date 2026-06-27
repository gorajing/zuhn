---
id: INS-260627-C112
domain: ai-development
topic: llm-training
title: >-
  Fine-tuning on a small document set fails until you expand it into a large
  synthetic dataset
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - synthetic-data
  - fine-tuning
  - knowledge-injection
  - continued-pretraining
  - overfitting
sources:
  - type: youtube
    title: 'Jack Morris: Stuffing Context is not Memory, Updating Weights is'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Jty4s9-Jb78'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't fine-tune on your raw documents — generate a large synthetic dataset
    that describes them and train on that, or the model just memorizes and
    breaks.
  standard: >-
    When Morris fine-tuned a model directly on a 3M 10-K report with next-token
    prediction, it achieved zero loss (perfect memorization) but produced
    gibberish on any question not verbatim in the document ('the passage of a
    passage is a poem'). The model overwrites its general knowledge and becomes
    obsessed with reproducing exact source sentences. The fix, validated by
    Stanford's 'synthetic continued pre-training' paper and Karpathy's nanochat
    experiment, is to take the small source corpus and generate a much larger,
    more diverse synthetic dataset — Q&A pairs, rephrasings, entity-extracted
    variations — that contains only the facts in the original but is large
    enough to train on without overfitting.


    This inverts classic ML intuition: normally a tiny dataset means you overfit
    and must collect more real data. But because modern LLMs are good enough to
    generate training data they can then learn from, you can manufacture scale
    from a small seed. At ~100M–1B synthetic tokens, this approach outperformed
    GPT-4 on the target corpus. Related techniques include 'active reading,'
    'self-study' (cartridges), 'rephrasing the web,' and SEAL (self-adapting
    models that choose what data to generate). The practical takeaway: if you
    want a model to truly know your data, budget for a synthetic-data-generation
    pipeline, not a raw fine-tune.
stance: >-
  Directly fine-tuning a model on a small proprietary corpus destroys it; you
  must first generate a large, diverse synthetic dataset describing that corpus
  and train on that instead.
related:
  - INS-260330-206C
  - INS-260410-F985
  - INS-260409-3230
  - INS-260505-A0F7
  - INS-260514-23D6
  - INS-260530-E6AA
  - INS-260605-738E
  - INS-260605-278E
  - INS-260605-E7F2
  - INS-260625-F573
---
When Morris fine-tuned a model directly on a 3M 10-K report with next-token prediction, it achieved zero loss (perfect memorization) but produced gibberish on any question not verbatim in the document ('the passage of a passage is a poem'). The model overwrites its general knowledge and becomes obsessed with reproducing exact source sentences. The fix, validated by Stanford's 'synthetic continued pre-training' paper and Karpathy's nanochat experiment, is to take the small source corpus and generate a much larger, more diverse synthetic dataset — Q&A pairs, rephrasings, entity-extracted variations — that contains only the facts in the original but is large enough to train on without overfitting.

This inverts classic ML intuition: normally a tiny dataset means you overfit and must collect more real data. But because modern LLMs are good enough to generate training data they can then learn from, you can manufacture scale from a small seed. At ~100M–1B synthetic tokens, this approach outperformed GPT-4 on the target corpus. Related techniques include 'active reading,' 'self-study' (cartridges), 'rephrasing the web,' and SEAL (self-adapting models that choose what data to generate). The practical takeaway: if you want a model to truly know your data, budget for a synthetic-data-generation pipeline, not a raw fine-tune.

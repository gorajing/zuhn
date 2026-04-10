---
id: INS-260410-4E62
domain: ai-development
topic: llm-training
title: 'Pretraining is lossy compression of the internet, not a knowledge store'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - pretraining
  - compression
  - hallucination
  - mental-model
sources:
  - type: youtube
    title: '[1hr Talk] Intro to Large Language Models'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLM parameters are best understood as a ~100x lossy compression of training
    text — the model 'dreams' distributions rather than retrieving stored facts.
  standard: >-
    Karpathy reframes a 140GB Llama-2-70B checkpoint as a ~100x lossy
    compression of ~10TB of internet text, contrasted explicitly against
    lossless zip. This mental model explains why LLM knowledge is simultaneously
    vast and unreliable: the model captures the gist and approximate form of
    documents without preserving identity. Hallucinations aren't bugs layered on
    top of a lookup system — they are the default mode of operation, since
    inference is always generative sampling from a compressed distribution.


    The practical consequence is that any workflow treating an LLM as a fact
    database is fighting the architecture. Retrieval, tool use, and citation
    exist precisely because the compressed representation can't be trusted for
    verbatim recall. When evaluating model outputs, the right prior is
    'plausibly-shaped text from a learned distribution' rather than 'retrieved
    answer, possibly wrong.'


    This also reframes scaling: bigger models are better compressors, which is
    why next-token accuracy improves predictably with parameters and data.
    Compression quality, not memorization, is what's being bought.
stance: >-
  LLM weights should be understood as a lossy Gestalt compression of training
  text rather than a retrievable database of facts.
related:
  - INS-260403-2138
  - INS-260330-CAE6
  - INS-260409-6560
  - PRI-260407-7FB7
  - INS-260403-64F4
  - INS-260327-5D5F
  - INS-260409-1078
---
Karpathy reframes a 140GB Llama-2-70B checkpoint as a ~100x lossy compression of ~10TB of internet text, contrasted explicitly against lossless zip. This mental model explains why LLM knowledge is simultaneously vast and unreliable: the model captures the gist and approximate form of documents without preserving identity. Hallucinations aren't bugs layered on top of a lookup system — they are the default mode of operation, since inference is always generative sampling from a compressed distribution.

The practical consequence is that any workflow treating an LLM as a fact database is fighting the architecture. Retrieval, tool use, and citation exist precisely because the compressed representation can't be trusted for verbatim recall. When evaluating model outputs, the right prior is 'plausibly-shaped text from a learned distribution' rather than 'retrieved answer, possibly wrong.'

This also reframes scaling: bigger models are better compressors, which is why next-token accuracy improves predictably with parameters and data. Compression quality, not memorization, is what's being bought.

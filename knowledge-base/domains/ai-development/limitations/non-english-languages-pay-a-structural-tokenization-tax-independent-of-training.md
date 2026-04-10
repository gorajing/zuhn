---
id: INS-260410-699C
domain: ai-development
topic: limitations
title: >-
  Non-English languages pay a structural tokenization tax independent of
  training data scale
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - tokenization
  - multilingual
  - fairness
  - context-length
sources:
  - type: youtube
    title: Let's build the GPT Tokenizer
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=zduSFxRajkE'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Non-English text gets stretched into many more tokens than equivalent
    English, eating context length and degrading model performance regardless of
    LM training data.
  standard: >-
    The standard explanation for poor non-English LLM performance is 'less
    training data in those languages.' Karpathy points out a second, often
    overlooked cause: the tokenizer itself was trained mostly on English, so its
    BPE merges are optimized for English character sequences. When you tokenize
    Korean or Japanese or any non-Latin script, the same semantic content
    becomes 3-5x as many tokens because the tokenizer never learned long merges
    for those scripts.


    This has cascading effects. The same prompt eats more of the context window,
    the model has fewer tokens of context to attend to, and each unit of meaning
    is fragmented across more tokens that the model has to assemble back
    together. Even if the LM had perfect multilingual training data, the
    tokenization layer would still be acting as a structural disadvantage.


    The implication for fairness: language equity in LLMs cannot be fixed at the
    model layer alone. It requires either retraining the tokenizer on a more
    linguistically balanced corpus, or moving toward tokenization-free
    architectures (which Karpathy notes 'would be amazing' but hasn't been
    proven at scale yet).
stance: >-
  LLMs perform worse on non-English languages partly because the tokenizer
  itself was trained on English-heavy data and chunks foreign text into many
  more tokens — a tax that no amount of inference-time effort can remove.
related:
  - INS-260320-CE36
  - INS-260327-1563
  - INS-260330-206C
  - INS-260402-5034
  - INS-260403-410A
  - INS-260410-CDE6
  - INS-260410-656B
  - INS-260409-1078
  - INS-260410-B282
  - INS-260323-7625
---
The standard explanation for poor non-English LLM performance is 'less training data in those languages.' Karpathy points out a second, often overlooked cause: the tokenizer itself was trained mostly on English, so its BPE merges are optimized for English character sequences. When you tokenize Korean or Japanese or any non-Latin script, the same semantic content becomes 3-5x as many tokens because the tokenizer never learned long merges for those scripts.

This has cascading effects. The same prompt eats more of the context window, the model has fewer tokens of context to attend to, and each unit of meaning is fragmented across more tokens that the model has to assemble back together. Even if the LM had perfect multilingual training data, the tokenization layer would still be acting as a structural disadvantage.

The implication for fairness: language equity in LLMs cannot be fixed at the model layer alone. It requires either retraining the tokenizer on a more linguistically balanced corpus, or moving toward tokenization-free architectures (which Karpathy notes 'would be amazing' but hasn't been proven at scale yet).

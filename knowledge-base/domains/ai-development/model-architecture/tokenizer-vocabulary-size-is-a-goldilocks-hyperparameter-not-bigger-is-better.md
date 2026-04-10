---
id: INS-260410-B282
domain: ai-development
topic: model-architecture
title: >-
  Tokenizer vocabulary size is a Goldilocks hyperparameter, not 'bigger is
  better'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - tokenization
  - vocabulary
  - hyperparameters
  - trade-offs
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
    Larger vocab compresses sequences (more context per token) but bloats
    embedding/softmax layers — the optimum is a tuned trade-off, not a maximum.
  standard: >-
    GPT-4 roughly doubled GPT-2's vocabulary (~50K → ~100K tokens) and the same
    text now fits in roughly half the tokens, letting the model attend to twice
    as much context. But Karpathy is explicit: this doesn't keep paying off
    forever. As vocab grows, the embedding table grows linearly, the final
    softmax projection grows linearly, and each individual token gets seen less
    often during training, weakening its learned representation.


    The sweet spot lives where each token is dense enough to compress sequences
    meaningfully but common enough to be well-trained. There's no clean closed
    form for it — it's an empirical trade-off tuned per model family.


    This is a useful pattern to recognize: many ML 'hyperparameters' look like
    quantities you should maximize but actually have a hidden quadratic — costs
    grow with the dial AND quality of each unit shrinks. Recognizing this
    prevents the common mistake of pushing the dial past its optimum because one
    of the cost terms is invisible at first glance.
stance: >-
  Vocabulary size has a sweet spot where compression and embedding/softmax cost
  are balanced — pushing it higher infinitely degrades the model, not improves
  it.
related:
  - INS-260405-7305
  - INS-260410-34F5
  - INS-260410-699C
  - INS-260409-1078
  - PRI-260406-8B75
  - PRI-260407-7FB7
  - INS-260409-3230
  - INS-260410-78D3
  - INS-260410-264E
---
GPT-4 roughly doubled GPT-2's vocabulary (~50K → ~100K tokens) and the same text now fits in roughly half the tokens, letting the model attend to twice as much context. But Karpathy is explicit: this doesn't keep paying off forever. As vocab grows, the embedding table grows linearly, the final softmax projection grows linearly, and each individual token gets seen less often during training, weakening its learned representation.

The sweet spot lives where each token is dense enough to compress sequences meaningfully but common enough to be well-trained. There's no clean closed form for it — it's an empirical trade-off tuned per model family.

This is a useful pattern to recognize: many ML 'hyperparameters' look like quantities you should maximize but actually have a hidden quadratic — costs grow with the dial AND quality of each unit shrinks. Recognizing this prevents the common mistake of pushing the dial past its optimum because one of the cost terms is invisible at first glance.

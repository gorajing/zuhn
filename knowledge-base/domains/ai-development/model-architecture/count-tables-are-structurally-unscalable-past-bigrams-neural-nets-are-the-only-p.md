---
id: INS-260410-2FEE
domain: ai-development
topic: model-architecture
title: >-
  Count tables are structurally unscalable past bigrams; neural nets are the
  only path to long context
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling
  - context-length
  - n-grams
  - neural-networks
  - combinatorics
sources:
  - type: youtube
    title: 'The spelled-out intro to language modeling: building makemore'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=PaCmpygFfXo'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    With 27 tokens a bigram table has 729 entries but a 10-gram table would need
    27^10 ≈ 2×10^14 entries — tables are structurally unscalable, which is the
    real reason neural language models won.
  standard: >-
    Counting-based n-gram models have the appeal of being trivially optimal for
    their objective — you cannot do better than the maximum likelihood estimate
    you get by counting. But the moment you want to condition on more than a
    couple of previous tokens, the table needs an entry for every possible
    combination of context tokens. For a character-level model with 27 symbols,
    a trigram needs 27^3 entries, a 4-gram needs 27^4, and a 10-gram requires
    ~2×10^14 cells — most of which will never be observed in any realistic
    corpus.


    Neural networks sidestep this by learning a compressed parameterization of
    the conditional distribution rather than storing one. Adding more context
    tokens to a neural model grows the input layer linearly, not the parameter
    count exponentially. This is the structural reason why the entire field
    moved from n-gram statistics to learned representations — not because neural
    nets are 'smarter', but because they are the only representation that can
    plausibly handle context windows larger than a handful of tokens. Any debate
    about whether to use statistical or neural methods for language is really a
    debate about whether your context window is small enough to fit in a table.
stance: >-
  Maintaining explicit count tables becomes combinatorially infeasible beyond
  one or two previous characters, which is why every modern language model is
  gradient-trained rather than count-based.
related:
  - PRI-260328-D893
  - INS-260409-1078
  - INS-260410-C022
  - INS-260330-189F
  - INS-260402-8E46
---
Counting-based n-gram models have the appeal of being trivially optimal for their objective — you cannot do better than the maximum likelihood estimate you get by counting. But the moment you want to condition on more than a couple of previous tokens, the table needs an entry for every possible combination of context tokens. For a character-level model with 27 symbols, a trigram needs 27^3 entries, a 4-gram needs 27^4, and a 10-gram requires ~2×10^14 cells — most of which will never be observed in any realistic corpus.

Neural networks sidestep this by learning a compressed parameterization of the conditional distribution rather than storing one. Adding more context tokens to a neural model grows the input layer linearly, not the parameter count exponentially. This is the structural reason why the entire field moved from n-gram statistics to learned representations — not because neural nets are 'smarter', but because they are the only representation that can plausibly handle context windows larger than a handful of tokens. Any debate about whether to use statistical or neural methods for language is really a debate about whether your context window is small enough to fit in a table.

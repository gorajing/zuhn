---
id: INS-260605-C859
domain: ai-development
topic: llm-training
title: Tokenizer vocabulary size squared sets the minimum training-data scale
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - tokenization
  - scaling-laws
  - bigrams
  - data-requirements
  - vocab-size
sources:
  - type: youtube
    title: >-
      Training an LLM from Scratch, Locally — Angelos Perivolaropoulos,
      ElevenLabs
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UsB70Tf5zcE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pick tokenizer vocab size to match your data budget: you need roughly
    vocab-squared tokens of data to cover the bigrams the model must learn.
  standard: >-
    The workshop frames tokenizer choice as a data-scaling decision, not just a
    representation choice. A 65-token character-level vocabulary produces only
    ~4,225 possible bigrams, so a 1M-character Shakespeare corpus covers nearly
    all of them many times over and the model converges in minutes. A
    50,000-token BPE vocabulary (GPT-2 scale) implies 50,000² ≈ 2.5 billion
    bigrams, requiring trillions of tokens to train well — try it on small data
    and 'it will never converge no matter how many hours you train.'


    This reframes the classic character-vs-BPE tradeoff: character-level isn't
    just 'simpler,' it is the only choice that fits a small data budget, because
    the bigram-coverage requirement is what actually gates convergence. The cost
    is semantic: character tokens make correlations like sky↔blue much harder
    for attention to learn than word-level tokens do, so character models scale
    poorly to real quality even if they train fast.


    The practical heuristic: choose the smallest tokenizer that still captures
    the structure you care about, and size your data to roughly the square of
    that vocabulary. A large tokenizer on a small model is doubly wrong — it
    both starves the model of bigram coverage and bloats the embedding table (a
    50k vocab × 384-dim embedding alone is ~19M params, several times larger
    than the entire 1.8M-param model).
stance: >-
  A model's required training-data volume scales with the square of its
  tokenizer vocabulary, because the model must observe most possible bigrams to
  converge.
related:
  - INS-260410-CDE6
  - INS-260410-2FEE
  - INS-260410-B282
  - INS-260514-3B3C
  - INS-260410-699C
  - INS-260603-6FE3
  - INS-260605-DA2B
---
The workshop frames tokenizer choice as a data-scaling decision, not just a representation choice. A 65-token character-level vocabulary produces only ~4,225 possible bigrams, so a 1M-character Shakespeare corpus covers nearly all of them many times over and the model converges in minutes. A 50,000-token BPE vocabulary (GPT-2 scale) implies 50,000² ≈ 2.5 billion bigrams, requiring trillions of tokens to train well — try it on small data and 'it will never converge no matter how many hours you train.'

This reframes the classic character-vs-BPE tradeoff: character-level isn't just 'simpler,' it is the only choice that fits a small data budget, because the bigram-coverage requirement is what actually gates convergence. The cost is semantic: character tokens make correlations like sky↔blue much harder for attention to learn than word-level tokens do, so character models scale poorly to real quality even if they train fast.

The practical heuristic: choose the smallest tokenizer that still captures the structure you care about, and size your data to roughly the square of that vocabulary. A large tokenizer on a small model is doubly wrong — it both starves the model of bigram coverage and bloats the embedding table (a 50k vocab × 384-dim embedding alone is ~19M params, several times larger than the entire 1.8M-param model).

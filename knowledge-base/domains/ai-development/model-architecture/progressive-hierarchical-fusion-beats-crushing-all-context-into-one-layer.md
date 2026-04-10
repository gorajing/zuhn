---
id: INS-260410-268D
domain: ai-development
topic: model-architecture
title: Progressive hierarchical fusion beats crushing all context into one layer
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - wavenet
  - architecture
  - hierarchical-models
  - context-window
  - inductive-bias
sources:
  - type: youtube
    title: 'Building makemore Part 5: Building a WaveNet'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=t3YJ5hKiMQ0'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    WaveNet-style tree structures that fuse two elements at a time through
    multiple layers preserve more information than flattening all context into a
    single hidden layer.
  standard: >-
    The naive way to extend a character-level MLP from 3 to 8 characters of
    context is to concatenate all 8 embeddings and feed them into one wide
    hidden layer. Karpathy shows this 'squashes too much information too
    quickly' — the model collapses all positional structure into one matmul with
    no opportunity to build up intermediate representations. WaveNet's answer is
    progressive fusion: combine pairs of characters into bigram representations,
    then fuse pairs of bigrams into 4-grams, then 4-grams into 8-grams, in a
    tree-like hierarchy.


    The practical takeaway is that more context is not automatically more
    capacity. If your first layer immediately projects the entire context window
    into the model's latent space, you've wasted the depth you were going to add
    later. Architectures should give the network room to compose increasingly
    abstract representations across layers, not force it to do everything at the
    input boundary.


    This generalizes well beyond character LMs. The same principle shows up in
    CNNs (pooling pyramids), Transformers (where attention layers progressively
    build higher-order interactions), and any hierarchical representation
    learning: build structure bottom-up instead of demanding it appear all at
    once.
stance: >-
  Deep models should fuse context gradually across layers rather than
  concatenating all input tokens into a single wide first layer.
related:
  - INS-260323-3920
  - INS-260329-A171
  - INS-260329-5D8A
  - INS-260329-FAE2
  - PRI-260407-5465
  - INS-260405-06B0
  - INS-260410-9EEF
---
The naive way to extend a character-level MLP from 3 to 8 characters of context is to concatenate all 8 embeddings and feed them into one wide hidden layer. Karpathy shows this 'squashes too much information too quickly' — the model collapses all positional structure into one matmul with no opportunity to build up intermediate representations. WaveNet's answer is progressive fusion: combine pairs of characters into bigram representations, then fuse pairs of bigrams into 4-grams, then 4-grams into 8-grams, in a tree-like hierarchy.

The practical takeaway is that more context is not automatically more capacity. If your first layer immediately projects the entire context window into the model's latent space, you've wasted the depth you were going to add later. Architectures should give the network room to compose increasingly abstract representations across layers, not force it to do everything at the input boundary.

This generalizes well beyond character LMs. The same principle shows up in CNNs (pooling pyramids), Transformers (where attention layers progressively build higher-order interactions), and any hierarchical representation learning: build structure bottom-up instead of demanding it appear all at once.

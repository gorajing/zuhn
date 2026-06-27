---
id: INS-260605-FC5B
domain: ai-development
topic: model-architecture
title: >-
  No universal inference engine spans BERT, Qwen, and ColBERT — the forward pass
  must be re-implemented per architecture
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-architecture
  - flash-attention
  - positional-embeddings
  - inference-engine
  - open-source-models
sources:
  - type: youtube
    title: >-
      The Small Model Infrastructure Nobody Built (So We Did) — Filip Makraduli,
      Superlinked
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qdh_x-uRs9g'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    BERT, modern BERT, Qwen, and ColBERT differ in flash-attention
    implementation, positional embeddings (absolute lookup vs. rotary),
    normalization, and whether QKV can be fused, so a single engine can't serve
    them all without per-architecture forward-pass adaptation.
  standard: >-
    Committing to 'support hundreds of models' sounds like a config problem but
    is actually an architecture problem. Models that look interchangeable from
    the API differ in at least five structurally incompatible ways: how flash
    attention is implemented, how positional embeddings work (BERT uses absolute
    lookup, Qwen uses rotary), how normalization is applied, whether
    query/key/value can be fused (Qwen's grouped-query attention blocks fusion
    that BERT allows), and what the model even outputs — ColBERT emits multiple
    vectors (late interaction), and cross-encoders/rerankers output scores
    rather than vectors at all. 


    Because of this, there is no universal engine. Superlinked's solution was to
    set up a consistent way to re-implement the forward pass per architecture —
    adapting attention, handling variable-length padding, and accommodating
    fused vs. unfused QKV — using a mix of AI agents and humans to do the
    re-implementation work at scale. 


    The takeaway for anyone building multi-model infrastructure: model
    heterogeneity is hidden technical debt. The output shape (single vector vs.
    multi-vector vs. scores) and the attention internals leak into every layer
    of the serving stack.
stance: >-
  Supporting hundreds of open-source models requires re-implementing the forward
  pass per architecture, because flash attention, positional embeddings,
  normalization, and QKV fusion all differ.
related:
  - INS-260329-9CFE
  - INS-260410-3C37
  - INS-260410-B501
  - INS-260605-15E9
  - INS-260625-A7C5
  - INS-260627-8056
---
Committing to 'support hundreds of models' sounds like a config problem but is actually an architecture problem. Models that look interchangeable from the API differ in at least five structurally incompatible ways: how flash attention is implemented, how positional embeddings work (BERT uses absolute lookup, Qwen uses rotary), how normalization is applied, whether query/key/value can be fused (Qwen's grouped-query attention blocks fusion that BERT allows), and what the model even outputs — ColBERT emits multiple vectors (late interaction), and cross-encoders/rerankers output scores rather than vectors at all. 

Because of this, there is no universal engine. Superlinked's solution was to set up a consistent way to re-implement the forward pass per architecture — adapting attention, handling variable-length padding, and accommodating fused vs. unfused QKV — using a mix of AI agents and humans to do the re-implementation work at scale. 

The takeaway for anyone building multi-model infrastructure: model heterogeneity is hidden technical debt. The output shape (single vector vs. multi-vector vs. scores) and the attention internals leak into every layer of the serving stack.

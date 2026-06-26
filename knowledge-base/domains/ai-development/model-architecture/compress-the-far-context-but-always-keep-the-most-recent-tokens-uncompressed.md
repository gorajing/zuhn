---
id: INS-260625-A7C5
domain: ai-development
topic: model-architecture
title: 'Compress the far context, but always keep the most recent tokens uncompressed'
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - attention-architecture
  - long-context
  - recency
  - deepseek-v4
sources:
  - type: youtube
    title: The End of Standard Attention in LLMs? | DeepSeek-V4 Paper Explained
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=Bnr8_4IKFpw'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    DeepSeek-V4's two attention mechanisms both compress global context heavily
    yet always concatenate the raw most-recent tokens, because recent tokens
    carry the most next-token signal.
  standard: >-
    Both of DeepSeek-V4's attention variants follow the same invariant: compress
    the bulk of the sequence into a lossy summary, then splice the immediate
    recent tokens back in at full resolution. Heavily Compressed Attention
    collapses each 128-token group into a single learned entry
    (importance-weighted via softmax) but concatenates the sliding-window tokens
    right before the query. Compressed Sparse Attention compresses 4-to-1, runs
    a Top-k Lightning Indexer to keep only the ~1024 most relevant entries, then
    concatenates the last 128 uncompressed tokens. The compression captures a
    cheap global gist; the raw recent window preserves the fine-grained local
    context that heavy compression destroys.


    The non-obvious principle is that aggressive compression and
    recency-preservation are complementary, not competing, design choices. The
    model can afford to throw away most distant detail precisely because
    next-token prediction is dominated by the immediate context — so you spend
    your fidelity budget where it pays off. The same shape recurs in any system
    summarizing a long history: keep a compressed index of everything, but never
    compress the working set you are about to act on.


    For anyone designing retrieval, memory, or context-management systems, this
    is a transferable pattern: 'lossy global summary + lossless recent window'
    beats uniform compression and beats uniform full attention. The fixed final
    sequence length (1152 tokens for CSA regardless of input size) is what makes
    million-token contexts computationally tractable.
stance: >-
  Efficient long-context attention should aggressively compress distant context
  while preserving recent tokens at full resolution, because recency dominates
  next-token prediction.
related:
  - INS-260327-1563
  - INS-260327-1631
  - INS-260329-A45D
  - INS-260410-1789
  - INS-260514-F277
  - INS-260605-FC5B
  - INS-260625-1432
  - INS-260625-D148
  - INS-260625-BF8B
  - INS-260626-ACE3
---
Both of DeepSeek-V4's attention variants follow the same invariant: compress the bulk of the sequence into a lossy summary, then splice the immediate recent tokens back in at full resolution. Heavily Compressed Attention collapses each 128-token group into a single learned entry (importance-weighted via softmax) but concatenates the sliding-window tokens right before the query. Compressed Sparse Attention compresses 4-to-1, runs a Top-k Lightning Indexer to keep only the ~1024 most relevant entries, then concatenates the last 128 uncompressed tokens. The compression captures a cheap global gist; the raw recent window preserves the fine-grained local context that heavy compression destroys.

The non-obvious principle is that aggressive compression and recency-preservation are complementary, not competing, design choices. The model can afford to throw away most distant detail precisely because next-token prediction is dominated by the immediate context — so you spend your fidelity budget where it pays off. The same shape recurs in any system summarizing a long history: keep a compressed index of everything, but never compress the working set you are about to act on.

For anyone designing retrieval, memory, or context-management systems, this is a transferable pattern: 'lossy global summary + lossless recent window' beats uniform compression and beats uniform full attention. The fixed final sequence length (1152 tokens for CSA regardless of input size) is what makes million-token contexts computationally tractable.

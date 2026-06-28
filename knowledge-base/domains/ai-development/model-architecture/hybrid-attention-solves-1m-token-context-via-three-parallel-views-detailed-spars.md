---
id: INS-260514-F277
domain: ai-development
topic: model-architecture
title: >-
  Hybrid attention solves 1M-token context via three parallel views: detailed
  sparse, heavily compressed, and uncompressed-recent
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - attention-architecture
  - long-context
  - deepseek-v4
  - memory-efficiency
sources:
  - type: youtube
    title: The insane engineering of Deepseek V4
    author: AI Search
    url: 'https://youtu.be/XJUpuOBpT-4'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Three views: recent uncompressed (last 128 tokens), moderately compressed
    with sparse retrieval, heavily compressed (128:1) for big picture. Same as
    how a student studies.
  standard: >-
    DeepSeek V4's hybrid attention architecture: (1) Sliding window keeps the
    last ~128 tokens uncompressed with full fidelity — your 'recently-read
    pages.' (2) Compressed Sparse Attention (CSA) groups every 4 tokens into a
    compact representation, then a 'Lightning indexer' rapidly scores which
    compressed chunks are relevant to the current token and selectively
    retrieves only those — your 'highlighted notes.' (3) Heavily Compressed
    Attention (HCA) groups ~128 tokens into single representations, shrinking
    sequence length by orders of magnitude so the model can afford to look at
    everything — your 'chapter summaries.' Interleaved layer-by-layer, the model
    gets sharp immediate focus + broad understanding + deep-long-range retrieval
    at 3.7x lower FLOPs and 10x smaller KV cache than V3.2.


    Application: when designing context-window architectures or long-running
    agent loops, don't treat all past tokens as equally important. The
    student-studying metaphor is operationally precise: maintain a small
    uncompressed recent window, a moderately-compressed retrievable index, and a
    heavily-compressed summary layer. For Memric specifically: the same
    architectural pattern applies to firm-corpus retrieval — recent IC memos in
    full text, prior quarter compressed-but-retrievable, multi-year history as
    heavily-compressed principle summaries. This is more efficient than 'embed
    everything and search' approaches.
stance: >-
  DeepSeek V4's million-token context window works not by brute-forcing
  attention across all tokens but by maintaining three parallel views of the
  same document — selectively-retrieved compressed chunks (CSA),
  aggressively-compressed paragraph-level summaries (HCA), and uncompressed
  recent tokens (sliding window) — interleaved layer-by-layer, matching how
  humans actually study (recent pages, chapter summaries, highlighted sections).
related:
  - INS-260409-1078
  - INS-260625-A7C5
  - INS-260409-6560
  - INS-260628-BEC2
  - INS-260410-2FEE
---
DeepSeek V4's hybrid attention architecture: (1) Sliding window keeps the last ~128 tokens uncompressed with full fidelity — your 'recently-read pages.' (2) Compressed Sparse Attention (CSA) groups every 4 tokens into a compact representation, then a 'Lightning indexer' rapidly scores which compressed chunks are relevant to the current token and selectively retrieves only those — your 'highlighted notes.' (3) Heavily Compressed Attention (HCA) groups ~128 tokens into single representations, shrinking sequence length by orders of magnitude so the model can afford to look at everything — your 'chapter summaries.' Interleaved layer-by-layer, the model gets sharp immediate focus + broad understanding + deep-long-range retrieval at 3.7x lower FLOPs and 10x smaller KV cache than V3.2.

Application: when designing context-window architectures or long-running agent loops, don't treat all past tokens as equally important. The student-studying metaphor is operationally precise: maintain a small uncompressed recent window, a moderately-compressed retrievable index, and a heavily-compressed summary layer. For Memric specifically: the same architectural pattern applies to firm-corpus retrieval — recent IC memos in full text, prior quarter compressed-but-retrievable, multi-year history as heavily-compressed principle summaries. This is more efficient than 'embed everything and search' approaches.

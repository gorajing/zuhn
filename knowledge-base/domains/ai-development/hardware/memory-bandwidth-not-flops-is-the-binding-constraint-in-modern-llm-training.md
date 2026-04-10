---
id: INS-260410-3C37
domain: ai-development
topic: hardware
title: 'Memory bandwidth, not FLOPS, is the binding constraint in modern LLM training'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - gpu
  - flash-attention
  - memory-hierarchy
  - training-optimization
  - kernel-fusion
sources:
  - type: youtube
    title: Let's reproduce GPT-2 (124M)
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=l8pRSuU81PU'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Flash Attention does MORE floating-point operations than vanilla attention
    yet runs 7.6x faster, because it avoids materializing the T×T attention
    matrix in HBM.
  standard: >-
    Karpathy shows that on an A100, even well-tuned training workloads hit only
    ~60% hardware utilization — the tensor cores spend most of their time
    waiting for weights and activations to arrive from high-bandwidth memory.
    This flips the intuitive mental model: a 'faster' kernel is often one that
    does more arithmetic but fewer memory round-trips.


    Flash Attention is the canonical example. Counting flops, it's actually more
    expensive than the four-line PyTorch attention it replaces, but it's ~27%
    faster end-to-end on GPT-2 training because it fuses QK^T, softmax, and the
    value multiply into a single kernel that never writes the full attention
    matrix to HBM. The algorithmic trick (online softmax) existed at Nvidia four
    years before Flash Attention came out of Stanford — which suggests that
    'memory-aware algorithm rewrites' are a whole category of optimization that
    tools like torch.compile still cannot find automatically.


    The practical implication for anyone training models: when profiling, the
    first question isn't 'how many flops am I doing' but 'how many times am I
    moving this tensor across the memory hierarchy.' Lower precision (bf16,
    tf32) speeds things up not just because the math is cheaper but because each
    number takes fewer bits to move.
stance: >-
  Optimizing GPU utilization requires minimizing memory traffic, because tensor
  cores sit idle waiting for data far more than they run out of compute.
related:
  - INS-260327-1563
  - INS-260327-1631
  - INS-260409-FE00
  - INS-260329-4109
  - INS-260329-818A
---
Karpathy shows that on an A100, even well-tuned training workloads hit only ~60% hardware utilization — the tensor cores spend most of their time waiting for weights and activations to arrive from high-bandwidth memory. This flips the intuitive mental model: a 'faster' kernel is often one that does more arithmetic but fewer memory round-trips.

Flash Attention is the canonical example. Counting flops, it's actually more expensive than the four-line PyTorch attention it replaces, but it's ~27% faster end-to-end on GPT-2 training because it fuses QK^T, softmax, and the value multiply into a single kernel that never writes the full attention matrix to HBM. The algorithmic trick (online softmax) existed at Nvidia four years before Flash Attention came out of Stanford — which suggests that 'memory-aware algorithm rewrites' are a whole category of optimization that tools like torch.compile still cannot find automatically.

The practical implication for anyone training models: when profiling, the first question isn't 'how many flops am I doing' but 'how many times am I moving this tensor across the memory hierarchy.' Lower precision (bf16, tf32) speeds things up not just because the math is cheaper but because each number takes fewer bits to move.

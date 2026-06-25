---
id: INS-260625-5045
domain: ai-development
topic: llm-training
title: >-
  Long-context training needs a stack of orthogonal memory techniques, not one
  fix
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - long-context
  - memory-optimization
  - context-parallelism
  - training
  - systems
sources:
  - type: youtube
    title: >-
      Road to 5 Million Tokens: Breaking Barriers in Long Context Training — Max
      Ryabinin, Together AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TUnPNY4E2fw'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Reaching 3–5M token context required stacking FSDP, context parallelism,
    activation checkpointing, CPU offloading, sequence tiling, and buffer reuse
    — each alone is insufficient.
  standard: >-
    The talk is structured as an elimination ladder where each technique is
    shown reducing memory but failing to close the gap on its own. FSDP shards
    parameters; DeepSpeed Ulysses context parallelism distributes attention
    heads across GPUs (roughly 8x reduction) and lets you use the best Flash
    Attention kernels; activation checkpointing recomputes activations in the
    backward pass (another ~8x on activation usage); Unsloth-style CPU
    offloading moves transformer-block inputs off the GPU and prefetches during
    backprop at little throughput cost; Arctic-style sequence tiling chunks
    element-wise loss and MLP computations to avoid giant buffers. Only after
    all of these does 3 million tokens become possible, and their U-Pipe
    buffer-reuse technique is needed to push further.


    The actionable takeaway is to treat long-context training as a composition
    problem. These techniques are largely orthogonal — they attack different
    memory consumers — so they stack multiplicatively. Engineers should expect
    to combine many known methods rather than searching for a single silver
    bullet, and should understand what each one targets so the stack is
    assembled deliberately rather than by trial and error.
stance: >-
  No single optimization extends transformer context to millions of tokens; only
  a layered stack of orthogonal memory-saving techniques does.
related:
  - INS-260605-4A2D
  - INS-260624-F048
  - INS-260327-E016
  - PRI-260328-A65A
  - INS-260605-2531
---
The talk is structured as an elimination ladder where each technique is shown reducing memory but failing to close the gap on its own. FSDP shards parameters; DeepSpeed Ulysses context parallelism distributes attention heads across GPUs (roughly 8x reduction) and lets you use the best Flash Attention kernels; activation checkpointing recomputes activations in the backward pass (another ~8x on activation usage); Unsloth-style CPU offloading moves transformer-block inputs off the GPU and prefetches during backprop at little throughput cost; Arctic-style sequence tiling chunks element-wise loss and MLP computations to avoid giant buffers. Only after all of these does 3 million tokens become possible, and their U-Pipe buffer-reuse technique is needed to push further.

The actionable takeaway is to treat long-context training as a composition problem. These techniques are largely orthogonal — they attack different memory consumers — so they stack multiplicatively. Engineers should expect to combine many known methods rather than searching for a single silver bullet, and should understand what each one targets so the stack is assembled deliberately rather than by trial and error.

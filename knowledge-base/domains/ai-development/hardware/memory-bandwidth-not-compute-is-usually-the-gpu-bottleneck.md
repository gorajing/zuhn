---
id: INS-260605-C873
domain: ai-development
topic: hardware
title: 'Memory bandwidth, not compute, is usually the GPU bottleneck'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - gpu
  - memory-bandwidth
  - cuda-kernels
  - arithmetic-intensity
  - flash-attention
sources:
  - type: youtube
    title: >-
      Your Coding Agent Should Do AI System Engineering — Ben Burtenshaw,
      Hugging Face
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JomVvNDjGb8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Optimize kernels for memory movement, not flops, because a modern GPU spends
    most of its time idle waiting on tensors to arrive from slow memory.
  standard: >-
    Burtenshaw breaks deep-learning efficiency into three parts — compute
    (flops, the actual matrix math), memory (time moving tensors between slow
    and fast memory), and overhead (Python environment, PyTorch dispatch). The
    common assumption is that compute is the bottleneck because it does most of
    the math. That is wrong: in most cases memory is the bottleneck.


    The numbers make it concrete: an H100 can do roughly a petaflop per second
    of computation but has only ~3 TB/s of memory bandwidth, so the GPU often
    sits idle waiting for tensors to come back before it can compute on them.
    This is why custom optimized kernels like Flash Attention deliver their
    gains by increasing arithmetic intensity — doing more sums per memory read
    and write. The pattern is: move tensors across once, do as much math as
    possible in one go, then write back, i.e. 'keep the GPUs warm.'


    The takeaway for anyone optimizing inference (including agents writing
    kernels) is to target memory access patterns and arithmetic intensity first,
    not flop count. There is also low-hanging fruit: many published kernels
    aren't optimized for the specific hardware generation you happen to be
    running on, so a hardware-specific kernel can yield easy speedups
    (Burtenshaw cites a 94% speedup that he frames as a compatibility win, not a
    state-of-the-art result).
stance: >-
  On modern GPUs the dominant inference bottleneck is memory bandwidth rather
  than raw compute, so optimization should target arithmetic intensity.
related:
  - INS-260410-CB46
  - INS-260410-78D3
  - INS-260624-02AB
  - INS-260627-DC49
  - INS-260410-AC0B
  - INS-260605-048B
  - INS-260624-6B2C
  - INS-260627-1C6D
---
Burtenshaw breaks deep-learning efficiency into three parts — compute (flops, the actual matrix math), memory (time moving tensors between slow and fast memory), and overhead (Python environment, PyTorch dispatch). The common assumption is that compute is the bottleneck because it does most of the math. That is wrong: in most cases memory is the bottleneck.

The numbers make it concrete: an H100 can do roughly a petaflop per second of computation but has only ~3 TB/s of memory bandwidth, so the GPU often sits idle waiting for tensors to come back before it can compute on them. This is why custom optimized kernels like Flash Attention deliver their gains by increasing arithmetic intensity — doing more sums per memory read and write. The pattern is: move tensors across once, do as much math as possible in one go, then write back, i.e. 'keep the GPUs warm.'

The takeaway for anyone optimizing inference (including agents writing kernels) is to target memory access patterns and arithmetic intensity first, not flop count. There is also low-hanging fruit: many published kernels aren't optimized for the specific hardware generation you happen to be running on, so a hardware-specific kernel can yield easy speedups (Burtenshaw cites a 94% speedup that he frames as a compatibility win, not a state-of-the-art result).

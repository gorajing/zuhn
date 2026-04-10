---
id: INS-260410-34F5
domain: ai-development
topic: llm-training
title: >-
  Pad to powers of two even when it wastes memory — CUDA kernels reward 'nice
  numbers'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - cuda
  - performance
  - vocab-size
  - kernel-optimization
  - pragmatics
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
    Padding GPT-2's vocab from 50,257 to 50,304 (the next multiple of 64) added
    ~4% dead parameters but made training measurably faster with zero
    algorithmic change.
  standard: >-
    Karpathy calls this simultaneously 'the dumbest and the most brilliant
    optimization' in the whole video. CUDA kernels are written in blocks of 16,
    64, 128, etc.; when your tensor dimensions aren't clean multiples, the
    kernel falls back to a slower path with special-case boundary handling. The
    GPT-2 vocabulary size of 50,257 is prime and odd — maximally ugly. Rounding
    it up to 50,304 (nearest multiple of 64, and divisible by 128) wastes ~47
    rows of the embedding and LM-head matrices that will never be used, but the
    training step gets faster overall.


    The lesson generalizes. Whenever you find yourself choosing a tensor
    dimension — hidden size, batch size, sequence length, vocab padding — ask
    whether nudging it to a power of two or a clean multiple of 64/128 would put
    you on a faster kernel path. The 'wasted' memory is almost always cheaper
    than the slow path you're avoiding.


    This is an instance of a broader pattern: CUDA performance is full of
    discontinuities where small input changes trigger entirely different code
    paths. Profiling matters, but so does knowing which numbers the hardware
    actually wants to see.
stance: >-
  Rounding ugly dimensions up to nearby powers of two is a near-free
  optimization because CUDA kernels have fast paths for nice numbers and slow
  special-case handling for everything else.
related:
  - INS-260410-656B
  - INS-260410-B282
  - INS-260323-4E12
  - INS-260403-B73D
  - INS-260330-4267
---
Karpathy calls this simultaneously 'the dumbest and the most brilliant optimization' in the whole video. CUDA kernels are written in blocks of 16, 64, 128, etc.; when your tensor dimensions aren't clean multiples, the kernel falls back to a slower path with special-case boundary handling. The GPT-2 vocabulary size of 50,257 is prime and odd — maximally ugly. Rounding it up to 50,304 (nearest multiple of 64, and divisible by 128) wastes ~47 rows of the embedding and LM-head matrices that will never be used, but the training step gets faster overall.

The lesson generalizes. Whenever you find yourself choosing a tensor dimension — hidden size, batch size, sequence length, vocab padding — ask whether nudging it to a power of two or a clean multiple of 64/128 would put you on a faster kernel path. The 'wasted' memory is almost always cheaper than the slow path you're avoiding.

This is an instance of a broader pattern: CUDA performance is full of discontinuities where small input changes trigger entirely different code paths. Profiling matters, but so does knowing which numbers the hardware actually wants to see.

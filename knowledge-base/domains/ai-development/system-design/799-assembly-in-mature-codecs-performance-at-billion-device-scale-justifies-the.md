---
id: INS-260514-3100
domain: ai-development
topic: system-design
title: >-
  79.9% assembly in mature codecs — performance at billion-device scale
  justifies the cost of low-level engineering
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - assembly-optimization
  - scale-justified-low-level
  - av1-codec
  - cycles-matter
  - ffmpeg-performance
sources:
  - type: youtube
    title: >-
      FFmpeg: The Incredible Technology Behind Video on the Internet | Lex
      Fridman Podcast #496
    author: Lex Fridman
    url: 'https://youtu.be/nepKKz-MzFM'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AV1 codec: 79.9% assembly, 19.6% C, 0.5% other. Running on ~3 billion
    devices nonstop. At that scale, every cycle saved = billions of CPU-seconds.
    The 'compilers can do it' argument collapses. Scale justifies low-level.
  standard: >-
    Kieran Kunhya's empirical breakdown: 'AV1 codec: 79.9% assembly, 19.6% C,
    0.5% other. FFmpeg has 100,000 lines of assembly for all the codecs. AV1
    alone has 240,000. Every cycle matters. We're talking about probably 3
    billion devices which are going to decode video nonstop because 30% of
    Netflix is now in AV1, 50% of YouTube.' The structural argument against
    'compilers can do it': for two years, software engineers argued that
    compiler auto-vectorization and intrinsics would render hand-written
    assembly obsolete. The FFmpeg team tried this for years. Empirically,
    hand-written assembly outperforms compiler-generated code on critical paths
    in codecs by significant margins (often 2-10x). The compiler optimizes for
    general cases; codec authors optimize for known input distributions and
    specific hardware features (SIMD intrinsics, CPU pipelining behaviors,
    cache-line access patterns). The compiler doesn't know what the codec author
    knows. The scale-justification math: ~3 billion devices × 16 hours of video
    viewing per day × millions of cycles per frame = quadrillions of CPU-seconds
    annually. Even a 1% improvement in cycles-per-frame saves entire CPU-years
    of compute globally per day. The energy cost of bad assembly at this scale
    is measurable in megawatts. The economic cost in cloud-compute terms is
    hundreds of millions of dollars per year. The corollary for system
    designers: identify the scale threshold at which low-level optimization
    becomes justified. Rule of thumb: when your system serves >100M users or
    runs >1B operations daily, hand-optimized critical paths produce ROI that
    abstract-language code cannot. Below that scale, the maintenance cost of
    assembly outweighs the performance gain. The corollary for the AI inference
    world: AI inference at scale (similar magnitude to video decoding)
    increasingly justifies the same level of low-level engineering. The
    OpenAI/Anthropic infrastructure teams are reportedly writing custom CUDA
    kernels for similar reasons. Whisper, LLaMA inference, image generation
    models — all scale to billions of operations daily and justify the
    optimization investment. The corollary for engineering managers and CTOs:
    the level of low-level engineering investment should scale with the
    operational scale of the system. A startup at $1M ARR shouldn't be writing
    assembly. A company at $1B ARR with billion-device deployment should be
    investing heavily in performance engineering. Most companies under-invest at
    scale because the culture transition from 'make it work' to 'make it
    efficient' is hard. The cost of that under-investment is invisible but
    enormous — it's the difference between $50M/year compute costs and
    $500M/year compute costs at similar functionality. The corollary for
    individual engineers: deep performance engineering (CPU architecture, SIMD,
    cache behavior, branch prediction) is undervalued in the current market and
    likely to become more valued as AI inference scale increases. Investing in
    these skills positions you for the next decade of compute-intensive
    workloads.
stance: >-
  The 'don't optimize prematurely / compilers can do it' wisdom collapses at
  sufficient scale — AV1 codec running on billions of devices is 79.9%
  hand-written assembly because at that scale, every CPU cycle saved is
  multiplied across ~3 billion devices decoding video continuously; for any
  system serving high enough volume (~100M+ users, ~1B+ daily operations),
  low-level engineering produces returns that abstract-language approaches
  structurally cannot match.
related:
  - INS-260323-6761
  - INS-260330-202A
  - INS-260330-81A7
  - INS-260402-1FE9
  - INS-260405-DAC9
  - INS-260405-2688
  - PRI-260321-14D8
  - INS-260626-81BB
  - PRI-260403-9E80
  - INS-260605-3899
---
Kieran Kunhya's empirical breakdown: 'AV1 codec: 79.9% assembly, 19.6% C, 0.5% other. FFmpeg has 100,000 lines of assembly for all the codecs. AV1 alone has 240,000. Every cycle matters. We're talking about probably 3 billion devices which are going to decode video nonstop because 30% of Netflix is now in AV1, 50% of YouTube.' The structural argument against 'compilers can do it': for two years, software engineers argued that compiler auto-vectorization and intrinsics would render hand-written assembly obsolete. The FFmpeg team tried this for years. Empirically, hand-written assembly outperforms compiler-generated code on critical paths in codecs by significant margins (often 2-10x). The compiler optimizes for general cases; codec authors optimize for known input distributions and specific hardware features (SIMD intrinsics, CPU pipelining behaviors, cache-line access patterns). The compiler doesn't know what the codec author knows. The scale-justification math: ~3 billion devices × 16 hours of video viewing per day × millions of cycles per frame = quadrillions of CPU-seconds annually. Even a 1% improvement in cycles-per-frame saves entire CPU-years of compute globally per day. The energy cost of bad assembly at this scale is measurable in megawatts. The economic cost in cloud-compute terms is hundreds of millions of dollars per year. The corollary for system designers: identify the scale threshold at which low-level optimization becomes justified. Rule of thumb: when your system serves >100M users or runs >1B operations daily, hand-optimized critical paths produce ROI that abstract-language code cannot. Below that scale, the maintenance cost of assembly outweighs the performance gain. The corollary for the AI inference world: AI inference at scale (similar magnitude to video decoding) increasingly justifies the same level of low-level engineering. The OpenAI/Anthropic infrastructure teams are reportedly writing custom CUDA kernels for similar reasons. Whisper, LLaMA inference, image generation models — all scale to billions of operations daily and justify the optimization investment. The corollary for engineering managers and CTOs: the level of low-level engineering investment should scale with the operational scale of the system. A startup at $1M ARR shouldn't be writing assembly. A company at $1B ARR with billion-device deployment should be investing heavily in performance engineering. Most companies under-invest at scale because the culture transition from 'make it work' to 'make it efficient' is hard. The cost of that under-investment is invisible but enormous — it's the difference between $50M/year compute costs and $500M/year compute costs at similar functionality. The corollary for individual engineers: deep performance engineering (CPU architecture, SIMD, cache behavior, branch prediction) is undervalued in the current market and likely to become more valued as AI inference scale increases. Investing in these skills positions you for the next decade of compute-intensive workloads.

---
id: INS-260410-8243
domain: ai-development
topic: llm-behavior
title: Mixed-precision arithmetic silently breaks LLM sampling correctness
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mixed-precision
  - numerical-stability
  - sampling
  - tpu
  - compiler-bugs
sources:
  - type: blog
    title: A postmortem of three recent issues
    url: 'https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The xla_allow_excess_precision flag let XLA silently promote some bf16
    operations to fp32, causing different parts of the sampling pipeline to
    disagree about which token had the highest probability.
  standard: >-
    Anthropic's December 2024 'dropped top token' bug traced to a precision
    mismatch: models computed next-token probabilities in bf16, but XLA's
    default xla_allow_excess_precision=true let the fp32-native vector processor
    run some operations at fp32. When one code path computed the argmax in bf16
    and another in fp32, they occasionally disagreed on which token was highest
    — so the top token sometimes disappeared from consideration entirely.


    The deeper lesson is that 'mixed precision just works' is a polite fiction
    at the boundaries. Training frameworks have learned to tolerate precision
    noise in gradients, but inference sampling is exquisitely sensitive because
    a single bit-flip on the argmax path changes which token gets emitted.
    Optimizations that are safe in the aggregate (matmul precision, accumulator
    dtypes) can be catastrophic when applied to control-flow-adjacent ops like
    top-k.


    Anyone running custom inference stacks on TPUs or GPUs should audit their
    sampling kernels for precision consistency end-to-end, not just spot-check
    individual ops. And when a compiler flag defaults to 'I'll silently change
    your precision for speed', treat that flag as adversarial until proven
    otherwise.
stance: >-
  Compiler optimizations that upcast some sampling operations to fp32 while
  leaving others in bf16 can corrupt which token is selected as 'most probable'
  without raising any errors.
related:
  - INS-260402-8A7A
  - INS-260323-DB7B
  - INS-260410-199B
  - PRI-260403-50EF
  - INS-260410-BFCF
---
Anthropic's December 2024 'dropped top token' bug traced to a precision mismatch: models computed next-token probabilities in bf16, but XLA's default xla_allow_excess_precision=true let the fp32-native vector processor run some operations at fp32. When one code path computed the argmax in bf16 and another in fp32, they occasionally disagreed on which token was highest — so the top token sometimes disappeared from consideration entirely.

The deeper lesson is that 'mixed precision just works' is a polite fiction at the boundaries. Training frameworks have learned to tolerate precision noise in gradients, but inference sampling is exquisitely sensitive because a single bit-flip on the argmax path changes which token gets emitted. Optimizations that are safe in the aggregate (matmul precision, accumulator dtypes) can be catastrophic when applied to control-flow-adjacent ops like top-k.

Anyone running custom inference stacks on TPUs or GPUs should audit their sampling kernels for precision consistency end-to-end, not just spot-check individual ops. And when a compiler flag defaults to 'I'll silently change your precision for speed', treat that flag as adversarial until proven otherwise.

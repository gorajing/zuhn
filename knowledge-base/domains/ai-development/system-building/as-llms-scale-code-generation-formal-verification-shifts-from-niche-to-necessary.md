---
id: INS-260625-1E2C
domain: ai-development
topic: system-building
title: >-
  As LLMs scale code generation, formal verification shifts from niche to
  necessary for code that needs guarantees
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - formal-verification
  - lean
  - code-correctness
  - theorem-proving
  - ai-for-math
sources:
  - type: youtube
    title: >-
      Self-Play for LLMs, AI for Biology, Formal Verification, and More | YC
      Paper Club
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=3rWSvrFahIY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    'Vibe coding' produces unverified code at scale; the shift is toward
    'verifiable coding' where a proof shows code satisfies its spec — Lean is
    becoming the substrate, and progress on formal math and proof benchmarks is
    roughly exponential.
  standard: >-
    Robert George argues for a 'new era of verified intelligence.' Informal math
    — and most coding — is flexible and littered with unstated steps ('proof by
    intimidation'), whereas formal systems like Lean force every step explicit
    and cannot be fooled by a handwave; the kernel either accepts the proof or
    it doesn't. The last two years show steep, near-exponential progress: IMO
    gold via formal and DSL-based approaches, Aristotle (Harmonic) clearing
    PutnamBench, and AI-claimed solutions to long-open Erdős problems now
    increasingly accompanied by formal verification in the loop.


    The argument extends from math to software. Bugs are a roughly
    trillion-dollar problem, LLMs now generate code prolifically, and volume
    amplifies bug count — 'LLMs can write code, but can they prove it's
    correct?' Program verification reframes a proof as evidence that code
    satisfies a human-written specification, and Lean doubles as a fast
    functional programming language, enabling tools like Bridge, the CS-spec
    library CSL, and a Lean-native tensor framework ('torch') that can prove
    flash-attention is spec-equivalent to standard attention or formalize
    floating-point non-determinism down to the CUDA-kernel level. The framing
    (borrowed from Max Tegmark) is a shift from 'wide coding' to 'very
    [verifiable] coding.' The actionable implication: for code that genuinely
    needs guarantees — safety-critical, financial, infrastructure — invest in
    verification tooling now, because formal methods are poised to ride the
    LLM-codegen wave from niche to mainstream.
stance: >-
  LLM-generated code at scale will make formal verification a mainstream
  engineering requirement rather than an academic curiosity, because the volume
  of plausible-but-buggy code outpaces human review.
related:
  - INS-260327-7F64
  - INS-260328-B19D
  - INS-260329-500E
  - INS-260329-1ACD
  - INS-260423-E64B
  - INS-260505-2FFB
  - INS-260514-D3CB
  - INS-260514-F565
  - INS-260605-89B0
  - PRI-260328-8E01
---
Robert George argues for a 'new era of verified intelligence.' Informal math — and most coding — is flexible and littered with unstated steps ('proof by intimidation'), whereas formal systems like Lean force every step explicit and cannot be fooled by a handwave; the kernel either accepts the proof or it doesn't. The last two years show steep, near-exponential progress: IMO gold via formal and DSL-based approaches, Aristotle (Harmonic) clearing PutnamBench, and AI-claimed solutions to long-open Erdős problems now increasingly accompanied by formal verification in the loop.

The argument extends from math to software. Bugs are a roughly trillion-dollar problem, LLMs now generate code prolifically, and volume amplifies bug count — 'LLMs can write code, but can they prove it's correct?' Program verification reframes a proof as evidence that code satisfies a human-written specification, and Lean doubles as a fast functional programming language, enabling tools like Bridge, the CS-spec library CSL, and a Lean-native tensor framework ('torch') that can prove flash-attention is spec-equivalent to standard attention or formalize floating-point non-determinism down to the CUDA-kernel level. The framing (borrowed from Max Tegmark) is a shift from 'wide coding' to 'very [verifiable] coding.' The actionable implication: for code that genuinely needs guarantees — safety-critical, financial, infrastructure — invest in verification tooling now, because formal methods are poised to ride the LLM-codegen wave from niche to mainstream.
